# Software (Flight Controller)

Es gibt mehrere an unterschiedlicher Steuersoftware für Flight Controller. Teilweise OpenSource, teilweise proprietär. Manche Software unterstützt auch andere Gerätschaften als die im FPV üblichen Quadrocopter, wir fokussieren uns hier aber auf unsere FPV-Quads.

Neben der nachfolgend genannten Software gibt es noch weitere meistens proprietäre Software, diese hat aber einen eher zwiespältigen Ruf.

In den allermeisten Fällen kommen Flight Controller (einzeln und in fertigen Coptern) bereits mit einer Software darauf. Welche das ist, erfährst du vom Hersteller.

Um weitere Sachen an der Software einstellen zu können oder um Aktualisierungen durchführen zu können, brauchst du allerdings die dazugehörige Software (+ Treiber) auf dem PC.

In manchen Fällen kannst du auch zwischen unterschiedlicher Software hin und her wechseln. Ob eine bestimmte Software deinen Flight Controller unterstützt, findest du meistens auf der Seite der Software.

Bevor du mit der Software herum spielst, stell sicher, dass du vorher ein Backup der Einstellungen deines Copters gemacht hast.

> *Anm. rumpelst1lzk1n*: Kein Backup, kein Mitleid.

## Betaflight

Mit **Abstand** die populärste Software für Flight Controller.

Die Begleitsoftware zum Anpassen der Konfiguration und Flashen von Firmware auf den Flightcontroller nennt sich *Betaflight Configurator*.

Als Einsteiger wirst du sehr wahrscheindlich als erstes mit dieser Firmware Kontakt haben. Die meisten fertigen Copter nutzen sie. Auch die meisten gängigen Flight Controller kommen mit dieser Software vorab installiert.

Der Betaflight Configurator liefert umfangreiche Hilfestellungen, z.B. welche Treiber du für das Flashen von neuer Firmware benötigst.

> *Anm. rumpelst1lzk1n*: READ THE FUCKING MANUAL!

## KISS & FETtec

Die einzigen beiden nennenswerten proprietären Repräsentanten von Flight Controller Software. Geht mit proprietärer Hardware einher, die oft auch etwas teurer ist als vergleichbare BetaFlight Hardware. Hat aber allgemein einen guten Ruf und soll sehr einfach zu konfigurieren sein.

> *Anm. Puffi*: KISS/FETTec is super!!11!

> *Anm. Panda.FPV*: Bei Puffi muss man immer aufpassen. Der versucht einen auf die dunkle Seite zu ziehen. Ruckzuck fliegst du KISS wenn du nicht aufpasst.

Sowohl KISS als auch FETtec haben den gleichen Ursprung. Teilweise waren die gleichen Entwickler sowohl an der Firmware von KISS als auch an der von FETtec beteiligt. Zwar wurden viele Komponenten inzwischen unabhängig voneinander neu entwickelt, durch den gemeinsamen Ursprung gibt es aber dennoch Ähnlichkeiten.

## Emuflight

Ähnlich Betaflight aber mehr auf TinyWhoops ausgelegt.

Die Begleitsoftware zum Flashen von Firmware auf den Flightcontroller und die Konfiguration nennt sich *Emuflight Configurator*.

## iNAV

Ähnlich Betaflight aber mit mehr Fokus auf Navigations-Features, wie das Halten der Position, automatische Rückkehr zum Startort, Abfliegen von Wegpunkten, ...

Die Begleitsoftware zum Flashen von Firmware auf den Flightcontroller und die Konfiguration nennt sich *iNAV Configurator*.

## Ardupilot

Wie iNAV nur noch umfangreicher auf den autonomen Betrieb des Geräts ausgerichtet. Unterstützt neben diversen Fluggeräten auch U-Boote, Rover, ...

Als Konfigurationssoftware kommt meistens *Mission Planer* oder *QGroundControl* zum Einsatz.
