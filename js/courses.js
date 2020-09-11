function courses() {
    const Element = document.querySelector('.sidebar');
    for(let i = 1; i <= 7; i++) {
        let item = document.createElement('div')
        item.className = 'wrap-box';
        item.innerHTML = `
            <picture class="wrap-box-item">
                <img src="/assets/presentacion${i}.svg" alt="imagen referente al curso - logo">
            </picture>
            <div class="wrap-box-data">
                <h2>Curso de Marketing</h2>
                <p>Completado ${Math.floor(Math.random() * (99 - 1) + 1)}%</p>
                <a href="#">Continuar Curso <img src="/assets/flecha.svg" width="15px" alt="flecha"></a>
            </div>
        `;
        Element.appendChild(item)
    }
}

courses();
