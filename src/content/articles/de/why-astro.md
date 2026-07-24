---
publishDate: 2026-06-02
draft: false
featured: false
title: 'Warum wir Astro für unsere Websites einsetzen'
excerpt: 'Dieses Boilerplate basiert aus Performance-, Sicherheits- und Kostengründen auf Astro. Lies die ganze Geschichte.'
tags: ['astro', 'js', 'ts', 'react', 'vue', 'svelte', 'solidjs']
categories: ['web-development', 'infrastructure', 'it-security']
---

Wer 2026 Websites baut, hat viele Optionen. React/Next.js. Vue/Nuxt. Svelte/SvelteKit. Webflow. Wix. WordPress. Und natürlich Astro.

Warum also haben wir Astro als Grundlage für Stardrive gewählt? Lass uns darüber reden. 🚀

## 💔 Das Problem mit den üblichen Verdächtigen

Seien wir ehrlich - die meisten "modernen" Web-Stacks kommen mit einer Steuer.

**React/Next.js** ist mächtig, aber es liefert standardmäßig viel JavaScript an den Browser. Performance-Tuning wird zum Vollzeitjob. Das Bundle wächst. Die Waterfalls vermehren sich. Und bevor du dich versiehst, lädt deine Marketing-Seite wie ein Dashboard.

**Vue/Nuxt** und **Svelte/SvelteKit** sind netter bei der Developer Experience, hängen aber immer noch stark am client-seitigen Rendering. Super für Apps. Übertrieben für die meisten Websites.

**Webflow** nutzt übrigens Astro unter der Haube (was viel sagt). Es ist in Ordnung für Nicht-Devs, die per Drag-and-Drop arbeiten wollen - für Entwickler ist es aber frustrierend. Du kontrollierst den Code nicht, kannst ihn nicht vernünftig versionieren und stößt schnell an die Decke.

**Wix**? Schlechte UX für Admins, aufgeblähter Output, wenig Kontrolle. Ein Performance-Albtraum. Nächstes.

**WordPress** betreibt einen riesigen Teil des Webs - und ist out-of-the-box ein Sicherheitsrisiko. Es ist nur mit einem Berg an Plugins schnell, und jedes Plugin bringt Wartungskosten und eine neue Angriffsfläche. Es aktuell und sicher zu halten, ist ein eigener Job.

Also, was ist die Alternative?

## 🩹 Enter Astro

Astro dreht den Standard um. Statt eine JavaScript-Laufzeit an jeden Besucher auszuliefern, rendert es deine Seiten zur Build-Zeit zu statischem HTML. Der Browser bekommt schlichtes, schnelles, zugängliches Markup. JavaScript lädt nur dort, wo du es wirklich brauchst - und nur so viel, wie du forderst.

Das Ergebnis:

- **Performance.** Seiten sind winzig. Sie laden sofort. Core Web Vitals sehen out-of-the-box gut aus.
- **Sicherheit.** Es gibt keine Laufzeit, die man angreifen kann. Keine Datenbank, die man patchen muss. Kein Plugin-Update, das man vergisst. Statisches HTML ist so sicher wie es nur geht.
- **Kosten.** Statische Dateien sind billig zu hosten. Oft kostenlos. Cloudflare, Netlify, Vercel, GitHub Pages - such dir eins aus, fertig.
- **Developer Experience.** Du schreibst Komponenten in `.astro`-Dateien (HTML-first, mit optionalem JS) und kannst trotzdem React, Vue, Svelte oder SolidJS einbinden, wo es wirklich Sinn macht. Astro zwingt dir kein Framework auf.

Und wenn du dynamisches Verhalten brauchst - Formulare, On-Demand-Rendering, API-Routen - hat Astros SSR-Adapter dich abgedeckt. Wir nutzen Cloudflare Workers, was Edge-Performance und ein großzügiges Free-Tier bedeutet.

## 🤩 Warum es zu Stardrive passt

Stardrive ist ein Boilerplate für inhaltsgetriebene Websites: Blogs, Docs, Marketing-Seiten, Events. Diese brauchen keine SPA. Sie brauchen Geschwindigkeit, Accessibility und ein Fundament, das nicht gegen dich arbeitet.

Astro gibt uns all das, plus:

- File-basiertes Routing, das einfach Sinn ergibt.
- Eine Content-Collections-API, die dein Markdown typisiert und validiert.
- First-class i18n-Support.
- Eingebaute Sitemaps, RSS und Bild-Optimierung.
- Eine Island-Architektur, die uns Interaktivität erlaubt, ohne im client-seitigen JS zu ertrinken.

Hätten wir Stardrive auf Next.js bauen können? Klar. Aber es wäre langsamer, schwerer und schwerer zu pflegen gewesen. Und wir würden Zeit mit Performance-Workarounds statt mit Features verbringen.

## 🎯 Das Fazit

Astro ist nicht das richtige Werkzeug für jedes Projekt. Wenn du eine komplexe Web-App mit tonnenweise State baust, greif zu etwas anderem. Aber für Websites - die Art, die die meisten von uns tatsächlich bauen - ist es schwer zu schlagen.

Deshalb läuft Stardrive auf Astro. Standardmäßig schnell. Von Grund auf sicher. Billig im Betrieb. Und eine Freude, damit zu arbeiten. 🚀
