// GLOBAL=====================================================
let productStorage = JSON.parse(localStorage.getItem("productLists"))
let newProduct = document.querySelector(".headProduct");
let productContain = document.querySelector("#productContain");
let bodyProduct = document.querySelector(".bodyProduct");
let productList = document.querySelector("#productList");
let container = document.querySelector(".container");



// new product=====================================================



// old product==========================================================================
let productLists = [
    {
        card_title: "Ipad",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        price: 1200,
        currency: "$",
        image: "https://www.vodafone.com.au/images/devices/apple/iphone-14-pro/iphone-14-pro-deep-purple-feature1-m.jpg"
    },
    {
        card_title: "JaVis",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        price: 1200,
        currency: "$",
        image: "https://www.vodafone.com.au/images/devices/apple/iphone-14-pro/iphone-14-pro-deep-purple-feature1-m.jpg"
    },
    {
        card_title: "Iphone",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        price: 1200,
        currency: "$",
        image: "https://www.vodafone.com.au/images/devices/apple/iphone-14-pro/iphone-14-pro-deep-purple-feature1-m.jpg"
    },
    {
        card_title: "Iphone",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        price: 1200,
        currency: "$",
        image: "https://www.vodafone.com.au/images/devices/apple/iphone-14-pro/iphone-14-pro-deep-purple-feature1-m.jpg"
    },
    {
        card_title: "Iphone",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        price: 1200,
        currency: "$",
        image: "https://www.vodafone.com.au/images/devices/apple/iphone-14-pro/iphone-14-pro-deep-purple-feature1-m.jpg"
    },
    
]
function search() {
    let result = document.querySelector(".result");
    
    let searchProduct = document.querySelector("#search-bar").value;
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

function detailProduct(){
    let detailProducts = document.createElement("div");
    detailProducts.id = "detail-show";
    let image = document.createElement("img");
    image.src = productLists.image;

};

function customerProduct(items,cont,ID,container){
    cont.remove();
    let customerCard = document.createElement("div");
    customerCard.id = ID;
    container.appendChild(customerCard)
    for (let i = 0; i <items.length; i++) {
        let product_value = items[i];
        
        let card = document.createElement("div");
        card.className = "card";
        card.dataset.index = i;
        customerCard.appendChild(card);

        let image = document.createElement("img");
        image.className = "image";
        image.src = product_value.image;
        card.appendChild(image);

        let cardBody = document.createElement("div");
        cardBody.className = "card-body";
        card.appendChild(cardBody);
    
        let text = document.createElement("h3");
        text.className = "card-title";
        text.textContent = product_value.card_title
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
        for (let item = 0; item < 5; item++) {
            let star = document.createElement("span");
            star.className = "fa fa-star";
            starRating.appendChild(star);
        }
        cardBody.appendChild(starRating);

        let btnContainer = document.createElement("div");
        btnContainer.className = "btn-container";
        cardBody.appendChild(btnContainer);
        
        let addToCart = document.createElement("button");
        addToCart.className = "add-to-cart-btn";
        addToCart.textContent = "Add to Cart";
        btnContainer.appendChild(addToCart);

        let moreDetial = document.createElement("button");
        moreDetial.className = "more-detial";

        moreDetial.textContent = "More Detial";
        btnContainer.appendChild(moreDetial);
    };
};

customerProduct(productStorage,productContain,"productContain",newProduct);
customerProduct(productLists,productList,"productList",bodyProduct);
customerProduct(productStorage,productList,"productList",bodyProduct);
