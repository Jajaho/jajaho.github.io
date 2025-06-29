---
title: Lipo Charger-Booster
date: 2019-02-01
tags:
  - pcb
  - electronics
draft: true
featured: false
---

A small form factor 5v 1A boost converter and LiPo-Battery charger with integrated safety features. Originally intended for use in a gameboy.

{{< figure src="front1.jpg" caption="Front view showing the charging and protection circuitry" >}}
{{< figure src="side1.jpg" caption="Side view showing the boost converter section" >}}

## components
- **TP4056** 1A Standalone Linear Li-lon Battery Charger with Thermal Regulation in SOP-8 package
- **MT3608** High Efficiency 1.2MHz 2A Step Up Converter

## schematics & pcb

[workbench.pdf](https://github.com/Jajaho/LiPo-Board)

## mistakes & learnings

In the first version I connected the switch *S1* to the *EN* pin of the boost converter instead of inline with the battery output. This meant that the output of the board could not be switched off completely. With the switch in the off position there would still be the battery voltage on the output. This was fixed in the second version.