The first folder doesn't use JavaScript - it only uses HTML and CSS, 
so the user experience is just a matter of switching between different html pages.

The second folder is just a copy of the first one, but where we are using JavaScript 
for showing some modal popup dialogs instead of switching to a different html page.
This provides for a richer user experience.

Maximilian siger, at den nok vigtigste funktion for Javascript er at køre i en web browser,
hvor det f.eks. kan ændre html siden uden at behøve at sende et request til serveren, som
så skal sende en ny html fil. Mere specifikt bliver JavaScript i browseren eksekveret af en 
såkaldt "JavaScript engine" som f.eks. V8 (Chrome) eller Spidermonkey (Firefox). Han nævner,
at JavaScript OGSÅ kan køre UAFHÆNGIGT af en browser, f.eks. inden for rammerne af node.js,
som faktisk bare er en extrahering af JavaScript-enginen V8, som kan køre hvor det skal være
og i øvrigt i har adgang til det lokale filsystem (i modsætning til JavaScript eksekveret
inden for rammerne af en wen browser). I den henseende kan man sige, at man eksekverer JavaScript
"server side" på lige fod med hvad man f.eks. kan med Java og PHP.

Han anbefaler at bruge Chrome og Visual Studio Code samt de 2 Visual Studio Code plugins:
"Material Icon Theme" og "Prettier".