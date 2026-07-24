---
publishDate: 2026-06-02
draft: false
featured: false
title: 'Pourquoi nous utilisons Astro pour nos sites'
excerpt: "Ce boilerplate est construit sur Astro pour des raisons de performance, de sécurité et de coût. Découvrez l'histoire complète."
tags: ['astro', 'js', 'ts', 'react', 'vue', 'svelte', 'solidjs']
categories: ['web-development', 'infrastructure', 'it-security']
---

Si tu construis des sites web en 2026, tu as beaucoup d'options. React/Next.js. Vue/Nuxt. Svelte/SvelteKit. Webflow. Wix. WordPress. Et bien sûr, Astro.

Alors pourquoi avons-nous choisi Astro comme fondation de Stardrive ? Parlons-en. 🚀

## 💔 Le problème avec les suspects habituels

Soyons honnêtes - la plupart des stacks "modernes" viennent avec une taxe.

**React/Next.js** est puissant, mais il envoie par défaut beaucoup de JavaScript au navigateur. Optimiser les perfs devient un travail à temps plein. Le bundle grossit. Les cascades se multiplient. Et avant que tu t'en rendes compte, ton site marketing charge comme un dashboard.

**Vue/Nuxt** et **Svelte/SvelteKit** sont plus agréables côté expérience développeur, mais ils misent encore lourdement sur le rendu côté client. Génial pour les apps. Excessif pour la plupart des sites.

**Webflow** utilise d'ailleurs Astro sous le capot (ce qui en dit long). C'est bien pour les non-devs qui veulent glisser-déposer - mais pour un développeur, c'est frustrant. Tu ne contrôles pas le code, tu ne peux pas le versionner correctement, et tu butes vite sur un plafond.

**Wix** ? Mauvaise UX pour les admins, sortie gonflée, peu de contrôle. Un cauchemar de performances. Suivant.

**WordPress** fait tourner une énorme part du web - et c'est un risque de sécurité dès la sortie de la boîte. Il n'est rapide qu'avec une pile de plugins, chacun ajoutant du coût de maintenance et une nouvelle surface d'attaque. Le maintenir à jour et sécurisé, c'est un travail à part entière.

Alors, quelle est l'alternative ?

## 🩹 Entrez Astro

Astro inverse le défaut. Au lieu d'envoyer un runtime JavaScript à chaque visiteur, il rend tes pages en HTML statique au moment du build. Le navigateur reçoit du markup simple, rapide, accessible. Le JavaScript ne se charge que là où tu en as vraiment besoin - et seulement autant que tu le demandes.

Le résultat :

- **Performances.** Les pages sont minuscules. Elles chargent instantanément. Les Core Web Vitals sont bons dès le départ.
- **Sécurité.** Pas de runtime à attaquer. Pas de base de données à patcher. Pas de mise à jour de plugin oubliée. Le HTML statique, c'est aussi sûr que possible.
- **Coût.** Les fichiers statiques sont bon marché à héberger. Gratuits, la plupart du temps. Cloudflare, Netlify, Vercel, GitHub Pages - choisis-en un, c'est fini.
- **Expérience développeur.** Tu écris des composants dans des fichiers `.astro` (HTML-first, avec JS optionnel) et tu peux toujours intégrer React, Vue, Svelte ou SolidJS là où ça fait sens. Astro ne t'impose pas de framework.

Et quand tu as besoin de comportement dynamique - formulaires, rendu à la demande, routes API - l'adaptateur SSR d'Astro te couvre. On utilise Cloudflare Workers, ce qui signifie des perfs en edge et un free tier généreux.

## 🤩 Pourquoi ça colle à Stardrive

Stardrive est un boilerplate pour des sites orientés contenu : blogs, docs, pages marketing, événements. Ils n'ont pas besoin d'une SPA. Ils ont besoin de vitesse, d'accessibilité et d'une fondation qui ne te freine pas.

Astro nous donne tout ça, plus :

- Un routing basé sur les fichiers qui a du sens.
- Une API de collections de contenu qui garde ton Markdown typé et validé.
- Un support i18n de premier ordre.
- Des sitemaps, RSS et optimisation d'images intégrés.
- Une architecture d'îles qui permet d'ajouter de l'interactivité sans se noyer dans le JS côté client.

On aurait pu construire Stardrive sur Next.js ? Bien sûr. Mais ce serait plus lent, plus lourd et plus difficile à maintenir. Et on passerait du temps sur des contournements de perfs au lieu de fonctionnalités.

## 🎯 La conclusion

Astro n'est pas l'outil adapté à tout. Si tu construis une app web complexe avec plein de state, prends autre chose. Mais pour des sites - le genre que la plupart d'entre nous construisent réellement - c'est difficile à battre.

C'est pour ça que Stardrive tourne sur Astro. Rapide par défaut. Sécurisé par conception. Bon marché à exploiter. Et un plaisir à utiliser. 🚀
