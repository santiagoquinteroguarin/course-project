async function randomName() {
    try {
        const answer = await fetch(`http://faker.hook.io/`);
        let data = await answer.json();
        return data;
    } catch {
        console.error(error);
    }
}


function card() {
    const Element = document.querySelector('.courses');
    let name;
    for(let i = 1; i <= 6; i++) {
        randomName()
            .then(response => {
                let item = document.createElement('div')
                let class2 = 'item-' + i
                item.className = `item ${class2}`;
                item.innerHTML = `
                    <div class="item__data">
                        <h2>Curso de Estrategias en ventas</h2>
                        <p>Profesor: ${response} </p>
                        <div class="container-btn">
                            <a class="add" href="/details.html" target="_blank"><i class="fas fa-plus"></i>Agregar</a>
                            <a class="info" href="/details.html" target="_blank"><i class="fas fa-info"></i></a>     
                        </div>
                    </div>
                    <picture class="item__picture">
                        <img src="/assets/diagrama${i}.svg" width="100" alt="Imagen de cursos disponible">
                    </picture>
                    <div class="item__btn">
                        <a href="#"><i class="far fa-thumbs-up"><span>${Math.floor(Math.random() * (50 - 1) + 1)}</span></i></a>
                        <a href="#"><i class="far fa-comments"><span>${Math.floor(Math.random() * (25 - 1) + 1)}</span></i></a>
                    </div>         
                `;
                Element.appendChild(item)
            })
            .catch((error) => console.error(error))
    }
}

card();
  
  
    
