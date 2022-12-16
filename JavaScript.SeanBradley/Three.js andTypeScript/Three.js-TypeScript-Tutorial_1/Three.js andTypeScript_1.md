## Udemy Course: "Three.js and TypeScript"

### Instructor: Sean Bradley

https://www.udemy.com/course/threejs-tutorials/

Trinene i denne guide svar til lektionerne 1-6 i kurset og leder hen til en applikation, der kan køres i development mode med en grøn kube, som snurrer på en sort baggrund.

### Section 1: Introduction

1. Sikr, at du har prerequisites på plads, som er VS Code, Git,  NodeJS og TypeScript ved at eksekvere følgende ved en command prompt:

   ```
   git --version
   node -v
   npm -v
   tsc -v
   ```

2. Hvis ikke TypeScript er installeret, gør det da **"*globalt*"** ved at eksekvere følgende:

   ```
   npm install -g typescript
   ```

   Bemærk, at det er ligegyldigt, hvilken folder man gør det fra.

3. Lav nu et Three.js projekt ved at oprette en projektfolder et arbitrært sted, f.eks. ved navn: `Three.js-TypeScript-Tutorial`, og åbn VS Code med den som projektfolder (f.eks. ved at navigere hen til folderen i en almindelig command prompt og eksekvere `code .`). Eksekver derefter følgende fra et terminalvindue i VS Code og så presse enter for de spørgsmål, der kommer, indil man er tilbage ved prompten:

   ```
   npm init
   ```

   Bemærk, at der så er blevet lavet en `package.json` fil.

4. Installer javascript libraryet Three.js ved at eksekvere følgende

   ```
   npm install three
   ```

   Bemærk, at der tilføjes en `node_modules` folder og noget indhold til `package.json`-filen

5. Lav en folder ved navn `src` (for "source code") samt en folder ved navn `dist` (for "distribution") ved siden af `node_modules`-folderen og lav for både `src`- og  `dist`-folderen de 2 subfoldere: `client` og `server`.

6. Lav en ny fil ved navn `index.html` i `client`-folderen med følgende indhold:

   ```html
   <!DOCTYPE html>
   <html lang="en">
       <head>
           <meta charset="utf-8" />
           <meta name="viewport" content="width=device-width, initial-scale=1" />
           <title>Three.js TypeScript Tutorials by Sean Bradley : https://sbcode.net/threejs</title>
           <style>
               body {
                   overflow: hidden;
                   margin: 0px;
               }
           </style>
       </head>
   
       <body>
           <script type="module" src="bundle.js"></script>
       </body>
   </html>
   ```

7. Lav i `src/client`-folderen en fil ved navn `client.ts` med følgende indhold:

   ```typescript
   import * as THREE from 'three'
   import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
   
   const scene = new THREE.Scene()
   
   const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
   camera.position.z = 2
   
   const renderer = new THREE.WebGLRenderer()
   renderer.setSize(window.innerWidth, window.innerHeight)
   document.body.appendChild(renderer.domElement)
   
   const controls = new OrbitControls(camera, renderer.domElement)
   
   const geometry = new THREE.BoxGeometry()
   const material = new THREE.MeshBasicMaterial({
       color: 0x00ff00,
       wireframe: true,
   })
   
   const cube = new THREE.Mesh(geometry, material)
   scene.add(cube)
   
   window.addEventListener('resize', onWindowResize, false)
   function onWindowResize() {
       camera.aspect = window.innerWidth / window.innerHeight
       camera.updateProjectionMatrix()
       renderer.setSize(window.innerWidth, window.innerHeight)
       render()
   }
   
   function animate() {
       requestAnimationFrame(animate)
   
       cube.rotation.x += 0.01
       cube.rotation.y += 0.01
   
       controls.update()
   
       render()
   }
   
   function render() {
       renderer.render(scene, camera)
   }
   animate()
   ```

8. Lav i `src/client`-folderen en fil ved navn `tsconfig.json` med følgende indhold:

   ```
   {
       "compilerOptions": {
           "target": "ES6",
           "moduleResolution": "node",
           "strict": true
       },
       "include": ["**/*.ts"]
   }
   ```

9. Installer typescript type definitions for projektet ved at eksekvere følgende i terminalvinduet i VS code:

   ```
   npm install @types/three
   ```

   Bemærk, at det kan være nødvendigt at trykke F1 i VS Code og så vælge "TypeScript - Restart TS Server" for at få det til at virke.

10. Sæt nu "WebPack Dev Server" op ved at eksekvere følgende i terminalvinduet i VS code:

    ```
    npm install webpack webpack-cli webpack-dev-server webpack-merge ts-loader
    ```

    De skal kun bruges i forbindelse med *udvikling* af applikationen

11. Eksekver også følgende:

    ```
    npm install typescript
    ```

12. Lav i `src/client`-folderen en fil ved navn `webpack.common.js` med følgende indhold:

    ```javascript
    const path = require('path');
    
    module.exports = {
        entry: './src/client/client.ts',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            alias: {
                three: path.resolve('./node_modules/three')
            },
            extensions: ['.tsx', '.ts', '.js'],
        },
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, '../../dist/client'),
        }
    };
    ```

13. Lav i `src/client`-folderen en fil ved navn `webpack.dev.js` med følgende indhold:

    ```javascript
    const { merge } = require('webpack-merge')
    const common = require('./webpack.common.js')
    const path = require('path');
    
    module.exports = merge(common, {
        mode: 'development',
        devtool: 'eval-source-map',
        devServer: {
            static: {
                directory: path.join(__dirname, '../../dist/client'),
            },
            hot: true,
        },
    })
    ```

14. Tilføj følgende linie i `scripts`-sektionen af `package.json`-filen:

    ```
    "scripts": {
        "dev": "webpack serve --config ./src/client/webpack.dev.js",
        "test".....
      },
    ```

15. Kør applikationen ved at eksekvere følgende i terminalvinduet i VS code:

    ```
    npm run dev
    ```

    Hvis man nu åbner en browser og indtaster `localhost:8080`, skulle man så gerne kunne se en grøn kasse, der snurrer rundt på en sort baggrund.