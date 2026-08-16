---
title: Audio Spectrum Analyzer
description: All analog. All fun.
date: 2018-07-01
tags:
  - electronics
  - audio
  - pcb
draft: false
featured: false
---

The name audio spectrum analyzer is probably a bit too high trotting. A more befitting name would be funny looking graph display that changes with the music. But this was my second electronics project in 2018. It uses only through-hole components on a two-layer PCB.

{{< figure src="moneyshotbig_cut.jpg" caption="Component side view. Connectors and input selection switch on the bottom left. Bar graph drivers." >}}

## Theory of Operation

The input signal is selected by switch S1 from either a 3.5 mm audio jack or the microphone. Both have individual pre-amplifiers with adjustable gain. The selected signal is then fed into a filter bank comprised of ten band pass filters with fixed center frequencies from 32 Hz to 16 kHz. The individual frequency components are then rectified and buffered. The buffer is formed by an RC circuit with a time constant of 100 ms, resulting in a discharge time of about 0.5 s which is chosen purely for aesthetic reasons, so that the bar graph drops nicely. Each signal is displayed on its own ten-segment bar graph display. Each bar graph is driven by an LM3914 Dot/Bar Display Driver. The diode D7 roughly compensates for the forward voltage drop of the rectifier in the signal path.

## Schematics and Layout

[![Static Badge](https://img.shields.io/badge/GitHub-Audio--Spectrum--Analyser-2ea44f?style=flat&logo=github)](https://github.com/Jajaho/Audio-Spektrum-Analysator) 

## Mistakes & Learnings

IC1B is a linear amplifier, but the loudness of sound is inherently exponential. Therefore any music file contains waves with multiple different magnitudes of amplitude. A logarithmic amplifier is a must.

The caps for the peak detection circuit, even though this isn't a precision instrument, should be low drift and somewhat precision e.g. not electrolytic.

Replacing 9 of the 10 expensive LM3914Ns by multiplexing the different frequency signals.  

**Edit (20.11.2022):** Looking back four years and five semesters EE later, I see that I was more focused on making the device look good, rather than electrically sound. I wasted a lot of time aligning vias and arranging components rather than calculating and verifying my choices.