---
publishDate: 2026-06-05
draft: false
featured: true
llmsTxt: true
slug: 'en/webmcp-introduction'
title: 'Make your content accessible for AI Agents - with WebMCP'
excerpt: 'WebMCP (Web Model Context Protocol) is an experimental browser standard proposed by Google and Microsoft that turns websites into programmable tools for AI agents.'
image:
  file: '@images/content/articles/webmcp.jpg'
  alt: 'An astronaut exploring a fictious MCP energy on a planet'
tags: ['mcp', 'wcag', 'llm', 'seo', 'geo', 'assistant', 'agent']
categories: ['web-development', 'ai']
---

Have you noticed that more and more people get their answers from an AI assistant instead of a search results page? 🤔

That shift is real, and it's fast. Which raises an uncomfortable question: _can those assistants actually read your website?_

Enter **WebMCP** - and yes, Stardrive ships with it out of the box.

## 💔 The problem

Most websites are built for human eyes. They have nice layouts, fancy animations, and navigation that makes sense when you can see it.

But an AI agent doesn't "see" your page. It reads markup, follows links, and tries to extract meaning. If your content is buried in JavaScript, or your structure is inconsistent, or there's no machine-readable description of what your site _does_ - the agent is flying blind.

And here's the thing: this isn't just about chatbots anymore. The EU's new accessibility and AI regulations are pushing hard for machine-readable, accessible content. If your site can't be understood by an agent, you're not just losing AI traffic - you're falling behind on compliance, too.

## 🩹 What is WebMCP?

WebMCP (Web Model Context Protocol) is an experimental browser standard, proposed by Google and Microsoft. The idea is simple but powerful: let a website _describe itself_ to AI agents - expose tools, content, and actions in a structured way.

Think of it as an API for agents, served right from your website. No scraping. No guessing. The site says "here's what I offer, here's how to use it," and the agent can act on it.

## 🚀 Why you should care

Three reasons:

1. **Accessibility for LLMs.** Your content becomes first-class for any AI assistant - ChatGPT, Gemini, Copilot, Claude, you name it. They can find it, understand it, and recommend it.
2. **SEO and GEO.** Search engines are evolving into "answer engines." Generative Engine Optimization (GEO) is the new SEO. A site that's easily parseable wins.
3. **Regulation.** The EU is tightening the screws on digital accessibility and AI transparency. Machine-readable content isn't a nice-to-have anymore - it's heading toward a must-have.

## 🛠️ Batteries included

Here's the brag: Stardrive already comes with WebMCP wired up. 🤩

You don't have to figure out the spec, hand-roll a manifest, or glue it into your build. There's a `webmcp-tools.astro` component, a typed definition file, and the integration is part of the default layout. It just works.

That means:

- Your site exposes its key actions and content to any WebMCP-aware agent.
- You stay in control of what's exposed (no leaking stuff you don't want to).
- You're ahead of the curve on accessibility, SEO, and regulation - without lifting a finger.

## 🎯 The takeaway

The web is changing. Visitors aren't just humans anymore - they're humans _and_ agents. If your site only speaks to one of those, you're leaving reach, ranking, and compliance on the table.

WebMCP is the bridge. And with Stardrive, you cross it for free. 🚀
