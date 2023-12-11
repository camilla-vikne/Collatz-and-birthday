Prosjekt 2: Koden
Modul B Gruppeprosjekt
11.12.23 - 22.12.23

Oppgave skrevet av Endre, Modulansvarlig for Modul B

Velkommen til andre prosjekt i Prosjektmåned!

Dette er et gruppeprosjekt hvor dere skal samarbeide i grupper på 3 for å lage en side hvor besøkende kan teste ut 2 forskjellige matematiske “kuriositeter” gjenskapt i Javascript, nemlig Collatz’ Formodning og Bursdagsparadokset.

Siden skal inneholde:

Forside
Collatz Formodning
Bursdagsparadokset

Design

Denne oppgaven har ikke fokus på design. Designet skal være helt enkelt, men funksjonelt og “brukbart”.

Dere trenger ikke å utarbeide hele designet i Figma, men anbefaler å lage en wireframe i Figma for å komme frem til et godt layout.

Dere trenger ikke å bruke bilder på denne siden, men hvis dere har veldig lyst å pynte litt kan dere kan bruke lisensfrie bilder fra f.eks pexels og unsplash

Siden skal være tilpasset både til mobil og desktop. Klikk her for en veldig god og grundig gjennomgang av hva responsive design er og hvordan dere kan bruke gode prinsipper.

Forside

Forsiden skal kun kort forklare hva formålet med siden er.

Collatz Formodning

Collatz Formodning er et interessant matematisk prinsipp som fungerer slik:

Begynn med et hvilket som helst tall: 

Hvis tallet er oddetall, gang tallet med 3 og legg til 1.
Hvis tallet er partall, del tallet på 2

Repeter denne prosessen på det resulterende nummeret. Repeter igjen på det nummeret, osv.

Collatz formodning er som følger: Alle positive tall, som går gjennom denne prosessen til slutt vil ende på 1, og ende i en evig loop: 1 -> 4 -> 2 -> 1.

Anbefaler å se denne videoen før dere begynner på oppgaven for å få en god forståelse om hva dette handler om.

Dere skal bruke Javascript til å la bruker teste ut Collatz. Strukturen skal være som følger:

Et nummer inputfelt (X) hvor bruker kan skrive inn et tall, og en knapp som utfører følgende:

Javascript koden skal kjøre Collatz prosedyren på tallet brukeren skriver inn i X

Det vil si at om bruker skriver inn tallet 27 og trykker på knappen, så skal koden kjøre Collatz prosedyren på tallet 27.

I koden skal dere ta vare på hvor mange steg tallet bruker på å komme til 1, og hva den høyeste verdien var. Eksempel:

Vi kjører Collatz på tallet 12:

12 -> 6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

Tallet 12 brukte 9 steg på å komme til 1, og den høyeste verdien som ble nådd var 16


Etter utregningene skal siden vise følgende resultater: 


“(Tallet) brukte X steg på å nå 1, og den høyeste verdien som ble nådd var Y”

PS: Hvis et tall ikke når 1 har du enten en bug i koden din, eller så har du vunnet Nobelprisen i Matematikk 😎

Bursdagsparadokset

Hvis du spør noen om hva som er oddsen for at minst 2 personer deler samme bursdag i en gruppe på 23 personer, vil du som regel få et svar som er ganske langt unna det som er sannheten: Rett over 50%

Dette (for de fleste veldig overraskende) svaret er kjernen i det som gjerne kalles The Birthday Problem. Klikk her for å lese mer om dette.

Dere skal bruke Javascript til å teste ut bursdagsparadokset.

På siden skal det være 2 nummer input felt:
1 felt X hvor bruker skriver inn hvor mange personer det skal være i gruppen.
1 felt Y hvor bruker skriver inn hvor mange testgrupper det skal være.
1 knapp som kjører testene.

For eksempel:
Bruker skriver inn 20 i X og 100 i Y. Det vil si at Javascript koden skal sette sammen en random gruppe på 20 personer, sjekke om noen deler bursdag i denne gruppen, og gjenta dette 100 ganger. Alle 100 ganger skal en ny random gruppe på 20 personer settes sammen. Koden skal holde kontroll på i hvor mange av de 100 testene noen (2 eller flere) i gruppen hadde samme bursdag.

PS: Dere trenger ikke ta hensyn til skuddår - anta at alle år har 365 dager.

Etter testene har blitt utført av koden, skal siden vise følgende:

“I en gruppe på X personer, med Y testgrupper, var det en eller flere som delte bursdag i Z.ZZ% av testgruppene”

Y avgjør hvor nøyaktig oddsen er. Prøv X på 23 og Y på 50000 og se om prosenten lander på rett over 50.


Arbeidsflyt

Anbefaler at gruppene diskuterer koden sammen, gjerne med whiteboard/eller penn&papir, og brainstormer seg frem til en god tilnærming. Denne oppgaven funker veldig dårlig hvis alle sitter på hver sin kant, med hver sin løsning.

Hver gruppe skal velge ut en gruppeleder som skal ha hovedansvar for fordeling av oppgaver, ansvar for gjennomføring og ansvarlig for loggføring av arbeidet.

Dere skal bruke 1 GitHub repo som alle skal pushe kode til. En må etablere repo, og invitere inn de andre i gruppen som collaborators. Når dere alle jobber i samme repo kan det skje at det oppstår såkalte merge konflikter. Les her for å finne ut hvordan dere kan unngå merge conflicts og hvordan de lett kan fikses. Spør en lokal veileder om du står fast.

Grupper

Et av de viktigste aspektene ved dette prosjektet er å øve på samarbeid. Samarbeid kan være en tricky ting - folk er forskjellige og det er viktig at alle føler at de blir hørt, samt at alle føler at alle bidrar. Gruppeleder vil ha ansvar for å nå frem til gode løsninger hvis det skulle oppstå uenighet i gruppen. Hvis dere ikke klarer å få til et godt samarbeid, må dere ta kontakt med lokal veileder.

Innlevering

Frist for innlevering av prosjektet er fredag 22. desember

Dette skal leveres:

Link til GitHub repo
Link til GitHub Pages live hostet side
Arbeidslogg

Lykke til!







