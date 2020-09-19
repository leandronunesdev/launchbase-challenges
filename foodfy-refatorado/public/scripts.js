const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards){
    card.addEventListener("click", function(){       
        modalOverlay.classList.add('active')

        const imageId = card.getAttribute('id')
        modalOverlay.querySelector("img").src = `/assets/${imageId}.png`

        const title = card.querySelector("h1")
        modalOverlay.querySelector(".modal-title").textContent = title.textContent

        const chef = card.querySelector("p")
        modalOverlay.querySelector(".author").textContent = chef.textContent
              
    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
       
})