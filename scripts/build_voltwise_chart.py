"""Render the supplied NASA B0005 measurements, never simulated values."""
import csv
from pathlib import Path
from reportlab.graphics.shapes import Drawing, String, Rect
from reportlab.graphics.charts.lineplots import LinePlot
from reportlab.graphics import renderSVG
from reportlab.lib.colors import HexColor
root=Path(__file__).resolve().parents[1]
source=root.parent/'voltwise/data/cycles.csv'
points=[(int(r['cycle']),float(r['capacity'])) for r in csv.DictReader(source.open()) if r['cell']=='B0005']
assert len(points)==168
chart=Drawing(720,405)
chart.add(Rect(0,0,720,405,fillColor=HexColor('#f3f0e9'),strokeColor=None))
chart.add(String(70,368,'NASA B0005: measured battery capacity',fontName='Helvetica-Bold',fontSize=19,fillColor=HexColor('#30252b')))
plot=LinePlot();plot.x=72;plot.y=86;plot.width=602;plot.height=240;plot.data=[points]
plot.lines[0].strokeColor=HexColor('#7f2944');plot.lines[0].strokeWidth=2.5
plot.xValueAxis.valueMin=1;plot.xValueAxis.valueMax=168;plot.xValueAxis.valueSteps=[1,40,80,120,168]
plot.yValueAxis.valueMin=1.2;plot.yValueAxis.valueMax=2.0;plot.yValueAxis.valueSteps=[1.2,1.4,1.6,1.8,2.0]
for axis in [plot.xValueAxis,plot.yValueAxis]:
 axis.labels.fontSize=12;axis.labels.fillColor=HexColor('#51444a');axis.strokeColor=HexColor('#93858c')
plot.yValueAxis.visibleGrid=True;plot.yValueAxis.gridStrokeColor=HexColor('#d5ced0')
chart.add(plot)
chart.add(String(280,47,'Discharge cycle',fontName='Helvetica',fontSize=14,fillColor=HexColor('#51444a')))
chart.add(String(13,338,'Ah',fontName='Helvetica',fontSize=14,fillColor=HexColor('#51444a')))
chart.add(String(72,18,'168 recorded cycles · laboratory measurements, not vehicle-fleet data',fontName='Helvetica',fontSize=11,fillColor=HexColor('#51444a')))
renderSVG.drawToFile(chart,str(root/'assets/voltwise-capacity.svg'))
