const product = document.querySelector("#product-dialog");
const container = document.querySelector(".product-contanter");
const editBtn = document.querySelector("#edit");
const addBtn = document.querySelector("#add");

let productLists = [
    {
        card_title: "Iphone",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        price: "1200",
        currency: "$",
        image: "https://www.vodafone.com.au/images/devices/apple/iphone-14-pro/iphone-14-pro-deep-purple-feature1-m.jpg"
    },
    {
        card_title: "Iphone",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        price: "1200",
        currency: "$",
        image: "https://www.vodafone.com.au/images/devices/apple/iphone-14-pro/iphone-14-pro-deep-purple-feature1-m.jpg"
    },
    {
        card_title: "Iphone",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        price: "1200",
        currency: "$",
        image: "https://www.vodafone.com.au/images/devices/apple/iphone-14-pro/iphone-14-pro-deep-purple-feature1-m.jpg"
    },
    {
        card_title: "Iphone",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        price: "1200",
        currency: "$",
        image: "https://www.vodafone.com.au/images/devices/apple/iphone-14-pro/iphone-14-pro-deep-purple-feature1-m.jpg"
    },
    {
        card_title: "Iphone",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        price: "1200",
        currency: "$",
        image: "https://www.vodafone.com.au/images/devices/apple/iphone-14-pro/iphone-14-pro-deep-purple-feature1-m.jpg"
    },
    
]
function showProductDialog(element) {
    element.style.display = 'block';
}

function hideProductDialog(element) {
    element.style.display = 'none';
}


function saveData() {
    localStorage.setItem("productLists", JSON.stringify(productLists));
    loadProductLists();
}

function loadProductLists() {
    let product_storage = JSON.parse(localStorage.getItem("productLists"));
    if (product_storage !== null) {
        productLists = product_storage;
      }
}


function onCancel() {
    hideProductDialog(product);
}
function onAdd() {
    showProductDialog(product);
    hideProductDialog(editBtn);
    showProductDialog(addBtn);

    
}


function readerData(){
    let productAdd = document.querySelector("#product-add");
    productAdd.remove();
    productAdd = document.createElement("div");
    productAdd.id = "product-add";
   

    for (let index = 0; index < productLists.length; index++) {
        let product_value = productLists[index];

        let card = document.createElement("div");
        card.className = "card";
        card.dataset.index = index;
        productAdd.appendChild(card);
    
        let image = document.createElement("img");
        image.className = "image";
        image.src = product_value.image;
        card.appendChild(image);
    
    
        let caredBody = document.createElement("div");
        caredBody.className = "card-body";
        card.appendChild(caredBody);
    
        let text = document.createElement("h3");
        text.className = "card-title";
        text.textContent = product_value.card_title
        caredBody.appendChild(text);

        let description = document.createElement("p");
        description.className = "card-description";
        description.textContent = product_value.description;
        caredBody.appendChild(description);

        let price = document.createElement("p");
        price.className = "price";
        price.textContent = product_value.price;
        caredBody.appendChild(price);
    
        let currency = document.createElement("span");
        currency.className = "currency";
        currency.textContent = product_value.currency;
        price.appendChild(currency);
        
        let editBtn = document.createElement("button");
        editBtn.className = "edit-btn";
        editBtn.addEventListener("click", editProduct);
        editBtn.textContent = "Edit";
        caredBody.appendChild(editBtn);

        let deleteBtn = document.createElement("button");
        deleteBtn.className = "delete";
        deleteBtn.addEventListener("click", deleteProduct);

        deleteBtn.textContent = "Delete";
        caredBody.appendChild(deleteBtn);
    }
    container.appendChild(productAdd);
}
function add(){
    hideProductDialog(product);
    let newProduct = {};
    newProduct.card_title = document.querySelector("#name-product").value;
    newProduct.description = document.querySelector("#description-input").value;
    newProduct.price = document.querySelector("#price-input").value;
    newProduct.currency = document.querySelector("#currency-input").value;
    newProduct.image = document.querySelector("#image-input").value;
    if (newProduct.card_title !== ""&& newProduct.description !== ""&& newProduct.price !== ""&& newProduct.currency !== ""&& newProduct.image !== ""){
        productLists.push(newProduct);
    }
    saveData();
    readerData();
}
let position;
function editProduct(event) {
    let index = event.target.parentElement.parentElement.dataset.index;
    showProductDialog(product);
    hideProductDialog(addBtn);
    showProductDialog(editBtn);
}



// readerData or product
function deleteProduct(event) {
    let index = event.target.parentElement.parentElement.dataset.index;
    console.log(index)
    productLists.splice(index, 1);
    saveData();
    readerData();
}
// saveData();
loadProductLists();
readerData();