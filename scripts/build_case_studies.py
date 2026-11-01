from pathlib import Path
import json, html
r=Path(__file__).resolve().parents[1]
d=json.loads((r/"series-source/src/data/projectEvidence.json").read_text())
# Standalone, shareable writeups use the same evidence data as the app.
(r/'case-studies').mkdir(exist_ok=True)
for key,e in d.items():
 esc=html.escape
 diagram='<ol class="flow">'+''.join('<li>'+esc(x)+'</li>' for x in e['steps'])+'</ol>'
 image=f'<figure><img src="{e["image"]}" alt="{esc(e["alt"])}"><figcaption>{esc(e["caption"])}</figcaption></figure>' if e['image'] else ''
 body=f'<a href="../revamp/">← Kathy’s portfolio</a><p class="status">{e["status"]}</p><h1>{e["title"]}</h1><p>{e["summary"]}</p><p class="result">{e["result"]}</p>{image}<h2>Data flow and architecture</h2><p>{e["scope"]}</p>{diagram}'
 for heading,field in [('Failure and limitations','failure'),('Scale and evaluation','scale'),('Hosting and cost','cost'),('Security and privacy','security')]:body+=f'<h2>{heading}</h2><p>{e[field]}</p>'
 body+=f'<p><a href="{e["source"]}">Source and documentation ↗</a></p>'
 if e['live']:body+=f'<p><a href="{e["live"]}">Open demo ↗</a></p>'
 (r/f'case-studies/{key}.html').write_text(f'<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{esc(e["title"])} | Kathy</title><link rel="stylesheet" href="case-study.css"><main>{body}</main></html>')
(r/'case-studies/case-study.css').write_text('body{margin:0;background:#100a0d;color:#f5ede4;font:17px/1.7 system-ui,sans-serif}main{max-width:900px;margin:auto;padding:48px 24px}h1{font-size:clamp(32px,6vw,56px);line-height:1.15}h2{margin-top:40px;font-size:24px}a{color:#e5c69b}p,figcaption{color:#d5c8cb}.status,.result{color:#e5c69b}.result{border-left:3px solid;padding:12px 20px}figure{margin:32px 0}img{width:100%;border-radius:12px}figcaption{font-size:14px}.flow{display:flex;flex-wrap:wrap;gap:12px;padding:0;list-style:none;counter-reset:step}.flow li{flex:1 1 180px;border:1px solid #74616a;border-radius:8px;padding:18px;background:#21161b}.flow li:before{counter-increment:step;content:counter(step) " → ";color:#e5c69b}a:focus-visible{outline:2px solid #e5c69b;outline-offset:4px}')
