let card_container = document.querySelector(".card-container");
const container = document.querySelector(".container");
let card_product = [
    {
        card_title: "Iphone",
        description: "New phone",
        price: "1200",
        currency: "$",
        star: "1",
        image: "http://127.0.0.1:5500/images/iphone.jpg"
    },
    {
        card_title: "Iphone",
        description: "New phone",
        price: "1200",
        currency: "$",
        star: "1",
        image: "http://127.0.0.1:5500/images/iphone.jpg"
    },
    {
        card_title: "Iphone",
        description: "New phone",
        price: "1200",
        currency: "$",
        star: "1",
        image: "http://127.0.0.1:5500/images/iphone.jpg"
    },
    {
        card_title: "Iphone",
        description: "New phone",
        price: "1200",
        currency: "$",
        star: "1",
        image: "http://127.0.0.1:5500/images/iphone.jpg"
    },
    {
        card_title: "Iphone",
        description: "New phone",
        price: "1200",
        currency: "$",
        star: "1",
        image: "http://127.0.0.1:5500/images/iphone.jpg"
    }
]
console.log(card_container)


// Remove the card container and create a new one
card_container.remove();
card_container = document.createElement("div");
card_container.className = "card-container";
container.appendChild(card_container);


for (let index = 0; index < card_product.length; index++) {
    let value = card_product[index];
    
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

    let price = document.createElement("span");
    price.className = "price";
    price.textContent = value.price;
    card_body.appendChild(price);

    let btn = document.createElement("button");
    btn.className = "detail";
    btn.textContent = "Detail";
    card_body.appendChild(btn);
    card.appendChild(card_body);
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