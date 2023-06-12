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

### Innenwiderstand

Die einzelnen Zellen eines Akkus haben wie alle elektronischen Komponenten einen Widerstand. Dieser bestimmt, wie gut sie Energie aufnehmen und abgeben können.

Viele Ladegeräte können dir nach dem Ladevorgang den Innenwiderstand der einzelnen Zellen anzeigen.

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
