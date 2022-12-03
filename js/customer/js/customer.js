// GLOBAL=====================================================
let productStorage = JSON.parse(localStorage.getItem("productLists"))
let newProduct = document.querySelector(".headProduct");
let productContain = document.querySelector(".productContain");
let bodyProduct = document.querySelector(".bodyProduct");
let productList = document.querySelector(".productList");
let container = document.querySelector(".container");


let detail = document.querySelector("#detail");
let productTitle = document.querySelector(".productTitle");
let imageDetail = document.querySelector("#imageDetail");
let productName = document.querySelector("#productName");
let productDes = document.querySelector("#productDes");
let productPrice = document.querySelector("#productPrice");
let cartContainer = document.querySelector("#CartContainer");



// new product=====================================================



// old product==========================================================================
let productLists = [
    {
        cardTitle: "Ipad",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        price: 1200,
        currency: "$",
        image: "https://www.vodafone.com.au/images/devices/apple/iphone-14-pro/iphone-14-pro-deep-purple-feature1-m.jpg"
    },
    {
        cardTitle: "JaVis",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        price: 1200,
        currency: "$",
        image: "https://www.vodafone.com.au/images/devices/apple/iphone-14-pro/iphone-14-pro-deep-purple-feature1-m.jpg"
    },
    {
        cardTitle: "Iphone",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        price: 1200,
        currency: "$",
        image: "https://www.vodafone.com.au/images/devices/apple/iphone-14-pro/iphone-14-pro-deep-purple-feature1-m.jpg"
    },
    {
        cardTitle: "Iphone",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        price: 1200,
        currency: "$",
        image: "https://www.vodafone.com.au/images/devices/apple/iphone-14-pro/iphone-14-pro-deep-purple-feature1-m.jpg"
    },
    {
        cardTitle: "Iphone",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        price: 1200,
        currency: "$",
        image: "https://www.vodafone.com.au/images/devices/apple/iphone-14-pro/iphone-14-pro-deep-purple-feature1-m.jpg"
    },
    
]
function search() {
    let searchProduct = document.querySelector("#searchBar").value;
    let cards = document.querySelectorAll(".card");
    console.log(cards)
    for (let i = 0; i < cards.length; i++) {
        let lastChild = cards[i].lastChild;
        let name = lastChild.firstChild;
        let title = name.textContent.toLocaleLowerCase();
        if (title.indexOf(searchProduct.toLocaleLowerCase())>-1){
            cards[i].style.display = "";

        }else{
            cards[i].style.display = "none";
        }
        
    }
}

// =============================================================
// detail
let starRating = document.createElement("div");
starRating.className = "starRating";
for (let item = 0; item < 5; item++) {
    let star = document.createElement("span");
    star.className = "fa fa-star";
    starRating.appendChild(star);
}
productTitle.appendChild(starRating);
function detailProduct(prod,indexProd){
    // prodIndex = prod;
    imageDetail.src = prod[indexProd].image;
    imageDetail.addEventListener("click",hideDetail);
    productName.textContent = prod[indexProd].cardTitle;
    productDes.textContent = prod[indexProd].description ;
    productPrice.textContent = prod[indexProd].price + prod[indexProd].currency;
    container.style.display = "none";
    detail.style.display = "block";
};
function hideDetail(){
    detail.style.display = "none";
    container.style.display = "block";
}
// ==================================================================


function customerProduct(items,cont,ID,container){
    cont.remove();
    let customerCard = document.createElement("div");
    customerCard.className = ID;
    container.appendChild(customerCard)
    for (let i = 0; i <items.length; i++){
        let product_value = items[i];
        
        let card = document.createElement("div");
        card.className = "card";
        card.dataset.index = i;
        customerCard.appendChild(card);
        // console.log(card)

        let image = document.createElement("img");
        image.className = "image";
        image.src = product_value.image;

        card.appendChild(image);

        let cardBody = document.createElement("div");
        cardBody.className = "cardBody";
        card.appendChild(cardBody);
    
        let text = document.createElement("h3");
        text.className = "cardTitle";
        text.textContent = product_value.cardTitle
        cardBody.appendChild(text);
        let price = document.createElement("p");
        price.className = "price";
        price.textContent = product_value.price;
        cardBody.appendChild(price);
    
        let currency = document.createElement("span");
        currency.className = "currency";
        currency.textContent = product_value.currency;
        price.appendChild(currency);

        let starRating = document.createElement("div");
        starRating.className = "starRating";
        for (let item = 0; item < 5; item++) {
            let star = document.createElement("span");
            star.className = "fa fa-star";
            starRating.appendChild(star);
        }
        cardBody.appendChild(starRating);

        let btnContainer = document.createElement("div");
        btnContainer.className = "btnContainer";
        cardBody.appendChild(btnContainer);
        
        let addToCart = document.createElement("button");
        addToCart.className = "addToCartBtn";
        addToCart.textContent = "Add to Cart";
        addToCart.addEventListener("click",addToShopping);
            
        btnContainer.appendChild(addToCart);

        let moreDetial = document.createElement("button");
        moreDetial.className = "moreDetial";
        moreDetial.textContent = "More Detial";
        

        moreDetial.addEventListener("click",function(event) {
            let i = event.target.parentElement.parentElement.parentElement.dataset.index;
            detailProduct(items,i);
        })
        btnContainer.appendChild(moreDetial);
    };
};
let cart = [];
function saveData() {
    localStorage.setItem("cart", JSON.stringify(cart));
}
function loadCartLists() {
    let cartStorage = JSON.parse(localStorage.getItem("cart"));
    if (cart !== null) {
        cart = cartStorage;
    }
}


function addToShopping(event){
    let newproductList = {};
    let index = event.target.parentElement.parentElement.parentElement.dataset.index;
    newproductList.cardTitle = productStorage[index].cardTitle;
    newproductList.description = productStorage[index].description;
    newproductList.price = productStorage[index].price;
    newproductList.currency = productStorage[index].currency;
    newproductList.image = productStorage[index].image;
    cart.push(newproductList);
    console.log(index)
    saveData();
    addToShoppingCart();
    // loadCartLists();
    
};
// saveData()
// loadCartLists();
// addToShoppingCart()
function addToShoppingCart(){
    // loadCartLists();
    let tdContainer = document.querySelector("tbody");
    for (let index = 0; index <cart.length;index++){
        let infor = cart[index];

        let trOne = document.createElement("tr");
        trOne.dataset.index = index;

        let tdOne = document.createElement("td");

        let imageContent = document.createElement("div");
        imageContent.className = "imageContent";

        let imageCart = document.createElement("img");
        imageCart.className = "imageCart";
        imageCart.src = infor.image;

        let content = document.createElement("div");
        content.className = "content";
        let nameCart = document.createElement("h3");
        nameCart.textContent = infor.cardTitle;
        let desCart = document.createElement("span");
        desCart.textContent = infor.description;
        let starRating = document.createElement("div");
        starRating.className = "starRating";
        for (let item = 0; item < 5; item++) {
            let star = document.createElement("span");
            star.className = "fa fa-star";
            starRating.appendChild(star);
        }

        imageContent.appendChild(imageCart);
        content.appendChild(nameCart);
        content.appendChild(desCart);
        content.appendChild(starRating);
        imageContent.appendChild(content);
        tdOne.appendChild(imageContent);

        let tdtwo = document.createElement("td");
        let quantity = document.createElement("input");
        quantity.type = "number";
        quantity.className = "quantity";
        tdtwo.appendChild(quantity);

        let price = document.createElement("td");
        price.textContent = infor.price + infor.currency;

        let totalPrice = document.createElement("td");
        totalPrice.textContent = (quantity.value * Number.price) + infor.currency;
        let trash = document.createElement("td");
        trash.style.width = "10%";
        let trashIcon = document.createElement("span");
        trashIcon.className = "fa fa-trash trash";
        trashIcon.style.fontSize = "30px";
        trashIcon.style.color = "RED";
        trashIcon.addEventListener("click", deleteCart);
        trash.appendChild(trashIcon)

        trOne.appendChild(tdOne);
        trOne.appendChild(tdtwo);
        trOne.appendChild(price);
        trOne.appendChild(totalPrice);
        trOne.appendChild(trash);
        tdContainer.appendChild(trOne);
    }
    // saveData();
    // location.reload()
    
};

function deleteCart(event){
    let index = event.target.parentElement.parentElement.dataset.index;
    cart.splice(index,1);
    saveData();
    addToShoppingCart();  
}
function hideCart(){
    cartContainer.style.display = "none";
    container.style.display = "block";
}

function showCart(){
    cartContainer.style.display = "block";
    container.style.display = "none";

}

customerProduct(productStorage,productContain,"productContain",newProduct);
customerProduct(productLists,productList,"productList",bodyProduct);
customerProduct(productStorage,productList,"productList",bodyProduct);
loadCartLists()