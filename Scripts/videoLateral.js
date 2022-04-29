import { datos } from "../Data/Data.js"
import { showVideoLateral } from "../Modules/showVideoLateral.js"
import { showVideo } from "../Modules/showVideo.js"

let contCards = document.getElementById('container')
let contvideo = document.getElementById('convideo')
let videostora = JSON.parse(localStorage.getItem("video"))

document.addEventListener('DOMContentLoaded',  () =>{
    
    showVideoLateral(datos, contCards)
    showVideo(contvideo,videostora)
    
    
})