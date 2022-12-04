const product = document.querySelector("#productDialog");
const container = document.querySelector(".productContanter");
const editBtn = document.querySelector("#edit");
const addBtn = document.querySelector("#add");
const titleDialog = document.querySelector("#dialogTitle");

let productLists = [
    {
        cardTitle: "Galaxy Watch5",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        price: 800,
        currency: "$",
        image: "https://images.samsung.com/is/image/samsung/assets/us/2208/watches/hubpage-08022022/Watches_PCD_Half-Teaser_Body-comp_MO.jpg?$624_624_PNG$"
    },
    {
        cardTitle: "IWC SCHAFFHAUSEN WATCHES",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        price: 1200,
        currency: "$",
        image: "https://www.watches-of-switzerland.co.uk/medias/iwc-davinci-collection-mar22.jpg?context=bWFzdGVyfHJvb3R8MTAxNTk2fGltYWdlL2pwZWd8aDM1L2g3Yy85MTUwMDY3Mjc3ODU0LmpwZ3wzODgyNjUzYTU5ZmU4NWM1NzhmNGVkNGRiMWZlMGE5MTc4NDkyN2NhZTlhYmE1YTdkNTZmYTc0NzU3N2E5ZGZh&imwidth=640"
    },
    {
        cardTitle: "RAIDER GE77 HX",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        price: 1200,
        currency: "$",
        image: "https://asset.msi.com/resize/image/global/product/product_1652084089f186edc14f9d018b77a37b5aee4f5a5a.png62405b38c58fe0f07fcef2367d8a9ba1/400.png"
    },
    {
        cardTitle: "Iphone",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        price: 1200,
        currency: "$",
        image: "https://www.vodafone.com.au/images/devices/apple/iphone-14-pro/iphone-14-pro-deep-purple-feature1-m.jpg"
    },
    {
        cardTitle: "A12 Bionic",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        price: 1450,
        currency: "$",
        image: "https://www.apple.com/newsroom/images/product/ipad/standard/apple_ipad-8th-gen_w-keyboard_09152020.jpg.og.jpg?202211022312"
    },
    
];

function showProductDialog(element) {
    element.style.display = 'block';
};

function hideProductDialog(element) {
    element.style.display = 'none';
};


function saveData() {
    localStorage.setItem("productLists", JSON.stringify(productLists));
    // loadProductLists();
}

function loadProductLists() {
    let productStorage = JSON.parse(localStorage.getItem("productLists"));
    if (productStorage !== null) {
        productLists = productStorage;
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
    document.querySelector("#nameProduct").value = "";
    document.querySelector("#descriptionInput").value = "";
    document.querySelector("#priceInput").value = "";
    document.querySelector("#currencyInput").value = "";
    document.querySelector("#imageInput").value = "";
}

function readerData(){
    let productAdd = document.querySelector("#productAdd");
    productAdd.remove();
    productAdd = document.createElement("div");
    productAdd.id = "productAdd";
    for (let index = 0; index < productLists.length; index++) {
        let productValue = productLists[index];

        let card = document.createElement("div");
        card.className = "card";
        card.dataset.index = index;
        productAdd.appendChild(card);
    
        let image = document.createElement("img");
        image.className = "image";
        image.src = productValue.image;
        card.appendChild(image);

        let caredBody = document.createElement("div");
        caredBody.className = "cardBody";
        card.appendChild(caredBody);
    
        let text = document.createElement("h3");
        text.className = "cardTitle";
        text.textContent = productValue.cardTitle
        caredBody.appendChild(text);

        let description = document.createElement("p");
        description.className = "cardDescription";
        description.textContent = productValue.description;
        caredBody.appendChild(description);

        let price = document.createElement("p");
        price.className = "price";
        price.textContent = productValue.price;
        caredBody.appendChild(price);
    
        let currency = document.createElement("span");
        currency.className = "currency";
        currency.textContent = productValue.currency;
        price.appendChild(currency);
        
        let editBtn = document.createElement("button");
        editBtn.className = "editBtn";
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
    let newProduct = {};
    newProduct.cardTitle = document.querySelector("#nameProduct").value;
    newProduct.description = document.querySelector("#descriptionInput").value;
    newProduct.price = document.querySelector("#priceInput").value;
    newProduct.currency = document.querySelector("#currencyInput").value;
    newProduct.image = document.querySelector("#imageInput").value;
    console.log(newProduct.image);
    let completed = true;
    for (let i in newProduct) {
        if (newProduct[i] == "" || !isValidUrl(newProduct.image)){
            completed = false;
        };
    }
    if (!completed || check()){
        if (check()){
            alert("Name already taken!");

        }else{
            alert("You need to check again");
        }
    }else{
        hideProductDialog(product);
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
    document.querySelector("#nameProduct").value = productLists[index].cardTitle;
    document.querySelector("#descriptionInput").value = productLists[index].description;
    document.querySelector("#priceInput").value = productLists[index].price;
    document.querySelector("#currencyInput").value = productLists[index].currency;
    document.querySelector("#imageInput").value = productLists[index].image;
    document.querySelector("#edit").addEventListener("click",function(){
        changeData(index);
        index = null;
    });
}
function changeData (index){
    hideProductDialog(product)
    let editProduct = {};
    editProduct.cardTitle = document.querySelector("#nameProduct").value;
    editProduct.description = document.querySelector("#descriptionInput").value;
    editProduct.price = document.querySelector("#priceInput").value;
    editProduct.currency = document.querySelector("#currencyInput").value;
    editProduct.image = document.querySelector("#imageInput").value;
    
    let completed = true;
    for (let i in editProduct) {
        if (editProduct[i] == "" || !isValidUrl(editProduct.image)){
            completed = false;
        };
    }
    if (!completed){
        alert("You need to check again");
    }else{
        hideProductDialog(product);
        productLists[index] = editProduct;
    }
    saveData();
    readerData();
}

function search() {
    let searchProduct = document.querySelector("#searchBar").value;
    let cards = document.querySelectorAll(".card");
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


function check() {
    let name = document.querySelector("#nameProduct").value;
    let same = false
    for (let i in productLists) {
        if (name === productLists[i].cardTitle) {
            same = true;
        }
    } 
    return same;
}

// check();
//  URL validate from wwww.freecodecamp.com
function isValidUrl(string) {
    try {
      new URL(string);
      return true;
    } catch (err) {
      return false;
    }
}


// delete product
function deleteProduct(event) {
    let index = event.target.parentElement.parentElement.dataset.index;
    productLists.splice(index, 1);
    saveData();
    readerData();
}
// saveData();
loadProductLists();
readerData();