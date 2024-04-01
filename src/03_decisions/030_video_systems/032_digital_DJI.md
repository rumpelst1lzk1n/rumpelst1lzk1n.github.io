# DJI

DJI ist das Apple unter den FPV-Systemen. Funktioniert super, ist aber ein goldener Käfig.

> *Anm. remove_me*: Das Bild ist dafür auch circa 10x geiler als Analog und kommt so in etwa bei 720p raus.

Die Hardware gibt es nur von DJI, lediglich bei den Kameras lassen sie 1-2 andere Hersteller mit ins Boot.

Das System ist unter den digitalen FPV-Systemen das mit dem höchsten Reifegrad. Wenn du kein Problem mit einem goldenen Käfig ala Apple hast fliegen willst, gibt es keinen Grund, nicht auf das DJI-System zu setzen. Auch im Bereich der professionellen Filmaufnahmen wirst du um DJI nicht herum kommen, weil der Name einfach so bekannt ist, dass er Türen öffnet.

Thema FPV-Rennen: Aufgrund der technischen Funktionsweise des DJI-Systems ist dieses bei den großen Rennveranstaltungen eher selten erlaubt. Viele Piloten, die hauptsächlich DJI fliegen, greifen hier auf einen Analog-Adapter zurück. Zumindest bei den älteren Modellen der DJI-Brille (siehe unten).

## Brillen

Bei den Brillen ist das Namensschema von DJI vogelwild.

Es gibt 4 Brillen:

- DJI FPV Goggles v1
- DJI FPV Goggles v2
- DJI Goggles 2
- DJI Goggles 2 Integra

Die Integra unterscheidet sich von der normalen Version durch ein eingebautes GPS und einen eingebauten Akku.

Von den DJI FPV Goggles v1 rate ich ab. Diese ist NICHT mit der neuen 03 AirUnit von DJI kompatibel! Dazu später mehr.

| DJI FPV Goggles (v1 & v2)                        | DJI Goggles 2                                                |
| ------------------------------------------------ | ------------------------------------------------------------ |
| ![DJI FPV Goggles](/img/DJI/dji_fpv_goggles.png) | ![DJI Goggles 2](/img/DJI/dji_goggles_2.png)                 |
|                                                  | ![DJI Goggles 2 Integra](/img/DJI/dji_goggles_2_integra.png) |

Das DVR der Brillen kann man auch schon ganz gut zum Herumzeigen verwenden.

Für die FPV Goggles (**nicht** für die Googles 2) gibt es auch Adapter, um ein analoges Receiver-Modul (siehe oben) mit der Brille zu verwenden, wenn du neben Digital auch noch Analog fliegen möchtest.

Das bietet sich z.B. für sehr kleine Kopter an, da die Videosender von DJI mit 25+X Gramm zu schwer für diese sind. Hier ist Analog immer noch die Lösung mit dem geringsten Gewicht.

![DJI FPV Googles mit Analog-Adapter](/img/DJI/dji_analog_adapter.png)

Preislich betrachtet ist eine gebrauchte DJI V2-Brille (um 350-400€ je nach Zustand und Zubehör, Stand September 2023) vermutlich der günstigste Weg zu digitalem FPV.

## Videosender

### V1

Als Videosender gibt es die AirUnit und die Vista Unit. Die AirUnit ist größer und schwerer, hat aber einen SD-Kartenslot, auf dem das Videomaterial zusätzlich zum DVR in der Brille aufgezeichnet werden kann. Leider funktioniert die Videoaufzeichnung auf der AirUnit so unzuverlässig, dass man es auch sein lassen kann.

Die AirUnit Lite (auch vertrieben als Caddx Vista oder Runcam Link, alles das gleiche, mutmaßlich hergestellt von DJI) ist zu bevorzugen und passt auch leichter in die meisten Frames.

| AirUnit                               | AirUnit Lite / Caddx Vista / Runcam Link        |
| ------------------------------------- | ----------------------------------------------- |
| ![AirUnit](/img/DJI/dji_air_unit.png) | ![AirUnit Lite](/img/DJI/dji_air_unit_lite.png) |

Der Videosender kann auch gleichzeitig als Funkempfänger für eine DJI-Funkfernsteuerung benutzt werden. Kann man machen, aber eigentlich willst du eine echte Funkfernsteuerung, siehe oben.

DJI hat ein Firmware-Upgrade veröffentlicht, mit dem die Videosender der ersten Generation mit den Goggles 2 kompatibel ist.

### V1 Kameras

Bei den verfügbaren Kameras für die V1-Videosender gibt es vorrangig die Auswahl zwischen Kameras mit 60FPS und Kameras mit 120FPS. Du willst eine Kamera mit 120FPS.

- DJI Air Unit Cam
- Caddx Vista Unit Cam
- Caddx Nebula **Pro** (nano)

Die Runcam Wasp und Falcon sind auch noch OK, allerdings können diese nur 4:3, kein 16:9.

Alle andern Kameras sind irrelevant. Bestenfalls zählt die Caddx Polar noch als Notnagel.

![DJI Cams](/img/DJI/dji_cams.png)

### V2

Ende 2022 hat DJI sein neues O3-System veröffentlicht.

Diese ist mit den DJI FPV Goggles v2 sowie den DJI Goggles 2 kompatibel. Mit den DJI FPV Goggles V1 ist dieser Videosender nicht kompatibel und wird das mutmaßlich auch niemals werden.

![DJI O3 AirUnit](/img/DJI/dji_o3_airunit.png)

Es gibt nur eine Kamera zur Auswahl. Diese wird aufgrund einiger Eigenschaften wie z.B. einem geringeren Dynamikumfang im Vergleich zu den guten Kameras des V1-Systems kritisiert.

Die AirUnit hat Onboard-Recording auf einen internen Speicher. Dieser kann mit einer SD-Karte erweitert werden. Zudem unterstützt das Onboard-Recording Bildstabilisierung. Allerdings brauchen die Kameras, welche die Gyro-Daten erzeugen eine gesonderte Dämpfung (meistens über TPU-Druckteile realisiert).

> *Anm. rumpelst1lzk1n*: Ich fasse mal zusammen: überteuerte Kackscheiße, Funkqualität ist über jeden Zweifel erhaben, Bildqualität ist ausreichend für Youtube-Piloten. Freestyler fliegen das alte DJI-System, Racer lächeln dank HDZero sowieso nur müde bei Latenzen über 15ms. Wer ernst genommen werden will fliegt mit GoPro, der Rest schnüffelt Copium. Und irgendwo gibt es da auch noch Walksnail. Die kommen zwar bei der Bildquali nicht an DJI ran, aber immerhin ist die Kamera kein Wackelkandidat und die Gyrodaten brauchen kein extra Kissen.

## WTFOS

Es gibt ein OpenSource-Hacker-Projekt um das V1-FPV-System von DJI namens [WTFOS](https://fpv.wtf/). Das System erlaubt die Erweiterung des DJI Systems um einige von der Community nachgefragte Features, die DJI nicht liefern wollte. Allerdings blockt DJI in neueren Versionen die initiale Installation des Hacks.

![ItsBluntys DJI Firmware Chart](/img/itsblunty/itsblunty_dji_firmware_chart.png)

Wenn du eine Version auf der Brille haben solltest, mit der WTF.OS geblockt ist, kannst du mit dem Projekt [fpv-wtf/butter](https://github.com/fpv-wtf/butter) eine Firmware flashen, mit der die Installation des Hacks wieder möglich sein sollte.

## fertige Drohnen

Neben den klassischen Kamera-Drohnen (Mavic und Co) vertreibt DJI zudem zwei fertige Drohnen mit FPV-Unterstützung.

### FPV-Drohne

Die große DJI-FPV-Drohne ist eine glorifizierte Mavic-Drohne, die man besser nicht crasht. Wo du klassische FPV-Drohne gegen Bäume donnern und (falls überhaupt mal etwas kaputt geht) selbst reparieren kannst, ist die DJI-FPV-Drohne ein Plastikbomber, den du für teuer Geld zu DJI in die Reparatur schicken musst.

> *Anm. remove_me*: Scheiß auf die!

![DJI FPV Drohne](/img/DJI/dji_fpv_drone.png)
![DJI FPV Drohne](/img/memes/dji_fpv.png)

### Avata

Die Avata ist ein CineWhoop und hat als solcher mit Propellerschutz auch eher eine Existenzberechtigung für das klassische DJI-Publikum.

![DJI Avata Set](/img/DJI/dji_avata_set.png)

Als Einstieg in die Welt des FPV ist die Avata nur bedingt geeignet. Es gibt viele Ersatzteile von DJI sodass man einige Sachen selbst reparieren kann. Beim Set der Drohne ist allerdings ein Motion-Controller dabei, sodass das Set eher einem Erlebnis ala "Fotodrohne mit Augmented Reality" gleicht.

Ein "echtes" FPV-Feeling ist mit dem "DJI Remote Controller 2" möglich. Diese Funkfernsteuerung funktioniert neben der Avata auch mit der DJI FPV Drohne und kann auch bei "echten" FPV-Drohnen, welche die O3 AirUnit verbaut haben verwendet werden.

### DJI Funkfernsteuerung

Das DJI-Videosystem hat auch ein System zur Funkfernsteuerung mit integriert.

Funkfernsteuerung hatten wir zwar schon (siehe oben), aber da das DJI-System nur in Kombination mit dem Videosystem funktioniert, ist das hier besser aufgehoben.

Es gibt 2 Funken, eine für das V1 Videosystem, eine für das V2 Videosystem.

| V1                                                 | V2                                                 |
| -------------------------------------------------- | -------------------------------------------------- |
| ![DJI FPV Remote 1](/img/DJI/dji_fpv_remote_1.png) | ![DJI FPV Remote 2](/img/DJI/dji_fpv_remote_2.png) |

Vorteil: Man braucht keinen zusätzlichen Receiver auf dem Kopter und der Link selbst ist performant genug. Nachteil: Man ist an das Videosystem gebunden und hat nur diese beiden Funken zur Auswahl.
