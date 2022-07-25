# Empfehlungen

Alle hier genannten Funkfernsteuerungen verwenden entweder OpenTX oder ein Derivat davon, z.B. FreedomTX oder EdgeTX.

Bei den genannten Funken ist das Display nachrangig.
Wir fliegen FPV (First-Person-View) und bekommen die relevanten Flugdaten in der Brille angezeigt. Ein großes Display wie bei der TX16S ist zwar schön, wenn man etwas umfangreicher konfigurieren will, aber man kann die Funken auch über den Rechner ganz ohne Display konfigurieren.

Wenn du bei der Funke hinsichtlich des verbauten Moduls die Wahl zwischen einem Multi-Protokoll-Modul und ELRS hast, nimm ELRS. ELRS hat Anfang 2022 auf dem Markt ordentlich aufgeräumt. Alle fertigen Kopter, die früher mit einem der Legacy-Protokolle angeboten wurden, gibt inzwischen alles eigentlich auch mit ELRS, sodass es keinen Grund mehr gibt, irgendwelche alten Krücken zu fliegen.

## Radiomaster TX16S (Mk 2)

- ca. 230€
- Vollformat
- Multi-Protokoll-Modul, MK2 wahlweise mit ELRS
- OpenTX oder EdgeTX
- großer farbiger Touchscreen, Touch wird nur in EdgeTX unterstützt

Gibt es auch als Variante von Eachine. Beide Funken sind gleichwertig und unterscheiden sich nur geringfügig durch die Positionierung und Form einiger Knöpfe.

## Radiomaster Zorro

- ca. 140€
- Gamepad
- Mehrere Protokoll-Varianten. Nimm die mit ELRS.
- Monochrom-Display
- sehr kleiner interner Akku

## Radiomaster TX12

- ca. 120€
- etwas kleiner als Vollformat
- eingebautes Multi-Protokoll-Modul
- OpenTX oder EdgeTX
- Monochrom-Display

## Jumper T-Pro

- ca. 150€
- Gamepad
- Mehrere Protokoll-Varianten. Nimm die mit ELRS.
- winziges Monochrom-Display

## TBS Tango 2

- ca. 160-200€
- Gamepad
- eingebautes Crossfire
- ständig ausverkauft
- winziges Monochrom-Display
- Multi-Protokoll-Modul muss nach gekauft werden

Vermutlich die hochwertigste aktuelle Funke im Gamepad-Formfaktor.

## TBS Mambo

- ca. 160€
- etwas kleiner als Vollformat
- eingebautes Tracer
- kleines Monochrom-Display

## Sendemodul & Empfänger

Wenn deine Funke nicht das Protokoll kann, das du möchtest, gibt es bei den meisten Funken die Möglichkeit, ein Modul nachzurüsten.

## ELRS

Bei ELRS konzentrieren wir uns auf 2.4 GHz. 900 MHz-Systeme würde ich für einen Neueinsteiger nicht empfehlen. Bzw. wenn, dann Crossfire.

### Happymodel ES24TX Pro

- ca. 45€
- ELRS auf 2.4GHz
- 1W maximale Sendeleistung
- WiFi/Bluetooth
- Versionen für JR- und Lite-Modulschacht ("Slim")

Happymodel war der erste Hersteller, der fertige ELRS-Produkte auf den Markt gebracht hat. Die Produkte genießen einen guten Ruf, auch, weil der Hersteller gut mit den Entwicklern zusammen arbeitet.

> *Anm. rumpelst1lzk1n*: Es gibt auch fancy ELRS-Module mit kleinem Display. Meiner Meinung nach unnötig. Einziger Wermutstropfen bei dem Modul ist, dass man das Modul für Zugriff auf den USB-Port aufschrauben muss. Ist aber nicht unbedingt notwendig, flashen kann man das Modul auch über die Funke oder über WiFi.

| Happymodel ES24TX Pro                            | Happymodel ES24TX Pro Slim                              |
| ------------------------------------------------ | ------------------------------------------------------- |
| ![JR-Bay Modul](/img/happymodel/ES24TX_Pro.jpg) | ![Lite-Bay Modul](/img/happymodel/ES24TX_Pro_slim.jpg) |

### ELRS-Empfänger

Einen ELRS-Empfänger bekommst du für um die 15-20€. Mehr ist Wucher. Spezialfälle z.B. mit Antennen-Diversity oder PWM ausgenommen.

Eine Besonderheit bei den ELRS-Empfängern ist, dass manche davon eine Keramik-Antenne verwenden, die direkt auf dem Receiver drauf ist. Heißt, du musst dir keine Gedanken machen, wie du eine Antenne auf deinem Fluggerät unter bringst. Eine richtige Antenne hat mehr Reichweite. Für kleine Fluggeräte, mit denen du dich in einem Umkreis von etwa einen Kilometer bewegst, reicht das trotzdem. Das Grundprinzip, dass bei gleicher Sendeleistung dein Steuersignal weiter geht als dein Videosignal wird auch damit erfüllt.

| Happymodel EP1                                 | Happymodel EP2                                 | BetaFPV EP2                                            |
| ---------------------------------------------- | ---------------------------------------------- | ------------------------------------------------------ |
| ![Happymodel EP1](/img/happymodel/EP1_RX.jpg) | ![Happymodel EP2](/img/happymodel/EP2_RX.jpg) | ![BetaFPV EP2](/img/betafpv/EP2_RX_flat_ceramic.webp) |

Für Spezialfälle (PWM-Ausgänge, Diversity, etc) lohnt sich ein Blick auf die Empfänger des Herstellers "Matek".

### Crossfire & Tracer

Eigentlich gibt es bei den Systemen von TBS nicht viel zu sagen. Crossfire ist 900 MHz, Tracer ist 2.4 GHz. Das System wird nur von TBS hergestellt und die haben ihr Produktportfolio ganz gut unter Kontrolle.

#### Sender

Lediglich bei Crossfire gibt es 2 unterschiedliche Sende-Module für den JR-Schacht. Das Micro (v2) reicht vollkommen aus.

Ansonsten gibt es für Tracer und Crossfire je ein Modul für JR- und Lite-Modulschacht.

| Crossfire Micro TX                                             | Crossfire Nano TX                                                  | Tracer Micro TX                                          | Tracer Nano TX                                               |
| -------------------------------------------------------------- | ------------------------------------------------------------------ | -------------------------------------------------------- | ------------------------------------------------------------ |
| ![Crossfire Micro TX](/img/team_blacksheep/Crossfire_Mtx.jpg) | ![Crossfire Nano TX](/img/team_blacksheep/Crossfire_Mtx_lite.jpg) | ![Tracer Micro TX](/img/team_blacksheep/Tracer_Mtx.jpg) | ![Tracer Nano TX](/img/team_blacksheep/Tracer_Mtx_lite.jpg) |

#### Empfänger

Es gibt 3 Empfänger-Typen, die für den FPV-Bereich relevant sind.

- Crossfire Nano Diversity
- Nano (jeweils Crossfire & Tracer, bei Tracer gleichzeitig Diversity)
- Sixty9 (jeweils Crossfire & Tracer)

Wenn du Analog fliegst, empfehle ich dir, einen Blick auf den Sixty9 zu werfen. Das ist eine Kombination aus Empfänger und Video-Sender. Ansonsten nimm den Nano. Der Crossfire Nano Diversity ist eher für LongRange-Systeme gedacht.
