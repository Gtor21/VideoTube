import { datos } from "../Data/Data.js"
import { showCard } from "../Modules/showCard.js"
import { filtroMusica } from "../Modules/filtros.js"

let contCards = document.getElementById('container')
let stora = JSON.parse(localStorage.getItem("data"))

filtroMusica(contCards, datos)

document.addEventListener('DOMContentLoaded',  () =>{
    
    if (_.isEmpty(stora)) {        
        showCard(datos, contCards)
    } else {
        showCard(stora, contCards)
        filtroMusica(contCards, stora)
    }
    
    
})


document.addEventListener('dblclick', ({target}) => {
    // console.log(target.id)
    if (target.classList.contains('card-img-top')) {
        let id = target.id;
        let video = datos.find(item => item.id == id);
        console.log(video);
        let videoSeleccionado = video;
        localStorage.setItem('video', JSON.stringify(videoSeleccionado));
        location.href = "./Pages/Video.html";
    }
})