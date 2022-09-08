# Flugsteuerung / Flight Controller / FC

Der Flight Controller ist ein Mikrocontroller der die unterschiedlichen elektronischen Komponenten deines Quads zusammenbringt.

Das Gyroskop liefert die Lageninformationen, die Steuersoftware berechnet, wie schnell welcher Motor drehen muss, damit der Kopter in die von dir über die Fernsteuerung vorgegebene Fluglage kommt.

Die mit Abstand häufigste Steuersoftware ist Betaflight. Es gibt noch andere Software, der Themenkomplex hat aber weiter unten ein eigenes Kapitel.

Das Herzstück der Flugsteuerung ist der Prozessor. Dabei handelt es sich normalerweise um einen STM32-Chip des Herstellers STMicroelectronics. Den Chip gibt es in unterschiedlichen Ausführungen, üblicherweise kommen Prozessoren vom Typ F4, F7 oder (neuerdings) H7 zum Einsatz. Diese unterscheiden sich in Geschwindigkeit und verfügbaren Anschlüssen. F4-Prozessoren sind inzwischen als Budget-Variante zu sehen, F7 oder H7 dagegen eher als Premium.

Weitere mögliche Charakteristiken, die einen Flight-Controller in Richtung Premium schieben sind z.B. ein SD-Kartenslot für Blackbox-Logs oder ein zweites Gyroskop um genauere Daten zu erhalten.

F3 wurde ebenfalls verwendet, ist aber lange überholt. Neuere Versionen von Betaflight setzen mindestens F4 voraus. Lass dir keine alte Hardware mit F3-Prozessoren aufschwatzen.

Es gibt auch Flight Controller mit integriertem ESC, hier spricht man von einem "All in One" (AIO).
