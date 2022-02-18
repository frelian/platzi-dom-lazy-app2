const isIntersecting = (entry) => {
    // Tambien le puedo decir, si está a 200px lejos de la pantalla....
    return entry.isIntersecting // true si esta dentro de la pantalla
}

const action = (entry) => {
    const nodo = entry.target;

    console.log("holis");

    // Des-registra o deja descuchar la imagen
    observer.unobserve(nodo);
}

const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(action);
})

export const registerImagen = (image) => {
    // Le dire a Intersectation Observer que observe la imagen 
    observer.observe(image);
}