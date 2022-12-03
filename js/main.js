const container = document.querySelector(".container");
const discount = document.querySelector("#discount");
let productStorage = JSON.parse(localStorage.getItem("productLists"))
let detail = document.querySelector("#detail");
let productTitle = document.querySelector(".productTitle");
let imageDetail = document.querySelector("#imageDetail");
let productName = document.querySelector("#productName");
let productDes = document.querySelector("#productDes");
let productPrice = document.querySelector("#productPrice");

function search() {

    let searchProduct = document.querySelector("#searchBar").value;
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

let starRating = document.createElement("div");
starRating.className = "starRating";
    for (let item = 0; item < 5; item++) {
        let star = document.createElement("span");
        star.className = "fa fa-star";
        starRating.appendChild(star);
        
    }
productTitle.appendChild(starRating);
function detailProduct(index){
    // prodIndex = prod;
    imageDetail.src = productStorage[index].image;
    imageDetail.addEventListener("click",hideDetail);
    productName.textContent = productStorage[index].cardTitle;
    productDes.textContent = productStorage[index].description ;
    productPrice.textContent = productStorage[index].price + productStorage[index].currency;
    detail.style.display = "block";
    container.style.display = "none";
    discount.style.display = "none";
};
function hideDetail(event){
    detail.style.display = "none";
    discount.style.display = "block";
    container.style.display = "block";
}
// detail.addEventListener("click", hideDetail);

function createElement(){
    let card_container = document.querySelector(".cardContainer");
    card_container.remove();
    card_container = document.createElement("div");
    card_container.className = "cardContainer";
    container.appendChild(card_container);
    for (let index in productStorage) {
        let value = productStorage[index];

        let card = document.createElement("div");
        card.className = "card";
        card.dataset.index = index;
        card_container.appendChild(card);
        console.log(card);
    
        let image = document.createElement("img");
        image.className = "image";
        image.src = value.image;
        card.appendChild(image);
    
    
        let cardBody = document.createElement("div");
        cardBody.className = "cardBody";
    
        let text = document.createElement("h3");
        text.className = "cardTitle";
        text.textContent = value.cardTitle
        cardBody.appendChild(text);
    
        let price = document.createElement("p");
        price.className = "price";
        price.textContent = value.price;
        cardBody.appendChild(price);
    
        let currency = document.createElement("span");
        currency.className = "currency";
        currency.textContent = value.currency;
        price.appendChild(currency);
    
        let starRate = document.createElement("div");
        starRate.className = "starRate";
    
        for (let item = 0; item < 5; item++) {
            let star = document.createElement("span");
            star.className = "fa fa-star";
            starRate.appendChild(star);
        }
        cardBody.appendChild(starRate);
        
        let btnContainer = document.createElement("div");
        btnContainer.className = "btnContainer";
        cardBody.appendChild(btnContainer);

        let btnBuy = document.createElement("button");
        btnBuy.className = "btnBuy";
        btnBuy.textContent = "Buy Now";
        btnContainer.appendChild(btnBuy);


        let btn = document.createElement("button");
        btn.className = "detail";
        btn.textContent = "Detail";
        btn.addEventListener("click",function(event) {
            let index = event.target.parentElement.parentElement.parentElement.dataset.index;
            detailProduct(index);
        })
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
        let dropdowns = document.getElementsByClassName("dropdownContent");
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