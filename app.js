// FreshHaven Grocery - Indian Rupee (₹ INR) Engine

// --- 1. INITIAL MOCK DATABASE ---
const DEFAULT_CATEGORIES = [
  { id: 'all', name: 'All Items', icon: '🛍️' },
  { id: 'produce', name: 'Fresh Produce', icon: '🥬', badge: 'Farm Fresh' },
  { id: 'dairy', name: 'Dairy & Eggs', icon: '🥛', badge: 'Daily Essentials' },
  { id: 'bakery', name: 'Bakery & Bread', icon: '🍞', badge: 'Baked Today' },
  { id: 'pantry', name: 'Pantry & Staples', icon: '🌾', badge: 'Organic & Whole' },
  { id: 'beverages', name: 'Beverages', icon: '🥤', badge: 'Cold & Fresh' },
  { id: 'household', name: 'Household Essentials', icon: '🧼', badge: 'Eco-Friendly' },
];

const DEFAULT_PRODUCTS = [
  // --- FRESH PRODUCE ---
  {
    id: 'prod-1',
    name: 'Organic Hass Avocados',
    category: 'produce',
    price: 199,
    unit: 'pack of 3',
    originalPrice: 249,
    rating: 4.8,
    reviewsCount: 142,
    stock: 24,
    organic: true,
    dietary: ['vegan', 'gluten-free', 'dairy-free'],
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=600&q=80',
    description: 'Creamy, rich Hass avocados picked fresh from certified orchards. Perfect for toast, salads, or guacamole.',
    origin: 'Mahabaleshwar Farms'
  },
  {
    id: 'prod-2',
    name: 'Fresh Crisp Strawberries',
    category: 'produce',
    price: 189,
    unit: '400g tub',
    originalPrice: 220,
    rating: 4.9,
    reviewsCount: 98,
    stock: 15,
    organic: true,
    dietary: ['vegan', 'gluten-free', 'dairy-free'],
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=600&q=80',
    description: 'Sweet, juicy ripe red strawberries harvested daily. Packed with Vitamin C.',
    origin: 'Himachal Pradesh'
  },
  {
    id: 'prod-3',
    name: 'Organic Farm Baby Spinach',
    category: 'produce',
    price: 49,
    unit: '250g bag',
    originalPrice: 65,
    rating: 4.7,
    reviewsCount: 85,
    stock: 8,
    organic: true,
    dietary: ['vegan', 'gluten-free', 'dairy-free'],
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=600&q=80',
    description: 'Tender baby spinach leaves double-washed and ready to cook or eat. High in iron.',
    origin: 'GreenValley Organics'
  },
  {
    id: 'prod-4',
    name: 'Red Shimla Apples',
    category: 'produce',
    price: 160,
    unit: 'per kg',
    originalPrice: 190,
    rating: 4.6,
    reviewsCount: 64,
    stock: 45,
    organic: false,
    dietary: ['vegan', 'gluten-free', 'dairy-free'],
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=600&q=80',
    description: 'Crisp, aromatic Shimla apples with a naturally sweet crunch.',
    origin: 'Shimla, HP'
  },
  {
    id: 'prod-5',
    name: 'Fresh Robusta Bananas',
    category: 'produce',
    price: 59,
    unit: 'bunch of 6',
    originalPrice: 75,
    rating: 4.9,
    reviewsCount: 310,
    stock: 50,
    organic: true,
    dietary: ['vegan', 'gluten-free', 'dairy-free'],
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=600&q=80',
    description: 'Naturally ripened sweet yellow bananas rich in energy and potassium.',
    origin: 'Tamil Nadu'
  },
  {
    id: 'prod-6',
    name: 'Fresh Blueberries',
    category: 'produce',
    price: 249,
    unit: '250g pack',
    originalPrice: 299,
    rating: 4.8,
    reviewsCount: 115,
    stock: 12,
    organic: true,
    dietary: ['vegan', 'gluten-free', 'dairy-free'],
    image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=600&q=80',
    description: 'Plump, antioxidant-rich blueberries perfect for breakfasts and smoothies.',
    origin: 'Nilgiri Farms'
  },
  {
    id: 'prod-7',
    name: 'Organic Red Carrots',
    category: 'produce',
    price: 45,
    unit: 'per kg',
    originalPrice: 60,
    rating: 4.7,
    reviewsCount: 78,
    stock: 35,
    organic: true,
    dietary: ['vegan', 'gluten-free', 'dairy-free'],
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=600&q=80',
    description: 'Sweet, juicy red carrots high in Beta-Carotene.',
    origin: 'Punjab Organic Farms'
  },
  {
    id: 'prod-8',
    name: 'Sweet Cherry Tomatoes',
    category: 'produce',
    price: 85,
    unit: '300g tub',
    originalPrice: 110,
    rating: 4.8,
    reviewsCount: 92,
    stock: 18,
    organic: true,
    dietary: ['vegan', 'gluten-free', 'dairy-free'],
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80',
    description: 'Vine-ripened cherry tomatoes with rich natural flavor.',
    origin: 'Pune Hydroponics'
  },

  // --- DAIRY & EGGS ---
  {
    id: 'prod-9',
    name: 'Farm Fresh Organic Brown Eggs',
    category: 'dairy',
    price: 110,
    unit: 'pack of 12',
    originalPrice: 130,
    rating: 4.9,
    reviewsCount: 210,
    stock: 18,
    organic: true,
    dietary: ['gluten-free', 'dairy-free', 'sugar-free'],
    image: 'https://images.unsplash.com/photo-1516448620398-c5f44bf9f441?auto=format&fit=crop&w=600&q=80',
    description: 'Certified organic free-range brown eggs from pasture-raised hens.',
    origin: 'Green Pastures Poultry'
  },
  {
    id: 'prod-10',
    name: 'Fresh Cow Milk (Full Cream)',
    category: 'dairy',
    price: 68,
    unit: '1 Litre pouch',
    originalPrice: 75,
    rating: 4.8,
    reviewsCount: 175,
    stock: 30,
    organic: false,
    dietary: ['gluten-free', 'sugar-free'],
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=600&q=80',
    description: 'Pure pasteurized cow milk rich in calcium and natural creaminess.',
    origin: 'Amul / Mother Dairy'
  },
  {
    id: 'prod-11',
    name: 'Fresh Malai Paneer Block',
    category: 'dairy',
    price: 120,
    unit: '200g pack',
    originalPrice: 140,
    rating: 4.9,
    reviewsCount: 280,
    stock: 25,
    organic: true,
    dietary: ['gluten-free', 'sugar-free'],
    image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=600&q=80',
    description: 'Soft, melt-in-mouth cottage cheese made from pure buffalo milk.',
    origin: 'FreshHaven Dairy'
  },
  {
    id: 'prod-12',
    name: 'Unsweetened Almond Milk',
    category: 'dairy',
    price: 199,
    unit: '1 Litre carton',
    originalPrice: 240,
    rating: 4.7,
    reviewsCount: 112,
    stock: 8,
    organic: true,
    dietary: ['vegan', 'gluten-free', 'dairy-free', 'sugar-free'],
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80',
    description: '100% plant-based almond milk with zero added sugar.',
    origin: 'Epigamia Organics'
  },
  {
    id: 'prod-13',
    name: 'Pure Desi Cow Ghee',
    category: 'dairy',
    price: 599,
    unit: '500ml jar',
    originalPrice: 699,
    rating: 4.9,
    reviewsCount: 340,
    stock: 20,
    organic: true,
    dietary: ['gluten-free', 'sugar-free'],
    image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=600&q=80',
    description: 'Traditional A2 Bilona cow ghee crafted with rich aromatic granular texture.',
    origin: 'Gir Cow Organics'
  },

  // --- BAKERY & BREAD ---
  {
    id: 'prod-14',
    name: 'Artisan Whole Wheat Sourdough',
    category: 'bakery',
    price: 140,
    unit: '500g loaf',
    originalPrice: 170,
    rating: 4.9,
    reviewsCount: 88,
    stock: 12,
    organic: true,
    dietary: ['vegan', 'dairy-free'],
    image: 'https://images.unsplash.com/photo-1585478259715-876a6a81fc08?auto=format&fit=crop&w=600&q=80',
    description: 'Slow-fermented artisan sourdough bread baked fresh every morning.',
    origin: 'FreshHaven Artisan Bakery'
  },
  {
    id: 'prod-15',
    name: 'Gluten-Free Multigrain Loaf',
    category: 'bakery',
    price: 180,
    unit: '450g loaf',
    originalPrice: 210,
    rating: 4.6,
    reviewsCount: 53,
    stock: 9,
    organic: false,
    dietary: ['vegan', 'gluten-free', 'dairy-free'],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
    description: 'Gluten-free bread baked with flaxseed, ragi, and sunflower seeds.',
    origin: 'BakeFree Artisan'
  },
  {
    id: 'prod-16',
    name: 'Fresh Garlic Butter Pav / Buns',
    category: 'bakery',
    price: 45,
    unit: 'pack of 6',
    originalPrice: 60,
    rating: 4.8,
    reviewsCount: 190,
    stock: 30,
    organic: false,
    dietary: [],
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80',
    description: 'Super soft, fluffy bakery pavs ideal for pav bhaji or sliders.',
    origin: 'FreshHaven Bakery'
  },

  // --- PANTRY & STAPLES ---
  {
    id: 'prod-17',
    name: 'Organic Royal Basmati Rice',
    category: 'pantry',
    price: 280,
    unit: '2 kg bag',
    originalPrice: 340,
    rating: 4.8,
    reviewsCount: 167,
    stock: 40,
    organic: true,
    dietary: ['vegan', 'gluten-free', 'dairy-free'],
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80',
    description: 'Long-grain aromatic Basmati rice aged 12 months for fluffy biryanis and pulao.',
    origin: 'Dehradun Valley'
  },
  {
    id: 'prod-18',
    name: 'Cold Pressed Virgin Mustard Oil',
    category: 'pantry',
    price: 195,
    unit: '1 Litre bottle',
    originalPrice: 230,
    rating: 4.9,
    reviewsCount: 134,
    stock: 22,
    organic: true,
    dietary: ['vegan', 'gluten-free', 'dairy-free', 'sugar-free'],
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80',
    description: 'Kachi Ghani pure cold-pressed mustard oil with rich pungent aroma.',
    origin: 'Rajasthan Organics'
  },
  {
    id: 'prod-19',
    name: 'Organic Rolled Whole Oats',
    category: 'pantry',
    price: 175,
    unit: '1 kg pack',
    originalPrice: 210,
    rating: 4.7,
    reviewsCount: 92,
    stock: 28,
    organic: true,
    dietary: ['vegan', 'gluten-free', 'dairy-free', 'sugar-free'],
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
    description: '100% whole grain rolled oats for warm breakfast porridge.',
    origin: 'Organic India'
  },
  {
    id: 'prod-20',
    name: 'Raw Sundarban Wild Honey',
    category: 'pantry',
    price: 299,
    unit: '500g jar',
    originalPrice: 360,
    rating: 4.9,
    reviewsCount: 180,
    stock: 19,
    organic: true,
    dietary: ['gluten-free', 'dairy-free'],
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80',
    description: 'Unfiltered, pure wild honey harvested directly from forest hives.',
    origin: 'Sundarbans Forest'
  },

  // --- BEVERAGES ---
  {
    id: 'prod-21',
    name: 'Cold-Pressed Green Detox Juice',
    category: 'beverages',
    price: 149,
    unit: '500ml bottle',
    originalPrice: 180,
    rating: 4.8,
    reviewsCount: 76,
    stock: 14,
    organic: true,
    dietary: ['vegan', 'gluten-free', 'dairy-free', 'sugar-free'],
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80',
    description: 'Fresh blend of cucumber, spinach, green apple, lemon, and ginger.',
    origin: 'RAW Pressery'
  },
  {
    id: 'prod-22',
    name: 'South Indian Filter Coffee Powder',
    category: 'beverages',
    price: 249,
    unit: '250g pack',
    originalPrice: 290,
    rating: 4.9,
    reviewsCount: 195,
    stock: 19,
    organic: true,
    dietary: ['vegan', 'gluten-free', 'dairy-free', 'sugar-free'],
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80',
    description: 'Rich blend of 85% Arabica coffee & 15% chicory for authentic South Indian filter kaapi.',
    origin: 'Chikmagalur, Karnataka'
  },

  // --- HOUSEHOLD ESSENTIALS ---
  {
    id: 'prod-23',
    name: 'Plant-Based Liquid Dishwash',
    category: 'household',
    price: 145,
    unit: '750ml bottle',
    originalPrice: 175,
    rating: 4.7,
    reviewsCount: 61,
    stock: 35,
    organic: true,
    dietary: ['vegan'],
    image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=600&q=80',
    description: 'Tough on grease, gentle on hands with natural lemon citrus extracts.',
    origin: 'Godrej Ezee / EcoClean'
  },
  {
    id: 'prod-24',
    name: 'Recycled Paper Towels',
    category: 'household',
    price: 249,
    unit: '4 rolls pack',
    originalPrice: 290,
    rating: 4.6,
    reviewsCount: 47,
    stock: 20,
    organic: true,
    dietary: [],
    image: 'https://images.unsplash.com/photo-1584556812952-905ffd0c611a?auto=format&fit=crop&w=600&q=80',
    description: 'Highly absorbent 2-ply kitchen paper towels.',
    origin: 'Beco EcoLiving'
  }
];

const DEFAULT_ORDERS = [
  {
    id: 'ORD-8942',
    customerName: 'Alex Sharma',
    email: 'alex.sharma@example.com',
    phone: '+91 98765 43210',
    address: 'MG Road, Indiranagar, Flat 402, Bengaluru - 560001',
    postalCode: '560001',
    items: [
      { id: 'prod-11', name: 'Fresh Malai Paneer Block', quantity: 2, price: 120 },
      { id: 'prod-9', name: 'Farm Fresh Organic Brown Eggs', quantity: 1, price: 110 }
    ],
    subtotal: 350,
    deliveryFee: 49,
    tax: 17.5,
    total: 416.5,
    status: 'Packing',
    timeSlot: 'Express 30-Min Delivery',
    paymentMethod: 'UPI (alex@upi)',
    createdAt: new Date().toISOString()
  }
];

const VALID_POSTAL_CODES = [
  { code: '560001', area: 'Central Bengaluru, Karnataka', estTime: '15-25 mins' },
  { code: '302001', area: 'Pink City, Jaipur, Rajasthan', estTime: '20-30 mins' },
  { code: '110001', area: 'Connaught Place, New Delhi', estTime: '20-30 mins' },
  { code: '400001', area: 'South Mumbai, Maharashtra', estTime: '25-35 mins' }
];

// --- 2. STATE MANAGEMENT ---
// Force INR currency update
let products = DEFAULT_PRODUCTS;
localStorage.setItem('fh_products', JSON.stringify(products));

let orders = JSON.parse(localStorage.getItem('fh_orders')) || DEFAULT_ORDERS;
let cart = JSON.parse(localStorage.getItem('fh_cart')) || [];
let currentLocation = VALID_POSTAL_CODES[0];

let selectedCategory = 'all';
let organicOnly = false;
let selectedDietary = [];
let sortBy = 'featured';
let searchQuery = '';

let activeOrder = orders[0] || null;
let discount = 0;

// Save persistent state
function saveState() {
  localStorage.setItem('fh_products', JSON.stringify(products));
  localStorage.setItem('fh_orders', JSON.stringify(orders));
  localStorage.setItem('fh_cart', JSON.stringify(cart));
}

// --- 3. DOM ELEMENTS ---
const customerView = document.getElementById('customerView');
const adminView = document.getElementById('adminView');
const storeViewBtn = document.getElementById('storeViewBtn');
const adminViewBtn = document.getElementById('adminViewBtn');

const categoriesBar = document.getElementById('categoriesBar');
const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');

const cartBadgeCount = document.getElementById('cartBadgeCount');
const mobCartBadge = document.getElementById('mobCartBadge');
const openCartBtn = document.getElementById('openCartBtn');
const cartDrawerOverlay = document.getElementById('cartDrawerOverlay');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartItemsList = document.getElementById('cartItemsList');

const openLocationModalBtn = document.getElementById('openLocationModalBtn');
const locationModalOverlay = document.getElementById('locationModalOverlay');
const closeLocationModalBtn = document.getElementById('closeLocationModalBtn');

const checkoutModalOverlay = document.getElementById('checkoutModalOverlay');
const proceedCheckoutBtn = document.getElementById('proceedCheckoutBtn');
const closeCheckoutBtn = document.getElementById('closeCheckoutBtn');

const orderTrackerOverlay = document.getElementById('orderTrackerOverlay');
const closeTrackerBtn = document.getElementById('closeTrackerBtn');

const productDetailOverlay = document.getElementById('productDetailOverlay');
const closeDetailBtn = document.getElementById('closeDetailBtn');

const authModalOverlay = document.getElementById('authModalOverlay');
const openAuthModalBtn = document.getElementById('openAuthModalBtn');
const closeAuthBtn = document.getElementById('closeAuthBtn');

const addProductModalOverlay = document.getElementById('addProductModalOverlay');
const openAddProductModalBtn = document.getElementById('openAddProductModalBtn');
const closeAddProductBtn = document.getElementById('closeAddProductBtn');

// --- 4. RENDERERS ---

function renderCategories() {
  categoriesBar.innerHTML = DEFAULT_CATEGORIES.map(cat => `
    <button class="category-chip ${selectedCategory === cat.id ? 'active' : ''}" data-id="${cat.id}">
      <span>${cat.icon}</span>
      <span>${cat.name}</span>
      ${cat.badge ? `<span style="font-size: 0.65rem; padding: 2px 6px; border-radius: 99px; background-color: ${selectedCategory === cat.id ? '#ffffff' : '#ecfdf5'}; color: ${selectedCategory === cat.id ? '#047857' : '#059669'}; font-weight: 700;">${cat.badge}</span>` : ''}
    </button>
  `).join('');

  document.querySelectorAll('.category-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedCategory = btn.dataset.id;
      renderCategories();
      renderProducts();
    });
  });
}

function getFilteredProducts() {
  return products.filter(item => {
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const match = item.name.toLowerCase().includes(q) || item.category.toLowerCase().includes(q);
      if (!match) return false;
    }
    if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
    if (organicOnly && !item.organic) return false;
    if (selectedDietary.length > 0) {
      const matchesAll = selectedDietary.every(tag => item.dietary.includes(tag));
      if (!matchesAll) return false;
    }
    return true;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });
}

function renderProducts() {
  const items = getFilteredProducts();
  
  if (items.length === 0) {
    productGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: white; border-radius: 16px; border: 1px solid #e2e8f0;">
        <div style="font-size: 3rem; margin-bottom: 10px;">🥗</div>
        <h3 style="font-size: 1.2rem; font-weight: 800; color: #0f172a;">No products match your current filters</h3>
        <p style="color: #64748b; font-size: 0.9rem; margin-top: 6px;">Try clearing some filters or searching for something else.</p>
      </div>
    `;
    return;
  }

  productGrid.innerHTML = items.map(product => {
    const cartItem = cart.find(i => i.id === product.id);
    const isLowStock = product.stock > 0 && product.stock <= 10;
    const isOutOfStock = product.stock <= 0;

    return `
      <div class="product-card">
        <div class="product-img-wrapper" onclick="openProductDetail('${product.id}')">
          <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
          <div class="badge-container">
            ${product.organic ? `<span class="badge-organic">🌿 Organic</span>` : ''}
          </div>
          <div class="stock-badge ${isOutOfStock ? 'stock-out' : isLowStock ? 'stock-low' : 'stock-in'}">
            ${isOutOfStock ? 'Out of Stock' : isLowStock ? `Only ${product.stock} left` : 'In Stock'}
          </div>
        </div>

        <div class="product-info">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="product-category-lbl">${product.category}</span>
            <span style="font-size: 0.75rem; font-weight: 700; color: #f59e0b;">★ ${product.rating}</span>
          </div>

          <h3 class="product-title" onclick="openProductDetail('${product.id}')">${product.name}</h3>

          <div class="dietary-tags-row">
            ${product.dietary.map(d => `<span class="diet-pill">${d}</span>`).join('')}
          </div>

          <div class="product-price-row">
            <div>
              <span class="price-main">₹${product.price}</span>
              <span class="price-unit">/ ${product.unit}</span>
            </div>
          </div>

          ${cartItem ? `
            <div class="qty-counter-group">
              <button class="qty-btn" onclick="updateCartQty('${product.id}', ${cartItem.quantity - 1})">-</button>
              <span class="qty-val">${cartItem.quantity}</span>
              <button class="qty-btn" onclick="updateCartQty('${product.id}', ${cartItem.quantity + 1})">+</button>
            </div>
          ` : `
            <button class="add-cart-btn" onclick="addToCart('${product.id}')" ${isOutOfStock ? 'disabled' : ''}>
              + Add to Cart
            </button>
          `}
        </div>
      </div>
    `;
  }).join('');
}

// Cart Operations
window.addToCart = function(productId) {
  const prod = products.find(p => p.id === productId);
  if (!prod) return;
  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...prod, quantity: 1 });
  }
  saveState();
  updateCartBadge();
  renderProducts();
  renderCartDrawer();
};

window.updateCartQty = function(productId, newQty) {
  if (newQty <= 0) {
    cart = cart.filter(i => i.id !== productId);
  } else {
    const item = cart.find(i => i.id === productId);
    if (item) item.quantity = newQty;
  }
  saveState();
  updateCartBadge();
  renderProducts();
  renderCartDrawer();
};

function updateCartBadge() {
  const totalCount = cart.reduce((sum, i) => sum + i.quantity, 0);
  cartBadgeCount.textContent = totalCount;
  mobCartBadge.textContent = totalCount;
}

function renderCartDrawer() {
  const subtotal = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const isFreeDelivery = subtotal >= 499 || subtotal === 0;
  const deliveryFee = isFreeDelivery ? 0 : 49;
  const discountAmt = subtotal * discount;
  const tax = (subtotal - discountAmt) * 0.05; // 5% GST
  const grandTotal = Math.max(0, subtotal - discountAmt + deliveryFee + tax);

  document.getElementById('cartSubtotalText').textContent = `₹${subtotal.toFixed(0)}`;
  document.getElementById('cartDeliveryFeeText').textContent = deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`;
  document.getElementById('cartTaxText').textContent = `₹${tax.toFixed(1)}`;
  document.getElementById('cartGrandTotalText').textContent = `₹${grandTotal.toFixed(0)}`;

  const fillPct = Math.min(100, (subtotal / 499) * 100);
  document.getElementById('deliveryProgressFill').style.width = `${fillPct}%`;

  if (cart.length === 0) {
    cartItemsList.innerHTML = `
      <div style="text-align: center; padding: 40px 20px; color: #64748b;">
        <div style="font-size: 2.5rem; margin-bottom: 8px;">🛒</div>
        <h4 style="font-weight: 700; color: #0f172a;">Your basket is empty</h4>
        <p style="font-size: 0.85rem; margin-top: 4px;">Add fresh farm products to get started.</p>
      </div>
    `;
    return;
  }

  cartItemsList.innerHTML = cart.map(item => `
    <div class="cart-item-card">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div style="flex: 1;">
        <div style="font-weight: 700; font-size: 0.9rem;">${item.name}</div>
        <div style="font-size: 0.8rem; color: #059669;">₹${item.price} / ${item.unit}</div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 8px;">
          <div class="qty-counter-group" style="width: 90px; margin: 0;">
            <button class="qty-btn" style="width: 24px; height: 24px;" onclick="updateCartQty('${item.id}', ${item.quantity - 1})">-</button>
            <span class="qty-val" style="font-size: 0.8rem;">${item.quantity}</span>
            <button class="qty-btn" style="width: 24px; height: 24px;" onclick="updateCartQty('${item.id}', ${item.quantity + 1})">+</button>
          </div>
          <span style="font-weight: 800;">₹${item.price * item.quantity}</span>
        </div>
      </div>
      <button style="color: #ef4444;" onclick="updateCartQty('${item.id}', 0)">✕</button>
    </div>
  `).join('');
}

// Product Details Modal
window.openProductDetail = function(productId) {
  const prod = products.find(p => p.id === productId);
  if (!prod) return;
  document.getElementById('detailImg').src = prod.image;
  document.getElementById('detailTitle').textContent = prod.name;
  document.getElementById('detailPrice').textContent = `₹${prod.price}`;
  document.getElementById('detailUnit').textContent = `/ ${prod.unit}`;
  document.getElementById('detailDesc').textContent = prod.description;
  document.getElementById('modalCategoryLbl').textContent = prod.category;

  document.getElementById('detailAddToCartBtn').onclick = () => {
    addToCart(prod.id);
    productDetailOverlay.classList.add('hidden');
  };

  productDetailOverlay.classList.remove('hidden');
};

// Admin Dashboard Renderer
function renderAdmin() {
  const revenue = orders.reduce((sum, o) => sum + o.total, 0);
  const activeCount = orders.filter(o => o.status !== 'Delivered' && o.status !== 'Cancelled').length;
  const lowStockCount = products.filter(p => p.stock <= 10).length;

  document.getElementById('metricRevenue').textContent = `₹${revenue.toFixed(0)}`;
  document.getElementById('metricActiveOrders').textContent = activeCount;
  document.getElementById('metricLowStock').textContent = lowStockCount;
  document.getElementById('metricTotalProducts').textContent = products.length;

  // Inventory Table
  const invBody = document.getElementById('inventoryTableBody');
  invBody.innerHTML = products.map(p => `
    <tr>
      <td>
        <div style="display: flex; align-items: center; gap: 10px;">
          <img src="${p.image}" style="width: 36px; height: 36px; border-radius: 6px; object-fit: cover;">
          <div style="font-weight: 700;">${p.name}</div>
        </div>
      </td>
      <td style="text-transform: capitalize;">${p.category}</td>
      <td>
        <input type="number" step="1" value="${p.price}" style="width: 70px; padding: 4px; border-radius: 4px; border: 1px solid #cbd5e1;" onchange="updateProductPrice('${p.id}', this.value)">
      </td>
      <td>
        <input type="number" value="${p.stock}" style="width: 60px; padding: 4px; border-radius: 4px; border: ${p.stock <= 10 ? '2px solid #f59e0b' : '1px solid #cbd5e1'};" onchange="updateProductStock('${p.id}', this.value)">
      </td>
      <td>${p.organic ? '🌿 Yes' : 'No'}</td>
      <td>
        <button style="color: #ef4444; font-weight: 700;" onclick="deleteProduct('${p.id}')">Delete</button>
      </td>
    </tr>
  `).join('');

  // Orders Table
  const ordBody = document.getElementById('ordersTableBody');
  ordBody.innerHTML = orders.map(o => `
    <tr>
      <td style="font-weight: 800; color: #047857;">${o.id}</td>
      <td>
        <div style="font-weight: 700;">${o.customerName}</div>
        <div style="font-size: 0.75rem; color: #64748b;">${o.phone}</div>
      </td>
      <td>
        <div style="font-weight: 800;">₹${o.total.toFixed(0)}</div>
        <div style="font-size: 0.75rem; color: #64748b;">${o.items.length} items</div>
      </td>
      <td style="font-size: 0.8rem;">${o.timeSlot}</td>
      <td>
        <span class="status-badge ${o.status === 'Pending' ? 'status-pending' : o.status === 'Packing' ? 'status-packing' : o.status === 'Out for Delivery' ? 'status-out' : 'status-delivered'}">
          ${o.status}
        </span>
      </td>
      <td>
        <select style="padding: 4px 8px; border-radius: 6px; font-weight: 700;" onchange="updateOrderStatus('${o.id}', this.value)">
          <option value="Pending" ${o.status === 'Pending' ? 'selected' : ''}>Pending</option>
          <option value="Packing" ${o.status === 'Packing' ? 'selected' : ''}>Packing</option>
          <option value="Out for Delivery" ${o.status === 'Out for Delivery' ? 'selected' : ''}>Out for Delivery</option>
          <option value="Delivered" ${o.status === 'Delivered' ? 'selected' : ''}>Delivered</option>
        </select>
      </td>
    </tr>
  `).join('');
}

window.updateProductPrice = function(id, val) {
  const p = products.find(i => i.id === id);
  if (p) p.price = parseFloat(val) || 0;
  saveState();
  renderProducts();
};

window.updateProductStock = function(id, val) {
  const p = products.find(i => i.id === id);
  if (p) p.stock = parseInt(val) || 0;
  saveState();
  renderProducts();
};

window.deleteProduct = function(id) {
  products = products.filter(i => i.id !== id);
  saveState();
  renderProducts();
  renderAdmin();
};

window.updateOrderStatus = function(id, status) {
  const o = orders.find(i => i.id === id);
  if (o) o.status = status;
  saveState();
  renderAdmin();
};

// --- 5. EVENT LISTENERS ---

storeViewBtn.addEventListener('click', () => {
  storeViewBtn.classList.add('active');
  adminViewBtn.classList.remove('active');
  customerView.classList.remove('hidden');
  adminView.classList.add('hidden');
});

adminViewBtn.addEventListener('click', () => {
  adminViewBtn.classList.add('active');
  storeViewBtn.classList.remove('active');
  customerView.classList.add('hidden');
  adminView.classList.remove('hidden');
  renderAdmin();
});

document.getElementById('mobNavShop').addEventListener('click', () => {
  customerView.classList.remove('hidden');
  adminView.classList.add('hidden');
});
document.getElementById('mobNavAdmin').addEventListener('click', () => {
  customerView.classList.add('hidden');
  adminView.classList.remove('hidden');
  renderAdmin();
});
document.getElementById('mobNavCart').addEventListener('click', () => cartDrawerOverlay.classList.remove('hidden'));

// Search Bar
searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value;
  renderProducts();
});

// Smart Filters
document.getElementById('organicToggleBtn').addEventListener('click', function() {
  organicOnly = !organicOnly;
  this.classList.toggle('active', organicOnly);
  renderProducts();
});

['GlutenFree', 'Vegan', 'DairyFree', 'SugarFree'].forEach(tag => {
  const btn = document.getElementById(`diet${tag}Btn`);
  const tagKey = tag.toLowerCase().replace('glutenfree', 'gluten-free').replace('dairyfree', 'dairy-free').replace('sugarfree', 'sugar-free');
  btn?.addEventListener('click', function() {
    if (selectedDietary.includes(tagKey)) {
      selectedDietary = selectedDietary.filter(t => t !== tagKey);
      this.classList.remove('active');
    } else {
      selectedDietary.push(tagKey);
      this.classList.add('active');
    }
    renderProducts();
  });
});

document.getElementById('sortSelect').addEventListener('change', (e) => {
  sortBy = e.target.value;
  renderProducts();
});

// Cart Drawer
openCartBtn.addEventListener('click', () => {
  renderCartDrawer();
  cartDrawerOverlay.classList.remove('hidden');
});
closeCartBtn.addEventListener('click', () => cartDrawerOverlay.classList.add('hidden'));

// Coupon Form
document.getElementById('couponForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const code = document.getElementById('couponInput').value.trim().toUpperCase();
  const msg = document.getElementById('couponMsg');
  if (code === 'FRESH20') {
    discount = 0.20;
    msg.textContent = '✓ Coupon FRESH20 applied (20% OFF)!';
    msg.style.color = '#059669';
    document.getElementById('discountLine').classList.remove('hidden');
    renderCartDrawer();
  } else {
    msg.textContent = 'Invalid code. Try FRESH20';
    msg.style.color = '#ef4444';
  }
});

// Location Modal
openLocationModalBtn.addEventListener('click', () => locationModalOverlay.classList.remove('hidden'));
closeLocationModalBtn.addEventListener('click', () => locationModalOverlay.classList.add('hidden'));
document.getElementById('confirmLocationBtn').addEventListener('click', () => locationModalOverlay.classList.add('hidden'));

document.getElementById('checkPincodeForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const val = document.getElementById('pincodeInput').value.trim();
  const found = VALID_POSTAL_CODES.find(p => p.code === val);
  if (found) {
    currentLocation = found;
    document.getElementById('currentLocationText').textContent = `${found.code} - ${found.area.split(',')[0]}`;
    document.getElementById('locStatusTitle').textContent = `Delivery Available in ${found.area}!`;
  } else {
    document.getElementById('locStatusTitle').textContent = `Pincode '${val}' in Express Zone!`;
  }
});

// Checkout Workflow
proceedCheckoutBtn.addEventListener('click', () => {
  if (cart.length === 0) return;
  cartDrawerOverlay.classList.add('hidden');
  checkoutModalOverlay.classList.remove('hidden');
});
closeCheckoutBtn.addEventListener('click', () => checkoutModalOverlay.classList.add('hidden'));

document.getElementById('chkNextToSlotBtn').addEventListener('click', () => {
  document.getElementById('checkoutStep1').classList.add('hidden');
  document.getElementById('checkoutStep2').classList.remove('hidden');
});

document.getElementById('chkBackToStep1').addEventListener('click', () => {
  document.getElementById('checkoutStep2').classList.add('hidden');
  document.getElementById('checkoutStep1').classList.remove('hidden');
});

document.getElementById('chkNextToPaymentBtn').addEventListener('click', () => {
  document.getElementById('checkoutStep2').classList.add('hidden');
  document.getElementById('checkoutStep3').classList.remove('hidden');
});

document.getElementById('chkBackToStep2').addEventListener('click', () => {
  document.getElementById('checkoutStep3').classList.add('hidden');
  document.getElementById('checkoutStep2').classList.remove('hidden');
});

// Payment Method Switcher (UPI, Debit Card, Credit Card, Cash/COD)
let selectedPaymentMethod = 'UPI';

const payUpiBtn = document.getElementById('payUpiBtn');
const payDebitBtn = document.getElementById('payDebitBtn');
const payCreditBtn = document.getElementById('payCreditBtn');
const payCodBtn = document.getElementById('payCodBtn');

const upiForm = document.getElementById('upiForm');
const cardForm = document.getElementById('cardForm');
const codForm = document.getElementById('codForm');
const cardFormTitle = document.getElementById('cardFormTitle');

function setPaymentTab(activeTab) {
  selectedPaymentMethod = activeTab;
  
  [payUpiBtn, payDebitBtn, payCreditBtn, payCodBtn].forEach(btn => {
    if (btn) {
      btn.style.border = '1px solid #e2e8f0';
      btn.style.background = '#ffffff';
    }
  });

  if (activeTab === 'UPI' && payUpiBtn) {
    payUpiBtn.style.border = '2px solid #10b981';
    payUpiBtn.style.background = '#ecfdf5';
    upiForm?.classList.remove('hidden');
    cardForm?.classList.add('hidden');
    codForm?.classList.add('hidden');
  } else if (activeTab === 'Debit' && payDebitBtn) {
    payDebitBtn.style.border = '2px solid #10b981';
    payDebitBtn.style.background = '#ecfdf5';
    if (cardFormTitle) cardFormTitle.textContent = '💳 Debit Card Details';
    cardForm?.classList.remove('hidden');
    upiForm?.classList.add('hidden');
    codForm?.classList.add('hidden');
  } else if (activeTab === 'Credit' && payCreditBtn) {
    payCreditBtn.style.border = '2px solid #10b981';
    payCreditBtn.style.background = '#ecfdf5';
    if (cardFormTitle) cardFormTitle.textContent = '💳 Credit Card Details';
    cardForm?.classList.remove('hidden');
    upiForm?.classList.add('hidden');
    codForm?.classList.add('hidden');
  } else if (activeTab === 'Cash' && payCodBtn) {
    payCodBtn.style.border = '2px solid #10b981';
    payCodBtn.style.background = '#ecfdf5';
    codForm?.classList.remove('hidden');
    upiForm?.classList.add('hidden');
    cardForm?.classList.add('hidden');
  }
}

if (payUpiBtn) payUpiBtn.addEventListener('click', () => setPaymentTab('UPI'));
if (payDebitBtn) payDebitBtn.addEventListener('click', () => setPaymentTab('Debit'));
if (payCreditBtn) payCreditBtn.addEventListener('click', () => setPaymentTab('Credit'));
if (payCodBtn) payCodBtn.addEventListener('click', () => setPaymentTab('Cash'));

// UPI App presets
const appPresets = [
  { id: 'payAppGpay', handle: 'alex@okaxis' },
  { id: 'payAppPhonepe', handle: 'alex@ybl' },
  { id: 'payAppPaytm', handle: 'alex@paytm' },
  { id: 'payAppBhim', handle: 'alex@bhim' }
];

appPresets.forEach(preset => {
  const btn = document.getElementById(preset.id);
  btn?.addEventListener('click', () => {
    const upiInput = document.getElementById('upiInput');
    if (upiInput) upiInput.value = preset.handle;
  });
});

// Final Order Placement
document.getElementById('placeOrderFinalBtn')?.addEventListener('click', () => {
  const subtotal = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const deliveryFee = subtotal >= 499 ? 0 : 49;

  let paymentDetails = selectedPaymentMethod;
  if (selectedPaymentMethod === 'UPI') {
    const upiVal = document.getElementById('upiInput')?.value || 'alex@okaxis';
    paymentDetails = `UPI (${upiVal})`;
  } else if (selectedPaymentMethod === 'Debit') {
    const num = document.getElementById('cardNumberInput')?.value || '4532 8892 1042 8892';
    const last4 = num.replace(/\s/g, '').slice(-4) || '8892';
    paymentDetails = `Debit Card (•••• ${last4})`;
  } else if (selectedPaymentMethod === 'Credit') {
    const num = document.getElementById('cardNumberInput')?.value || '4532 8892 1042 8892';
    const last4 = num.replace(/\s/g, '').slice(-4) || '8892';
    paymentDetails = `Credit Card (•••• ${last4})`;
  } else if (selectedPaymentMethod === 'Cash') {
    const tender = document.getElementById('codTenderSelect')?.value || 'exact';
    const tenderText = tender === 'change500' ? ' (Change for ₹500)' : tender === 'change2000' ? ' (Change for ₹2000)' : ' (Exact Cash)';
    paymentDetails = `Cash on Delivery${tenderText}`;
  }

  const newOrder = {
    id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
    customerName: document.getElementById('chkName')?.value || 'Alex Sharma',
    phone: document.getElementById('chkPhone')?.value || '+91 98765 43210',
    address: `${document.getElementById('chkStreet')?.value || ''}, ${document.getElementById('chkApt')?.value || ''}`,
    items: [...cart],
    subtotal: subtotal,
    total: subtotal * 1.05 + deliveryFee,
    status: 'Pending',
    paymentMethod: paymentDetails,
    timeSlot: 'Express 30-Min Delivery',
    createdAt: new Date().toISOString()
  };

  orders.unshift(newOrder);
  activeOrder = newOrder;
  cart = [];
  saveState();
  updateCartBadge();
  renderProducts();

  checkoutModalOverlay.classList.add('hidden');
  openTrackerModal(newOrder);
});

function openTrackerModal(order) {
  document.getElementById('trackerOrderId').textContent = order.id;
  orderTrackerOverlay.classList.remove('hidden');
}

closeTrackerBtn.addEventListener('click', () => orderTrackerOverlay.classList.add('hidden'));
document.getElementById('closeTrackerFinalBtn').addEventListener('click', () => orderTrackerOverlay.classList.add('hidden'));
document.getElementById('mobNavTracker').addEventListener('click', () => {
  if (activeOrder) openTrackerModal(activeOrder);
});

closeDetailBtn.addEventListener('click', () => productDetailOverlay.classList.add('hidden'));

openAuthModalBtn.addEventListener('click', () => authModalOverlay.classList.remove('hidden'));
closeAuthBtn.addEventListener('click', () => authModalOverlay.classList.add('hidden'));
document.getElementById('closeAuthFinalBtn').addEventListener('click', () => authModalOverlay.classList.add('hidden'));

openAddProductModalBtn.addEventListener('click', () => addProductModalOverlay.classList.remove('hidden'));
closeAddProductBtn.addEventListener('click', () => addProductModalOverlay.classList.add('hidden'));

document.getElementById('addProductForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const newP = {
    id: `prod-${Date.now()}`,
    name: document.getElementById('newProdName').value,
    category: document.getElementById('newProdCat').value,
    price: parseFloat(document.getElementById('newProdPrice').value) || 99,
    unit: document.getElementById('newProdUnit').value || 'per kg',
    originalPrice: parseFloat(document.getElementById('newProdPrice').value) * 1.15,
    rating: 5.0,
    reviewsCount: 1,
    stock: parseInt(document.getElementById('newProdStock').value) || 20,
    organic: document.getElementById('newProdOrganic').checked,
    dietary: document.getElementById('newProdOrganic').checked ? ['vegan', 'gluten-free'] : [],
    image: document.getElementById('newProdImage').value,
    description: 'Fresh quality store inventory product.'
  };

  products.unshift(newP);
  saveState();
  renderProducts();
  renderAdmin();
  addProductModalOverlay.classList.add('hidden');
});

// --- 6. INITIALIZATION ---
renderCategories();
renderProducts();
updateCartBadge();
