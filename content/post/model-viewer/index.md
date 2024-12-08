---
title: <model-viewer> test
description: A test of googles model-viewer.
date: 2024-12-06
tags:
  - 3D
params:
  startDate: 2022-08-03
  endDate: 2022-08-30
draft: false
featured: false
share: false
---

{{< model-viewer>}}

A nice Astronaut, whose model is being served from a remote location.

{{< model-viewer
    src="printsheet-holder2-Fillet.glb"
    ios-model="Astronaut.usdz"
    alt="A 3D model of an astronaut" 
>}}

A simple embedded 3d model served from the same server.


An embedded 3d model with two buttons two make it rotate or stop.



This completely open source and free 3d model viewer supports advanced functions like:
- lazy loading
- annotations
- animated annotations
- preset camera views
- custom lighting, background, post processing, color-grading, ...
