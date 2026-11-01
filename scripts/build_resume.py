from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
from pathlib import Path
out=Path(__file__).resolve().parents[1] / 'assets/karthika-pillai-kumar-resume.pdf'
styles=getSampleStyleSheet()
styles.add(ParagraphStyle(name='NameLine',fontName='Helvetica-Bold',fontSize=22,leading=26,textColor=HexColor('#542238'),spaceAfter=6))
styles.add(ParagraphStyle(name='SectionLabel',fontName='Helvetica-Bold',fontSize=10,leading=14,textColor=HexColor('#542238'),spaceBefore=13,spaceAfter=5))
styles.add(ParagraphStyle(name='CopyLine',fontName='Helvetica',fontSize=9.5,leading=14,spaceAfter=5))
story=[]
def p(t,style='CopyLine'):story.append(Paragraph(t,styles[style]))
p('Karthika Pillai Kumar','NameLine')
p('<b>Data Scientist &amp; Engineer</b> | Melbourne, Australia')
p('<link href="mailto:karthikapillai@gmail.com">karthikapillai@gmail.com</link> | <link href="https://www.linkedin.com/in/karthikapillaikumar/">LinkedIn</link> | <link href="https://github.com/KarthikaPKumar">GitHub</link> | <link href="https://karthikapkumar.github.io/kathy/revamp/">Portfolio</link>')
p('PROFILE','SectionLabel')
p('Master of Data Science student at Monash (2025-2026), with software engineering experience on IBM watsonx.data (Presto). Open to graduate and junior data roles in Melbourne. Focus: predictive modelling, reliable data pipelines and applied AI.')
p('EXPERIENCE','SectionLabel')
p('<b>Software Developer | IBM India Software Labs, India</b><br/>August 2022 - January 2025')
p('Worked on Presto within watsonx.data across security, performance monitoring and developer tooling. Contributed audit logging, automated security checks and caching improvements. Built Python tools to streamline quality assurance.')
p('<b>Coding Instructor | Junior Engineers, Melbourne</b><br/>August 2025 - Present')
p('Teach Python, introductory data science and AI concepts. Support instructor onboarding and explain complex concepts through practical lessons.')
p('SELECTED PROJECTS','SectionLabel')
p('<b>Voltwise | Python, scikit-learn, SQL, dbt, DuckDB, FastAPI, Ollama</b>')
p('Forecast battery capacity ten discharge cycles ahead using NASA laboratory data. Leave-one-battery-out evaluation across four cells: 0.024 Ah MAE across 560 forecast windows, 44.7% lower error than persistence. Includes 13 dbt checks and a local, read-only AI agent. Research prototype; not validated on vehicle fleets. <link href="https://github.com/KarthikaPKumar/voltwise">Source code</link>')
p('<b>Nexora (DataMedic) | Data pipeline diagnostics</b>')
p('Interactive demonstration of pipeline diagnosis and recovery using synthetic scenarios and recorded results. Makes investigation steps visible. <link href="https://github.com/KarthikaPKumar/Nexora-demo">Source code</link>')
p('<b>Sensory-Aware Route Planner | Python, OpenStreetMap, GitHub Actions</b>')
p('Melbourne walking-route explorer using street and address data plus timestamped pedestrian-counter snapshots. Validation flags stale or incomplete observations; unavailable noise and light measurements remain unknown. <link href="https://github.com/KarthikaPKumar/Serverless-Sensory-Aware-Router">Source code</link>')
p('EDUCATION','SectionLabel')
p('<b>Master of Data Science</b> | Monash University, Melbourne | 2025-2026<br/><b>B.Tech (Honours), Computer Science Engineering</b> | TKM College of Engineering, India')
p('SKILLS','SectionLabel')
p('<b>Data and modelling:</b> Python, SQL, NumPy, scikit-learn, model validation.<br/><b>Analytics and applications:</b> dbt, DuckDB, semantic metrics, FastAPI, local Ollama agents.<br/><b>Professional platform work:</b> Presto, Java, audit logging, performance monitoring, Python tooling.')
SimpleDocTemplate(str(out),pagesize=(595.28,841.89),rightMargin=43,leftMargin=43,topMargin=36,bottomMargin=30,title='Karthika Pillai Kumar | Data Scientist & Engineer',author='Karthika Pillai Kumar').build(story)
