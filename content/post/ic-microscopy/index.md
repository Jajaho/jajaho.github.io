---
title: IC Microscopy
summary: My first attempt at applying laser microscopy to acquire 3d point clouds of integrated circuits and displaying them here.
date: 2024-12-08
authors:
  - admin
tags: 
draft: true
featured: false
share: false
---
This is my first attempt at applying laser microscopy to acquire 3d point clouds of integrated circuits and displaying them here.

{{< model-viewer
    src="div2_3x1000z1000.glb"
    alt="An old ic."
    camera-orbit="0deg 150deg 1500m">}}

{{< model-viewer-dimensions
src="div2_3z1000.glb"
ios-model="Astronaut.usdz"
alt="An old ic."
x_scale="10"
y_scale="1000"
z_scale="10"
camera-orbit="0deg 150deg 1500m">}}

## Chips

### Phillips BDX 
![](IMG_20241210_172843.jpg)

<!-- {{< model-viewer-dimensions
    src="https://cloudstore.uni-ulm.de/s/sGWMD6gHP3N3BrL/download/phillips_bdx_67b_x1_h4000.glb"
    ios-model="Astronaut.usdz"
    alt="An old ic."
    x_scale="100"
    y_scale="4000"
    z_scale="100"
    camera-orbit="0deg 150deg 1500m">}} -->

### Intel

<!-- {{< model-viewer
    src="https://cloudstore.uni-ulm.de/s/sLbzm2Lpd5CaLaN/download/intel_1976,77.glb"
    ios-model="Astronaut.usdz"
    alt="An old intel cpu."
    camera-orbit="0deg 150deg 1500m">}} -->

## Data Conversion

INSERT MERMAID DIAGARM HERE!

The data is acquired on a Keyence microscope and packaged in their proprietary e.g. `.vk6`/`.vk4` file format. The Keyence multifile analyzer software is used to export the microscopy data files to ``.stl`` or ``.step``.

Note Gwyddion can also open `.vk6`/`.vk4` files, but I wasn't able to export a valid stl file with it. The Keyence software simply works and is very easy to use.
I have noticed that stl provides better performance, while FreeCAD failed to open data saved as stp files.
While I managed to export printable ``.3mf`` files even without increasing the scaling on the exported data. I had trouble converting it into ``.glb`` file that the model-viewer can take. 


And more importantly, it is not displayed at all on my embedded model-viewer here.

Note: FreeCAD can open microscopy data (but not .vk4 or .vk6 files) and export to glb (which has not worked so far, even when scaling up beforehand.)

- [FreeCAD wiki on GITF](https://wiki.freecad.org/GlTF)
- [Converter where you can also share files via link](https://www.3dpea.com/en/convert/STL-to-GLB-compressed-with-DRACO)
	- This service worked. But the file size is limited to 500 Mb.
- I managed to get a file displayed in model-viewer/editor/ after scaling all units by 1000 times and converting the stl to glb on this website, [imagetostl.com](https://imagetostl.com/convert/file/stl/to/glb#convert).
Unfortunately even though the model is displayed in the editor, this error message is generated: ![](validation_report.png)
- Windows 3d-Viewer can save as ``.glb``

To change the appearance of the model e.g. its texture the [modelviewer.dev/editor](https://modelviewer.dev/editor/) can be used to change it and safe it in the ``.glb`` file, which is different to the Windows 3d-Viewer which safes it as an external ``.json`` file.

## Ideas

- Add optical image as a texture 
	- Better as normal map:
	 ![](Pasted%20image%2020241212100732.png)
- Add an animated texture to highlight certain parts of the ic
- Add dimensions
