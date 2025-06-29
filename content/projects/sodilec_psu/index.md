---
title: Sodilec SDL / G2 - HR 36.30 Power Supply Repair
date: 2022-09-25
tags:
  - repair
  - electronics
  - power supply
draft: true
featured: false
---
This repair attempt features an Sodilec SDL / G2 - HR 36.30 power Supply 

As a preemptive measure, all RIFA brand spark-suppressor capacitors are replaced with plastic film capacitors with the according rating (X2/Y2). The paper in the old RIFA can suck up moisture. When powering back up the water heats up, expands, and can cause the capacitor to explode violently.

{{< figure src="top_view_labeled.jpg" caption="Labeled overview of the power supply components" >}}

## The Evidence

- R4 has exploded violently, but the resistance measures ok (pm 10%)
- The 1.25 A fuse has blown 
- On the terminal of C5, some electrolyte has oozed out but capacitance and ESR measured ok.

The cause was probably Q1, which measured 2,2 Ohm between the collector and emitter. To rule out possible causes, the components of the driver stage have been tested and electrolytic capacitors replaced. 

When turning the line voltage to 150 VAC the main 20 kHz oscillator starts operating audibly. And a louder whining starts emanating from T1. At ~ 205 VAC the integrated circuit breaker in the main power switch trips because of the overvoltage protection.

{{< figure src="Ch1-Overvoltage_signal Ch2-Line voltage.jpg" caption="Ch1 - Overvoltage signal Ch2 - Line voltage" >}}

While investigating the issue the problem went away without any measures.

{{< figure src="transistorVBE.webp" caption="Base - emitter voltage of Q1 and Q2" >}}

The base-emitter voltage of Q2 is constantly at ground potential.


As a preemptive measure, all RIFA brand spark-suppressor capacitors are replaced with plastic film capacitors with the according rating (X2/Y2). The paper in the old RIFA can suck up moisture. When powering back up the water heats up, expands, and can cause the capacitor to explode violently.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/sodilec_psu_repair/top_view_labeled.jpg" title="overvoltage signal" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Labeled overview of the power supply components.
</div>

# The evidence

- R4 has exploded violently, but the resistance measures ok (pm 10%)
- The 1.25 A fuse has blown 
- On the terminal of C5, some electrolyte has oozed out but capacitance and ESR measured ok.

The cause was probably Q1, which measured 2,2 Ohm between the collector and emitter. To rule out possible causes, the components of the driver stage have been tested and electrolytic capacitors replaced. 

When turning the line voltage to 150 VAC the main 20 kHz oscillator starts operating audibly. And a louder whining starts emanating from T1. At ~ 205 VAC the integrated circuit breaker in the main power switch trips because of the overvoltage protection.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/sodilec_psu_repair/Ch1-Overvoltage_signal Ch2-Line voltage.jpg" title="overvoltage signal" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Ch1 - Overvoltage signal Ch2 - Line voltage
</div>

While investigating the issue the problem went away without any measures.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/sodilec_psu_repair/transistorVBE.webp" title="VBE" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Base - emitter voltage of Q1 and Q2
</div>

The base-emitter voltage of Q2 is constantly at ground potential.