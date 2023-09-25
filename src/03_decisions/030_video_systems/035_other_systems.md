# unter ferner liefen

Die nachfolgenden Systeme sind entweder noch nicht über eine Ankündigung hinaus gekommen oder passen nicht ins Anforderungsprofil von FPV.

## Orqa HD

Orqa hat auf der CES 2022 ein eigenes HD-Videosystem vorgestellt. Viel ist darüber noch nicht bekannt.

Der Videoempfänger soll wohl ein Modul ähnlich dem von HDZero werden. An FPV-Brillen kann dieser dann entweder mit HDMI oder einer proprietären Schnittstelle angeschlossen werden.

Seit der CES hat man bis zum aktuellen Zeitpunkt (Mitte 2023) nichts mehr davon gehört.

> *Anm. rumpelst1lzk1n*: Ich glaub ja aktuell (Anfang 2023) nicht, dass da noch was bei raus kommt. Zumindest fürs FPV-Hobby. Orqa wurde von Caddx/Walksnail ziemlich kalt erwischt, was deren HD-System angeht.

## OpenHD

[OpenHD](https://github.com/OpenHD/Open.HD) ist ein OpenSource-Projekt, in dem handelsübliche WLAN-Hardware zur Bildübertragung genutzt wird. Als Kameras werden häufig Kombinationen aus Raspberry Pi und den dafür erhältlichen Kameras genutzt.

Das Projekt wird aktiv weiter entwickelt. Für den FPV-Flug mit Drohne ist diese Art der Videoübertragung leider (noch) nicht zu gebrauchen, da die Latenz zu hoch ist.

Für andere Einsatzzwecke, bei denen es nicht so stark auf die Latenz ankommt, ist der Einsatz durchaus vorstellbar. Beispiele hierfür wären Foto-Kopter oder Wings.

## OpenIPC

[OpenIPC](https://openipc.org/) ist ähnlich wie OpenHD ein OpenSource-Projekt. Statt dem Raspberry Pi-Setup kommen IP-Kameras zum Einsatz, wie sie z.B. auch in Überwachungskameras verwendet werden.

Das Projekt ist aus OpenHD hervor gegangen und wird aktiv weiter entwickelt. Für den FPV-Flug mit einem Multicopters ist diese Art der Videoübertragung leider (noch) nicht zu gebrauchen, da die Latenz zu hoch ist. Allerdings konnten die Entwickler die Latenz im Vergleich zu OpenHD ungefähr halbieren.
