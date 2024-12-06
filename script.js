
// Obtener elementos del carrito
const cartCount = document.getElementById('cart-count');
let cartItems = [];

// Función para agregar al carrito
const addToCart = (productName, productPrice) => {
  cartItems.push({ name: productName, price: productPrice });
  cartCount.textContent = cartItems.length;
};

// Añadir eventos de clic a los botones de agregar al carrito
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', (e) => {
    const productName = e.target.getAttribute('data-product');
    const productPrice = e.target.getAttribute('data-price');
    addToCart(productName, productPrice);
  });
});
