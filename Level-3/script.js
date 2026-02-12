const products = [
    { id: 1, name: "Premium Wireless Headphones", price: 4999, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },
    { id: 2, name: "Smart Watch Series Z", price: 2999, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" },
    { id: 3, name: "Leather Laptop Bag", price: 1599, image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=500" },
    { id: 4, name: "Ergonomic Office Chair", price: 8500, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },
];

let cart = [];

// Display Products
function displayProducts() {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = products.map(product => `
        <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <img src="${product.image}" class="h-48 w-full object-cover">
            <div class="p-4">
                <h4 class="font-bold text-lg">${product.name}</h4>
                <p class="text-blue-600 font-bold mt-2">₹${product.price}</p>
                <button onclick="addToCart(${product.id})" class="mt-4 w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Cart Functions
function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    sidebar.classList.toggle('translate-x-full');
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
}

function updateCart() {
    document.getElementById('cart-count').innerText = cart.length;
    const cartItems = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="text-gray-500">Cart is empty</p>';
        totalEl.innerText = '₹0';
        return;
    }

    let total = 0;
    cartItems.innerHTML = cart.map((item, index) => {
        total += item.price;
        return `
            <div class="flex justify-between items-center border-b pb-2">
                <div>
                    <p class="font-medium text-sm">${item.name}</p>
                    <p class="text-blue-600 text-xs">₹${item.price}</p>
                </div>
                <button onclick="removeFromCart(${index})" class="text-red-500 text-xs">Remove</button>
            </div>
        `;
    }).join('');
    totalEl.innerText = `₹${total}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Initialize
displayProducts();