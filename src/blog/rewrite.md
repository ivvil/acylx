---
title: 'The acylx rewrite'
date: '18/09/2025'
categories:
	- programming
draft : true
---

Just deployed my rewrite of this website [acylx](https://github.com/ivvil/acylx) which is my personal website and blog. This is a somewhat big achievement for me because before this rewrite, the site was just built using HTML files making it a pain in the ass to work on.

This site just started as a simple learning exercise for my markup language class, they made us build a site of our own choosing, and I choose to build a personal site/blog. That meant no templating engine or static site generation.

In hindsight I think that was a good choice because of the resurgence of the indie web, opposed to something like traditional social media.

## Why Svelte?

At first, when I got the idea of rewriting the site I started looking at static site generation options like [Hugo](https://gohugo.io/) or [11ty](https://www.11ty.dev/)
but most of them are pretty complex, bloated and not that flexible. I briefly considered building my own static site generator with a templating engine like [clip](https://shinmera.github.io/clip) or [Djula](https://github.com/mmontone/djula) but I also wanted the site to work as my portfolio, and that meant adding a good amount of client JavaScript code to show off a little. 

Using vanilla js for the site was an option, as much as shitting myself is an option, so I started looking at frameworks to do the frontend. Some of the frameworks I considered where [alpine](https://alpinejs.dev/), [vue](https://vuejs.org/) and of course, [svelte](https://svelte.dev/). In the end I decided against this ssg + fronted framework setup because of it's complexity, so I just ended up using SvelteKit with the static site generator adapter.

Unironically I like the svelte syntax so that was really a plus, it isn't that hard to set up and SvelteKit allows you to do cool things like prerendering dynamic routes and such, making URLs nicer. I still feel like it's a little bit too complex for my site but the rewrite has been going on nicely so I can't complain.

### Prerendered routes

A good example of how SvelteKit 

I've been using prerendered routes for this blog, if you go to </api/v0.1/blog/posts> you'll see the prerendered JSON API for the blog preview, used in the main page for the post display.
