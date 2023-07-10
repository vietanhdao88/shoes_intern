const card = document.querySelector(".cart");
const listProduct = card.querySelector("#list-cart");
const btnAdd = document.querySelector("#add-bag");
console.log(btnAdd);
const template = `<div class="row">
<div class="column-8 row-img">
    <div class="cart-img">
        <img src="${value.image}" alt="">
        <div class="column-3">
            <i class="fa fa-minus" aria-hidden="true"></i>
            <span>Qty 1</span>
            <i class="fa fa-plus" aria-hidden="true"></i>
        </div>
    </div>
    <div class="column-content">
        <h3 class="column-name">
           ${value.name}
        </h3>
        <div class="column-2">
            <span class="line-through">${value.price}</span>
            <span class="red">${value.priceSale}</span>
        </div>
        <span>Size:${value.size}</span>
        <span>Color:${value.color}</span>
        <span>Qualifies for Free Shipping</span>
    </div>
</div>
<div class="column-3">
    <i class="fa fa-minus" aria-hidden="true"></i>
    <span>Qty 1</span>
    <i class="fa fa-plus" aria-hidden="true"></i>
</div>
<div class="column-2">
    <span class="line-through">${value.price}</span>
    <span class="red">${value.priceSale}</span>
</div>
<div class="column-1">
   <i class="fa-solid fa-xmark remove"></i>
</div>
</div>
</div>`;
let products = [
    {
        id: 1,
        name: 'Mens Nike Air Max 90 Jewel Swoosh Casual Shoes',
        image: './asset/images/detail1.jpg',
        price: 130.000,
        priceSale: 90.000,
        size: 7.5,
        color: 'Black/Safety Orange/Iron Grey',
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        image: '2.PNG',
        price: 120000
    },
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        image: '3.PNG',
        price: 220000
    },
    {
        id: 4,
        name: 'PRODUCT NAME 4',
        image: '4.PNG',
        price: 123000
    },
    {
        id: 5,
        name: 'PRODUCT NAME 5',
        image: '5.PNG',
        price: 320000
    },
    {
        id: 6,
        name: 'PRODUCT NAME 6',
        image: '6.PNG',
        price: 120000
    }
];
let listCards = [];
// function initApp(){
//     products.forEach((value , key) => {
//         let newDiv = document.createElement("div");
//         newDiv.classList.add("item");
//         newDiv.innerHTML = template;
//         listProduct.appendChild(newDiv);
//     })
    
// }
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}