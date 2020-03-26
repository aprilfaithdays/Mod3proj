let addOutfit = true;
let addThing = false;

window.onload = function() {
    document.getElementById('everythangCreate').style.display = 'none';
  };

document.addEventListener("DOMContentLoaded", function() {
    let createBtn = document.getElementById("create-btn")
    const createForm = document.getElementById("everythangCreate")
    const thing = document.getElementById("something")
    
    getTops();
    getBottoms();
    getShoes();

    selectTop();
    selectBottoms();
    selectShoes();

    createOutfit()
        
    createBtn.addEventListener("click", () => {
        addOutfit = !addOutfit;
        addThing = !addThing;
        if (addOutfit) {
            createForm.style.display = "none";
            thing.style.display = "block";
        } else {
            createForm.style.display = "block";
            thing.style.display = "none";
        }
    })
});


const getTops = () => {
    const articleCon = document.getElementById("top-inner")
    const articleIndic = document.getElementById("top-indicators")
    const article = "top"
    fetch("http://localhost:3000/tops")
    .then( resp => resp.json())
    .then( tops => renderItems(tops, articleCon, articleIndic, article))
}

const getBottoms = () => {
    const articleCon = document.getElementById("bottom-inner")
    const articleIndic = document.getElementById("bottom-indicators")
    const article = "bottom"
    fetch("http://localhost:3000/bottoms")
    .then( resp => resp.json())
    .then( bottoms => renderItems(bottoms, articleCon, articleIndic, article))
}
const getShoes = () => {
    const articleCon = document.getElementById("shoe-inner")
    const articleIndic = document.getElementById("shoe-indicators")
    const article = "shoe"
    fetch("http://localhost:3000/shoes")
    .then( resp => resp.json())
    .then( shoes => renderItems(shoes, articleCon, articleIndic, article))
}

function renderItems(items, articleCon, articleIndic, article) {
    let num = 0
    items.forEach( item => {
        const indicLineItem = document.createElement("li")
        indicLineItem.innerHTML = `
            <li data-target="#${article}CarouselIndicators" data-slide-to="${num}"></li>
        `
        num++
        articleIndic.appendChild(indicLineItem)

        const carouselItem = document.createElement("div")
        carouselItem.className="carousel-item" //first should be active(use if statement)
        carouselItem.dataset.id = item.id
        carouselItem.innerHTML = `
            <img class="d-block w-100" src=${item.img_url} alt="item_id_${item.id}">
        `
        articleCon.appendChild(carouselItem)
    })
    let activeTop = articleCon.children[0]
    activeTop.className = "carousel-item active"

    let activeTopIndicator = articleIndic.children[0]
    activeTopIndicator.className = "active"
}

const selectTop = () => {
    const topOptions = document.getElementById("top-inner")
    const currentTop = document.getElementById("top-user-input")
    topOptions.addEventListener("click", e => {
        currentTop.src = e.target.src
        return currentTop
    })
}

const selectBottoms = () => {
    const bottomOptions = document.getElementById("bottom-inner")
    const currentBottom = document.getElementById("bottom-user-input")
    bottomOptions.addEventListener("click", e => {
        currentBottom.src = e.target.src
        return currentBottom
    })
}

const selectShoes = () => {
    const shoeOptions = document.getElementById("shoe-inner")
    const currentShoe = document.getElementById("shoe-user-input")
    shoeOptions.addEventListener("click", e => {
        currentShoe.src = e.target.src
        return currentShoe
    })
}

const createOutfit = () => {
    const form = document.getElementById("outfit-form")
    form.addEventListener("submit", e => {
        e.preventDefault();
        
        // grab the 5 input values
        // 1. outfit name
        // 2. top object
        // 3. bottom object
        // 4. shoe object
        // 5. season yo
        // 6. likes set to 0
        // 7. comments set to empty array []
        // 8. make a post fetch to the db
        // 9. invoke form reset()
        // 10. capture the return message from the post fetch
        // 11. push that return message value into outfit array
    })
}


