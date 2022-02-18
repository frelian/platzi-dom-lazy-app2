import jsx from '../_snowpack/pkg/hyperscript.js';
import { registerImage } from './lazy.js';

const maximun = 121;
const minimun = 1;
const random = () => Math.floor(Math.random()*(maximun - minimun)+ minimun)

const createImageNode = () => {

    /*
        const image = document.createElement('img');
        image.className = "mx-auto";
        image.width = '320';
        image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;
    */
    // Uso hypescript para hacer las 4 lineas anteriores
    const image = jsx("img.mx-auto", {
        width: "320",
        'data-src': `https://randomfox.ca/images/${random()}.jpg`,
    })
    
    /*
        const container = document.createElement('div');
        container.className = "p-4";
    */
    // Las dos anteriores lineas las puedo resumir con la ayuda de hyperscript
    const container = jsx("div.p-4.mt-3", image);

    // Usando react: const container = <div className="p-4 mt-3"><imagen /> </div>

    // jsx -> html (react)

    // le paso la imagen al contenedor usando hypescript 
    // container.appendChild(image)

    appendedImages++;
    printLog();

    return container
}

const mountNode = document.getElementById('images');
const addButton = document.querySelector('button');
const cleanButton = document.getElementById('clean');

const addImage = () => 
{ 
    const newImage = createImageNode();
    mountNode.append(newImage);
    registerImage(newImage);
}

const cleanImages = () => {

    console.log(mountNode.childNodes);

    [...mountNode.childNodes].forEach(child => {
        child.remove();
    }) 

    // limpio contadores
    appendedImages = 0;
    loadedImages = 0;

}

addButton.addEventListener("click", addImage)
cleanButton.addEventListener("click", cleanImages)