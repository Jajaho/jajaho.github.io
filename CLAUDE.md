# jakobholz.com

## Deployment

`.github/workflows/publish.yaml` (GitHub Pages) is the live path. It builds with
`${{ steps.pages.outputs.base_url }}`, which reads the custom domain from the
repo's Pages settings — an Actions deploy needs no `CNAME` file in the repo.

## Stale Netlify config — leave it alone

`netlify.toml` and the `blox-plugin-netlify` import in
`config/_default/module.yaml` are unused leftovers from the HugoBlox
`theme-academic-cv` starter (both arrived in the initial commit, 2024-11-05,
and `netlify.toml` has never been edited). The starter ships GitHub *and*
Netlify deploy paths and expects you to pick one; only the GitHub half is live.

Deliberately kept, not overlooked. Do not "clean it up" unasked.

Two things to know if it ever is removed:

- The module registers the `headers` and `redirects` output formats used at
  `config/_default/hugo.yaml:38` (`home: [HTML, RSS, headers, redirects, …]`).
  Dropping the import without also dropping those entries **fails the build**
  on an unknown output format. Both go in the same change.
- It writes `public/_headers` on every build, which GitHub Pages ignores. The
  security headers in it (HSTS, X-Frame-Options, Permissions-Policy, …) are
  therefore **not applied** — removing the module takes away no protection that
  is actually in force. Real headers would need a CDN in front.

Redirects are unaffected either way: the ones that work come from Hugo
`aliases:` in front matter, which emit real HTML refresh pages.
