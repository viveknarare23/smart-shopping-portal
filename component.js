// component.js - reusable pieces: product card and cart row

function createProductCard(product) {
    let card = document.createElement("div");

    card.className = "product";

    card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: ₹${product.price}</p>
            <button>Add to Cart</button>
        `;

    card.querySelector("button").addEventListener("click", function() {
        addToCart(product.id);
    });

    return card;
}

function createCartRow(item, product) {
    let row = document.createElement("div");
    row.className = "cart-item";

    row.innerHTML = `
            <div>
                <strong>${product.name}</strong>
                <p>₹${product.price} × ${item.quantity}</p>
            </div>
            <div>
                <button class="minus">-</button>
                <button class="plus">+</button>
                <button class="remove">Remove</button>
            </div>
        `;

    row.querySelector(".minus").addEventListener("click", function() {
        item.quantity--;

        if (item.quantity <= 0) {
            cart = cart.filter(function(p) {
                return p.id !== item.id;
            });
        }

        saveCart();
        showCart();
    });

    row.querySelector(".plus").addEventListener("click", function() {
        item.quantity++;
        saveCart();
        showCart();
    });

    row.querySelector(".remove").addEventListener("click", function() {
        cart = cart.filter(function(p) {
            return p.id !== item.id;
        });

        saveCart();
        showCart();
    });

    return row;
}
