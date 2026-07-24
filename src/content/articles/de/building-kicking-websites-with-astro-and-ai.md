---
publishDate: 2026-06-03
draft: false
featured: true
title: 'Beeindruckende Websites mit Astro und KI bauen'
excerpt: 'Wir haben dieses Boilerplate KI-freundlich gestaltet, sodass dein Agent sofort weiß, wie er damit arbeiten kann - inklusive Sicherheit.'
image:
  file: '@images/content/articles/ai.jpg'
  alt: 'Ein Astronaut trifft im Weltall auf KI'
tags: ['astro', 'llm', 'claude', 'codex', 'copilot', 'open-code', 'pi']
categories: ['web-development', 'ai', 'productivity']
---

Hier ein Geständnis: Das meiste dieses Boilerplates wurde gebaut, während KI direkt neben uns saß. 🤩

Nicht als Gimmick - als echter Workflow. Und der Grund, warum das so gut funktioniert hat, ist, dass wir Stardrive vom allerersten Commit an LLM-freundlich gestaltet haben.

Lass mich erklären, was das heißt - und wie du es nutzen kannst, um beeindruckende Websites in Rekordzeit zu bauen.

## 💔 Das Problem mit "KI-bereiten" Projekten

Du hast es wahrscheinlich schon probiert. Du öffnest ein Repo, startest deinen Lieblings-KI-Coding-Agent (Copilot, Claude, Codex, Cursor - wähl dein Gift) und bittest ihn, "eine Blog-Seite hinzuzufügen."

Was als Nächstes passiert, ist meistens ein Chaos.

Der Agent rät bei Konventionen. Er erfindet eine Ordnerstruktur. Er dupliziert Logik, die schon existiert. Er übersieht das i18n-Setup. Er hardcodet Strings, die in Übersetzungsdateien gehören. Und du verbringst die nächste Stunde damit, hinter ihm aufzuräumen.

Das Problem ist nicht die KI. Das Problem ist, dass die meisten Projekte der KI nicht _sagen_, wie sie funktionieren.

Und es kommt noch schlimmer. Wenn du von einem leeren Repo startest, fehlt der KI nicht nur die Anleitung - ihr fehlt das ganze Gerüst. Es gibt keine Routing-Konvention, also erfindet sie eine. Es gibt kein i18n-System, also hardcodet sie Strings. Es gibt keine Security-Grenze, also legt sie Secrets ab, wo sie nicht hingehören. Es gibt kein Accessibility-Muster, also lässt sie ARIA-Labels weg. Jede dieser Lücken wird zu einer schlechten architektonischen Entscheidung, mit der du später leben (und refactoren) darfst.

Die KI ist nicht faul oder dumm. Sie arbeitet nur ohne Guardrails. Und diese Guardrails _während_ die KI schon Code generiert, zu bauen, ist ein Albtraum - du jagst einem beweglichen Ziel hinterher. 😓

## 🩹 Was Stardrive anders macht

Wir haben einen anderen Weg gewählt. Stardrive liefert explizite Anweisungen für jedes LLM, das es anfasst.

Im Root findest du:

- `AGENTS.md` - der Einstiegspunkt. Er sagt dem Agenten, in welchem Modus er ist (Boilerplate-Wartung vs. Projekt-Aufbau), wo er Setup-Guides findet und welche Konventionen er befolgen soll.
- `STARDRIVE_AGENT_MODE.md` - ein einzelnes Schlüsselwort, das das Verhalten des Agenten umschaltet.
- `.ai/SETUP.md`, `.ai/CONFIG_GUIDE.md`, `.ai/PLAN.md` - ein geführter Onboarding-Flow, der eine lebende Checkliste für dein Projekt erstellt.
- `CLAUDE.md` und `.github/copilot-instructions.md` - damit verschiedene Agenten alle vom selben Kontext starten.

Dazu folgt der Codebase selbst konsistenten Mustern: Komponenten sind grob und gut benannt, i18n-Strings leben an vorhersagbaren Orten, Styling-Konventionen sind dokumentiert, und es gibt einen klaren Entscheidungsbaum, wann man plain HTML, VanillaJS, SolidJS oder etwas Schwereres nutzt.

Das Ergebnis? Wenn du einen Agenten auf Stardrive loslässt, _weiß er sofort, was zu tun ist_. Kein Raten. Kein Babysitten.

Aber hier kommt der größere Gewinn: Die ganze Verdrahtung ist schon erledigt. Das Routing, das i18n, die Security-Grenzen, die Accessibility-Muster, die SEO-Verkabelung, die Caching-Strategie, die Komponenten-Konventionen - alles ist an Ort und Stelle, bevor die KI eine einzige Zeile schreibt. Die Guardrails sind nicht etwas, das du nebenbei mit der KI baust. Sie sind schon da, fest im Fundament eingebacken.

Das ist der echte Unterschied. Wenn du von Grund auf neu startest, verbringst du und die KI die meiste Zeit damit, _das Gerüst zu bauen_ - über Struktur zu streiten, architektonische Fehler zu beheben, Konventionen nachträglich auf bereits generierten Code draufzusetzen. Mit Stardrive gibt es diese Phase schlicht nicht. Das Gerüst steht. Also kannst du dich mit der KI auf den Spaßteil konzentrieren: echte Features. 🚀

## 🛠️ Wie du es tatsächlich nutzt

Hier ist ein typischer Workflow:

1. **Klonen und konfigurieren.** Durchlaufe den Setup-Flow - der Agent führt dich durch, stellt die richtigen Fragen und schreibt eine `PLAN.md`.
2. **Nach Features fragen.** "Füge eine Pricing-Seite hinzu." "Übersetze die About-Seite auf Italienisch." "Binde ein Newsletter-Formular ein." Der Agent folgt den Konventionen und produziert Code, der passt.
3. **Reviewen und shippen.** Führe `npm run check` aus, um zu linten und type-checken. Lokal previewen. Deployen.

Das war's. Das Boilerplate übernimmt Routing, i18n, SEO, Accessibility, strukturierte Daten, Caching - all das Zeug, das normalerweise deine Zeit frisst. Du konzentrierst dich auf die eigentlichen Inhalte und Features.

## 🔒 Sicherheit inklusive

Eine Sache, die uns sehr wichtig ist: KI-generierter Code kann Sicherheitsprobleme einführen, wenn man nicht aufpasst. Stardrive mindert das durch:

- Keine Secrets im Frontend (Astro ist ein Frontend-Framework - sensible Arbeit gehört in ein echtes Backend).
- Sinnvolle Security-Header und CSP-freundliche Defaults.
- Klare Grenzen dafür, was in diesem Repo leben soll und was nicht.

Dem Agenten wird klar gesagt, wo diese Grenzen sind. So macht er viel seltener etwas Dummes.

## 🚀 Das Fazit

Eine Website mit KI zu bauen muss nicht heißen: "hoffen, dass der Agent nichts kaputt macht." Mit dem richtigen Fundament ist es ein wirklich schneller, angenehmer Workflow.

Stardrive ist dieses Fundament. Klone es, lass deinen Agenten darauf los und geh und bau etwas Beeindruckendes. 🎉
