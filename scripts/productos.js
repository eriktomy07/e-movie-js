


const productos = [

    {
        id: 101,
        name: "Game of Thrones",
        category: "Series",
        genre: "Drama",
        description: "Based on the A Song of Ice and Fire novel series by writer George R. R. Martin and its plot centers on the violent dynastic struggles between various noble families for control of the Iron Throne of the continent of Westeros.",
        price: 99,
        images: ["img/got/slider-game-of-thrones.jpg", "img/got/game-of-thrones-1.jpg", "img/got/game-of-thrones-2.jpg","img/got/game-of-thrones-3.jpg"],
        release: "11/11/2022",
    }
    ,
    {
        id: 102,
        name: "House of the Dragon",
        category: "Series",
        genre: "Drama",
        description: "The central conflict of “House of the Dragon” is who will take over the Iron Throne after King Viserys I, which in the history of Martin's books resulted in a great civil war that tore the Targaryen family apart.",
        price: 120,
        images: ["img/hod/slider-house-of-the-dragon.jpg", "img/hod/house-of-the-dragon-1.jpg", "img/hod/house-of-the-dragon-2.jpg", "img/hod/house-of-the-dragon-3.jpg"],
        release: "11/23/2022"

    }
    ,
    {
        id: 103,
        name: "Enola Holmes 2",
        category: "Movies",
        genre: "Comedy",
        description: "Enola Holmes is the youngest sibling in the Holmes family. She is extremely intelligent, observant, and insightful, defying the social norms for women of the time. Her mother, Eudoria, has taught her everything from chess to jujitsu and encouraged her to be strong-willed and independent.",
        price: 25,
        images: ["img/eh/slider-enola-holmes-2.jpg", "img/eh/enola-holmes-2-1.jpg", "img/eh/enola-holmes-2-2.jpg", "img/eh/enola-holmes-2-3.jpg"],
        release: "11/12/2022"
    }
    ,
    {
        id: 104,
        name: "Rings of Power",
        category: "Series",
        genre: "Adventure",
        description: "The Rings of Power were made using the craft taught by Sauron to give their wearers wealth and dominion over others. Each Ring enhances the natural power of its possessor, thus approaching its magical aspect, which can be easily corruptible to evil and lust of domination.",
        price: 120,
        images: ["img/rop/slider-rings-of-power.jpg", "img/rop/rings-of-power-1.jpg", "img/rop/rings-of-power-2.jpg", "img/rop/rings-of-power-3.jpg"],
        release: "11/23/2022" 
    }
    ,
    {
        id: 105,
        name: "Black Panther 2",
        category: "Movies",
        genre: "Sci-Fi",
        description: "Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T'Challa's death. As the Wakandans strive to embrace their next chapter, the heroes must band together with Nakia and Everett Ross to forge a new path for their beloved kingdom.",
        price: 49,
        images: ["img/bp/slider-black-panther-2.jpg", "img/bp/black-panther-2-1.jpg", "img/bp/black-panther-2-2.jpg", "img/bp/black-panther-2-3.jpg"],  
        release: "11/16/2022" 
    }
    , 
    {
        id: 106,
        name: "The Last of Us",
        category: "Series",
        genre: "Sci-Fi",
        description: "The Last of Us takes place 20 years after modern civilization has been destroyed. Joel, a born survivor, is hired to smuggle 14-year-old Ellie out of an oppressive quarantine zone.",
        price: 120,
        images: ["img/tlou/slider-the-last-of-us.jpg", "img/tlou/the-last-of-us-1.jpg", "img/tlou/the-last-of-us-2.jpg", "img/tlou/the-last-of-us-3.jpg"],
        release: "11/22/2022"  
    }
    ,
    {
        id: 107,
        name: "Where the Crawdads Sing",
        category: "Movies",
        genre: "Drama",
        description: "A woman who raised herself in the marshes of the Deep South becomes a suspect in the murder of a man with whom she was once involved.",
        price: 40,
        images: ["img/wtcs/slider-where-the-crawdads-sing.jpg", "img/wtcs/where-the-crawdads-sing-1.jpg", "img/wtcs/where-the-crawdads-sing-2.jpg", "img/wtcs/where-the-crawdads-sing-3.jpg"],
        release: "11/22/2022"   
    }



]


function orderByDate (productosRelease){
    productosRelease.sort(function(a,b){
         return new Date(b.release) - new Date(a.release);
       });
}



