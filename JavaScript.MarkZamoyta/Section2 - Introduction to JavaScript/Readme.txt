Første øvelse består i at sætte en Hello World applikation op

1) Sikr, at git, node.js og vs code er installeret

2) Klon Hello-World git repositoryet ned fra Github ved at køre følgende fra command prompten:

		git clone git@github.com:pluralsight/web-dev-starter.git
	
3) Slet den .git folder, der blev lavet i forbindelse med kloningen, da folderen ellers ignoreres
   af dit eget git repository (tilsyneladende er det ikke så godt at have git repositoryes inde
   i andre)
   
4) Installer de nødvendige afhængigheder og åbn projektet i vs code ved at skrive følgende ved command prompten:

		cd web-dev-starter
		npm install
		code .
		
5) Åbn en terminal inde i vs code og start applikationen op ved at skrive følgende ved prompten:

		npm run start
		
	Bemærk, at ændringer af koden, f.eks. "Hello World"-beskeden slår direkte igennem, mens applikationen kører.
	Bemærk også, at man bare kan lukke terminalen og arbejde videre uden at applikationen lukker ned
		
6) Download Exercise files fra Pluralight kurset og åbn 05-demos-after. Kør ligesom før npm install fra
   command prompten og derefter npm run install inde fra vs code for at køre web applikationen.
   
7) Mens applikationen kører i en browser, så højreklik på baggrunden, vælg inspect og skift til Console-tabben.
   Han viser bare at man kan gøre det, men bruger det ikke indtil videre til noget
   
Til sidst nævner han, at vi ikke har brugt Java Script endnu, men at vi går i gang med det i næste lektion