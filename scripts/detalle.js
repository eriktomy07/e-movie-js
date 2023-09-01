

// url
const detalleURL = new URLSearchParams (window.location.search)
const detalleParameters = detalleURL.get("id")


// find product
const detalleProduct = productos.find(function fetchProduct(producto){ 

    if (producto.id == detalleParameters){
        return true
    } else {
        return false
    }

})

console.log (detalleProduct)

// assign arrangement
detalleContent()
function detalleContent(){
const detalleTitle = document.querySelector("#detalle-title")
const detalleDescription = document.querySelector("#detalle-description")
const detallePrice = document.querySelector("#detalle-price")
const detalleRelease = document.querySelector("#detalle-release")

detalleTitle.textContent = detalleProduct.name
detalleDescription.textContent = detalleProduct.description
detallePrice.textContent = "$ " + detalleProduct.price
detalleRelease.textContent = "Released in " + detalleProduct.release
}
//image assignment
detalleImages()
function detalleImages(){
    const mainImage = document.querySelector("#main-image")
    const belowImages = document.querySelector("#figure-imgs .just-flex2")
    
    const detalleMainImage = document.createElement("img")
    detalleMainImage.src = detalleProduct.images[0]
    detalleMainImage.alt = detalleProduct.name

    mainImage.appendChild (detalleMainImage)

    detalleProduct.images.forEach(function (imageSource) {
    const detalleImage = document.createElement("img")

    console.log (imageSource)
    detalleImage.src = imageSource
    detalleImage.alt = detalleProduct.name

    belowImages.appendChild (detalleImage)

    detalleImage.addEventListener ("click", function (){
        detalleMainImage.src = imageSource
        // detalleImage.style.border = "5px solid violet"
        
    })


})
};


let listFiltered = productos.filter (function (producto){ 

    if (producto.category.toLowerCase() == detalleProduct.category.toLowerCase() && producto.id!= detalleProduct.id){
        return true
    } else {
        return false
    }

})
console.log(listFiltered)

const relatedProduct = document.querySelector("#list-products-related")

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

listFiltered.forEach (function createElements(producto){ 

const relatedProductList = document.createElement("div")
const relatedProductTitle = document.createElement("span")
const relatedProductImage = document.createElement("img")
const relatedProductLink = document.createElement("a")

relatedProductList.classList.add("list-element")
relatedProductTitle.classList.add("list-title")
relatedProductImage.classList.add("list-image-related")
// relatedProductLink.classList.add("related-product-link")

const imageIndex = randomIntFromInterval(0, producto.images.length -1)

relatedProductImage.src = producto.images[imageIndex]
relatedProductImage.alt = producto.name
relatedProductTitle.innerText = producto.name
relatedProductLink.href = `detalle.html?id=${producto.id}`


relatedProduct.appendChild(relatedProductList)
relatedProductList.appendChild(relatedProductLink)
relatedProductLink.appendChild(relatedProductTitle)
relatedProductLink.appendChild(relatedProductImage)




relatedProductImage.src = producto.images[imageIndex]

})