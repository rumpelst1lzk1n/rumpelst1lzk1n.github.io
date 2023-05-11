# Videosender / VTX

Das Gegenstück zu deiner FPV-Brille (siehe oben). Der Videosender ist üblicherweise an den Flight Controller mit angeschlossen. Dies ermöglicht es, dass Flugdaten (Akkukapazität, Flugmodus, GPS Koordinaten, etc.) im Bild dargestellt werden.

Bei analogem Video läuft das Bild dafür durch einen separaten Chip. Dieser sitzt üblicherweise auf dem Flight Controller zuständig. Der Chip brennt die Flugdaten untrennbar in das Bild ein.
Da der Chip auf dem Flight Controller sitzt, ist die Kamera meistens zunächst mit dem Flight Controller verbunden, bevor die modifizierten Videodaten vom Flight-Controller an den Videosender übergeben werden.

Bei digitaler Bildübertragung ist die Kamera üblicherweise direkt mit dem Videosender verbunden. Flugdaten werden dem VTX separat als Daten übermittelt. Diese werden dann vom Videosender auch unabhängig von den Bildinformationen an den Videoempfänger übermittelt. Dadurch kann das Bild auch ohne Flugdaten auf dem Empfänger (z.B. einer FPV-Brille) gespeichert werden.

Konkrete Beispiele zu den Videosendern findest du im Abschnitt zu den unterschiedlichen Videosystemen (siehe oben).
