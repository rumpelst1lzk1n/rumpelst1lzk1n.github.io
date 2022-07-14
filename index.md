---
layout: default
---
# Einsteigerguide FPV

**Stand: Mitte 2022**

Das Dokument wird stetig erweitert und modifiziert. Ich versuche dabei alle Daten einigermaßen aktuell zu halten.

- [1. Einleitung](#1-einleitung)
  - [1.1. SUPER-SHORT-CUT-FÜR-MEGA-UNGEDULDIGE](#11-super-short-cut-für-mega-ungeduldige)
  - [1.2. Was ist das für 1 Guide?](#12-was-ist-das-für-1-guide)
- [2. Hilfe bekommen](#2-hilfe-bekommen)
  - [2.1. Ich hab da mal ne Frage](#21-ich-hab-da-mal-ne-frage)
  - [2.2. Hilfe geben](#22-hilfe-geben)
- [3. Einkaufen](#3-einkaufen)
  - [3.1. China-Shops](#31-china-shops)
  - [3.2. Europäische Shops](#32-europäische-shops)
  - [3.3. Gebrauchtmarkt](#33-gebrauchtmarkt)
- [4. Fernbedienung](#4-fernbedienung)
  - [4.1. Formfaktor](#41-formfaktor)
  - [4.2. Modi](#42-modi)
  - [4.3. Funkprotokoll](#43-funkprotokoll)
  - [4.4. Empfehlungen (Funke)](#44-empfehlungen-funke)
  - [4.5. Empfehlungen (Sendemodul \& Empfänger)](#45-empfehlungen-sendemodul--empfänger)
- [5. Simulatoren](#5-simulatoren)
  - [5.1. Üben](#51-üben)
  - [5.2. Flugmodi](#52-flugmodi)
- [6. Videosystem](#6-videosystem)
  - [6.1. Allgemein](#61-allgemein)
  - [6.2. Analog](#62-analog)
  - [6.3. DJI](#63-dji)
  - [6.4. HDZero (früher SharkByte)](#64-hdzero-früher-sharkbyte)
  - [6.5. Walksnail](#65-walksnail)
  - [6.6. HD Aufnahmen](#66-hd-aufnahmen)
  - [6.7. unter ferner liefen](#67-unter-ferner-liefen)
- [7. Flugstile](#7-flugstile)
  - [7.1. Cinematic](#71-cinematic)
  - [7.2. Race](#72-race)
  - [7.3. Freestyle](#73-freestyle)
  - [7.4. Longrange](#74-longrange)
- [8. Drohne / Quad / Copter](#8-drohne--quad--copter)
  - [8.1. Klassen](#81-klassen)
  - [8.2. Komponenten](#82-komponenten)
- [9. Software (Funkfernsteuerung)](#9-software-funkfernsteuerung)
  - [9.1. OpenTX](#91-opentx)
  - [9.2. EdgeTX](#92-edgetx)
  - [9.3. FreedomTX](#93-freedomtx)
- [10. Software (Flight Controller)](#10-software-flight-controller)
  - [10.1. Betaflight](#101-betaflight)
  - [10.2. KISS \& FETtec](#102-kiss--fettec)
  - [10.3. Emuflight](#103-emuflight)
  - [10.4. iNAV](#104-inav)
  - [10.5. Ardupilot](#105-ardupilot)
- [11. Akkus](#11-akkus)
  - [11.1. Akku-Aufbau](#111-akku-aufbau)
  - [11.2. Sicherheit](#112-sicherheit)
  - [11.3. Ladegeräte](#113-ladegeräte)
  - [11.4. Laden/Entladenn](#114-ladenentladenn)
  - [11.5. Paralleles Laden](#115-paralleles-laden)
  - [11.6. Entsorgung](#116-entsorgung)
- [12. Der erste eigene Copter](#12-der-erste-eigene-copter)
  - [12.1. Fertigen Copter kaufen](#121-fertigen-copter-kaufen)
  - [12.2. Eigenbau](#122-eigenbau)
  - [12.3. Build on Demand](#123-build-on-demand)
- [13. Zusatzausrüstung](#13-zusatzausrüstung)
  - [13.1. Bit-Set](#131-bit-set)
  - [13.2. Prop-Tool](#132-prop-tool)
  - [13.3. Löten](#133-löten)
  - [13.4. Rucksack](#134-rucksack)
- [14. Rechtliches](#14-rechtliches)
  - [14.1. Führerscheine](#141-führerscheine)
  - [14.2. Vereine](#142-vereine)
  - [14.3. Versicherung](#143-versicherung)
- [15. 3D-Druck](#15-3d-druck)
  - [15.1. Drucker](#151-drucker)
  - [15.2. Materialien](#152-materialien)
- [16. Jenseits von Multicoptern](#16-jenseits-von-multicoptern)
- [17. Glossar](#17-glossar)
- [18. Linkliste](#18-linkliste)
  - [18.1. Youtube-Channel](#181-youtube-channel)
  - [18.2. Websites](#182-websites)
  - [18.3. Discord Server](#183-discord-server)
  - [18.4. OpenSource Projekte](#184-opensource-projekte)
  - [18.5. Hersteller Dokumentationen](#185-hersteller-dokumentationen)
  - [18.6. Shops](#186-shops)
- [19. Sonstiges](#19-sonstiges)
  - [19.1. Puffis gesammelte Weisheiten](#191-puffis-gesammelte-weisheiten)

## 1. Einleitung

Vorweg: Das Hobby kann teuer sein. Plane mit mindestens 500€ für einen absoluten Einsteiger-Setup oder 1000-1500€ für ein gutes Setup.

Das Dokument hat eine ziemliche Länge, daher hat der liebe *remove_me* das in seiner unnachahmlichen Art kurz gefasst.

### 1.1. SUPER-SHORT-CUT-FÜR-MEGA-UNGEDULDIGE

- **Schritt 1**: Kaufe eine Funke (TX16s oder Jumper T-Pro).
- **Schritt 2**: Kaufe einen Simulator (Steam: Liftoff oder Velocidrone).
- **Schritt 3**: übe übe übe - stundenlang und informiere dich nebenher langsam weiter.
- **Schritt 3.1**: Lies den Rest in diesem Dokument. Kläre Fragen und werde schlauer.
- **Schritt 4**: Kaufe weitere Hardware, entweder einen Fertig-Copter (BNF) oder aber Einzelteile.
- **Schritt 4.1**: Ein Ladegerät (ISDT 608AC oder Hota D6 Pro).
- **Schritt 4.2**: Passende Akkus für die Drohne (4 Stück sollten es schon sein).
- **Schritt 5**: übe übe übe - bis alles da ist.
- **Schritt 6**: rausgehen - offenes Gelände suchen (gemähte Wiesen sind dein Freund) - fliegen.

### 1.2. Was ist das für 1 Guide?

Dieser Guide soll einen umfangreichen Einblick in das Thema "FPV-Drohnen" vermitteln und hat den Anspruch, als Orientierungshilfe für Einsteiger zu dienen und die meisten *allgemeinen* Fragen zu beantworten über die man beim Einstieg stolpert.

Da sich der Guide an Einsteiger richtet, sind manche technische Sachverhalte vereinfacht formuliert.

Für HowTos findet ihr unten in den Links umfangreich Anlaufstellen.

## 2. Hilfe bekommen

### 2.1. Ich hab da mal ne Frage

TL;DR: Erst selbst versuchen, eine Antwort zu finden, dann eine intelligente Frage stellen.

Es gibt für die meisten Themen umfangreiche Dokumentation, seien es Websites oder Video-Anleitungen. Siehe Linksammlung ganz unten.

Die meisten Online-Communities, die sich mit FPV beschäftigen, sind zudem sehr hilfsbereit. Was aber nicht heißt, dass du das als deine persönliche Support-Hotline missverstehen solltest. Niemand hat sich verpflichtet, dir zu helfen oder deine Fragen zu beantworten und ein bisschen eigenständiges Denken und ggf. auch Transferleistung ist eine Grundvoraussetzung.

Wenn du bei Fragen ausschließlich ein RTFM oder einfach einen Link bekommst, ist das der dezente Hinweis, dass du die Antwort auf deine Frage auch sehr leicht selbst gefunden hättest.

Passiert dir das häufiger? Dann solltest du dir vielleicht die Anleitung ["How To Ask Questions The Smart Way"](http://www.catb.org/~esr/faqs/smart-questions.html) durchlesen.

### 2.2. Hilfe geben

Hilf nachhaltig, gib ggf. noch einen Link zu einer Dokumentation mit dazu.

Sei kein Troll.

Wenn du merkst, dass derjenige, dem du gerade helfen willst nur herumjammert, dass seine Lösungsansätze nicht funktionieren und es keine Anzeichen dafür gibt, dass er konstruktiv auf andere Ansätze reagiert, zögere nicht die Reißleine zu ziehen. So eine Person will eigentlich keine Hilfe sondern sich nur beschweren. Der Versuch zu helfen ist Zeitverschwendung. Es gibt erschreckend viele davon, insbesondere in diversen Facebook-Gruppen.

## 3. Einkaufen

In dem Abschnitt gehe ich kurz darauf ein, wie du überhaupt an Drohnen und Zubehör kommst.

> *Anm. rumpelst1lzk1n*: Willkommen in 2022, der Fortsetzung von 2021. Prices are high and everything is out of stock. Es kann sein, dass aufgrund von Gründen die Preise in der Realität inzwischen stark von denen in dem Guide hier abweichen. Leider nach oben.

Wir schlittern seit 2020 von einer Krise in die nächste. Das trifft auch das Hobby. Seit 2020 sind die Preise stark gestiegen. Und gerade in den Sommermonaten, wenn alle fliegen wollen, sind viele Produkte ausverkauft. Plane frühzeitig oder richtige dich auf Vorbestellung und lange Lieferzeiten ein.

Viele Shops zeigen manche Artikel permanent als ausverkauft an. Das hängt oft damit zusammen, dass die Vorbestellungen die Lieferungen übersteigen. Die Vorbestellungen werden bedient, aber der Artikel ist nie "verfügbar".

### 3.1. China-Shops

Hardware rund um Drohnen wird fast ausschließlich in China gefertigt.

Am günstigsten kommt man an die Produkte, wenn man auch direkt dort einkauft.

Vorteil beim Einkaufen in China: Günstiger.
Nachteil: Du wartest 10-30 Tage bis die Sachen da sind.

Es gibt auch Express-Versand, da sind die Sachen dann in ~5 Tagen da, aber der kostet mehr.
Und es bleibt öfter im Zoll hängen. Dann kannst du auch gleich in Deutschland kaufen.

#### 3.1.1. Banggood und AliExpress

Bekannte Shops sind [Banggood](https://www.banggood.com/) und [AliExpress](https://de.aliexpress.com/).

[Banggood](https://www.banggood.com/) ist eher mit Amazon zu vergleichen. Versand und Support liegt beides bei Banggood und zumindest in den letzten Jahren leistet sich Banggood auch einen ganz ordentlichen Support. Zudem unterhält es kleinere Lagerhäuser in Europa über die vereinzelte Produkte schneller geliefert werden können.

[AliExpress](https://de.aliexpress.com/) ist vergleichbar mit Ebay - eine Handelsplattform.
Unterschiedliche Händler übernehmen unabhängig von AliExpress den Versand und Support für die Produkte. Hit or miss, man kann auch daneben greifen und einen Händler mit unterirdischem Support erwischen. Dafür kann man auch günstiger weg kommen als bei Banggood.

Beide Shops führen Einfuhrumsatzsteuer und Zoll direkt ab. Oder schlagen sie drauf und umgehen den Zoll auf irgendwelchen Wegen.

> *Anm. remove_me*: Du magst Glücksspiel und hast kein Problem mit Wartezeiten? Banggood it is!

Sowohl AliExpress wie auch Banggood haben ein Gutschein-System. Häufig kann man hier nochmal ein bisschen Geld sparen.

Bei den "Angeboten" solltest du allerdings aufpassen. Beide Shops nennen gerne mal Fantasiepreise als Originalpreis und zeigen dann utopische Rabatte an.

#### 3.1.2. Direktvertrieb

Bekannte FPV-Marken wie [Diatone](https://www.diatone.us/), [iFlight](https://iflight-rc.com), [Team Blacksheep](https://www.team-blacksheep.com/) etc. haben auch ihre eigenen Shops. In diesen findest du neben den eigenen Produkten oft auch Zubehör, das von den Herstellern zusätzlich angeboten wird um ein abgerundetes Produktportfolio in ihrem Store bieten zu können.

Manchmal kommt man auch da bei Rabattaktionen günstig an Hardware.

Anders als Banggood und AliExpress führen diese Shops Einfuhrumsatzsteuer und Zoll nicht direkt ab. Du musst hier also nochmal ~20% auf die Bestellung drauf rechnen und es kann ein Gang zum nächsten Zollamt oder zur Poststelle notwendig sein. Manchmal hat man aber auch Glück.

### 3.2. Europäische Shops

Die einschlägigen deutschen Shops über die du immer wieder stolperst sind:

- [n-factory.de](https://n-factory.de/)
- [shop.rc-hangar15.de](https://shop.rc-hangar15.de/)
- [rctech.de](https://www.rctech.de/)
- [fpv24.com](https://www.fpv24.com/de/)
- ...

Oft lohnt sich auch ein Blick zu unseren europäischen Nachbarn.

Eine Liste innereuropäischer FPV-Shops findest du [hier](https://fpvmarket.eu/european-fpv-stores/).

### 3.3. Gebrauchtmarkt

Auf den einschlägigen Gebraucht-Portalen wie eBay-Kleinanzeigen oder willhaben.at (österreichisches eBay-Kleinanzeigen) gibt es immer wieder Schnäppchen.

Hier lohnt es die Augen offen zu halten z.B. bei aufgelösten Sammlungen. Gerade wenn es auf den Winter zu geht, verkaufen die Schönwetterflieger ihre Sachen.

Meist braucht man für gute Käufe etwas Erfahrung, damit dir der Verkäufer nicht irgendwelche Uralt-Hardware für teuer Geld aufschwatzt.

Wenn du mit dem Guide durch bist, solltest kannst du viele Sachen aber ganz gut einschätzen können.

Gerne kannst du auch Rückfragen dazu im [pr0 Discord](https://discord.gg/uBh3QsnqF5) stellen.

## 4. Fernbedienung

Du willst fliegen? **Nein**, willst du nicht.

Du willst erst mal im Simulator üben.

> *Anm. remove_me*: **GLAUB ALLEN! ERST SIMULATOR! DANN DROHNE!!**

Wenn du ein Gamepad hast, kannst du direkt dir auf Steam einen der vielen Simulatoren holen. Ein Gamepad ist besser als nichts, aber eigentlich willst du eine echte Funkfernsteuerung. Diese verhält sich von den Sticks anders als ein Gamepad.

Moderne Funkfernsteuerungen kannst du an deinen Rechner anschließen und dort als Controller verwenden.

Für diesen Abschnitt solltest du zwischen 90 und 300€ einplanen. Eine Funkfernsteuerung ist normalerweise eine einmalige Anschaffung, die dich sehr lange begleiten wird. Es geht auch noch teurer, aber das bedeutet nicht zwangsläufig bessere oder modernere Technik.

### 4.1. Formfaktor

Als vorherrschende Formfaktoren bei Fernbedienungen gibt es Gamepad und Vollformat. Gamepad sollte bekannt sein. Vollformat sind viereckige Kästen. Zwischenstufen sind möglich.

Nachfolgend 3 populäre Vertreter dieser Formfaktoren.

| Vollformat | Gamepad | Zwischending |
| -------- | -------- | -------- |
| ![Radiomaster TX16S](./img/radiomaster_tx16s.png) | ![TBS Tango 2](./img/team_blacksheep/tango2.jpg) | ![TBS Mambo](./img/team_blacksheep/mambo.jpg) |

### 4.2. Modi

Bei einem Gamepad zentrieren sich beide Analog-Sticks. Bei einer RC-Funkfernsteuerung zentriert sich die Achse des Sticks, auf dem das Gas liegt nicht selbständig, damit du dieses feiner dosieren kannst. Das gilt auch für Funkfernsteuerungen im Gamepad-Formfaktor.

Welche Achse genau das ist, hängt vom Modus ab, auf den deine Funkfernsteuerung eingestellt ist. Der gängigste Modus ist "Mode 2", aber nimm, womit du am besten klar kommst.

![radio_modes](./img/radio_modes.drawio.png)

> *Anm. Philm0*: Als Links/Rechtshänder solltest du dich zwischen Mode 1 und 2  entscheiden, Mode 3 und 4 ist im Regelfall nur dumme scheiße lernen.

Normal kann jede Funke alle Modi. Der Wechsel zwischen Modi, bei denen sich die Gas-Achse nicht verändert, lässt sich einfach in der Software konfigurieren.

Wenn du allerdings zwischen Modi wechseln möchtest, die das Gas auf einem anderen Stick haben, wirst du eine Anpassung der Hardware vornehmen müssen.

Manche Funken erlauben diese Anpassung von außen vorzunehmen, andere musst du aufschrauben um ein paar Schräubchen und Federn anders zu setzen, wieder bei anderen kann es passieren, dass du die Sticks komplett ausbauen und anders herum einbauen musst.

### 4.3. Funkprotokoll

Neben dem Formfaktor ist auch noch die Frage nach dem Funkprotokoll. Sender in deiner Funkfernsteuerung und Empfänger auf der Drohne müssen die gleiche Sprache sprechen. Üblicherweise entscheidet man sich für einen Sender, der das gewünschte Protokoll unterstützt und packt dann dazu passende Empfänger in die Drohne.

Falls du ein nicht von deiner Funke abgedecktes Protokoll fliegen willst, kannst du dieses mit Modulen nachrüsten. Die beiden Formfaktoren nutzen unterschiedliche Modulgrößen, `JR` bei Vollformat, `Lite` bei Gamepad.

#### 4.3.1. Frequenzen

Funkprotokolle verwenden die Frequenzen 2.4GHz und 900MHz.

Bei den modernen Übertragungsprotokollen (siehe unten) ist die Frequenz nahezu irrelevant. Du wirst die Unterschiede nur in Extremsituationen und mit viel Erfahrung spüren. Beide Frequenzen gehen mit den modernen Protokollen bei gleicher Sendeleistung weiter als deine Videoverbindung. Das ist wichtig, damit dir nicht bei bestem Bild plötzlich die Funkverbindung abreißt und die Drohne aus der Luft stürzt.

##### 4.3.1.1. 900 MHz

- höhere Reichweite bei gleicher Sendeleistung (im Vergleich zu 2.4 GHz)
- bessere Penetration durch Bäume und in Gebäuden

##### 4.3.1.2. 2.4 GHz

- mehr Piloten gleichzeitig in der Luft
- höhere Update-Rate als bei 900 MHz möglich (deine Eingaben werden häufiger zur Drohne geschickt)
- kleinere Antennen als 900 MHz

Seit 2021 haben die Hersteller 2.4 GHz auch für moderne Funkprotokolle entdeckt, früher wurde diese Frequenz vor allem von den unten als "Legacy" bezeichneten Protokollen verwendet.

##### 4.3.1.3. Andere

Es gibt noch gänzlich andere Frequenzen auf 27, 40 oder 433 MHz. Diese sind entweder etwas für die Modellbau-Opas (aka gnadenlos veraltet) oder spielen für das FPV-Hobby zumindest keine Rolle.

#### 4.3.2. Alt vs. Neu

Bei den Funkprotokollen unterscheide ich zwischen Legacy und Modern.

##### 4.3.2.1. Legacy

Diese Protokolle sind irrelevant.
Sei es von FrSky, Graupner, Futaba oder wie sie alle heißen. Ihnen gemein ist, dass sie eigentlich alle mit einem Multi-Protokoll-Modul abgedeckt werden. Vergiss sie. Wenn du welche hast, verkaufe sie.

Wenn du unbedingt eine Drohne fliegen willst, die einen Empfänger mit einem dieser Protokolle verwendet, ist ein Multi-Protokoll-Modul der richtige Weg. Oder ein Upgrade des Fluggeräts auf ein modernes Protokoll.

##### 4.3.2.2. Modern

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

### 4.4. Empfehlungen (Funke)

Wenn du dir eine Funkfernsteuerung holst, solltest du darauf achten, dass diese mit OpenTX oder einem Derivat davon läuft.

OpenTX ist ein Betriebssystem für Funkfernsteuerungen und hat sich bei FPV-Drohnen als Quasi-Standard etabliert. Für Funken mit diesem Betriebssystem wirst du online jede Menge Hilfestellungen finden.

Alle hier genannten Funkfernsteuerungen verwenden entweder OpenTX oder ein Derivat davon, z.B. FreedomTX oder EdgeTX.

> *Anm. rumpelst1lzk1n*: Funken ohne OpenTX (oder Derivat davon) sind irrelevant.

Bei den genannten Funken ist das Display nachrangig.
Wir fliegen FPV (First-Person-View) und bekommen die relevanten Flugdaten in der Brille angezeigt. Ein großes Display wie bei der TX16S ist zwar schön, wenn man etwas umfangreicher konfigurieren will, aber man kann die Funken auch über den Rechner ganz ohne Display konfigurieren.

Wenn du bei der Funke hinsichtlich des verbauten Moduls die Wahl zwischen einem Multi-Protokoll-Modul und ELRS hast, nimm ELRS. ELRS hat Anfang 2022 auf dem Markt ordentlich aufgeräumt. Alle fertigen Copter, die früher mit einem der Legacy-Protokolle angeboten wurden, gibt inzwischen alles eigentlich auch mit ELRS, sodass es keinen Grund mehr gibt, irgendwelche alten Krücken zu fliegen.

#### 4.4.1. Radiomaster TX16S (Mk 2)

- ca. 230€
- Vollformat
- Multi-Protokoll-Modul, MK2 wahlweise mit ELRS
- OpenTX oder EdgeTX
- großer farbiger Touchscreen, Touch wird nur in EdgeTX unterstützt

Gibt es auch als Variante von Eachine. Beide Funken sind gleichwertig und unterscheiden sich nur geringfügig durch die Positionierung und Form einiger Knöpfe.

#### 4.4.2. Radiomaster Zorro

- ca. 140€
- Gamepad
- Mehrere Protokoll-Varianten. Nimm die mit ELRS.
- Monochrom-Display
- sehr kleiner interner Akku

#### 4.4.3. Radiomaster TX12

- ca. 120€
- etwas kleiner als Vollformat
- eingebautes Multi-Protokoll-Modul
- OpenTX oder EdgeTX
- Monochrom-Display

#### 4.4.4. Jumper T-Pro

- ca. 150€
- Gamepad
- Mehrere Protokoll-Varianten. Nimm die mit ELRS.
- winziges Monochrom-Display

#### 4.4.5. TBS Tango 2

- ca. 160-200€
- Gamepad
- eingebautes Crossfire
- ständig ausverkauft
- winziges Monochrom-Display
- Multi-Protokoll-Modul muss nach gekauft werden

Vermutlich die hochwertigste aktuelle Funke im Gamepad-Formfaktor.

#### 4.4.6. TBS Mambo

- ca. 160€
- etwas kleiner als Vollformat
- eingebautes Tracer
- kleines Monochrom-Display

### 4.5. Empfehlungen (Sendemodul & Empfänger)

Wenn deine Funke nicht das Protokoll kann, das du möchtest, gibt es bei den meisten Funken die Möglichkeit, ein Modul nachzurüsten.

#### 4.5.1. ELRS

Bei ELRS konzentrieren wir uns auf 2.4 GHz. 900 MHz-Systeme würde ich für einen Neueinsteiger nicht empfehlen. Bzw. wenn, dann Crossfire.

##### 4.5.1.1. Happymodel ES24TX Pro

- ca. 45€
- ELRS auf 2.4GHz
- 1W maximale Sendeleistung
- WiFi/Bluetooth
- Versionen für JR- und Lite-Modulschacht ("Slim")

Happymodel war der erste Hersteller, der fertige ELRS-Produkte auf den Markt gebracht hat. Die Produkte genießen einen guten Ruf, auch, weil der Hersteller gut mit den Entwicklern zusammen arbeitet.

> *Anm. rumpelst1lzk1n*: Es gibt auch fancy ELRS-Module mit kleinem Display. Meiner Meinung nach unnötig. Einziger Wermutstropfen bei dem Modul ist, dass man das Modul für Zugriff auf den USB-Port aufschrauben muss. Ist aber nicht unbedingt notwendig, flashen kann man das Modul auch über die Funke oder über WiFi.

|Happymodel ES24TX Pro|Happymodel ES24TX Pro Slim|
| --- | --- |
|![JR-Bay Modul](./img/happymodel/ES24TX_Pro.jpg)|![Lite-Bay Modul](./img/happymodel/ES24TX_Pro_slim.jpg)|

##### 4.5.1.2. ELRS-Empfänger

Einen ELRS-Empfänger bekommst du für um die 15-20€. Mehr ist Wucher. Spezialfälle z.B. mit Antennen-Diversity oder PWM ausgenommen.

Eine Besonderheit bei den ELRS-Empfängern ist, dass manche davon eine Keramik-Antenne verwenden, die direkt auf dem Receiver drauf ist. Heißt, du musst dir keine Gedanken machen, wie du eine Antenne auf deinem Fluggerät unter bringst. Eine richtige Antenne hat mehr Reichweite. Für kleine Fluggeräte, mit denen du dich in einem Umkreis von etwa einen Kilometer bewegst, reicht das trotzdem. Das Grundprinzip, dass bei gleicher Sendeleistung dein Steuersignal weiter geht als dein Videosignal wird auch damit erfüllt.

|Happymodel EP1| Happymodel EP2|BetaFPV EP2|
| --- | --- | --- |
| ![Happymodel EP1](./img/happymodel/EP1_RX.jpg) | ![Happymodel EP2](./img/happymodel/EP2_RX.jpg) | ![BetaFPV EP2](./img/betafpv/EP2_RX_flat_ceramic.webp) |

Für Spezialfälle (PWM-Ausgänge, Diversity, etc) lohnt sich ein Blick auf die Empfänger des Herstellers "Matek".

#### 4.5.2. Crossfire & Tracer

Eigentlich gibt es bei den Systemen von TBS nicht viel zu sagen. Crossfire ist 900 MHz, Tracer ist 2.4 GHz. Das System wird nur von TBS hergestellt und die haben ihr Produktportfolio ganz gut unter Kontrolle.

##### 4.5.2.1. Sender

Lediglich bei Crossfire gibt es 2 unterschiedliche Sende-Module für den JR-Schacht. Das Micro (v2) reicht vollkommen aus.

Ansonsten gibt es für Tracer und Crossfire je ein Modul für JR- und Lite-Modulschacht.

| Crossfire Micro TX | Crossfire Nano TX | Tracer Micro TX | Tracer Nano TX |
| --- | --- | --- | --- |
| ![Crossfire Micro TX](./img/team_blacksheep/Crossfire_Mtx.jpg) | ![Crossfire Nano TX](./img/team_blacksheep/Crossfire_Mtx_lite.jpg) | ![Tracer Micro TX](./img/team_blacksheep/Tracer_Mtx.jpg) | ![Tracer Nano TX](./img/team_blacksheep/Tracer_Mtx_lite.jpg) |

##### 4.5.2.2. Empfänger

Es gibt 3 Empfänger-Typen, die für den FPV-Bereich relevant sind.

- Crossfire Nano Diversity
- Nano (jeweils Crossfire & Tracer, bei Tracer gleichzeitig Diversity)
- Sixty9 (jeweils Crossfire & Tracer)

Wenn du Analog fliegst, empfehle ich dir, einen Blick auf den Sixty9 zu werfen. Das ist eine Kombination aus Empfänger und Video-Sender. Ansonsten nimm den Nano. Der Crossfire Nano Diversity ist eher für LongRange-Systeme gedacht.

## 5. Simulatoren

Für den Einstieg erfüllt jeder Simulator den Zweck, dass du dich mit der Steuerung einer Drohne vertraut machst. Und die Drohne gegen Bäume, Häuser und in den Asphalt hämmern kannst, ohne gleich Geld in die Reparatur stecken zu müssen.

Und falls du feststellst, dass das Hobby überhaupt nichts für dich ist, hast du nur Geld für die Fernbedienung ausgegeben. Diese kannst du normalerweise ohne großen Verlust auf eBay-Kleinanzeigen oder in einschlägigen Facebook-Gruppen verkaufen.

Hier eine Liste populärer Simulatoren (ohne Wertung):

- [Orqa FPV.SkyDive (Steam, kostenlos)](https://store.steampowered.com/app/1278060/Orqa_FPVSkyDive/)
- [Velocidrone (NICHT auf Steam erhältlich, Quasi-Standard für Racer)](https://www.velocidrone.com/)
- [Liftoff (Steam, std. für alles andere)](https://store.steampowered.com/app/410340/Liftoff_FPV_Drone_Racing/)
- [DRL (Steam)](https://store.steampowered.com/app/641780/The_Drone_Racing_League_Simulator/)
- [Uncrashed (Steam)](https://store.steampowered.com/app/1682970/Uncrashed__FPV_Drone_Simulator/)
- [AI Drone Simulator (Steam)](https://store.steampowered.com/app/1608560/AI_Drone_Simulator/)

### 5.1. Üben

Übe viel. Du solltest etwa 10 Stunden auf der Uhr haben, bevor du dich an das Fliegen einer richtigen Drohne im Außenbereich wagst.

Die Zeit ist bares Geld wert, weil du dir das bei Reparaturen deiner Drohne sparst oder deine Drohne nicht gleich beim Jungfernflug über alle Berge geht.

Zudem gibt es auch in den Simulatoren kompetitive Wettbewerbe, seien es Wettrennen oder Zeitrennen. Viele spielen die Simulatoren nicht nur zum Üben, sondern tatsächlich zum Zeitvertreib als Spiel.

### 5.2. Flugmodi

Man unterscheidet im weitesten zwischen 3 Flugmodi.

#### 5.2.1. Acro

Der herausfordernste Modus. Gleichzeitig auch der Modus, den du dir direkt angewöhnen solltest.

Beim Acro-Modus stellst du nur die Fluglage ein. Die Drohne verbleibt dann in dieser Fluglage. Jegliche Änderung der Fluglage MUSS vom Piloten vorgegeben werden.

Nur mit diesem Flugmodus sind die wirklich coolen Tricks möglich und die meisten Videos, die du gesehen haben wirst, sind vermutlich mit diesem Flugmodus aufgenommen.

#### 5.2.2. Angle / Level

Die Drohne wird stabil gehalten und folgt bis zu einem gewissen Grad deinen Sticks, kippt aber nicht um. Wenn du die Sticks für Pitch, Roll und Yaw in die Mittelstellung bringst, begibt sich die Drohne wieder in die Horizontale.

Achtung: Dass die Drohne sich in die Horizontale begibt heißt NICHT, dass sie anhält. Wenn die Drohne Schwung drauf hat, nimmt sie diesen trotzdem mit und schwebt in die entsprechende Richtung weiter.

Damit sind nur eingeschränkt Tricks möglich.

Anwendungsfälle hat dieser Flugmodus trotzdem. Alles was in Innenräumen mit einer entsprechenden Präzision geflogen werden will (TinyWhoops, CineWoops) verwendet oft mit diesem Modus.

Zudem legen einige Piloten sich diesen Flugmodus als "Panikschalter" auf einen Knopf ihrer Funkfernsteuerung um die Drohne noch irgendwie abzufangen.

#### 5.2.3. Horizon

Ein Bastard aus Acro und Angle. Die Drohne verhält sich prinzipiell so wie im Angle Modus. Wenn du die Sticks für Pitch und Roll über einen gewissen Punkt hinaus bewegst, überschlägt sich die Drohne trotzdem in die entsprechende Richtung.

Der Modus ermöglicht einfache Tricks, vornehmlich Flips und Rolls.

#### 5.2.4. 3D

Wie der Acro-Modus, aber bei deiner Gas-Achse der Funke ist das Zentrum die Position, bei der du kein Gas gibst. Hoch ist Gas, runter ist Rückwärtsgang. Dafür solltest du spezielle Propeller verwenden. Die meisten "normalen" Propeller sind für eine Drehrichtung optimiert.

Damit sind richtig verrückte Manöver möglich. Kopfüber schweben? Kein Problem.

Allerdings erfordert dieser Flugmodus nochmal deutlich mehr Übung und auch oft andere Einstellungen in den Tiefen der Drohne. Die wenigsten Piloten fliegen diesen Modus. Und wie bei allem, das wenig verwendet wird, findest du dafür auch entsprechend weniger Hilfestellung online.

Mach dich besser erst sehr gut mit dem Acro-Modus vertraut, bevor du dich an so einen Exoten wagst.

#### 5.2.5. Airmode

Gelegentlich stolperst du über den Begriff "Airmode". DAS. IST. KEIN. FLUGMODUS. Der Airmode sorgt in Betaflight z.B. dafür, dass deine Drohne auch ganz ohne dass du den Gashebel betätigst immer ein ganz kleines bisschen Gas gibt um die Lage zu halten und nicht unkontrolliert herum zu eiern.

## 6. Videosystem

Für die Auswahl einer Videobrille muss man sich bewusst machen, welche Systeme es gibt.

Die Auswahl des Videosystems bestimmt die Auswahl der FPV-Brille und der Videosender. Gerade die Brille ist mit der größte Kostenfaktor beim Einstieg. Für diesen Abschnitt kannst du zwischen 110€ für einen ganz rudimentären und 800€ für einen Premium-Setup einplanen.

### 6.1. Allgemein

FPV unterscheidet sich von klassischem Modellbau-Flug dadurch, dass du von deinem Fluggerät das Live-Videobild an einen Empfänger überträgst und somit eine Art Pilotenansicht hast. Die Wiedergabe kann dabei auf einem Monitor oder einer Videobrille erfolgen. Wir konzentrieren uns im nachfolgenden auf den Empfang mittels Videobrille.

In der Videobrille hast du normalerweise einen Empfänger, entweder fest verbaut oder als Modul. Zudem hast du in der Brille die Möglichkeit, das angezeigte Bild auf SD-Karte aufzunehmen. Stichwort `DVR` (Digital Video Recorder). **NUTZE ES!** Die Bildqualität eignet sich eher nicht zum Angeben auf Youtube. Aber wenn du deine Drohne irgendwo auf weiter Flur verloren hast, wirst du die Möglichkeit zu schätzen wissen, dass du den Flug rekonstruieren kannst und weißt, wo das Gerät abgestürzt ist.

#### 6.1.1. Frequenz und Kanal

Die Videosender der nachfolgenden Systeme arbeiten alle auf 5.8GHz. Auf diesem Frequenzband funkt auch haushaltsübliches WLAN. Wenn du in der Nähe eines WLAN-Access-Punkts fliegst kann es sein, dass dieser dein Videosignal stört.

Je nach Funksystem gibt es mehrere Kanäle (Channel). Sender und Empfänger müssen auf den gleichen Kanal eingestellt sein. Die Kanäle sind in Gruppen eingeteilt. Die Kanäle der gleichen Gruppe können üblicherweise parallel verwendet werden, ohne dass sich diese zu stark negativ beeinträchtigen.

Wenn du vermutest, dass dein Videosignal von WLAN gestört wird, kann es sich lohnen den Kanal zu wechseln.

"R" (Raceband) ist die beliebteste Kanal-Gruppe für den Flug mit mehreren anderen Piloten. Wenn du zusammen mit anderen Piloten fliegst, solltet ihr vorab ausmachen, wer welchen Kanal verwendet und das auch **vor** dem Abheben verifizieren.

Beim Anschalten des Videosenders kann dieser auch auf anderen als den ausgewählten Frequenzen senden. Vermeide es daher, deinen Videosender in unmittelbarer Nähe von anderen Piloten einzuschalten.

![FPV Channel Übersicht](https://oscarliang.com/ctt/uploads/2021/03/5.8ghz-fpv-channels-chart-diagram-frequency-analog-digital-dji-sharkbyte-05-21.jpg)

Nicht alle einstellbaren Frequenzen sind in Europa legal. Welche legal geflogen werden dürfen, kannst der Grafik oben entnehmen.

#### 6.1.2. Sendeleistung

Die Sendeleistung wird üblicherweise in Milliwatt (mw) angegeben.

In Europa beträgt die maximal zulässige Sendeleistung 25mw. Es gibt auch Videosender, die ein vielfaches davon unterstützen, die meisten erhältlichen Sender unterstützen bis zu 200, 400, 600 oder 1000mw. Mehr Leistung heißt mehr Reichweite und besseres Bild auf größere Distanz. Um die Reichweite zu verdoppeln, musst du die Leistung vervierfachen.

Die Sendeleistung lässt sich herunter regeln, meistens erfolgt das über die Steuersoftware der Drohne.

Es obliegt dem Piloten, die gesetzlich vorgeschriebene Leistung einzuhalten.

> *Anm. rumpelst1lzk1n*: Sind wir mal ehrlich: Die wenigsten halten sich daran, insbesondere dann, wenn sie alleine unterwegs sind.

Je höher die Sendeleistung, desto höher strahlst du auch in benachbarte Frequenzen. Bei FPV-Rennen wird daher üblicherweise 25mw vorgeschrieben, damit sich die Piloten nicht gegenseitig beeinträchtigen. Daran hält man sich auch!

Betreibe den Videosender **NIEMALS** ohne Antenne. Andernfalls kann die Energie aus dem Sender nicht in Funkwellen umgesetzt werden und der Sender stirbt den Hitzetod. Bleibende Schäden an der Hardware bis hin zum vollständigen Defekt nicht ausgeschlossen.

#### 6.1.3. Antennen

Eine gute Antenne kann mehr zu einem stabilen Bild beitragen, als einfach die Leistung des Senders zu erhöhen.

Für den Einstieg sind auf Brille und Drohne ungerichtete Antennen vom Typ "Lollipop", "Stubby" oder "Pagoda" zu bevorzugen.

Wenn du an deiner Brille mehrere Inputs für Antennen hast und dein Videosystem z.B. Diversity unterstützt, kann eine Kombination aus gerichteter und ungerichteter Antenne Sinn machen. Dabei ist die Annahme, dass du meistens in dem Bereich vor dir fliegst. Für diesen Bereich sorgt dann die gerichtete Antenne für und da die Patch für den besseren Empfang sorgt.

##### 6.1.3.1. Polarisation

Die Polarisation sagt etwas darüber aus, wie sich die Funkwellen aus der Antenne heraus ausbreiten bzw. auf den Empfang welcher Ausbreitungsform eine Antenne ausgelegt ist.

Dabei sind im FPV 3 unterschiedliche Polarisation üblich:

- Linear (oft auch als "Dipol" bezeichnet)
- RHCP (right hand circular polarized)
- LHCP (left hand circular polarized)

Wenn du auf einer Seite (z.B. des Senders) einen Dipol verwendest, ist es relativ egal, was du auf der anderen Seite (z.B. des Empfängers) hast. Linear und LHCP oder RHCP kann man relativ gut mischen.

Verwendest du auf beiden Seiten Antennen mir zirkularer Polarisation, so solltest du aufpassen, dass dies sowohl auf Sende- wie auch auf Empfangsseite der Fall ist. Also entweder nur `RHCP` oder nur `LHCP`.

##### 6.1.3.2. Ungerichtet / Omnidirektional

Ungerichtete Antennen senden und empfangen (vereinfacht gesagt) in jede Richtung gleichmäßig.

Auf deinem Copter willst eigentlich immer eine omnidirektionale Antenne, da du dich mit dem Teil meistens rundherum im Kreis drehst.

Bei sehr kleinen und leichten Drohnen (TinyWhoops, siehe unten) kann aus Gewichtsgründen auch eine lineare Antenne Sinn machen.

| linear | lollipop | stubby | pagoda |
| --- | --- | --- | --- |
| ![linear](https://cdn.shopify.com/s/files/1/1285/4651/products/rdq-ufl-dipole-1_1800x1800.jpg?v=1626819202) |![lollipop](https://inew.foxeer.com//upload/s/goods/201904/1555920368858975547.images.800x800.jpg) | ![Stubby](https://inew.foxeer.com//upload/s/goods/201904/1556076590073295056.images.800x800.jpg) | ![Pagoda](https://inew.foxeer.com//upload/s/goods/201711/1511447592626441098.images.800x800.jpg) |

##### 6.1.3.3. Gerichtet

Gerichtete Antennen erkaufen sich einen besseren Empfang (höheren Gain) dadurch, dass sie sich auf einen bestimmten Empfangsbereich relativ zur Antenne beschränken. In diesem Bereich ist der Empfang besser als bei einer ungerichteten Antenne. In allen anderen Bereichen ist der Empfang dafür schlechter.

Die gängigste Bauform ist eine sog. Patch-Antenne. Dabei handelt es sich meistens nur um eine Platine, welche die Antenne bildet und einen Anschluss für deine Brille.

Helical findet sich auch vereinzelt als Bauform, wird aber eher für Flüge über längere Distanzen über mehrere Kilometer Entfernung verwendet.

| Patch | Helical |
| --- | --- |
| ![Patch](https://www.team-blacksheep.com/img/gallery/A7300742.JPG) |![Helical](https://www.team-blacksheep.com/img/gallery/A7300958.JPG) |

##### 6.1.3.4. SMA & RP-SMA

Ein gängiger Anschluss für Antennen ist SMA. Dabei gibt es SMA und RP-SMA. Beide unterscheiden sich dadurch, ob der Stift an der Schraube oder and der Mutter sitzt.

| Typ | Schraube | Mutter |
| --- | --- | --- |
| SMA | ![SMA Schraube](https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sma-einbaubuchse.jpg/1920px-Sma-einbaubuchse.jpg) | ![SMA Mutter](https://upload.wikimedia.org/wikipedia/commons/9/9c/SMA_Stecker.jpg) |
| RP-SMA | ![RP-SMA Schraube](https://upload.wikimedia.org/wikipedia/commons/d/dd/RP-SMA_Buchse.jpg) | ![RP-SMA Mutter](https://upload.wikimedia.org/wikipedia/commons/3/3d/RP-SMA_Stecker.jpg) |

#### 6.1.4. OSD / On-Screen-Display

Oder auch: Alle Infos, die du über dein Fluggerät haben solltest. Das OSD zeigt dir diverse Daten aus deiner Flugsteuerung im Video deiner Brille an.

Häufig genutzte Werte sind z.B:

- Akku-Kapazität/-Spannung
- Empfangsqualität der Steuerungssignale
- **Warnmeldungen** (wann sollte ich landen, warum will mein Gerät nicht abheben, ...)
- GPS-Position
- Flugmodus

Vieles, was du anzeigen kannst, hängt davon ab, was deine Drohne verbaut hat und wie sie eingestellt ist.

Beispiele:

- Ohne GPS macht es keinen Sinn, sich die GPS Informationen anzeigen zu lassen.
- Ist die Strom-Messung am Flight-Controller falsch kalibriert, können dir die zugehörigen OSD-Elemente nicht automagisch richtige Werte liefern.
- Ist die minimale Zell-Spannung falsch eingestellt, werden dir Warnmeldungen über einen leeren Akku zu früh oder (schlimmer) zu spät ausgegeben.

Näheres dazu findest du normalerweise in der Anleitung deiner Software für die Flugsteuerung.

Die unterschiedlichen Videosysteme haben unterschiedliche Wege, wie sie dir Systeminformationen über dein Fluggerät anzeigen. Analog brennt das statisch ins Bild mit ein, bei digitalen Systemen wird das meistens über einen separaten Kanal übertragen und im Empfänger über das Bild gelegt. Das bringt den Vorteil mit sich, dass du bei manchen Systemen entscheiden kannst, ob du diese Informationen mit im DVR speichern willst oder eben nicht.

> *Anm. rumpelst1lzk1n*: Dieser Abschnitt ist einer besonderen Person gewidmet.

### 6.2. Analog

Bis etwa Mitte 2019 die einzige Möglichkeit für FPV. Es gibt dutzende verschiedene Kameras, Videosender und Brillen von mehreren Herstellern. Alles untereinander kompatibel.

Die mit großem Abstand günstigste Möglichkeit, in FPV einzusteigen. Wenn dein Budget auf die oben erwähnten 500€ beschränkt ist, ist das hier deine Kategorie.

> *Anm. rumpelst1lzk1n*: Auch, wenn du mit dem Fliegen anfangen willst aber auf die Veröffentlichung/Verfügbarkeit eines bestimmten (digitalen) Videosystems wartest, kannst du mit einem analogen Budget-Setup einsteigen, ohne allzu viel Geld zu verbrennen.

Brille 80€, Videosender 10€, Kamera 15€ wäre so ein Minimal-Setup.

Neben dem Geld ist auch noch das Gewicht ein Argument für einen Analog-Setup. Die leichtesten anlogen Videosender wiegen circa 1 Gramm.

#### 6.2.1. Videosender (Analog)

Es gibt eine Vielzahl unterschiedlicher Videosendern von unterschiedlichen Herstellern.

Üblich sind zwischen 200mw und 600mw maximaler Sendeleistung.
Es gibt noch deutlich stärkere Sender bis hoch zu 2000mw, diese sind aber erst für wirklich große Distanzen relevant.

Der Vorteil bei analogen Systemen ist, dass du die unterschiedlichen Videosender leicht gegeneinander austauschen kannst.

Besonders hervorzuheben sind die Videosender der Unify-Reihe von TBS und die ImmersionRC Tramp. Sie gelten mit als die Besten. Auf Rennen sind oft nur diese Analog-VTX zugelassen.

Für den Anfang tut es eigentlich jeder analoge VTX, aber spätestens wenn du mit anderen fliegst, willst du einen halbwegs guten. Manche No-Name-VTX haben ein sehr "unsauberes" Signal und streuen auch über den eigentlich eingestellten Kanal hinaus in andere Frequenzen.

Wenn das Budget wirklich knapp ist und du den billigsten VTX willst, achte zumindest darauf, dass dieser mit [OpenVTX](https://github.com/OpenVTx/OpenVTx) als Firmware beworben wird.

#### 6.2.2. Brille

Bei den Analog-Brillen gibt es die größte Varianz in Sachen Preis. Es gibt Brillen für ~40€ und für 600€.

Man unterscheidet bei den Brillen zwischen Box- und Binocular-Style.

| Box | Binocular |
| -------- | -------- |
| ![Box](https://img.eachine.com//eachine/products/original/201710/1508810670_22.JPG) | ![Binocular](./img/skyzone/skyzone_sky04X.png) |

##### 6.2.2.1. Box-Style

Box-Style ist einfach nur eine Box, die vor dem Gesicht hängt. Je nach Bauform mehr oder weniger unförmig. Die Box ein Display und ggf noch eine Linse.

Vorteile:

- günstiger
- leichter mit Brille nutzbar

In dieser Kategorie bekommst du ab ca ~80€ eine halbwegs taugliche Einsteigerbrille.

##### 6.2.2.2. Binocular-Style

Beim Binocular-Style hast du ein Display pro Auge. Brillen in dieser Bauform sind deutlich kompakter aber auch deutlich teurer.

Eine Brille für die Sehstärke passt da eher selten drunter. Dafür kannst du oft den Augenabstand und die Dioptrien in der Optik der Brille direkt einstellen.

Vorteile:

- kleiner/leichter
- Optik pro Auge anpassbar

In dieser Kategorie bekommst du ab ca ~350€ eine halbwegs taugliche Brille. Lass dich nicht täuschen, es gibt günstigere Brillen im Binocular-Style. Die sind Müll.

##### 6.2.2.3. Empfehlungen (Analog-Brillen)

Schau dich auf dem Gebrauchtmarkt um. Viele der unten genannten Modelle kriegst du auf eBay-Kleinanzeigen recht günstig gebraucht.

Wenn du mehr als 200€ für die Brille ausgibst, sollte diese über einen HDMI-Eingang verfügen um zukunftssicher für HD-Systeme zu sein (siehe unten).

###### 6.2.2.3.1. Eachine EV800D

Empfehlung des Hauses als absolute Einsteiger-Brille, für die es sich lohnt, Geld auszugeben.

- ca. 100€
- DVR
- Antennen-Diversity
- wird mit einer Patch-Antenne und einer omnidirektionalen Antenne geliefert
- integrierter Receiver mit Diversity, was in dieser Preisklasse nicht selbstverständlich ist

###### 6.2.2.3.2. Skyzone Cobra X (v2)

- ca. 250€
- gutes DVR, 60FPS (ab V2, V1 hat nur 30FPS DVR)
- Auflösung 720p
- gutes eingebautes Receiver-Modul
- HDMI-in

Es gibt noch günstigere Versionen dieser Brille unter der Marke Eachine. Diese haben Displays mit deutlich geringerer Auflösung.

###### 6.2.2.3.3. Fatshark Attitude V6

- ca 350-400€
- DVR
- Auflösung 720p
- integrierter Receiver
- HDMI-in

Fatshark konzentriert sich zunehmend auf den digitalen Markt. Wie viel Zukunft ihre analogen Produkte noch haben ist zur Zeit fraglich.

###### 6.2.2.3.4. Fatshark Dominator HDO 2

- ca. 600€
- DVR
- Auflösung 720p
- **KEIN** mitgelieferter Receiver
- HDMI-in
- OLED-Display (knackscharfe Farben)

Auf dem Gebrauchtmarkt gibt es öfter auch Pakete mit Receiver.

> *Anm. rumpelst1lzk1n*: Ich würde mir von Fatshark kein analoges System mehr neu kaufen ...

###### 6.2.2.3.5. Skyzone Sky04X (v2)

- ca. 600€
- gutes DVR, 60FPS (ab V2, V1 hat nur 30FPS DVR)
- Auflösung 720p
- gutes mitgeliefertes Receiver-Modul
- HDMI-in
- OLED-Display (knackscharfe Farben)

> *Anm. rumpelst1lzk1n*: In meiner Wahrnehmung die beste analoge Brille.

#### 6.2.3. Empfänger (Analog)

Manche Brillen kommen ohne Empfänger. Hier musst du diesen über einen Modulschacht nachrüsten.

Falls du dich für so eine Brille entschieden hast, hier eine Liste populärer Empfänger:

- TBS Fusion (siehe Artikel zu TBS Crossfire/TBS Tracer)
- Rapidfire
- FuriousFPV Achilles

Ein Empfänger sollte ähnlich wie eine Brille mit eingebautem Modul mindestens über 2 Antennen verfügen. Damit kann sich der Empfänger das beste Signal heraus picken (`Diversity`). Fortgeschrittene Module wie TBS Fusion oder Rapidfire können das Signal beider Antennen kombinieren und ein optimales Bildsignal herausrechnen.

### 6.3. DJI

DJI ist das Apple unter den FPV-Systemen. Funktioniert super, ist aber ein goldener Käfig. Kameras gibt es von 2 Herstellern. Es gibt 2 Brillen und 2 Videosender von DJI.

> *Anm. remove_me*: Das Bild ist dafür auch circa 10x geiler und kommt so in etwa bei 720p raus.

Das System hat einen sehr guten Reifegrad. Wenn du das Geld übrig, kein Problem mit einem goldenen Käfig ala Apple hast und zudem auch nur so zum Spaße (also keine Rennen) fliegen willst, gibt es keinen Grund, nicht auf das DJI-System zu setzen.
Viele fliegen dennoch Rennen mit dem DJI-System, wenn es vom Rennveranstalter erlaubt ist.

Es gibt Anzeichen dafür, dass DJI das System weiterentwickelt. Ob diese Weiterentwicklung mit der aktuell verfügbaren Hardware kompatibel sein wird, oder ob DJI ein neues System auf den Markt bringt, ist bisher noch nicht bekannt.

Zudem wurde die Firmware des Systems [inzwischen geknackt](https://github.com/fpv-wtf/margerine), was auf eine Weiterentwicklung des Systems durch die Community hoffen lässt.

#### 6.3.1. Brillen

Bei den Brillen unterscheidet man zwischen V1 und V2. V2 hat eine höhere Refreshrate der Bildschirme, 120Hz vs 144Hz. Darüber hinaus ist V2 nur relevant, wenn du die DJI-FPV-Drohne fliegen willst. Sonst tut es V1 auch.

Die DJI-FPV-Drohne ist eine glorifizierte Mavic-Drohne, die man besser nicht crasht. Wo du klassische FPV-Drohne gegen Bäume donnern und (falls überhaupt mal etwas kaputt geht) selbst reparieren kannst, ist die DJI-FPV-Drohne ein Plastikbomber, den du für teuer Geld zu DJI in die Reparatur schicken musst.

> *Anm. remove_me*: Scheiß auf die!

Für das FPV, auf das wir uns hier in diesem Guide konzentrieren ist es also egal, ob du die Brille v1 oder v2 kaufst.

| <img src="https://stormsend1.djicdn.com/tpc/uploads/photo/image/e36e694054678b94101837d14ea4fbb3@large.jpg" alt="DJI FPV Brille" width="500"/> |
| --- |
| DJI FPV Brille |

Das DVR der Brille kann man auch schon ganz gut zum Herumzeigen verwenden.

Es gibt auch Adapter, um ein Receiver-Modul (siehe oben) mit der DJI-Brille zu verwenden, wenn du neben Digital auch noch Analog fliegen möchtest.

#### 6.3.2. Videosender (DJI)

Als Videosender gibt es die AirUnit und die Vista Unit. Die AirUnit ist größer und schwerer, hat aber einen SD-Kartenslot, auf dem das Videomaterial zusätzlich zum DVR in der Brille aufgezeichnet werden kann. Leider funktioniert die Videoaufzeichnung auf der AirUnit so unzuverlässig, dass man es auch sein lassen kann. Die Vista Unit ist zu bevorzugen und passt auch leichter in die meisten Frames.

| AirUnit | Vista Unit |
| -------- | -------- |
| ![AirUnit](https://cdn.shopify.com/s/files/1/0036/3921/4169/products/DJIairunit1_2000x.jpg) | ![Vista Unit](https://cdn.shopify.com/s/files/1/0036/3921/4169/products/2_45ba11d1-79c7-441d-a81f-287561bb5f59_2000x.jpg) |

Der Videosender kann auch gleichzeitig als Funkempfänger für eine DJI-Funkfernsteuerung benutzt werden. Eigentlich willst du eine echte Funkfernsteuerung, siehe oben.

#### 6.3.3. Kamera (DJI)

Bei den verfügbaren Kameras gibt es vorrangig die Auswahl zwischen Kameras mit 60FPS und Kameras mit 120FPS. Du willst eine Kamera mit 120FPS.

- DJI Air Unit Cam
- Caddx Vista Unit Cam
- Caddx Nebula **Pro** (nano)

Alle andern Kameras sind irrelevant. Bestenfalls zählt die Caddx Polar noch als Notnagel.

![DJI Cams](./img/DJI/dji_cams.png)

### 6.4. HDZero (früher SharkByte)

HDZero (aka SharkByte) ist ein weiteres digitales FPV-System, das im Gegensatz zu DJI noch keine so weite Verbreitung genießt. Das Projekt wurde ursprünglich unter dem Namen SharkByte unter der Schirmherrschaft von FatShark entwickelt. Inzwischen hat sich die Firma Divimath hinter der Technologie aber von FatShark abgenabelt und neue Produkte entstehen unabhängig von FatShark.

Bei der Bildqualität ist DJI klar das bessere System.

Für die Nutzung von HDZero gibt es normal folgende Gründe:

- Du willst kein DJI aber trotzdem besseres Bild als Analog.
- Du bist Racer und willst Digital aber
  - das DJI-System wiegt dir zu viel.
  - die variable Latenz anderer digitaler Systeme stört dich.
- Du hast bereits eine gute Analog-Brille (mit HDMI-Eingang) und möchtest diese weiter verwenden.

Das System kann inzwischen (Mitte 2022) als relativ ausgereift betrachtet werden.

Es wird langsam von Drittherstellern adaptiert, die eigene Kameras und Video-Sender herausbringen. Im Gegensatz zu DJI will die Firma hinter HDZero die Technologie auch anderen Herstellern zugänglich machen, sodass diese eigene, untereinander kompatible Produkte auf den Markt bringen können. Ähnlich, wie es jetzt auch schon bei Analog der Fall ist.

#### 6.4.1. Videosender (HDZero)

Aktuell gibt es 3 relevante Videosender.

| Race V2 (20x20) | Whoop (25x25) | Freestyle (30x30) |
| -------- | -------- | -------- |
| ![HDZero Race v2 VTX](https://static.wixstatic.com/media/967e02_0e44ce977be64add96eeeed77389581e~mv2.png/v1/fill/w_204,h_201,al_c,usm_0.66_1.00_0.01,enc_auto/top1_tou.png) | ![TX5S.1](https://static.wixstatic.com/media/967e02_388c829d11164f7abd2429a625bdc93e~mv2.png/v1/fill/w_223,h_162,al_c,usm_0.66_1.00_0.01,enc_auto/%E5%8D%95%E6%9D%BF1.png) | ![HDZero 1Watt freestyle VTX](./img/divimath/HDzero_freestyle_vtx.png) |

Der Freestyle Sender hat bis zu einem Watt Sendeleistung. Alle anderen bis zu 200 Milliwatt. Bitte beachte, dass in Deutschland maximal 25 Milliwatt legal sind.

#### 6.4.2. Empfänger (HDZero)

Für HDZero gibt es einen Empfänger, der etwa 250€ kostet. Dieser setzt eine vorhandene FPV-Brille **mit HDMI-Eingang** voraus.

![HDZero VRX](img/divimath/hdzero-vrx-digital-hd-empfaenger-modul.png)

Eine neue Brille mit nativer HDZero-Unterstützung befindet sich aktuell in der Entwicklung, diese wird aber voraussichtlich nicht vor Ende 2022 verfügbar sein.

#### 6.4.3. Alte Hardware

Neben den oben erwähnten Empfängern und Sendern gibt es noch ältere Hardware. Diese wurde teilweise unter dem Label von Fatshark vermarktet. Seit Fatshark und HDZero getrennte Wege gehen, wird diese Hardware nicht mehr weiter produziert.

Zu der betreffenden Hardware zählen Videosender in teilweise etwas unüblichen Formfaktoren.

Daneben gibt es noch Legacy-Empfangs-Hardware. Eine Brille mit eingebautem HDZero-Modul und ein separates Modul. Das Modul wurde nahtlos durch den oben bereits genannten Empfänger ersetzt. Für die Brille gibt es bisher noch keine Alternative.

| Fatshark Scout HD | SharkByte Empfänger |
| -------- | -------- |
| ![Fatshark Scout HD](./img/fatshark/fatshark_scout_hd.jpg) | ![Shark Byte RX5.1](./img/fatshark/fatshark_sharkbyte_vrx.jpg) |

### 6.5. Walksnail

Seit Anfang Juli ist ein neues System von Fatshark/Walksnail erhältlich.

Das System verhält sich ähnlich wie DJI, ist aber nicht damit kompatibel.

Um das Vorgehen der Veröffentlichung gab es größere Kontroversen:

- Seitens der offiziellen Hersteller (Fatshark) wurde viel Geheimniskrämerei darum betreiben, wer hinter dem System steht.
- Viele Informationen sind aufgrund von unprofessionellen bzw. nicht vorhandenen Absprachen mit Händlern und Herstellern trotzdem sehr schnell ans Licht gekommen.
- Die Community wurde mit Anmerkungen, dass sie diverse Infos nichts angingen, verärgert.

> *Anm. Drew "Le Drib" Camden*: You don't get to know.

- Der Ursprung der Hardware ist nicht klar bzw. gibt es Hinweise darauf, dass dieser aktiv verschleiert werden sollte.
- Das System wurde mit unfertiger Software ausgeliefert.

> *Anm. rumpelst1lzk1n*: Einem Anfänger würde ich noch davon abraten. Das System sollte sich mindestens 1-2 Monate auf dem Markt befunden haben, einmal durch die Hände der größeren Reviewer gegangen sein und der Hersteller sollte das erste Community-Feedback in die Firmware haben einfließen lassen.

Die Hardware-Auswahl ist überschaubar, es gibt:

- 2 Brillen
- einen VTX (Formfaktor 25,6x25,6)
- 2 Kameras (Formfaktor micro und nano)

|Sender|Brille (Walksnail)| Brille (Fatshark)|
|---|---|---|
|![Walksnail VTX](./img/walksnail/avatar_vtx_micro_cam.webp)|![Walksnail goggle](./img/walksnail/avatar_goggles.webp)|![Fatshark goggle](./img/fatshark/fatshark_dominator.webp)|

**WENN** du dich für das System entscheiden solltest, nimm die Walksnail-Brille. Diese kann direkt über die üblichen Flug-Akkus betrieben werden.

### 6.6. HD Aufnahmen

Wer wirklich gutes Bildmaterial von seinem Flug haben will, packt eine Action-Cam auf die Drohne.

Am verbreitetsten sind die unterschiedlichen Modelle der GoPro Hero-Reihe.

Andere populäre HD-Kameras sind:

- GoPro Session
- Insta360 Go(2)
- Runcam Orange

### 6.7. unter ferner liefen

#### 6.7.1. Orqa HD

Orqa hat auf der CES 2022 ein eigenes HD-Videosystem vorgestellt. Viel ist darüber noch nicht bekannt.

Der Videoempfänger soll wohl ein Modul ähnlich dem von HDZero werden. An FPV-Brillen kann dieser dann entweder mit HDMI oder einer proprietären Schnittstelle angeschlossen werden.

Zum aktuellen Zeitpunkt (Anfang 2022) ist davon auszugehen, dass es wohl noch mindestens 1-2 Jahre dauern wird, bis die ersten Produkte tatsächlich auf den Markt kommen.

#### 6.7.2. OpenHD

[OpenHD](https://github.com/OpenHD/Open.HD) ist ein OpenSource-Projekt, in dem handelsübliche WLAN-Hardware zur Bildübertragung genutzt wird. Das Projekt wird aktiv weiter entwickelt. Für den FPV-Flug mit Drohne ist diese Art der Videoübertragung leider (noch) nicht zu gebrauchen, da die Latenz zu hoch ist.

## 7. Flugstile

Bevor es um die tatsächliche Drohne geht, solltest du dir bewusst machen, was du damit überhaupt machen willst.

### 7.1. Cinematic

Als Cinematic bezeichnet man allgemein einen entspannten Flugstil ohne große akrobatische Einlagen. Epische Flüge über Berge, Verfolgungsjagden von Autos, irgendwas anderes kinoreif in Szene setzen.

Üblicherweise sind entsprechende Videos auf Youtube die Einstiegsdroge ins FPV-Hobby.

### 7.2. Race

Mit FPV-Drohnen werden Rennen ausgetragen. Mehrere Piloten fliegen gegeneinander um die Wette durch einen Hindernisparcours. Dieser besteht oft aus Slaloms und Toren, die es in einer bestimmten Abfolge zu durchfliegen gilt.
Da sich die Drohne aber im dreidimensionalen Raum bewegen kann, findest du hier auch Hindernisse, die bei Rennen mit erdgebundenen Fahrzeugen eher unüblich sind.

> *Anm. rumpelst1lzk1n*: Außer vielleicht das Rennen wird von Red Bull veranstaltet.

Tore, Flaggen und andere Hindernisse bestehen häufig aus buntem Zeltstoff und Zeltstangen oder Schwimmnudeln. Hauptsache gut erkennbar. Es gibt fertige Hindernisse zu kaufen, man kann aber auch vieles selbst bauen.

Zeltstangen und -Stoff bieten sich an, da diese auch Crashes mit einer Drohne überleben. Schwimmnudeln eignen sich ebenfalls zum Bauen von Hindernissen.

Es gibt ganze Ligen, die bekannteste ist die Drone Racing League.

Zum Üben werden die Strecken auch oft in Simulatoren (siehe oben) nachgebaut.

> *Anm. remove_me*: Liftoff zählt als Schwanzvergleich.

Die besten Racer sind so schnell unterwegs, dass es dem ungeübten Auge schwer fällt, überhaupt mit zu kommen.

### 7.3. Freestyle

Fliegen um des Fliegens Willen. Du fliegst irgendwelche akrobatischen Kunststückchen, Loopings, durch Lost Places (Bandos).

Egal ob du entspannt durch die Gegend fliegst, hektisch Saltos und Rollen aneinander gereiht werden oder du mit einem Affenzahn einen Looping durch eine enge Lücke fliegst. Es gibt mehrere Stilrichtungen des Freestyles.

| Stilrichtung | Merkmale |
| -------- | -------- |
| FlippyFloppy | Schnelle Richtungswechsel, viele Rollen und Überschläge |
| Flow | Sehr gleichmäßiger Flugstil, Tendenz zum Cinematic |
| Juicy | Sehr gleichmäßiger Flugstil mit kurzen, scharfen Manövern, die sanft ausklingen |
| Sbang | Scharfe Manöver, die häufig dazu führen, dass die zweite Hälfte des Tricks aussieht, als hätte man die erste Hälfte rückwärts abgespielt |

### 7.4. Longrange

Fliegen um des Fliegens Willen Teil 2. Du willst weg. Weit weg. Kilometer weit weg. Und dabei noch ein ein- bis zweitausend Höhenmeter überwinden.

Das ist Longrange.

Wenn eine gute Kamera an Bord ist, entstehen dabei oft beeindruckende Landschaftsaufnahmen.

## 8. Drohne / Quad / Copter

Hier geht es um unser liebstes unbemanntes Fluggerät. Es gibt viele Nahmen dafür, Drohne, Quad, Quadrocopter, Copter, ...

> *Anm. Cpt. Sum Ting Wong*: Rumpel, warum les ich da so oft Drohne in deinem Guide?

Technisch betrachtet sind die Geräte als Multicopter oder mit 4 Propellern entsprechend genauer als Quadrocopter klassifiziert. Häufig ist der Begriff "Drohne" bei nicht im Hobby involvierten Personen negativ besetzt. Daher fällt es oft leichter, wenn man von einem "Quad" oder einem "Copter" spricht.

Entsprechend werden wir das ab diesem Abschnitt weitestgehend auch so handhaben.

### 8.1. Klassen

In diesem Abschnitt geht es um gängige Klassen von Coptern. Diese dienen im Gespräch unter Piloten als erster Anhaltspunkt, um was für eine Größe von Coptern es überhaupt geht.

#### 8.1.1. TinyWhoop

Klein und leicht. Sehr leicht. Inklusive Akku 30-80 Gramm. Verfügt meistens über Propellerschutz. Wer denkt, es handelt sich um Spielzeug hat noch kein Whoop-Rennen gesehen.

Der Rahmen besteht üblicherweise aus Kunststoff (Spritzdruckguss) und hält schon einiges aus. Bruchstellen kann man kleben. Bestell aber besser trotzdem gleich einige Ersatzframes mit, wenn du dir einen TinyWhoop holst.

Ideal für Innen oder kleinere Gärten.

Wenn du im Herbst/Winter überlegst, mit FPV anzufangen, ist ein TinyWhoop eine echte Überlegung wert, da du damit auch bei nasskaltem Wetter innen fliegen kannst. Eine gewisse Toleranz tierischer und menschlicher Mitbewohner für das hochfrequente Sirren vorausgesetzt.

#### 8.1.2. Cinewhoop

Eher behäbig. Für die verwendeten Propeller relativ große Motoren. Verfügt über einen Propellerschutz, der zudem oft mit Schaumstoff gepolstert ist.

Darauf ausgelegt, in der näheren Umgebung von Menschen geflogen zu werden und dabei eine Action-Cam zu tragen.

#### 8.1.3. Toothpick

Für die Propellergröße relativ geringes Gewicht und eine filigrane Bauweise.

Die Propellergröße kann von 2.5" bis 5" reichen. Gerade die Größeren verzeihen harte Abstürze auf Beton o.Ä. nicht. Aber super um einfach irgendwo entspannt durch die Natur zu gondeln.

#### 8.1.4. 3 Zoll

Meistens ein Frame in klassischer Bauform. Der Name bezieht sich auf die Propellergröße.

Beim 3 Zoll Copter handelt es sich um den kleinen Bruder des 5 Zoll (siehe unten). Das Gewicht eines üblichen 3" Quads liegt irgendwo zwischen 200 und 300 Gramm.

Deutlich unauffälliger als ein 5". Du hast einen größeren Garten oder willst im Park fliegen ohne den Leuten zu sehr Angst einzujagen? Dann bist du hier richtig. Unterschätze den kleinen aber nicht. Auch die kleinen Propeller können oberflächliche Fleischwunden verursachen.

#### 8.1.5. 5 Zoll

**DER** Standard. Das Gewicht eines üblichen 5" Quads liegt irgendwo zwischen 500 und 700 Gramm. Die Höchstgeschwindigkeit liegt bei circa 120km/h.

Entsprechende Vorsicht solltest du walten lassen. Die Propeller werden dir nicht gleich einen Finger absäbeln, aber sie werden es nachhaltig versuchen, wenn du dumm genug bist, in sie zu greifen. Schnittwunden und Prellungen inbegriffen.

90% der Videos, die du auf Youtube findest, entstanden mit einem 5" Copter, da diese leicht eine GoPro tragen kann. Für diese Größe findest du die meisten Motoren, Propeller, etc.

#### 8.1.6. 7 Zoll

Wenn 3" der kleine Bruder ist, so ist 7" der große Bruder. Hier wird die Teileauswahl merklich kleiner.

Unauffällig ist anders. Wenn so ein Gerät auf dich zu kommt, geh in Deckung. Und wenn du es steuerst, bleib verdammt nochmal weg von den Leuten.

Das Gerät erreicht höhere Geschwindigkeiten als ein 5" und tut sich bei Verfolgungsjagden mit Autos z.B. deutlich leichter, die Geschwindigkeit mit zu halten.

Auch kann ein Copter mit 7"-Propellern deutlich mehr Gewicht zusätzlich tragen wie z.B. ein schweres Akku-Pack um mehrere Kilometer weit auf Berge zu fliegen.

#### 8.1.7. Cinelifter

Der große Bruder des Cinewhoop. Propeller mit 6-8" Durchmesser. Meistens 8 davon. Ja, 8 Stück.

Das Gerät trägt professionelle Filmkameras im Wert eines Kleinwagens.

#### 8.1.8. X-Class

> *Anm. rumpelst1lzk1n*: Einer übertreibt immer...

Propellergröße zwischen 11 und 13 Zoll. Ähnlich wie Cinelifter definitiv nichts für Neueinsteiger ins Hobby.

#### 8.1.9. sonst noch was?

Alle Klassen verstehen sich normal erstmal als Quadrocopter mit 4 Motoren. Darüber hinaus gibt es noch weitere Bauformen, damit solltest du dich aber erst beschäftigen, wenn du mit einem normalen Quadrocopter vertraut bist.

### 8.2. Komponenten

Wenn du dein Fluggerät reparieren, umbauen oder komplett selbst bauen möchtest, solltest du darüber Bescheid wissen, aus welchen Bauteilen diese überhaupt besteht.

#### 8.2.1. Rahmen / Frame

Der Frame besteht aus in Epoxidharz eingelegten Kohlenstofffasern (CFK, ugs. "Karbon"). Wie ein Tuning-Bauteil beim Auto, leicht aber trotzdem sehr stabil. Die Kohlenstofffasern kommen in Platten, aus denen die einzelnen Teile des Frames geschnitten werden.

Die meisten Frames bestehen aus 4 Armen, einer Top-Plate, einer Bottom-Plate und ggf. noch einem Gegenstück, welches die Arme gegen die Bottom-Plate fixiert. Dazu kommt noch eine Halterung für die Kamera, die entweder aus CFK oder Kunststoff (meistens TPU) gefertigt sind.
Top- und Bottom-Plate sind mittels Standoffs (kleine Stangen mit Innengewinde) verbunden.

Weitere Zusatzkomponenten (z.B. Antennenhalterungen) bekommt man als 3D gedruckten Teile. Teilweise mitgeliefert, teilweise stellen die Hersteller die Dateien zum selbst drucken online.

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

Die Liste erhebt keinen Anspruch auf Vollständigkeit.

> *Anm. rumpelst1lzk1n*: Zudem gibt es im Preissegment über den Premium-Herstellern noch die Exoten. Diese können nochmal deutlich mehr kosten, weil sie in kleineren Stückzahlen gefertigt werden oder sehr spezielle Eigenschaften/Formen aufweisen. Insbesondere z.B. Cinelifter. Bleib für den Einstieg bei bewährtem.

Alle oben genannten Hersteller fertigen **eigene** Designs. Insbesondere auf Banggood und AliExpress gibt oft auch Klone der Premium-Hersteller in mehr oder weniger guter Qualität und mit mehr oder weniger gutem Support.

Bei den Mittelklasse- und Premium-Herstellern kann man davon ausgehen, dass eigentlich jedes Teil des Frames bis hin zu den Schrauben auch separat als Ersatzteil erhältlich ist.

Bei einem Premium-Hersteller kann man zudem erwarten, dass die Garantie auch Crashes abdeckt und man z.B. kostenlos Ersatzarme bekommt.

Bei den Klonen kann es passieren, dass bei der Lieferung Teile fehlen. Sei kein Arsch, kauf keine Klone. Zudem ist auch CFK nicht gleich CFK und minderwertige Qualität wirkt sich negativ auf das Flugverhalten aus.

Wenn du keine 50€ für einen Mittelklasse-5"-Frame übrig hast, hol dir einen "TBS Source One". Die Schnittmuster dieses Frames sind hochoffiziell OpenSource und frei erhältlich. Jeder kann (und darf) den Frame herstellen.

#### 8.2.2. Flugsteuerung / Flight Controller / FC

Der Flight Controller ist ein Mikrocontroller der die unterschiedlichen elektronischen Komponenten deines Quads zusammenbringt.

Das Gyroskop liefert die Lageninformationen, die Steuersoftware berechnet, wie schnell welcher Motor drehen muss, damit der Copter in die von dir über die Fernsteuerung vorgegebene Fluglage kommt.

Die mit Abstand häufigste Steuersoftware ist Betaflight. Es gibt noch andere Software, der Themenkomplex hat aber weiter unten ein eigenes Kapitel.

Das Herzstück der Flugsteuerung ist der Prozessor. Dabei handelt es sich normalerweise um einen STM32-Chip des Herstellers STMicroelectronics. Den Chip gibt es in unterschiedlichen Ausführungen, üblicherweise kommen Prozessoren vom Typ F4, F7 oder (neuerdings) H7 zum Einsatz. Diese unterscheiden sich in Geschwindigkeit und verfügbaren Anschlüssen. F4-Prozessoren sind inzwischen als Budget-Variante zu sehen.

F3 wurde ebenfalls verwendet, ist aber lange überholt. Neuere Versionen von Betaflight setzen mindestens F4 voraus. Lass dir keine alte Hardware mit F3-Prozessoren aufschwatzen.

Es gibt auch Flight Controller mit integriertem ESC, hier spricht man von einem "All in One" (AIO).

#### 8.2.3. Empfänger / Receiver / RX

Das Gegenstück zu deiner Funkfernsteuerung (siehe oben). Nimmt die Steuersignale entgegen, wandelt dabei Funkwellen in elektrische Signale um und schickt diese an den Flight Controller.

#### 8.2.4. Videosender / VTX

Das Gegenstück zu deiner FPV-Brille (siehe oben). Der Videosender ist üblicherweise an den Flight Controller mit angeschlossen. Dies ermöglicht es, dass Flugdaten (Akkukapazität, Flugmodus, GPS Koordinaten) im Bild dargestellt werden.

Bei analogem Video sind diese untrennbar in das Bild eingebrannt. Bei digitaler Bildübertragung werden die Flugdaten normalerweise separat übertragen. Damit kann das Bild auch ohne Flugdaten in der Brille gespeichert werden.

#### 8.2.5. Kamera

Die Kamera wird bei digitalen Systemen direkt an den Videosender angeschlossen. Dieser übernimmt dann die Übertragung des Bildes sowie der Flugdaten.

Bei analogen Systemen kannst du die Kamera zwar auch direkt an den Videosender anschließen, dann hast du aber normalerweise keine Flugdaten. Es gibt Ausnahmen, bei denen die Videosender begrenzt Informationen auch selbst im Bild anzeigen können. Normalerweise schleifst du aber das Bild der Kamera erst einmal durch den Flight Controller, damit dieser die Flugdaten ins Bild einfügt. Erst dann wird die Kombination aus Videobild und Flugdaten an den VTX weiter gereicht.

#### 8.2.6. Motorsteuerung / Electronic Speed Controller / ESC

Die Motorsteuerung erfolgt über den ESC. Er ist zudem die zentrale Stromversorgung des Copters, der Akku hängt direkt am ESC.

Bis vor einigen Jahren war diese Komponente noch aufgeteilt in einen Chip für die Stromverteilung (Power Distribution Board, PDB) sowie 4 einzelne ESCs pro Motor.

Heutzutage besteht der ESC üblicherweise nur noch aus einem Chip (All In One ESC, AIO-ESC) oder ist zusammen mit dem Flightcontroller auf dem gleichen Board.

Als Firmware kommt auf der Motorsteuerung meistens BLHeli_S oder BLHeli_32 zum Einsatz. Auch, wenn die ESCs alle auf einem Chip sind, hast du technisch betrachtet mehrere unabhängige ESCs, die du einzeln flashen und konfigurieren musst.

BLHeli_32 gilt als höherwertiger. BLHeli_S hat in 2020 und 2021 aber einige Updates bzw. alternative Firmwares (insbesondere "Bluejay") bekommen, welche das die annähernd gleichen Fähigkeiten im Vergleich zu BLHeli_32 bieten.

Die Motorsteuerung gibt die Drehrichtung der Motoren vor. Die 2 jeweils diagonal gelegenen Motoren sollten sich in die gleiche Richtung drehen. Dabei unterscheidet man zwischen "props in" und "props out".

| props in | props out |
| -------- | -------- |
| ![props in](https://raw.githubusercontent.com/betaflight/betaflight-configurator/master/resources/motor_order/quad_x_1234.svg) | ![props out](https://raw.githubusercontent.com/betaflight/betaflight-configurator/master/resources/motor_order/quad_x_1234_reversed.svg) |

Welche der beiden Varianten besser ist, darüber scheiden sich die Geister.

#### 8.2.7. Motoren

Der Antrieb unseres Copters. Hier gibt es einige Zahlen, die man kennen sollte, wenn man sich seinen Copter selbst bauen oder zumindest sinnvolle Fragen zu dem Thema stellen möchte.

##### 8.2.7.1. Motor-Größe

1408, 2204, 2206, alle diese Zahlen bezeichnen Motoren in unterschiedlicher Größe. Die ersten beiden Zahlen geben den Durchmesser, die zweiten zwei Zahlen die Höhe des Motors an. Es gibt auch Exoten, die mit Komma-Werten arbeiten. Motoren, denen namhafte Piloten ihren Stempel verleihen, kommen manchmal auch ganz ohne Größenangabe aus.

Durch die unterschiedliche Größe ergeben sich unterschiedliche Laufeigenschaften. Flache, breite Motoren bleiben kühler, sind aber träger im Beschleunigen und Abbremsen. Hohe schmale Motoren werden wärmer, reagieren aber schneller. Die Leistungsfähigkeit eines Motors ergibt sich aus seinem Volumen. Ein hoher schmaler Motor kann die gleiche Leistung bringen, wie ein flacher breiter oder ein Motor, der sich irgendwo in der Mitte dazwischen befindet.

Die Motor-Größe wird üblicherweise an der Größe der Propeller fest gemacht. Für die üblichen 5"-Quads haben sich die Größen 2207 und 2306 etabliert.

Nachfolgende Grafik gibt eine Empfehlung, welche Motoren sich für welche Propellergröße eignen.
![motor volume vs prop diameter by Chris Rosser](img/chris_rosser_motor_size_vs_prop_diameter.png)

##### 8.2.7.2. KV

KV bezeichnet die sogenannte "Drehzahlkonstante". Damit sind die Umdrehungen pro Minute gemeint, die ein Motor pro Volt Akkuspannung ohne Last (also ohne Propeller) erreichen kann. Ein 10 KV-Motor erreicht mit 10 Volt Spannung 100 Umdrehungen pro Minute. Entsprechend gibt es Motoren, die für eine höhere oder niedrigere Akkuspannung ausgelegt sind.

Für 5"-Copter haben sich Werte zwischen 1700 und 2500 KV für Akkus mit 14,8 bis 22,4 Volt etabliert. Die Motoren haben in ihren Beschreibungen häufig auch, für wie viele Akkuzellen sie ausgelegt sind. Dazu später mehr.

Die KV werden über Anzahlen an Wicklungen um den Stator erreicht. Häufig wirst du die äußerlich identischen Motoren finden, die mit einer unterschiedlichen Anzahl an KV angeboten werden.

Vermeide eine zu hohe KV bei zu viel Spannung, da sonst die Geschwindigkeit an den Spitzen der Propeller größer als die Schallgeschwindigkeit wird (kein Witz!). Das willst du vermeiden.

Technisch betrachtet ist die Einheit "KV" genau anders herum zu betrachten, wie es bei Coptern üblich ist.
Ein Elektromotor, den du von Hand drehst, wirkt wie ein Generator und erzeugt Strom. KV bezeichnet die Anzahl der Umdrehungen pro Minute, ab welcher der Motor 1 Volt Spannung ausgibt.

##### 8.2.7.3. Stator und Magneten

![Motor Aufbau](https://oscarliang.com/ctt/uploads/2017/12/mini-quad-brushless-motor-anatomy-bell-magnet-bearing-stator-winding-shaft-diagram.jpg)

#### 8.2.8. Propeller

Die Propeller sind mit das markanteste Merkmal eines Quads. Ihre Größe wird in angloamerikanischen Zoll (1" = 2,54 cm) angegeben, wobei damit der Durchmesser bezeichnet wird.

Die Propellergröße ist für viele Piloten der einfachste Anhaltspunkt, wie groß der Multicopter ist, über die gesprochen wird.

##### 8.2.8.1. Kennzahlen

Neben dem Durchmesser sind die Anzahl der Propellerblätter sowie deren Steigung die Kennzahlen für einen Propeller.

Die Anzahl der Blätter eines Motors ist offensichtlich. 2-Blatt gelten als besonders effizient, 3 Blatt sind der Standard als Kompromiss aus Effizienz und Leistung. Propeller mit mehr Blättern findet man meistens bei CineWhoops, da diese eine größere Laufruhe versprechen.

Durchmesser und Steigung (Pitch) sind weniger offensichtlich. Ähnlich wie der Durchmesser und die Höhe bei Motoren, wird dies meistens in einer kombinierten Zahl angegeben. Wie bei Motoren geben die ersten beiden Zahlen den Durchmesser des Propellers an, die zweiten 2 Zahlen die Steigung. Ein 5045-Propeller hat demnach 5 Zoll Durchmesser und 45 Grad Steigung. Eine höhere Steigung führt bei Drehung des Propellers zu mehr bewegter Luft und damit zu einer höheren Geschwindigkeit. Allerdings auch zu einer größeren Leistungsaufnahme des Motors, der den Propeller bewegen muss.

##### 8.2.8.2. Drehrichtung

Ein Propellerset besteht normalerweise aus 4 Propellern. 2 davon sind für die Drehung im Uhrzeigersinn (CW, clockwise), 2 für die Drehung gegen den Uhrzeiger sind (CCW, counter clockwise).

Die Propeller müssen auf der Drohne so montiert sein, dass sich die 2 Diagonal befindlichen in die gleiche Richtung drehen. Siehe dazu die Grafik im Abschnitt `Motorsteuerung / Electronic Speed Controller / ESC`.

#### 8.2.9. sonstige Komponenten

##### 8.2.9.1. XT30 / XT60 / XT90

Der am weitesten verbreitete Anschlusstyp für die im FPV verwendeten Akkus.

Es gibt ihn in 3 Größen. Die Zahl im Namen gibt zudem die Stromstärke (in Ampere) an, für die der Anschluss spezifiziert wurde.

Es handelt sich dabei um den Wert für die dauerhafte Belastung. Die kurzzeitige Spitzenbelastung beträgt leicht das doppelte.

Da wir beim FPV-Flug eher kurze Spitzenlast haben, musst du dir keine Sorgen machen, wenn dir dein Copter anzeigt, dass sie gerade 120 Ampere über einen XT60 zieht.

Bei Coptern bis ca 250-300 Gramm sind XT30 gebräuchlich. Auf den Standard 5-Zoll Coptern ist XT60 üblich.

Für TinyWhoops gibt es zudem noch Akkus mit kleineren Anschlüssen. JST-PH2 ist wohl der geläufigste Typ.

##### 8.2.9.2. Kondensator

Es wir empfohlen, einen Kondensator mit an die Batterie-Pads des ESC zu löten. Dieser gleicht Schwankungen bei der Spannungsversorgung aus, sorgt bei analoger Video-Übertragung für ein saubereres Bild und kann dabei helfen, die Elektronik-Komponenten vor Schaden zu schützen.

##### 8.2.9.3. GPS

GPS ist für den Anfang als optional zu betrachten.

Es ermöglicht abhängig von der Flugsteuersoftware z.B. die automatische Rückkehr des Fluggeräts zum Startpunkt (RTH / Return To Home).

##### 8.2.9.4. Magnetometer / Kompass

Ebenso wie GPS als optional zu betrachten.

Wird von einiger Flugsteuersoftware (siehe unten) benötigt, um die Ausrichtung des Copters zu erkennen. iNAV und Ardupilot schalten beispielsweise diverse GPS-Funktionen wie Rücker zum Startpunkt erst frei, wenn GPS UND Kompass vorhanden sind.

##### 8.2.9.5. Heckspoiler

Vielleicht gerätst du in die Verlockung, optische Anbauteile an dem Copter zu befestigen, wie z.B. einen Heckspoiler. Das Bauteil bringt unnötigen Luftwiderstand und Vibrationen und beeinflusst das Flugverhalten entsprechend negativ. **LASS ES SEIN!** Außer du machst es for the lulz.

## 9. Software (Funkfernsteuerung)

In diesem Abschnitt schauen wir uns die Software deiner Funkfernsteuerung näher an.

### 9.1. OpenTX

Eine Open-Source-Software für Funkfernsteuerungen. Alle oben empfohlenen Funkfernsteuerungen laufen mit dieser Software.

Initiiert wurde OpenTX von der Firma FrSky. Allerdings wird das Projekt inzwischen weitestgehend unabhängig von diesem Hersteller weiterentwickelt. FrSky verwendet auf neueren Funken kein OpenTX mehr.

#### 9.1.1. OpenTX Companion

Die Software "OpenTX Companion" wird auf deinem Rechner installiert. Mit dieser kannst du deine Funke aktualisieren, Einstellungen der Funke direkt am Rechner vornehmen und ein Backup dieser anfertigen.

Das Einstellen am Rechner ist insbesondere für Funken ohne oder mit nur sehr kleinem Display praktisch.

### 9.2. EdgeTX

EdgeTX ist eine Abspaltung von OpenTX mit dem Ziel, die Entwicklung schneller voranzutreiben.

### 9.3. FreedomTX

Ebenfalls eine Abspaltung von OpenTX, die von TBS speziell auf ihre eigenen Funken Tango (2) und Mambo angepasst wurde. Die Anpassungen sollen eigentlich auch in OpenTX / EdgeTX zurück fließen. Längerfristiges Ziel von TBS ist es, OpenTX bzw. EdgeTX direkt zu nutzen.

## 10. Software (Flight Controller)

Es gibt mehrere an unterschiedlicher Steuersoftware für Flight Controller. Teilweise OpenSource, teilweise proprietär. Manche Software unterstützt auch andere Gerätschaften als die im FPV üblichen Quadrocopter, wir fokussieren uns hier aber auf unsere FPV-Quads.

Neben der nachfolgend genannten Software gibt es noch weitere meistens proprietäre Software, diese hat aber einen eher zwiespältigen Ruf.

In den allermeisten Fällen kommen Flight Controller (einzeln und in fertigen Coptern) bereits mit einer Software darauf. Welche das ist, erfährst du vom Hersteller.

Um weitere Sachen an der Software einstellen zu können oder um Aktualisierungen durchführen zu können, brauchst du allerdings die dazugehörige Software (+ Treiber) auf dem PC.

In manchen Fällen kannst du auch zwischen unterschiedlicher Software hin und her wechseln. Ob eine bestimmte Software deinen Flight Controller unterstützt, findest du meistens auf der Seite der Software.

Bevor du mit der Software herum spielst, stell sicher, dass du vorher ein Backup der Einstellungen deines Copters gemacht hast.

> *Anm. rumpelst1lzk1n*: Kein Backup, kein Mitleid.

### 10.1. Betaflight

Mit **Abstand** die populärste Software für Flight Controller.

Die Begleitsoftware zum Anpassen der Konfiguration und Flashen von Firmware auf den Flightcontroller nennt sich *Betaflight Configurator*.

Als Einsteiger wirst du sehr wahrscheindlich als erstes mit dieser Firmware Kontakt haben. Die meisten fertigen Copter nutzen sie. Auch die meisten gängigen Flight Controller kommen mit dieser Software vorab installiert.

Der Betaflight Configurator liefert umfangreiche Hilfestellungen, z.B. welche Treiber du für das Flashen von neuer Firmware benötigst.

> *Anm. rumpelst1lzk1n*: READ THE FUCKING MANUAL!

### 10.2. KISS & FETtec

Die einzigen beiden nennenswerten proprietären Repräsentanten von Flight Controller Software. Geht mit proprietärer Hardware einher, die oft auch etwas teurer ist als vergleichbare BetaFlight Hardware. Hat aber allgemein einen guten Ruf und soll sehr einfach zu konfigurieren sein.

> *Anm. Puffi*: KISS/FETTec is super!!11!

> *Anm. Panda.FPV*: Bei Puffi muss man immer aufpassen. Der versucht einen auf die dunkle Seite zu ziehen. Ruckzuck fliegst du KISS wenn du nicht aufpasst.

Sowohl KISS als auch FETtec haben den gleichen Ursprung. Teilweise waren die gleichen Entwickler sowohl an der Firmware von KISS als auch an der von FETtec beteiligt. Zwar wurden viele Komponenten inzwischen unabhängig voneinander neu entwickelt, durch den gemeinsamen Ursprung gibt es aber dennoch Ähnlichkeiten.

### 10.3. Emuflight

Ähnlich Betaflight aber mehr auf TinyWhoops ausgelegt.

Die Begleitsoftware zum Flashen von Firmware auf den Flightcontroller und die Konfiguration nennt sich *Emuflight Configurator*.

### 10.4. iNAV

Ähnlich Betaflight aber mit mehr Fokus auf Navigations-Features, wie das Halten der Position, automatische Rückkehr zum Startort, Abfliegen von Wegpunkten, ...

Die Begleitsoftware zum Flashen von Firmware auf den Flightcontroller und die Konfiguration nennt sich *iNAV Configurator*.

### 10.5. Ardupilot

Wie iNAV nur noch umfangreicher auf den autonomen Betrieb des Geräts ausgerichtet. Unterstützt neben diversen Fluggeräten auch U-Boote, Rover, ...

Als Konfigurationssoftware kommt meistens *Mission Planer* oder *QGroundControl* zum Einsatz.

## 11. Akkus

Akkus sind die Stromlieferanten unserer Fluggeräte.

Man unterscheidet sie nach Anzahl der Zellen sowie nach ihrer Kapazität.

Häufig wirst du beispielsweise "6S" hören. Dies bezeichnet die Anzahl der Akku-Zellen, die in Reihe geschalten wurden.

### 11.1. Akku-Aufbau

#### 11.1.1. Zellen

Ein Akku besteht aus einer oder mehreren Zellen. Akkus bestehend aus einer einzigen Zelle findest du eigentlich nur bei TinyWhoops. Die meisten Copter fliegen mit mehrzelligen Akkus.

Zellen in Reihe geschalten erhöhen die Spannung. Zellen parallel geschalten erhöhen die Kapazität.

Ein 2S Akku hat 2 Zellen in Reihe (seriell) geschalten. Am Stromanschluss liegt die Summe der Spannung der einzelnen Akkus an.

Ein 2P Akku hat 2 Zellen parallel geschalten. Der Akku kann Summe der Kapazität der einzelnen Akkus als Leistung zur Verfügung stellen.

Ein 2S2P Akku hat 2 Zellen in Reihe und 2 Zellen parallel geschalten. Üblich ist dabei, dass die Zellen erst parallel verbunden werden und anschließend die so entstandenen Akkus in Reihe geschalten werden.

#### 11.1.2. Zell-Spannung & -Chemie

Die Spannung, die zwischen Plus- und Minuspol eines Akkus anliegt, wird von ihrem Ladezustand und der Zell-Chemie bestimmt. Als Zell-Chemie kommt bei unseren Fluggeräten normalerweise Lithium-Polymer (LiPo) zum Einsatz. Bei Long-Range-Coptern auch Lithium-Ionen (LiIon), aber darüber musst du dir für den Anfang keinen Kopf machen.

Bei einem LiPo-Akku beträgt die Nominalspannung **einer Zelle** 3,7 Volt. Allerdings unterscheidet sich die Spannung eines Akkus im tatsächlichen Betrieb abhängig vom Ladezustand.

Wird ein Akku geladen, erhöht sich die Spannung zwischen Plus- und Minuspol. Bei einem vollen LiPo-Akku beträgt die Spannung circa 4,2 Volt. Es gibt spezielle Akkus mit der Kennzeichnung HV (für "High-Voltage"), diese können bis 4,35 Volt geladen werden.

Wird ein Akku entladen, verringert sich nach und nach die Spannung. Weiter herunter als 3,3 Volt solltest du eine Akku-Zelle nicht fliegen, sonst kannst du den Akku nachhaltig beschädigen.

#### 11.1.3. Innenwiederstand

Die einzelnen Zellen eines Akkus haben wie alle elektronischen Komponenten einen Wiederstand. Dieser bestimmt, wie gut sie Energie aufnehmen und abgeben können.

Viele Ladegeräte können dir nach dem Ladevorgang den Innenwiederstand der einzelnen Zellen anzeigen.

Sollte eine Zelle einen extremen Ausreißer bei diesem Wert haben (z.B. das doppelte), solltest du den Akku nicht mehr zusammen mit anderen parallel laden und allgemein darüber nachdenken, ob du ihn nicht bald in die Rente schickst.

#### 11.1.4. Stromanschluss

Dieser Stecker versorgt deinen Copter mit Strom. Der am weitesten verbreitete Anschlusstyp für Akkus ist `XT`. Siehe oben.

#### 11.1.5. Balancer-Kabel

An diesem Kabel findet sich ein Stecker vom Typ JST-XH. Der Balancer erlaubt bei mehrzelligen Akkus Zugriff auf die Verbindung zwischen den einzelnen Zellen. Dieser ist wichtig, damit das Ladegerät Unterschiede zwischen den einzelnen Zellen ausgleichen kann. Während das Ladegerät über den Stromanschluss die Kapazität mit der groben Kelle verteilt, übernimmt es über das Balancer-Kabel die Feinabstimmung.

Wenn du einen 1S-Akku hast, entfällt der Balancer-Anschluss natürlich.

#### 11.1.6. Input & Output

Wie viel Strom ein Akku auf eipro Sekunde abgeben kann, wird in Vielfachen seiner Kapazität (C) angegeben. Auf Akkus findest du Angaben wie 70C, 100C oder 120C. Ein Akku mit 1000 Milliamperestunden, für den der Hersteller 100C angibt, kann bis zu 100 Ampere belastet werden. Dabei ist häufig die Dauerlast gemeint, für kurze Spitzen wird meistens eine zweite Zahl angegeben, diese liegt dann nochmal deutlich höher.

Gleichzeitig gilt als Richtwert für das Laden von Akkus: Lädst du sie mit 1C halten sie am längsten, lädst du mit mehr, geht das auf die Lebendsdauer. Lädst du mit viel mehr (z.B. 5C oder mehr) besteht akute Brandgefahr!

Rechenbeispiel:

Du hast einen Akku mit 500 Milliamperestunden. 1C entspricht also 0.5 Ampere. Stell dein Ladegerät so ein, dass es den Akku mit 0.5 Ampere lädt. Der Ladevorgang wird etwa eine Stunde dauern. Lädst du den Akku stattdessen mit 1 Ampere, wird der Ladevorgang nur etwa eine halbe Stunde dauer. Dies geht aber zulasten der Lebensdauer des Akkus.

#### 11.1.7. Empfehlungen (Akkus)

Welche Akkus für deinen Copter die richtigen sind, lässt sich nicht pauschal sagen. Da hängt vieles davon ab, auf welche Spannung die verbaute Hardware ausgelegt ist wie viel der Copter selbst wiegt und ob bestimmte Ziele erreicht werden sollen (z.B. Abfluggewicht unter 250 Gramm). Daher werde ich hier auch keine konkreten Empfehlungen aussprechen.

Wenn du dir einen fertigen Copter kaufst, ist meistens eine Empfehlung angegeben, für welche Akkus der Copter ausgelegt ist. Wenn du deinen Copter selbst baust, schau dir ähnliche Fertig-Copter an, was für diese empfohlen wird.

Ein größerer Akku heißt nicht automatisch längere Flugzeit. Irgendwann ist der Sweetspot überschritten, dann kostet das zusätzliche Gewicht des Akkus wieder Flugzeit. Siehe "Raketengleichung". Außerdem macht sich ein schwerer Akku auch beim Flugverhalten bemerkbar.

Als Faustformel für eine sinnvolle Akku-Größe kannst du bei einem Standard-Copter eine Gewichtsverteilung von zwei Dritteln des Gewichts für den Copter selbst und einem Drittel für den Akku annehmen.

Rechenbeispiel:
Nehmen wir einen Copter mit 400 Gramm Gewicht an (ohne Akku, `dry weight`). Ich möchte mit 6S-Akkus fliegen. Also suche ich mir einen 6S Akku, der in etwa 200Gramm wiegt. Folgst du dieser Rechnung, landest du vermutlich landest du bei einem Akku zwischen 1000 und 1300 mAh. Gewicht pro mAh kann je nach Hersteller variieren.

Vermeide Ultra-Billig-Akkus. Hier wird oft mit Zahlen in "chinesischen Einheiten" geworben. Die tatsächliche Leistungsfähigkeit wird mit der aktuellen Temperatur, dem Datum oder der Anzahl der Kinder des Vorarbeiters multipliziert. Renommierte Hersteller, auf deren Angaben du dich eigentlich verlassen kannst sind Tattu, China Hobby Line (CNHL) und GnB.

### 11.2. Sicherheit

<img src="./img/pictograms/flame.png" alt="Entflammbar" width="200"/>

Akkus sind brennbar. Du willst deine Bude damit nicht abfackeln. Entsprechend solltest du Akkus in einem sicheren Behlätnis lagern. Etwas aus Metall oder Ton bietet sich dafür an. Beispielsweise eine alte Munitionskiste aus Metall oder ein Blumentopf.

| Munitionskiste | BatSafe | Blumentopf |
| ------ |------- | -------|
| <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Ammunition_box.jpg" alt="Munitionskiste" width="200"/> | <img src="https://modster.at/media/image/ba/b7/bb/285566_MODSTER_BAT_Safe_Lipo_Tresor_Mini_MODSTER_Bat_Safe_Mini292011.jpg" alt="BatSafe" width="200"/> | <img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Flowerpot_1.jpg" alt="Blumentopf" width="200"/> |

Wichtig bei der Aufbewahrung ist, die Akkus **NIEMALS** druckdicht zu verpacken. Sonst hast du eine Rohrbombe. Wenn dir Munitionskiste Luftdichtigkeit verspricht, bohr ein paar Löcher oder entferne die Dichtung an einigen Stellen, damit im Fall eines Brandes der Druck geziehlt entweichen kann. LiPo-Brände sind selbstversorgend. Wenn dein LiPo brennt, dann brennt er, egal wie viel Wasser du drauf kippst. Du brauchst nicht darauf hoffen, dass durch die Luftdichtigkeit die Luft im Behälter irgendwann verbraucht ist und das Feuer von selbst ausgeht. Der Brand erzeugt weiter Gase und wenn der Behälter druckdicht ist machts irgendwann BUM.

Zum Lagern sollten die Akkus zudem auf Lagerspannung gebracht werden. Das ist die Spannung, bei der die Akkuchemie am stabilsten ist. Bei LiPos beträgt diese Spannung 3,8 Volt. Dein Ladegerät sollte über einen Modus verfügen, über den du die Akkus auf Lagerspannung bringen kannst.

Zudem empfiehlt es sich, einen kleinen Akku-Tester griffbereit zu haben. Auch unterwegs.

| LiPo-Tester (Premium) | LiPo-Tester (einfach) |
| ------ |------- |
| <img src="https://www.isdt.co/wp-content/uploads/2018/11/bg-8s.jpg" alt="ISDT BG-8S" width="200"/> | <img src="https://cdn-global-hk.hobbyking.com/media/catalog/product/cache/3/image/660x415/17f82f742ffe127f42dca9de82fb58b1/l/o/low-voltage-alarm-black-color-91011000001-0-2.jpg" alt="LiPo Tester" width="200"/> |

### 11.3. Ladegeräte

Das Ladegerät bringt deine Akkus auf die gewünschte Spannung. Heißt, es lädt sie oder entlädt sie nach Bedarf. Beim Entladen wird die Energie meistens in Wärme umgewandelt. Da diese irgendwie aus dem Netzteil raus muss, läuft der Lüfter meists auf Volllast. Die Geschwindigkeit des Entladens ist durch die Menge der abführbaren Wärme begrenzt, normalerweise geht daher Entladen deutlich langsamer.

Bei Ladegeräten unterscheidet man zwischen jenen mit und ohne integriertes Netzteil. Hat das Ladegerät ein integriertes Netzteil, kannst du das Ladegerät direkt an die Steckdose hängen, aus der Wechselspannung (AC) kommt.

Hat dein Ladegerät kein integriertes Netzteil, musst du es an ein Netzteil anschließen, dass die Wechselspannung aus der Steckdose zuvor in Gleichspannung (DC) konvertiert. Für den Anfang willst du ein Ladegerät mit integriertem Netzteil.

#### 11.3.1. Empfehlungen (Ladegerät)

##### 11.3.1.1. ISDT 608AC

Das günstigste Ladegerät, dass sich zu kaufen lohnt.

- circa 65€
- 50W über integriertes Netzteil
- 200W über externes Netzteil

##### 11.3.1.2. HOTA D6 Pro

- circa 100€
- 200W über integriertes Netzteil (nur Pro-Version)
- 650W über externes Netzteil
- 2 Ausgänge

##### 11.3.1.3. SkyRC Q200

- circa 150€
- 200W über integriertes Netzteil
- 300W über externes Netzteil
- 4 Ausgänge

### 11.4. Laden/Entladenn

Neue Akkus sollten "eingeflogen" werden. Also die ersten 2-3 Zyklen langsam mit maximal 1C geladen und bei Flug mit maximal 2/3 Gas geflogen (und damit entladen) werden. Wenn du sofort mit 2C den Strom rein pumpst und mit Vollgas los ballerst, geht das massiv auf die Leistungsfähigkeit der Akkus. Es gibt Menschen, die ihre Akkus direkt beim ersten Flug dadurch getötet haben, dass Sie permanent Vollgas geflogen sind.

### 11.5. Paralleles Laden

Wenn du mehr Akkus mit der gleichen Spannung und grob der gleichen Kapazität hast, kannst du dir überlegen, ob du dir ein sog. "parallel charging board" oder "Para-Board" zulegst. Das ist eine Platine, die mehrere Akkus miteinander verbindet, sodass sie für das Ladegerät wie ein einziger Akku aussehen. Das heißt, du kannst dein Ladegerät auf mehr Ampere einstellen.

Rechenbeispiel:

Du hast fünf Akkus je 1000 mAh. Lädst du diese einzeln mit je 1C, musst du dein Ladegerät auf 1 Ampere einstellen. Der Ladevorgang wird etwa eine Stunde pro Akku brauchen, also 5 Stunden insgesamt.

Verwendest du ein Para-Board, verhalten sich die 5 Akkus wie ein einziger Akku mit 5000 mah. Das heißt, du kannst mit 5 Ampere laden, ohne den Richtwert von 1C zu überschreiten. Der Ladevorgang wird circa eine Stunde insgesamt benötigen.

Wenn du dir ein Para-Board holst, achte auf folgende Punkte

- Die XT-Anschlüsse sollten mit Auto-Sicherungen abgesichert sein.
- Die Balancer-Anschlüsse sollten mit selbst-zurücksetzenden Polymer-Sicherungen abgesichert sein.
- Das Board sollte Anschlüsse für XT60 und XT30 haben.
- Die verfügbaren Balancer-Ports sollten für unterschiedliche Akku-Größen (idR 2-6S) ausgelegt sein.

Durch die Sicherungen vermeidest du zumindest grobe Akkuschäden und Brände, wenn du etwas falsch steckst.

Neben dem Laden von mehreren Akkus auf einmal bietet eine Para-Board noch weitere Vorteile. Ein gutes Board dient gleichzeitig als Adapter von XT60 (den die meisten Ladegeräte als Ausgang haben) auf XT30. Zudem schützt du die Anschlüsse deines Ladegeräts vor dem Ausleiern; ein Para-Board steckst du deutlich weniger oft an als die Akkus, die du in das Para-Board selbst steckst.

|HGLRC Thor Pro| Uruav Blacklight|
| ----- | ----- |
| <img src="./img/hglrc_thor_pro.png" alt="HGLRC Thor Pro" width="300"/> | <img src="./img/uruav_blacklight.png" alt="URUAV Blacklight" width="300"/> |

**!!ACHTUNG!!**

Beim parallelen Laden ist besondere Vorsicht geboten.

- Du kannst ausschließlich Akkus mit gleicher Zell-Anzahl parallel laden.
- Die Akkus sollten annähernd gleiche Kapazität haben.
- Die Akkus sollten einen annähernd gleichen Ladezustand haben. Die einzelnen Zellen sollten höchstens 0.1 Volt Abweichung zueinander haben. **VOR DEM ANSTECKEN PRÜFEN!**
- Keiner der Akkus sollte eine beschädigte Zelle haben, andernfalls kann es sein, dass du Zelle an gleicher Stelle in den anderen Akkus ebenfalls beschädigst.

### 11.6. Entsorgung

Über kurz oder lang wird dein Akku das Zeitliche segnen. Akkus sind genau wie Propeller Verbrauchsgegenstände. Gewöhn dich daran.

Bevor du einen Akku entsorgst, solltest du ihn so weit wie möglich entladen. Manche Ladegeräte bieten dazu spezielle Modi an, um den Akku zu "zerstören".

Andere Methoden beinhalten das konrollierte Entladen mittels einer Glühbirne, die einfach so lange angeschlossen wird, bis sie nicht mehr brennt. Auch andere Widerstände, die einfach nur Energie verbrennen, eignen sich dafür.

Wenn dein Akku leer ist, kannst du ihn bei einer Batterie-Sammelstelle abgeben. Häufig findest du solche in Supermärkten oder Baumärkten.

## 12. Der erste eigene Copter

In diesem Abschnitt geht es darum, tatsächlich einen Copter zu kaufen oder zu bauen. Jetzt gehts ans eingemachte.

### 12.1. Fertigen Copter kaufen

Wenn du eine fertigem Copter kaufst, sparst du jede Menge Zeit mit der Auswahl der Komponenten und dem Zusammenbau und Einstellen. Häufig bekommst du eine fertig gebaute Copter günstiger als wenn du ihre Einzelteile separat kaufen würdest. Zudem kannst du erwarten, dass der Copter bereits akzeptabel eingestellt ist, was das Flugverhalten angeht.

Für viele gehört das selbst bauen des Copters einfach zum Hobby dazu. Ich will dich aber nicht davon ab bringen, ein fertiges Gerät zu kaufen.

> *Anm. remove_me*: Wenn du deine Drohne nicht selber baust, bist du eigtl. auch nix wert. Aber schön, dass du da bist!

#### 12.1.1. Ready-to-Fly / RTF

RTF wird für 2 leicht unterschiedliche Produkte verwendet.

Zum einen bezeichnet es komplette Kits, bestehend aus Brille, Funkfernsteuerung und Copter. Ggf. sogar noch mit Akkus und Ladegerät. Auspacken, Akkus laden, losfliegen. Theoretisch das Rundum-Sorglos-Paket. Meistens kommen hier aber billigste Komponenten zum Einsatz, daher sind solche Kits mit Vorsicht zu genießen.

Zum anderen wird der Begriff als Synonym für "Bind and Fly" verwendet.

#### 12.1.2. Bind and Fly / BNF

Der Copter ist flugfertig zusammengebaut, verfügt über ein Videosystem und einen Funkempfänger. Du musst diesen eigentlich nur noch an die Funkefernbedienung binden.

#### 12.1.3. Plug'n'Play / PNP

Der Copter ist flugfertig zusammengebaut, verfügt über ein Videosystem, hat aber im Gegensatz zum BNF *KEINEN* Funkempfänger an Bord. Du musst diesen selbst nachrüsten. Praktisch, wenn man sowieso noch einen Funkempfänger daheim rum liegen hat.

#### 12.1.4. Powertrain

Powertrain bezeichnet den Copter ohne Videosender und Empfänger. Das Paket besteht also nur aus dem Frame, Flight Controller, ESC und den Motoren.

Gibt es ganz selten bei Coptern von namenhaften Herstellern, ist eher auf dem Gebrauchtmarkt zu finden.

#### 12.1.5. Empfehlungen (Copter kaufen)

Für fertige Copter gilt immer die Empfehlung, sich Testberichte dazu auf Youtube anzusehen.

##### 12.1.5.1. Eachine Trashcan

Wenn du im Winter einsteigst, solltest du dir überlegen, ob du dir einen TinyWhoop holst und damit innen fliegst. Die "Trashcan" von Eachine ist ein populärer Vertreter und kann mit 1S oder 2S Akkus geflogen werden.

Mit 2S kann man sie auch außen ganz gut fliegen.

> *Anm. rumpelst1lzk1n*: Auf XT30 umlöten und dann mit 2S 350mah LiPos fliegen. Ein Traum.

##### 12.1.5.2. Happymodel Moblite7

Nochmal eine Stufe leichter als die Trashcan, kann nur mit 1S Akkus geflogen werden, hat aber aufgrund des geringen Gewichts eine vergleichsweise lange Flugzeit.

##### 12.1.5.3. GepRC Phantom / Emax Babyhawk

Schöne kleine Toothpicks mit gut Power. Anfängerfreundlich, verzeihen aufgrund des geringen Gewichts Crashes und wirken nicht so bedrohlich, wenn du damit z.B. im Park cruisen möchtest.

##### 12.1.5.4. iFlight Nazgul 5 (Evoque)

Einer der bekanntesten Einsteiger-Copter. Das Produkt hat inzwischen mehrere Iterationen hinter sich, die aktuellste (Stand Ende 2021) trägt den Beinamen "Evoque". iFlight liefert verlässliche Qualität, Dokumentation und verwendet Standard-kompatible Teile. Zudem kriegt man die Copter mit Analog oder Digital und unterschiedlichen Protokollen zur Fernsteuerung.

##### 12.1.5.5. Diatone Roma F5 (V2)

Ähnlich dem iFlight Nazgul. In Sachen Qualität der Komponenten steht der Roma F5 dem Nazgul in nichts nach. Die größte Frage ist, welchen man zum aktuellen Zeitpunkt günstiger bekommt und welcher Frame einem besser gefällt.

### 12.2. Eigenbau

Wenn du deinen Copter selbst baust, lernst du dabei sehr viel über ihre Zusammensetzung und die Komponenten. Das hilft ungemein, wenn du dein Fluggerät nach einer Bruchlandung reparieren musst.

> *Anm. Puffi*: Für den Kauf von Einzelteilen gilt: Bei Motoren und Armen immer 2 mehr bestellen.

#### 12.2.1. Builds

Im Folgenden werden einige mögliche Builds vorgestellt, von Budget bis Premium.

Die Builds konzentrieren sich auf gängige Frames und Hardware. Für 5" Frames/Copter wirst du die größte Teileauswahl finden.

Wenn du darüber hinaus noch Inspiration suchst, lohnt sich ein Blick auf die Website [rotorbuild](https://rotorbuilds.com/). Dort veröffentlichen einige Piloten ihre Builds.

Beim Flight Controller verwenden wir etwas mit Betaflight.

Die Builds sind mit 6S-Akkus mit einer Kapazität von 1000-1300 mAh gedacht. Für 4 Stück davon kannst du nochmal etwa 100€ einplanen, je nach Marke.

Zudem ist bei der Preiskalkulation kein Ersatzmotor mit drin. Einen Ersatz-Motor solltest du dir schon mit bestellten.

Natürlich kannst du bei den Builds nach Belieben Teile tauschen, z.B. den Premium Frame mit den Budget-Motoren verwenden oder ein Premium-Build mit analoger statt digitaler Videoübertragung bauen.

##### 12.2.1.1. Budget

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

##### 12.2.1.2. Mittelklasse

Ab der Mittelklasse gehe ich davon aus, dass du für den Videoempfang bereits ein digitales System hast. Entweder DJI oder HDZero. Siehe oben.

Kostenpunkt dieses Builds sind in etwa 350-400€.

- Frame: Diatone Roma F5 (ca. 50€)
- Motor: iFlight Xing2 (ca. 80€)
- ESC & FC: Diatone Mamba F405 Stack oder iFlight SucceX-E F4 (ca. 100€)
- Receiver: ELRS (ca. 15€)
- Videosystem: passend zum Videoempfänger (ca. 110-140€)

##### 12.2.1.3. Premium

> *Anm. rumpelst1lzk1n*: inb4: Aus dem Weg, Geringverdiener.

Du willst also gleich zu Anfang ein Premium-Build haben? Überleg dir das gut. Gerade zu Anfang wirst du viel Crashen. Das kann teuer werden. Und als Anfänger wirst du wahrscheindlich keinen Unterschied zwischen Budget- und Premium-Motoren feststellen. Bau dir lieber 2 mal ein 300€ Quad als einmal ein 600€ Quad.

> *Anm. Puffi*: Teuer ist erst gut, wenn man lang genug fliegt um Unterschiede erkennen zu können.

Kostenpunkt dieses Builds sind in etwa 500-600€.

- Frame: ImpulseRC Apex 5 (ca. 100€)
- Motor: ETHIX Mr Steele Stout (110-120€)
- ESC & FC: Diatone Mamba F722 App Stack oder iFlight SucceX-D F7 (ca. 130€)
- Receiver: ELRS, Tracer oder Crossfire (ca. 15-35€)
- Videosystem: passend zum Videoempfänger (ca. 110-180€)

#### 12.2.2. Tune

Nach dem Zusammenbauen des Copters solltest du auch noch in Betaflight das Flugverhalten einstellen. Das kann man auf die Spitze treiben, für die ersten paar Monate im Hobby reicht aber ein Standard-Tune. Links zu unterschiedlichen Quellen für Tunes findest du in der [Linkliste](#linkliste).

> *Anm. Puffi*: Gutes Tuning wird erst wichtig wenn du gut fliegen kannst.

### 12.3. Build on Demand

Neben dem Kaufen und selbst bauen gibt es noch die Möglichkeit, dass du dir einen Copter nach Wunsch bauen lässt. Entweder von einem Kumpel, der schon im Hobby drin ist, von einem kommerziellen Dienstleister, oder von jemandem, der diesen Dienst hobbymäßig im Netz anbietet.

Bei jemandem, den du für den Zusammenbau bezahlst, kannst du mit ca. 200€ für diese Dienstleistung rechnen. Mehr oder weniger. Das ist abhängig davon, was er sonst noch so alles am Copter macht, ob z.B. die Elektronik bereits getuned sein soll.

Bei einem Kumpel ist *mindestens* ein Kasten Bier fällig.

## 13. Zusatzausrüstung

### 13.1. Bit-Set

Du wirst vor allem viele Schrauben mit kleinem Innensechskant haben. Wenn du hier noch nichts hast, leg dir ein kleines Sortiment an entsprechenden Schraubenziehern oder Bits zu. Insbesondere die Hex-Bits für 1.5, 2.0, 2.5 und 3.0 sind hier relevant.

Ein universales Set, dass dir sicher auch außerhalb von FPV gute Dienste leisten wird, ist z.B. das [iFixit "Mako Precision Bit Set"](https://store.ifixit.de/products/mako-driver-kit-64-precision-bits).

### 13.2. Prop-Tool

Propeller werden meistens mit einer M5-Mutter befestigt. Das willst du nicht mit einem normalen Schraubenschlüssel fest ziehen. Eine Ratsche, ein Ringratschen-Schlüssel oder ein sogenanntes Prop-Tool helfen ungemein.

| Prop-Tool | Ringratsche |
| ------- | ------- |
|![Ethix Prop Tool](./img/ethix/prop_tool.jpg)|![Wera Ringratsche](./img/misc/wera_ratchet_wrench.jpg)|

### 13.3. Löten

Zum Bauen und Reparieren deines Quads wirst du einen Lötkolben benötigen. Der Lötkolben sollte temperaturgesteuert sein. Nimm bitte nicht einfach den nächstbilligen Lötkolben aus dem Baumarkt, diese haben meistens keine Temperatursteuerung sondern geben einfach Vollgas.

> *Anm. Puffi*: Wenn du zu viel Angst vorm Löten hast hol dir ne Trainingsplatine und übe!

Versuche bleihaltiges Lötzinn zu bekommen. Damit lötet es sich leichter als mit bleifreiem. Dazu sollte das Lötzinn Flussmittel enthalten.

Gute kompakte Lötkolben sind z.B.

- TS100
- Sequre Mini SQ-001
- Sequre Mini D60

Diese kannst du unter anderem auch mit einem LiPo-Akku betreiben um unterwegs zu löten. Alternativ haben die Netzteile, die dir hier im Guide empfohlen werden auch eine DC-Power-Funktion, mit der die Lötkolben betrieben werden können.

### 13.4. Rucksack

Es gibt spezielle Rucksäcke für Copter. Herausragenstes Merkmal sind die Spannriehmen, mit denen du Quads außen am Rucksack befestigen kannst. Ansonsten tut es auch jeder Rucksack. Nützlich ist, wenn du den Rucksack fest unterteilen kannst in Fächer für Akkus, die FPV-Brille, Funke, ... Das findest du häufig als Eigenschaft bei jedem X-beliebigen Foto-Rucksack.

## 14. Rechtliches

In diesem Abschnitt geht es um die rechtliche Situation als FPV-Pilot.

Juristisch betrachtet bist du mit einem unbemannten Fluggerät ("unmanned aerial vehicle", UAV, oder "unmanned aircraft system", UAS) unterwegs. Das umfasst Modellflieger und -hubschrauber genauso wie unsere Multicopter.

Grundsätzlich gilt: Sei kein Arschloch, dann wird in den allermeisten Fällen darüber hinweg gesehen, wenn du mal nicht ganz so legal unterwegs bist.

Halte Abstand zu Unbeteiligten, damit sie sich von deiner kinderfressenden Killerdrohne nicht bedroht oder beobachtet fühlen.

Natürlich kannst du immer an jemanden geraten, der einen schlechten Tag hat, grundlos Streit sucht, oder in einer sehr deutschen Mentalität meint, dass du doch sicher gegen irgend ein Gesetz verstoßen MUSST, so viel Spaß wie du offensichtlich hast. Zudem setzt bei manchen auch einfach das Hirn aus, wenn sie den Begriff "Drohne" hören. Der einfachste Weg ist, zu gehen.

![drone retard](img/pictograms/drone_retard.png)

### 14.1. Führerscheine

Um unbemannte Luftfahrzeuge führen zu dürfen, gibt es 2 Führerscheine.

#### 14.1.1. der kleine Drohnenführerschein

**MACH IHN!**

Auf einer [Website des Luftfahrtbundesamtes](https://lba-openuav.de/) kannst du den kleinen Drohnenführerschein für die Kategorie "A1/A3" machen. Den brauchst du.

Zum einen hast du dann schon mal alle Regeln gehört, die es zu beachten gilt.

Zum anderen hast du ein offizielles Dokument, dass du jemandem unter die Nase halten kannst, der dir grundlos auf den Sack gehen will. Betonung liegt auf "grundlos". Sei kein Arschloch.

#### 14.1.2. der große Drohnenführerschein

Den großen Drohnenführerschein (Kategorie "A2") brauchst du als Anfänger definitiv nicht. Zudem ist der Nutzen für FPV fraglich, da unsere Fluggeräte meistens keine `CE`-Kennzeichnung haben, die für diese Kategorie vorausgesetzt wird.

Der Schein kostet abhängig vom Anbieter der Schulung 200-300€. Gegebenenfalls noch mehr, wenn die Schulung mehr ist als ein Online-Kurs und z.B. auch noch Präsenzunterricht beinhaltet.

Mit dem großen Schein darfst du näher an Wohngebiete und unbeteiligte Personen fliegen. Und du bekommst leichter eine Sondergenehmigung von der für die jeweilige Region zuständigen Luftfahrtbehörde. Eigentlich brauchst du den Schein nur, wenn du professionell (z.B. als Auftragsarbeit) fliegst.

### 14.2. Vereine

Die wenigsten Copter-Piloten sind Mitglieder eines Modellbau-Vereins. Den Vereinen wird oft nachgesagt, dass sie nur aus Modellbau-Opas bestünden. Dass Modellbau-Vereine bei der Neuregelung der Luftfahrtgesetze im Bezug auf Modellbau und Drohnen 2021 einen Sonderstatus erhalten haben, wirkt sich zudem nicht sonderlich positiv auf die "Völkerverständigung" aus.

> *Anm. rumpelst1lzk1n*: Die Leute in den Modellbauvereinen haben häufig die Entwicklung mindestens der letzen 5 wenn nicht gar 10 Jahre verschlafen. Motor und Servo, mehr brauchen sie nicht, mehr verstehen sie nicht. Aber: wo unsere Fluggeräte mit Elektronik glänzen, glänzen die alten Modellbauer bei der Mechanik.

### 14.3. Versicherung

**MACHEN!!!**

Häufig sind private Flüge mit Drohnen bei einer allgemeinen Haftpflichtversicherungen mit enthalten, die man als erwachsener Mensch sowieso haben sollte. Wenn du eine hast, schau trotzdem nach, ob das abgedeckt ist.

Wenn es nicht abgedeckt ist, lohnt sich eine explizite Drohnen-Haftpflicht. Auch die Mitgliedschaft in einem Modellbauverein kann so eine Versicherung bereits beinhalten.

Beispielhafte Vereine sind hier:

- [Deutscher Modellflieger Verband e.V.](https://www.dmfv.aero/rund-ums-fliegen/versicherung/)
- [Österreichischer Aeroclub](https://aeroclub.at/de/service/versicherungen)
- [Schweizerische Modellflugverband](https://www.modellflug.ch/DE/cont/280)

Wenn du professionell arbeitest, solltest du nochmal zu deinem Versicherungsmenschen des Vertrauens gehen und prüfen, ob dein Versicherungsschutz auch für gewerbliche Arbeiten gilt.

## 15. 3D-Druck

Man braucht immer wieder etwas. Halterungen für Antennen und Kameras, Landefüße, etc.

Eine gute Anlaufstelle um nach Druckteilen für seinen Frame zu suchen ist [yeggi.com](https://www.yeggi.com/). Masochisten suchen auch direkt auf [thingiverse.com](https://www.thingiverse.com/), aber deren Suche ist leider wenig zuverlässig.

Es ist nützlich, einen 3D-Drucker zu haben, oder jemand zu kennen, der einem Teile drucken kann.

Wenn man selbst keinen Zugriff auf einen Drucker hat, gibt es online eine Vielzahl an Diensten, die einem die gewünschten Teile für mehr oder weniger Geld drucken.

### 15.1. Drucker

Falls du selbst überlegst, dir einen Drucker zu kaufen, hast du effektiv die Wahl zwischen folgenden Szenarien:

1) einen billigen Drucker kaufen und mit viel Zeitaufwand und nochmal etwas Geld zu einem guten Drucker umbauen.

2) einen guten aber teuren Drucker kaufen, der direkt funktioniert.

Für das erste Szenario solltest du dich an die beliebten geläufigen Drucker halten. Beispielsweise einen Ender 3. Wie auch bei Coptern gilt: Für häufig genutzte Sachen findest du online viel Doku für weitere Modifikation.

Für das zweite Szenario empfehle ich einen Drucker von Prussia. Nicht so teuer wie die hochprofesionellen, aber out of the box voll funktionsfähig ohne die Notwendigkeit, viel Zeit in Tuning zu investieren.

### 15.2. Materialien

Die meisten Teile sollten in TPU gedruckt werden. Dieses verfügt über eine gewisse Flexibilität, was dafür sorgt, dass es Stürze besser aushält.

## 16. Jenseits von Multicoptern

FPV ist nicht auf Copter beschränkt. Natürlich kannst du so ein System in alle möglichen Gerätschaften einbauen, ob Auto oder Boot.

Flugzeuge erfreuen sich bei vielen Copter-Piloten ebenfalls einer großen Beliebtheit. Dort kommt oft eine ähnliche oder sogar die gleiche Steuersoftware wie bei Multicoptern zum Einsatz.

## 17. Glossar

Der Themenbereich FPV ist voller Anglizismen

| | |
| -------- | -------- |
| Bando | Verlassenes Gebäude, alte Industrieanlage, Lost Place |
| DVR | Digital Video Recording, Videoaufzeichnung üblicherweise auf SD-Karte in der FPV-Brille |
| FPV | First Person View, Bildübertragung aus dem Fluggerät um eine Pilotensicht zu erzeugen |
| Funke | Funkfernsteuerung, Funkfernbedienung |
| LOS | Line of Sight, Sichtflug, der Pilot beobachtet das Fluggerät |
| Radio | siehe Funke |
| Receiver, RX | Empfänger, abhängig vom Kontext ist der Empfänger für Steuersignale am Fluggerät oder der Videoempfänger an der Brille gemeint |
| Transmitter, TX | Sender, abhängig vom Kontext ist der Sender für Steuersignale in der Funkfernsteuerung oder der Videosender am Fluggerät gemeint |

## 18. Linkliste

### 18.1. Youtube-Channel

#### 18.1.1. Einsteigerfreundlich / Tutorials / legitime Produktbewertungen

|Kanal|Beschreibung|
|---|---|
|[Joshua Bardwell](https://www.youtube.com/c/JoshuaBardwell)| Der FPV-Jesus. Weil ihn sein Youtube-Kanal mit Nachrichten, Tutorials, Live-Q&A und Produktbewertungen anscheinend noch nicht genug auslastet, versucht er Menschen auch per Mail-Support bei ihren Problemen mit Coptern zu helfen.|
|[Nick Burns](https://www.youtube.com/channel/UCBGpbEe0G9EchyGYCRRd4hg)|Produktbewertungen, hauptsächlich TinyWhoops und Toothpicks.|
|[Gal Kremer](https://www.youtube.com/user/galkremer11)|Produktbewertungen|
|[Albert Kim](https://www.youtube.com/channel/UCnJyFn_66GMfAbz1AW9MqbQ)|Produktbewertungen|
|[Oscar Liang](https://www.youtube.com/user/289359752)|Produktbewertungen|
|[AndyRC](https://www.youtube.com/channel/UCKE_cpUIcXCUh_cTddxOVQw)|Produktbewertungen, nicht nur Quads, auch Flugzeuge|
|[Pawel Spychalski](https://www.youtube.com/user/dzikuvx)|Tutorials um iNAV|
|[Painless360](https://www.youtube.com/c/Painless360)|Produktbewertungen, Tutorials, Fokus auf iNAV und Flugzeuge|

#### 18.1.2. Marktschreier

Die Produktbewertungen dieser Youtuber sind mit vorsicht zu genießen. Alles ist immer das größte, beste, neueste, tollste...

|Kanal|Beschreibung|
|---|---|
|[UAV Futures](https://www.youtube.com/channel/UC3ioIOr3tH6Yz8qzr418R-g)|Marktschreier mit eigenwillig witziger australischer Art|
|[Drone Camps RC](https://www.youtube.com/channel/UCwojJxGQ0SNeVV09mKlnonA)|Ja ... Marktschreier halt|

#### 18.1.3. Hi tech, low life

|Kanal|Beschreibung|
|---|---|
|[Mad's Tech](https://www.youtube.com/channel/UCxpgzA0iO-7anEAyiLMDRmg)|Nachrichten und Produktbewertungen auf einem höheren technischen Niveau|
|[UAV Tech](https://www.youtube.com/user/spatzengr)|Fokus auf Tuning, aktiver Betaflight-Entwickler|
|[Chris Rosser](https://www.youtube.com/user/neucleotide)|Tuning mit Fokus auf Filter, machte die Vibrationsanalyse von Frames salongfähig|
|[Wezley Varty](https://www.youtube.com/channel/UCiluOsWP9XCNnPART78mOfA)|Produkttests auf höherem technischen Niveau, Foku auf Funksysteme|

#### 18.1.4. Fanboy-Kanäle / Entertainment

- [Mr Steve](https://www.youtube.com/user/MrSteeledavis)
- [TBS](https://www.youtube.com/user/nastycop420)
- [TBS Lounge](https://www.youtube.com/channel/UChNaTfgpiQRIeJiGrP1fOOQ)
- [JohnnyFPV](https://www.youtube.com/channel/UC7O8KgJdsE_e9op3vG-p2dg)
- [RotorRiot](https://www.youtube.com/channel/UCemG3VoNCmjP8ucHR2YY7hw)
- [MCK](https://www.youtube.com/channel/UCFJdwOewIZBv3dDJmhtVn1g)
- [Botgrinder](https://www.youtube.com/c/BOTGRINDERFPV)

#### 18.1.5. Nicht eindeutig zuordenbar

- [QRP](https://www.youtube.com/user/voxtelnismo)
- [FalconRad FPV](https://www.youtube.com/c/FalconRadFPV) Fokus auf Long Range Copter
- [rctestflight](https://www.youtube.com/channel/UCq2rNse2XX4Rjzmldv9GqrQ) Verrückte Modellbauprojekte

### 18.2. Websites

#### 18.2.1. Rechtsgrundlagen

- [Deutsches Luftfahrtbundesamt](https://lba-openuav.de/einstieg/)
- [LuftVO (Gesetze zu unbemannten Fluggeräten)](https://www.gesetze-im-internet.de/luftvo_2015/BJNR189410015.html#BJNR189410015BJNG001201360)

#### 18.2.2. Tutorials / Blogger

- [https://oscarliang.com/](https://oscarliang.com/) (FPV allgemein, viele Tutorials, Bilder von seiner Website in diesem Guide mit freundlicher Genehmigung)
- [https://blog.seidel-philipp.de/](https://blog.seidel-philipp.de/) (FPV allgemein)
- [https://kamikatze-fpv.de/](https://kamikatze-fpv.de/) (Fokus auf Team Blacksheep)
- [https://www.fpvknowitall.com/](https://www.fpvknowitall.com/) (Joshua Bardwell Einkaufsliste)
- [https://betaflight.de/docs/knowledge-base/](https://betaflight.de/docs/knowledge-base/)

#### 18.2.3. Tune Presets

- [UAV Tech Presets](https://theuavtech.com/presets/)
- [Betaflight Community Presets](https://github.com/betaflight/betaflight/wiki/Community-Presets)

### 18.3. Discord Server

- [pr0-FPV](https://discord.gg/uBh3QsnqF5)
- [ELRS Community](https://discord.gg/dS6ReFY)
- [HDZero](https://discord.gg/kGsnEDMb2V)
- [BetaFlight](https://discord.gg/gV4XSq3fus)
- [EdgeTX](https://discord.gg/wF9wUKnZ6H)

### 18.4. OpenSource Projekte

[Github-Seite dieses Guides.](https://github.com/rumpelst1lzk1n/rumpelst1lzk1n.github.io)

#### 18.4.1. Flight Controller Software

- [Ardupilot](https://github.com/ArduPilo/)
- [Betaflight](https://github.com/betaflight)
- [Emuflight](https://github.com/emuflight)
- [iNAV](https://github.com/iNavFlight)

#### 18.4.2. ESC Software

- [ESC Configurator](https://esc-configurator.com/) (nur in Crome-basierten Browsern unterstützt)
- [BLHeli_32 Suite](https://github.com/bitdump/BLHeli/releases)

#### 18.4.3. Funkfernsteuerungs-Software

- [EdgeTX](https://github.com/EdgeTX)
- [OpenTX](https://github.com/opentx)
- [FreedomTX](https://github.com/tbs-fpv/freedomtx)

### 18.5. Hersteller Dokumentationen

- [Diatone](https://www.diatone.us/apps/help-center)
- [iFlight](https://drive.google.com/drive/folders/1r3MNTBNYSzGeRXQg45j4IJVoW1Xjk7Y0)
- [HGLRC](https://www.hglrc.com/pages/download)

### 18.6. Shops

Bei manchen den Links *kann* es sich um Affiliate Links handeln.

#### 18.6.1. Allgemein

Folgende Shops sind in meinem Soziotop bekannt und eigentlich verlässlich:

- [drone-fpv-racer.com](https://www.drone-fpv-racer.com/), Frankreich
- [droneit.se](https://droneit.se/), Schweden
- [fpv24.com](https://www.fpv24.com/de/), Deutschland
- [modell-hubschrauber.at](https://www.modell-hubschrauber.at/), Österreich
- [n-factory.de](https://n-factory.de/), Deutschland
- [rctech.de](https://www.rctech.de/), Deutschland
- [rotorama.de](https://www.rotorama.de/), Tschechien
- [shop.rc-hangar15.de](https://shop.rc-hangar15.de/), Deutschland
- [team-blacksheep.com](https://www.team-blacksheep.com/shop), Honkong **(!)**
- [xnova Motors](https://www.xnovamotors.biz/), Deutschland, hauptsächlich Motoren

#### 18.6.2. Akkus

- [Tattu (Gensace)](https://www.gensace.de/), deutscher Shop
- [China Hobby Line (CNHL)](https://bit.ly/3uUdpjt), europäisches Warenlager

#### 18.6.3. Antennen

- [shop.prodrone.pl](https://shop.prodrone.pl/), Polen

## 19. Sonstiges

### 19.1. Puffis gesammelte Weisheiten

Hier noch ein paar weitere Weisheiten, die einfach noch nicht ihren richtigen Platz als Anmerkung im Fließtext gefunden haben:

- Lern deinen Kopter am besten beim ersten Aufbau kennen.
- Deinen ersten Kopter kannst du auch fertig kaufen. Doch bedenke: Wenn du ihn crasht musst du ihn selber reparieren wenn du schnell wieder in der Luft sein willst.
- Umso schlechter du deine eigenen Kopter kennst desto weniger wirst du fliegen.
- Betrachte deinen Kopter nach dem Erstflug als verloren! Du wirst sonst nie dein komplettes Potenzial nutzen.
