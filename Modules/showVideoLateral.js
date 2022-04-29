export let showVideoLateral = (arr, cont) => {
    arr.forEach(element => {
        const {poster, avatar, nombre, canal, vistas } = element;
        cont.innerHTML += `
        <div class="card bg-dark" style="width: 18rem;">
        <img src=${poster} class="card-img-top" alt="...">
        <div class="card-body">
          <span class="fw-bolder text-white">${nombre}</span>
          <p class="card-text text-white">${canal}</p>
          <p class="card-text text-white">${vistas} visualizaciones</p>
        </div>
        `
    });
    
}