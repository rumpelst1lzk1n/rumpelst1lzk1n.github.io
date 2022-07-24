# Fernbedienung

Du willst fliegen? **Nein**, willst du nicht.

Du willst erst mal im Simulator üben.

> *Anm. remove_me*: **GLAUB ALLEN! ERST SIMULATOR! DANN DROHNE!!**

Wenn du ein Gamepad hast, kannst du direkt dir auf Steam einen der vielen Simulatoren holen. Ein Gamepad ist besser als nichts, aber eigentlich willst du eine echte Funkfernsteuerung. Diese verhält sich von den Sticks anders als ein Gamepad.

Moderne Funkfernsteuerungen kannst du an deinen Rechner anschließen und dort als Controller verwenden.

Für diesen Abschnitt solltest du zwischen 90 und 300€ einplanen. Eine Funkfernsteuerung ist normalerweise eine einmalige Anschaffung, die dich sehr lange begleiten wird. Es geht auch noch teurer, aber das bedeutet nicht zwangsläufig bessere oder modernere Technik.

## Formfaktor

Als vorherrschende Formfaktoren bei Fernbedienungen gibt es Gamepad und Vollformat. Gamepad sollte bekannt sein. Vollformat sind viereckige Kästen. Zwischenstufen sind möglich.

Nachfolgend 3 populäre Vertreter dieser Formfaktoren.

| Vollformat                                        | Gamepad                                          | Zwischending                                  |
| ------------------------------------------------- | ------------------------------------------------ | --------------------------------------------- |
| ![Radiomaster TX16S](/img/radiomaster_tx16s.png) | ![TBS Tango 2](/img/team_blacksheep/tango2.jpg) | ![TBS Mambo](/img/team_blacksheep/mambo.jpg) |

## Modi

Bei einem Gamepad zentrieren sich beide Analog-Sticks. Bei einer RC-Funkfernsteuerung zentriert sich die Achse des Sticks, auf dem das Gas liegt nicht selbständig, damit du dieses feiner dosieren kannst. Das gilt auch für Funkfernsteuerungen im Gamepad-Formfaktor.

Welche Achse genau das ist, hängt vom Modus ab, auf den deine Funkfernsteuerung eingestellt ist. Der gängigste Modus ist "Mode 2", aber nimm, womit du am besten klar kommst.

![radio_modes](/img/radio_modes.drawio.png)

> *Anm. Philm0*: Als Links/Rechtshänder solltest du dich zwischen Mode 1 und 2  entscheiden, Mode 3 und 4 ist im Regelfall nur dumme scheiße lernen.

Normal kann jede Funke alle Modi. Der Wechsel zwischen Modi, bei denen sich die Gas-Achse nicht verändert, lässt sich einfach in der Software konfigurieren.

Wenn du allerdings zwischen Modi wechseln möchtest, die das Gas auf einem anderen Stick haben, wirst du eine Anpassung der Hardware vornehmen müssen.

Manche Funken erlauben diese Anpassung von außen vorzunehmen, andere musst du aufschrauben um ein paar Schräubchen und Federn anders zu setzen, wieder bei anderen kann es passieren, dass du die Sticks komplett ausbauen und anders herum einbauen musst.

## Funkprotokoll

Neben dem Formfaktor ist auch noch die Frage nach dem Funkprotokoll. Sender in deiner Funkfernsteuerung und Empfänger auf der Drohne müssen die gleiche Sprache sprechen. Üblicherweise entscheidet man sich für einen Sender, der das gewünschte Protokoll unterstützt und packt dann dazu passende Empfänger in die Drohne.

Falls du ein nicht von deiner Funke abgedecktes Protokoll fliegen willst, kannst du dieses mit Modulen nachrüsten. Die beiden Formfaktoren nutzen unterschiedliche Modulgrößen, `JR` bei Vollformat, `Lite` bei Gamepad.

### Frequenzen

Funkprotokolle verwenden die Frequenzen 2.4GHz und 900MHz.

Bei den modernen Übertragungsprotokollen (siehe unten) ist die Frequenz nahezu irrelevant. Du wirst die Unterschiede nur in Extremsituationen und mit viel Erfahrung spüren. Beide Frequenzen gehen mit den modernen Protokollen bei gleicher Sendeleistung weiter als deine Videoverbindung. Das ist wichtig, damit dir nicht bei bestem Bild plötzlich die Funkverbindung abreißt und die Drohne aus der Luft stürzt.

#### 900 MHz

- höhere Reichweite bei gleicher Sendeleistung (im Vergleich zu 2.4 GHz)
- bessere Penetration durch Bäume und in Gebäuden

#### 2.4 GHz

- mehr Piloten gleichzeitig in der Luft
- höhere Update-Rate als bei 900 MHz möglich (deine Eingaben werden häufiger zur Drohne geschickt)
- kleinere Antennen als 900 MHz

Seit 2021 haben die Hersteller 2.4 GHz auch für moderne Funkprotokolle entdeckt, früher wurde diese Frequenz vor allem von den unten als "Legacy" bezeichneten Protokollen verwendet.

#### Andere

Es gibt noch gänzlich andere Frequenzen auf 27, 40 oder 433 MHz. Diese sind entweder etwas für die Modellbau-Opas (aka gnadenlos veraltet) oder spielen für das FPV-Hobby zumindest keine Rolle.

### Alt vs. Neu

Bei den Funkprotokollen unterscheide ich zwischen Legacy und Modern.

#### Legacy

Diese Protokolle sind irrelevant.
Sei es von FrSky, Graupner, Futaba oder wie sie alle heißen. Ihnen gemein ist, dass sie eigentlich alle mit einem Multi-Protokoll-Modul abgedeckt werden. Vergiss sie. Wenn du welche hast, verkaufe sie.

Wenn du unbedingt eine Drohne fliegen willst, die einen Empfänger mit einem dieser Protokolle verwendet, ist ein Multi-Protokoll-Modul der richtige Weg. Oder ein Upgrade des Fluggeräts auf ein modernes Protokoll.

#### Modern

Folgende Funksysteme können als "modern" betrachtet werden:

- TBS Crossfire (900MHz)
- TBS Tracer (2.4GHz)
- ExpressLRS (aka. ELRS) (900MHz und 2.4GHz)
- ImmersionRC Ghost (2.4GHz)

TBS Crossfire ist das älteste und ausgereifteste der 4 Systeme. Lange Zeit das einzige ernstzunehmende Protokoll, mit dem man auch fertige Drohnen bekommen hat. Die TBS Tango 2 hat Crossfire bereits eingebaut. Es gibt kombinierte Empfänger/(analoge) Videosender, die eine komfortable Steuerung des Videosenders über Crossfire erlauben. TBS stellt auch analoge Videosender und Empfänger her. Wenn man sich darauf einlässt, bietet es eine umfangreiche Integration. Für das System wirst du online umfangreiche Hilfestellungen finden.

TBS Tracer ist wie Crossfire nur auf 2.4GHz. Die TBS Mambo hat Tracer bereits eingebaut. Alles andere funktioniert wie bei Crossfire.

ELRS ist OpenSource und wird von unterschiedlichen Herstellern angeboten.
Es gibt Sender/Empfänger für 2.4GHz und 900MHz. Sender und Empfänger müssen zusammen passen, sie können von unterschiedlichen Herstellern kommen, müssen aber die gleiche Frequenz nutzen. Das System ist noch relativ jung, aber es springen zunehmend Hersteller auf den Zug auf. Es gibt inzwischen auch vereinzelt Drohnen fertig damit zu kaufen. Das günstigste der 4 Systeme. Es ist davon auszugehen, dass ELRS mittelfristig die noch verbliebenen Legacy-Protokolle auch im Budget-Bereich verdrängen wird.

Ghost bietet eine ähnliche Kombination aus Funkempfänger und Videosender wie Crossfire und Tracer. Ist in meiner Wahrnehmung nicht so weit verbreitet, entsprechend kann man bei Problemen etwas weniger auf Hilfestellung aus der Community zählen.

## Empfehlungen (Funke)

Wenn du dir eine Funkfernsteuerung holst, solltest du darauf achten, dass diese mit OpenTX oder einem Derivat davon läuft.

OpenTX ist ein Betriebssystem für Funkfernsteuerungen und hat sich bei FPV-Drohnen als Quasi-Standard etabliert. Für Funken mit diesem Betriebssystem wirst du online jede Menge Hilfestellungen finden.

Alle hier genannten Funkfernsteuerungen verwenden entweder OpenTX oder ein Derivat davon, z.B. FreedomTX oder EdgeTX.

> *Anm. rumpelst1lzk1n*: Funken ohne OpenTX (oder Derivat davon) sind irrelevant.

Bei den genannten Funken ist das Display nachrangig.
Wir fliegen FPV (First-Person-View) und bekommen die relevanten Flugdaten in der Brille angezeigt. Ein großes Display wie bei der TX16S ist zwar schön, wenn man etwas umfangreicher konfigurieren will, aber man kann die Funken auch über den Rechner ganz ohne Display konfigurieren.

Wenn du bei der Funke hinsichtlich des verbauten Moduls die Wahl zwischen einem Multi-Protokoll-Modul und ELRS hast, nimm ELRS. ELRS hat Anfang 2022 auf dem Markt ordentlich aufgeräumt. Alle fertigen Kopter, die früher mit einem der Legacy-Protokolle angeboten wurden, gibt inzwischen alles eigentlich auch mit ELRS, sodass es keinen Grund mehr gibt, irgendwelche alten Krücken zu fliegen.

### Radiomaster TX16S (Mk 2)

- ca. 230€
- Vollformat
- Multi-Protokoll-Modul, MK2 wahlweise mit ELRS
- OpenTX oder EdgeTX
- großer farbiger Touchscreen, Touch wird nur in EdgeTX unterstützt

Gibt es auch als Variante von Eachine. Beide Funken sind gleichwertig und unterscheiden sich nur geringfügig durch die Positionierung und Form einiger Knöpfe.

### Radiomaster Zorro

- ca. 140€
- Gamepad
- Mehrere Protokoll-Varianten. Nimm die mit ELRS.
- Monochrom-Display
- sehr kleiner interner Akku

### Radiomaster TX12

- ca. 120€
- etwas kleiner als Vollformat
- eingebautes Multi-Protokoll-Modul
- OpenTX oder EdgeTX
- Monochrom-Display

### Jumper T-Pro

- ca. 150€
- Gamepad
- Mehrere Protokoll-Varianten. Nimm die mit ELRS.
- winziges Monochrom-Display

### TBS Tango 2

- ca. 160-200€
- Gamepad
- eingebautes Crossfire
- ständig ausverkauft
- winziges Monochrom-Display
- Multi-Protokoll-Modul muss nach gekauft werden

Vermutlich die hochwertigste aktuelle Funke im Gamepad-Formfaktor.

### TBS Mambo

- ca. 160€
- etwas kleiner als Vollformat
- eingebautes Tracer
- kleines Monochrom-Display

## Empfehlungen (Sendemodul & Empfänger)

Wenn deine Funke nicht das Protokoll kann, das du möchtest, gibt es bei den meisten Funken die Möglichkeit, ein Modul nachzurüsten.

### ELRS

Bei ELRS konzentrieren wir uns auf 2.4 GHz. 900 MHz-Systeme würde ich für einen Neueinsteiger nicht empfehlen. Bzw. wenn, dann Crossfire.

#### Happymodel ES24TX Pro

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

#### ELRS-Empfänger

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
