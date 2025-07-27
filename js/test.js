var products = []
,cartCount = 0
,closeElements = document.getElementsByClassName('close')
,productsContainer = document.getElementById('AddCart');
function fetchData(){
fetch('../js/data.json')
.then(res => res.json())
.then(data => {
    products = data;
    createProductCards();
})

}

function createProductCards() {
    productsContainer.innerHTML = ''; // Clear existing content
    products.forEach(product => {
        var productCard = document.createElement('div');
        productCard.className = "product-info";
        productCard.innerHTML = `
           <div class="product-image">
                <img src="${product.images[0]}" alt="Product Image">
                <button class="wishlist-btn"></button>
                <div class="quick-add" id="quick-add"> Quick Add</div>
            </div>
            <div class="product-data">
                <h3>${product.title}</h2>
                <p>${product.description}</p>
                <span>
                    ${product.price} $
                </span>
            </div>
        `;
        productsContainer.appendChild(productCard);
    })
}

fetchData();

// Function to toggle the cart sidebar
function createCartItem(item) {
    var cartItemDiv = document.createElement('div');
    cartItemDiv.className = 'cart-item';
    cartItemDiv.innerHTML = `
        <div class="cart-item-image" style="background-image: url('${item.images[0]}')"></div>
        <div class="cart-item-info">
            <div class="cart-item-name">${item.title}</div>
            <div class="cart-item-price">$${item.price}</div>
            <div class="quantity-controls">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <input type="number" class="quantity" value="${item.quantity}" readonly>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
            </div>
        </div>
        <button class="remove-item" onclick="removeFromCart(${item.id})">×</button>
    `;
}





function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('overlay');
    
    cartSidebar.classList.toggle('open');
    overlay.classList.toggle('show');
}



Array.from(closeElements).forEach(function(element) {
    element.addEventListener('click',toggleCart)})


// function localproducts() {
//     var grid = document.getElementById('AddCart');
//     grid.innerHTML = '';

//     for (let i = 0; i < products.length; i++) {
//         var product = products[i];
//         var productCard = createProductCard(product);
//         grid.appendChild(productCard);
//     }
// }

// function ProductCard(product) {
//     var productCart = document.getElementsByClassName('product-info');
//     productCart.innerHTML = '';

//     product
// }

// function addToCart(productId) {
//     const product = products.find(p => p.id === productId);
//     const existingItem = cart.find(item => item.id === productId);
    
//     if (existingItem) {
//         existingItem.quantity += 1;
//     } else {
//         cart.push({
//             ...product,
//             quantity: 1
//         });
//     }
    
//     updateCartUI();
//     showCartAnimation();
// }



// function initCart() {
//     productsInfo();
//     updateCartUI();
// }

// function productsInfo() {
//     var grid = document.getElementById('AddCart');
//     grid.innerHTML = '';

//     for (let i = 0; i < displayedProducts && i < products.length; i++) {
//         const product = products[i];
//         const productCard = createProductCard(product);
//         grid.appendChild(productCard);
//     }    
// }

// function createProductCard(product) {
//     var productCard = document.createElement('div');
//     productCard.className = "product-carts";    
//     productCard.innerHTML = `
//         <img src="${product.image}" alt="${product.name}">
//         <h3>${product.name}</h3>
//         <p>${product.description}</p>
//         <span class="price">$${product.price}</span>
//         <button class="quick-add" onclick="addToCart(${product.id})">Quick Add</button>
//     `;  
//     return productCard;
// }

// function addToCart(productId) {
//     const product = products.find(p => p.id === productId);
//     const existingItem = cart.find(item => item.id === productId);
    
//     if (existingItem) {
//         existingItem.quantity += 1;
//     } else {
//         cart.push({
//             ...product,
//             quantity: 1
//         });
//     }
    
//     updateCartUI();
//     showCartAnimation();
// }

// // Update cart UI
// function updateCartUI() {
//     const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
//     const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    
//     document.getElementById('cartCount').textContent = cartCount;
//     document.getElementById('cartItemCount').textContent = cartCount;
//     document.getElementById('cartTotal').textContent = `$${cartTotal.toFixed(2)}`;
    
//     // Update cart items
//     const cartItemsContainer = document.getElementById('cartItems');
//     cartItemsContainer.innerHTML = '';
    
//     if (cart.length === 0) {
//         cartItemsContainer.innerHTML = '<p style="text-align: center; color: #7f8c8d;">Your cart is empty</p>';
//     } else {
//         cart.forEach(item => {
//             const cartItem = createCartItem(item);
//             cartItemsContainer.appendChild(cartItem);
//         });
//     }
// }

// // Create cart item
// function createCartItem(item) {
//     const cartItemDiv = document.createElement('div');
//     cartItemDiv.className = 'cart-item';
    
//     cartItemDiv.innerHTML = `
//         <div class="cart-item-image" style="background-image: url('${item.image}')"></div>
//         <div class="cart-item-info">
//             <div class="cart-item-name">${item.name}</div>
//             <div class="cart-item-price">$${item.price}</div>
//             <div class="quantity-controls">
//                 <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
//                 <input type="number" class="quantity" value="${item.quantity}" readonly>
//                 <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
//             </div>
//         </div>
//         <button class="remove-item" onclick="removeFromCart(${item.id})">×</button>
//     `;
    
//     return cartItemDiv;
// }

// // Update quantity
// function updateQuantity(productId, change) {
//     const item = cart.find(item => item.id === productId);
//     if (item) {
//         item.quantity += change;
//         if (item.quantity <= 0) {
//             removeFromCart(productId);
//         } else {
//             updateCartUI();
//         }
//     }
// }

// function removeFromCart(productId) {
//     cart = cart.filter(item => item.id !== productId);
//     updateCartUI();
// }



// window.addEventListener('DOMContentLoaded', init);





// function fetchhData(){
//     fetch('../js/data.json')
//     .then(res => res.json())
//     .then(data => {
//         products = data;
//         DisplayProducts()
// })
// }

// fetchhData()

// function DisplayProducts(){
//     console.log(products)
// }

// data.array.forEach(element => {
//     var productcard = document.createElement('div');
//     productcard.className ="product-carts"
//     productcard.innerHTML =""
// });