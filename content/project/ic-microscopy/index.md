---
title: IC Microscopy
summary: Visualizing integrated circuits in 3d.
date: 2024-12-08
authors:
    - admin
tags: 
    - ic-microscopy
    - model-viewer
image:
  caption: "Phillips BDX 67B NPN epitaxial base darlington power transistor"
aliases: 
  - /HugoBloxSite/post/ic-microscopy/
draft: false
featured: true
share: false
---
This is my first attempt at applying laser confocal microscopy to acquire 3d point clouds of integrated circuits and displaying them here in the browser. This post shows of some features of googles model-viewer library along with some custom java script. Technical details on how to convert and process the data is discussed as well.

## Showcase

A Phillips BDX 67B NPN epitaxial base darlington power transistor with integrated resistors to set the operating point and a free wheeling diode to protect it. The mesh has been heavily decimated and and the optical image has been applied as a normal map to enhance the visibility of small features.

{{< model-viewer-dimensions
    src="phillips_bdx_67b_x1_h4000_decimated3.glb"
    alt="An old ic."
    x_scale="100"
    y_scale="4000"
    z_scale="100"
    camera-orbit="0deg 150deg 1500m"
>}}

The model dimensions are accurate to the real world, but the height has been scaled to 4000 % of its actual size, exaggerating the chips features.

## Data Conversion

The data is acquired on a Keyence microscope and packaged in their proprietary e.g. `.vk6`/`.vk4` file format. The Keyence multifile analyzer software is used to export the microscopy data files to ``.stl`` or ``.step``.

Note: Gwyddion can also open `.vk6`/`.vk4` files, but I wasn't able to export a valid stl file with it. The Keyence software simply works and is very easy to use. Windows 3d-Viewer can then open the stl and save it as ``.glb`` for the model-viewer.

```mermaid
    flowchart LR
    M[Microscope] -->| vk4/vk6 | MA[Keyence MultiFile Analyzer]
    MA -->| stl binary | W[Windows 3D-Viewer]
    W -->| glb | MV[model-viewer/Editor]

    style M fill:#1565c0,stroke-width:0px,color:#fff
    style MA fill:#1976d2,stroke-width:0px,color:#fff
    style W fill:#2196f3,stroke-width:0px,color:#fff
    style MV fill:#64b5f6,stroke-width:0px,color:#fff
```


FreeCAD can open some microscopy data formats(but not .vk4 or .vk6 files). It also officially supports exports to ``.glb`` (see [FreeCAD wiki on GITF](https://wiki.freecad.org/GlTF)) but the mesh export function does not support it. I have noticed that stl provides better performance, while FreeCAD failed to open data saved as stp files.
On a side note: it can export printable ``.3mf`` files even without increasing the scaling on the exported data, which then have to be scaled in the slicer e.g. Cura, Meshmixer, ... 

### Online Converters 

There are many online converts with varying robustness and file size support. While they can be easily reached with a simple web search I see no reason why I should trust them with my data when Windows 3D-Viewer can do the same for free with virtually unlimited file size support and also faster and more reliable. Nether the less here are some I have tried before switching over.

- [3dpea.com](https://www.3dpea.com/en/convert/STL-to-GLB-compressed-with-DRACO)
    - Converter where you can also share files via link
	- This service worked. But the file size is limited to 500 Mb.
- [imagetostl.com](https://imagetostl.com/convert/file/stl/to/glb#convert)
    - I managed to get a file displayed in model-viewer/editor/ after scaling all units by 1000 times and converting the stl to glb on this website, Unfortunately even though the model is displayed in the editor, ``ACCESSOR_MIN_MISMATCH`` and ``ACCESSOR_ELEMENT_OUT_OF_MIN_BOUND`` error messages were generated.

## Editing Models/Meshes

FreeCAD has a powerful [Mesh Decimating](https://wiki.freecad.org/Mesh_Decimating) function which can be used to minimize a models file size by reducing the number of faces. This will inadvertently alter the model and in many cases rip holes into it, which gets worse the stronger the mesh is decimated. These holes can then be repaired in Meshmixer manually or automatically which may further distort the model.

To change the appearance of the model e.g. its texture the [modelviewer.dev/editor](https://modelviewer.dev/editor/) can be used to change it and safe it in the ``.glb`` file, which is different to the Windows 3d-Viewer which safes it as an external ``.json`` file.

## Challenges Providing Large Files

Serving files hundreds of Mb in size over the web might generally not be the smartest idea, but apart from long loading times what is actually stopping you? - Let's find out below.

Firefox can't display models over 400 Mb in it's WebGL viewer.  
Git doesn't support files > 100 Mb, but this can be circumvented by using the git lfs extension. However git lfs works by replacing the managed file in the repository with a link to an external storage location where the file is actually stored. Because of the browsers CORS policy ([learn more](https://de.wikipedia.org/wiki/Cross-Origin_Resource_Sharing)), this hasn't worked for me either. Anyways, GitHubs lfs storage limits are quite strict and anything above 1 Gb of storage requires a monthly payment.  

So a cheaper alternative is to upload it to a cloud storage provider like Nextcloud or the like. But accessing the resource will again be blocked by the browsers CORS policy unless the file server provides the correct headers. 
Consequently, access to the server config is necessary to configure the headers correctly, which typically requires a self hosted instance. 

So if you don't want to host your own file server that is accessible from the internet (which comes with it's own can of worms), what would be an actual solution? 

Intercepting the browsers request to the file server and adding the correct CORS headers then. There are two ways to do this, an easy way and a hard way.

The easy way: Telling your visitors to install a browser plugin like [Allow CORS: Access-Control-Allow-Origin](https://addons.mozilla.org/en-US/firefox/addon/access-control-allow-origin/) (also available for chrome) which does this for you automatically. I have tested this myself and it works very well.

The hard way: Setting up your own service helper to the same. This can either be a js script on your page or via a cdn (content distribution network) like cloudflare which offers this service for free (as of 01/2025). Both solutions will require some setup and I can not guarantee that the work because I couldn't get it to work my self.

## Ideas

Adding the optical image as a normal map to the glb file greatly enhances visibility of small features:

<div class="flex flex-col md:flex-row gap-4 justify-center items-start my-4">
  <figure class="w-full md:w-1/2">
    <img src="intel_no-normalMap.png" alt="Intel cpu without normal map" class="rounded-lg shadow-md">
    <figcaption class="text-center text-sm mt-2">Without normal map</figcaption>
  </figure>
  <figure class="w-full md:w-1/2">
    <img src="intel_with-normalMap.png" alt="Intel cpu with normal map" class="rounded-lg shadow-md">
    <figcaption class="text-center text-sm mt-2">With normal map</figcaption>
  </figure>
</div>

- ✅ Add a fullscreen mode so larger models can be viewed without obstruction.
- ✅ Add dimensions 
    - Part the scale into two parts so the actual feature size can be interpreted more easily (like in the MultiFile Analyzer)
- Add an animated or at least coloured texture to highlight certain parts of the ic.
- Add hotspots for base emitter source 
  <figure class="w-full md:w-1/2">
    <img src="hotspots.png" alt="Phillips chip with hotspots" class="rounded-lg shadow-md">
    <figcaption class="text-center text-sm mt-2">Base and emitter labeled with hotspots.</figcaption>
  </figure>
