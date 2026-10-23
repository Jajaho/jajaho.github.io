---
title: Lipo Charger-Booster
date: 2019-02-01
edited: 2026-10-23
tags:
  - pcb
  - electronics
links:
  - name: Repository
    url: https://github.com/Jajaho/LiPo-Board
draft: false
featured: false
---

{{< figure src="front1.jpg" caption="Front view showing the charging and protection circuitry" >}}
{{< figure src="side1.jpg" caption="Side view showing the boost converter section" >}}

A small form factor 5 V 1 A boost converter and LiPo-Battery charger with integrated safety features. Originally intended for use in a Game Boy. The main design goal was a small form factor and low price, not EMC.

## Components

The main components, the charge controller and the boost converter IC are commonly used in popular low-cost modules.

- **TP4056** 1 A standalone linear Li-Ion battery charger
  - thermal protection 
  - SOP-8 package
- **MT3608** asynchronous boost converter 
  - nominal switching frequency: 1.2 MHz
  - switching current: 4A (electrical limit), but thermally limited
  This 10 cent part was released in 2012 by XI'AN Aerosemi Technology Co., Ltd. It was made famous by it's use in the blue "MT3608 DC-DC step-up module" from AliExpress, eBay and Amazon. It's a board of about 37 × 17 mm with a multi-turn trimmer, a 22 µH inductor and an SS34 Schottky diode. Since the mid-2010s it has been one of the most widely sold hobby power modules. Most people know the module rather than the chip.

## Schematics & Design Files

![Schematic](LiPo-BoardV1-2019_schematic.pdf)

The schematic above is available on [GitHub](https://github.com/Jajaho/LiPo-Board) along with the full set of design and production files.

## Mistakes & Learnings

In the first version I connected the switch *S1* to the *EN* pin of the boost converter instead of inline with the battery output. This meant that the output of the board could not be switched off completely. With the switch in the off position there would still be the battery voltage on the output. This was fixed in the second version.

Revisiting this project 7 years and and one engineering degree later opens a different view. Taking a closer look at the return path of the edge harmonics of the switching current 