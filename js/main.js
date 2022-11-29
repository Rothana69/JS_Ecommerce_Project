let card_container = document.querySelector(".card-container");
const container = document.querySelector(".container");
let card_product = [
    {
        card_title: "Iphone",
        description: "New phone",
        price: "1200",
        currency: "$",
        image: "http://127.0.0.1:5500/images/iphone.jpg"
    },
    {
        card_title: "Iphone",
        description: "New phone",
        price: "1200",
        currency: "$",
        image: "http://127.0.0.1:5500/images/iphone.jpg"
    },
    {
        card_title: "Iphone",
        description: "New phone",
        price: "1200",
        currency: "$",
        image: "http://127.0.0.1:5500/images/iphone.jpg"
    },
    {
        card_title: "Iphone",
        description: "New phone",
        price: "1200",
        currency: "$",
        image: "http://127.0.0.1:5500/images/iphone.jpg"
    },
    {
        card_title: "Iphone",
        description: "New phone",
        price: "1200",
        currency: "$",
        image: "http://127.0.0.1:5500/images/iphone.jpg"
    }
]



function savedata() {
    localStorage.setItem("card_product", JSON.stringify(card_product));
    loadProduct()
}

function loadProduct() {
    JSON.parse(localStorage.getItem("products"));
    // if (productsStorage !== null) {
    //   card_product = productsStorage;
    // }
    createElement();
}

function createElement(){
    card_container.remove();
    card_container = document.createElement("div");
    card_container.className = "card-container";
    container.appendChild(card_container);
    for (let index of card_product) {
        let value = index;
        
        let card = document.createElement("div");
        card.className = "card";
        card_container.appendChild(card);
    
        let image = document.createElement("img");
        image.className = "image";
        image.src = value.image;
        card.appendChild(image);
    
    
        let card_body = document.createElement("div");
        card_body.className = "card-body";
    
        let text = document.createElement("h3");
        text.className = "card-title";
        text.textContent = value.card_title
        card_body.appendChild(text);
    
        let price = document.createElement("p");
        price.className = "price";
        price.textContent = value.price;
        card_body.appendChild(price);
    
        let currency = document.createElement("span");
        currency.className = "currency";
        currency.textContent = value.currency;
        price.appendChild(currency);
    
        let star_rate = document.createElement("div");
        star_rate.className = "star-rate";
    
        for (let item = 0; item < 5; item++) {
            let star = document.createElement("span");
            star.className = "fa fa-star";
            star_rate.appendChild(star);
        }
        card_body.appendChild(star_rate);
        
    
        let btn = document.createElement("button");
        btn.className = "detail";
        btn.textContent = "Detail";
        card_body.appendChild(btn);
        card.appendChild(card_body);
    }
}

function dropDownUser() {
    document.getElementById("myDropdown").classList.toggle("show");
}
  // Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
savedata();
createElement();