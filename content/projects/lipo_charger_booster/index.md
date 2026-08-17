---
title: Lipo Charger-Booster
date: 2019-02-01
tags:
  - pcb
  - electronics
links:
  - name: Repository
    url: https://github.com/Jajaho/LiPo-Board
draft: true
featured: false
---

A small form factor 5 V 1 A boost converter and LiPo-Battery charger with integrated safety features. Originally intended for use in a Game Boy.

{{< figure src="front1.jpg" caption="Front view showing the charging and protection circuitry" >}}
{{< figure src="side1.jpg" caption="Side view showing the boost converter section" >}}

## Components
- **TP4056** 1 A standalone linear Li-Ion battery charger with thermal protection in SOP-8 package
- **MT3608** High efficiency 1.2 MHz 2 A boost converter

## Schematics & PCB

[GitHub repository](https://github.com/Jajaho/LiPo-Board)

## Mistakes & Learnings

In the first version I connected the switch *S1* to the *EN* pin of the boost converter instead of inline with the battery output. This meant that the output of the board could not be switched off completely. With the switch in the off position there would still be the battery voltage on the output. This was fixed in the second version.