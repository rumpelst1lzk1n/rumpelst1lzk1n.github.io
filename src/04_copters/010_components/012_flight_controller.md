# Flugsteuerung / Flight Controller / FC

Der Flight Controller ist ein Mikrocontroller der die unterschiedlichen elektronischen Komponenten deines Quads zusammenbringt.

Das Gyroskop liefert die Lageninformationen, die Steuersoftware berechnet, wie schnell welcher Motor drehen muss, damit der Kopter in die von dir über die Fernsteuerung vorgegebene Fluglage kommt.

Das Herzstück der Flugsteuerung ist der Prozessor. Dabei handelt es sich normalerweise um einen Chip der Herstellers STMicroelectronics oder Artery Tek.

Den Chip gibt es in unterschiedlichen Ausführungen, üblicherweise kommen Prozessoren vom Typ F4, F7 oder (neuerdings) H7 zum Einsatz. Diese unterscheiden sich in Geschwindigkeit und verfügbaren Anschlüssen. F4-Prozessoren sind inzwischen als Budget-Variante zu sehen, F7 oder H7 dagegen eher als Premium.

Weitere mögliche Charakteristiken, die einen Flight-Controller in Richtung Premium schieben sind z.B. ein SD-Kartenslot für Blackbox-Logs oder ein zweites Gyroskop um genauere Daten zu erhalten.

F3 wurde ebenfalls verwendet, ist aber lange überholt. Neuere Versionen von Betaflight setzen mindestens F4 voraus. Lass dir keine alte Hardware mit F3-Prozessoren aufschwatzen.

Es gibt auch Flight Controller mit integriertem ESC, hier spricht man von einem "All in One" (AIO).

| Mini FC (20x20)                                   | Standard FC (30x30)                                       | AIO (25x25)                                              |
| ------------------------------------------------- | --------------------------------------------------------- | -------------------------------------------------------- |
| ![Foxeer H7 Mini](/img/foxeer/foxeer_h7_mini.png) | ![Diatone Mamba MK4](/img/diatone/diatone_mamba_f722.png) | ![iFlight Blitz AIO](/img/iflight/iflight_blitz_aio.png) |

## Hersteller

Flight Controller gibt es von allen möglichen Herstellern. Die größeren Hersteller haben meistens die komplette Elektronik im Sortiment, die du für einen Copter brauchst.

Hier der Versuch, einige bekanntere Hersteller einzuordnen:

| Budget     | Mittelklasse | Obere Mittelklasse | Premium   |
| ---------- | ------------ | ------------------ | --------- |
| BetaFPV    | Diatone      | Aikon              | FETtec    |
| HAKRC      | GepRC        | Flywoo             | Lumenier  |
| Happymodel | HGLRC        | Foxeer             | SpeedyBee |
| JHEMCU     | iFlight      | TBS                |           |
| Skystars   |              | T-Motor            |           |

Die Liste erhebt keinen Anspruch auf Vollständigkeit. Sie trifft auch keine Aussage über die Qualität sondern repräsentiert eher, wie die einzelnen Hersteller sich preislich auf dem Markt positionieren.

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

### KISS & Derivate

Die einzige nennenswerte proprietäre Flight Controller Software. Geht mit proprietärer Hardware einher, die oft auch etwas teurer ist als vergleichbare BetaFlight Hardware. Unter anderem, weil die Hersteller eigenen Entwicklungsaufwand bei der Software haben und nicht in China sondern in Deutschland sitzen.

Hat allgemein einen guten Ruf und soll sehr einfach zu konfigurieren sein. Mr. Steele, einer der bekanntesten FPV-Piloten, ist einer der prominentesten Promoter von KISS.

> *Anm. Puffi*: KISS FTW

Inzwischen sind viele Beteiligte am ursprünglichen KISS eigene Wege gegangen. Dennoch verwenden einige Piloten noch "KISS" als Bezeichnung für Hardware, deren Entwicklung hier ihren Ursprung hat. Und auch wenn im Rahmen der unterschiedlichen Aufteilungen viele Komponenten unabhängig voneinander neu entwickelt wurden, finden sich durch den gemeinsamen Ursprung Ähnlichkeiten.

> *Anm. Puffi*: Kauf dir Kiss

> *Anm. Panda.FPV*: Bei Puffi muss man immer aufpassen. Der versucht einen auf die dunkle Seite zu ziehen. Ruckzuck fliegst du KISS wenn du nicht aufpasst.

> *Anm. Puffi*: KISS/FETTec is super!!11!

#### KISS

Die Hardware mit dem ursprünglichen KISS ist immer noch erhältlich und erfreut sich auch noch immer einer gewissen Beliebtheit. Allerdings scheint die Weiterentwicklung etwas zu stagnieren.

#### KISS Ultra

Weiterentwicklung von KISS durch einen der am ursprünglichen KISS beteiligten Entwickler.

Aktuell ist das hauptsächlich einen Ein-Mann-Show.

Es gibt nur einen Flight Controller damit und der ist ziemlich schwierig zu bekommen.

> *Anm. rumpelst1lzk1n*: Hat mMn eher den Charakter eines über-hypten Hobby-Projekts.

#### FETtec Alpha

Die Entwickler von FETtec waren ebenfalls an der Entwicklung des ursprünglichen KISS beteiligt. Gegen Ende 2021 haben sie ihre eigene neu-geschriebene Flight-Controller-Software veröffentlicht. Diese lässt aber erkennen, dass die gleichen Core-Entwickler am Werk waren.

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

## Komponenten

Nachfolgend werden die Komponenten auf einem Flightcontroller beispielhaft an einem Modell des Herstellers Speedybee erklärt.

| Oberseite                                            | Unterseite                                               |
| ---------------------------------------------------- | -------------------------------------------------------- |
| ![Oberseite](/img/speedybee/speedybee_F7_v3_top.png) | ![Unterseite](/img/speedybee/speedybee_F7_v3_bottom.png) |

1) Prozessor (meistens ein Modell des Herstellers STM)
2) Gyroskop (Lagesensor)
3) USB-Anschluss um den Flight-Controller mit dem PC zu verbinden
4) Boot-Taster um den Flight-Controller in den Boot-Mode zu bringen (manchmal notwendig um neue Firmware zu flashen)
5) Löt-Pads für Peripherie, UARTs, Stromversorgung, etc. Näheres entnimmt man am besten dem Handbuch des FCs.
6) Orientierung des FCs. Der Pfeil zeigt die Oberseite und gedachte Ausrichtung an. Falls davon abgewichen wird, muss die Orientierung ggf. in Software angepasst werden.
7) Montagelöcher um den FC am Frame zu befestigen.
8) OSD-Chip für analoges Video. Hier wird das Kamerabild durch den FC geschleift und OSD-Informationen in das Bildsignal eingebrannt. Irrelevant wenn man digitales FPV fliegt.
9) Anschluss für den 4in1-ESC.
10) Stecker-Anschlüsse als Alternative zu den Löt-Pads (siehe 5.). Belegung entnimmt man am besten dem Handbuch des FCs.

Die meisten hier aufgeführten Komponenten wird man in dieser oder ähnlicher Form auf so ziemlich jedem FC finden.
