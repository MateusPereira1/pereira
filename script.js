
const observador = new IntersectionObserver(function(entries){
    console.log(entries)

    entries.forEach((entry)=>{

        if(entry.isIntersecting){
            elementos.classList.add("ver")
        }else{
            elementos.classList.remove("ver")
        }

    })

})

var elementos = document.querySelector(".titulo-1")

observador.observe(elementos)


