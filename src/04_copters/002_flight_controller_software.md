# Flight Controller Software

Es gibt mehrere an unterschiedlicher Steuersoftware für Flight Controller. Teilweise OpenSource, teilweise proprietär. Manche Software unterstützt auch andere Gerätschaften als die im FPV üblichen Quadrokopter, wir fokussieren uns hier aber auf unsere FPV-Quads.

Neben der nachfolgend genannten Software gibt es noch weitere meistens proprietäre Software, diese hat aber einen eher zwiespältigen Ruf.

In den allermeisten Fällen kommen Flight Controller (einzeln und in fertigen Koptern) bereits mit einer Software darauf. Welche das ist, erfährst du vom Hersteller.

Um weitere Sachen an der Software einstellen zu können oder um Aktualisierungen durchführen zu können, brauchst du allerdings die dazugehörige Software (+ Treiber) auf dem PC.

In manchen Fällen kannst du auch zwischen unterschiedlicher Software hin und her wechseln. Ob eine bestimmte Software deinen Flight Controller unterstützt, findest du meistens auf der Seite der Software.

Bevor du mit der Software herum spielst, stell sicher, dass du vorher ein Backup der Einstellungen deines Kopters gemacht hast.

> *Anm. rumpelst1lzk1n*: Kein Backup, kein Mitleid.

## Betaflight

Mit **Abstand** die populärste Software für Flight Controller.

Die Begleitsoftware zum Anpassen der Konfiguration und Flashen von Firmware auf den Flight Controller nennt sich *Betaflight Configurator*.

Als Einsteiger wirst du sehr wahrscheinlich als erstes mit dieser Firmware Kontakt haben. Die meisten fertigen Kopter nutzen sie. Auch die meisten gängigen Flight Controller kommen mit dieser Software vorab installiert.

Der Betaflight Configurator liefert umfangreiche Hilfestellungen, z.B. welche Treiber du für das Flashen von neuer Firmware benötigst.

> *Anm. rumpelst1lzk1n*: READ THE FUCKING MANUAL!

## KISS

Die einzige nennenswerte proprietäre Flight Controller Software. Geht mit proprietärer Hardware einher, die oft auch etwas teurer ist als vergleichbare BetaFlight Hardware. Unter anderem, weil die Hersteller eigenen Entwicklungsaufwand bei der Software haben und nicht in China sondern in Deutschland sitzen.

Hat aber allgemein einen guten Ruf und soll sehr einfach zu konfigurieren sein.

Inzwischen sind viele Beteiligte am ursprünglichen KISS eigene Wege gegangen. Dennoch verwenden einige Piloten noch "KISS" als Bezeichnung für Hardware, deren Entwicklung hier ihren Ursprung hat. Und auch wenn im Rahmen der unterschiedlichen Aufteilungen viele Komponenten unabhängig voneinander neu entwickelt wurden, finden sich durch den gemeinsamen Ursprung Ähnlichkeiten.

### Flyduino

Der Hersteller der ursprünglichen KISS-Hardware.

### KISS Ultra

Weiterentwicklung von KISS durch Alexander Fedorov, einem der am ursprünglichen KISS beteiligten Entwickler mit dem Segen von Flyduino. Es gibt nur einen Flight Controller damit und der ist ziemlich schwierig zu bekommen.

Ein-Mann-Show, hat eher den Charakter eines gehypten Hobby-Projekts.

### FETtec

Die Entwickler von FETtec waren ebenfalls an der Entwicklung des ursprünglichen KISS beteiligt.

> *Anm. Puffi*: KISS/FETTec is super!!11!

> *Anm. Panda.FPV*: Bei Puffi muss man immer aufpassen. Der versucht einen auf die dunkle Seite zu ziehen. Ruckzuck fliegst du KISS wenn du nicht aufpasst.

Ganz gute Mischung aus Hardware-Verfügbarkeit und schneller Entwicklung.

## Emuflight

Ähnlich Betaflight aber mehr auf TinyWhoops ausgelegt.

Die Begleitsoftware zum Flashen von Firmware auf den Flight Controller und die Konfiguration nennt sich *Emuflight Configurator*.

## iNAV

Ähnlich Betaflight aber mit mehr Fokus auf Navigations-Features, wie das Halten der Position, automatische Rückkehr zum Startort, Abfliegen von Wegpunkten, ...

Die Begleitsoftware zum Flashen von Firmware auf den Flight Controller und die Konfiguration nennt sich *iNAV Configurator*.

## Ardupilot

Wie iNAV nur noch umfangreicher auf den autonomen Betrieb des Geräts ausgerichtet. Unterstützt neben diversen Fluggeräten auch U-Boote, Rover, ...

Als Konfigurationssoftware kommt meistens *Mission Planer* oder *QGroundControl* zum Einsatz.

## FalcoX

Proprietäre Flight Controller Software, konnte mit Lizenz auch auf andere Hardware aufgespielt werden. Wurde Mitte 2021 unfreiwillig OpenSource. Dabei stellte sich heraus, dass viele der versprochenen Features Bullshit oder einfach umbenannte Funktionen waren, die in anderer Flight Controller Software zum Standardrepertoire gehört.

> *Anm. rumpelst1lzk1n*: Finger weg von dem Schrott.
