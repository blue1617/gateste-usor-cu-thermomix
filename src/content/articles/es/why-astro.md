---
publishDate: 2026-06-02
draft: false
featured: false
title: 'Por qué usamos Astro para nuestros sitios web'
excerpt: 'Este boilerplate está construido sobre Astro por motivos de rendimiento, seguridad y coste. Lee la historia completa.'
tags: ['astro', 'js', 'ts', 'react', 'vue', 'svelte', 'solidjs']
categories: ['web-development', 'infrastructure', 'it-security']
---

Si construyes webs en 2026, tienes muchas opciones. React/Next.js. Vue/Nuxt. Svelte/SvelteKit. Webflow. Wix. WordPress. Y, por supuesto, Astro.

Entonces, ¿por qué elegimos Astro como base de Stardrive? Hablemos. 🚀

## 💔 El problema con los sospechosos habituales

Seamos honestos - la mayoría de los stacks "modernos" vienen con un impuesto.

**React/Next.js** es potente, pero por defecto manda mucho JavaScript al navegador. Afinar el rendimiento se convierte en un trabajo a tiempo completo. El bundle crece. Las cascadas se multiplican. Y antes de que te des cuenta, tu web de marketing carga como un dashboard.

**Vue/Nuxt** y **Svelte/SvelteKit** son más amables en la experiencia de desarrollo, pero siguen apostando fuerte por el renderizado del lado del cliente. Genial para apps. Excesivo para la mayoría de webs.

**Webflow** en realidad usa Astro por debajo (lo cual dice mucho). Está bien para no-devs que quieren arrastrar y soltar - pero para un desarrollador es frustrante. No controlas el código, no puedes versionarlo bien y chocas contra un techo rápido.

¿**Wix**? Mala UX para admins, salida inflada, poco control. Una pesadilla de rendimiento. Siguiente.

**WordPress** mueve una parte enorme de la web - y es un riesgo de seguridad recién salido de la caja. Solo es rápido con un montón de plugins, y cada uno suma coste de mantenimiento y una nueva superficie de ataque. Mantenerlo actualizado y seguro es un trabajo en sí mismo.

Entonces, ¿cuál es la alternativa?

## 🩹 Entra Astro

Astro cambia el valor por defecto. En vez de mandar un runtime de JavaScript a cada visitante, renderiza tus páginas a HTML estático en tiempo de build. El navegador recibe marcado simple, rápido y accesible. El JavaScript solo carga donde de verdad lo necesitas - y solo lo que pides.

El resultado:

- **Rendimiento.** Las páginas son diminutas. Cargan al instante. Los Core Web Vitals se ven genial desde el inicio.
- **Seguridad.** No hay runtime que atacar. No hay base de datos que parchear. No hay actualización de plugin que olvidar. HTML estático es lo más seguro que hay.
- **Coste.** Los archivos estáticos son baratos de alojar. Gratis, en la mayoría de casos. Cloudflare, Netlify, Vercel, GitHub Pages - elige uno, listo.
- **Experiencia de desarrollo.** Escribes componentes en archivos `.astro` (HTML-first, con JS opcional) y puedes meter React, Vue, Svelte o SolidJS donde tenga sentido. Astro no te impone un framework.

Y cuando necesitas comportamiento dinámico - formularios, renderizado bajo demanda, rutas API - el adaptador SSR de Astro te cubre. Usamos Cloudflare Workers, lo que significa rendimiento edge y un free tier generoso.

## 🤩 Por qué encaja con Stardrive

Stardrive es un boilerplate para webs orientadas a contenido: blogs, docs, páginas de marketing, eventos. Estas no necesitan una SPA. Necesitan velocidad, accesibilidad y una base que no te ponga trabas.

Astro nos da todo eso, además de:

- Routing basado en archivos que simplemente tiene sentido.
- Una API de colecciones de contenido que mantiene tu Markdown tipado y validado.
- Soporte i18n de primera clase.
- Sitemaps, RSS y optimización de imágenes integrados.
- Una arquitectura de islas que nos permite añadir interactividad sin ahogarnos en JS del lado del cliente.

¿Podríamos haber construido Stardrive sobre Next.js? Claro. Pero sería más lento, más pesado y más difícil de mantener. Y estaríamos gastando tiempo en parches de rendimiento en vez de en funciones.

## 🎯 La conclusión

Astro no es la herramienta adecuada para todo. Si estás construyendo una app web compleja con montones de estado, busca otra cosa. Pero para webs - del tipo que la mayoría de nosotros construimos - es difícil de superar.

Por eso Stardrive corre sobre Astro. Rápido por defecto. Seguro por diseño. Barato de mantener. Y un placer con el que trabajar. 🚀
