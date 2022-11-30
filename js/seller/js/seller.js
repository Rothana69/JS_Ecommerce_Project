const product = document.querySelector("#product-dialog");
const container = document.querySelector(".product-contanter");
const editBtn = document.querySelector("#edit");
const addBtn = document.querySelector("#add");
let titleDialog = document.querySelector("#dialogTitle");

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
    titleDialog.textContent = "ADD NEW PRODUCT";
    document.querySelector("#name-product").value = "";
    document.querySelector("#description-input").value = "";
    document.querySelector("#price-input").value = "";
    document.querySelector("#currency-input").value = "";
    document.querySelector("#image-input").value = "";
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

        // let link = document.createElement("a");
        // link.className = "link";
        // link.href = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.smartprix.com%2Fmobiles%2Frealme-brand&psig=AOvVaw2jW5jk7u5X4-3VaJav6X23&ust=1669862059794000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKCF143v1PsCFQAAAAAdAAAAABAh";    
        // link.appendChild(image);
        // card.appendChild(link);

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
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click",editProduct)
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
function editProduct(event) {
    showProductDialog(product);
    hideProductDialog(addBtn);
    showProductDialog(editBtn);
    
    titleDialog.textContent = "UPDATE YOUR PRODUCT";
    let index = event.target.parentElement.parentElement.dataset.index;
    console.log(index)
    document.querySelector("#name-product").value = productLists[index].card_title;
    document.querySelector("#description-input").value = productLists[index].description;
    document.querySelector("#price-input").value = productLists[index].price;
    document.querySelector("#currency-input").value = productLists[index].currency;
    document.querySelector("#image-input").value = productLists[index].image;
    document.querySelector("#edit").addEventListener("click",function(){
        changeData(index);
        index = null;
    });
}
function changeData (index){
    hideProductDialog(product)
    let editProduct = {};
    editProduct.card_title = document.querySelector("#name-product").value;
    editProduct.description = document.querySelector("#description-input").value;
    editProduct.price = document.querySelector("#price-input").value;
    editProduct.currency = document.querySelector("#currency-input").value;
    editProduct.image = document.querySelector("#image-input").value;
    productLists[index] = editProduct;
    saveData();
    readerData();
}


function searchAllProducts(){
    readerData();
    // event.preventDefault();
    let numOfTypes = 0;
    let word = searchProduct.value;
    let cards = document.querySelectorAll(".card");
    cards.forEach(index => {
        let nameProduct = index.firstElementChild.nextElementSibling.firstElementChild.textContent
        let isFound = true;
        console.log(nameProduct)
        for (let charactor of word){
            if (charactor.toLocaleLowerCase()!== nameProduct.toLocaleLowerCase()){
                isFound = false;
                console.log(nameProduct[charactor])
            }
            if (!isFound){
                index.style.display = 'none';
            }else {
                numOfTypes++;
                index.style.display = "block";
            }
        }
        // if (numOfTypes === 0){
        //     document.querySelector(".card").style.display = "block";
        // }
       
    })
}
let searchProduct = document.querySelector("#search-bar");
searchProduct.addEventListener("keyup",searchAllProducts);


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