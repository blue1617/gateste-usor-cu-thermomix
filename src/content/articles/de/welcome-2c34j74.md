---
publishDate: 2026-06-01
updatedDate: 2026-06-04
draft: false
featured: false
slug: 'de/welcome'
title: 'Willkommen bei Astro Stardrive'
excerpt: 'Wir haben ein Boilerplate auf Basis von Astro gebaut, das dir Superkräfte beim Erstellen von Websites verleiht. Komplett kostenlos. Open Source. LLM-freundlich.'
image:
  file: '@images/content/articles/welcome-stardrive.jpg'
  alt: 'Astronauten, die in die Kamera winken'
tags: ['astro', 'js', 'ts', 'cloudflare', 'react', 'vue', 'svelte', 'solidjs', 'tailwind', 'directus', 'supabase', 'github']
categories: ['web-development', 'infrastructure', 'ai', 'it-security', 'productivity']
author:
  name: 'Jens Kürschner'
  url: 'https://jekuer.com'
tocDepth: 2
---

Hallo! 👋

Du hast Astro Stardrive gefunden. Willkommen!

Wer schon mal eine Website von Grund auf neu gestartet hat, kennt den Schmerz. Du suchst dir ein Framework aus, konfigurierst den Build, richtest Routing ein, kämpfst mit i18n, baust einen Blog, eine Sitemap, einen RSS-Feed, ein Cookie-Banner, einen Theme-Switcher, strukturierte Daten, Accessibility-Checks... und wenn du endlich den ersten echten Satz schreibst, ist das Wochenende rum. 😓

Wir waren da. Oft. Und wir waren frustriert genug, um etwas dagegen zu tun.

## 🚀 Die Idee

Astro Stardrive ist ein Boilerplate. Kein Theme. Kein Template. Ein echtes Fundament - eines, das die langweiligen (aber kritischen) Entscheidungen schon für dich getroffen hat.

Das Ziel ist einfach: **klonen, konfigurieren, deployen.** In Minuten, nicht Wochen.

Es kommt mit:

- Einem kompletten Astro-Setup (static-first, mit optionalem SSR auf Cloudflare Workers).
- Einem Blog, einer Docs-Sektion, einer Events-Seite, einem FAQ, einer Pricing-Seite und einem Kontaktformular - alles verkabelt.
- Eingebautem i18n (Englisch, Deutsch, Spanisch, Französisch - erweiterbar nach Belieben).
- Einem Theme-Switcher, der Nutzervorlieben respektiert.
- Accessibility von Anfang an (semantisches HTML, ARIA-Labels, Tastatur- + Touch-Support).
- SEO-Grundlagen: Sitemaps, `robots.txt`, Open Graph, strukturierte Daten, RSS.
- Einer LLM-freundlichen Struktur - mehr dazu in den anderen Artikeln.
- Einer WebMCP-Integration, damit KI-Agenten deine Seite tatsächlich nutzen können.
- Cloudflare-ready, mit Cache-Purging und konfigurierten Headern.

Und es ist komplett kostenlos und Open Source. 🤩

## 💡 Warum ein Boilerplate?

Ein Theme gibt dir Optik. Ein Boilerplate gibt dir ein Rückgrat.

Wenn du ein beliebiges Theme nimmst, musst du immer noch herausfinden, wie alles zusammenpasst. Wo leben die Strings? Wie wird Routing gehandhabt? Was ist mit Security-Headern? Die meisten Themes interessieren sich schlicht nicht dafür - sie stylen einfach, was immer du ihnen vorwirfst.

Stardrive ist anders. Es kommt mit klaren Meinungen zu Struktur, Konventionen und Tooling - damit du dich auf deine Inhalte und Features konzentrieren kannst, nicht auf die Klempnerarbeit. (Dazu haben wir einen ganzen Artikel geschrieben - schau in [Boilerplate vs. Theme](/de/blog/boilerplate-vs-theme).)

## 🛠️ Für Menschen gebaut - und für KI

Hier kommt der spaßige Teil: Wir haben Stardrive von Tag eins an LLM-freundlich gestaltet.

Es gibt ein `AGENTS.md` im Root, einen `.ai/`-Ordner mit Setup-Guides, einen `PLAN.md`-Workflow und überall konsistente Konventionen. Wenn du deinen Lieblings-KI-Coding-Agent (Copilot, Claude, Codex, was auch immer) auf dieses Repo loslässt, weiß er sofort, was zu tun ist. Kein Babysitten. Kein "bitte lies erst die README" - es funktioniert einfach.

Das heißt, du kannst echte Features bauen, indem du mit deinem Agenten chattest. Eine neue Seite? Eine neue Komponente? Ein anderes Farbschema? Frag einfach. Das Boilerplate macht im Hintergrund die schwere Arbeit.

## 🤝 Beiträge und Sponsoren

Stardrive ist ein Community-Projekt. Wir pflegen es, aber wir können es nicht allein schaffen.

Wenn du einen Bug findest, öffne ein Issue. Wenn du einen fixst, schick einen PR. Wenn du eine Idee für ein Feature hast, lass uns reden. Jeder Beitrag zählt - von Tippfehler-Korrekturen bis zu neuen Sektionen.

Und wenn du Stardrive für ein kommerzielles Projekt nutzt, überlege, uns zu sponsern. Ein Boilerplate zu pflegen ist viel (meist unsichtbare) Arbeit - jede Unterstützung hilft uns, es schnell, sicher und aktuell zu halten. (Ja, all diese Arbeit kostet Geld - auf unserer Seite 😐.)

## 🎉 Was kommt als Nächstes?

Schau dich um. Lies die anderen Artikel. Klone das Repo. Führe `npm install && npm run dev` aus. Und baue etwas Großartiges.

Willkommen bei Stardrive. Lass uns das Web ein bisschen weniger frustrierend machen - zusammen. 🚀

Sieh dir die verschiedenen Artikel an, um die Variationen im Frontmatter zu entdecken, die Fallbacks und Optionen veranschaulichen. Wirf einen Blick in `./src/content.config.ts` für mehr Details zu den verschiedenen Möglichkeiten.
