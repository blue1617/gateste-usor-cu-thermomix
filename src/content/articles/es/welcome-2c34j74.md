---
publishDate: 2026-06-01
updatedDate: 2026-06-04
draft: false
featured: false
slug: 'es/welcome'
title: 'Bienvenido a Astro Stardrive'
excerpt: 'Hemos creado un boilerplate sobre Astro para darte superpoderes al construir sitios web. Totalmente gratuito. Open Source. Compatible con LLM.'
image:
  file: '@images/content/articles/welcome-stardrive.jpg'
  alt: 'Astronautas saludando a la cámara'
tags: ['astro', 'js', 'ts', 'cloudflare', 'react', 'vue', 'svelte', 'solidjs', 'tailwind', 'directus', 'supabase', 'github']
categories: ['web-development', 'infrastructure', 'ai', 'it-security', 'productivity']
author:
  name: 'Jens Kürschner'
  url: 'https://jekuer.com'
tocDepth: 2
---

¡Hola! 👋

Has llegado a Astro Stardrive. ¡Bienvenido!

Si alguna vez empezaste una web desde cero, ya conoces el dolor. Eliges un framework, configuras el build, montas el routing, peleas con el i18n, conectas un blog, un sitemap, un feed RSS, un banner de cookies, un selector de tema, datos estructurados, comprobaciones de accesibilidad... y cuando por fin escribes tu primera frase real, el fin de semana se ha ido. 😓

Hemos estado ahí. Muchas veces. Y nos frustramos lo suficiente como para hacer algo al respecto.

## 🚀 La idea

Astro Stardrive es un boilerplate. No un tema. No una plantilla. Una base real - una que ya tomó las decisiones aburridas (pero críticas) por ti.

El objetivo es simple: **clonar, configurar, desplegar.** En minutos, no en semanas.

Incluye:

- Un setup completo de Astro (static-first, con SSR opcional en Cloudflare Workers).
- Un blog, una sección de docs, una página de eventos, un FAQ, una página de precios y un formulario de contacto - todo conectado.
- i18n integrado (inglés, alemán, español, francés - ampliable a tu gusto).
- Un selector de tema que respeta las preferencias del usuario.
- Accesibilidad desde el inicio (HTML semántico, etiquetas ARIA, soporte teclado + táctil).
- Lo esencial de SEO: sitemaps, `robots.txt`, Open Graph, datos estructurados, RSS.
- Una estructura amigable para LLMs - más sobre eso en los demás artículos.
- Una integración WebMCP, para que los agentes de IA puedan usar tu sitio.
- Listo para Cloudflare, con purga de caché y cabeceras configuradas.

Y es totalmente gratuito y Open Source. 🤩

## 💡 ¿Por qué un boilerplate?

Un tema te da estética. Un boilerplate te da columna vertebral.

Cuando coges un tema cualquiera, todavía tienes que averiguar cómo encaja todo. ¿Dónde viven los textos? ¿Cómo se gestiona el routing? ¿Y las cabeceras de seguridad? A la mayoría de los temas simplemente no les importa - solo estilizan lo que les eches.

Stardrive es distinto. Viene con opiniones firmes sobre estructura, convenciones y tooling - para que te concentres en tu contenido y tus funciones, no en la fontanería. (Escribimos un artículo entero sobre esto - mira [Boilerplate vs. Theme](/es/blog/boilerplate-vs-theme).)

## 🛠️ Pensado para humanos - y para IA

Aquí viene lo divertido: diseñamos Stardrive para que fuera amigable con los LLMs desde el primer día.

Hay un `AGENTS.md` en la raíz, una carpeta `.ai/` con guías de setup, un flujo de `PLAN.md` y convenciones consistentes en todas partes. Cuando apuntas tu agente de IA favorito (Copilot, Claude, Codex, el que sea) a este repo, sabe al instante qué hacer. Sin supervisión. Sin "por favor, lee primero el README" - simplemente funciona.

Esto significa que puedes construir funciones reales charlando con tu agente. ¿Una página nueva? ¿Un componente nuevo? ¿Otro esquema de colores? Solo pregunta. El boilerplate hace el trabajo pesado en segundo plano.

## 🤝 Contribuciones y patrocinadores

Stardrive es un proyecto comunitario. Lo mantenemos nosotros, pero no podemos solos.

Si encuentras un bug, abre un issue. Si lo arreglas, manda un PR. Si tienes una idea para una función, hablemos. Cada contribución cuenta - desde corregir un error tipográfico hasta nuevas secciones.

Y si usas Stardrive en un proyecto comercial, considera patrocinarnos. Mantener un boilerplate es mucho trabajo (casi todo invisible) - cada muestra de apoyo nos ayuda a mantenerlo rápido, seguro y al día. (Sí, hacer todo este trabajo cuesta dinero - de nuestro lado 😐.)

## 🎉 ¿Qué viene ahora?

Echa un vistazo. Lee los demás artículos. Clona el repo. Ejecuta `npm install && npm run dev`. Y construye algo genial.

Bienvenido a Stardrive. Hagamos la web un poco menos frustrante - juntos. 🚀

Explora los distintos artículos para ver las variaciones del frontmatter, que ilustran los valores por defecto y las diferentes opciones. Echa un vistazo a `./src/content.config.ts` para conocer más detalles sobre las opciones disponibles.
