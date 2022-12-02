const container = document.querySelector(".container");
let productStorage = JSON.parse(localStorage.getItem("productLists"))


function search() {

    let searchProduct = document.querySelector("#search-bar").value;
    let cards = document.querySelectorAll(".card");
    for (let i = 0; i < cards.length; i++) {
        let lastChild = cards[i].lastChild;
        let name = lastChild.firstChild;
        let title = name.textContent.toLocaleLowerCase();
        if (title.indexOf(searchProduct.toLocaleLowerCase())>-1){
            cards[i].style.display = "block";
        }else{
            cards[i].style.display = "none";
        }
    }
}


function createElement(){
    let card_container = document.querySelector(".card-container");
    card_container.remove();
    card_container = document.createElement("div");
    card_container.className = "card-container";
    container.appendChild(card_container);
    for (let index of productStorage) {
        let value = index;

        let card = document.createElement("div");
        card.className = "card";
        card_container.appendChild(card);
    
        let image = document.createElement("img");
        image.className = "image";
        image.src = value.image;
        card.appendChild(image);
    
    
        let cardBody = document.createElement("div");
        cardBody.className = "card-body";
    
        let text = document.createElement("h3");
        text.className = "card-title";
        text.textContent = value.card_title
        cardBody.appendChild(text);
    
        let price = document.createElement("p");
        price.className = "price";
        price.textContent = value.price;
        cardBody.appendChild(price);
    
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
        cardBody.appendChild(star_rate);
        
        let btnContainer = document.createElement("div");
        btnContainer.className = "btn-container";
        cardBody.appendChild(btnContainer);

        let btnBuy = document.createElement("button");
        btnBuy.className = "btn-Buy";
        btnBuy.textContent = "Buy Now";
        btnContainer.appendChild(btnBuy);


        let btn = document.createElement("button");
        btn.className = "detail";
        btn.textContent = "Detail";
        btnContainer.appendChild(btn);
        card.appendChild(cardBody);
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

createElement();