"""Install an approved résumé PDF at the portfolio’s existing download URLs."""
from pathlib import Path
import argparse, shutil
p = argparse.ArgumentParser(description=__doc__)
p.add_argument("pdf", type=Path)
a = p.parse_args()
if a.pdf.read_bytes()[:5] != b"%PDF-":
    p.error("Expected a PDF file")
r = Path(__file__).resolve().parents[1]
for name in ("Kathy.pdf", "karthika-pillai-kumar-resume.pdf"):
    shutil.copyfile(a.pdf, r / "assets" / name)
