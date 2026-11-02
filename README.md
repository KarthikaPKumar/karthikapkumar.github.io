# Kathy | Data Scientist & Engineer

A portfolio for graduate and junior data roles in Melbourne. It foregrounds IBM watsonx.data experience, demonstrated skills, measured forecasting and reproducible open-data work.

## Live pages

- [Interactive portfolio](https://karthikapkumar.github.io/kathy/revamp/)
- [Editorial portfolio](https://karthikapkumar.github.io/kathy/)
- [Voltwise case study](https://karthikapkumar.github.io/kathy/case-studies/voltwise.html)

The root page remains available to preserve existing bookmarks. Both versions use the same project-evidence document. GitHub Pages publishes the `main` branch root; no application server, credentials or database are required.

## Repository map

| Path | Purpose |
| --- | --- |
| `series-source/` | Editable React, TypeScript and Vite application |
| `revamp/` | Generated static build; regenerate rather than edit |
| `index.html`, `editorial.css`, `editorial.js` | Editorial root page |
| `series-source/src/data/portfolio.ts` | Career, education and skills content |
| `series-source/src/data/projectEvidence.json` | Project status, outcomes, architecture and limitations |
| `case-studies/` | Shareable static project write-ups |
| `assets/` | Portraits, real output previews and résumé PDF |
| `scripts/` | PDF and static write-up generators |

## Build and preview

```sh
cd series-source
npm ci
npm run build
cd ..
python3 scripts/build_case_studies.py
python3 scripts/build_root_projects.py
python3 -m http.server 8772 --directory ..
```

Visit `http://localhost:8772/kathy/revamp/` or `http://localhost:8772/kathy/`. Vite's base is `/kathy/revamp/`; shared evidence assets and write-ups live under `/kathy/`.

The résumé can be regenerated with `python3 scripts/build_resume.py` after installing ReportLab. Keep its facts aligned with `portfolio.ts`; inspect the resulting one-page PDF before publishing.

## Evidence policy

- **Measured prototype:** Voltwise reports 0.024 Ah MAE on 560 held-out windows across four NASA laboratory cells. This does not establish fleet performance or battery safety.
- **Open-data prototype:** Senseway uses actual OSM streets and council snapshots. Data counts are coverage metrics, not impact or latency benchmarks. Stale observations disable activity-based comparison.
- **Synthetic demo:** Nexora replays recorded synthetic results; it has no public operational backend.
- **Code & architecture:** Wildlife documents inference and deployment architecture without a verified public endpoint or published benchmark.
- **Concept:** Speech Analysis currently has a descriptive README rather than a validated implementation.

Every write-up identifies its scope, failure modes, scale, cost and security limitations. No employer code or undisclosed IBM performance figures are published. New technology claims require corresponding source evidence.

## Preview provenance and accessibility

`assets/voltwise-capacity.svg` plots recorded NASA measurements. `assets/senseway-output.png` is an actual public demo screenshot captured on 1 November 2026. The planner attributes its map to OpenStreetMap (ODbL) and its address/counter data to the City of Melbourne (CC BY); the case study links to the source project and datasets.

The UI uses native scrolling, visible focus states, labelled controls, reduced-motion support and a native cursor. Project imagery is separate from copy. Static case studies work without JavaScript. Desktop and narrow-screen browser checks cover navigation, project dialogs, content overflow and résumé access. Physical-device and Lighthouse audits are separate checks and are not claimed here.

Template provenance is recorded in [`series-source/ATTRIBUTION.md`](series-source/ATTRIBUTION.md). Unused earlier root design scripts and styles have been removed; Git history retains prior versions.

The chart renderer `scripts/build_voltwise_chart.py` uses ReportLab and the adjacent Voltwise checkout’s `data/cycles.csv`. It asserts 168 B0005 measurements and includes labelled capacity and cycle axes.

VKinder is featured as the core team project. Its evidence summary and case study are based on the KinderPrint README and Family Fit model card (S2.1/F3), reviewed 2 November 2026. Reported evaluation results are explicitly distinguished from an independent rerun. The private source repository is not linked as public code; the public app is https://www.vkinder.me/. No backend infrastructure or repository permissions were changed.

Voltwise uses a navy/ice-blue SVG regenerated from the same 168 NASA B0005 measurements. VKinder uses a sage evidence graphic, while the route planner retains its actual map screenshot.
