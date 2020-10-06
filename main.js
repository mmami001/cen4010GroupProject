let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name:'Charlotte\'s web',
        tag: 'charlotte',
        price: 20,
        inCart: 0
    },
    {
        name:'Harry Potter',
        tag: 'harrypotter',
        price: 25,
        inCart: 0
    },
    {
        name:'Hunger Games',
        tag: 'hungergames',
        price: 30,
        inCart: 0
    }
];

for(let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers(){//check localStorage to get an item if it exists
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}


function cartNumbers(product){ //passing the index of products array
    let productNumbers = localStorage.getItem('cartNumbers');

    //convert string to number
    productNumbers = parseInt(productNumbers);

    if(productNumbers) { //means we already clicked something, there are products added to cart so we add to them
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }else{
        //this else is for the first item to be added to cart behavior
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(product);
}

function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){
        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]:product
            }
        }
        cartItems[product.tag].inCart += 1;
    }else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify
    (cartItems ));
}

function totalCost(product){
    let cartCost = localStorage.getItem('totalCost');
    if(cartCost !=null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }else{
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let cartCost = localStorage.getItem('totalCost');

    let productsContainer = document.querySelector(".products");

    console.log(cartItems);
    if(cartItems && productsContainer ){
        productsContainer.innerHTML = '';
        Object.values(cartItems).map(item =>{
           productsContainer.innerHTML += `
           <div class="product">
           <ion-icon name="close-circle-outline"></ion-icon>
           <img src="./img/${item.tag}.jpg">
           <span>${item.name}</span>
           </div>
           <div class="price">$${item.price}</div>
           <div class="quantity">
                <ion-icon name="caret-back-outline"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon name="caret-forward-outline"></ion-icon>
            </div>
            <div class="total">
                $${item.inCart * item.price}.00
            </div>
           `
        });

        productsContainer +=`
            <div class="cartTotalContainer">
            <h4 class="cartTotalTitle">
                Cart total
                </h4>
                <h4 class="cartTotal">
                $${cartCost}.00
                </h4>
        `

    }
}








onLoadCartNumbers();//will run this function on load page, so only once per refresh
displayCart()












