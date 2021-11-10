# Einsteigerguide FPV (Ende 2021)

**WORK IN PROGRESS!!!**

<!-- TOC -->

- [Einleitung](#einleitung)
- [SUPER-SHORT-CUT-FÜR-MEGA-UNGEDULDIGE](#super-short-cut-für-mega-ungeduldige)
- [Einkaufen](#einkaufen)
  - [Chinashops](#chinashops)
  - [Europäische Shops](#europäische-shops)
  - [Ebay Kleinanzeigen](#ebay-kleinanzeigen)
- [Fernbedienung](#fernbedienung)
  - [Formfaktor](#formfaktor)
  - [Funkprotokoll](#funkprotokoll)
  - [OpenTX](#opentx)
  - [Empfehlungen (Funke)](#empfehlungen-funke)
- [Simulatoren](#simulatoren)
- [Videosystem](#videosystem)
  - [Allgemein](#allgemein)
  - [Analog](#analog)
  - [DJI](#dji)
  - [SharkByte](#sharkbyte)
  - [OpenHD](#openhd)
  - [HD Aufnahmen](#hd-aufnahmen)
- [Flugmodi](#flugmodi)
  - [Cinematic](#cinematic)
  - [Race](#race)
  - [Freestyle](#freestyle)
  - [Longrange](#longrange)
- [Drohne / Quad / Copter](#drohne--quad--copter)
  - [Klassen](#klassen)
  - [Komponenten](#komponenten)
- [Software](#software)
- [Akkus](#akkus)
  - [Sicherheit](#sicherheit)
  - [Ladegeräte](#ladegeräte)
  - [Spannung](#spannung)
- [Drohne Teil 2](#drohne-teil-2)
  - [Fertige Drohne kaufen](#fertige-drohne-kaufen)
  - [Eigenbau](#eigenbau)
  - [Build on Demand](#build-on-demand)
- [Zusatzausrüstung](#zusatzausrüstung)
  - [Löten](#löten)
  - [Drohnenrucksack](#drohnenrucksack)
- [Rechtliches](#rechtliches)
  - [Führerscheine](#führerscheine)
  - [Vereine](#vereine)
- [3D-Druck](#3d-druck)
- [Jenseits der Drohne](#jenseits-der-drohne)
- [Glossar](#glossar)
- [Linkliste](#linkliste)
  - [Youtube-Channel](#youtube-channel)
  - [Websites](#websites)
  - [Discord Server](#discord-server)

<!-- /TOC -->

## Einleitung

Dieser Guide soll einen umfangreichen Einblick in das Thema "FPV-Drohnen" vermitteln und hat den Anspruch, die meisten *allgemeinen* Fragen zu beantworten über die ein Neueinsteiger stolpern könnte.

Vorweg: Das Hobby kann teuer sein. Plane mit mindestens 500€ für einen absoluten Einsteiger-Setup oder 1000-1500€ für ein gutes Setup.

Das Dokument hat eine ziemliche Länge, daher hat der liebe remove_me das in seiner unnachahmlichen Art kurz gefasst.

## SUPER-SHORT-CUT-FÜR-MEGA-UNGEDULDIGE

- **Schritt 1**: Kaufe eine Funke (TX16s oder Jumper T-Lite).
- **Schritt 2**: Kaufe einen Simulator (Steam: Liftoff oder Velocidrone).
- **Schritt 3**: übe übe übe - stundenlang und informiere dich nebenher langsam weiter.
- **Schritt 3.1**: Lies den Rest in diesem Dokument. Kläre Fragen und werde schlauer.
- **Schritt 4**: Kaufe weitere Hardware, entweder einen Fertig-Copter (BNF) oder aber Einzelteile.
- **Schritt 4.1**: Ein Ladegerät (ISDT 608AC oder Hota D6 Pro).
- **Schritt 4.2**: Passende Akkus für die Drohne (4 Stück sollten es schon sein).
- **Schritt 5**: übe übe übe - bis alles da ist.
- **Schritt 6**: rausgehen - fliegen.

## Einkaufen

In dem Abschnitt gehe ich kurz darauf ein, wie du überhaupt an Drohnen und Zubehör kommst.

### Chinashops

Hardware rund um Drohnen wird fast ausschließlich in China gefertigt.

Am günstigsten kommt man an die Produkte, wenn man auch direkt dort einkauft.

Vorteil beim Einkaufen in China: Günstiger.
Nachteil: Du wartest 10-30 Tage bis die Sachen da sind.

Es gibt auch Express-Versand, da sind die Sachen dann in ~5 Tagen da, aber der kostet mehr.
Und es bleibt öfter im Zoll hängen. Dann kannst du auch gleich in Deutschland kaufen.

#### Banggood und Aliexpress

Bekannte Shops sind [Banggood](https://www.banggood.com/) und [Aliexpress](https://de.aliexpress.com/).

[Banggood](https://www.banggood.com/) ist eher mit Amazon zu vergleichen. Versand und Support liegt beides bei Banggood und zumindest in den letzten Jahren leistet sich Banggood auch einen ganz ordentlichen Support. Zudem unterhält es kleinere Lagerhäuser in Europa über die vereinzelte Produkte schneller geliefert werden können.

[Aliexpress](https://de.aliexpress.com/) ist vergleichbar mit Ebay - eine Handelsplattform.
Unterschiedliche Händler übernehmen unabhängig von Aliexpress den Versand und Support für die Produkte. Hit or miss, man kann auch daneben greifen und einen Händler mit unterirdischem Support erwischen. Dafür kann man auch günstiger weg kommen als bei Banggood.

Beide Shops führen Einfuhrumsatzsteuer und Zoll direkt ab. Oder schlagen sie drauf und umgehen den Zoll auf irgendwelchen Wegen.

> *Anm. remove_me*: Du magst Glücksspiel und hast kein Problem mit Wartezeiten? Banggood it is!

#### Direktvertrieb

Bekannte FPV-Marken wie [Diatone](https://www.diatone.us/), [iFlight](https://iflight-rc.com) etc. haben auch ihre eigenen Shops.

Manchmal kommt man auch da bei Rabattaktionen günstig an Hardware.

Anders als Banggood und Aliexpress führen diese Shops Einfuhrumsatzsteuer und Zoll nicht direkt ab. Du musst hier also nochmal ~20% auf die Bestellung drauf rechnen und es kann ein Gang zum nächsten Zollamt oder zur Poststelle notwendig sein. Manchmal hat man aber auch Glück.

### Europäische Shops

Eine Liste innereuropäischer FPV-Shops findest du [hier](https://fpvmarket.eu/european-fpv-stores/).

Die großen einschlägigen deutschen Shops über die du immer wieder stolperst sind:

- [n-factory.de](https://n-factory.de/)
- [shop.rc-hangar15.de](https://shop.rc-hangar15.de/)
- [rctech.de](https://www.rctech.de/)
- [fpv24.com](https://www.fpv24.com/de/)
- ...

### Ebay Kleinanzeigen

Hier lohnt es die Augen offen zu halten.
Es gibt immer wieder Schnäppchen z.B. bei aufgelösten Sammlungen.
Gerade wenn es auf den Winter zu geht, verkaufen die Schönwetterflieger ihre Sachen.

Wenn du mit dem Guide durch bist, kannst du viele Sachen auch ganz gut einschätzen.
Meist braucht man für gute Käufe etwas Erfahrung...
Gerne kannst du auch Rückfragen dazu im [pr0 Discord](https://discord.gg/uBh3QsnqF5) stellen.

## Fernbedienung

Du willst fliegen? **Nein**, willst du nicht.

Du willst erstmal im Simulator üben. Wenn du ein Gamepad daheim hast, kannst du direkt dir auf Steam einen der vielen Simulatoren holen. Ein Gamepad ist besser als nichts, aber eigentlich willst du eine echte Funkfernbedienung. Diese verhält sich von den Sticks deutlich anders als ein Gamepad. Moderne Funkfernbedienungen kannst du an deinen Rechner anschließen und dort als Controller verwenden.

Für diesen Abschnitt kannst du zwischen 90 und 250€ einplanen. Eine Funkfernbedienung ist eine idR einmalige Anschaffung, die dich sehr lange begleiten wird.

> *Anm. remove_me*: **GLAUB ALLEN! ERST SIMULATOR! DANN DROHNE!!**

### Formfaktor

Als vorherschende Formfaktoren bei Fernbedienungen gibt es Gamepad und Vollformat. Gamepad sollte bekannt sein. Vollformat sind viereckige Kästen!

Nachfolgend 2 populäre Vertreter beider Formfaktoren.

| Vollformat | Gamepad |
| -------- | -------- |
| <img src="https://cdn-global-hk.hobbyking.com/media/catalog/product/cache/3/image/660x415/17f82f742ffe127f42dca9de82fb58b1/t/x/tx16s_hall-1.jpg" alt="Radiomaster TX16S" width="300"/> | <img src="https://www.team-blacksheep.com/img/gallery/A7300949.JPG" alt="TBS Tango 2" width="300"/> |

### Funkprotokoll

Neben dem Formfaktor ist auch noch die Frage nach dem Funkprotokoll. Sender und Empfänger müssen die gleiche Sprache sprechen. Üblicherweise entscheidet man sich für einen Sender, der das gewünschte Protokoll unterstützt und packt dann dazu passende Empfänger in die Drohne.

Funkprotokolle verwenden die Frequenzen 2.4Ghz und 900Mhz.

900Mhz hat eine höhere Reichweite/bessere Penetration, wenn du hinter Bäumen oder in Gebäuden fliegst. 2.4Ghz erlaubt mehr Piloten gleichzeitig in der Luft und hat eine höhere Update-Rate, heißt, deine Eingaben werden häufiger zur Drohne geschickt.

Falls du ein nicht von deiner Funke abgedecktes Protokoll fliegen willst, kannst du dieses mit Modulen nachrüsten. Die beiden Formfaktoren nutzen unterschiedliche Modulgrößen, "JR" bei Vollformat, "Lite" bei Gamepad.

Zudem unterscheide ich bei den Funkprotokollen zwischen Legacy und Modern.

#### Legacy

Diese Protokolle sind irrelevant.
FrSky, Graupner und wie sie alle heißen. Ihnen gemein ist, dass sie eigentlich alle mit einem Multi-Protokoll-Modul abgedeckt werden. Vergiss sie. Wenn du welche hast, verkaufe sie.

Wenn du unbedingt eine Drohne fliegen willst, die einen Empfänger mit einem dieser Protokolle verwendet, ist ein Multi-Protokoll-Modul der richtige Weg.

#### Modern

Bei den modernen Übertragungsprotokollen ist die Frequenz nahezu irrelevant. Außer um wirklich die letzten Prozent beim Racen raus zu kitzeln, wirst du die höhere Übertragungsfrequenz bei 2.4 Ghz nicht spüren. Ähnlich verhält es sich bei der höheren Reichweite von 900Mhz. Beide Frequenzen gehen mit den modernen Protokollen weiter als deine Videoverbindung.

- TBS Crossfire (900Mhz)
- TBS Tracer (2.4Ghz)
- ELRS (900Mhz und 2.4Ghz)
- ImmersionRC Ghost (2.4Ghz)

TBS Crossfire ist das älteste und erwachsenste der 4 Systeme. Lange Zeit das einzige ernstzunehmende Protokoll, mit dem man auch fertige Drohnen bekommen hat. Die TBS Tango 2 hat Crossfire bereits eingebaut. Es gibt kombinierte Empfänger/(analoge) Videosender, die eine kompfortable Steuerung des Videosenders über Crossfire erlauben. TBS stellt auch analoge Videosender und Empfänger her. Wenn man sich darauf einlässt, bietet es eine umfangreiche Integration. Für das System wirst du online umfangreiche Hilfestellungen finden.

TBS Tracer ist wie Crossfire nur auf 2.4Ghz. Die TBS Mambo hat Tracer bereits eingebaut. Alles andere funktioniert wie bei Crossfire.

ELRS ist OpenSource und wird von unterschiedlichen Herstellern angeboten.
Es gibt Sender/Empfänger für 2.4Ghz und 900Mhz. Sender und Empfänger müssen zusammen passen, sie können von unterschiedlichen Herstellern kommen, müssen aber die gleiche Frequenz nutzen. Das System ist noch relativ jung, aber es springen zunehmend Hersteller auf den Zug auf. Es gibt inzwischen auch vereinzelt Drohnen fertig damit zu kaufen. Das günstigste der 4 Systeme.

Ghost bietet eine ähnliche Kombination aus Funkempfänger und Videosender wie Crossfire und Tracer. Ist in meiner Warnehmung nicht so weit verbreitet, entsprechend kann man bei Problemen etwas weniger auf Hilfestellung aus der Community zählen.

### OpenTX

OpenTX ist ein Betriebssystem für Funkfernbedienungen. Alle hier genannten Funkfernsteuerungen verwenden entweder OpenTX oder ein Derivat davon, z.B. FreedomTX oder EdgeTX.

Funken ohne OpenTX (oder Derivat) sind irrelevant.

### Empfehlungen (Funke)

Bei den genannten Funken ist das Display nachrangig.
Wir fliegen FPV (First-Person-View) und bekommen die relevanten Flugdaten in der Brille angezeigt. Ein großes Display wie bei der TX16S ist zwar schön, wenn man etwas umfangreicher konfigurieren will, aber man kann die Funken auch über den Rechner ganz ohne Display konfigurieren.

#### Radiomaster TX16S

- ca. 200€
- Vollformat
- eingebautes Multi-Protokoll-Modul
- OpenTX oder EdgeTX
- großer farbiger Touchscreen, Touch wird nur in EdgeTX unterstützt

#### Radiomater TX12

- ca. 90€
- etwas kleiner als Vollformat
- eingebautes Multi-Protokoll-Modul
- OpenTX oder EdgeTX
- Monochrom-Display

#### Jumper T-Lite

- ca. 90€
- Gamepad
- eingebautes Multi-Protokoll-Modul
- winziges Monochrom-Display

#### TBS Tango 2

- ca. 160-200€
- Gamepad
- eingebautes Crossfire
- ständig ausverkauft
- winziges Monochrom-Display
- Multi-Protokoll-Modul muss nach gekauft werden

#### TBS Mambo

- ca. 150€
- etwas kleiner als Vollformat
- eingebautes Tracer
- kleines Monochrom-Display

## Simulatoren

Für den Einstieg erfüllt jeder Simulator den Zweck dass du dich mit der Steuerung einer Drohne vertraut machst. Und die Drohne gegen Bäume, Häuser und in den Asphalt hämmern kannst, ohne gleich Geld in die Reparatur stecken zu müssen.

Und falls du feststellst, dass das Hobby überhaupt nichts für dich ist, hast du nur Geld für die Fernbedienung ausgegeben. Diese kannst du normalerweise ohne großen Verlust auf eBay-Kleinanzeigen oder in einschlägigen Facebook-Gruppen verkaufen.

Hier eine Liste populärer Simulatoren (ohne Wertung):

- [Orqa FPV.SkyDive (Steam, kostenlos)](https://store.steampowered.com/app/1278060/Orqa_FPVSkyDive/)
- [Velocidrone (NICHT auf Steam erhältlich, Quasi-Standard für Racer)](https://www.velocidrone.com/)
- [Liftoff (Steam, std. für alles andere)](https://store.steampowered.com/app/410340/Liftoff_FPV_Drone_Racing/)
- [DRL (Steam)](https://store.steampowered.com/app/641780/The_Drone_Racing_League_Simulator/)
- [Uncrashed (Steam)](https://store.steampowered.com/app/1682970/Uncrashed__FPV_Drone_Simulator/)
- [AI Drone Simulator (Steam)](https://store.steampowered.com/app/1608560/AI_Drone_Simulator/)

## Videosystem

Für die Auswahl einer Videobrille muss man sich bewusst machen, welche Systeme es gibt.

Die Auswahl des Videosystems bestimmt die Auswahl der FPV-Brille und der Videosender. Gerade die Brille ist mit der größte Kostenfaktor beim Einstieg. Für diesen Abschnitt kannst du zwischen 110€ für einen ganz rudimentären und 800€ für einen Premium-Setup einplanen.

### Allgemein

FPV unterscheidet sich von klassischem Modellbau-Flug dadurch, dass du von deinem Fluggerät das Live-Videobild an einen Empfänger überträgst und somit eine Art Pilotenansicht hast. Die Wiedergabe kann dabei auf einem Monitor oder einer Videobrille erfolgen. Wir konzentrieren uns im nachfolgenden auf den Empfang mittels Videobrille.

In der Videobrille hast du normalerweise einen Empfänger, entweder fest verbaut oder als Modul. Zudem hast du in der Brille die Möglichkeit, das angezeigte Bild auf SD-Karte aufzunehmen. Stichwort `DVR`. **NUTZE ES!** Die Bildqualität eignet sich eher nicht zum Angeben auf Youtube. Aber wenn du deine Drohne irgendwo auf weiter Flur verloren hast, wirst du die Möglichkeit zu schätzen wissen, dass du den Flug rekonstruieren kannst und weißt, wo das Gerät abgestürzt ist.

#### Frequenz und Kanal

Die Videosender der nachfolgenden Systeme arbeiten alle auf 5.8Ghz. Auf diesem Frequenzband funkt auch haushaltsübliches WLAN. Wenn du in der Nähe eines WLAN-Access-Punkts fliegst kann es sein, dass dieser dein Videosignal stört.

Je nach Funksystem gibt es mehrere Kanäle (Channel). Sender und Empfänger müssen auf den gleichen Kanal eingestellt sein. Die Kanäle sind in Gruppen eingeteilt. Die Kanäle der gleichen Gruppe können üblicherweise parallel verwendet werden, ohne dass sich diese zu stark negativ beeinträchtigen.

Wenn du vermutest, dass dein Videosignal von WLAN gestört wird, kann es sich lohnen den Kanal zu wechseln.

"R" (Raceband) ist die beliebteste Kanal-Gruppe für den Flug mit mehreren anderen Piloten. Wenn du zusammen mit anderen Piloten fliegst, solltet ihr vorab ausmachen, wer welchen Kanal verwendet und das auch **vor** dem Abheben verifizieren.

Beim anschalten des Videosenders kann dieser auch auf anderen als den ausgewählten Frequenzen senden. Vermeide es daher, deinen Videosender in unmittelbarer Nähe von anderen Piloten einzuschalten.

![FPV Channel Übersicht](https://oscarliang.com/ctt/uploads/2021/03/5.8ghz-fpv-channels-chart-diagram-frequency-analog-digital-dji-sharkbyte-05-21.jpg)

Nicht alle einstellbaren Frequenzen sind in Europa legal. Welche legal geflogen werden dürfen, kannst der Grafik oben entnehmen.

#### Sendeleistung

Die Sendeleistung wird üblicherweise in Milliwatt (mw) angegeben.

In Europa beträgt die maximal zulässige Sendeleistung 25mw. Es gibt auch Videosender, die ein vielfaches davon unterstützen, die meisten erhältlichen Sender unterstützen bis zu 200, 400, 600 oder 1000mw. Mehr Leistung heißt mehr Reichweite und besseres Bild auf größere Distanz. Um die Reichweite zu verdoppeln, musst du die Leistung vervierfachen.

Die Sendeleistung lässt herunter regeln, meistens erfolgt das über die Steuersoftware der Drohne.

Es obliegt dem Piloten, die gesetzlich vorgeschriebene Leistung einzuhalten.

> *Anm. rumpelst1lzk1n*: Sind wir mal ehrlich: Die wenigsten halten sich daran, insbesondere dann, wenn sie alleine unterwegs sind.

Je höher die Sendeleistung, desto höher strahlst du auch in benachbarte Frequenzen. Bei FPV-Rennen wird daher üblicherweise 25mw vorgeschrieben, damit sich die Piloten nicht gegenseitig beeinträchtigen. Daran hält man sich auch!

Betreibe den Videosender **NIEMALS** ohne Antenne. Andernfalls kann die Energie aus dem Sender nicht in Funkwellen umgesetzt werden und der Sender stirbt den Hitzetod. Bleibende Schäden an der Hardware bis hin zum vollständigen Defekt nicht ausgeschlossen.

#### Antennen

Bei Antennen unterscheidet man zwischen 3 Typen:

- Dipol
- RHCP
- LHCP

Wenn du auf einer Seite (z.B. des Senders) einen Dipol verwendest, ist es relativ egal, was du auf der anderen Seite (z.B. des Empfängers) hast.

Verwendest du `RHCP` oder `LHCP`, so solltest du aufpassen, dass dies sowohl auf Sende- wie auch auf Empfangsseite der Fall ist.

Zudem unterscheidet man zwischen gerichteten und ungerichteten Antennen.

Für den Einstieg sind auf Brille und Drohne ungerichtete Antennen vom Typ "Lollipop", "Stubby" oder "Pagoda" zu bevorzugen.

Bei sehr kleinen und leichten Drohnen (TinyWhoops, siehe unten) kann aus Gewichtsgründen auch ein Dipol Sinn machen.

| dipol | lollipop | stubby | pagoda |
|----- | -------- | -------- | -------- |
| ![dipol](https://cdn.shopify.com/s/files/1/1285/4651/products/rdq-ufl-dipole-1_1800x1800.jpg?v=1626819202) |![lollipop](https://inew.foxeer.com//upload/s/goods/201904/1555920368858975547.images.800x800.jpg) | ![Stubby](https://inew.foxeer.com//upload/s/goods/201904/1556076590073295056.images.800x800.jpg) | ![Pagoda](https://inew.foxeer.com//upload/s/goods/201711/1511447592626441098.images.800x800.jpg) |

Eine gute Antenne kann mehr zu einem stabilen Bild beitragen, als einfach die Leistung des Senders zu erhöhen.

### Analog

Bis vor 2 Jahren die einzige Möglichkeit für FPV. Es gibt dutzende verschiedene Kameras, Videosender und Brillen von mehreren Herstellern. Alles untereinander kompatibel.

Die mit großem Abstand günstigste Möglichkeit, in FPV einzusteigen. Wenn dein Budget auf die oben erwähnten 500€ beschränkt ist, ist das hier deine Kategorie.

Brille 80€, Videosender 10€, Kamera 15€ wäre so ein Minimal-Setup.

#### Videosender

Es gibt eine Vielzahl unterschiedlicher Videosendern von unterschiedlichen Herstellern.

Üblich sind zwischen 200mw und 600mw maximaler Sendeleistung.
Es gibt noch deutlich stärkere Sender bis hoch zu 2000mw, diese sind aber erst für wirklich große Distanzen relevant.

Der Vorteil bei analogen Systemen ist, dass du die unterschiedlichen Videosender leicht gegeneinander austauschen kannst.

Besonders hervorzuheben sind die Videosender der Unify-Reihe von TBS und die ImmersionRC Tramp. Sie gelten mit als die Besten.

Für den Anfang tut es eigentlich jeder, aber spätestens wenn du mit anderen fliegst, willst du einen halbwegs guten. Manche No-Name-VTX haben ein sehr "unsauberes" Signal und streiem auch über den eigentlich eingestellten Kanal hinaus in andere Frequenzen. Wenn das Budget wirklich knapp ist und du den billigsten VTX willst, achte zumindest darauf, dass dieser mit [OpenVTX](https://github.com/OpenVTx/OpenVTx) als Firmware beworben wird.

#### Brille

Bei den Analog-Brillen gibt es die größte Varianz in Sachen Preis. Es gibt Brillen für ~40€ und für 600€.

Man unterscheidet bei den Brillen zwischen Box- und Binocular-Style.

| Box | Binocular |
| -------- | -------- |
| <img src="https://img.eachine.com//eachine/products/original/201710/1508810670_22.JPG" alt="Binocular" width="300"/> | <img src="https://www.fatshark.com/wp-content/uploads/2019/10/HDO2%E4%B8%BB%E5%9B%BE-600x600.jpg" alt="Binocular" width="300"/> |

##### Box-Style

Box-Style ist einfach nur eine Box, die vor dem Gesicht hängt. Je nach Bauform mehr oder weniger unförmig. Die Box ein Display und ggf noch eine Linse.

Vorteile:

- günstiger
- leichter mit Brille nutzbar

In dieser Kategorie bekommst du ab ca ~80€ eine halbwegs taugliche Einsteigerbrille.

##### Binocular-Style

Beim Binocular-Style hast du ein Display pro Auge. Brillen in dieser Bauform sind deutlich kompakter aber auch deutlich teurer.

Eine Brille passt da eher selten drunter, dafür kannst du oft den Augenabstand und die Dioptrin in der Optik der Brille direkt einstellen.

Vorteile:

- kleiner/leichter
- Optik pro Auge anpassbar

In dieser Kategorie bekommst du ab ca ~350€ eine halbwegs taugliche Brille.  Lass dich nicht täuschen, es gibt günstigere Brillen im Binocular-Style. Die sind Müll.

##### Empfehlungen (Analog-Brillen)

Schau dich auf dem Gebrauchtmarkt um. Viele der unten genannten Modelle kriegst du auf eBay-Kleinanzeigen recht günstig gebraucht.

###### Eachine EV800D

Empfehlung des Hauses als absolute Einsteiger-Brille, für die es sich lohnt, Geld auszugeben.

- ca. 80€
- DVR
- Antennen-Diversity
- wird mit einer Patch und einer Omni-Antenne geliefert
- integriertes Receiver mit Diversity, was in dieser Preisklasse nicht selbstverständlich ist

###### Skyzone Cobra X (v2)

- ca. 250€
- gutes DVR (v2 hat 60FPS)
- gutes eingebautes Receiver-Modul
- HDMI-in

###### Fatshark Attitude V6

- ca 350-400€
- DVR
- integrierter Receiver
- HDMI-in

###### Fatshark Dominator HDO 2

- ca. 600€
- DVR
- **KEIN** Receiver
- HDMI-in
- OLED-Display (knackscharfe Farben)

Auf dem Gebrauchtmarkt gibt es öfter auch Pakete mit Receiver.

###### Skyzone Sky04X (v2)

- ca. 600€
- gutes DVR, 60FPS
- gutes eingebautes Receiver-Modul
- HDMI-in
- OLED-Display (knackscharfe Farben)

#### Empfänger

Manche Brillen kommen ohne Empfänger. Hier musst du den diesen über einen Modulschacht nachrüsten.

Falls du dich für so eine Brille entschieden hast, hier eine Liste populärer Empfänger:

- TBS Fusion (siehe Artikel zu TBS Crossfire/TBS Tracer)
- Rapidfire
- FuriousFPV Achilles

Ein Empfänger sollte ähnlich wie eine Brille mit eingebautem Modul mindestens über 2 Antennen verfügen. Damit kann sich der Empfänger das beste Signal heraus picken (`Diversity`). Fortgeschrittene Module wie TBS Fusion oder Rapidfire können das Signal beider Antennen kombinieren und ein optimales Bildsignal herausrechnen.

### DJI

DJI ist das Apple unter den FPV-Systemen. Funktioniert super, ist aber ein goldener Käfig. Kameras gibt es von 2 Herstellern. Es gibt 2 Brillen und 2 Videosender von DJI.

> *Anm. remove_me*: Das Bild ist dafür auch circa 10x geiler und kommt so in etwa bei 720p raus.

#### Brillen

Bei den Brillen unterscheidet man zwischen V1 und V2. V2 ist nur relevant, wenn du die DJI-FPV-Drohne fliegen willst. Sonst tut es V1 auch. Die DJI-FPV-Drohne ist eine glorifizierte Mavic-Drohne, die man besser nicht crasht. Wo du klassische FPV-Drohne gegen Bäume donnern und (falls überhaupt mal etwas kaputt geht) selbst reparieren kannst, ist die DJI-FPV-Drohne ein Plastikbomber, den du für teuer Geld zu DJI in die Reparatur schicken musst.

> *Anm. remove_me*: Scheiss auf die!

Für das FPV, auf das wir uns hier in diesem Guide konzentrieren ist es also egal, ob du die Brille v1 oder v2 kaufst.

| <img src="https://stormsend1.djicdn.com/tpc/uploads/photo/image/e36e694054678b94101837d14ea4fbb3@large.jpg" alt="DJI FPV Brille" width="500"/> |
| --- |
| DJI FPV Brille |

Das DVR der Brille kann man auch schon ganz gut zum herumzeigen verwenden.

#### Videosender

Als Videosender gibt es die AirUnit und die Vista Unit. Die AirUnit ist größer und schwerer, hat aber einen SD-Kartenslot, auf dem das Videomaterial zusätzlich zum DVR in der Brille aufgezeichnet werden kann. Leider funktioniert die Videoaufzeichnung auf der AirUnit so unzuverlässig, dass man es auch sein lassen kann. Die Vista Unit ist zu bevorzugen und passt auch leichter in die meisten Frames.

| AirUnit | Vista Unit |
| -------- | -------- |
| ![AirUnit](https://cdn.shopify.com/s/files/1/0036/3921/4169/products/DJIairunit1_2000x.jpg) | ![Vista Unit](https://cdn.shopify.com/s/files/1/0036/3921/4169/products/2_45ba11d1-79c7-441d-a81f-287561bb5f59_2000x.jpg) |

Der Videosenderkann auch gleichzeitig als Funkempfänger für eine DJI-Funkfernbedienung benutzt werden. Eigentlich willst du eine echte Funkfernsteuerung, siehe oben.

#### Kamera

Bei den verfügbaren Kameras gibt es vorrangig die Auswahl zwischen Kameras mit 60FPS und Kameras mit 120FPS. Du willst eine Kamera mit 120FPS.

- DJI Cam
- Caddx Vista Cam
- Caddx Nebula Pro

Alle andern Kameras sind irrelevant. Bestenfalls zählt die Caddx Polar noch als Notnagel.

### SharkByte

SharkByte ist ein weiteres digitales FPV-System, das im Gegensatz zu DJI noch keine so weite Verbreitung genießt.

>*Anm. rumpelst1lzk1n*: Das Bild ist gut aber die Hardware ist noch nicht so ausgereift/etabliert wie DJI. Persönlich würde ich einem Neueinsteiger aktuell noch davon abraten.

Anders als bei Analog und DJI gibt es zum gegenwärtigen Zeitpunkt keine fertigen Drohnen mit diesem System.

#### Videosender

Aktuell gibt es 4 Videosender in eher unüblichen Formfaktoren.

|Version| TX5M.1 (20x20) | TX5R.1 (20x20) | TX5S.1 (25x25) |
| --------| -------- | -------- | -------- |
|1| ![TX5M.1](https://www.fatshark.com/wp-content/uploads/2021/01/SharkByteTX5M.1VTX.jpg) | ![TX5R.1](https://www.fatshark.com/wp-content/uploads/2021/09/shark-byte-video-transmitter-tx5r1-fsv2480-02.jpg) | ![TX5S.1](https://www.fatshark.com/wp-content/uploads/2021/01/SharkByteTX5S.1VTX.jpg) |
|2| | ![HDZero Race v2 VTX](https://shop.rc-hangar15.de/media/image/product/9667/md/hdzero-race2-vtx-fuer-shark-byte-digital-hd-pre-order~3.jpg) | |

Richtig interessant wird das System, wenn Videosender in üblichen Formfaktoren mit mehr Sendeleistung erhältlich werden. Diese befinden sich aktuell in der Entwicklung.

#### Empfänger

Für Sharkbyte gibt es 2 Empfänger, die beide circa 250€ kosten.

Das eine ist eine Brille, die Fatshark Scout HD. Diese hat einen Sharkbyte-Empfänger fest verbaut. Obwohl sie einer analogen Brille ähnlich sieht, unterstützt ausschließlich SharkByte sie kein analoges Videosignal.

Daneben gibt es noch ein Empfänger-Modul. Dieser setzt eine vorhandene FPV-Brille **mit HDMI-Eingang** voraus.

| Scout HD | SharkByte Empfänger |
| -------- | -------- |
| ![Fatshark Scout HD](https://www.fatshark.com/wp-content/uploads/2019/06/DSC_0272-e1560242488189-scaled.jpg) | ![Shark Byte RX5.1](https://www.fatshark.com/wp-content/uploads/2021/01/SharkByteRX5.jpg) |

### OpenHD

[OpenHD](https://github.com/OpenHD/Open.HD) ist ein OpenSource-Projekt, in dem handelsübliche WLAN-Hardware zur Bildübertragung genutzt wird. Das Projekt wird aktiv weiter entwickelt. Für den FPV-Flug mit Drohne ist diese Art der Videoübertragung leider nicht zu gebrauchen, da die Latenz zu hoch ist.

### HD Aufnahmen

Wer wirklich gutes Bildmaterial von seinem Flug haben will, packt eine Action-Cam auf die Drohne.

Am verbreitetsten sind die unterschiedlichen Modelle der GoPro Hero-Reihe.

Andere populäre HD-Kameras sind:

- GoPro Session
- Insta360 Go(2)
- Runcam Orange

## Flugmodi

Bevor es um die tatsächliche Drohne geht, solltest du dir bewusst machen, was du damit überhaupt machen willst.

### Cinematic

Als Cinematic bezeichnet man allgemein einen entspannten Flugstil ohne große akrobatische Einlagen. Epische Flüge durch Berge, Verfolgungsjagden mit Autos, irgend was anderes kinoreif in Szene setzen.

Üblicherweise sind entsprechende Videos auf Youtube die Einstiegsdroge ins FPV-Hobby.

### Race

Mit FPV-Drohnen werden Rennen ausgetragen. Mehrere Piloten fliegen gegeneinander um die Wette durch einen Hindernisparcour. Dieser besteht oft aus Slaloms und Toren, die es in einer bestimmten Abfolge zu durchfliegen gilt.
Da sich die Drohne aber im dreidimensionalen Raum bewegen kann, findest du hier auch Hindernisse, die bei Rennen mit ergebundenen Fahrzeugen eher unüblich sind.

> *Anm. rumpelst1lzk1n*: Außer vielleicht das Rennen wird von Red Bull veranstaltet.

Tore, Flaggen und andere Hindernisse bestehen häufig aus buntem Zeltstoff und Zeltstangen oder Schwimmnudeln. Hauptsache gut erkennbar. Es gibt fertige Hindernisse zu kaufen, man kann aber auch vieles selbst bauen.

Zeltstangen und -Stoff bieten sich an, da diese auch Crashes mit einer Drohne überleben. Schwimmnudeln eignen sich ebenfalls zum Bauen von Hindernissen.

Es gibt ganze Ligen, die bekannteste ist die Drone Racing League.

Zum Üben werden die Strecken auch oft in Simulatoren (siehe oben) nachgebaut.

> *Anm. remove_me*: Liftoff zählt als Schwanzvergleich.

Die besten Racer sind so schnell unterwegs, dass es dem ungeübten Auge schwer fällt, überhaupt mit zu kommen.

### Freestyle

Fliegen um des Fliegens Willen. Du fliegst irgendwelche akrobatischen Kunststückchen, Loopings, durch Lost Places (Bandos).

Egal ob hektisch Saltos und Rollen aneinander gereiht werden oder du mit einem Affenzahn einem Looping durch eine enge Lücke fliegst. Es gibt mehrere Stilrichtungen des Freestyles.

| Stilrichtung | Merkmale |
| -------- | -------- |
| FlippyFloppy | Schnelle Richtungswechsel, viele Rollen und Überschläge |
| Flow | Sehr gleichmäßiger Flugstil, Tendenz zum Cinematic |
| Juicy | Sehr gleichmäßiger Flugstil mit kurzen, scharfen Manövern, die sanft ausklingen |
| Sbang | Scharfe Manöver, die häufig dazu führen, dass die zweite Hälfte des Tricks aussieht, als hätte man die erste Hälfte rückwärts abgespielt |

### Longrange

Fliegen um des Fliegens Willen Teil 2. Du willst weg. Weit weg. Kilometer weit weg. Und dabei noch ein ein- bis zweitausend Höhenmeter überwinden.

Das ist Longrange.

Wenn eine gute Kamera an Bord ist, entstehen dabei oft beeindruckende Landschaftsaufnahmen.

## Drohne / Quad / Copter

Hier geht es um unser liebstes unbemanntes Fluggerät. Es gibt viele Nahmen dafür, Drohne, Quad, Quadrocopter, Copter, ...

Häufig ist der Begriff "Drohne" bei nicht im Hobby involvierten Personen negativ besetzt. Dann fällt es oft leichter, wenn man von einem "Quad" oder einem "Copter" spricht.

### Klassen

In diesem Abschnitt geht es um gängige Bauformen von Drohnen.

#### TinyWhoop

Klein und leicht. Sehr leicht. Inklusive Akku 60-80 Gramm. Verfügt meistens über Propellerschutz. Wer denkt, es handelt sich um Spielzeug hat noch kein Whoop-Rennen gesehen.

Der Rahmen besteht üblicherweise aus Plastik (Spritzdruckguss) und hält schon einiges aus. Bruchstellen kann man kleben. Bestell aber besser trotzdem gleich einen Ersatzframe mit, wenn du dir einen TinyWhoop holst.

Ideal für Innen oder kleinere Gärten.

#### Cinewhoop

Eher behäbig. Für die verwendeten Propeller relativ große Motoren. Verfügt über einen Propellerschutz, der zudem oft mit Schaumstoff gepolstert ist.

Darauf ausgelegt, in der näheren Umgebung von Menschen geflogen zu werden und dabei eine Action-Cam zu tragen.

#### Toothpick

Für die Propellergröße relativ geringes Gewicht und eine filigrane Bauweise.

Die Propellergröße kann von 2.5" bis 5" reichen. Gerade die größeren sind weniger etwas zum harten Crashen. Aber super um einfach irgendwo entspannt durch die Natur zu gondeln.

#### 3 Zoll

Meistens ein Frame in klassischer Bauform. Der Name bezieht sich auf die Propellergröße.

Beim 3 Zoll Copter handelt es sich um den kleinen Bruder des 5 Zoll (siehe unten). Das Gewicht einer üblichen 3" Drohne liegt irgendwo zwischen 200 und 300 Gramm.

Deutlich unauffälliger als ein 5". Du hast einen größeren Garten oder willst im Park fliegen ohne den Leuten zu sehr Angst einzujagen? Dann bist du hier richtig. Unterschätze den kleinen aber nicht. Auf die kleinen Propeller können oberflächliche Fleischwunden verursachen.

#### 5 Zoll

**DER** Standard. Das Gewicht einer üblichen 5" Drohne liegt irgendwo zwischen 500 und 700 Gramm. Die Höchstgeschwindigkeit liegt bei circa 120km/h.

Entsprechende Vorsicht solltest du walten lassen. Die Propeller werden dir nicht gleich einen Finger absäbeln, aber sie werden es nachhaltig versuchen, wenn du dumm genug bist, in sie zu greifen. Schnittwunden und Prellungen inbegriffen.

90% der Videos, die du auf Youtube findest, entstanden mit einer 5" Drohne, da diese leicht eine GoPro tragen kann. Für diese Größe findest du die meisten Motoren, Propeller, etc.

#### 7 Zoll

Wenn 3" der kleine Bruder ist, so ist 7" der große Bruder. Hier wird die Teileauswahl merklich kleiner.

Unauffällig ist anders. Wenn so ein Gerät auf dich zu kommt, geh in Deckung. Und wenn du es steuerst, bleib verdammt nochmal weg von den Leuten.

Das Gerät erreicht höhere Geschwindigkeiten als ein 5" und tut sich bei Verfolgungsjagden mit Autos z.B. deutlich leichter, die mit zu halten.

Auch kann eine 7"-Drohne deutlich mehr Gewischt zusätzlich tragen wie z.B. ein schweres Akku-Pack um mehrere Kilometer weit auf Berge zu fliegen.

#### Cinelifter

Der große Bruder des Cinewhoop. Propeller mit 6-8" Durchmesser. Meistens 8 davon. Ja, 8 Stück.

Das Gerät trägt professionelle Filmkameras im Wert eines Kleinwagens.

#### X-Class

> *Anm. rumpelst1lzk1n*: Einer übertreibt immer...

Propellergröße zwischen 11 und 13 Zoll. Ähnlich wie Cinelifter definitiv nichts für Neueinsteiger ins Hobby.

### Komponenten

Wenn du deine Drohne reparieren, umbauen oder komplett selbst bauen möchtest, solltest du darüber Bescheid wissen, aus welchen Bauteilen diese überhaupt besteht.

#### Rahmen / Frame

Der Frame besteht aus in Epoxidharz eingelegten Karbonfaßern. Wie ein Tuningteil beim Auto, leicht aber trotzdem sehr stabil. Die Karbonfaßern kommen in Platten, aus denen die einzelnen Teile des Frames geschnitten werden.

Die meisten Frames bestehen aus 4 Armen, einer Top-Plate, einer Bottom-Plate und ggf. noch einem Gegenstück, welches die Arme gegen die Bottom-Plate fixiert. Dazu kommt noch eine Halterung für die Kamera, die entweder aus Karbon oder Kunststoff (meists TPU) gefertigt sind.
Top- und Bottom-Plate sind mittels Standoffs (kleine Stangen mit Innengewinde) verbunden.

| ![Source One](https://www.team-blacksheep.com/img/gallery/A7301673.JPG) |
| -------- |
| klassisches Frame-Design, TBS Source One |

Die Motoren werden an den Armen montiert. Im vorderen Teil des Hauptkörpers wird die Kamera montiert. Im mittleren und hinteren Teil des Frames findet die Elektronik platz. Dort sind je nach Frame Befestigungen in den Formaten 16x16, 20x20, 25x25 oder 30x30. Die Zahl bezieht sich jeweils auf den Lochabstand für die Schrauben, mit denen die Elektronik am Frame befestigt wird.

Der Akku wird abhängig vom Frame mit oben auf die Top-Plate oder unter die Bottom-Plate geschnallt.

Frames gibt es in allen möglichen Größen und Preisklassen.

Hier der Versuch, einige bekanntere Hersteller einzuordnen:

| Budget | Mittelklasse | Premium |
| -------- | -------- | -------- |
| TBS | iFlight | ImpulseRC |
| | Diatone | Armattan |
| | Flywoo | Lumenier |
| | GepRC | Ummagawd |

Die Liste erhebt bei weitem keinen Anspruch auf Vollständigkeit.

Alle oben genannten Hersteller fertigen **eigene** Designs. Insbesondere auf Banggood und Aliexpress gibt oft auch Klone der Premium-Hersteller in mehr oder weniger guter Qualität und mit mehr oder weniger gutem Support.

Bei einem Premium-Hersteller kann man erwarten, dass die Garantie auch Crashes abdeckt und man z.B. kostenlos Ersatzarme bekommt. Bei den Klonen kann es passieren, dass bei der Lieferung Teile fehlen.

Wenn du keine 50€ für einen Mittelklasse-5"-Frame übrig hast, hol dir einen "TBS Source One". Die Schnittmuster dieses Frames sind hochoffiziell OpenSource und frei erhältlich. Jeder kann (und darf) den Frame herstellen.

#### Flight Controller / FC

Der Flight Controller ist ein Mikrokontroller der die unterschiedlichen elektronischen Komponenten deiner Drohne zusammenbringt.

Das Gyroskop liefert die Lageinformationen, die Steuersoftware berechnet, wie schnell welcher Motor drehen muss, damit die Drohne in die von dir über die Fernsteuerung vorgegebene Fluglage kommt.

Die mit Abstand häufigste Steuersoftware ist Betaflight. Es gibt noch andere Software, der Themenkomplex hat aber weiter unten ein eigenes Kapitel.

Das Herzstück des FCs ist der Prozessor. Hier unterscheidet man zwischen F4, F7 und H7. Diese unterscheiden sich in Geschwindigkeit und verfügbaren Anschlüssen. Aktuell gibt es noch keinen wirklichen Grund, etwas anderes als F4 für eine Standard-Drohne zu verwenden.

Es gibt auch Flight Controller mit integriertem ESC, hier spricht man von einem "All in One" (AIO).

#### Empfänger / Receiver / RX

Das Gegenstück zu deiner Funkfernsteuerung (siehe oben). Nimmt die Steuersignale entgegen, wandelt dabei Funkwellen in elektrische Signale um und schickt diese an den Flight Controller.

#### Videosender / VTX

Das Gegenstück zu deiner FPV-Brille (siehe oben). Der Videosender ist üblicherweise an den Flight Controller mit angeschlossen. Dies ermöglicht es, dass Flugdaten (Akkukapazität, Flugmodus, GPS Koordinaten)

#### Motorsteuerung / Electronic Speed Controller / ESC

Die Motorsteuerung erfolgt über den ESC. Er ist zudem die zentrale Stromversorgung der Drohne, der Akku hängt direkt am ESC.

Bis vor einigen Jahren war diese Komponente noch aufgeteilt in einen Chip für die Stromverteilung (Power Distribution Board, PDB) sowie 4 einzelne ESCs pro Motor.

Heutzutage besteht der ESC üblicherweise nur noch aus einem Chip (All In One ESC, AIO-ESC).

Als Firmware kommt auf der Motorsteuerung meistens BLHeli_S oder BLHeli_32 zum Einsatz. BLHeli_32 gilt als höherwertiger. BLHeli_S hat in 2020 und 2021 aber einige Updates bekommen, die diese Firmware nahezu gleichwertig zu BLHeli_32 machen.

Die Motorsteuerung gibt die Drehrichtung der Motoren vor. Die 2 jeweils diagonal gelegenen Motoren sollten sich in die gleiche Richtung drehen. Dabei unterscheidet man zwischen "props in" und "props out".

| props in | props out |
| -------- | -------- |
| ![props in](https://raw.githubusercontent.com/betaflight/betaflight-configurator/master/resources/motor_order/quad_x_1234.svg) | ![props out](https://raw.githubusercontent.com/betaflight/betaflight-configurator/master/resources/motor_order/quad_x_1234_reversed.svg) |

Welche der beiden Varianten besser ist, darüber scheiden sich die Geister.

#### Motoren

Der Antrieb unseres Copters. Hier gibt es einige Zahlen, die kennen sollte.

##### Motor-Größe

1408, 2204, 2206, alle diese Zahlen bezeichnen Motoren in unterschiedlicher Größe. Die ersten beiden Zahlen geben den Durchmesser, die zweiten zwei Zahlen die höhe des Motors an. Es gibt auch Exoten, die mit Komma-Werten arbeiten. Motoren, denen namenhafte Piloten ihren Stempel verleihen, kommen manchmal auch ganz ohne Größenangabe aus.

Durch die unterschiedliche Größe ergeben sich unterschiedliche Laufeigenschaften. Flache, breite Motoren bleiben kühler, sind aber träger im Beschleunigen und Abbremsen. Hohe schmale Motoren werden wärmer, reagieren aber schneller. Die Leistungsfähigkeit eines Motors ergibt sich aus seinem Volumen. Ein hoher schmaler Motor kann die gleiche Leistung bringen, wie ein flacher breiter oder ein Motor, der sich irgendwo in der Mitte dazwischen befindet.

Die Motor-Größe wird üblicherweise an der größe der Propeller fest gemacht. Für 5"-Drohnen haben sich die Größen 2207 und 2306 etabliert.

##### KV

Mit KV sind die Umdrehungen pro Minute gemeint, die ein Motor pro Volt Akkuspannung ohne Last (also ohne Proeller) erreichen kann. Ein 10 KV-Motor erreicht mit 10 Volt Spannung 100 Umdrehungen pro Minute. Entsprechend gibt es Motoren, die für eine höhere oder niedrigere Akkuspannung ausgelegt sind.

Für 5"-Drohnen haben sich Werte zwischen 1700 und 2500 KV für Akkus mit 14,8 bis 22,4 Volt etabliert. Die Motoren haben in ihren Beschreibungen häufig auch, für wie viele Akkuzellen sie ausgelegt sind. Dazu später mehr.

Die KV werden über Anzahlen an Wicklungen um den Stator erreicht. Häufig wirst du die äußerlich identischen Motoren finden, die mit einer unterschließlichen Anzahl an KV angeboten werden.

Technisch betrachtet ist die Einheit "KV" genau anders herum zu betrachten, wie es im Drohnenbereich üblich ist.
Ein Elektromotor, den du von Hand drehst, wirkt wie ein Generator und erzeugt Strom. KV bezeichnet die Anzahl der Umdrehungen pro Minute, ab welcher der Motor 1 Volt Spannung ausgibt.

##### Stator und Magneten

![Motor Aufbau](https://oscarliang.com/ctt/uploads/2017/12/mini-quad-brushless-motor-anatomy-bell-magnet-bearing-stator-winding-shaft-diagram.jpg)

#### Propeller

Die Propeller sind mit das markanteste Merkmal einer Drohne. Ihre Größe wird in angloamerkikanischen Zoll (1" = 2,54 cm) angegeben, wobei damit der Durchmesser bezeichnet wird.

Die Propellergröße ist für viele Piloten der einfachste Anhaltspunkt, wie groß die Drohne ist, über die gesprochen wird.

##### Kennzahlen

Neben dem Durchmesser sind die Anzahl der Propellerblätter sowie deren Steigung die Kennzahlen für einen Probeller.

Die Anzahl der Blätter eines Motors ist offensichtlich. 2-Blatt gelten als besonders effizient, 3 Blatt sind der Standard als Kompromiss aus Effizienz und Leistung. Propeller mit mehr Blättern findet man meistens bei CineWhoops, da diese eine größere Laufruhe versprechen.

Durchmesser und Steigung (Pitch) sind weniger offensichtlich. Ähnlich wie der Durchmesser und die Höhe bei Motoren, wird dies meistens in einer kombinierten Zahl angegeben. Wie bei Motoren geben die ersten beiden Zahlen den Durchmesser des Propellers an, die zweiten 2 Zahlen die Steigung. Ein 5045-Propeller hat demnach 5 Zoll Durchmesser und 45 Grad Steigung. Eine höhere Steigung des führt bei Drehung des Propellers zu mehr bewegter Luft und damit zu einer höheren Geschwindigkeit. Allerdings auch zu einer größeren Leistungsaufnahme des Motors, der den Propeller bewegen muss.

##### Drehrichtung

Ein Propellerset besteht normalerweise aus 4 Propellern. 2 davon sind für die Drehung im Uhrzeigersinn (CW, clockwise), 2 für die Drehung gegen den Uhrzeigersind (CCW, counter clockwise).

Die Propeller müssen auf der Drohne so montiert sein, dass sich die 2 Diagonal befindlichen in die gleiche Richtung drehen. Siehe dazu die Grafik im Abschnitt `Motorsteuerung / Electronic Speed Controller / ESC`.

#### sonstige Komponenten

##### XT30 / XT60 / XT90

Der am weitesten verbreitete Anschlusstyp für Drohnen-Akkus. Es gibt ihn in 3 Größen. Die Zahl im Namen gibt zudem die Stromstärke (in Ampere) an, für die der Anschluss spezifiziert wurde.

Es handelt sich dabei um den Wert für die dauerhafte Belastung. Die kurzzeitige Spitzenbelastung beträgt leicht das doppelte.

Da wir beim FPV-Flug eher kurze Spitzenlast haben, musst du dir keine Sorgen machen, wenn dir deine Drohne anzeigt, dass sie gerade 120 Ampere über einen XT60 zieht.

##### Kondensator

Es wir empfohlen, einen Kondensator mit an die Batterie-Pads des ESC zu löten. Dieser gleicht Schwankungen bei der Spannungsversorgung aus und sorgt für ein saubereres Bild.

##### GPS

GPS ist für den Anfang als optional zu betrachten. Es ermöglicht abhängig von der Flugsteuersoftware z.B. die automatische Rückkehr der Drohne zum Startpunkt.

##### Heckspoiler

Vielleicht gerätst du in die Verlockung, optische Anbauteile an der Drohne zu befestigen, wie z.B. einen Heckspoiler. Das Bauteil bringt unnötigen Luftwiderstand und Vibrationen und beeinflusst das Flugverhalten entsprechend negativ. **LASS ES SEIN!** Außer du machst es for the lulz.

## Software

## Akkus

Akkus unterscheidet man nach Anzahl der Zellen sowie nach ihrer Kapazität.

### Sicherheit

### Ladegeräte

### Spannung

## Drohne Teil 2

In diesem Abschnitt geht es darum, tatsächlich eine Drohne zu kaufen oder zu bauen. Jetzt gehts ans eingemachte.

### Fertige Drohne kaufen

Wenn du eine fertige Drohne kaufst, sparst du jede Menge Zeit mit der Auswahl der Komponenten und dem Zusammenbau und Einstellen der Drohne. Häufig bekommst du eine fertig gebaute Drohne oft günstiger als wenn du ihre Einzelteile separat kaufen würdest. Zudem kannst du erwarten, dass die Drohne bereits akzeptabel eingestellt ist, was das Flugverhalten angeht.

Für viele gehört das selbst bauen der Drohne einfach zum Hobby dazu. Ich will dich aber nicht davon ab bringen, eine fertige Drohne zu kaufen.

> *Anm. remove_me*: Wenn du deine Drohne nicht selber baust, bist du eigtl. auch nix wert. Aber schön, dass du da bist! 

#### Ready-to-Fly / RTF

RTF wird für 2 leicht unterschiedliche Produkte verwendet.

Zum einen bezeichnet es komplette Kits, bestehend aus Brille, Funkfernbedienung und Drohne. Ggf. sogar noch mit Akkus und Ladegerät. Auspacken, Akkus laden, losfliegen. Theoretisch das Rundum-Sorglos-Paket. Meistens kommen hier aber billigste Komponenten zum Einsatz, daher sind solche Kits mit Vorsicht zu genießen.

Zum anderen wird der Begriff als Synonym für "Bind and Fly" verwendet.

#### Bind and Fly / BNF

Die Drohne ist flugfertig zusammengebaut, verfügt über ein Videosystem und einen Funkempfänger. Du musst diesen eigentlich nur noch an die Funkefernbedienung binden.

#### Plug'n'Play / PNP

Die Drohne ist flugfertig zusammengebaut, verfügt über ein Videosystem, hat aber im Gegensatz zum BNF *KEINEN* Funkempfänger an Bord. Du musst diesen selbst nachrüsten. Praktisch, wenn man sowieso noch einen Funkempfänger daheim rum liegen hat.

#### Powertrain

Powertrain bezeichnet die Drohne ohne Videosender und Empfänger. Das Paket besteht also nur aus dem Frame, Flight Controller, ESC und den Motoren.

Gibt es ganz selten bei Drohnen von namenhaften Herstellern, ist eher auf dem Gebrauchtmarkt zu finden.

#### Empfehlungen (Drohne kaufen)

### Eigenbau

Wenn du deine Drohne selbst baust, lernst du dabei sehr viel über ihre Zusammensetzung und die Komponenten. Das hilft ungemein, wenn du die Drohne nach einer Bruchlandung reparieren musst.

#### Builds

Im Folgenden werden einige mögliche Builds vorgestellt, von Budget bis Ultra-Premium.

##### Budget

Bei einem Budget-Build gehe ich davon aus, dass auch deine andere Ausrüstung eher in die Kategorie "Budget" fällt. Das heißt, du fliegt auf jeden Fall Analog. Gegebenenfalls auch noch mit einem Legacy-Funk-Protokol, weil das deine Funke von Haus aus kann und du kein Modul brauchst.

- Frame: TBS Source One
- Motor: Emax Eco2 oder XingE
- ESC & FC: Diatone Mamba F405 Stack
- Receiver: FrSky XM+
- Videosender: HappyModel OVX300

Wenn du bei dem Hobby bleibst, solltest du dir überlegen, ob du die Drohne mittelfristig auf ELRS (2.4 Ghz) umbaust.

##### Mittelklasse

Ab der Mittelklasse gehe ich davon aus, dass dein Budget eine digitale .

- Frame: Diatone Roma F5
- Motor: Xing2
- Receiver: ELRS

##### Premium

- Frame: ImpulseRC Apex 5
- Motor: ETHIX Mr Steele Stout
- Receiver: ELRS, Tracer oder Crossfire

### Build on Demand

Neben dem Kaufen und selbst bauen gibt es noch die Möglichkeit, dass du dir eine Drohne nach Wunsch bauen lässt. Entweder von einem Kumpel, der schon im Hobby drin ist, von einem kommerziellen Dienstleister, oder von jemandem, der diesen Dienst hobbymäßig im Netz anbietet.

Bei jemandem, den du für den Zusammenbau bezahlst, kannst du mit ca. 200€ für diese Dienstleistung rechnen. Mehr oder weniger. Das ist abhängig davon, was er sonst noch so alles an der Drohne macht, ob z.B. die Elektronik der Drohne bereits getuned sein soll.

Bei einem Kumpel ist _mindestens_ ein Kasten Bier fällig.

## Zusatzausrüstung

### Löten

Zum Bauen und Reparieren deiner Drohne wirst du einen Lötkolben benötigen.

### Drohnenrucksack

## Rechtliches

In diesem Abschnitt geht es um die rechtliche Situation als FPV-Pilot.

Juristisch betrachtet bist du mit einem unbemannten Fluggerät ("unmanned aerial vehicle", UAV, oder "unmanned aircraft system", UAS) unterwegs. Das umfasst Modellflieger und -hubschrauber genauso wie unsere Drohnen.

Grundsätzlich gilt: Sei kein Arschloch, dann wird in den allermeisten Fällen darüber hinweg gesehen, wenn du mal nicht ganz so legal unterwegs bist.

Halte Abstand zu unbeteiligten, damit sie sich von deiner kinderfressenden Killerdrohne nicht bedroht oder beobachtet fühlen.

Natürlich kannst du immer an jemanden geraten, der einen schlechten Tag hat, grundlos Streit sucht, oder in einer sehr deutschen Mentalität meint, dass du doch sicher gegen irgend ein Gesetz verstoßen MUSST, so viel Spaß wie du offensichtlich hast. Der einfachste Weg ist, zu gehen.

### Führerscheine

#### der kleine Drohnenführerschein

**MACH IHN!**

Auf einer [Website des Luftfahrtbundesamtes](https://lba-openuav.de/) kannst du den kleinen Drohnenführerschein für die Kategorie "A1/A3" machen. Den brauchst du.

Zum einen hast du dann schon mal alle Regeln gehört, die es zu beachten gilt.

Zum anderen hast du ein offizielles Dokument, dass du jemandem unter die Nase halten kannst, der dir grundlos auf den Sack gehen will. Betonung liegt auf "grundlos". Sei kein Arschloch.

#### der große Drohnenführerschein

Den großen Drohnenführerschein (Kategorie "A2") brauchst du als Anfänger definitiv nicht.

Der Schein kostet abhängig vom Anbieter der Schulung 200-300€. Gegebenenfalls noch mehr, wenn die Schulung mehr ist als ein Online-Kurs und z.B. auch noch Präsenzunterricht beinhaltet.

Mit dem großen Schein darfst du näher an Wohngebiete und unbeteiligte Personen fliegen. Und du bekommst leichter eine Sondergenehmigung von der Luftfahrbehörde. Braucht es eigentlich nur, wenn du professionell (z.B. als Auftragsarbeit) fliegst.

### Vereine

Die wenigsten Drohnen-Piloten sind Mitglieder eines Modellbau-Vereins. Den Vereinen wird oft nachgesagt, dass sie nur aus Modellbau-Opas bestünden. Dass Modellbau-Vereine bei der Neuregelung der Drohnengesetzte 2021 einen Sonderstatus erhalten haben, wirkt sich zudem nicht sonderlich positiv auf die "Völkerverständigung" aus.

> *Anm. rumpelst1lzk1n*: Die Leute in den Modellbauvereinen haben häufig die Entwicklung mindestens der letzen 5 wenn nicht gar 10 Jahre verschlafen. Motor und Servo, mehr brauchen sie nicht, mehr verstehen sie nicht. Aber: wo unsere Fluggeräte mit Elektronik glänzen, glänzen die alten Modellbauer bei der Mechanik.

## 3D-Druck

Man braucht immer wieder etwas. Halterungen für Antennen und Kameras, Landefüße, etc.

Eine gute Anlaufstelle um nach Druckteilen für seinen Frame zu suchen ist [yeggi.com](https://www.yeggi.com/). Masochisten suchen auch direkt auf [thingiverse.com](https://www.thingiverse.com/), aber deren Suche ist leider wenig zuverlässig.

Es ist nützlich, einen 3D-Drucker zu haben, oder jemand zu kennen, der einem Teile Drucken kann.

Wenn man selbst keinen Zugriff auf einen Drucker hat, gibt es online eine Vielzahl an Diensten, die einem die gewünschten Teile für mehr oder weniger Geld drucken.

Die meisten Teile sollten in TPU gedruckt werden. Dieses verfügt über eine gewisse Flexibilität, was dafür sorgt, dass es Stürze besser aushält.

## Jenseits der Drohne

FPV ist nicht auf Drohnen beschränkt. Natürlich kannst du so ein System in alle möglichen Gerätschaften einbauen. Vom Flugzeug übers Rennauto bis hin zum Boot.

## Glossar

Der Themenbereich FPV ist voller Anglizismen

| | |
| -------- | -------- |
| Bando | Verlassenes Gebäude, alte Industrieanlage, Lost Place |
| DVR | Digital Video Recording, Videoaufzeichnung üblicherweise auf SD-Karte in der FPV-Brille |
| FPV | First Person View, Bildübertragung aus dem Fluggerät um eine Pilotensicht zu erzeugen |
| Funke | Funkfernbedienung, Funkfernsteuerung |
| LOS | Line of Sight, Sichtflug, der Pilot beobachtet das Fluggerät |
| Radio | siehe Funke |
| Receiver, RX | Empfänger, abhängig vom Kontext ist der Empfänger für Steuersignale am Fluggerät oder der Videoempfänger an der Brille gemeint |
| Transmitter, TX | Sender, abhängig vom Kontext ist der Sender für Steuersignale in der Funkfernsteuerung oder der Videosender am Fluggerät gemeint |

## Linkliste

### Youtube-Channel

#### Einsteigerfreundlich / Tutorials / legitime Produktbewertungen

- [Joshua Bardwell](https://www.youtube.com/c/JoshuaBardwell)
- [Nick Burns](https://www.youtube.com/channel/UCBGpbEe0G9EchyGYCRRd4hg)
- [Gal Kremer](https://www.youtube.com/user/galkremer11)
- [Pawel Spychalski](https://www.youtube.com/user/dzikuvx)
- [Albert Kim](https://www.youtube.com/channel/UCnJyFn_66GMfAbz1AW9MqbQ)
- [Oscar Liang](https://www.youtube.com/user/289359752)
- [AndyRC](https://www.youtube.com/channel/UCKE_cpUIcXCUh_cTddxOVQw)

#### Marktschreier

- [UAV Futures](https://www.youtube.com/channel/UC3ioIOr3tH6Yz8qzr418R-g)
- [Drone Camps RC](https://www.youtube.com/channel/UCwojJxGQ0SNeVV09mKlnonA)

#### Hi tech, low life

- [UAV Tech](https://www.youtube.com/user/spatzengr)
- [Chris Rosser](https://www.youtube.com/user/neucleotide)
- [Wezley Varty](https://www.youtube.com/channel/UCiluOsWP9XCNnPART78mOfA)

#### Fanboy-Kanäle / Entertainment

- [Mr Steve](https://www.youtube.com/user/MrSteeledavis)
- [TBS](https://www.youtube.com/user/nastycop420)
- [TBS Lounge](https://www.youtube.com/channel/UChNaTfgpiQRIeJiGrP1fOOQ)
- [JohnnyFPV](https://www.youtube.com/channel/UC7O8KgJdsE_e9op3vG-p2dg)
- [RotorRiot](https://www.youtube.com/channel/UCemG3VoNCmjP8ucHR2YY7hw)
- [MCK](https://www.youtube.com/channel/UCFJdwOewIZBv3dDJmhtVn1g)

#### Nicht eindeutig zuordenbar

- [QRP](https://www.youtube.com/user/voxtelnismo)
- [FalconRad FPV](https://www.youtube.com/c/FalconRadFPV)
- [rctestflight](https://www.youtube.com/channel/UCq2rNse2XX4Rjzmldv9GqrQ)

### Websites

#### Rechtsgrundlagen

- [Deutsches Luftfahrtbundesamt](https://lba-openuav.de/einstieg/)
- [LuftVO (Gesetze zu unbemannten Fluggeräten)](https://www.gesetze-im-internet.de/luftvo_2015/BJNR189410015.html#BJNR189410015BJNG001201360)

#### Tutorials / Blogger

- https://oscarliang.com/ (FPV allgemein, viele Tutorials)
- https://blog.seidel-philipp.de/ (FPV allgemein)
- https://kamikatze-fpv.de/ (Fokus auf Team Blacksheep)
- https://www.fpvknowitall.com/ (Joshua Bardwell Einkaufsliste)
- https://betaflight.de/docs/knowledge-base/

#### Tune Presets

- [UAV Tech Presets](https://theuavtech.com/presets/)
- [Betaflight Community Presets](https://github.com/betaflight/betaflight/wiki/Community-Presets)

### Discord Server

- [pr0-FPV](https://discord.gg/uBh3QsnqF5)
- [ELRS Community](https://discord.gg/dS6ReFY)

---

Diese Zusammenfassung wurde von **rumpelst1lzk1n** (Discord: rumpelst1lzk1n#9952) erstellt.

Mitwirkende:

- [Panda](https://www.youtube.com/channel/UCh5bOX3_hTCsVLJxf4cm5qA) (Discord: Panda.#9780)
- [Puffi](https://www.youtube.com/channel/UCnS1f_wUUGjGD3vL1L-AKFA) (Discord: Puffi#7127)
- [remove_me](https://www.youtube.com/channel/UCV0hukgWm_BdC_gvOPZSa9w) (Discord: remove_me#4028)
