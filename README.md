# Project HBO Frontend
Frontend van het HBO project. Dit is een simpele site, de backend staat in een andere repo.

### Gebruikte tools
- nginx: de webserver die we gebruiken.
- Docker: om gemakkelijk containers met linux (of iets anders) te draaien op een computer.

### Installatie
Clone eerst de repo, en voer daarna de volgende commando's uit om de dockerimage te runnen.

#### Stap 1:

``
docker build -t frontend_hbo .
``

-t is de flag die voor frontend_hbo staat. Je kunt het ook een andere naam geven, door frontend_hbo aan te passen. Noem het zo makkelijk mogelijk, dit heb je later nodig om het te runnen

#### Stap 2:
Je hebt net de docker image geinstalleerd. Nu is het tijd om de docker-container te runnen, waardoor je uiteindelijk ook je site kan runnen.

``
docker run -d -p 8080:80 --name frontend_hbo_container frontend_hbo
``

Het is een lang commando, maar het doet het volgende:
- -d zorgt ervoor dat de container in de achtergrond draait.
- -p 8080:80 zorgt voor de port-forwarding. Zonder dit, kan je de website niet lokaal openen. 8080 is de poort die je op je pc kan openen(localhost:8080, maar mag ook bijv. 1234 zijn) en port 80 is voor nginx, omdat nginx op port 80 draait.
- --name frontend_hbo_container is de naam die je geeft voor de container.
- frontend_hbo is het image dat moet worden gebruikt. Dus voer de naam in die je net hebt aangemaakt voor het maken van de image.

#### Stap 3:
We zijn er bijna. Maar nog niet helemaal; maar wel heel dichtbij. Nu hoef je alleen nog maar de website te openen. Dit kan met het volgende url:

``
localhost:8080
``

Als je het een andere poort hebt gegeven, zet dan achter de ``:`` neer welke poort je hebt gebruikt.