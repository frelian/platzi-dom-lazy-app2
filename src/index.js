import { registerImage } from './lazy';

const maximun = 121;
const minimun = 1;
const random = () => Math.floor(Math.random()*(maximun - minimun)+ minimun)

const createImageNode = () => {
    const container = document.createElement('div');
    container.className = "p-4";

    const imagen = document.createElement('img');
    imagen.className = "mx-auto";
    imagen.width = '320';

    /*
      1. forma
      Si no queremos que una imagen cargue tenemos que eliminar
      la parte que la carga ya que esta linea trae la url de la imagen
      por lo tanto la hara cargar siempre.

      Pasaremos este trabajo de cargar la imagen al lazy loading

      2.forma

      La informacion de la url se la dejaremos a la imagen pero 
      utilizaremos el dataset  que es una propiedad de html

      Dataset se utiliza mucho para comunicar informacion entre html
      y js, es muy comun tener diferentes data-? para comunicar la info
    
    */

    //imagen.src = `https://randomfox.ca/images/${random()}.jpg`;

    // Esto agregara a la propieda data-src de mi imagen la url
    imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;
    
  
    container.appendChild(imagen)

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