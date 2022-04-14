## Udemy Course: APIs in Action - Build API-Based Applications

Instruktøren laver nogle simple web applikationer, som trækker på nogle frit tilgængelige wep apis.

Hun nævner indledningsvis, at hun har det kørende på en Apache Web Server, og hvis man vil gøre noget tilsvarende,
kan man følge anvisningern fra videoen på denne side ("How to install Apache's Web Server on Windows 10"): 
https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/Install-Apache-Web-Server-24-Windows-10-ServerRoot-Error

Apache Web Server er velegnet til at teste en wen applikation før man publicerer den på et kommercielt hosting site,
eller hvis man vil bare vil køre en web applikation på et lokalt netværk

1) Download og udpak filen httpd-2.4.53-win64-VS16.zip fra denne side: https://www.apachelounge.com/download/
   (fra sektionen linket Apache 2.4.53 Win64)
   
2) Kopier folderen Apache24 hen i roden af C:

3) Åbn en command prompt, naviger hen til C:\Apache24\bin og eksekver filen httpd:exe
   
Muligvis virker det allerede her, hvor man så kan åbne url'en localhost:80 og se beskeden "It Works", men det kan også være at man får en 
fejlbesked alla XXX. Dette skyldes formentlig, at en anden service benytter port 80, og det kan meget vel være IIS (Internet Information Services).
Man kan jo f.eks. åbne url'en localhost:80 og se om ikke man får den der blå side med titlen "YYYY". Hvis dette er tilfældet, kan man stoppe
IIS ved at indtaste følgende ved en command prompt:
  
  net stop WAS

..som beskrevet her på siden https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-r2-and-2012/jj635851(v=ws.11)

5) Efterfølgende skulle man så gerne kunne køre httpd.exe igen og få det til at virke, dvs kunne se siden med beskeden "It Works"

6) Efter at have kørt httpd (eller før?) kan man i folderen C:\Apache24\conf finde filen httpd.conf. Her kan man ændre listening port fra 80 til 
   f.eks. 81 for at undgå kollision med IIS
   
7) Genaktiver IIS ved at kalde føldende under en elevated command prompt:

  net start W3SVC
  
.. og verificere, at IIS kører under localhost:80

Hvis man f.eks. placerer en hjemmelavet fil ved navn game.html i folderen C:\Apache24\htdocs og efterfølgende skriver localhost:81/game.html
i en browser, ser man sin egen fil

8) Stop APache Web Serveren ved at eksekvere følgende ved en command prompt i C:\Apache24\bin:

  httpd -k stop
  
.. et kan i øvrigt ske her at man får en fejlbesked, som lader til at kunne afhjælpes ved at eksekvere noget alla:

  httpd -k install
