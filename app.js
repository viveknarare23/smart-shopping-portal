// app.js - entry point: search, category filter, checkout form and start-up

async function init() {
    try {
        await loadProducts();

        showProducts(products);
    } catch (error) {
        productArea.innerHTML = "<p>Products could not be loaded. Please run Live Server.</p>";
        console.log(error);
    }
}

document.getElementById("search").addEventListener("input", function() {
    let value = this.value.toLowerCase();

    let filtered = products.filter(function(product) {
        return product.name.toLowerCase().includes(value);
    });

    showProducts(filtered);
});

document.getElementById("category").addEventListener("change", function() {
    let value = this.value;

    let filtered = products.filter(function(product) {
        return value === "All" || product.category === value;
    });

    showProducts(filtered);
});

document.getElementById("checkoutForm").addEventListener("submit", function(event) {
    event.preventDefault();

    if (cart.length === 0) {
        document.getElementById("message").textContent =
            "Please add products to your cart first.";
        return;
    }

    document.getElementById("message").textContent =
        "Demo order placed successfully! No real payment was made.";

    cart = [];

    saveCart();
    showCart();

    this.reset();
});

saveCart();

init();

showFirstPage();
