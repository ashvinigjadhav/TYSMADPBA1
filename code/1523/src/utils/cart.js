
const CART_KEY = "artist_cart";

export function getCart() {
  const raw = localStorage.getItem(CART_KEY);
  return raw ? JSON.parse(raw) : [];
}

export function addToCart(item) {

  const cart = getCart();
  const existing = cart.find(c => c.id === item.id);
  if (existing) {
    existing.qty = Math.min(10, (existing.qty || 1) + (item.qty || 1)); 
  } else {
    cart.push({...item, qty: item.qty || 1});
  }
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  return cart;
}

export function removeFromCart(id) {
  const cart = getCart().filter(c => c.id !== id);
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  return cart;
}

export function clearCart() {
  localStorage.removeItem(CART_KEY);
}

export function updateQty(id, qty) {
  const cart = getCart();
  const it = cart.find(c => c.id === id);
  if (it) it.qty = qty;
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  return cart;
}

export function cartCount() {
  return getCart().reduce((s, i) => s + (i.qty || 1), 0);
}

export function parseINR(priceStr){
  
  return Number(priceStr.replace(/[₹, ]/g, ""));
}