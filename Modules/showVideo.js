export function showVideo(contenedor, element){
    contenedor.innerHTML = "";
    const { poster } = element;
    const { nombre } = element;
    const { vistas } = element;
    const { url } = element;
    const { id } = element;
    if( url != ""){
        contenedor.innerHTML += `
                                <div class="embed-responsive embed-responsive-21by9">
                                <video id="${id}" class="embed-responsive-item w-100" src="${url}" controls></video>
                                <span class="fw-bolder text-white">${nombre}</span>
                                <p class="card-text text-white">${vistas} visualizaciones</p>
                                </div>`
    }else{
        contenedor.innerHTML += `
                                <div class="embed-responsive embed-responsive-21by9">
                                <img id="${id}" class="embed-responsive-item w-100" src="${poster}" controls></img>
                                <span class="fw-bolder text-white">${nombre}</span>
                                <p class="card-text text-white">${vistas} visualizaciones</p>
                                </div>`
    }
}