const product = document.querySelector("#product-dialog");
const container = document.querySelector(".product-contanter");



let array = [
    {title : "IPhone 12", description : "hello", price : "1200", currency : "$", Image: "http://127.0.0.1:5500/images/iphone.jpg"}
]


for (let item of array) {
    let 
}



function showProductDialog(element) {
    element.style.display = 'block';
}
function hideProductDialog(element) {
    element.style.display = 'none';
}

function onCancel() {
    hideProductDialog(product);
}
function onAdd() {
    showProductDialog(product);
}
function onAddBtn(){
    showProductDialog(product);
}