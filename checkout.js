let items = JSON.parse(localStorage.getItem("cartItems")) || [];

const orderItemsEl = document.getElementById("orderItems");
const subtotalEl = document.getElementById("subtotal");
const shippingEl = document.getElementById("shipping");
const taxEl = document.getElementById("tax");
const totalEl = document.getElementById("total");
const placeOrderBtn = document.getElementById("placeOrder");

const SHIPPING_COST = 30;
const TAX_RATE = 0.03;

function renderOrder() {

    

    orderItemsEl.innerHTML = "";
    let subtotal = 0;

    items.forEach(item => {

        const totalPrice = item.price * item.qty;
        subtotal += totalPrice;

        const li = document.createElement("li");
        li.style.display = "flex";
        li.style.justifyContent = "space-between";
        li.style.marginBottom = "10px";

        li.innerHTML = `
            ${item.title} x${item.qty}
            <span>€${totalPrice.toFixed(2)}</span>
        `;

        orderItemsEl.appendChild(li);
    });

    const tax = subtotal * TAX_RATE;
    const total = subtotal + tax + SHIPPING_COST;

    subtotalEl.textContent = `€${subtotal.toFixed(2)}`;
    shippingEl.textContent = `€${SHIPPING_COST.toFixed(2)}`;
    taxEl.textContent = `€${tax.toFixed(2)}`;
    totalEl.textContent = `€${total.toFixed(2)}`;
}

renderOrder();

placeOrderBtn.addEventListener("click", function () {

    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const address = document.getElementById("address").value.trim();
    const town = document.getElementById("town").value.trim();
    const zipcode = document.getElementById("zipcode").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();

    const nameRegex = /^[a-zA-Z]{2,}$/;
    const phoneRegex = /^01[0-9]{9}$/;
    const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;

    if (!nameRegex.test(fname)) return alert("Invalid First Name");
    if (!nameRegex.test(lname)) return alert("Invalid Last Name");
    if (address.length < 2) return alert("Invalid Address");
    if (town.length < 2) return alert("Invalid Town");
    if (zipcode.length < 3) return alert("Invalid ZIP Code");
    if (!phoneRegex.test(phone)) return alert("Invalid Phone Number");
    if (!emailRegex.test(email)) return alert("Invalid Email");

    alert("Order Placed Successfully 🎉");

    localStorage.removeItem("cartItems");
    window.location.href = "cart.html";
});