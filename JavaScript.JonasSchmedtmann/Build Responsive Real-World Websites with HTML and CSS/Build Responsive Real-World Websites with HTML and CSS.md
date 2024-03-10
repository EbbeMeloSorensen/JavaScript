## Udemy Course: "Build Responsive Real-World Websites with HTML and CSS"

**Table of Contents**

[TOC]

### Instructor: Jonas Schmedtman

https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/


## Summary

Kurset er et hands-on begynderkursus for HTML og CSS og dækker 4 store emner: Web Design, HTML, CSS og Responsive Design

## Den røde tråd

Først HTML, så CSS, så layout, så web design og layout patterns, hvor han pointerer, at det er relevant at være god til både design og implementering, og at der i øvrigt ikke er mange, der er det. Til sidst er der et stort hands-on projekt: Omnifood, hvor man bruger alle de ting, man har lært, til et web site, der er lækkert og responsivt.

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

Han nævner også, at man kan have gavn af at bruge VS Codes color selector tool.

#### Pseudo-classes

...

#### Styling Hyperlinks

#### Using Chrome DevTools

#### CSS Theory #1: Conflicts Beween Selectors

#### CSS Theory #2: Inheritance and the Universal Selector

#### Challenge #1

#### CSS Theory #3: The CSS Box Model

#### Using Margins and Paddings

#### Adding Dimensions

#### Centering our Page

#### Challenge #2

#### CSS Theory #4: Types of Boxes

#### CSS Theory # 5 Absolute Positioning

#### Pseudo-elements

#### Developer Skill #1: Googling and Reading Documentation

#### Developer Skill #2: DEbugging and Asking Questions

#### Challenge #3









