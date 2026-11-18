// views.js - what is drawn on the page: product list and cart

const productArea = document.getElementById("products");

function showProducts(list) {
    productArea.innerHTML = "";

    if (list.length === 0) {
        productArea.innerHTML = "<p>No products found.</p>";
        return;
    }

    list.forEach(function(product) {
        productArea.appendChild(createProductCard(product));
    });
}

function showCart() {
    let cartArea = document.getElementById("cartItems");
    let total = 0;

    cartArea.innerHTML = "";

    if (cart.length === 0) {
        cartArea.innerHTML = "<p>Your cart is empty.</p>";
    }

    cart.forEach(function(item) {
        let product = products.find(function(p) {
            return p.id === item.id;
        });

        if (!product) {
            return;
        }

        total += product.price * item.quantity;

        cartArea.appendChild(createCartRow(item, product));
    });

    document.getElementById("total").textContent = total;
}
