export let showCard = (arr, cont) => {
    // console.log(arr, cont)
    arr.forEach(element => {
        const {poster, avatar, nombre, canal, vistas, id,} = element;
        cont.innerHTML += `
        <div class="card bg-dark" style="width: 18rem;">
        <img id=${id} src=${poster} class="card-img-top" alt="...">
        <div class="card-body">
          <img src=${avatar} class="rounded-circle h-25" alt="">
          <span class="fw-bolder text-white">${nombre}</span>
          <p class="card-text text-white">${canal}</p>
          <p class="card-text text-white">${vistas} visualizaciones</p>
        </div>
        `
    });
}