---
title: Dyson V6 Trigger+ Repair
description: Planned obsolescence or incompetence?
date: 2023-12-31
tags:
  - repair
  - electronics
  - battery
draft: true
featured: false
---

I repaired this for my girlfriends mum who wanted to throw it away.

## DC61 Battery Pack

nominal voltage: 21.6 V
rated capacity: 2100 mAh (46 Wh)

6-CELL (214141) 6INR19/66-1

## Checks prior to disassembly

- PSU 26 VDC at dc barrel plug ✔
- No current draw when plugged into battery ❌
- Unless the button is pressed no voltage is applied at the terminals
- After pressing the button on top of the battery the *light flashes red 32 times and then green once (the 32 flashes of death)* before extinguishing and a voltage of 11 VDC was measured at the two battery terminals

## Disassembly

After prying the battery casing open using a metal prying tool, plastic spudgers and plastic picks to keep the released latches open the battery measured 22 VDC at the main battery terminals.

Once all latches are opened the smaller part of the shell slides of and the spring loaded plastic button can be removed.
To remove the larger part of the casing the light guide (which also acts as a latch) has to be removed.

I had some trouble with this and recommend using a flat head screw driver to push in the light guide from the outside while shifting the battery cells inside to the other. Getting the second side lose is the hard part. I resorted to using a plastic prying tool to push out the guide from between the terminals with one side of the guide still in the latch. 

## Troubleshooting & Repair

Still the battery would not charge when plugged in to the adapter through the dc barrel jack.
So i preceded to check the individual cell voltages.

cell voltages:
(measured 30-12-2023, from most negative to positive)

1. 3.807
2. 3.481
3. 3.94
4. 3.93
5. 3.89
6. 3.914

Clearly cell 1 & 2 were to low. (According to tinfever's README they should be within 300 mV of each other)
After pealing back the hot glue coating I traced the connections from the cells to the battery management chip (ISL94208).
The cells are connected to bmc via a simple voltage divider with a 1k resistor and varying second resistor values.

According to the datasheet the ISL94208 is capable not only of sensing the cell voltages but can also balance out any differences. How the unbalance could happen is unclear. 
After finding [tinfever's](https://github.com/tinfever) diy firmware for the battery however it was clear that the feature was intentionally disabled by omitting the required external balancing resistors. Probably because they tried to implement and test it (there exists a version of the pcb with unpopulated footprints for the required resistors) but failed. 

The bmc communicates with the mC via I2C so maybe we could spy on them with a serial decoder and find out why it died?

I charged cell 2 with 4.15 V at 1 A (The power adapter is rated at 750 mA but 1 A should be fine because they were not over discharged) with my bench power supply while watching it like a hawk (that is wearing safety glasses) and with a closeable metal bin below the table so I could quickly get rid of it in case things got to hot. 

After charging the 2. cell voltage is 3.85 V.

## Battery PCB
pcb markings: 18802 - 01/04

The pcb features a micro controller U1 and a battery management analog front end ic U2.
The output voltage is controlled by a low side switch Q3 which is a n-channel fet.

BM-IC: Renesas ISL94208 (RZ 743WLQ)

For more hardware info see: https://github.com/tinfever/FU-Dyson-BMS/tree/main/hardware-info   
Uploading the FU-Dyson-BMS software revived the board, many tanks to [tinfever's](https://github.com/tinfever).

## Resources
- https://github.com/tinfever/FU-Dyson-BMS (BMS firmware and additional resources)