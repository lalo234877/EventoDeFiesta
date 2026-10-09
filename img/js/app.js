document.addEventListener("DOMContentLoaded" , function () {
    navegacionfija()
    creargaleria()
  
})
function navegacionfija() {
    const header = document.querySelector(".header")
    const s_festival = document.querySelector(".s-festival")

    document.addEventListener("scroll", function () {
        if (s_festival.getBoundingClientRect().bottom < 1) {
            header.classList.add("fixed") 
        }else{
             header.classList.remove("fixed") 
        }
    })
    
}

function creargaleria(){
    const galeria = document.querySelector(".galeria-imagenes")

    for (let i = 1; i <= 16; i++) {
        const imagen = document.createElement("IMG")
        imagen.src = `img/gallery/${i}.jpg`

        imagen.onclick = function () {
        mostrarimg(i)
    }
        galeria.appendChild(imagen)
                
    }
}
   function mostrarimg(i){
    const imagen = document.createElement("IMG")
    imagen.src = `img/gallery/${i}.jpg`



    const modal = document.createElement("DIV")
    modal.classList.add("modal")
    modal.onclick = cerrarmodal
    modal.appendChild(imagen)

    const cerrar_modal_BTN = document.createElement("BUTTON")
    cerrar_modal_BTN.textContent = "X"
    cerrar_modal_BTN.classList.add("cerrar")
    cerrar_modal_BTN.onclick = cerrarmodal
    modal.appendChild(cerrar_modal_BTN)


    const body = document.querySelector("body")
    body.classList.add("hidden-body")
    body.appendChild(modal)
     
   }
   
  function cerrarmodal() {
    const modal = document.querySelector(".modal")
    modal.classList.add("fadeout")
    setTimeout(() => {
        modal?.remove()

       const body = document.querySelector("body")
       body.classList.remove("hidden-body")
    }, 900);
    
  }
