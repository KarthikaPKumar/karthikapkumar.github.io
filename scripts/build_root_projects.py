from pathlib import Path
import json,re,html
r=Path(__file__).resolve().parents[1];d=json.loads((r/'series-source/src/data/projectEvidence.json').read_text())
def card(k):
 e=d[k];im=f'<figure class="project-output"><img src="{e["image"]}" alt="{html.escape(e["alt"])}" loading="lazy"><figcaption>{e["caption"]}</figcaption></figure>' if e['image'] else ''
 return f'<article class="project-card">{im}<div class="project-information"><p class="project-status">{e["status"]}</p><h3>{e["title"]}</h3><p>{e["summary"]}</p><p class="project-result">{e["result"]}</p><div class="tech-row">'+''.join('<span>'+html.escape(t)+'</span>' for t in e['tools'])+f'</div><div class="project-links"><a href="case-studies/{k}.html">Read case study ↗</a><a href="{e["source"]}" target="_blank" rel="noopener noreferrer">Source ↗</a></div></div></article>'
section='<section class="section-wrap section projects-section" id="projects" aria-labelledby="projects-title"><div class="section-heading"><h2 id="projects-title">Projects</h2><p>Measured forecasting and a working open-data application. Read the case studies for architecture, evidence and limitations.</p></div><div class="projects-grid">'+card('voltwise')+card('senseway')+'</div><details class="secondary-projects"><summary>More work: demos, architecture and concepts</summary><div class="projects-grid">'+''.join(card(k) for k in ['nexora','wildlife','speech'])+'</div></details></section>'
p=r/'index.html';s=p.read_text();start=s.index('<section class="section-wrap section projects-section"');end=s.index('</section>',start)+10;s=s[:start]+section+s[end:]
p.write_text(s)
