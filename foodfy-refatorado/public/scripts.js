const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let i=0; i < cards.length; i++) {
    const recipe = cards[i]
    recipe.addEventListener('click', () => {
        window.location.href = `/recipes/${i}`
    })
}

function hideShow(){
    var x = document.getElementById("hide-show");
    var y = document.getElementById("hide-button");    
    if (x.style.display === "none") {
        x.style.display = "block";
        y.innerHTML = "Esconder";        
    } else {
        x.style.display = "none";
        y.innerHTML = "Mostrar";
    }
 }

 function hideShow2(){
    var x = document.getElementById("hide-show2");
    var y = document.getElementById("hide-button2");    
    if (x.style.display === "none") {
        x.style.display = "block";
        y.innerHTML = "Esconder";        
    } else {
        x.style.display = "none";
        y.innerHTML = "Mostrar";
    }
 }

 function hideShow3(){
    var x = document.getElementById("hide-show3");
    var y = document.getElementById("hide-button3");    
    if (x.style.display === "none") {
        x.style.display = "block";
        y.innerHTML = "Esconder";        
    } else {
        x.style.display = "none";
        y.innerHTML = "Mostrar";
    }
 }