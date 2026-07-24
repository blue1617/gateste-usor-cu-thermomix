---
publishDate: 2026-06-02
draft: false
featured: false
title: 'Why we use Astro for our websites'
excerpt: 'This boilerplate is build on Astro for performance, security, and cost reasons. Read the full story.'
tags: ['astro', 'js', 'ts', 'react', 'vue', 'svelte', 'solidjs']
categories: ['web-development', 'infrastructure', 'it-security']
---

If you build websites in 2026, you have a lot of options. React/Next.js. Vue/Nuxt. Svelte/SvelteKit. Webflow. Wix. WordPress. And, of course, Astro.

So why did we pick Astro as the foundation for Stardrive? Let's talk about it. 🚀

## 💔 The problem with the usual suspects

Let's be honest - most "modern" web stacks come with a tax.

**React/Next.js** is powerful, but it ships a lot of JavaScript to the browser by default. Performance tuning becomes a full-time job. The bundle grows. The waterfalls multiply. And before you know it, your marketing site loads like a dashboard.

**Vue/Nuxt** and **Svelte/SvelteKit** are nicer on the developer experience side, but they still lean heavily into client-side rendering. Great for apps. Overkill for most websites.

**Webflow** actually uses Astro under the hood (which says a lot). It's fine for non-devs who want to drag and drop - but for a developer it's frustrating. You don't control the code, you can't version it properly, and you hit a ceiling fast.

**Wix**? Bad UX for admins, bloated output, low control. A performance nightmare. Next.

**WordPress** powers a huge chunk of the web - and it's a security risk out of the box. It's only fast with a pile of plugins, each of which adds maintenance cost and another attack surface. Keeping it updated and secure is a job in itself.

So what's the alternative?

## 🩹 Enter Astro

Astro flips the default. Instead of shipping a JavaScript runtime to every visitor, it renders your pages to static HTML at build time. The browser gets plain, fast, accessible markup. JavaScript only loads where you actually need it - and only as much as you ask for.

The result:

- **Performance.** Pages are tiny. They load instantly. Core Web Vitals look great out of the box.
- **Security.** There's no runtime to attack. No database to patch. No plugin update to forget. Static HTML is about as safe as it gets.
- **Cost.** Static files are cheap to host. Free, in most cases. Cloudflare, Netlify, Vercel, GitHub Pages - pick one, you're done.
- **Developer experience.** You write components in `.astro` files (HTML-first, with optional JS), and you can still pull in React, Vue, Svelte, or SolidJS where it actually makes sense. Astro doesn't force a framework on you.

And when you do need dynamic behavior - forms, on-demand rendering, API routes - Astro's SSR adapter has you covered. We use Cloudflare Workers, which means edge performance and a generous free tier.

## 🤩 Why it fits Stardrive

Stardrive is a boilerplate for content-driven websites: blogs, docs, marketing pages, events. These don't need a SPA. They need speed, accessibility, and a foundation that doesn't fight you.

Astro gives us all of that, plus:

- File-based routing that just makes sense.
- A content collections API that keeps your Markdown typed and validated.
- First-class i18n support.
- Built-in sitemaps, RSS, and image optimization.
- An island architecture that lets us add interactivity without drowning in client-side JS.

Could we have built Stardrive on Next.js? Sure. But it would be slower, heavier, and harder to maintain. And we'd be spending time on performance workarounds instead of features.

## 🎯 The takeaway

Astro isn't the right tool for every project. If you're building a complex web app with tons of state, reach for something else. But for websites - the kind most of us actually build - it's hard to beat.

That's why Stardrive runs on Astro. Fast by default. Secure by design. Cheap to run. And a joy to work with. 🚀
