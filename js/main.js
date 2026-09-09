//========================================
// BOTÃO "TENHO INTERESSE"
//========================================

const interestButtons = document.querySelectorAll(".interest-btn");

interestButtons.forEach(button => {

    button.addEventListener("click", () => {

        const artwork = button.dataset.title;

        const phone = "5521977617782"; // Número da Maria

        const message =
            `Olá! Vi a obra "${artwork}" no site da Fiães Artes e gostaria de mais informações.`;

        window.open(
            `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
            "_blank"
        );

    });

});

//========================================
// HEADER AO ROLAR
//========================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "#ffffff";

        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.08)";

    }else{

        header.style.background = "transparent";

        header.style.boxShadow = "none";

    }

});

console.log("JavaScript carregado!");