const cerrarModal = document.querySelector('.modal__c_icono');
const modal = document.querySelector('.modal');
const modalElementos = document.querySelector('.modal__elementos');
const alimentos = [
    /* { imagen: '', nombre: '', ingredientes: '', precio: '', categoria: '', masPedido: }, */
    { imagen: 'https://media.carasycaretas.com.uy/p/3aa63de2d360093936b5293b241d87fd/adjuntos/328/imagenes/000/037/0000037913/1200x0/smart/hamburguesa-foto-ilustrativa.jpg', nombre: 'H. clásica', ingredientes: 'Carne, tocino, lechuga, cebolla, mayonesa, catsup, jitomate.', precio: '$55.00', categoria: 'Hamburguesas', masPedido: true },
    { imagen: 'https://images.hola.com/imagenes/cocina/noticiaslibros/20190402139863/aguacate-sandwich-hamburguesa-cocina-vegetariana-saludable/0-664-369/aguacate-sandwich-receta-saludable-vegetariana-t.jpg', nombre: 'H. Guaca Burguer', ingredientes: 'Carne, queso, lechuga, jitomate, cebolla, guacamole', precio: '$70.00', categoria: 'Hamburguesas', masPedido: false },
    { imagen: 'https://www.goiko.com/es/wp-content/uploads/2018/06/MADLH_Web_Desktop.jpg', nombre: 'H. Phill Burguer', ingredientes: 'Carne, queso philadelphia, salchicha, jitomate, mayonesa, tocino', precio: '$90.00', categoria: 'Hamburguesas', masPedido: false},
    { imagen: 'https://www.gastrolabweb.com/u/fotografias/m/2021/8/13/f850x638-17561_95050_5640.jpg', nombre: 'S. Papas a la francesa', ingredientes: 'Catsup, salsa, queso amarillo', precio: '$35.00', categoria: 'Snacks', masPedido: true },
    { imagen: 'https://editorialtelevisa.brightspotcdn.com/dims4/default/e3a3d24/2147483647/strip/true/crop/672x672+264+0/resize/1000x1000!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fwp-content%2Fuploads%2F2021%2F10%2Fsalchipulpos.jpg', nombre: 'S. Salchipulpos', ingredientes: 'Queso amarillo, queso blanco, salsa, catsup', precio: '$40.00', categoria: 'Snacks', masPedido: false},
    { imagen: 'https://www.lemontreedwelling.com/wp-content/uploads/2020/11/air-fryer-jalapeno-poppers-featured.jpg', nombre: 'S. J. Poppers', ingredientes: 'Chile jalapeño, salsa, queso, adhereso', precio: '$45.00', categoria: 'Snacks', masPedido: true },
    { imagen: 'https://www.debate.com.mx/__export/1688757101569/sites/debate/img/2023/07/07/alitas.jpg_242310155.jpg', nombre: 'S. Alitas', ingredientes: 'BBQ | Habanero | Buffalo | Fuego', precio: '$90.00', categoria: 'Snacks', masPedido: false},
];


/* AGREGAR EVENTOS A BOTONES */

function añadirEventosABotones() {
    // Selecciona todos los botones después de que las cards han sido añadidas
    const botones = document.querySelectorAll('.cards__btn');

    // Añade un evento a cada botón
    botones.forEach(btn => {
        btn.addEventListener('click', function(event) {
            event.preventDefault();
            modal.style.opacity = '1';
            modal.style.pointerEvents = 'visible';
            document.body.style.overflow = 'hidden'; 
        });
    });
}

/* FILTRAR LAS CARDS DEPENDIENDO DE LA OPCION ELEGIDA */
/* Funcion mostrar menu */

function mostrarMenu(categoria) {
    const contenedorCards = document.querySelector('.cards')
    contenedorCards.innerHTML = ''; // Limpiar los elementos anteriores

    //la razon por la cual se asigna el arreglo a la variable es para
    //asignar los elementos filtrados a una nueva variable
    //sin modificar el objeto principal "alimentos"
    let itemsFiltrados = alimentos;

    if (categoria !== 'Todos') {
        //filter , verifica que elementos cumplen con la condicion de la funcion y los asigna a la variable
        itemsFiltrados = alimentos.filter(item => item.categoria === categoria);
    }

    //renderixa los elementos filtrados asignados a la nueva variable
    //en caso de que no se cumpla la condicion se renderizan todas las cards 
    //ya que se asignó todo el array de objetos a la vairbale items filtrados
    itemsFiltrados.forEach(item => {
        let card = `
            <article class="cards__card">
                <div class="cards__header">
                    <img src="${item.imagen}" class="cards__imagen">
                </div>
                <div class="cards__contenido">
                    <h3 class="cards__nombre">${item.nombre}</h3>
                    <p class="cards__ingredientes">${item.ingredientes}</p>
                    <p class="cards__precio">Precio: ${item.precio}</p>
                </div>
                <div class="cards__footer">
                    <a href="#" class="cards__btn">Pedir por whatsapp
                        <i class="fa-brands fa-whatsapp cards__icono"></i>
                    </a>
                </div>
            </article>
        `;
        contenedorCards.insertAdjacentHTML('beforeend', card);
        añadirEventosABotones();
    });
}


document.addEventListener('DOMContentLoaded', (event) => {
    // Referencia al elemento select
    const selectCategoria = document.querySelector('.contenedor__seleccion');
    const contenedorSubtitulo = document.querySelector('.contenedor__subtitulo');

    // Escuchar cambios en la selección y mostrar los elementos del menú correspondientes
    selectCategoria.addEventListener('change', () => {
        const categoriaSeleccionada = selectCategoria.value;
        mostrarMenu(categoriaSeleccionada);
        contenedorSubtitulo.textContent = categoriaSeleccionada;
    });

    // Mostrar todos los elementos por defecto al cargar la página
    mostrarMenu('Todos');
});


cerrarModal.addEventListener('click', () =>  {
    modal.style.opacity = '0';
    modal.style.pointerEvents = 'none';
    document.body.style.overflow = 'auto';
});

