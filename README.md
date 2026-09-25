# BSI Apps

The showcase page for BSI Production's app suite: ShopCall, StandBy, PatchMap, Loader and TrussTape.

Static site, one `index.html` plus `img/`. No build step. Hosted on GitHub Pages.

## Updating screenshots

- **Loader**: `cd ~/loader && LOADER_SHOTS=/some/dir npx electron .` (runs against a throwaway data folder, demo load).
- **TrussTape**: `cd ~/trusstape && TRUSSTAPE_SHOTS=/some/dir npx electron .`
- **StandBy**: `cd ~/bsi-showcall-app && GOS=5 node tools/dev/devserver.js` then capture `http://127.0.0.1:8090/caller?k=devkey`, `/display`, `/timer`, `/?dept=Video`; `node tools/dev/prompterdev.js` for `:8092/` and `/out`.
- **PatchMap**: `~/patchmap/design/pitch-2026-09-24/after/*.png`.
- **ShopCall**: fixture renders in `~/bsi-shop-systems/.claude/worktrees/suite/design/`.

Convert with `magick in.png -resize "1800x>" -quality 86 img/name.jpg`.
