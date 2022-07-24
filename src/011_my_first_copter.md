# Der erste eigene Copter

In diesem Abschnitt geht es darum, tatsächlich einen Copter zu kaufen oder zu bauen. Jetzt gehts ans eingemachte.

## Fertigen Copter kaufen

Wenn du eine fertigem Copter kaufst, sparst du jede Menge Zeit mit der Auswahl der Komponenten und dem Zusammenbau und Einstellen. Häufig bekommst du eine fertig gebaute Copter günstiger als wenn du ihre Einzelteile separat kaufen würdest. Zudem kannst du erwarten, dass der Copter bereits akzeptabel eingestellt ist, was das Flugverhalten angeht.

Für viele gehört das selbst bauen des Copters einfach zum Hobby dazu. Ich will dich aber nicht davon ab bringen, ein fertiges Gerät zu kaufen.

> *Anm. remove_me*: Wenn du deine Drohne nicht selber baust, bist du eigtl. auch nix wert. Aber schön, dass du da bist!

### Ready-to-Fly / RTF

RTF wird für 2 leicht unterschiedliche Produkte verwendet.

Zum einen bezeichnet es komplette Kits, bestehend aus Brille, Funkfernsteuerung und Copter. Ggf. sogar noch mit Akkus und Ladegerät. Auspacken, Akkus laden, losfliegen. Theoretisch das Rundum-Sorglos-Paket. Meistens kommen hier aber billigste Komponenten zum Einsatz, daher sind solche Kits mit Vorsicht zu genießen.

Zum anderen wird der Begriff als Synonym für "Bind and Fly" verwendet.

### Bind and Fly / BNF

Der Copter ist flugfertig zusammengebaut, verfügt über ein Videosystem und einen Funkempfänger. Du musst diesen eigentlich nur noch an die Funkefernbedienung binden.

### Plug'n'Play / PNP

Der Copter ist flugfertig zusammengebaut, verfügt über ein Videosystem, hat aber im Gegensatz zum BNF *KEINEN* Funkempfänger an Bord. Du musst diesen selbst nachrüsten. Praktisch, wenn man sowieso noch einen Funkempfänger daheim rum liegen hat.

### Powertrain

Powertrain bezeichnet den Copter ohne Videosender und Empfänger. Das Paket besteht also nur aus dem Frame, Flight Controller, ESC und den Motoren.

Gibt es ganz selten bei Coptern von namenhaften Herstellern, ist eher auf dem Gebrauchtmarkt zu finden.

### Empfehlungen (Copter kaufen)

Für fertige Copter gilt immer die Empfehlung, sich Testberichte dazu auf Youtube anzusehen.

#### Eachine Trashcan

Wenn du im Winter einsteigst, solltest du dir überlegen, ob du dir einen TinyWhoop holst und damit innen fliegst. Die "Trashcan" von Eachine ist ein populärer Vertreter und kann mit 1S oder 2S Akkus geflogen werden.

Mit 2S kann man sie auch außen ganz gut fliegen.

> *Anm. rumpelst1lzk1n*: Auf XT30 umlöten und dann mit 2S 350mah LiPos fliegen. Ein Traum.

#### Happymodel Moblite7

Nochmal eine Stufe leichter als die Trashcan, kann nur mit 1S Akkus geflogen werden, hat aber aufgrund des geringen Gewichts eine vergleichsweise lange Flugzeit.

#### GepRC Phantom / Emax Babyhawk

Schöne kleine Toothpicks mit gut Power. Anfängerfreundlich, verzeihen aufgrund des geringen Gewichts Crashes und wirken nicht so bedrohlich, wenn du damit z.B. im Park cruisen möchtest.

#### iFlight Nazgul 5 (Evoque)

Einer der bekanntesten Einsteiger-Copter. Das Produkt hat inzwischen mehrere Iterationen hinter sich, die aktuellste (Stand Ende 2021) trägt den Beinamen "Evoque". iFlight liefert verlässliche Qualität, Dokumentation und verwendet Standard-kompatible Teile. Zudem kriegt man die Copter mit Analog oder Digital und unterschiedlichen Protokollen zur Fernsteuerung.

#### Diatone Roma F5 (V2)

Ähnlich dem iFlight Nazgul. In Sachen Qualität der Komponenten steht der Roma F5 dem Nazgul in nichts nach. Die größte Frage ist, welchen man zum aktuellen Zeitpunkt günstiger bekommt und welcher Frame einem besser gefällt.

## Eigenbau

Wenn du deinen Copter selbst baust, lernst du dabei sehr viel über ihre Zusammensetzung und die Komponenten. Das hilft ungemein, wenn du dein Fluggerät nach einer Bruchlandung reparieren musst.

> *Anm. Puffi*: Für den Kauf von Einzelteilen gilt: Bei Motoren und Armen immer 2 mehr bestellen.

### Builds

Im Folgenden werden einige mögliche Builds vorgestellt, von Budget bis Premium.

Die Builds konzentrieren sich auf gängige Frames und Hardware. Für 5" Frames/Copter wirst du die größte Teileauswahl finden.

Wenn du darüber hinaus noch Inspiration suchst, lohnt sich ein Blick auf die Website [rotorbuild](https://rotorbuilds.com/). Dort veröffentlichen einige Piloten ihre Builds.

Beim Flight Controller verwenden wir etwas mit Betaflight.

Die Builds sind mit 6S-Akkus mit einer Kapazität von 1000-1300 mAh gedacht. Für 4 Stück davon kannst du nochmal etwa 100€ einplanen, je nach Marke.

Zudem ist bei der Preiskalkulation kein Ersatzmotor mit drin. Einen Ersatz-Motor solltest du dir schon mit bestellten.

Natürlich kannst du bei den Builds nach Belieben Teile tauschen, z.B. den Premium Frame mit den Budget-Motoren verwenden oder ein Premium-Build mit analoger statt digitaler Videoübertragung bauen.

#### Budget

Bei einem Budget-Build gehe ich davon aus, dass auch deine andere Ausrüstung eher in die Kategorie "Budget" fällt. Das heißt, du fliegt auf jeden Fall Analog.

Im schlimmsten Fall hast du auch noch ein Legacy-Funksystem wie FrSky. Frühere Versionen dieses Guides haben bei diesem Budget-Build ebenfalls noch auf ein Legacy-Funk-Protokoll gesetzt.

> *Anm. Teflon.Don*: Ja ne, FrSky sollte man echt keinem mehr antun.

Selbst wenn man sich ein gebrauchtes Modell mit einem Legacy-Funksystem kauft, sollte man sich schleunigst überlegen, ob man nicht in ein Upgrade auf ELRS investiert.

Kostenpunkt dieses Builds sind in etwa 220€.

- Frame: TBS Source One (ca. 30€)
- Motor: Emax Eco2 oder XingE (ca. 60€)
- ESC & FC: JHEMCU F405 Stack (ca. 75€)
- Receiver: ELRS (ca. 15€)
- Videosender: HappyModel OVX300 (ca. 15€)
- Kamera: Caddx Ratel, Runcam Racer, Foxeer Racer (ca. 25€)

#### Mittelklasse

Ab der Mittelklasse gehe ich davon aus, dass du für den Videoempfang bereits ein digitales System hast. Entweder DJI oder HDZero. Siehe oben.

Kostenpunkt dieses Builds sind in etwa 350-400€.

- Frame: Diatone Roma F5 (ca. 50€)
- Motor: iFlight Xing2 (ca. 80€)
- ESC & FC: Diatone Mamba F405 Stack oder iFlight SucceX-E F4 (ca. 100€)
- Receiver: ELRS (ca. 15€)
- Videosystem: passend zum Videoempfänger (ca. 110-140€)

#### Premium

> *Anm. rumpelst1lzk1n*: inb4: Aus dem Weg, Geringverdiener.

Du willst also gleich zu Anfang ein Premium-Build haben? Überleg dir das gut. Gerade zu Anfang wirst du viel Crashen. Das kann teuer werden. Und als Anfänger wirst du wahrscheindlich keinen Unterschied zwischen Budget- und Premium-Motoren feststellen. Bau dir lieber 2 mal ein 300€ Quad als einmal ein 600€ Quad.

> *Anm. Puffi*: Teuer ist erst gut, wenn man lang genug fliegt um Unterschiede erkennen zu können.

Kostenpunkt dieses Builds sind in etwa 500-600€.

- Frame: ImpulseRC Apex 5 (ca. 100€)
- Motor: ETHIX Mr Steele Stout (110-120€)
- ESC & FC: Diatone Mamba F722 App Stack oder iFlight SucceX-D F7 (ca. 130€)
- Receiver: ELRS, Tracer oder Crossfire (ca. 15-35€)
- Videosystem: passend zum Videoempfänger (ca. 110-180€)

### Tune

Nach dem Zusammenbauen des Copters solltest du auch noch in Betaflight das Flugverhalten einstellen. Das kann man auf die Spitze treiben, für die ersten paar Monate im Hobby reicht aber ein Standard-Tune. Links zu unterschiedlichen Quellen für Tunes findest du in der [Linkliste](#linkliste).

> *Anm. Puffi*: Gutes Tuning wird erst wichtig wenn du gut fliegen kannst.

## Build on Demand

Neben dem Kaufen und selbst bauen gibt es noch die Möglichkeit, dass du dir einen Copter nach Wunsch bauen lässt. Entweder von einem Kumpel, der schon im Hobby drin ist, von einem kommerziellen Dienstleister, oder von jemandem, der diesen Dienst hobbymäßig im Netz anbietet.

Bei jemandem, den du für den Zusammenbau bezahlst, kannst du mit ca. 200€ für diese Dienstleistung rechnen. Mehr oder weniger. Das ist abhängig davon, was er sonst noch so alles am Copter macht, ob z.B. die Elektronik bereits getuned sein soll.

Bei einem Kumpel ist *mindestens* ein Kasten Bier fällig.
