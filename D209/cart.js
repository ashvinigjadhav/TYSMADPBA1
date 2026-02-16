const medicines = {
    "Levera 500mg Tablet": 178.71,
    "Zomet 500mg Tablet": 158.71,
    "Disulfiram 250mg Tablet": 178.71,
    "Zenoxa 300mg Tablet": 168.71
};

const cartContainer = document.getElementById('cartContainer');
const addItemBtn = document.getElementById('addItem');
const placeOrderBtn = document.getElementById('placeOrder');
const userInfo = document.getElementById('userInfo');

// Check if user is logged in (sessionStorage)
const loggedInUser = sessionStorage.getItem('loggedInUser');
if (loggedInUser) {
    const user = JSON.parse(loggedInUser);
    userInfo.textContent = `Hello, ${user.name}! You can place your order now.`;
    placeOrderBtn.disabled = false;  // Enable place order button
} else {
    userInfo.textContent = "Please log in to place an order.";
    placeOrderBtn.disabled = true;  // Disable place order button
}


function createCartItem() {
    const wrapper = document.createElement('div');
    wrapper.className = 'cart-item';
    wrapper.style.border = '1px solid #ccc';
    wrapper.style.padding = '15px';
    wrapper.style.margin = '15px auto';
    wrapper.style.width = '90%';
    wrapper.style.backgroundColor = 'white';

    const select = document.createElement('select');
    select.style.padding = '10px';
    select.style.margin = '10px 0';
    select.style.width = '100%';

    for (let name in medicines) {
        const option = document.createElement('option');
        option.value = name;
        option.textContent = `${name} - Rs.${medicines[name].toFixed(2)}`;
        select.appendChild(option);
    }

    const qtyInput = document.createElement('input');
    qtyInput.type = 'number';
    qtyInput.min = 1;
    qtyInput.value = 1;
    qtyInput.style.padding = '10px';
    qtyInput.style.margin = '10px 0';
    qtyInput.style.width = '100%';

    const total = document.createElement('div');
    total.className = 'total';
    total.textContent = `Total: Rs.${medicines[select.value].toFixed(2)}`;
    total.style.fontWeight = 'bold';
    total.style.marginTop = '10px';

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove Item';
    removeBtn.style.marginTop = '10px';
    removeBtn.style.backgroundColor = '#dc3545';
    removeBtn.style.color = 'white';
    removeBtn.style.border = 'none';
    removeBtn.style.padding = '10px';
    removeBtn.style.cursor = 'pointer';

    removeBtn.addEventListener('click', () => {
        cartContainer.removeChild(wrapper);
    });

    function updateTotal() {
        const price = medicines[select.value];
        const qty = parseInt(qtyInput.value) || 1;
        total.textContent = `Total: Rs.${(price * qty).toFixed(2)}`;
    }

    select.addEventListener('change', updateTotal);
    qtyInput.addEventListener('input', updateTotal);

    wrapper.appendChild(select);
    wrapper.appendChild(qtyInput);
    wrapper.appendChild(total);
    wrapper.appendChild(removeBtn);

    cartContainer.appendChild(wrapper);
}

function calculateTotalPrice() {
    let totalPrice = 0;
    const cartItems = cartContainer.querySelectorAll('.cart-item');
    cartItems.forEach(item => {
        const select = item.querySelector('select');
        const qtyInput = item.querySelector('input');
        const price = medicines[select.value];
        const qty = parseInt(qtyInput.value) || 1;
        totalPrice += price * qty;
    });
    alert(`Total Price: Rs.${totalPrice.toFixed(2)}`);
}

addItemBtn.addEventListener('click', createCartItem);
placeOrderBtn.addEventListener('click', calculateTotalPrice);

createCartItem();  // Create a default cart item when the page loads
