# Paralleles Laden

Wenn du mehr Akkus mit der gleichen Spannung und grob der gleichen Kapazität hast, kannst du dir überlegen, ob du dir ein sog. "parallel charging board" oder "Para-Board" zulegst. Das ist eine Platine, die mehrere Akkus miteinander verbindet, sodass sie für das Ladegerät wie ein einziger Akku aussehen. Das heißt, du kannst dein Ladegerät auf mehr Ampere einstellen.

Rechenbeispiel:

Du hast fünf Akkus je 1000 mAh. Lädst du diese einzeln mit je 1C, musst du dein Ladegerät auf 1 Ampere einstellen. Der Ladevorgang wird etwa eine Stunde pro Akku brauchen, also 5 Stunden insgesamt.

Verwendest du ein Para-Board, verhalten sich die 5 Akkus wie ein einziger Akku mit 5000 mah. Das heißt, du kannst mit 5 Ampere laden, ohne den Richtwert von 1C zu überschreiten. Der Ladevorgang wird circa eine Stunde insgesamt benötigen.

Wenn du dir ein Para-Board holst, achte auf folgende Punkte

- Die XT-Anschlüsse sollten mit Auto-Sicherungen abgesichert sein.
- Die Balancer-Anschlüsse sollten mit selbst-zurücksetzenden Polymer-Sicherungen abgesichert sein.
- Das Board sollte Anschlüsse für XT60 und XT30 haben.
- Die verfügbaren Balancer-Ports sollten für unterschiedliche Akku-Größen (idR 2-6S) ausgelegt sein.

Durch die Sicherungen vermeidest du zumindest grobe Akkuschäden und Brände, wenn du etwas falsch steckst.

Neben dem Laden von mehreren Akkus auf einmal bietet eine Para-Board noch weitere Vorteile. Ein gutes Board dient gleichzeitig als Adapter von XT60 (den die meisten Ladegeräte als Ausgang haben) auf XT30. Zudem schützt du die Anschlüsse deines Ladegeräts vor dem Ausleiern; ein Para-Board steckst du deutlich weniger oft an als die Akkus, die du in das Para-Board selbst steckst.

| HGLRC Thor Pro                                                         | Uruav Blacklight                                                           |
| ---------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| <img src="./img/hglrc_thor_pro.png" alt="HGLRC Thor Pro" width="300"/> | <img src="./img/uruav_blacklight.png" alt="URUAV Blacklight" width="300"/> |

**!!ACHTUNG!!**

Beim parallelen Laden ist besondere Vorsicht geboten.

- Du kannst ausschließlich Akkus mit gleicher Zell-Anzahl parallel laden.
- Die Akkus sollten annähernd gleiche Kapazität haben.
- Die Akkus sollten einen annähernd gleichen Ladezustand haben. Die einzelnen Zellen sollten höchstens 0.1 Volt Abweichung zueinander haben. **VOR DEM ANSTECKEN PRÜFEN!**
- Keiner der Akkus sollte eine beschädigte Zelle haben, andernfalls kann es sein, dass du Zelle an gleicher Stelle in den anderen Akkus ebenfalls beschädigst.
