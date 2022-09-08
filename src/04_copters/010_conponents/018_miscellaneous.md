# sonstige Komponenten

## XT30 / XT60 / XT90

Der am weitesten verbreitete Anschlusstyp für die im FPV verwendeten Akkus.

Es gibt ihn in 3 Größen. Die Zahl im Namen gibt zudem die Stromstärke (in Ampere) an, für die der Anschluss spezifiziert wurde.

Es handelt sich dabei um den Wert für die dauerhafte Belastung. Die kurzzeitige Spitzenbelastung beträgt leicht das doppelte.

Da wir beim FPV-Flug eher kurze Spitzenlast haben, musst du dir keine Sorgen machen, wenn dir dein Kopter anzeigt, dass sie gerade 120 Ampere über einen XT60 zieht.

Bei Koptern bis ca 250-300 Gramm sind XT30 gebräuchlich. Auf den Standard 5-Zoll Koptern ist XT60 üblich.

| XT60 mit Endkappe | XT60 | XT30 |
| --- | --- | --- |
| ![XT60 mit Endkappe](/img/amass/amass_XT60H-M.png) | ![XT60 mit Endkappe](/img/amass/amass_XT60.png) | ![XT60 mit Endkappe](/img/amass/amass_XT30U.png) |

Für TinyWhoops gibt es zudem noch Akkus mit kleineren Anschlüssen. JST-PH2 ist wohl der geläufigste Typ hierfür.

## Kondensator

Es wir empfohlen, einen Kondensator mit an die Batterie-Pads des ESC zu löten. Bewährt hat sich ein 1000µF Low-ESR Elektrolytkondensator. Dieser gleicht Schwankungen in der Spannungsversorgung aus, sorgt dadurch bei analoger Video-Übertragung für ein saubereres Bild und kann dabei helfen, die Elektronikkomponenten vor Schaden zu schützen.

Insbesondere beim Abbremsen der Motoren entstehen Rückspeisungen in die anderen elektronischen Komponenten. Diese können lokal sehr hohe Spannungen verursachen und dadurch beim ESC oder andere Komponenten Überspannungsschäden verursachen.

| Beispiel eines explodierenden ESCs |
| --- |
| [![ESC goes boom](/img/g3gg0/esc_goes_boom.png)](https://www.youtube.com/watch?v=tTln5ggb0FE&t=29s) |

Achte beim anbringen des Kondensators auf die richtige Polarisation (+ zu +, - zu -), sonst sprengst du den Kondensator.

## GPS

GPS ist für den Anfang als optional zu betrachten.

Es ermöglicht abhängig von der Flugsteuersoftware z.B. die automatische Rückkehr des Fluggeräts zum Startpunkt (RTH / Return To Home).

Je nach GPS-Modul kann es mehr oder weniger lange dauern, bis genügend GPS-Satelliten für eine ausreichende Genauigkeit der Navigations-Funktionen erkannt wurden. Oft lässt einen die Flugsteuersoftware nicht abheben, wenn nicht genügend Satelliten erkannt wurden.

Manche GPS-Module verfügen über einen Batterie-gestützten Speicher, der eine schnelleres Wiederfinden der Satelliten ermöglicht.

![Matek GPS mit Kompass und Batterie](/img/matek/matek_GPS-M8Q-5883-1.png)

## Magnetometer / Kompass

Ebenso wie GPS als optional zu betrachten.

Wird von einiger Flugsteuersoftware (siehe unten) benötigt, um die Ausrichtung des Kopters zu erkennen. iNAV und Ardupilot schalten beispielsweise diverse GPS-Funktionen wie Rückkehr zum Startpunkt erst frei, wenn GPS UND Kompass vorhanden sind.

Bei höherwertigen GPS-Modulen ist oft ein Kompass mit integriert.

## Barometer

Ebenso wie GPS als optional zu betrachten.

Wird von einiger Flugsteuersoftware (siehe unten) benötigt, um Höhe des Fluggerätes durch die Veränderung des Luftdrucks genauer als mit GPS alleine einschätzen zu können.

## Battery Eliminating Circuit / BEC

Ein Battery Eliminating Circuit (BEC) wandelt die Akkuspannung in eine definierte andere Spannung (meist 5 oder 9 Volt) um, mit der die elektronischen Komponenten auf dem Fluggerät besser (oder überhaupt erst ohne Schaden zu nehmen) arbeiten können.

Meistens hat der Flight Controller bereits eines oder mehrere BECs. Wenn eine Komponente eine zu hohe Leistungsaufnahme hat (z.B. bei einem leistungsstarken Videosender), kann dieses aber einen eigenen BEC benötigen.

## Weitere Sensoren

Darüber hinaus gibt es noch weitere Sensoren wie Lidar, Optical Flow, Airspeed, Variometer, ...

Diese sind im FPV eher unüblich und finden in anderen RC-Modellbau-Bereichen wie Segelfliegern oder professionellen Multikoptern Anwendung.

## Turtle Fin

Insbesondere Renn-Drohnen haben oft eine sog. `Turtle Fin`. Dieser nach oben gerichtet Fortsatz sorgt dafür, dass zumindest 2 Propeller des Copters bei einem Crash und einer Landung auf dem Kopf in der Luft bleiben. Das erleichtert das sog. `turteln`. Dabei drehen sich je nach Lage nur 2 bestimmte Motoren um die Drohne aus der mehr oder weniger stabilen Seitenlage zu befreien und wieder abflugbereit aufzurichten.

## Heckspoiler

Vielleicht gerätst du in die Verlockung, optische Anbauteile an dem Kopter zu befestigen, wie z.B. einen Heckspoiler. Das Bauteil bringt unnötigen Luftwiderstand und Vibrationen und beeinflusst das Flugverhalten entsprechend negativ. **LASS ES SEIN!** Außer du machst es for the lulz.
