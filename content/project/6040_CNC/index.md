---
title: 6040 CNC
description: Enclosure for a low cost Chinese import router.
date: 2020-05-01
tags:
  - cnc
  - machining
  - diy
  - crafts
draft: false
featured: false
---

The main subject of this post is a cheap Chinese import router, commonly referred to as "6040 CNC", owing it's name to it's x/y travel distance of 60/40 cm. This kind of router is sold in multiple, slightly different configurations using either 0.8 kW, 1.5 kW, or 2.2 kW high-frequency spindle, commonly called "China spindle" in various internet forums. There are also different sizes with similar construction available. My machine was bought in the summer of 2020, yours might differ from mine. The machine is designed to cut and engrave plastics like acrylic glass and softwood. This machine is not designed to cut metal and doing so I would consider abuse. This is not to say that it can't cut it at all but you won't have much fun doing so. On Youtube, you will regularly see videos of the sort "Cheap machine cuts metal!", but this is much less cutting than it is grinding. Given a butter knife, even I myself could "cut" a soft metal eventually…

A CAD [model of my machine](https://grabcad.com/library/6040-cnc-1-5kw-2020-model-1) as well as the [cabinet](https://grabcad.com/library/cnc-enclosure-werk2-1) can be found here on my GrabCAD page.

{{< figure src="6040_2.jpg" caption="The 6040 CNC router installed on top with the cables going of to the control cabinet underneath." >}}
{{< figure src="6040_3.jpg" caption="Side view showing cabinet installation" >}}

## Spindle

Huanyang Electrical
- model: GDZ-80-1.5
- collet chuck: ER-11, collet nut: ER-11 A
- voltage: 220 V
- Rotation speed: 8000 – 24000 rpm
- tubing: 6 x 4 mm, silicon

{{< figure src="connector_topview.jpg" caption="The connector lacks reverse polarity protection" >}}
{{< figure src="plug_cut.jpg" caption="The plug lacks a connection to protective earth" >}}

**Safety first!** The spindle motor nor the main body of the machine is grounded. In addition to the three pins for the live voltage, there is a fourth pin on the spindle connector which, according to the manufacturer is supposed to be used for the grounding of the spindle. However, the connector on the spindle motor does not have any features to prevent reverse polarity. This only works because the grounding pin is unconnected on the inside. This is a serious safety hazard and to my best knowledge, the operation of the motor would be illegal in a German commercial workshop but perfectly fine in China. Also, the cable has no shielding leading to excessive high-frequency electromagnetic radiation which can impair not only other electrical devices but also the controller of the machine itself. The cable is also not certified for use in drag chains which can lead to a broken connection or a short circuit in the worst case.

Most 6040's come with either a 1.5 kW or 2.2 kW spindle motor. The rated power should not be your first concern however, even 800 Watts is plenty for all you are going to be doing on this machine. Much more important is the range of tooling you will be able to use, e.g. the collet size. To my best knowledge, the largest collet size available on 1.5 kW motors is ER-11 which can accompany 0.5 – 7 mm shanks, including 1/8 and 1/4 inches. 2.2 kW motors come with up to ER-20 collets, extending the range of shaft diameters to 1 – 13 mm, including 1/2 inch shanks. This enables you to use common wood router bits, which are substantially cheaper compared to specialized tooling with smaller shanks. Special care should be taken when using these larger bits so as to not exceed their maximum rated rotation speed. Bosch (and possibly many others) also sells cheap 6mm bits.

In addition to liquid-cooled spindle motors, there are also air-cooled types available. One might be tempted to opt for an air-cooled model to forego a separate cooling unit as well as the tedious routing of tubes. However comparable liquid-cooled motors will be considerably quieter than their air-cooled counterparts. A suitable cooling would be anti-freeze mixed with water. The exact ratio depends on the expected temperature range. There is also some debate on whether to use distilled water or tap water but I will not go into that here. The interested reader will find plenty of information elsewhere.

The manufacturer also claims on their website the use of German SFK 6002 deep groove ball bearing but only guarantees their operation for 6 months. I thought this was funny.

## Electronics

The electrical cabinet that came with the machine was ditched and the wiring was moved to a Rittal AE 1038.500 cabinet. It's 380 x 600 x 210 mm in size and using some of the old components. Namely the main power supply, the motor driver board as well as the variable frequency drive. I added a Pilz safety relay, additional 230V sockets on the outside to plug in a vacuum and air compressor, two 120 mm fans, and a custom LPT to USB adapter specifically made to interface with the EstleCAM software, which I have milled on the machine itself. You can find out more about it in this [post](../estlcam/) .

### Control Board: JP-3163B

- 3 Toshiba TB6560 motor drivers with screw terminals
- 1 step/direction interface to connect a fourth motor driver
- 5 galvanically isolated inputs
- 1 0-10 V analog output (defective)
- 1 relay

Wiring diagram and photo source: [www.mycncuk.com](http://www.mycncuk.com/threads/11293-%21need-Help-CNC6040Z-USB-Limit-switch-wiring%21)

### Variable Frequency Drive

My unit came with an Askpower A2-8015M, rated for 1.5 kW, 220V, 10 A, 0-400 Hz. These ratings are contradictory of course in that Voltage times Amperage would amount to 2200 VA apparent power.
Manual: refer to page 9 to configure runtime frequency and control source.

## The 6040s shortcomings (as a mill)

If we were to take the 6040 for what it is, an engraver, not a milling machine, most of the listed inadequacies could be ignored except for the lack of grounding and EMI (electromagnetic interference) considerations. So I will now go over the reasons owing to structural design why the 6040 CNC is an engraver and not a milling machine.

The worktable, aside from not accepting standard DIN T-nuts commonly used for work holding, it is insufficiently supported. When pressing down in the middle of the table it can easily be pressed down 10 mm with a single finger. I hope this picture also helps to clarify the issue (coming soon).

The gantry. In contrary to the longest axis, henceforth referred to as the y-axis, the linear guides of the shorter axis (x-axis) are unsupported, they are thicker, however, this does not make up for the lack of support, leading to the gantry being also easily deflected orthogonal to the x-axis.

The motors. Although not strictly a mechanical issue, the typical 6040 comes with three small Nema 23 (The Nema 23 standard only specifies the mounting flanch) stepper motors with a nominal holding torque of 4 Nm. These are driven via an open control loop and are not capable of reasonable speed/acceleration in metal without risking step-loss.

## Tooling

The choice of tooling is crucial and you will make your life a lot easier by not buying only the cheapest cutters. Having said that I must confess that I myself almost exclusively own cheap Chinese tooling and I would recommend you to do so as well while you are learning the ropes. Cutters can be crudely distinguished by the material they are made of. There is high-speed steel, carbide as well as carbide insert tooling. High-speed steel is the cheapest and softest. Carbide tooling is more expensive than high-speed steel but for small bits, the difference is not very significant. On larger tools carbide inserts are used making the cutting edges replaceable. I can personally recommend VOBECO tooling, they are only slightly more expensive than no-name Aliexpress cutters. When it comes to cutter geometry, single flute cutters are your best friend. They allow your router to move slower which puts less stress on the mechanical components when machining tougher materials like pom or aluminum.

## Enclosure
I have designed a table and enclosure for the machine of which I have only built the table so far. It features a cable passthrough that is let into the tabletop, sturdy construction, and removable side panels making servicing the machine very easy and convenient. The 3D model, as well as plans, can be found on my [grabcad page](https://grabcad.com/library/cnc-enclosure-werk2-1). The table frame is made from 80 x 80 mm construction lumber which is connected using easy half-lap joints cut on the table saw. The joints are not glued but only screwed together enabling easy disassembly which is necessary because the table alone is too heavy to be moved otherwise. A 21 mm multiplex sheet serves as a tabletop, connected to the frame using steel angles.

{{< figure src="view1.jpg" caption="Front view of the table and enclosure design" >}}
{{< figure src="view2.jpg" caption="Side view showing the enclosure construction" >}}
{{< figure src="view3.jpg" caption="Perspective view of the complete assembly" >}}
{{< figure src="view4.jpg" caption="Another angle showing the router placement" >}}

## Cost breakdown

| Item      | Cost  |
|-----------|-------|
| Lumber    | 210 € |
| Paint     | 38 €  |
| Fasteners | 25 €  |
| **Total** | 273 € |