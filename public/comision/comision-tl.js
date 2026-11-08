/* Calcul comision Team Leader: citește exportul de vânzări și completează șablonul de comisioane.
   Rulează doar în browser (fișierele nu sunt trimise nicăieri). Necesită ExcelJS. */
(function (root) {
  "use strict";

  const LUNI = ["Ianuarie","Februarie","Martie","Aprilie","Mai","Iunie","Iulie","August","Septembrie","Octombrie","Noiembrie","Decembrie"];

  /* ---------- helpers ---------- */
  function val(v) {
    if (v == null) return null;
    if (v instanceof Date) return v;
    if (typeof v === "object") {
      if ("result" in v) return v.result;
      if (v.richText) return v.richText.map(t => t.text).join("");
      if ("text" in v) return v.text;
      if (v.error) return null;
    }
    return v;
  }
  const str = v => { v = val(v); return v == null ? "" : String(v).trim(); };
  const num = v => { v = val(v); if (typeof v === "number") return v; const n = parseFloat(String(v || "").replace(",", ".")); return isNaN(n) ? 0 : n; };
  const norm = s => str(s).normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[-\s]+/g, " ").toUpperCase().trim();
  function toDate(v) {
    v = val(v);
    if (v instanceof Date) return v;
    if (typeof v === "number") return new Date(Math.round((v - 25569) * 86400000));
    const m = String(v || "").match(/(\d{1,2})[./-](\d{1,2})[./-](\d{4})/);
    return m ? new Date(Date.UTC(+m[3], +m[2] - 1, +m[1])) : null;
  }
  const titleCase = s => str(s).toLowerCase().replace(/(^|[\s-])(\p{L})/gu, (a, b, c) => b + c.toUpperCase());

  /* ---------- 1. read the sales export ---------- */
  const COLS = {
    client: [/NUME/], invoice: [/FACTURA/, /ORDER/], date: [/^DATA/], item: [/^ITEM/], qty: [/QTY/],
    accName: [/^ACCESORII/], consultant: [/^CONSULTANT/], tl: [/^TL$/], status: [/^STATUS/],
    amount: [/^SUMA/], accNet: [/CONTRAVALOARE/], warranty: [/GARANTIE/]
  };
  const FALLBACK = { client: 1, invoice: 2, date: 3, item: 4, qty: 5, accName: 7, consultant: 8, tl: 9, status: 10, amount: 12, accNet: 14, warranty: 16 };

  function parseSales(wb) {
    const ws = wb.worksheets[0];
    let headerRow = 1, map = {};
    for (let r = 1; r <= Math.min(10, ws.rowCount); r++) {
      const found = {};
      ws.getRow(r).eachCell((c, col) => {
        const h = norm(c.value);
        for (const k in COLS) if (!found[k] && COLS[k].some(re => re.test(h))) found[k] = col;
      });
      if (found.consultant && found.item) { headerRow = r; map = found; break; }
    }
    map = Object.assign({}, FALLBACK, map);
    const rows = [];
    for (let r = headerRow + 1; r <= ws.rowCount; r++) {
      const g = k => ws.getRow(r).getCell(map[k]).value;
      if (!str(g("invoice")) && !str(g("item"))) continue;
      rows.push({
        client: str(g("client")), invoice: str(g("invoice")), date: toDate(g("date")),
        item: str(g("item")), qty: num(g("qty")) || 1, accName: str(g("accName")),
        consultant: str(g("consultant")), tl: str(g("tl")), status: str(g("status")),
        amount: num(g("amount")), accNet: num(g("accNet")), warranty: num(g("warranty"))
      });
    }
    if (!rows.length) throw new Error("Nu am găsit vânzări în fișier. Verifică dacă ai încărcat exportul corect.");
    return rows;
  }

  /* ---------- 2. rates from the template ("Comisioane TL" sheet) ---------- */
  function readRates(wb) {
    const ws = wb.getWorksheet("Comisioane TL");
    const rates = { personal: [{ upTo: 4, base: 145, dd: 30 }, { upTo: Infinity, base: 50, dd: 0 }],
      volume: [{ from: 3, rate: 60 }, { from: 10, rate: 70 }, { from: 15, rate: 80 }, { from: 20, rate: 90 }], acc: 0.15 };
    if (!ws) return rates;
    const c = a => num(ws.getCell(a).value);
    if (c("C56")) rates.personal = [{ upTo: 4, base: c("C56"), dd: c("D56") }, { upTo: Infinity, base: c("C57"), dd: c("D57") }];
    const vol = [];
    for (let r = 17; r <= 35; r++) {
      const from = /plus/i.test(str(ws.getCell("B" + r).value)) ? 21 : c("B" + r), rate = c("C" + r);
      if (from && rate && (!vol.length || vol[vol.length - 1].rate !== rate)) vol.push({ from, rate });
    }
    if (vol.length) rates.volume = vol;
    if (c("B45")) rates.acc = c("B45");
    return rates;
  }
  const volumeRate = (n, rates) => rates.volume.reduce((acc, t) => (n >= t.from ? t.rate : acc), 0);

  /* ---------- 3. work out the commissions ---------- */
  const isTM = it => /^TM\s?\d/i.test(it);
  const isWarranty = it => /GARAN/i.test(norm(it));
  const isAcc = it => /^ACCESORII/i.test(norm(it));
  const isEP = it => /^EP\b/i.test(norm(it));

  function compute(rows, rates) {
    const tlNames = {};
    rows.forEach(r => { if (r.tl) tlNames[r.tl] = (tlNames[r.tl] || 0) + 1; });
    const tlRaw = Object.keys(tlNames).sort((a, b) => tlNames[b] - tlNames[a])[0] || "";
    const tlKey = norm(tlRaw);
    const own = r => norm(r.consultant) === tlKey;

    // month = most common invoice month
    const mc = {};
    rows.forEach(r => { if (r.date) { const k = r.date.getUTCFullYear() + "-" + r.date.getUTCMonth(); mc[k] = (mc[k] || 0) + 1; } });
    const mk = Object.keys(mc).sort((a, b) => mc[b] - mc[a])[0];
    const month = mk ? new Date(Date.UTC(+mk.split("-")[0], +mk.split("-")[1], 1)) : new Date();

    // group personal invoices (TM + warranty)
    const byInv = new Map();
    const inv = r => { if (!byInv.has(r.invoice)) byInv.set(r.invoice, { client: r.client, invoice: r.invoice, date: r.date, tm: 0, wSum: 0, wCount: 0 }); return byInv.get(r.invoice); };
    rows.filter(own).forEach(r => {
      if (isTM(r.item)) inv(r).tm += r.qty;
      else if (isWarranty(r.item)) { const i = inv(r); i.wSum += r.warranty; i.wCount += r.qty; }
    });
    const personal = [...byInv.values()].sort((a, b) => (a.date || 0) - (b.date || 0));
    let n = 0;
    personal.forEach(p => {
      p.base = 0; p.ddCount = 0; p.ddSum = 0;
      for (let i = 0; i < p.tm; i++) {
        n++;
        const t = rates.personal.find(x => n <= x.upTo);
        p.base += t.base;
        if (t.dd) { p.ddCount++; p.ddSum += t.dd; }
      }
    });

    // team volume
    const team = rows.filter(r => !own(r) && isTM(r.item)).sort((a, b) => (a.date || 0) - (b.date || 0));
    const teamTM = team.reduce((s, r) => s + r.qty, 0);
    const vRate = volumeRate(teamTM, rates);

    // accessories: only the paid ones the TL sold personally
    const acc = rows.filter(r => isAcc(r.item) && r.accNet > 0 && own(r));

    const notes = [];
    const ep = rows.filter(r => isEP(r.item));
    if (ep.length) notes.push("Persoane noi intrate cu EP (verifică dacă se cuvine comision de recrutare / training): " +
      ep.map(r => r.client + " – recrutat de " + titleCase(r.consultant) + " (" + r.invoice + ")").join("; ") + ".");
    if (teamTM > 0 && vRate === 0) notes.push("Echipa are sub " + rates.volume[0].from + " TM vândute, deci nu se acordă comision de volum.");
    const teamW = rows.filter(r => !own(r) && isWarranty(r.item));
    if (teamW.length) notes.push("Extragaranțiile vândute de consultanți (" + teamW.length + ") rămân la consultanți și nu apar în fișa TL.");
    notes.push("Comisioanele LEAD, recrutare, training și split nu reies din export – completează-le manual dacă e cazul.");

    const personalEUR = personal.reduce((s, p) => s + p.base + p.ddSum + p.wSum, 0);
    const volumeEUR = teamTM * vRate;
    const accRON = acc.reduce((s, r) => s + r.accNet * rates.acc, 0);
    return { tlRaw, month, personal, team, teamTM, vRate, acc, notes, rates,
      totals: { personalTM: n, personalEUR, volumeEUR, eur: personalEUR + volumeEUR, accRON } };
  }

  /* ---------- 4. fill the template ---------- */
  const CLEAR = {
    "COM. TM": [2, 11, "A", "K"], "COM. LEAD": [2, 11, "A", "K"], "COM. RECRUTARE": [2, 20, "A", "H"],
    "COM. TRAINING": [2, 16, "A", "H"], "COM. VOLUM TL": [2, 23, "A", "I"], "ACCESORII": [2, 25, "A", "I"]
  };
  const colN = L => L.charCodeAt(0) - 64;

  function fill(wb, res, info) {
    const name = info.name, month = res.month;
    // clear previous month's rows
    for (const s in CLEAR) {
      const ws = wb.getWorksheet(s); if (!ws) continue;
      const [a, b, c1, c2] = CLEAR[s];
      for (let r = a; r <= b; r++) for (let c = colN(c1); c <= colN(c2); c++) ws.getRow(r).getCell(c).value = null;
    }
    const tr = wb.getWorksheet("COM. TRAINING"); if (tr) tr.getCell("C996").value = null;
    const ac0 = wb.getWorksheet("ACCESORII"); if (ac0) ac0.getCell("W4").value = null;

    const cap = (list, max, what) => { if (list.length > max) throw new Error("Prea multe rânduri pentru " + what + " (" + list.length + ", maxim " + max + " în șablon)."); };

    // COM. TM
    const tm = wb.getWorksheet("COM. TM");
    cap(res.personal, 10, "vânzări personale");
    res.personal.forEach((p, i) => {
      const r = tm.getRow(2 + i);
      [name, month, p.client, p.invoice, p.date, p.tm || null, p.base || null, p.ddCount || null, p.ddSum || null, p.wSum || null, p.wCount || null]
        .forEach((v, j) => (r.getCell(1 + j).value = v));
    });
    for (let r = 2; r <= 11; r++) tm.getCell("L" + r).value = { formula: `SUM(G${r}+I${r}+J${r})` };

    // COM. VOLUM TL
    const vo = wb.getWorksheet("COM. VOLUM TL");
    cap(res.team, 22, "vânzările echipei");
    res.team.forEach((t, i) => {
      const r = 2 + i, row = vo.getRow(r);
      [name, month, t.consultant, t.client, t.invoice, t.date, t.qty, res.vRate].forEach((v, j) => (row.getCell(1 + j).value = v));
      row.getCell(9).value = { formula: `G${r}*H${r}` };
    });

    // ACCESORII
    const ac = wb.getWorksheet("ACCESORII");
    cap(res.acc, 24, "accesorii");
    const pct = Math.round(res.rates.acc * 100);
    res.acc.forEach((a, i) => {
      const r = 2 + i, row = ac.getRow(r);
      [name, month, a.client, a.invoice, a.date, a.accName, a.accNet].forEach((v, j) => (row.getCell(1 + j).value = v));
      row.getCell(8).value = { formula: `G${r}*${pct}%` };
    });
    ac.getCell("I2").value = { formula: "SUM(H2:H25)" };

    // TOTAL + DEVIZ
    const to = wb.getWorksheet("TOTAL");
    to.getCell("A4").value = name; to.getCell("B4").value = month;
    if (info.rate) to.getCell("B1").value = info.rate;
    const dv = wb.getWorksheet("DEVIZ");
    dv.getCell("F5").value = name;
    if (info.entity) dv.getCell("F7").value = info.entity;
    if (info.invoiceNo) dv.getCell("F9").value = info.invoiceNo;
    if (info.rate) dv.getCell("D11").value = info.rate;
    dv.getCell("N31").value = name.split(/\s+/)[0] || null;

    // drop cached results so Excel recalculates everything on open
    wb.eachSheet(ws => ws.eachRow({ includeEmpty: false }, row => row.eachCell(c => {
      const v = c.value;
      if (v && typeof v === "object" && (v.formula || v.sharedFormula)) {
        if (v.formula) c.value = { formula: v.formula };
        else c.value = { sharedFormula: v.sharedFormula };
      }
    })));
    wb.calcProperties = Object.assign({}, wb.calcProperties, { fullCalcOnLoad: true });
    return wb;
  }

  function fileName(name, month) {
    return name.replace(/\s+/g, "_") + "_" + LUNI[month.getUTCMonth()] + "_" + month.getUTCFullYear() + ".xlsx";
  }

  root.ComisionTL = { parseSales, readRates, compute, fill, fileName, titleCase, LUNI };
})(typeof window !== "undefined" ? window : globalThis);
