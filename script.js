const klarMarkering = document.querySelectorAll("li");
    


function vaxlaklar(handelse){
    handelse.target.classList.toggle("klar");
}

klarMarkering.forEach((item) => {
    item.addEventListener("click", vaxlaklar);
});