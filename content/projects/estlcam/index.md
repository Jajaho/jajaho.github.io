---
title: EstlCam USB Adapter
description: Milled single layer circuit board
date: 2020-09-28
tags:
  - electronics
  - pcb
  - milling
draft: false
featured: false
---

This was my first attempt at milling my own single sided circuit board on my [6040 CNC](/projects/6040_cnc/) router.
Along the way I had some issues with the pcb blanks bowing, but I ended up with a functional LPT to USB adapter for [Estlcam](https://www.estlcam.de/).

Design files are available on [GitHub](https://github.com/Jajaho/Estl-Board)

---

Because the pcbs blanks where bowed, the first couple attempts failed.  

{{< figure src="failed_pcb.jpg" caption="First attempt: Some of the clearance routings were too shallow." >}}

By screwing the blank down, the bow was eliminated and a constant cutting depth led to more reliable isolation routing.

{{< figure src="new_workholding.jpg" caption="Next attempt: Screwing the blank down." >}}

{{< figure src="routed_pcb.jpg" caption="Successful attempt: Routed pcb." >}}


{{< figure src="fitted_pcb.jpg" caption="The pcb fitted in the cabinet." >}}