# Funkprotokoll

Neben dem Formfaktor für die Funke gibt es auch noch die Frage nach dem Funkprotokoll. Sender in deiner Funkfernsteuerung und Empfänger auf der Drohne müssen die gleiche Sprache sprechen. Üblicherweise entscheidet man sich für einen Sender, der das gewünschte Protokoll unterstützt und packt dann dazu passende Empfänger in die Drohne.

Falls du ein nicht von deiner Funke abgedecktes Protokoll fliegen willst, kannst du dieses mit Modulen nachrüsten. Die beiden Formfaktoren nutzen unterschiedliche Modulgrößen, `JR` bei Vollformat, `Lite` bei Gamepad.

## Frequenzen

Funkprotokolle verwenden die Frequenzen 2.4GHz und 900MHz.

Bei den modernen Übertragungsprotokollen (siehe unten) ist die Frequenz nahezu irrelevant. Du wirst die Unterschiede nur in Extremsituationen und mit viel Erfahrung spüren. Beide Frequenzen gehen mit den modernen Protokollen bei gleicher Sendeleistung weiter als deine Videoverbindung. Das ist wichtig, damit dir nicht bei bestem Bild plötzlich die Funkverbindung abreißt und die Drohne aus der Luft stürzt.

### 900 MHz

- höhere Reichweite bei gleicher Sendeleistung (im Vergleich zu 2.4 GHz)
- bessere Penetration durch Bäume und in Gebäuden

### 2.4 GHz

- mehr Piloten gleichzeitig in der Luft
- höhere Update-Rate als bei 900 MHz möglich (deine Eingaben werden häufiger zur Drohne geschickt)
- kleinere Antennen als 900 MHz

Seit 2021 haben die Hersteller 2.4 GHz auch für moderne Funkprotokolle entdeckt, früher wurde diese Frequenz vor allem von den unten als "Legacy" bezeichneten Protokollen verwendet.

### Andere

Es gibt noch gänzlich andere Frequenzen auf 27, 40 oder 433 MHz. Diese sind entweder etwas für die Modellbau-Opas (aka gnadenlos veraltet) oder spielen für das FPV-Hobby zumindest keine tragende Rolle.

## Protokolle

Früher habe ich in dem Guide an dieser Stelle zwischen modernen Protokollen und Legacy unterschieden.

Inzwischen gehe ich soweit und sage: ELRS. Dann kommt lange nichts. Dann kommen noch einige verbreitete proprietäre Systeme. Und dann kommen Altlasten.

### ELRS

ExpressLRS ist der Stand der Dinge, wenn du mit dem FPV-Hobby anfangen willst. Günstig. OpenSource. Vielseitig. Leistungsstark.

Sender gibt es für 2.4GHz, 900Mhz und (seit ca Anfang 2025) auch mit Modi, die beide Frequenzen einzeln oder sogar parallel verwenden können.

Sender und Empfänger müssen zusammen passen, sie können von unterschiedlichen Herstellern kommen, müssen aber beide die Frequenzen unterstützen, die du beabsichtigst zu benutzen. Bei den allermeisten Fertig-Drohnen hast du inzwischen ELRS zur Wahl. Wo früher Legacy-Protokolle die Budget-Option waren, ist es inzwischen ELRS. Was noch nicht einmal Abstriche zu den anderen modernen Protokollen bedeutet.

Insbesondere für Einsteiger gibt es eigentlich keinen Grund, mit etwas anderem als ELRS anzufangen.

### Proprietär

Folgende proprietäre Protokolle finden sich auf dem Markt und genießen noch halbwegs Verbreitung:

- TBS Crossfire (900MHz)
- TBS Tracer (2.4GHz)
- ImmersionRC Ghost (2.4GHz)

TBS Crossfire ist das älteste und ausgereifteste der 4 Systeme. Lange Zeit das einzige ernstzunehmende Protokoll, mit dem man auch fertige Drohnen bekommen hat. Die TBS Tango 2 hat Crossfire bereits eingebaut. Für das System wirst du online umfangreiche Hilfestellungen finden.

TBS Tracer ist wie Crossfire nur auf 2.4GHz. Die TBS Mambo hat Tracer bereits eingebaut. Alles andere funktioniert wie bei Crossfire.

ImmersionRC Ghost bietet eine ähnliche Kombination aus Funkempfänger und Videosender wie Crossfire und Tracer. Ist in meiner Wahrnehmung nicht so weit verbreitet, entsprechend kann man bei Problemen etwas weniger auf Hilfestellung aus der Community zählen.

### Legacy/Altlasten

Diese Protokolle sind irrelevant.
Sei es von FrSky, Graupner, Futaba oder wie sie alle heißen. Ihnen gemein ist, dass sie eigentlich alle mit einem Multi-Protokoll-Modul abgedeckt werden. Vergiss sie. Wenn du welche hast, verkaufe sie.

Wenn du unbedingt eine Drohne fliegen willst, die einen Empfänger mit einem dieser Protokolle verwendet, ist ein Multi-Protokoll-Modul der richtige Weg. Oder ein Upgrade des Fluggeräts auf ein modernes Protokoll.

## Integration mit Videosystemen

Manche Hersteller bieten auch kombinierte Empfänger und Analog-Videosender an. Das gilt sowohl für die Hardware von TBS, ImmersionRC wie auch für die Hersteller von ELRS-Hardware. Diese erlauben eine Steuerung des Videosenders über die Integration des jeweiligen Protokolls. Wenn man sich darauf einlässt, kann das sehr komfortabel sein.

ELRS ist dabei die einzige Integration, die bedingt auch die Steuerung von digitalen Brillen erlaubt.

| TBS Crossfire 69                                                   | ImmersionRC Ghost Hybrid                                                   | Happymodel Fuyion                                          |
| ------------------------------------------------------------------ | -------------------------------------------------------------------------- | ---------------------------------------------------------- |
| ![TBS Crossfire 69 (nice!)](/img/team_blacksheep/crossfire_69.png) | ![ImmersionRC Ghost Hybrid](/img/ImmersionRC/immersionrc_ghost_hybrid.png) | ![Happymodel Fuyion](/img/happymodel/happymodel_fuyion.png) |

