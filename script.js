// LocalStorage Persistence Cart System
let cart = JSON.parse(localStorage.getItem('techrigz_cart')) || [];

function saveCart() {
  localStorage.setItem('techrigz_cart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const countElem = document.getElementById('cart-count');
  if (countElem) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    countElem.textContent = totalItems;
  }
}

function addToCart(name, price) {
  const existingItem = cart.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  saveCart();
  alert(`${name} has been added to your shopping cart!`);
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  if (typeof renderCart === 'function') {
    renderCart();
  }
}

document.addEventListener('DOMContentLoaded', updateCartCount);