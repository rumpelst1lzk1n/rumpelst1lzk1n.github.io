# Flugsteuerung / Flight Controller / FC

Der Flight Controller ist ein Mikrocontroller der die unterschiedlichen elektronischen Komponenten deines Quads zusammenbringt.

Das Gyroskop liefert die Lageninformationen, die Steuersoftware berechnet, wie schnell welcher Motor drehen muss, damit der Kopter in die von dir über die Fernsteuerung vorgegebene Fluglage kommt.

Das Herzstück der Flugsteuerung ist der Prozessor. Dabei handelt es sich normalerweise um einen STM32-Chip des Herstellers STMicroelectronics. Den Chip gibt es in unterschiedlichen Ausführungen, üblicherweise kommen Prozessoren vom Typ F4, F7 oder (neuerdings) H7 zum Einsatz. Diese unterscheiden sich in Geschwindigkeit und verfügbaren Anschlüssen. F4-Prozessoren sind inzwischen als Budget-Variante zu sehen, F7 oder H7 dagegen eher als Premium.

Weitere mögliche Charakteristiken, die einen Flight-Controller in Richtung Premium schieben sind z.B. ein SD-Kartenslot für Blackbox-Logs oder ein zweites Gyroskop um genauere Daten zu erhalten.

F3 wurde ebenfalls verwendet, ist aber lange überholt. Neuere Versionen von Betaflight setzen mindestens F4 voraus. Lass dir keine alte Hardware mit F3-Prozessoren aufschwatzen.

Es gibt auch Flight Controller mit integriertem ESC, hier spricht man von einem "All in One" (AIO).

## Hersteller

Flight Controller gibt es von allen möglichen Herstellern. Die größeren Hersteller haben meistens die komplette Elektronik im Sortiment, die du für einen Copter brauchst.

Hier der Versuch, einige bekanntere Hersteller einzuordnen:

| Budget     | Mittelklasse | Obere Mittelklasse | Premium   |
| ---------- | ------------ | ------------------ | --------- |
| Betaflight | Diatone      | Aikon              | FETtec    |
| HAKRC      | GepRC        | Flywoo             | Lumenier  |
| Happymodel | HGLRC        | Foxeer             | SpeedyBee |
| JHEMCU     | iFlight      | TBS                |           |
|            |              | T-Motor            |           |

Die Liste erhebt keinen Anspruch auf Vollständigkeit.

Aufgrund der aktuellen Chip-Knappheit haben sich die Preise der meisten Hersteller inzwischen stark angeglichen.

## Software

Es gibt mehrere an unterschiedlicher Steuersoftware für Flight Controller. Teilweise OpenSource, teilweise proprietär. Manche Software unterstützt auch andere Gerätschaften als die im FPV üblichen Quadrokopter, wir fokussieren uns hier aber auf unsere FPV-Kopter.

In den allermeisten Fällen kommen Flight Controller (einzeln und in fertigen Koptern) bereits mit einer Software darauf. Welche das ist, erfährst du vom Hersteller.

Um weitere Sachen an der Software einstellen zu können oder um Aktualisierungen durchführen zu können, brauchst du allerdings die dazugehörige Software (+ Treiber) auf dem PC.

In manchen Fällen kannst du auch zwischen unterschiedlicher Software hin und her wechseln. Ob eine bestimmte Software deinen Flight Controller unterstützt, findest du meistens auf der Seite der Software.

Bevor du mit der Software herum spielst, stell sicher, dass du vorher ein Backup der Einstellungen deines Kopters gemacht hast.

> *Anm. rumpelst1lzk1n*: Kein Backup, kein Mitleid.

### Betaflight

Mit **Abstand** die populärste Software für Flight Controller.

Die Begleitsoftware zum Anpassen der Konfiguration und Flashen von Firmware auf den Flight Controller nennt sich *Betaflight Configurator*.

Als Einsteiger wirst du sehr wahrscheinlich als erstes mit dieser Firmware Kontakt haben. Die meisten fertigen Kopter nutzen sie. Auch die meisten gängigen Flight Controller kommen mit dieser Software vorab installiert.

Der Betaflight Configurator liefert umfangreiche Hilfestellungen, z.B. welche Treiber du für das Flashen von neuer Firmware benötigst.

> *Anm. rumpelst1lzk1n*: READ THE FUCKING MANUAL!

### KISS

Die einzige nennenswerte proprietäre Flight Controller Software. Geht mit proprietärer Hardware einher, die oft auch etwas teurer ist als vergleichbare BetaFlight Hardware. Unter anderem, weil die Hersteller eigenen Entwicklungsaufwand bei der Software haben und nicht in China sondern in Deutschland sitzen.

Hat aber allgemein einen guten Ruf und soll sehr einfach zu konfigurieren sein.

> *Anm. Puffi*: KISS FTW

Inzwischen sind viele Beteiligte am ursprünglichen KISS eigene Wege gegangen. Dennoch verwenden einige Piloten noch "KISS" als Bezeichnung für Hardware, deren Entwicklung hier ihren Ursprung hat. Und auch wenn im Rahmen der unterschiedlichen Aufteilungen viele Komponenten unabhängig voneinander neu entwickelt wurden, finden sich durch den gemeinsamen Ursprung Ähnlichkeiten.

> *Anm. Puffi*: Kauf dir Kiss

> *Anm. Panda.FPV*: Bei Puffi muss man immer aufpassen. Der versucht einen auf die dunkle Seite zu ziehen. Ruckzuck fliegst du KISS wenn du nicht aufpasst.

> *Anm. Puffi*: KISS/FETTec is super!!11!

#### Flyduino

Der Hersteller der ursprünglichen KISS-Hardware.

#### KISS Ultra

Weiterentwicklung von KISS durch Alexander Fedorov, einem der am ursprünglichen KISS beteiligten Entwickler mit dem Segen von Flyduino. Es gibt nur einen Flight Controller damit und der ist ziemlich schwierig zu bekommen.

Ein-Mann-Show, hat eher den Charakter eines gehypten Hobby-Projekts.

#### FETtec

Die Entwickler von FETtec waren ebenfalls an der Entwicklung des ursprünglichen KISS beteiligt.

> *Anm. Puffi*: FETtec != KISS

> *Anm. Puffi*: KISS is tot lang lebe FETtec

Ganz gute Mischung aus Hardware-Verfügbarkeit und schneller Entwicklung.

### Emuflight

Ähnlich Betaflight aber mehr auf TinyWhoops ausgelegt.

Die Begleitsoftware zum Flashen von Firmware auf den Flight Controller und die Konfiguration nennt sich *Emuflight Configurator*.

### iNAV

Ähnlich Betaflight aber mit mehr Fokus auf Navigations-Features, wie das Halten der Position, automatische Rückkehr zum Startort, Abfliegen von Wegpunkten, ...

Die Begleitsoftware zum Flashen von Firmware auf den Flight Controller und die Konfiguration nennt sich *iNAV Configurator*.

### Ardupilot

Wie iNAV nur noch umfangreicher auf den autonomen Betrieb des Geräts ausgerichtet. Unterstützt neben diversen Fluggeräten auch U-Boote, Rover, ...

Als Konfigurationssoftware kommt meistens *Mission Planer* oder *QGroundControl* zum Einsatz.

### FalcoX

Proprietäre Flight Controller Software, konnte mit Lizenz auch auf andere Hardware aufgespielt werden. Wurde Mitte 2021 unfreiwillig OpenSource. Dabei stellte sich heraus, dass viele der versprochenen Features Bullshit oder einfach umbenannte Funktionen waren, die in anderer Flight Controller Software zum Standardrepertoire gehört.

> *Anm. rumpelst1lzk1n*: Finger weg von dem Schrott.
