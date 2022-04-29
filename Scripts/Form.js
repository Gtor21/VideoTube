import {datos} from "../Data/Data.js"

let form = document.getElementById("form")

form.addEventListener("submit", function(e){
    e.preventDefault()
    const ID = datos.length+1
    const Nombre = document.getElementById("Nombre").value
    const canal = document.getElementById("canal").value
    const vistas = document.getElementById("vistas").value
    const fecha = document.getElementById("fecha").value
    const avatar = document.getElementById("avatar").value
    const poster = document.getElementById("poster").value
    const categoria = document.getElementById("categoria").value
    
    let newvideo = {
        id:ID,
        nombre:Nombre,
        canal:canal,
        vistas:vistas,
        fecha:fecha,
        avatar:avatar,
        poster:poster,
        categoria:categoria}
       
       
        datos.push(newvideo)
    
    localStorage.setItem("data", JSON.stringify(datos))
    // console.log(data)
    Swal.fire(
            'Se Guardo Video Correctamente!',
            'You clicked the button!',
            'success'
          )
    setTimeout(() => {
              window.location.href = '../index.html'
    }, 3000);
    
})