import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

// Scene: "A tree like structure of meshes, lights, groups, 3D positions, and cameras"
const scene1 = new THREE.Scene()
scene1.background = new THREE.Color(0x222288) // Sætter scenens baggrundsfarve

const scene2 = new THREE.Scene()
scene2.background = new THREE.Color(0x882200) // Sætter scenens baggrundsfarve

// Camera: "Describes the view boundaries of the scene within the Frustum dimensions"
const camera1 = new THREE.PerspectiveCamera(
    75, // Field of view i grader, default er 50
    //window.innerWidth / window.innerHeight, // Aspect ratio skal gerne passe med vinduets dimensioner
    1,
    0.1,  // Dette er front clipping plane
    1000) // Dette er back clipping plane

const camera2 = new THREE.OrthographicCamera(-1, 1, 1, -1, .1, 2.7)
camera2.lookAt(new THREE.Vector3(0, 0, 0))

camera1.position.z = 2
camera2.position.z = 2

// Her får vi fat i bestemte navngivne elementer i html-filen
const canvas1 = document.getElementById("c1") as HTMLCanvasElement
const canvas2 = document.getElementById("c2") as HTMLCanvasElement
const canvas3 = document.getElementById("c3") as HTMLCanvasElement
const canvas4 = document.getElementById("c4") as HTMLCanvasElement

const renderer1 = new THREE.WebGLRenderer({canvas:canvas1}) // Dette er default renderen, som også er den hurtigste
renderer1.setSize(200, 200) // Disse skal sættes
const renderer2 = new THREE.WebGLRenderer({canvas:canvas2})
renderer2.setSize(200, 200)
const renderer3 = new THREE.WebGLRenderer({canvas:canvas3})
renderer3.setSize(200, 200)
const renderer4 = new THREE.WebGLRenderer({canvas:canvas4})
renderer4.setSize(200, 200)

// Dette er udkommenterer, fordi vi i dette eksempel bruger vores egne canvases
// document.body.appendChild(renderer.domElement) 

// Dette giver brugeren mulighed for at styre kameraet.
// Bemærk, at vi attacher til renderer 1. Det betyder, at det er den, der tager imod mouse events,
// men det påvirker stadig andre renderers mht hvad de viser
const controls = new OrbitControls(camera1, renderer1.domElement)

const boxGeometry1 = new THREE.BoxGeometry()
const torusKnotGeometry1 = new THREE.TorusKnotGeometry()
const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true,
})

const mesh1 = new THREE.Mesh(boxGeometry1, material)
mesh1.scale.x = .5;
mesh1.scale.y = .5;
mesh1.scale.z = .5;
scene1.add(mesh1)
const mesh2 = new THREE.Mesh(torusKnotGeometry1, material)
scene2.add(mesh2)

// Denne kaldes, når man ændrer størrelsen på browser-vinduet. Hele blokken kan udelades,
// men så ser det skørt ud, når man resizer browser-vinduet
// window.addEventListener('resize', onWindowResize, false)
// function onWindowResize() {
//     camera1.aspect = window.innerWidth / window.innerHeight
//     camera1.updateProjectionMatrix()
//     renderer.setSize(window.innerWidth, window.innerHeight)
//     render()
// }

function animate() {
    requestAnimationFrame(animate)

    // Dette snurrer scenen rundt, når brugeren ikke selv tager kontrol med musen
    mesh1.rotation.x += 0.01
    mesh1.rotation.y += 0.01
    mesh2.rotation.y += 0.01

    controls.update()

    render()
}

// Bemærk, at vi har 4 renderes, hvoraf de 3 bruger camera1, som i øvrigt er et perspektiv-kamera,
// mens den fjerde renderer bruger camera2, som er ortografisk.
// Bemærk også, at 3 af renderne viser scene1, mens en fjerde viser scene2
function render() {
    renderer1.render(scene1, camera1)
    renderer2.render(scene1, camera2)
    renderer3.render(scene2, camera1)
    renderer4.render(scene1, camera1)
}
animate()