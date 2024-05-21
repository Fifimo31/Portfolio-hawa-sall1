const imageDirection = () => {
    const gallery = document.querySelector(".gallery");
    const figures = Array.from(gallery.querySelectorAll("figure")).reverse();
    
    // Clear the gallery
    gallery.innerHTML = '';

    // Append figures in reverse order
    figures.forEach(figure => gallery.appendChild(figure));
};

imageDirection();
