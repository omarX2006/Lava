let items = JSON.parse(localStorage.getItem("cartItems")) || [];

const cartContainer = document.getElementById("cart-items");
const subtotalEl = document.getElementById("subtotal");
const totalEl = document.getElementById("total");
const checkoutBtn = document.getElementById("checkoutBtn");

function renderCart() {

    cartContainer.innerHTML = "";
    let subtotal = 0;

    if (items.length === 0) {
        cartContainer.innerHTML = `
            <div class="empty-cart">
                Your cart is empty
            </div>
        `;

        subtotalEl.textContent = "€0.00";
        totalEl.textContent = "€0.00";

        checkoutBtn.disabled = true;
        return;
    }

    items.forEach((item, index) => {

        const itemTotal = item.price * item.qty;
        subtotal += itemTotal;

        const div = document.createElement("div");
        div.classList.add("cart-item");

        div.innerHTML = `
            <img src="${item.image || 'https://via.placeholder.com/120'}">

            <div class="item-details">
                <h4>${item.title}</h4>
                <p>${item.author || ''}</p>
                <a href="#" onclick="deleteItem(${index})">Remove item</a>
            </div>

            <div class="quantity-box">
                <button type="button" onclick="changeQty(${index}, -1)">-</button>
                <span>${item.qty}</span>
                <button type="button" onclick="changeQty(${index}, 1)">+</button>
            </div>

            <div class="item-price">
                <p class="new-price">€${itemTotal.toFixed(2)}</p>
            </div>
        `;

        cartContainer.appendChild(div);
    });

    const shipping = parseInt(document.querySelector('input[name="shipping"]:checked').value);
    const total = subtotal + shipping;

    subtotalEl.textContent = `€${subtotal.toFixed(2)}`;
    totalEl.textContent = `€${total.toFixed(2)}`;

    localStorage.setItem("cartItems", JSON.stringify(items));
}

function changeQty(index, delta) {
    items[index].qty += delta;

    if (items[index].qty < 1) {
        deleteItem(index);
        return;
    }

    renderCart();
}

function deleteItem(index) {
    items.splice(index, 1);
    renderCart();
}

document.querySelectorAll('input[name="shipping"]').forEach(radio => {
    radio.addEventListener("change", renderCart);
});

checkoutBtn.addEventListener("click", function () {

    if (items.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    localStorage.setItem("cartItems", JSON.stringify(items));
    window.location.href = "checkout.html";
});

renderCart();

