## Udemy Course: "Build Responsive Real-World Websites with HTML and CSS"

**Table of Contents**

[TOC]

### Instructor: Jonas Schmedtman

https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/


## Summary

Kurset er et hands-on begynderkursus for HTML og CSS og dækker 4 store emner: Web Design, HTML, CSS og Responsive Design

## Den røde tråd

Først HTML, så CSS, så layout, så web design og layout patterns, hvor han pointerer, at det er relevant at være god til både design og implementering, og at der i øvrigt ikke er mange, der er det. Til sidst er der et stort hands-on projekt: Omnifood, hvor man bruger alle de ting, man har lært, til et web site, der er lækkert og responsivt.

Bemærk i øvrigt, at hvis man har godt styr på kerneteknologierne html, css og java script, er man uafhængig af værktøjer som Wordpress og Wix til at lave hjemmesider.

### Section 1: Welcome & First Steps

Indledning, Hello-World eksempel og praktiske ting såsom opsætning af udviklingsmiljø, hvor han bruger VS Code.

#### Course Structure and Projects

En ret god lecture, hvor han giver et overblik over strukturen for kurset, den røde tråd præsentation af de projekter, der gennemgås.

#### Read Before You Start!

Bare en slide med Information om kursusmateriale (såsom GitHub repository: https://github.com/jonasschmedtmann/html-css-course), Discord community, resourcer (såsom hans eget site med masser af ressourcer: https://codingheroes.io/resources/) og tips.

#### A High-Level Overview of Web Development

Han fortæller om, hvordan det grundlæggende fungerer, når man browser på nettet. Man sender et web **request** til en server, som så sender et **response**, der består af **html**-filer, **css**-filer, **javascript**-filer og f.eks. billedfiler. Bemærk, at der også sendes javascript kode til klienten. Generelt gælder i øvrigt, at browseren hos klienten forstår netop disse 3 sprog (html, css og javascript), så responset skal altid være på den form. Man refererer også ofte til disse 3 teknologier som **"front-end-teknologier"**. Han forklarer, hvad et **"static website"** er - det er et website, hvor man bare kopierer de html, css og js filer, der ligger på serveren, til browseren.

En **"dynamic website"** er kendetegnet ved at den løbende *genererer* de html-, css- og javascript-filer, der sendes til klienten. For et dynamisk website har man en mere sofistikeret backend, der baserer sig på **"backend-teknologier"** som f.eks. node.js, php eller python.

![alt](sec_01_overview_of_web_development.png)

HTML beskæftiger sig med *content*. CSS beskæftiger sig med *styling* og layout. JavaScript er selve programmeringssproget, og tillader os at *ændre* content eller styling og generelt at lave dynamiske effekter.

#### Setting Up Our Code Editor

Så kommer han med nogle anbefalinger mht hvordan man kan sætte Visual Studio Code op:

Extensions:

* Prettier - formatterer koden, hver gang man gemmer
* One Monokai Theme - Highlighter kode i bestemte farver. Husk at klikke knappen: "Set Color Theme" efter installering.

Settings (åbn ved at klikke på møtrikken nederst til venstre i brugergrænsefladen):

* I Settings: Skriv "default formatter" i filteret. Sæt her Default formatter til Prettier
* I Settings: Skriv "format on save" i filteret. Check her checkboksen 'Format On Save'
* I Settings: Skriv "auto save" i filteret. Sæt her Auto Save til 'onFocusChange'
* I Settings: Skriv "tab size" i filteret. Sæt her Tab Size til 2
* I Settings/Themes/Color Theme: Sæt color scheme til et eller andet
* I Settings/Themes/File Icon Theme:  Vælg "Seti"

Bemærk, med VS Code arbejder man altid i en folder, som i øvrigt benævnes "Project folderen"

Øvelse: Lav en projektfolder og opret heri en tom fil ved navn index.html. Indtast i filen et udråbstegn og tryk derefter på tab-tasten - så får man den standard html struktur, som er vist nedenfor:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```

Her kan man så f.eks. ændre titlen og tilføje en header og en paragraph i body elementet som vist nedenfor:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My first webpage</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>My name is Ebbe, and this is my first webpage</p>
  </body>
</html>
```

Han anbefaler i øvrigt at placere VS Code side om side med en Chrome browser, hvor man kan se sin web side, mens man arbejder på html-koden.

Han anbefaler at bruge et website, der heddeer CodePen: https://codepen.io/. Det er et forum, hvor man kan stille spørgsmål og udveksle erfaringer med andre frontend-udviklere. Derudover giver han nogle generelle studietips.

### Section 2: HTML Fundamentals

Her gennemgår han HTML basics ved at kode en web page med en kort popular-style artikel om HTML med nogle billeder, links osv.

#### Section Intro

Han præsenterer øvelsen. Han refererer i den forbindelse til HTML som det fundamentale sprog i web development, og nævner, at HTML, CSS og Java Script udgør de 3 core technologies i web development.

#### Introduction to HTML

Han introducerer HTML og begrebet HTML element, som HTML pages er bygget af samt strukturen for HTML elementer med opening og closing tags.

#### HTML Document Structure

Han nævner, at main page for et web site altid bør hedde index.html. Et html document har en hierarkisk struktur med et `html` element som sit main element, som indeholde de 2 child elementer `head` (ikke at forveksle med `header`, som er et andet element) samt `body`, som så indeholder et væld af andre html elementer.

#### Text Elements

Han introducer heading elementerne `h1` til `h6`. Han understreger, at en page kun bør have èn `h1` heading! Han snakker også om paragraph elementet `p`.

Han viser, hvordan man kan operere med kommentarer i html filer med syntaxen `<!-- bla bla -->`. 

Han demonstrerer bold elementet `b`, som kan bruges til at ændre fonten for noget tekst til fed. I den forbindelse nævner han, at elementet `b` ikke har såkaldt "semantisk betydning", og at man derfor bør benytte strong elementet `strong`.

Til sidst demonstrerer han emphasize elementet `em`, som har semantisk betydning og gør tekst kursiv (italic).

#### More Text Elements: Lists

Han introducerer ordered list elementet `ol`, som svarer til en numbered list i f.eks. Word. En ordered list har et antal child elementer af type list item, `li`. Han introducerer også varianten unordered list `ul`, som svarer til en bullet list i Word.

#### Images and Attributes

Han introducerer image elementet `img`, som i øvrigt ikke har noget closing tag. Han benytter lejligheden til at introducere *attributter*, som knytter sig til html elementer. Image elementet har f.eks attributterne `src`, `alt` og `width`.

#### Hyperlinks

Han introducerer "anchor" elementet `a` som bruges til at lave hyperlinks i et html dokument, hvor man angiver url´en i anchorets `src`-attribute. Han nævner i øvrigt at den side, som han linker til (https://developer.mozilla.org/en-US/docs/Web/HTML), er meget nyttig mht som web developer at finde information om html. Han bemærker, at hvis man sætter anchorets "target" attribute til "_blank" udvirker det, at der åbnes en ny side, når der klikkes på linket.

Dernæst viser han, hvordam man kan linke til et andet html dokument på samme web site. Det er lidt anderledes end at linke til url'er på internettet, derved at man bruger attributten `href`og ikke `src`. Han bemærker også at man kan lave et placeholder link ved at sætte href attributten til "#", hvilket kan være nyttigt, mens man arbejder på en web page.

#### Structuring our Page

Han introducerer container elementerne: `nav` (navigation), `header`, `article` og `footer`. De bruges til at strukturere og gruppere andre elementer i logiske enheder, hvilket er vigtigt af hensyn til semantisk html og også styling med css.

#### A Note on Semantic HTML

Han uddyber, hvad semantic html er. Det handler om, at man ikke bare skal beskæftige sig med, hvordan html elementer tager sig ud på en webside. Det er også vigtigt at beskæftige sig med, hvad de *betyder*. Det faciliterer f.eks. search engine optimization og accessibility, der f.eks. henvender sig til blinde, der benytter screen readers.

#### Installing Additional VS Code Extensions

Ud over de VS Code extensions, han demonstrerede i indledningen, anbefaler han her at installere følgende:

* image preview (gør, at der vises et lille preview af billedet i "gutteren" af Explorer panelet i VS Code)
* Color Highlight (nyttigt til at visualisere farver i CSS)
* Auto Rename Tag (gør, at closing tag automatisk ændrer sig, hvis man ændrer opening tag for et element)
* Live Server (meget populær extension, som gør, at der popper en "Go Live"-knap op i bunden af VS Code - hvis man klikker på den åbnes html siden i et browser vindue, som opdateres, hver gang man saver sit html dokument)

#### Challenge #1

Her introducerer han html elementer `aside`, som bruges til "secondary information that complements the information in the main part of the page". Opgaven går ud på over footeren at lave en aside sektion med en bulleted list, der indeholder nogle lidt mere komplekse list item elementer, der hver har et billede, et link og noget tekst.

#### Challenge #2

Her foreslår han at man arbejder med endnu en challenge, der handler om at lave en lille reklameside for et par sko. Han foreslår i øvrigt at gøre det på web sitet CodePen, som han nævnte tidligere: https://codepen.io/. Det virker egentlig ret let og minder om det at køre VS Code med extensionen Live Server. I øvrigt er det et fint forum til at udveksle kode og spørge om hjælp.

### Section 3: CSS Fundamentals

Her gennemgår han CSS basics ved at ..?

#### Section Intro

Han introducerer CSS, som mestendels handler om *styling* af det indhold, der skrives i html.

#### Introduction to CSS

Man har som regel et antal **css rules** defineret i en særskilt fil med extensionen css, som man så kan referere til fra en html-fil. En css rule er struktureret som vist nedenfor. Den består den af en **Selector** (som kan være af flere forskellige typer) samt en **Declaration block**, der omfatter et antal **Declarations**, også bare kaldet **Styles**. En declaration består af en **css property** med en værdi.

![alt](sec_03_structure_of_css_rule.png)

#### Inline, Internal and External CSS

Der er 3 måder hvorpå css kan specificeres: inline, internal og eksternal. Med *inline* specificerer man style i individuelle html-elementer. Med *internal* specificerer man det i en blok i html-dokumentets head-element. Med *external* specificerer man det i en særskilt css-fil, som man refererer til fra et style element i html-dokumentets head-element. External er så klart den bedste praksis.

#### Styling Text

Her demonstrerer han, hvordan man kan style text med forskellige css properties, som illustreret nedenfor:

```css
h1 {
    color: blue;
    font-size: 26px;
    font-family: sans-serif;
    text-transform: uppercase;
    font-style: italic;
}

p {
    font-size: 26px;
    font-family: sans-serif;
    line-height: 1.5;
}
```

#### Combining Selectors

Han demonstrerer, hvordan en css rule kan specificere en style for et antal forskellige typer af html elementer under anvendelse af en såkaldt **list selector**, som illustreret nedenfor:

```css
h1, h2, h3, h4, p, li {
    font-family: sans-serif;
}
```

Bemærk, at der stadig er tale om én selector, nemlig en list selector, som bare omhandler flere forskellige html tags.

Han demonstrerer også **descendant selectors**, der kan bruges til på mere kirurgisk vis at ændre style, f.eks. for eksemplet nedenfor, hvor man sørger for, at footers skrives med lille font ved at specificere, at stylen kun handler om paragraph-elementer, der hører under footer-elementer

```css
footer p {
    font-size: 16px;
}
```

Han tilføjer, at man bør være varsom med at bruge descendant selectors, og nærmest bør undgå det, da det kan føre til kode, der er svær at vedligeholde. I stedet anbefaler han at bruge class selectors og id selectors.

#### Class and ID Selectors

Kirurgisk styring af style kan foretages med en hash selector, som gælder for et html element med et givet id, som illustreret nedenfor:

```html
<p id="author">Posted by <strong>Laura Jones</strong> on Monday, June 21st 2027</p>
```

```css
#author {
	font-style: italic;
}
```

Bemærk, at det altså hedder en hash selector og ikke en id selector. Bemærk også, at den starter med et hash tag.

Et element id skal være unikt i et html dokument, så hash selectoren påvirker et individuelt element i et html dokument. Attributten class derimod kan sættes til samme værdi for flere html elementer, og disse elementer kan derefter styles med den såkaldte class selector, som illustreret nedenfor:

```html
<p class="related-author">By Jim Dillon</p>
<p class="related-author">By Jonas Schmedtmann</p>
```

```css
.related-author {
    font-size: 18px;
    font-weight: bold;
}
```

Bemærk, at class selectors starter med punktum.

I praksis bruger man sædvanligvis altid class selectors frem for hash selectors, også fordi de er mere genbrugelige.

#### Working With Colors

Styling med farver. Nedenfor ses nogle eksempler på hvordan man kan specificere værdier for farve-properties såsom 'color' eller  background-color i css:

```css
color: orange;
color: rgb(0, 255, 255);
color: rgb(0, 255, 255, 0.3); /* med alfa-værdi for transparency */
color: #00ffff; /* hexadecimal notation*/
color: #0ff /* (shorthand hexadecimal notation - eksemplet her svarer til #00ffff) */
```

Han nævner også, at man kan have gavn af at bruge VS Codes color picker tool. Han bemærker i øvrigt, at hvis der er forskellige modstridende css rules for samme element, så er det den seneste, der gælder.

#### Pseudo-classes

Man kan knytte en såkaldt **pseudo class** til en selector for at påvirke udvalgte child elementer for et givet parent element. Det kan f.eks. bruges til at style en liste med alternerende farver som i eksemplet nedenfor:

```
li:nth-child(odd) {
  color: grey;
}
```

Pseudo classes er specielt brugbare, når alle child elementer for et givet element er ens, som f.eks. for en list, men er ikke så intuitive, når et element har forskellige child elements, som f.eks. i en tilfælde som dette:

```
article p:first-child {
  color: red;
}
```

..dette virker kun, hvis første child element for article elementet er en paragraph.

#### Styling Hyperlinks

Pseudo classes kan f.eks. bruges til at style hyperlinks ud fra forskellige states, afhængigt af, om brugeren f.eks. hover over eller klikker på dem med musen.

#### Using Chrome DevTools

Man aktiverer development tools i sin Chrome browser ved at højreklikke et sted på web pagen og så klikke  "Inspect" eller "Undersøg" i context menuen. Så får man et view med en masse forskellige tabs.

Den første tab hedder **"Elements"**, og her kan man se den html kode, der gør sig gældende. Man kan endda få highlighted html elementer i viewet ved at hovere musen over elementets underliggende html element i html-koden, hvilket er ret nyttigt. Elements-tabben har også en vigtig sektion, der hedder "Styles" eller, hvor man kan inspicere, hvilke css rules der påvirker et givet element, som man klikker på ovre i html-kode-viewet. Man kan endda manipulere stylingen ved at tilføje, aktivere og deaktivere styles med Dev Tools, hvilket kan være nyttigt for at teste ting under udvikling. Desuden kan man simulere states som f.eks. hover for et element for at force en given styling.

Han kommer ikke omkring de andre tabs her, men han nævner, at DevTools er "absolutely essential" for at lave et web site på en effektiv måde.

#### CSS Theory #1: Conflicts Beween Selectors

Her snakker han om, hvad der sker, når flere forskellige css rules dækker samme html element. Som udgangspunkt gælder alle regler, og det er meget normalt, at de supplerer hinanden, men hvis de er uenige om en property som f.eks. font-size, bruges kriterierne illustreret nedenfor til at afgøre, hvilken style der så gælder:

![alt](sec_03_conflicting_styles.png)

Det er åbenbart meget almindeligt at selectors er uenige, så det er vigtigt at kunne gennemskue, hvorfor en given selector vinder. Man har mulighed for at gennemtvinge noget med ID selectors eller en endnu stærkere mekanisme, der går på at skrive `!important` efter en given css declaration, men man bør prøve at undgå disse 2 metoder. 

#### CSS Theory #2: Inheritance and the Universal Selector

Inheritance i css går på, at html elementer generelt får den samme style som deres parent elementer i den hierarkiske html struktur. Man kan f.eks. sætte nogle properties for body-elementet i et html dokument. Det gælder ikke for alle elementer, men i hvert fald for dem, der omhandler tekst. Hvis der er "konfliktende" styles, har nedarvede styles lav prioritet.

Han introducerer også den såkaldte **universal selector**, som en slags wildcard selector, der gælder for alle html elementer, og som har en lav prioritet i forhold til andre selectors. Der opereres i øvrigt ikke med nedarvning for den universelle selector.

#### Challenge #1

#### CSS Theory #3: The CSS Box Model

Han introducerer the **"CSS Box Model"** og nævner, at det er et af de mest fundamentale koncepter i CSS. Den illustreres nedenfor og går på, at ethvert element repræsenteres af et rektangulært område på skærmen. Der benyttes de samme koncepter med border, padding og margin som i wpf.

![alt](sec_03_css_box_model.png) 

#### Using Margins and Paddings

Man bruger padding ved at skrive en css declaration som den nedenstående, som så gælder hele vejen rundt om et givet element:

```
padding: 20px;
```

Box modellen vises i øvrigt i DevTools under Elements-tabben, som vist nedenfor:

![alt](sec_03_css_box_model_in_devtools.png)

Man kan holde musen over de forskellige områder for at fremhæve de tilsvarende områder i browser viewet.

Padding kan også sættes forskellige for de forskellige sider, som illustreret nedenfor:

```
padding: 20px; /* Gælder hele vejen rundt */
padding-left: 40px; /* Overrider for venstre side (de andre 3 sider har så stadig en padding på 20px) */
padding-right: 40px; /* Overrider for højre side */
padding: 20px 40px; /* Shorthand property, der giver samme resultat som de ovenstående 3 linier */
```

Han nævner, at en populær teknik er at bruge en såkaldt global reset, hvor man for den universelle selector sætter margin og padding til 0, som vist nedenfor;

```
* {
  margin: 0;
  padding: 0;
}
```

Så erstatter man alle default paddings og margins med 0, hvilket gør siden meget kompakt, og så kan man style den derfra. Han sætter nogle værdier for margin-bottom for nogle af de css rules, der er. Han bemærker i øvrigt, at to margener, der dækker over hinanden, som f.eks hvis man har et element med en nedre margen over et element med en øvre margen, så deler de 2 margener området, således at den største af dem bliver gældende, frem for at man har en effektiv margen svarende til summen af de 2 margener. Det kalder man for **"collapsing margins"**.

Han nævner, at han foretrækker at have css rules for de største elementer såsom nav og article i toppen af sine css-filer.

Han summerer med at sige, at padding er mest relevant, hvis man f.eks. har elementer med en baggrundsfarve, som gerne må fylde lidt mere, mens margin er velegnet til at skabe plads mellem elementer. Som et sidste tip anbefaler han så vidt muligt at skabe vertikal spacing under anvendelse af margin-bottom frem for margin-top og så vidt muligt prøve at undgå at mixe de 2.

#### Adding Dimensions

Nu demonstrerer han, hvordan man kan sætte dimensionerne, dvs width og height for *content*-delen af html-elementerne, dvs det inderste af css box modellen. Det er f.eks. nyttigt for nogle af de elementer, der har en baggrund samt for billeder. Hvis man sætter bare den ene dimension for et billede, følger den anden sædvanligvis med for at bevare aspect ratio, men hvis der er flere selectors i spil, kan det at sætte den ene dimension gøre, at aspect ratio ændres. Det kan man rette op på ved at sætte den anden dimension til auto, hvilket gør, at aspect ratio for det originale billede bibeholdes.

Han demonstrerer i øvrigt, hvordan man frem for at sætte f.eks. width til et antal pixels, som vi har gjort indtil nu, kan sætte den til en procentdel af den tilgængelige plads, som illustreret nedenfor:

```
.post-img {
  width: 100%;
  height: auto;
}
```

#### Centering our Page

Nu viser han så et trick til at centrere content. Det handler om at placere det, man gerne vil have centreret, i et container element, som passende kan være `div`, som er et general purpose container element uden semantisk betydning. 

#### Challenge #2

Her anbefaler han igen at man bruger de teknikker, man har lært, til at style skoreklamen fra tidligere. 

#### CSS Theory #4: Types of Boxes

Her taler han om, hvilke forskellige typer af **"boxes"**, der eksisterer i CSS box modellen. Mht layout opfører et html element sig på en måde, der afhænger af hvilken **"box type"** det har. Der opereres med de 3 forskellige box types: **"block-level"**, **"inline"** og **"inline block"**. De forskellige typer af html elementer har som udgangspunkt en default box type, som man imidlertid kan override med en css rule, hvis man ønsker en bestemt effekt såsom at placere anchors under hinanden i stedet for efter hinanden, eller såsom at placere list items efter hinanden i stedet for under hinanden.

Elementer med box typen *block-level* er kendetegnet ved at de udfylder den plads, der er tilgængelig. Block level elementer kan ikke være side om side men placeres *under* hinanden. De fleste html elementer har block level som default box type. Som eksempler herpå kan nævnes body, main, header, footer, section, nav, aside, div, h1-h6, p, ul, ol, li, article osv.

Elementer med box typen *inline* er kendetegnet ved at de ikke fylder mere end de behøver, uanset hvor meget plads der er til rådighed. I modsætning til block level elementer danner de ikke et line break efter sig. CSS declarations for width og height påvirker ikke inline elementer. CSS declarations for padding og margin påvirker kun inline elementer fsa den horisontaledel, dvs for left og right. Som eksempler herpå kan nævnes html-elementerne strong, a, em, button osv.

Til sidst er der elementer med box typen inline block, som kombinerer egenskaber for de 2 første box typer. Man kan f.eks. få vertikale margins og paddings til at gælde for inline elementer ved at sætte deres box type til inline block. Image er et eksempel på et element med box typen inline-block. Man kan override box-typen for en givet elementtype ved assigne en css declaration for propertyen display, som i eksemplet vist nedenfor:

```
nav a:link {
  display: inline-block;
}
```

#### CSS Theory # 5 Absolute Positioning

Normalt positioneres html elementer i henhold til såkaldt **"normal flow"**, hvilket indebærer, at de placeres i henhold til deres rækkefølge i html koden. Det er imidlertid også en mulighed at benytte såkaldt **"absolute positioning"** for et element. Sådan et element placeres under anvendelse af css declarations for top, bottom, left og right. Man skal også lave en css declaration, hvor man sætter propertyen position til absolute og nok så vigtigt sætte propertyen position til relative for det pågældende parent element, som illustreret nedenfor:

```
.container {
  position: relative;
}

button {
  bottom: 20 px;
  right: 20 px;
  position: absolute;
}
```

Han nævner, at man sædvanligvis kun bruger absolute positioning til finishing touches og ikke som bærende teknik for layout.

Han kommer i øvrigt med et sjovt lille hint, som går på at man kan trykke Windows tast + punktum for at lave en emoji karakter som en del af teksten f.eks. i en button element.

#### Pseudo-elements

#### Developer Skill #1: Googling and Reading Documentation

#### Developer Skill #2: Debugging and Asking Questions

#### Challenge #3









