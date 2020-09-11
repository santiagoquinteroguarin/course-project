function myCourses() {
    const Element = document.querySelector('.my__courses');
    for(let i = 1; i <= 8; i++) {
        let item = document.createElement('div')
        item.className = 'my__course';
        item.innerHTML = `
            <img src="/assets/gallery-1.jpg" alt="House ${i}" class="my__course__img">
            <a class="my__course__like" href="#"><i class="fas fa-heart"></i></a>
            <h5 class="my__course__name">Curso de estrategias en ventas</h5>
            <div class="my__course__language">
                <picture class="feature__icon">
                    <img src="/assets/global.svg" width="30px" alt="imagen de un globo terraquio">
                </picture>
                <p>Idioma: Español</p>
            </div>
            <div class="my__course__student">
                <picture class="feature__icon">
                    <img src="/assets/student.svg" width="30px" alt="imagen de estudiante">
                </picture>
                <p>${Math.floor(Math.random() * (200 - 1) + 1)} Estudiantes</p>
            </div>
            <div class="my__course__videos">
                <picture class="feature__icon">
                    <img src="/assets/videos.svg" width="30px" alt="imagen de representativa a uno video">
                </picture>
                <p>Total clases: ${Math.floor(Math.random() * (99 - 1) + 1)}</p>
            </div>
            <div class="my__course__route">
                <picture class="feature__icon">
                    <img src="/assets/cohete.svg" width="30px" alt="imagen de representativa a uno video">
                </picture>
                <p>${Math.floor(Math.random() * (99 - 1) + 1)}% completado</p>
            </div>
            <button class="btn my__course__btn">Continuar Curso</button>
        `;
        Element.appendChild(item)
    }
}

myCourses()
