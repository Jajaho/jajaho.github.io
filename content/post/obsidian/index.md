---
title: A post from Obsidian
description: A test of publishing from obsidian.
date: 2024-12-07
tags:
  - Obsidian
draft: false
featured: false
share: false
---

This post was created, edited and pushed from Obsidian. 
Together Obsidian can be transformed into a comfortable editor using some community plugins.
This is an effective and free alternative to Obsidian publish.

Using Shell-commands and buttons a note can be transformed into a control centre from which the local server can be launched, the generated site accessed and also be stopped from again. 
![](control.png)
While Hugo Blox prominently advertises this feature, to my knowledge there is no reason that the same could be done for a site generated with Jekyll as long as it supports deployment to GitHub pages via an action.

## Essential plugins

- git
- file-hider (to declutter the folder view from files that can't be effectively edited in Obsidian)
- shell-commands
- buttons
- meta-bind
- templater (to streamline the creation of new posts)
- linter (could maybe be used to replace incompatible Markdown formatting)

## Posts

The `.md` files for posts can either be placed in the `post` folder directly or inside a folder with the same name and the source file, named `index.md`. The latter enables the placement of images for the post directly inside the folder as seen in the example below.

![](post_structure.png)