---
title: OpenScan 
summary: A showcase of DIY photogrammetry performance.
date: 2025-08-21
lastmod: 2026-08-16
# authors: # Commented out because new theme update adds the logo to posts
#     - admin
tags: 
    - open-scan
    - model-viewer
image:
  caption: "Photogrammetry rocks Einstein"
aliases: 
  - /HugoBloxSite/post/openscan/
draft: false
featured: false
share: false
---

{{< model-viewer-slider
    src1="Einstein_Original_Pos.glb"
    src2="Einstein_Scan_Pos.glb"
    rot1="0 -90 0"
    rot2="0 -90 0"
    color1="#818691ff"
    color2="#357097ff"
    btn1-text="Model" 
    btn2-text="Scan"
    alt="Einstein source and scan."
    camera-orbit="0deg 150deg 1500m"
>}}

While affordable 3d printers have been available for quite some time, the reverse path from object to file has been significantly harder and more expensive, often out of the reach of makers. Thanks to the work of Thomas Megel (founder) and a number of incredibly passionate contributors in the community, a reliable and affordable photogrammetry solution has been developed, called [OpenScan](https://openscan.eu/). Motivated by the lack of better options, the project developed from a prototype construction into an ecosystem with a rich choice of hardware variants and software solutions, even to a point where it is economically viable.

## What is OpenScan

As of writing this, the OpenScan project can be divided into three different pieces that come together: First the hardware taking the photos of the subject, basically an automated camera rig. Second, the firmware running on the hardware and last but certainly not least: The photogrammetry software running on a host PC or cloud creating a 3D model from the photos. Here is a short overview:

- Hardware models:
  - Classic
  - Midi
  - Mini
- Firmware:
  - Original firmware
  - Meanwhile
  - Composer (free, third party, closed source)
  - Open Scan 3 (in development)
- Photogrammetry software:
  - Open Scan Cloud (free, first party, closed source with the intention of open sourcing in the future)

There are other FOSS and commercial photogrammetry solutions which can substitute the Open Scan Cloud, such as [Meshroom](https://alicevision.org/), [KIRI Engine](https://www.kiriengine.app/), [3D Zephyr](https://www.3dflow.net/3df-zephyr-photogrammetry-software/) (paid), [Metashape](https://www.agisoft.com/) (paid).

The Open Scan mini v2.2 in combination with the Open Scan cloud offers a good performance out of the box as you can see for yourself with the 3D printed and scanned bust of Einstein from the beginning.

## Assembly

While there is some good documentation available - as is often the case for passion projects, it can be incomplete and/or scattered sometimes. I thought some might find the basic connection diagram below useful. Its simplicity really goes to show however how little 
it takes from the hardware side to achieve quite spectacular results, suitable for figures or as reference for use in CAD.

{{< figure src="Black Shield V2.1 PCB.svg" caption="Connection Diagram" >}}



