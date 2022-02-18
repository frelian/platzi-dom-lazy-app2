const maximum = 122;
const minimum = 1;
const random = () => Math.floor(Math.random() * (maximum - minimum) + minimum);

const baseUrl = "https://randomfox.ca/floof/";

const createImageNode = () => {

    // Creo contenedor
    const container = document.createElement('div');

    // Haciendo el random manualmente: imagen.src = `https://randomfox.ca/images/${random()}.jpg`;
    // o uso fetch
    window.fetch( baseUrl )
        .then( resp => resp.json() )
        .then( respJson => {

            container.className = 'p-4';

            // Creo imagen
            const img = document.createElement('img');
            img.className = 'mx-auto';
            img.width = '300';
            img.src = respJson.image;

            // Agrego la imagen al contenedor
            container.appendChild( img );
        })

    return container;
}

const nuevaImagen = createImageNode();
const mountNode = document.getElementById("images");
const button = document.querySelector('button');

// Agrego un listener si al hacer clic reacciono a él.
const addImage = () => {
    const newImage = createImageNode();
    mountNode.appendChild(newImage);
};

button.addEventListener("click", addImage);
