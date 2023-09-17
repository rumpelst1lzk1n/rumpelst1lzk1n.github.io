# Motoren

Der Antrieb unseres Kopters.

## Aufbau

Prinzipiell handelt es sich um einen dreiphasigen Elektromotor nach dem Outrunner-Prinzip. Kurz: 3 Stromkabel und der außen liegende Teil des Motors dreht sich.

![Motor Aufbau](https://oscarliang.com/ctt/uploads/2017/12/mini-quad-brushless-motor-anatomy-bell-magnet-bearing-stator-winding-shaft-diagram.jpg)

## Kennzahlen

Hier gibt es einige Zahlen, die man kennen sollte, wenn man sich seinen Kopter selbst bauen oder zumindest sinnvolle Fragen zu dem Thema stellen möchte.

### Motor-Größe

1408, 2204, 2206, alle diese Zahlen bezeichnen Motoren in unterschiedlicher Größe. Die ersten beiden Zahlen geben den Durchmesser, die zweiten zwei Zahlen die Höhe des Motors an. Es gibt auch Exoten, die mit Komma-Werten arbeiten. Motoren, denen namhafte Piloten ihren Stempel verleihen, kommen manchmal auch ganz ohne Größenangabe aus.

Die Leistungsfähigkeit eines Motors ergibt sich aus seinem Volumen. Ein hoher schmaler Motor kann die gleiche Leistung bringen, wie ein flacher breiter oder ein Motor, der sich irgendwo in der Mitte dazwischen befindet. Durch die unterschiedliche Größe können sich allerdings unterschiedliche Laufeigenschaften ergeben. Flache, breite Motoren bleiben kühler, können ggf. größere Kugellager tragen, sind aber träger im Beschleunigen und Abbremsen. Hohe schmale Motoren werden heißer, reagieren aber schneller.

Die Motor-Größe wird üblicherweise an der Größe der Propeller fest gemacht. Für Standard-5"-Quads haben sich die Größen 2207 und 2306 etabliert.

Nachfolgende Grafik gibt eine Empfehlung, welches Motor-Volumen sich für welche Propellergröße eignen und wo einige populäre Motorgrößen einzuordnen sind.
![motor volume vs prop diameter by Chris Rosser](/img/chris_rosser_motor_size_vs_prop_diameter.png)

### KV

KV bezeichnet die sogenannte "Drehzahlkonstante". Damit sind die Umdrehungen pro Minute gemeint, die ein Motor pro Volt Akkuspannung ohne Last (also ohne Propeller) erreichen kann. Ein 10 KV-Motor erreicht mit 10 Volt Spannung 100 Umdrehungen pro Minute. Entsprechend gibt es Motoren, die für eine höhere oder niedrigere Akkuspannung ausgelegt sind.

Für 5"-Kopter haben sich Werte zwischen 1700 und 2500 KV für Akkus mit 14,8 bis 22,4 Volt etabliert. Die Motoren haben in ihren Beschreibungen häufig auch, für wie viele Akkuzellen sie ausgelegt sind. Dazu später mehr.

Die KV werden über Anzahlen an Wicklungen um den Stator erreicht. Häufig wirst du die äußerlich identischen Motoren finden, die mit einer unterschiedlichen Anzahl an KV angeboten werden.

Vermeide eine zu hohe KV bei zu viel Spannung, da sonst die Geschwindigkeit an den Spitzen der Propeller größer als die Schallgeschwindigkeit wird (kein Witz!). Das willst du vermeiden.

Technisch betrachtet ist die Einheit "KV" genau anders herum zu betrachten, wie es bei Koptern üblich ist.
Ein Elektromotor, den du von Hand drehst, wirkt wie ein Generator und erzeugt Strom. KV bezeichnet die Anzahl der Umdrehungen pro Minute, ab welcher der Motor 1 Volt Spannung ausgibt.
