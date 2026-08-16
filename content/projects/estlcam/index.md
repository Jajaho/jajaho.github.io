---
title: EstlCam USB Adapter
description: Milled single layer circuit board
date: 2020-09-28
lastmod: 2026-08-16
tags:
  - electronics
  - pcb
  - milling
draft: false
featured: false
---

This was my first attempt at milling my own single sided circuit board on my [6040 CNC](/projects/6040_cnc/) router.
Along the way I had some issues with the PCB blanks bowing, but I ended up with a functional LPT to USB adapter for [EstlCam](https://www.estlcam.de/).

Design files are available on [GitHub](https://github.com/Jajaho/Estl-Board)

---

Because the PCB blanks are bowed, the first couple attempts failed. As you can see in the image below, the routing is thicker where the surface is elevated and not cleared fully where it is lower. This is because the router bit is chamfered.

{{< figure src="failed_pcb.jpg" caption="First attempt: Some of the clearance routings were too shallow." >}}

By screwing the blank down, the bow was eliminated and a constant cutting depth led to more reliable isolation routing.

{{< figure src="new_workholding.jpg" caption="Next attempt: Screwing the blank down." >}}

{{< figure src="routed_pcb.jpg" caption="Successful attempt: Routed PCB." >}}

Finally the components were soldered to the PCB and the finished board was fitted with an Arduino UNO running the EstlCam firmware.
{{< figure src="fitted_pcb.jpg" caption="The assembled PCB installed in the CNC's electrical cabinet." >}}