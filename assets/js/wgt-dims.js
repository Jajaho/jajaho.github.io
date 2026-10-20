/* Bounding-box dimensions for one <model-viewer>: six corner anchors, five
   readout chips and an SVG of dashed leader lines, all redrawn on every
   `camera-change`, which is why they track the model as it rotates.

   Shared by model-viewer-dimensions and model-viewer-slider. Both inline this
   file into their own IIFE (`resources.Get … | safeJS`), so `wgtDims` stays
   local to each widget rather than landing on `window`.

   The box is model-viewer's own, axis-aligned in the displayed frame — after
   `orientation` is applied — which is also the frame hotspots are placed in.

     opts.unit, opts.unitScale   label and multiplier for the readout
     opts.scale {x, y, z}        per-axis exaggeration applied when the model
                                 was built, as a percentage; the readout
                                 divides it back out

   Returns { show(on), render() }. Styling lives in layer 7 of
   assets/css/site.css. */
function wgtDims(viewer, opts) {
  const SVG = 'http://www.w3.org/2000/svg';

  /* [slot, normal, axis]. The normal decides `facingCamera`; an `axis` marks a
     readout chip and names what it measures. Positions arrive on `load`. */
  const spots = [
    ['hotspot-dot+X-Y+Z', '1 0 0'],
    ['hotspot-dot+X-Y-Z', '1 0 0'],
    ['hotspot-dot+X+Y-Z', '0 1 0'],
    ['hotspot-dot-X+Y-Z', '0 1 0'],
    ['hotspot-dot-X-Y-Z', '-1 0 0'],
    ['hotspot-dot-X-Y+Z', '-1 0 0'],
    ['hotspot-dim+X-Y', '1 0 0', 'z'],
    ['hotspot-dim+X-Z', '1 0 0', 'y'],
    ['hotspot-dim+Y-Z', '0 1 0', 'x'],
    ['hotspot-dim-X-Z', '-1 0 0', 'y'],
    ['hotspot-dim-X-Y', '-1 0 0', 'z'],
  ];

  /* [from, to, chip]. A line whose chip has rotated to the far side of the
     model would read as belonging to the near face, so it is dropped. */
  const rules = [
    ['hotspot-dot+X-Y+Z', 'hotspot-dot+X-Y-Z', 'hotspot-dim+X-Y'],
    ['hotspot-dot+X-Y-Z', 'hotspot-dot+X+Y-Z', 'hotspot-dim+X-Z'],
    ['hotspot-dot+X+Y-Z', 'hotspot-dot-X+Y-Z'],
    ['hotspot-dot-X+Y-Z', 'hotspot-dot-X-Y-Z', 'hotspot-dim-X-Z'],
    ['hotspot-dot-X-Y-Z', 'hotspot-dot-X-Y+Z', 'hotspot-dim-X-Y'],
  ];

  const chips = {};
  spots.forEach(([slot, normal, axis]) => {
    const el = document.createElement('div');
    el.slot = slot;
    el.className = axis ? 'wgt-tag wgt-tag--hotspot' : 'wgt-dot';
    el.dataset.position = '0 0 0';
    el.dataset.normal = normal;
    if (axis) {
      el.hidden = true;
      chips[slot] = { el, axis };
    }
    viewer.appendChild(el);
  });

  const overlay = document.createElementNS(SVG, 'svg');
  overlay.setAttribute('class', 'wgt-rule');
  overlay.setAttribute('hidden', '');
  const lines = rules.map(() => overlay.appendChild(document.createElementNS(SVG, 'line')));
  viewer.appendChild(overlay);

  /* SVG elements have no `hidden` property — assigning one only sets an
     expando — so toggle the attribute; site.css's [hidden] rule does the rest. */
  const parts = [overlay, ...Object.values(chips).map((c) => c.el)];

  /* — leader lines — */
  const q = (name) => viewer.queryHotspot?.(name);

  function draw(line, a, b, chip) {
    if (!a || !b) return;
    line.setAttribute('x1', a.canvasPosition.x);
    line.setAttribute('y1', a.canvasPosition.y);
    line.setAttribute('x2', b.canvasPosition.x);
    line.setAttribute('y2', b.canvasPosition.y);
    line.style.display = chip && !chip.facingCamera ? 'none' : '';
  }

  function render() {
    rules.forEach(([from, to, chip], i) => draw(lines[i], q(from), q(to), chip && q(chip)));
  }

  /* — measure once the geometry exists — */
  function measure() {
    const c = viewer.getBoundingBoxCenter();
    const s = viewer.getDimensions();

    /* The models are authored with one axis exaggerated so surface relief is
       visible; dividing by that factor gives the true measurement back. */
    const pct = (v) => (parseFloat(v) || 100) / 100;
    const real = {
      x: s.x / pct(opts.scale.x),
      y: s.y / pct(opts.scale.y),
      z: s.z / pct(opts.scale.z),
    };

    const hx = s.x / 2, hy = s.y / 2, hz = s.z / 2;
    [
      ['hotspot-dot+X-Y+Z', c.x + hx, c.y - hy, c.z + hz],
      ['hotspot-dot+X-Y-Z', c.x + hx, c.y - hy, c.z - hz],
      ['hotspot-dot+X+Y-Z', c.x + hx, c.y + hy, c.z - hz],
      ['hotspot-dot-X+Y-Z', c.x - hx, c.y + hy, c.z - hz],
      ['hotspot-dot-X-Y-Z', c.x - hx, c.y - hy, c.z - hz],
      ['hotspot-dot-X-Y+Z', c.x - hx, c.y - hy, c.z + hz],
      ['hotspot-dim+X-Y', c.x + hx * 1.2, c.y - hy * 1.1, c.z],
      ['hotspot-dim+X-Z', c.x + hx * 1.2, c.y, c.z - hz * 1.2],
      ['hotspot-dim+Y-Z', c.x, c.y + hy * 1.1, c.z - hz * 1.1],
      ['hotspot-dim-X-Z', c.x - hx * 1.2, c.y, c.z - hz * 1.2],
      ['hotspot-dim-X-Y', c.x - hx * 1.2, c.y - hy * 1.1, c.z],
    ].forEach(([name, x, y, z]) => viewer.updateHotspot({ name, position: `${x} ${y} ${z}` }));

    for (const { el, axis } of Object.values(chips)) {
      el.textContent = `${(real[axis] * Number(opts.unitScale)).toFixed(2)} ${opts.unit}`;
    }

    render();
  }

  if (viewer.loaded) measure();
  viewer.addEventListener('load', measure);
  viewer.addEventListener('camera-change', render);

  return {
    show(on) {
      parts.forEach((el) => el.toggleAttribute('hidden', !on));
      if (on) render();
    },
    render,
  };
}
