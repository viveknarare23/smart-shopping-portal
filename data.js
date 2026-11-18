// data.js - product data (loaded from JSON files) and cart data (saved in localStorage)

let products = [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Load every product JSON file and merge them into one `products` list
async function loadProducts() {
    let files = ["data/electronics.json", "data/fashion.json", "data/home.json"];

    let responses = await Promise.all(files.map(function(file) {
        return fetch(file);
    }));

    responses.forEach(function(response) {
        if (!response.ok) {
            throw new Error("Unable to load products");
        }
    });

    let parts = await Promise.all(responses.map(function(response) {
        return response.json();
    }));

    products = parts.flat();
}

function addToCart(id) {
    let item = cart.find(function(product) {
        return product.id === id;
    });

    if (item) {
        item.quantity++;
    } else {
        cart.push({
            id: id,
            quantity: 1
        });
    }

    saveCart();

    alert("Product added to cart");
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));

    document.getElementById("count").textContent =
        cart.reduce(function(total, item) {
            return total + item.quantity;
        }, 0);
}
