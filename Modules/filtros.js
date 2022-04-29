let todos = document.getElementById("Todos");
let musica = document.getElementById("Musica");
let programacion = document.getElementById("Programacion");
let ux = document.getElementById("UX");

export function filtroMusica( contenedor, array ){
    todos.addEventListener( 'click', () => {
        contenedor.innerHTML = "";
        let arr = array.filter(informacion => informacion.categoria != '');
            arr.forEach(element => {
                const {poster, avatar, nombre, canal, vistas } = element;
                contenedor.innerHTML += `
                <div class="card bg-dark" style="width: 18rem;">
                <img src=${poster} class="card-img-top" alt="...">
                <div class="card-body">
                <img src=${avatar} class="rounded-circle h-25" alt="">
                <span class="fw-bolder text-white">${nombre}</span>
                <p class="card-text text-white">${canal}</p>
                <p class="card-text text-white">${vistas} visualizaciones</p>
                </div>
                `
            });
    })

    musica.addEventListener( 'click', () => {
        contenedor.innerHTML = "";
        let arreglo = array.filter(informacion => informacion.categoria == 'musica');
        arreglo.forEach(( element ) => {
            const {poster, avatar, nombre, canal, vistas } = element;
            contenedor.innerHTML += `
                                <div class="card bg-dark" style="width: 18rem;">
                                <img src=${poster} class="card-img-top" alt="...">
                                <div class="card-body">
                                <img src=${avatar} class="rounded-circle h-25" alt="">
                                <span class="fw-bolder text-white">${nombre}</span>
                                <p class="card-text text-white">${canal}</p>
                                <p class="card-text text-white">${vistas} visualizaciones</p>
                                </div>
                                `
        })
    })

    programacion.addEventListener( 'click', () => {
        contenedor.innerHTML = "";
        let arreglo = array.filter(informacion => informacion.categoria == 'programacion');
        arreglo.forEach(( element ) => {
            const {poster, avatar, nombre, canal, vistas } = element;
            contenedor.innerHTML += `
                                <div class="card bg-dark" style="width: 18rem;">
                                <img src=${poster} class="card-img-top" alt="...">
                                <div class="card-body">
                                <img src=${avatar} class="rounded-circle h-25" alt="">
                                <span class="fw-bolder text-white">${nombre}</span>
                                <p class="card-text text-white">${canal}</p>
                                <p class="card-text text-white">${vistas} visualizaciones</p>
                                </div>
                                `
        })
    })

    ux.addEventListener( 'click', () => {
        contenedor.innerHTML = "";
        let arreglo = array.filter(informacion => informacion.categoria == 'ux');
        arreglo.forEach(( element ) => {
            const {poster, avatar, nombre, canal, vistas } = element;
            contenedor.innerHTML += `
                                <div class="card bg-dark" style="width: 18rem;">
                                <img src=${poster} class="card-img-top" alt="...">
                                <div class="card-body">
                                <img src=${avatar} class="rounded-circle h-25" alt="">
                                <span class="fw-bolder text-white">${nombre}</span>
                                <p class="card-text text-white">${canal}</p>
                                <p class="card-text text-white">${vistas} visualizaciones</p>
                                </div>
                                `
        })
    })
}