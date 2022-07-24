# Akkus

Akkus sind die Stromlieferanten unserer Fluggeräte.

Man unterscheidet sie nach Anzahl der Zellen sowie nach ihrer Kapazität.

Häufig wirst du beispielsweise "6S" hören. Dies bezeichnet die Anzahl der Akku-Zellen, die in Reihe geschalten wurden.

## Akku-Aufbau

### Zellen

Ein Akku besteht aus einer oder mehreren Zellen. Akkus bestehend aus einer einzigen Zelle findest du eigentlich nur bei TinyWhoops. Die meisten Kopter fliegen mit mehrzelligen Akkus.

Zellen in Reihe geschalten erhöhen die Spannung. Zellen parallel geschalten erhöhen die Kapazität.

Ein 2S Akku hat 2 Zellen in Reihe (seriell) geschalten. Am Stromanschluss liegt die Summe der Spannung der einzelnen Akkus an.

Ein 2P Akku hat 2 Zellen parallel geschalten. Der Akku kann Summe der Kapazität der einzelnen Akkus als Leistung zur Verfügung stellen.

Ein 2S2P Akku hat 2 Zellen in Reihe und 2 Zellen parallel geschalten. Üblich ist dabei, dass die Zellen erst parallel verbunden werden und anschließend die so entstandenen Akkus in Reihe geschalten werden.

### Zell-Spannung & -Chemie

Die Spannung, die zwischen Plus- und Minuspol eines Akkus anliegt, wird von ihrem Ladezustand und der Zell-Chemie bestimmt. Als Zell-Chemie kommt bei unseren Fluggeräten normalerweise Lithium-Polymer (LiPo) zum Einsatz. Bei Long-Range-Koptern auch Lithium-Ionen (LiIon), aber darüber musst du dir für den Anfang keinen Kopf machen.

Bei einem LiPo-Akku beträgt die Nominalspannung **einer Zelle** 3,7 Volt. Allerdings unterscheidet sich die Spannung eines Akkus im tatsächlichen Betrieb abhängig vom Ladezustand.

Wird ein Akku geladen, erhöht sich die Spannung zwischen Plus- und Minuspol. Bei einem vollen LiPo-Akku beträgt die Spannung circa 4,2 Volt. Es gibt spezielle Akkus mit der Kennzeichnung HV (für "High-Voltage"), diese können bis 4,35 Volt geladen werden.

Wird ein Akku entladen, verringert sich nach und nach die Spannung. Weiter herunter als 3,3 Volt solltest du eine Akku-Zelle nicht fliegen, sonst kannst du den Akku nachhaltig beschädigen.

### Innenwiederstand

Die einzelnen Zellen eines Akkus haben wie alle elektronischen Komponenten einen Wiederstand. Dieser bestimmt, wie gut sie Energie aufnehmen und abgeben können.

Viele Ladegeräte können dir nach dem Ladevorgang den Innenwiederstand der einzelnen Zellen anzeigen.

Sollte eine Zelle einen extremen Ausreißer bei diesem Wert haben (z.B. das doppelte), solltest du den Akku nicht mehr zusammen mit anderen parallel laden und allgemein darüber nachdenken, ob du ihn nicht bald in die Rente schickst.

### Stromanschluss

Dieser Stecker versorgt deinen Kopter mit Strom. Der am weitesten verbreitete Anschlusstyp für Akkus ist `XT`. Siehe oben.

### Balancer-Kabel

An diesem Kabel findet sich ein Stecker vom Typ JST-XH. Der Balancer erlaubt bei mehrzelligen Akkus Zugriff auf die Verbindung zwischen den einzelnen Zellen. Dieser ist wichtig, damit das Ladegerät Unterschiede zwischen den einzelnen Zellen ausgleichen kann. Während das Ladegerät über den Stromanschluss die Kapazität mit der groben Kelle verteilt, übernimmt es über das Balancer-Kabel die Feinabstimmung.

Wenn du einen 1S-Akku hast, entfällt der Balancer-Anschluss natürlich.

### Input & Output

Wie viel Strom ein Akku auf eipro Sekunde abgeben kann, wird in Vielfachen seiner Kapazität (C) angegeben. Auf Akkus findest du Angaben wie 70C, 100C oder 120C. Ein Akku mit 1000 Milliamperestunden, für den der Hersteller 100C angibt, kann bis zu 100 Ampere belastet werden. Dabei ist häufig die Dauerlast gemeint, für kurze Spitzen wird meistens eine zweite Zahl angegeben, diese liegt dann nochmal deutlich höher.

Gleichzeitig gilt als Richtwert für das Laden von Akkus: Lädst du sie mit 1C halten sie am längsten, lädst du mit mehr, geht das auf die Lebendsdauer. Lädst du mit viel mehr (z.B. 5C oder mehr) besteht akute Brandgefahr!

Rechenbeispiel:

Du hast einen Akku mit 500 Milliamperestunden. 1C entspricht also 0.5 Ampere. Stell dein Ladegerät so ein, dass es den Akku mit 0.5 Ampere lädt. Der Ladevorgang wird etwa eine Stunde dauern. Lädst du den Akku stattdessen mit 1 Ampere, wird der Ladevorgang nur etwa eine halbe Stunde dauer. Dies geht aber zulasten der Lebensdauer des Akkus.

### Empfehlungen (Akkus)

Welche Akkus für deinen Kopter die richtigen sind, lässt sich nicht pauschal sagen. Da hängt vieles davon ab, auf welche Spannung die verbaute Hardware ausgelegt ist wie viel der Kopter selbst wiegt und ob bestimmte Ziele erreicht werden sollen (z.B. Abfluggewicht unter 250 Gramm). Daher werde ich hier auch keine konkreten Empfehlungen aussprechen.

Wenn du dir einen fertigen Kopter kaufst, ist meistens eine Empfehlung angegeben, für welche Akkus der Kopter ausgelegt ist. Wenn du deinen Kopter selbst baust, schau dir ähnliche Fertig-Kopter an, was für diese empfohlen wird.

Ein größerer Akku heißt nicht automatisch längere Flugzeit. Irgendwann ist der Sweetspot überschritten, dann kostet das zusätzliche Gewicht des Akkus wieder Flugzeit. Siehe "Raketengleichung". Außerdem macht sich ein schwerer Akku auch beim Flugverhalten bemerkbar.

Als Faustformel für eine sinnvolle Akku-Größe kannst du bei einem Standard-Kopter eine Gewichtsverteilung von zwei Dritteln des Gewichts für den Kopter selbst und einem Drittel für den Akku annehmen.

Rechenbeispiel:
Nehmen wir einen Kopter mit 400 Gramm Gewicht an (ohne Akku, `dry weight`). Ich möchte mit 6S-Akkus fliegen. Also suche ich mir einen 6S Akku, der in etwa 200Gramm wiegt. Folgst du dieser Rechnung, landest du vermutlich landest du bei einem Akku zwischen 1000 und 1300 mAh. Gewicht pro mAh kann je nach Hersteller variieren.

Vermeide Ultra-Billig-Akkus. Hier wird oft mit Zahlen in "chinesischen Einheiten" geworben. Die tatsächliche Leistungsfähigkeit wird mit der aktuellen Temperatur, dem Datum oder der Anzahl der Kinder des Vorarbeiters multipliziert. Renommierte Hersteller, auf deren Angaben du dich eigentlich verlassen kannst sind Tattu, China Hobby Line (CNHL) und GnB.

## Sicherheit

<img src="/img/pictograms/flame.png" alt="Entflammbar" width="200"/>

Akkus sind brennbar. Du willst deine Bude damit nicht abfackeln. Entsprechend solltest du Akkus in einem sicheren Behlätnis lagern. Etwas aus Metall oder Ton bietet sich dafür an. Beispielsweise eine alte Munitionskiste aus Metall oder ein Blumentopf.

| Munitionskiste                                                                                                       | BatSafe                                                                                                                                                 | Blumentopf                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Ammunition_box.jpg" alt="Munitionskiste" width="200"/> | <img src="https://modster.at/media/image/ba/b7/bb/285566_MODSTER_BAT_Safe_Lipo_Tresor_Mini_MODSTER_Bat_Safe_Mini292011.jpg" alt="BatSafe" width="200"/> | <img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Flowerpot_1.jpg" alt="Blumentopf" width="200"/> |

Wichtig bei der Aufbewahrung ist, die Akkus **NIEMALS** druckdicht zu verpacken. Sonst hast du eine Rohrbombe. Wenn dir Munitionskiste Luftdichtigkeit verspricht, bohr ein paar Löcher oder entferne die Dichtung an einigen Stellen, damit im Fall eines Brandes der Druck geziehlt entweichen kann. LiPo-Brände sind selbstversorgend. Wenn dein LiPo brennt, dann brennt er, egal wie viel Wasser du drauf kippst. Du brauchst nicht darauf hoffen, dass durch die Luftdichtigkeit die Luft im Behälter irgendwann verbraucht ist und das Feuer von selbst ausgeht. Der Brand erzeugt weiter Gase und wenn der Behälter druckdicht ist machts irgendwann BUM.

Zum Lagern sollten die Akkus zudem auf Lagerspannung gebracht werden. Das ist die Spannung, bei der die Akkuchemie am stabilsten ist. Bei LiPos beträgt diese Spannung 3,8 Volt. Dein Ladegerät sollte über einen Modus verfügen, über den du die Akkus auf Lagerspannung bringen kannst.

Zudem empfiehlt es sich, einen kleinen Akku-Tester griffbereit zu haben. Auch unterwegs.

| LiPo-Tester (Premium)                                                                              | LiPo-Tester (einfach)                                                                                                                                                                                             |
| -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://www.isdt.co/wp-content/uploads/2018/11/bg-8s.jpg" alt="ISDT BG-8S" width="200"/> | <img src="https://cdn-global-hk.hobbyking.com/media/catalog/product/cache/3/image/660x415/17f82f742ffe127f42dca9de82fb58b1/l/o/low-voltage-alarm-black-color-91011000001-0-2.jpg" alt="LiPo Tester" width="200"/> |

## Ladegeräte

Das Ladegerät bringt deine Akkus auf die gewünschte Spannung. Heißt, es lädt sie oder entlädt sie nach Bedarf. Beim Entladen wird die Energie meistens in Wärme umgewandelt. Da diese irgendwie aus dem Netzteil raus muss, läuft der Lüfter meists auf Volllast. Die Geschwindigkeit des Entladens ist durch die Menge der abführbaren Wärme begrenzt, normalerweise geht daher Entladen deutlich langsamer.

Bei Ladegeräten unterscheidet man zwischen jenen mit und ohne integriertes Netzteil. Hat das Ladegerät ein integriertes Netzteil, kannst du das Ladegerät direkt an die Steckdose hängen, aus der Wechselspannung (AC) kommt.

Hat dein Ladegerät kein integriertes Netzteil, musst du es an ein Netzteil anschließen, dass die Wechselspannung aus der Steckdose zuvor in Gleichspannung (DC) konvertiert. Für den Anfang willst du ein Ladegerät mit integriertem Netzteil.

### Empfehlungen (Ladegerät)

#### ISDT 608AC

Das günstigste Ladegerät, dass sich zu kaufen lohnt.

- circa 65€
- 50W über integriertes Netzteil
- 200W über externes Netzteil

#### HOTA D6 Pro

- circa 100€
- 200W über integriertes Netzteil (nur Pro-Version)
- 650W über externes Netzteil
- 2 Ausgänge

#### SkyRC Q200

- circa 150€
- 200W über integriertes Netzteil
- 300W über externes Netzteil
- 4 Ausgänge

## Laden/Entladenn

Neue Akkus sollten "eingeflogen" werden. Also die ersten 2-3 Zyklen langsam mit maximal 1C geladen und bei Flug mit maximal 2/3 Gas geflogen (und damit entladen) werden. Wenn du sofort mit 2C den Strom rein pumpst und mit Vollgas los ballerst, geht das massiv auf die Leistungsfähigkeit der Akkus. Es gibt Menschen, die ihre Akkus direkt beim ersten Flug dadurch getötet haben, dass Sie permanent Vollgas geflogen sind.

## Paralleles Laden

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
| <img src="/img/hglrc_thor_pro.png" alt="HGLRC Thor Pro" width="300"/> | <img src="/img/uruav_blacklight.png" alt="URUAV Blacklight" width="300"/> |

**!!ACHTUNG!!**

Beim parallelen Laden ist besondere Vorsicht geboten.

- Du kannst ausschließlich Akkus mit gleicher Zell-Anzahl parallel laden.
- Die Akkus sollten annähernd gleiche Kapazität haben.
- Die Akkus sollten einen annähernd gleichen Ladezustand haben. Die einzelnen Zellen sollten höchstens 0.1 Volt Abweichung zueinander haben. **VOR DEM ANSTECKEN PRÜFEN!**
- Keiner der Akkus sollte eine beschädigte Zelle haben, andernfalls kann es sein, dass du Zelle an gleicher Stelle in den anderen Akkus ebenfalls beschädigst.

## Entsorgung

Über kurz oder lang wird dein Akku das Zeitliche segnen. Akkus sind genau wie Propeller Verbrauchsgegenstände. Gewöhn dich daran.

Bevor du einen Akku entsorgst, solltest du ihn so weit wie möglich entladen. Manche Ladegeräte bieten dazu spezielle Modi an, um den Akku zu "zerstören".

Andere Methoden beinhalten das konrollierte Entladen mittels einer Glühbirne, die einfach so lange angeschlossen wird, bis sie nicht mehr brennt. Auch andere Widerstände, die einfach nur Energie verbrennen, eignen sich dafür.

Wenn dein Akku leer ist, kannst du ihn bei einer Batterie-Sammelstelle abgeben. Häufig findest du solche in Supermärkten oder Baumärkten.
