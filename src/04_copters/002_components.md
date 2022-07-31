# Komponenten

Wenn du dein Fluggerät reparieren, umbauen oder komplett selbst bauen möchtest, solltest du darüber Bescheid wissen, aus welchen Bauteilen diese überhaupt besteht.

## Rahmen / Frame

Der Frame besteht aus in Epoxidharz eingelegten Kohlenstofffasern (CFK, ugs. "Karbon"). Wie ein Tuning-Bauteil beim Auto, leicht aber trotzdem sehr stabil. Die Kohlenstofffasern kommen in Platten, aus denen die einzelnen Teile des Frames geschnitten werden.

Die meisten Frames bestehen aus 4 Armen, einer Top-Plate, einer Bottom-Plate und ggf. noch einem Gegenstück, welches die Arme gegen die Bottom-Plate fixiert. Dazu kommt noch eine Halterung für die Kamera, die entweder aus CFK oder Kunststoff (meistens TPU) gefertigt sind.
Top- und Bottom-Plate sind mittels Standoffs (kleine Stangen mit Innengewinde) verbunden.

Weitere Zusatzkomponenten (z.B. Antennenhalterungen) bekommt man als 3D gedruckten Teile. Teilweise mitgeliefert, teilweise stellen die Hersteller die Dateien zum selbst drucken online.

| klassisches Frame-Design, TBS Source One                                |
| ----------------------------------------------------------------------- |
| ![Source One](/img/team_blacksheep/source_one.png) |

Die Motoren werden an den Armen montiert. Im vorderen Teil des Hauptkörpers wird die Kamera montiert. Im mittleren und hinteren Teil des Frames findet die Elektronik platz. Dort sind je nach Frame Befestigungen in den Formaten 16x16, 20x20, 25x25 oder 30x30. Die Zahl bezieht sich jeweils auf den Lochabstand für die Schrauben, mit denen die Elektronik am Frame befestigt wird.

Der Akku wird abhängig vom Frame mit oben auf die Top-Plate oder unter die Bottom-Plate geschnallt.

Frames gibt es in allen möglichen Größen und Preisklassen.

Hier der Versuch, einige bekanntere Hersteller einzuordnen:

| Budget | Mittelklasse | Premium   |
| ------ | ------------ | --------- |
| TBS    | iFlight      | ImpulseRC |
|        | Diatone      | Armattan  |
|        | Flywoo       | Lumenier  |
|        | GepRC        | Ummagawd  |

Die Liste erhebt keinen Anspruch auf Vollständigkeit.

> *Anm. rumpelst1lzk1n*: Zudem gibt es im Preissegment über den Premium-Herstellern noch die Exoten. Diese können nochmal deutlich mehr kosten, weil sie in kleineren Stückzahlen gefertigt werden oder sehr spezielle Eigenschaften/Formen aufweisen. Insbesondere z.B. Cinelifter. Bleib für den Einstieg bei bewährtem.

Alle oben genannten Hersteller fertigen **eigene** Designs. Insbesondere auf Banggood und AliExpress gibt oft auch Klone der Premium-Hersteller in mehr oder weniger guter Qualität und mit mehr oder weniger gutem Support.

Bei den Mittelklasse- und Premium-Herstellern kann man davon ausgehen, dass eigentlich jedes Teil des Frames bis hin zu den Schrauben auch separat als Ersatzteil erhältlich ist.

Bei einem Premium-Hersteller kann man zudem erwarten, dass die Garantie auch Crashes abdeckt und man z.B. kostenlos Ersatzarme bekommt.

Bei den Klonen kann es passieren, dass bei der Lieferung Teile fehlen. Sei kein Arsch, kauf keine Klone. Zudem ist auch CFK nicht gleich CFK und minderwertige Qualität wirkt sich negativ auf das Flugverhalten aus.

Wenn du keine 50€ für einen Mittelklasse-5"-Frame übrig hast, hol dir einen "TBS Source One". Die Schnittmuster dieses Frames sind hochoffiziell OpenSource und frei erhältlich. Jeder kann (und darf) den Frame herstellen.

## Flugsteuerung / Flight Controller / FC

Der Flight Controller ist ein Mikrocontroller der die unterschiedlichen elektronischen Komponenten deines Quads zusammenbringt.

Das Gyroskop liefert die Lageninformationen, die Steuersoftware berechnet, wie schnell welcher Motor drehen muss, damit der Kopter in die von dir über die Fernsteuerung vorgegebene Fluglage kommt.

Die mit Abstand häufigste Steuersoftware ist Betaflight. Es gibt noch andere Software, der Themenkomplex hat aber weiter unten ein eigenes Kapitel.

Das Herzstück der Flugsteuerung ist der Prozessor. Dabei handelt es sich normalerweise um einen STM32-Chip des Herstellers STMicroelectronics. Den Chip gibt es in unterschiedlichen Ausführungen, üblicherweise kommen Prozessoren vom Typ F4, F7 oder (neuerdings) H7 zum Einsatz. Diese unterscheiden sich in Geschwindigkeit und verfügbaren Anschlüssen. F4-Prozessoren sind inzwischen als Budget-Variante zu sehen, F7 oder H7 dagegen eher als Premium. 

Weitere mögliche Charakteristiken, die einen Flight-Controller in Richtung Premium schieben sind Onboad SD-Kartenslot für Blackbox-Logs oder ein zweites Gyroskop um genauere Daten zu erhalten.

F3 wurde ebenfalls verwendet, ist aber lange überholt. Neuere Versionen von Betaflight setzen mindestens F4 voraus. Lass dir keine alte Hardware mit F3-Prozessoren aufschwatzen.

Es gibt auch Flight Controller mit integriertem ESC, hier spricht man von einem "All in One" (AIO).

## Empfänger / Receiver / RX

Das Gegenstück zu deiner Funkfernsteuerung (siehe oben). Nimmt die Steuersignale entgegen, wandelt dabei Funkwellen in elektrische Signale um und schickt diese an den Flight Controller.

## Videosender / VTX

Das Gegenstück zu deiner FPV-Brille (siehe oben). Der Videosender ist üblicherweise an den Flight Controller mit angeschlossen. Dies ermöglicht es, dass Flugdaten (Akkukapazität, Flugmodus, GPS Koordinaten) im Bild dargestellt werden.

Bei analogem Video sind diese untrennbar in das Bild eingebrannt. Bei digitaler Bildübertragung werden die Flugdaten normalerweise separat übertragen. Damit kann das Bild auch ohne Flugdaten in der Brille gespeichert werden.

## Kamera

Die Kamera wird bei digitalen Systemen direkt an den Videosender angeschlossen. Dieser übernimmt dann die Übertragung des Bildes sowie der Flugdaten.

Bei analogen Systemen kannst du die Kamera zwar auch direkt an den Videosender anschließen, dann hast du aber normalerweise keine Flugdaten. Es gibt Ausnahmen, bei denen die Videosender begrenzt Informationen auch selbst im Bild anzeigen können. Normalerweise schleifst du aber das Bild der Kamera erst einmal durch den Flight Controller, damit dieser die Flugdaten ins Bild einfügt. Erst dann wird die Kombination aus Videobild und Flugdaten an den VTX weiter gereicht.

## Motorsteuerung / Electronic Speed Controller / ESC

Die Motorsteuerung erfolgt über den ESC. Er ist zudem die zentrale Stromversorgung des Kopters, der Akku hängt direkt am ESC.

Bis vor einigen Jahren war diese Komponente noch aufgeteilt in einen Chip für die Stromverteilung (Power Distribution Board, PDB) sowie 4 einzelne ESCs pro Motor.

Heutzutage besteht der ESC üblicherweise nur noch aus einem Chip (All In One ESC, AIO-ESC) oder ist zusammen mit dem Flightcontroller auf dem gleichen Board.

Als Firmware kommt auf der Motorsteuerung meistens BLHeli_S oder BLHeli_32 zum Einsatz. Auch, wenn die ESCs alle auf einem Chip sind, hast du technisch betrachtet mehrere unabhängige ESCs, die du einzeln flashen und konfigurieren musst.

BLHeli_32 gilt als höherwertiger. BLHeli_S hat in 2020 und 2021 aber einige Updates bzw. alternative Firmwares (insbesondere "Bluejay") bekommen, welche das die annähernd gleichen Fähigkeiten im Vergleich zu BLHeli_32 bieten.

Die Motorsteuerung gibt die Drehrichtung der Motoren vor. Die 2 jeweils diagonal gelegenen Motoren sollten sich in die gleiche Richtung drehen. Dabei unterscheidet man zwischen "props in" und "props out".

| props in                                                                                                                       | props out                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| ![props in](https://raw.githubusercontent.com/betaflight/betaflight-configurator/master/resources/motor_order/quad_x_1234.svg) | ![props out](https://raw.githubusercontent.com/betaflight/betaflight-configurator/master/resources/motor_order/quad_x_1234_reversed.svg) |

Welche der beiden Varianten besser ist, darüber scheiden sich die Geister.

## Motoren

Der Antrieb unseres Kopters. Hier gibt es einige Zahlen, die man kennen sollte, wenn man sich seinen Kopter selbst bauen oder zumindest sinnvolle Fragen zu dem Thema stellen möchte.

### Motor-Größe

1408, 2204, 2206, alle diese Zahlen bezeichnen Motoren in unterschiedlicher Größe. Die ersten beiden Zahlen geben den Durchmesser, die zweiten zwei Zahlen die Höhe des Motors an. Es gibt auch Exoten, die mit Komma-Werten arbeiten. Motoren, denen namhafte Piloten ihren Stempel verleihen, kommen manchmal auch ganz ohne Größenangabe aus.

Durch die unterschiedliche Größe ergeben sich unterschiedliche Laufeigenschaften. Flache, breite Motoren bleiben kühler, sind aber träger im Beschleunigen und Abbremsen. Hohe schmale Motoren werden wärmer, reagieren aber schneller. Die Leistungsfähigkeit eines Motors ergibt sich aus seinem Volumen. Ein hoher schmaler Motor kann die gleiche Leistung bringen, wie ein flacher breiter oder ein Motor, der sich irgendwo in der Mitte dazwischen befindet.

Die Motor-Größe wird üblicherweise an der Größe der Propeller fest gemacht. Für die üblichen 5"-Quads haben sich die Größen 2207 und 2306 etabliert.

Nachfolgende Grafik gibt eine Empfehlung, welche Motoren sich für welche Propellergröße eignen.
![motor volume vs prop diameter by Chris Rosser](/img/chris_rosser_motor_size_vs_prop_diameter.png)

### KV

KV bezeichnet die sogenannte "Drehzahlkonstante". Damit sind die Umdrehungen pro Minute gemeint, die ein Motor pro Volt Akkuspannung ohne Last (also ohne Propeller) erreichen kann. Ein 10 KV-Motor erreicht mit 10 Volt Spannung 100 Umdrehungen pro Minute. Entsprechend gibt es Motoren, die für eine höhere oder niedrigere Akkuspannung ausgelegt sind.

Für 5"-Kopter haben sich Werte zwischen 1700 und 2500 KV für Akkus mit 14,8 bis 22,4 Volt etabliert. Die Motoren haben in ihren Beschreibungen häufig auch, für wie viele Akkuzellen sie ausgelegt sind. Dazu später mehr.

Die KV werden über Anzahlen an Wicklungen um den Stator erreicht. Häufig wirst du die äußerlich identischen Motoren finden, die mit einer unterschiedlichen Anzahl an KV angeboten werden.

Vermeide eine zu hohe KV bei zu viel Spannung, da sonst die Geschwindigkeit an den Spitzen der Propeller größer als die Schallgeschwindigkeit wird (kein Witz!). Das willst du vermeiden.

Technisch betrachtet ist die Einheit "KV" genau anders herum zu betrachten, wie es bei Koptern üblich ist.
Ein Elektromotor, den du von Hand drehst, wirkt wie ein Generator und erzeugt Strom. KV bezeichnet die Anzahl der Umdrehungen pro Minute, ab welcher der Motor 1 Volt Spannung ausgibt.

### Stator und Magneten

![Motor Aufbau](https://oscarliang.com/ctt/uploads/2017/12/mini-quad-brushless-motor-anatomy-bell-magnet-bearing-stator-winding-shaft-diagram.jpg)

## Propeller

Die Propeller sind mit das markanteste Merkmal eines Quads. Ihre Größe wird in angloamerikanischen Zoll (1" = 2,54 cm) angegeben, wobei damit der Durchmesser bezeichnet wird.

Die Propellergröße ist für viele Piloten der einfachste Anhaltspunkt, wie groß der Multikopter ist, über die gesprochen wird.

### Kennzahlen

Neben dem Durchmesser sind die Anzahl der Propellerblätter sowie deren Steigung die Kennzahlen für einen Propeller.

Die Anzahl der Blätter eines Motors ist offensichtlich. 2-Blatt gelten als besonders effizient, 3 Blatt sind der Standard als Kompromiss aus Effizienz und Leistung. Propeller mit mehr Blättern findet man meistens bei CineWhoops, da diese eine größere Laufruhe versprechen.

Durchmesser und Steigung (Pitch) sind weniger offensichtlich. Ähnlich wie der Durchmesser und die Höhe bei Motoren, wird dies meistens in einer kombinierten Zahl angegeben. Wie bei Motoren geben die ersten beiden Zahlen den Durchmesser des Propellers an, die zweiten 2 Zahlen die Steigung. Ein 5045-Propeller hat demnach 5 Zoll Durchmesser und 45 Grad Steigung. Eine höhere Steigung führt bei Drehung des Propellers zu mehr bewegter Luft und damit zu einer höheren Geschwindigkeit. Allerdings auch zu einer größeren Leistungsaufnahme des Motors, der den Propeller bewegen muss.

### Drehrichtung

Ein Propellerset besteht normalerweise aus 4 Propellern. 2 davon sind für die Drehung im Uhrzeigersinn (CW, clockwise), 2 für die Drehung gegen den Uhrzeiger sind (CCW, counter clockwise).

Die Propeller müssen auf der Drohne so montiert sein, dass sich die 2 Diagonal befindlichen in die gleiche Richtung drehen. Siehe dazu die Grafik im Abschnitt `Motorsteuerung / Electronic Speed Controller / ESC`.

## sonstige Komponenten

### XT30 / XT60 / XT90

Der am weitesten verbreitete Anschlusstyp für die im FPV verwendeten Akkus.

Es gibt ihn in 3 Größen. Die Zahl im Namen gibt zudem die Stromstärke (in Ampere) an, für die der Anschluss spezifiziert wurde.

Es handelt sich dabei um den Wert für die dauerhafte Belastung. Die kurzzeitige Spitzenbelastung beträgt leicht das doppelte.

Da wir beim FPV-Flug eher kurze Spitzenlast haben, musst du dir keine Sorgen machen, wenn dir dein Kopter anzeigt, dass sie gerade 120 Ampere über einen XT60 zieht.

Bei Koptern bis ca 250-300 Gramm sind XT30 gebräuchlich. Auf den Standard 5-Zoll Koptern ist XT60 üblich.

Für TinyWhoops gibt es zudem noch Akkus mit kleineren Anschlüssen. JST-PH2 ist wohl der geläufigste Typ.

### Kondensator

Es wir empfohlen, einen Kondensator mit an die Batterie-Pads des ESC zu löten. Dieser gleicht Schwankungen bei der Spannungsversorgung aus, sorgt bei analoger Video-Übertragung für ein saubereres Bild und kann dabei helfen, die Elektronik-Komponenten vor Schaden zu schützen.

### GPS

GPS ist für den Anfang als optional zu betrachten.

Es ermöglicht abhängig von der Flugsteuersoftware z.B. die automatische Rückkehr des Fluggeräts zum Startpunkt (RTH / Return To Home).

### Magnetometer / Kompass

Ebenso wie GPS als optional zu betrachten.

Wird von einiger Flugsteuersoftware (siehe unten) benötigt, um die Ausrichtung des Kopters zu erkennen. iNAV und Ardupilot schalten beispielsweise diverse GPS-Funktionen wie Rückkehr zum Startpunkt erst frei, wenn GPS UND Kompass vorhanden sind.

### Battery Eliminating Circuit / BEC

Ein Battery Eliminating Circuit (BEC) wandelt die Akkuspannung in eine definierte andere Spannung (meist 5 oder 9 Volt) um, mit der die elektronischen Komponenten auf dem Fluggerät besser (oder überhaupt erst ohne Schaden zu nehmen) arbeiten können.

Meistens hat der Flight Controller bereits eines oder mehrere BECs. Wenn eine Komponente eine zu hohe Leistungsaufnahme hat (z.B. bei einem leistungsstarken Videosender), kann dieses aber einen eigenen BEC benötigen.

### Heckspoiler

Vielleicht gerätst du in die Verlockung, optische Anbauteile an dem Kopter zu befestigen, wie z.B. einen Heckspoiler. Das Bauteil bringt unnötigen Luftwiderstand und Vibrationen und beeinflusst das Flugverhalten entsprechend negativ. **LASS ES SEIN!** Außer du machst es for the lulz.
