

var elementos = document.querySelector(".titulo-1");

const observador = new IntersectionObserver(function (entries) {
    console.log(entries);

    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("ver");
        } else {
            entry.target.classList.remove("ver");
        }
    });

});

// Ensure that `elementos` is defined before observing
if (elementos) {
    observador.observe(elementos);
}



//--------------------------------------------------------


const observador1 = new IntersectionObserver(function (entries) {
    console.log(entries);

    entries.forEach((entry) => {
        const elemento1 = entry.target;

        if (entry.isIntersecting) {
            setTimeout(()=>{
            elemento1.classList.add("ver");

            },200)
        } else {
            elemento1.classList.remove("ver");
        }
    });
});

// Seleciona todos os elementos com a classe "titulo-1"
var elementos = document.querySelectorAll(".sol-box");

// Observa cada um dos elementos selecionados
elementos.forEach((elemento) => {
    observador1.observe(elemento);
});