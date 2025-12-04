// app.js — uses dataset to read/write metadata and manage a tiny cart

const productsEl = document.getElementById('products');
const detailContent = document.getElementById('detail-content');
const filter = document.getElementById('filter');
const cartCount = document.getElementById('cart-count');
const clearCartBtn = document.getElementById('clear-cart');

let cart = JSON.parse(localStorage.getItem('mini_cart') || '[]');

function updateCartUI(){
  cartCount.textContent = cart.length;
  localStorage.setItem('mini_cart', JSON.stringify(cart));
}

// Show product metadata in detail box
function showDetails(card){
  const { id, name, price, discount, tags } = card.dataset;
  const priceN = parseFloat(price);
  const disc = parseFloat(discount || 0);
  const discounted = (priceN * (1 - disc/100)).toFixed(2);

  detailContent.innerHTML = `
    <strong>${name}</strong> (id: ${id})<br>
    Price: ₹${priceN.toFixed(2)}<br>
    Discount: ${disc}% → ₹${discounted}<br>
    Tags: ${tags || '(none)'}<br>
    <button class="btn add" data-action="add" data-id="${id}">Add to cart</button>
  `;
}

// Add product to cart (by id)
function addToCart(id){
  // simple: add id once (no quantity)
  if(!cart.includes(id)){
    cart.push(id);
    updateCartUI();
  }
}

// Event delegation for product buttons
productsEl.addEventListener('click', (e) => {
  const btn = e.target.closest('button');
  if(!btn) return;
  const card = btn.closest('.card');
  if(!card) return;

  if(btn.classList.contains('details')){
    showDetails(card);
  } else if(btn.classList.contains('add')){
    addToCart(card.dataset.id);
  }
});

// Handle add button inside detail box (delegated on document)
document.addEventListener('click', (e) => {
  const actionBtn = e.target.closest('button[data-action="add"]');
  if(actionBtn){
    const id = actionBtn.dataset.id;
    addToCart(id);
  }
});

// Filter by tag
filter.addEventListener('change', () => {
  const val = filter.value;
  const cards = productsEl.querySelectorAll('.card');
  cards.forEach(card => {
    const tags = (card.dataset.tags || '').split(',').map(s=>s.trim()).filter(Boolean);
    if(val === 'all' || tags.includes(val)){
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
});

// Clear cart
clearCartBtn.addEventListener('click', () => {
  cart = [];
  updateCartUI();
});

// Example: Dynamically update a data-* attribute after 2s
setTimeout(()=> {
  const first = productsEl.querySelector('.card[data-id="p1"]');
  if(first){
    // simulate price change and update DOM attributes
    first.dataset.price = "199.00";
    first.querySelector('.price').textContent = '₹199';
  }
}, 2000);

// initialize
updateCartUI();
