const isIntersecting = (entry) => {
    // Tambien le puedo decir, si está a 200px lejos de la pantalla....
    return entry.isIntersecting // true si esta dentro de la pantalla
}

const loadImage = (entry) => {
    const container = entry.target; // container (DIV)

    // Como se que la imagen es el 1er elemento del DIV entonces uso firstChild ya no es necesario: container.querySelector("img")
    const image = container.firstChild;
    const url = image.dataset.src;

    // Cargo la imagen
    image.src = url;
    
    // debugger;
    // console.log(container.nodeName);

    loadedImages++;
    printLog();

    // Des-registra o deja descuchar la imagen
    observer.unobserve(container);
}

const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(loadImage);
})

export const registerImage = (image) => {
    // Le dire a Intersectation Observer que observe la imagen 
    observer.observe(image);
}