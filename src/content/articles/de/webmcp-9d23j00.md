---
publishDate: 2026-06-05
draft: false
featured: true
slug: 'de/webmcp-introduction'
title: 'Mache deine Inhalte für KI-Agenten zugänglich - mit WebMCP'
excerpt: 'WebMCP (Web Model Context Protocol) ist ein experimenteller Browser-Standard, vorgeschlagen von Google und Microsoft, der Websites in programmierbare Werkzeuge für KI-Agenten verwandelt.'
image:
  file: '@images/content/articles/webmcp.jpg'
  alt: 'Ein Astronaut, der auf einem Planeten eine fiktive MCP-Energie erkundet'
tags: ['mcp', 'wcag', 'llm', 'seo', 'geo', 'assistant', 'agent']
categories: ['web-development', 'ai']
---

Ist dir aufgefallen, dass immer mehr Menschen ihre Antworten von einem KI-Assistenten bekommen statt von einer Suchergebnisseite? 🤔

Dieser Wandel ist real - und er ist schnell. Was eine unbequeme Frage aufwirft: _Können diese Assistenten deine Website überhaupt lesen?_

Hier kommt **WebMCP** ins Spiel - und ja, Stardrive liefert es out-of-the-box mit.

## 💔 Das Problem

Die meisten Websites sind für menschliche Augen gebaut. Sie haben hübsche Layouts, schicke Animationen und eine Navigation, die Sinn ergibt, wenn man sie sehen kann.

Aber ein KI-Agent "sieht" deine Seite nicht. Er liest Markup, folgt Links und versucht, Bedeutung zu extrahieren. Wenn dein Inhalt in JavaScript vergraben ist, deine Struktur inkonsistent ist oder es keine maschinenlesbare Beschreibung gibt, was deine Seite _macht_ - fliegt der Agent blind.

Und hier ist die Sache: Es geht längst nicht mehr nur um Chatbots. Die neuen EU-Regulierungen zu Accessibility und KI drängen stark auf maschinenlesbare, zugängliche Inhalte. Wenn deine Seite von einem Agenten nicht verstanden werden kann, verlierst du nicht nur KI-Traffic - du hängst auch bei Compliance hinterher.

## 🩹 Was ist WebMCP?

WebMCP (Web Model Context Protocol) ist ein experimenteller Browser-Standard, vorgeschlagen von Google und Microsoft. Die Idee ist einfach, aber mächtig: Eine Website _beschreibt sich selbst_ gegenüber KI-Agenten - sie stellt Tools, Inhalte und Aktionen strukturiert zur Verfügung.

Stell es dir vor wie eine API für Agenten, direkt von deiner Website ausgeliefert. Kein Scraping. Kein Raten. Die Seite sagt: "Hier ist, was ich anbiete, hier ist, wie man es nutzt", und der Agent kann darauf agieren.

## 🚀 Warum es dich interessieren sollte

Drei Gründe:

1. **Accessibility für LLMs.** Dein Inhalt wird first-class für jeden KI-Assistenten - ChatGPT, Gemini, Copilot, Claude, du nennst sie. Sie finden ihn, verstehen ihn und empfehlen ihn.
2. **SEO und GEO.** Suchmaschinen entwickeln sich zu "Answer Engines". Generative Engine Optimization (GEO) ist das neue SEO. Eine leicht parsbare Seite gewinnt.
3. **Regulierung.** Die EU zieht die Schrauben bei digitaler Accessibility und KI-Transparenz an. Maschinenlesbare Inhalte sind kein Nice-to-have mehr - sie werden zu einem Must-have.

## 🛠️ Batterien inklusive

Hier kommt der Angeber-Teil: Stardrive kommt bereits mit WebMCP verkabelt. 🤩

Du musst die Spec nicht verstehen, kein Manifest von Hand bauen und nichts in deinen Build kleben. Es gibt eine `webmcp-tools.astro`-Komponente, eine typisierte Definitionsdatei, und die Integration ist Teil des Default-Layouts. Es funktioniert einfach.

Das heißt:

- Deine Seite stellt ihre wichtigsten Aktionen und Inhalte jedem WebMCP-fähigen Agenten zur Verfügung.
- Du behältst die Kontrolle darüber, was exponiert wird (nichts wird durchsickern, was du nicht willst).
- Du bist bei Accessibility, SEO und Regulierung der Kurve voraus - ohne einen Finger zu rühren.

## 🎯 Das Fazit

Das Web verändert sich. Besucher sind nicht mehr nur Menschen - sie sind Menschen _und_ Agenten. Wenn deine Seite nur mit einer von beiden Gruppen spricht, lässt du Reichweite, Ranking und Compliance auf dem Tisch liegen.

WebMCP ist die Brücke. Und mit Stardrive überquerst du sie kostenlos. 🚀
