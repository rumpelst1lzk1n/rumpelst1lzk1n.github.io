# Motorsteuerung / Electronic Speed Controller / ESC

Die Motorsteuerung erfolgt über den ESC. Er ist zudem die zentrale Stromversorgung des Kopters, der Akku hängt direkt am ESC.

Bis vor einigen Jahren war diese Komponente noch aufgeteilt in einen Chip für die Stromverteilung (Power Distribution Board, PDB) sowie 4 einzelne ESCs pro Motor.

Heutzutage besteht der ESC üblicherweise nur noch aus einem Chip (All In One ESC, AIO-ESC) oder ist zusammen mit dem Flight Controller auf dem gleichen Board.

| 4in1                                                | Einzel-ESC                                              |
| --------------------------------------------------- | ------------------------------------------------------- |
| ![Foxeer 4in1 ESC](/img/foxeer/foxeer_esc_4in1.png) | ![Foxeer Single ESC](/img/foxeer/foxeer_esc_single.png) |

Der ESC verfügt üblicherweise über einen Anschluss für Strom, für das Steuersignal sowie für den Motor. Der Motor hat 3 Phasen, daher hier 3 Löt-Pads pro Motor.

Am Stromanschluss hängt bei 4in1 ESC meistens direkt der Akku.

![Foxeer 4in1 ESC Schema](/img/foxeer/foxeer_esc_4in1_schema.png)

## Firmware

Als Firmware kommt auf der Motorsteuerung meistens BLHeli_S, AM32 oder BLHeli_32 zum Einsatz. Auch, wenn die ESCs alle auf einem Chip sind, hast du bei einem 4in1-ESC technisch betrachtet mehrere unabhängige ESCs, die du einzeln flashen und konfigurieren musst.

BLHeli_32 galt als ausgereifteste Firmware, wurde aber Anfang Juni 2024 urplötzlich und ohne Vorwarnung eingestellt. Auch die Update-Server wurden offline genommen. Zum aktuellen Zeitpunkt (Mitte 2024) steht es in der Schwebe, wie es für Kunden mit BLHeli_32-ESCs weiter geht. Fliegbar sind sie, aber es gibt keine Möglichkeit, sie zu aktualisieren und die Firmware selbst ist ebenfalls eingestellt.

AM32 ist eine OpenSource-Software, die auf der gleichen Hardware wie BLHeli_32 laufen kann. Zum aktuellen Zeitpunkt (Mitte 2024) evaluieren die meisten Hersteller, auf AM32 umzusteigen. 

## Steuerung

Die Motorsteuerung gibt die Drehrichtung der Motoren vor. Die 2 jeweils diagonal gelegenen Motoren sollten sich in die gleiche Richtung drehen. Dabei unterscheidet man zwischen "props in" und "props out".

| props in                                                                                                                       | props out                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| ![props in](https://raw.githubusercontent.com/betaflight/betaflight-configurator/master/resources/motor_order/quad_x_1234.svg) | ![props out](https://raw.githubusercontent.com/betaflight/betaflight-configurator/master/resources/motor_order/quad_x_1234_reversed.svg) |

Welche der beiden Varianten besser ist, darüber scheiden sich die Geister.
