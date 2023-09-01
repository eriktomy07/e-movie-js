// ELEMENTOS

//  leo un elemento ul
const list = document.querySelector("#list-products")


// leo la url para el filtado

const listURL = new URLSearchParams (window.location.search)
const listParameters = listURL.get("category")

console.log(listParameters)

// filtro productos por categoría 
let listFiltered = productos.filter (function (producto){ 

    if (producto.category.toLowerCase() == listParameters.toLowerCase()){
        return true
    } else {
        return false
    }

})
console.log(listFiltered)

titleForPage()
function titleForPage(){ 
const productosTitle = document.querySelector("#productos-title")
const productosPageTitle = document.createElement ("h3")
productosPageTitle.textContent = listParameters
productosPageTitle.classList.add("page-title")
productosTitle.appendChild(productosPageTitle)
}

orderByDate (productos)
console.log(productos)

showProducts()
// recorro el Array para mostrar el resultado de los filtros
function showProducts (){
    // vacio siempre que se llame a la función así no se repito el contenido
   list.innerHTML = ""

    listFiltered.forEach (function (producto){


        console.log(producto)
        const listElement = document.createElement("li")
        const listImage = document.createElement("img")
        const listTitle = document.createElement("span")
        const listDetailLink = document.createElement("a")
    
        listElement.classList.add("list-element")
        listTitle.classList.add("list-title")
        listImage.classList.add("list-image")
        
    
        listImage.src = producto.images[0]
        listImage.alt = producto.name
        listTitle.innerText = producto.name
        listDetailLink.href = `detalle.html?id=${producto.id}`
    
        listElement.appendChild(listDetailLink)
        listDetailLink.appendChild(listTitle)
        listDetailLink.appendChild(listImage)
        list.appendChild(listElement)
        
    })
}


// select dropdown for genre

const genreBox = document.querySelector("#genre-box")
genreBox.addEventListener ("change", searchFilter)


const genreList = []

productos.forEach (function getProductGenre(producto){
    // leo los generos para incluirlos sin repetirlos
    if (!genreList.includes (producto.genre)){
        genreList.push (producto.genre)
    }

})
console.log(genreList)

genreList.forEach (function genreContents(genre){
    const genreOption = document.createElement ("option")
    genreOption.value = genre
    genreOption.textContent = genre
    genreBox.appendChild(genreOption)
}
)

// input search


const searchBox = document.querySelector("#search-box")
searchBox.addEventListener ("keyup", searchFilter)

function searchFilter () {
    //obtener valor del input  
    const searchValue = searchBox.value
    const genreValue = genreBox.value
    //filtrar lista de productos por name 
    listFiltered = productos.filter (function (producto){ 

        if (producto.category.toLowerCase() == listParameters.toLowerCase() && producto.name.toLowerCase().includes(searchValue.toLowerCase()) && producto.genre.includes(genreValue)){
            return true
        } else {
            return false
        }
    
    })
    //y mostrar resultados

    showProducts ()

}





