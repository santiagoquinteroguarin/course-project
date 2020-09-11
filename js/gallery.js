function gallery() {
    const Element = document.querySelector('.gallery');
    for(let i = 1; i <= 14; i++) {
        let item = document.createElement('figure')
        let class2 = 'gallery__item--' + i
        item.className = `gallery__item ${class2}`;
        item.innerHTML = `
            <img src="/assets/gallery-${i}.jpg" alt="Gallery image ${i}" class="gallery__img">
        `;
        Element.appendChild(item)
    }
}

gallery();