# HDZero (früher SharkByte)

HDZero (aka SharkByte) ist ein weiteres digitales FPV-System. Es erfreut sich aufgrund seiner technischen Eigenschaften bei den FPV-Racern stetig wachsender Beliebtheit. Bei anderen FPV-Kategorien, insbesondere Freestyle hat es jedoch einen schweren Stand gegenüber DJI (und neuerdings Walksnail).

Bei der Bildqualität sind sowohl DJI wie auch Walksnail die klar überlegenen Systeme.

> *Anm. vtx-slayer*: HDZero ist eher so Analog Plus.

Für die Nutzung von HDZero gibt es normal folgende Gründe:

- Du bist Racer und ...
  - ... hast das Geld für die HDZero-Brille.
  - ... willst besseres Bild als Analog.
- Das DJI-System wiegt dir zu viel.
- Die variable Latenz anderer digitaler Systeme (DJI, Walksnail) stört dich.
- Du hast bereits eine gute Analog-Brille (mit HDMI-Eingang) und möchtest diese weiter verwenden.

Es wird langsam von Drittherstellern adaptiert, die eigene Kameras und Video-Sender herausbringen. Im Gegensatz zu DJI will die Firma hinter HDZero die Technologie auch anderen Herstellern zugänglich machen, sodass diese eigene, untereinander kompatible Produkte auf den Markt bringen können. Ähnlich, wie es jetzt auch schon bei Analog der Fall ist.

## Videosender

Aktuell gibt es 5 relevante Videosender. Die Hardware ist im Laufe der Zeit immer ausgereifter und kompakter geworden. Bei manchen Serien wird explizit die Version erwähnt, da es sich eher um eine Evolution handelt.

### Race

Die Race-Serie ist wie der Name schon sagt vornehmlich für Race-Kopter gedacht. Dazu ist das bisher der Foxeer-Race-VTX bisher der einzige VTX für HDZero von einem Dritthersteller.

Die Sendeleistung bei diesen VTXen liegt bei 200mW. Mehr braucht es beim Racing nicht.

| V3                                                          | Foxeer                                                     |
| ----------------------------------------------------------- | ---------------------------------------------------------- |
| ![HDZero Race v3 VTX](/img/divimath/hdzero_race_vtx_v3.png) | ![Foxeer Race VTX](/img/foxeer/foxeer_hdzero_race_vtx.png) |

Bitte beachte, dass der v3 Race VTX maximal 12V (3S) Spannung ab kann. Frühere Versionen sowie der Foxeer können bis 25V ab und können daher direkt mit der Akkuspannung eines 6S Kopters gespeist werden.

### Whoop

Die Whoop-Serie ist für Tinywhoops gedacht, daher wurde besonders aufs Gewicht geachtet. Die Serie ist im Whoop-Standard-Format mit Montagen im Format 25x25 und hat bis zu 200mW Sendeleistung.

Neben einem dedizierten VTX gibt es auch einen FlightController, der Flugsteuerung, Motorsteuerung, Receiver und Videosender vereint (AIO).

| separater VTX                                       | integriert mit Flight Controller             |
| --------------------------------------------------- | -------------------------------------------- |
| ![Whoop VTX](/img/divimath/hdzero_whoop_vtx_v2.png) | ![Whoop AIO5](/img/divimath/hdzero_aio5.png) |


### Freestyle

Die Freestyle-Serie hat einen markanten Kühlkörper um die 1000mW Sendeleistung zu kompensieren. Er ist für den Flug mit Freestyle-Kopter gedacht. Üblicherweise hat man dort leichter Hindernisse zwischen dem Piloten und dem Kopter, welche den Empfang beeinträchtigen. Mehr Sendeleistung hilft, das zu kompensieren.

Bitte beachte, dass in Deutschland maximal 25 Milliwatt legal sind.

Beim V2 hat sich der Hersteller am Format der DJI Vista Unit (siehe oben) orientiert. Viele Hersteller von FPV-Frames orientieren sich an deren Abmessungen. Der V1 VTX war hier etwas problematischer und der Einbau in Frames war entsprechend oft mit Kompromissen behaftet.

| V1                                                                          | V2                                                                          |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| ![HDZero 1Watt freestyle VTX V1](/img/divimath/hdzero_freestyle_vtx_v1.png) | ![HDZero 1Watt freestyle VTX V2](/img/divimath/hdzero_freestyle_vtx_v2.png) |

## Empfänger

Für HDZero gibt es inzwischen einige unterschiedliche Empfänger.

### Modul

Das Modul kostet etwa 250€ und setzt eine vorhandene FPV-Brille **mit HDMI-Eingang** voraus.

![HDZero VRX](/img/divimath/hdzero-vrx-digital-hd-empfaenger-modul.png)

### Brillen

Daneben gibt es 2 Brillen, eine im Binocular-Design und eine im Box-Design.

| HDZero Brille                                      | EMAX Transporter II HD                                        |
| -------------------------------------------------- | ------------------------------------------------------------- |
| ![HDZero Brille](/img/divimath/hdzero_goggles.png) | ![EMAX Transporter 2 HD](/img/emax/emax_transporter_2_hd.png) |

Beide sind nur vereinzelt bei europäischen Shops verfügbar. Ansonsten sind die Websites der jeweiligen Hersteller eine gute Anlaufstelle dafür.

Kostenpunkt für die HDzero Brille sind bei europäischen Shops etwa 700€, bei der EMAX-Brille etwa 290€. Bei den Shops der Hersteller kann man teilweise günstiger weg kommen, je nach Kurs Dollar/Euro.

### Kameras

Bei den Kameras unterscheidet man zwischen den Verbindungen via MIPI-Kabel und AnalogHD. Jede Verbindung hat ihre eigenen Videosender. AnalogHD ist insbesondere für extrem leichte Kameras gedacht.

#### MIPI

Bei den MIPI Kameras gibt es aktuell 4 relevante Modelle in Standardbreiten 19mm (Micro) und 14mm (Nano)

| 19x19mm                                                   | 14x16mm                                                       |
| --------------------------------------------------------- | ------------------------------------------------------------- |
| ![HDZero Micro V2](/img/divimath/hdzero_cam_micro_v2.png) | ![HDZero Nano V2](/img/divimath/hdzero_cam_nano_v2.png)       |
|                                                           | ![HDZero Nano 90FPS](/img/divimath/hdzero_cam_nano_90fps.png) |
|                                                           | ![HDZero Nano Lite](/img/divimath/hdzero_cam_nano_lite.png)   |

Micro und Nano V2 können bis 1080p bei 30fps und 720p bei 60fps aufnehmen und sind das, was man als "guter Standard" bezeichnen kann.

Die Nano 90FPS kann 720p bei 60fps und 540p bei 90fps aufnehmen. Die 90FPS sind allerdings ausschließlich mit der HDZero Brille als Empfänger verwendbar. Dafür bietet die Kombination aus HDZero Brille und 90FPS-Kamera eine geringere Latenz als selbst Analog.

Die Nano Lite kann 720p bei 60fps aufnehmen. Sie ist die leichteste der Kameras und für TinyWhoops gedacht.

Darüber hinaus gibt es noch andere / ältere (lies: schlechtere) Kameras für das HDZero-System.

#### AnalogHD

Mit AnalogHD hast du 2 Kameras zur Auswahl. Einmal die Eco und einemal die Lux. Die Lux ist besser.

Beide sind für relativ leichte Kopter, wie z.B. TinyWhoops gedacht.

| Eco                                      | Lux                                      |
| ---------------------------------------- | ---------------------------------------- |
| ![Eco](/img/divimath/hdzero_cam_eco.png) | ![Lux](/img/divimath/hdzero_cam_lux.png) |

## Alte Hardware

Neben den oben erwähnten Empfängern und Sendern gibt es noch ältere Hardware. Diese wurde teilweise unter dem Label von Fatshark vermarktet, teilweise handelt es sich auch um ältere Iterationen der oben genannten Produkte. Diese Hardware wird nicht mehr weiter produziert.

Zu der betreffenden Hardware zählen Videosender wie:

- Race VTX v1
- Race VTX v2
- Whoop TX5S.1

Daneben gibt es noch Legacy-Empfangs-Hardware. Eine Brille mit eingebautem HDZero-Modul und ein separates Modul. Das Modul wurde nahtlos durch den oben bereits genannten Empfänger ersetzt. Für die Brille gibt es bisher noch keine Alternative.

| Fatshark Scout HD                                         | SharkByte Empfänger                                           |
| --------------------------------------------------------- | ------------------------------------------------------------- |
| ![Fatshark Scout HD](/img/fatshark/fatshark_scout_hd.png) | ![Shark Byte RX5.1](/img/fatshark/fatshark_sharkbyte_vrx.png) |
