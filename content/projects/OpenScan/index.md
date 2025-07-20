---
title: OpenScan
summary: A showcase of DIY photogrammetry performance.
date: 2024-12-08
# authors: # Commented out because new theme update adds the logo to posts
#     - admin
tags: 
    - ic-microscopy
    - model-viewer
image:
  caption: "Photogrammetry rocks Einstein"
aliases: 
  - /HugoBloxSite/post/ic-microscopy/
draft: true
featured: false
share: false
---

{{< model-viewer-slider
    src1="Einstein_Original_Pos.glb"
    src2="Einstein_Scan_Pos.glb"
    rot1="0 -90 0"
    rot2="0 -90 0"
    btn1-text="Model" 
    btn2-text="Scan"
    alt="Einstein source and scan."
    camera-orbit="0deg 150deg 1500m"
>}}

While affordable 3d printers have been available for quite some time. The reverse path from object to file has been significantly harder and more expensive, often out of the reach of makers. Thanks to the work of Thomas Megel (founder) and a number incredibly passionate contributors in the community, they have developed a reliable and affordable photogrammetry solution, called [OpenScan](https://openscan.eu/). Motivated by the lack of better options, the project developed from a makeshift construction into an ecosystem with a rich of choice of hardware models and software solutions, to a point where it is also economically viable.

## What is OpenScan

As of now, we can coarsely distinguish between these three categories:

- Hardware-Models:
  - Classic
  - Midi
  - Mini
- Firmware
  - Original firmware
  - Meanwhile
  - Composer (free, third party, closed source)
  - Open Scan 3 (in development)
- Photogrammetry Software
  - Open Scan Cloud (free, first party, closed source with the intention of open sourcing in the future)

There are other FOSS and commercial photogrammetry solutions which can substitute the Open Scan Cloud, such as [Meshroom](https://alicevision.org/), [KIRI Engine](https://www.kiriengine.app/), [3D Zephyr](https://www.3dflow.net/3df-zephyr-photogrammetry-software/) (paid), [Metashape](https://www.agisoft.com/) (paid).

The Open Scan mini v2.2 in combination with the Open Scan cloud offer a good performance out of the box as you can see for your self with the 3D printed and scanned bust of Einstein from the beginning.




