

let productosIndex = 0
function runSlider(){

    let introTitle = document.querySelector ("#intro-title")
    introTitle.textContent = productos[productosIndex].name

    let introDescription = document.querySelector ("#intro-description")
    introDescription.textContent = productos[productosIndex].description

    let introImage = document.querySelector("#main-header")
    introImage.style.backgroundImage='url(' + productos[productosIndex].images[0] + ')'

    let introReleaseDate = document.querySelector("#intro-date")
    introReleaseDate.textContent = "Released in " + productos[productosIndex].release

    let introButton = document.querySelector("#intro-button")

    let sliderDots = document.querySelectorAll("#select-slider-index button")
    

   
        sliderDots.forEach(function activeDots(dot, dotIndex){
            if (dotIndex == productosIndex){
                dot.classList.add("active-dot")
            } else {
                dot.classList.remove("active-dot")
            }
        })
  

    goToProduct()
    function goToProduct (){
        introButton.href = `detalle.html?id=${productos[productosIndex].id}`
    }
    }

    function promptModal(){
        const promptModal = document.querySelector("#prompt-modal")
        promptModal.classList.add("open-modal")
    }
    
    function closePromptModal() {
        const closePromptModal = document.querySelector("#prompt-modal")
        closePromptModal.classList.remove("open-modal")
    }

window.onload = function timeInteractions() {
    promptLoad()
    runSlider()
    setTimeout(function (){promptModal()},3000)
    setInterval(function(){
        runSlider()
      

        

        if (productosIndex === 4){
            productosIndex = 0
        } else {
            productosIndex ++
        }
       
    }, 5000)



};

orderByDate(productos)


function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }



function promptLoad (){
    
    // let promptContent = document.querySelector("#prompt-content")
    let promptTitle = document.querySelector("#prompt-product-title")
    let promptImage = document.querySelector("#prompt-product-image")
    let promptLink = document.querySelector("#prompt-redirect")
    let randomIndex = randomIntFromInterval (0, productos.length -1) 
    
    promptTitle.textContent = productos[randomIndex].name
    promptImage.src = productos[randomIndex].images[0]
    promptLink.href = `detalle.html?id=${productos[randomIndex].id}`
}

function changeSlider(newIndex){

    productosIndex = newIndex
    runSlider()

    

}