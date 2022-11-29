const product = document.querySelector("#product-dialog");
const container = document.querySelector(".product-contanter");

let product_lists = [];


function showProductDialog(element) {
    element.style.display = 'block';
}
function hideProductDialog(element) {
    element.style.display = 'none';
}
function savedata() {
    localStorage.setItem("product_lists", JSON.stringify(product_lists));
    loadProductLists();
}

function loadProductLists() {
    let product_lists = JSON.parse(localStorage.getItem("product_lists"));
    showProductCard();
}

function showProductCard(){
    
    let product_add = document.querySelector("#product-add");
    product_add.remove();
    product_add = document.createElement("div");
    product_add.id = "product-add";
    container.appendChild(product_add);
    for (let index of product_lists) {
        let value = index;
        let card = document.createElement("div");
        card.className = "card";
        product_add.appendChild(card);
    
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
        
    }
}

function onCancel() {
    hideProductDialog(product);
}
function onAdd() {
    showProductDialog(product);
    
}
function add(){
    hideProductDialog(product);
    onCreate();

}

function onCreate(){
    let new_product = {};
    let nameProduct = document.querySelector("#name-product").value;
    let descriptionProduct = document.querySelector("#description-input").value;
    let price = document.querySelector("#price-input").value;
    let currency = document.querySelector("#currency-input").value;
    let images = document.querySelector("#image-input").value;
    new_product.card_title = nameProduct;
    new_product.description = descriptionProduct;
    new_product.price = price;
    new_product.currency = currency;
    new_product.image = images;
    product_lists.push(new_product);
    savedata();
}

showProductCard();