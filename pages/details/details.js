Page({
  data: {
    productId: '',
    product: {}
  },

  onLoad(options) {
    // Prefer receiving product via eventChannel
    const eventChannel = this.getOpenerEventChannel && this.getOpenerEventChannel();
    if (eventChannel && eventChannel.on) {
      eventChannel.on('product', (product) => {
        this.setData({ product });
      });
    }

    // Fallback: previous behavior using id-based lookup if provided
    if (options && (options.id || options.productId)) {
      const productId = options.id || options.productId;
    this.setData({ productId });
    this.loadProduct(productId);
    }
  },

  loadProduct(id) {
    // Mock product database (replace with real API later)

    //Bag
    const products = {
      '1': {
        title: 'Elegant Ladies Handbag',
        price: '¥356',
        originalPrice: '¥399',
        discount: '11% Off',
        image: '/pages/index/bag-1.jpg',
        stars: '★★★★',
        reviewCount: 58,
        description: 'Elegant daily handbag with reinforced stitching, magnetic clasp, and a soft-touch interior. Ideal for city commutes and evenings out.'
      },
      '2': {
        title: 'Half Moon Laptop Bag for Men',
        price: '¥430',
        originalPrice: '¥520',
        discount: '17% Off',
        image: '/pages/index/bag-2.jpg',
        stars: '★★★★★',
        reviewCount: 74,
        description: 'Spacious work bag with padded laptop sleeve (15.6\") and anti-scratch lining. Water‑resistant fabric keeps your essentials safe.'
      },
      '3': {
        title: 'Trendy Crossbody Ladies Bag',
        price: '¥289',
        originalPrice: '¥369',
        discount: '22% Off',
        image: '/pages/index/bag-3.jpg',
        stars: '★★★★',
        reviewCount: 102,
        description: 'Compact crossbody with adjustable strap and hidden zip pocket. Minimalist silhouette pairs well with casual or formal outfits.'
      },
      '4': {
        title: 'Premium Leather School Bag',
        price: '¥243',
        originalPrice: '¥320',
        discount: '24% Off',
        image: '/pages/index/bag-4.jpg',
        stars: '★★★★★',
        reviewCount: 76,
        description: 'Durable school bag with breathable back panel, multi-pocket organizer and reinforced base. Built for everyday use.'
      },
      '5': {
        title: 'Trendy Crossbody School Backpack',
        price: '¥243',
        originalPrice: '¥299',
        discount: '19% Off',
        image: '/pages/index/bag-5.jpg',
        stars: '★★★★',
        reviewCount: 40,
        description: 'Lightweight backpack with water‑repellent coating, quick‑access top pocket, and ergonomic straps.'
      },
      '6': {
        title: 'Stylish Designer School Bag',
        price: '¥125',
        originalPrice: '¥168',
        discount: '21% Off',
        image: '/pages/index/bag-6.jpg',
        stars: '★★★',
        reviewCount: 65,
        description: 'Everyday tote with magnetic closure, internal divider and phone pocket. Simple, practical, reliable.'
      },
      '7': {
        title: 'Stylish Designer Football',
        price: '¥25',
        originalPrice: '¥34',
        discount: '14% Off',
        image: '/pages/index/ball-1.jpg',
        stars: '★★★★★',
        reviewCount: 5,
        description: 'Reliable and well-crafted football with premium construction, sturdy panels, and great bounce. Designed for casual games or serious competitions.'
      },
      'ball2': {
        title: 'Trendy Match-Ready Football',
        price: '¥43',
        originalPrice: '¥49',
        discount: '10% Off',
        image: '/pages/index/ball-2.jpg',
        stars: '★★★★★',
        reviewCount: 12,
        description: 'High-quality football built for durability and performance, featuring tough stitching, excellent grip, and a sleek finish. Ideal for both practice and professional play.'
      },
      'ball3': {
        title: 'Premium Leather Football',
        price: '¥56',
        originalPrice: '¥67',
        discount: '29% Off',
        image: '/pages/index/ball-3.jpg',
        stars: '★★★★★',
        reviewCount: 9,
        description: 'Durable football made with premium materials, strong stitching, and a long-lasting design. Perfect for training or competitive matches.'
      },
    'cloth1': {
      title: 'Hoodie with Pocket',
      price: '¥37',
      originalPrice: '¥67',
      discount: '12% Off',
      image: '/pages/index/cloth-4.jpg',
      stars: '★★★★★',
      reviewCount: 34,
      description: 'Soft fleece cotton.Kangaroo pocket, drawstring hood, ribbed cuffs and hem.Relaxed, cozy, perfect for casual or sportswear.S, M, L, XL'
    },
  'cloth2': {
    title: 'Stylish shirt with Pocket',
    price: '¥33',
    originalPrice: '¥47',
    discount: '22% Off',
    image: '/pages/index/cloth-2.jpg',
    stars: '★★★★★',
    reviewCount: 45,
    description: 'Durable shirt made with premium materials, reinforced stitching, and a long-lasting design. Ideal for training sessions or competitive matches.'
  },
'cloth3': {
  title: 'Stylish full shirt',
  price: '¥65',
  originalPrice: '¥79',
  discount: '12% Off',
  image: '/pages/index/cloth-3.jpg',
  stars: '★★★★★',
  reviewCount: 87,
  description: 'Stay on top of your game with this high-quality football shirt, crafted from premium, breathable polyester to keep you comfortable during training and matches. The shirt features reinforced stitching for extra durability and a long-lasting design that withstands intense activity.'
},
'cloth4': {
  title: 'Casual T-Shirt – Comfortable & Stylish',
  price: '¥33',
  originalPrice: '¥67',
  discount: '17% Off',
  image: '/pages/index/cloth-1.jpg',
  stars: '★★★★',
  reviewCount: 76,
  description: 'Made from soft, breathable cotton, this t-shirt offers all-day comfort with a modern, slim fit. Perfect for casual outings, workouts, or layering, it combines style and ease in one essential wardrobe piece.Sizes: S, M, L, XL'
},
'football1': {
  title: 'Premium Leather Football',
  price: '¥56',
  originalPrice: '¥67',
  discount: '29% Off',
  image: '/pages/index/football-1.jpg',
  stars: '★★★★★',
  reviewCount: 9,
  description: 'Durable football made with premium materials, strong stitching, and a long-lasting design. Perfect for training or competitive matches.'
},
'football2': {
  title: 'Premium Football',
  price: '¥46',
  originalPrice: '¥69',
  discount: '17% Off',
  image: '/pages/index/football-2.jpg',
  stars: '★★★★',
  reviewCount: 54,
  description: 'This football is crafted from top-grade materials with sturdy stitching, ensuring lasting performance. Ideal for both practice and competitive play.'
},
'hd1': {
  title: 'Wireless Bluetooth Headphones',
  price: '¥79',
  originalPrice: '¥119',
  discount: '20% Off',
  image: '/pages/index/headphone-1.jpg',
  stars: '★★★★★',
  reviewCount: 122,
  description: 'Deep bass 40mm drivers, 35h battery life and dual‑device pairing. Ultra‑soft cushions for long sessions.'
},
'hd2': {
  title: 'Noise-Cancelling Over-Ear Headphones',
  price: '¥129',
  originalPrice: '¥169',
  discount: '15% Off',
  image: '/pages/index/headphone-2.jpg',
  stars: '★★★★★',
  reviewCount: 34,
  description: 'Immerse yourself in your music with advanced noise-cancelling technology. Soft over-ear cushions block outside noise, delivering an uninterrupted premium listening experience wherever you go.'
},
'hd3': {
  title: 'Foldable Travel Headphones',
  price: '¥65',
  originalPrice: '¥85',
  discount: '8% Off',
  image: '/pages/index/headphone-3.jpg',
  stars: '★★★',
  reviewCount: 8,
  description: 'Compact and foldable, these travel headphones are perfect for commuting or trips. Adjustable headband, lightweight design, and high-quality audio make them a convenient companion on the go.'
},
'hd4': {
  title: 'Gaming Headset with Mic',
  price: '¥99',
  originalPrice: '¥120',
  discount: '12% Off',
  image: '/pages/index/headphone-4.jpg',
  stars: '★★★★',
  reviewCount: 21,
  description: 'Take your gaming to the next level with this headset featuring clear surround sound and a built-in microphone. Comfortable fit ensures hours of immersive gameplay without fatigue.'
},
'hd5': {
  title: 'Sports & Workout Headphones',
  price: '¥49',
  originalPrice: '¥63',
  discount: '5% Off',
  image: '/pages/index/headphone-5.jpg',
  stars: '★★★★',
  reviewCount: 15,
  description: 'Stay active with these sweat-resistant headphones designed for workouts and outdoor activities. Secure fit, wireless design, and long battery life keep you motivated while enjoying powerful sound.'
},
'hd6': {
  title: 'Premium Hi-Fi Headphones',
  price: '¥149',
  originalPrice: '¥169',
  discount: '20% Off',
  image: '/pages/index/headphone-6.jpg',
  stars: '★★★★★',
  reviewCount: 42,
  description: 'Experience studio-quality audio with these premium Hi-Fi headphones. Soft ear cushions, elegant design, and exceptional sound clarity make them perfect for audiophiles and music lovers.'
},
'k1': {
  title: 'Mechanical Gaming Keyboard',
  price: '¥129',
  originalPrice: '¥159',
  discount: '12% Off',
  image: '/pages/index/key-1.jpg',
  stars: '★★★★★',
  reviewCount: 68,
  description: 'Hot‑swappable blue switches, per‑key RGB and detachable USB‑C. Durable PBT keycaps with side‑printed legends.'
},
'k2': {
  title: 'Wireless Bluetooth Keyboard',
  price: '¥97',
  originalPrice: '¥119',
  discount: '10% Off',
  image: '/pages/index/key-2.jpg',
  stars: '★★★★★',
  reviewCount: 35,
  description: 'Add style and functionality to your setup with this RGB backlit keyboard. Vibrant lighting effects, tactile keys, and durable build make it perfect for both gaming and everyday use.'
},
'k3': {
  title: 'RGB Backlit Keyboard',
  price: '¥119',
  originalPrice: '¥149',
  discount: '12% Off',
  image: '/pages/index/key-3.jpg',
  stars: '★★★★',
  reviewCount: 22,
  description: 'Stay productive anywhere with this wireless Bluetooth keyboard. Compact, lightweight, and compatible with multiple devices, it delivers a smooth typing experience without the clutter of cables.'
},
'k4': {
  title: 'Slim Compact Keyboard',
  price: '¥79',
  originalPrice: '¥99',
  discount: '8% Off',
  image: '/pages/index/key-4.jpg',
  stars: '★★★',
  reviewCount: 18,
  description: 'Experience precision and speed with this mechanical gaming keyboard. Designed for gamers, it features responsive keys, durable construction, and customizable backlighting for an immersive gaming experience.'
},
'lp1': {
  title: 'Slim Ultrabook Laptop',
  price: '¥4999',
  originalPrice: '¥5299',
  discount: '10% Off',
  image: '/pages/index/laptop-1.jpg',
  stars: '★★★★',
  reviewCount: 23,
  description: 'A lightweight and stylish ultrabook designed for productivity on the go. Features fast performance, long battery life, and a sleek design perfect for students and professionals.'
},
'lp2': {
  title: 'Gaming Laptop Pro',
  price: '¥6999',
  originalPrice: '¥7199',
  discount: '12% Off',
  image: '/pages/index/laptop-2.jpg',
  stars: '★★★★★',
  reviewCount: 45,
  description: 'High-performance gaming laptop with powerful graphics and a fast processor. Enjoy smooth gameplay, vibrant visuals, and an immersive gaming experience anywhere.'
},
'lp3': {
  title: 'Business Notebook',
  price: '¥4599',
  originalPrice: '¥4899',
  discount: '8% Off',
  image: '/pages/index/laptop-3.jpg',
  stars: '★★★★',
  reviewCount: 31,
  description: 'Reliable business notebook with a robust build and efficient performance. Ideal for office work, presentations, and multitasking with all-day battery support.'
},
'lp4': {
  title: 'Convertible 2-in-1 Laptop',
  price: '¥5299',
  originalPrice: '¥6199',
  discount: '9% Off',
  image: '/pages/index/laptop-4.jpg',
  stars: '★★★',
  reviewCount: 27,
  description: 'Flexible 2-in-1 laptop that functions as both a tablet and a laptop. Touchscreen support, versatile hinge design, and lightweight portability make it perfect for work and entertainment.'
},
'lp5': {
  title: 'High-Performance Laptop',
  price: '¥6399',
  originalPrice: '¥6899',
  discount: '11% Off',
  image: '/pages/index/laptop-5.jpg',
  stars: '★★★★★',
  reviewCount: 38,
  description: 'Engineered for demanding tasks, this laptop offers fast processing, ample storage, and a sharp display. Perfect for professionals, content creators, and multitaskers.'
},
'lp6': {
  title: 'Everyday Use Laptop',
  price: '¥3399',
  originalPrice: '¥4099',
  discount: '7% Off',
  image: '/pages/index/laptop-6.jpg',
  stars: '★★★',
  reviewCount: 19,
  description: 'Affordable and reliable laptop for daily tasks like browsing, streaming, and document work. Lightweight design with long battery life makes it perfect for students and home use.'
},
'mk1': {
  title: 'Natural Glow Highlighter',
  price: '¥3399',
  originalPrice: '¥4099',
  discount: '7% Off',
  image: '/pages/index/mk-1.jpg',
  stars: '★★★',
  reviewCount: 19,
  description: 'Affordable and reliable laptop for daily tasks like browsing, streaming, and document work. Lightweight design with long battery life makes it perfect for students and home use.'
},
'mk2': {
  title: 'Smokey Eyeshadow Palette',
  price: '¥3399',
  originalPrice: '¥4099',
  discount: '7% Off',
  image: '/pages/index/mk-2.jpg',
  stars: '★★★',
  reviewCount: 19,
  description: 'Affordable and reliable laptop for daily tasks like browsing, streaming, and document work. Lightweight design with long battery life makes it perfect for students and home use.'
},
'mk3': {
  title: 'Hydrating Foundation Cream',
  price: '¥3399',
  originalPrice: '¥4099',
  discount: '7% Off',
  image: '/pages/index/mk-3.jpg',
  stars: '★★★',
  reviewCount: 19,
  description: 'Affordable and reliable laptop for daily tasks like browsing, streaming, and document work. Lightweight design with long battery life makes it perfect for students and home use.'
},
'mk4': {
  title: 'Luxury Lipstick Collection',
  price: '¥3399',
  originalPrice: '¥4099',
  discount: '7% Off',
  image: '/pages/index/mk-4.jpg',
  stars: '★★★',
  reviewCount: 19,
  description: 'Affordable and reliable laptop for daily tasks like browsing, streaming, and document work. Lightweight design with long battery life makes it perfect for students and home use.'
},
'mn1': {
  title: 'UltraWide Curved Monitor 34',
  price: '¥3399',
  originalPrice: '¥4099',
  discount: '7% Off',
  image: '/pages/index/mn-1.jpg',
  stars: '★★★',
  reviewCount: 19,
  description: 'Affordable and reliable laptop for daily tasks like browsing, streaming, and document work. Lightweight design with long battery life makes it perfect for students and home use.'
},
'mn2': {
  title: '4K UHD Professional Monitor 27',
  price: '¥3399',
  originalPrice: '¥4099',
  discount: '7% Off',
  image: '/pages/index/mn-2.jpg',
  stars: '★★★',
  reviewCount: 19,
  description: 'Affordable and reliable laptop for daily tasks like browsing, streaming, and document work. Lightweight design with long battery life makes it perfect for students and home use.'
},
'mn3': {
  title: 'Gaming Monitor 240Hz 32',
  price: '¥3399',
  originalPrice: '¥4099',
  discount: '7% Off',
  image: '/pages/index/mn-3.jpg',
  stars: '★★★',
  reviewCount: 19,
  description: 'Affordable and reliable laptop for daily tasks like browsing, streaming, and document work. Lightweight design with long battery life makes it perfect for students and home use.'
},
'mn4': {
  title: 'Portable USB-C Monitor 15.6',
  price: '¥3399',
  originalPrice: '¥4099',
  discount: '7% Off',
  image: '/pages/index/mn-4.jpg',
  stars: '★★★',
  reviewCount: 19,
  description: 'Affordable and reliable laptop for daily tasks like browsing, streaming, and document work. Lightweight design with long battery life makes it perfect for students and home use.'
},
'ms1': {
  title: 'Wireless Optical Mouse',
  price: '¥3399',
  originalPrice: '¥4099',
  discount: '7% Off',
  image: '/pages/index/laptop-6.jpg',
  stars: '★★★',
  reviewCount: 19,
  description: 'Affordable and reliable laptop for daily tasks like browsing, streaming, and document work. Lightweight design with long battery life makes it perfect for students and home use.'
},
'ms2': {
  title: 'Gaming RGB Mouse',
  price: '¥3399',
  originalPrice: '¥4099',
  discount: '7% Off',
  image: '/pages/index/ms-2.jpg',
  stars: '★★★',
  reviewCount: 19,
  description: 'Affordable and reliable laptop for daily tasks like browsing, streaming, and document work. Lightweight design with long battery life makes it perfect for students and home use.'
},
'ms3': {
  title: 'Ergonomic Vertical Mouse',
  price: '¥3399',
  originalPrice: '¥4099',
  discount: '7% Off',
  image: '/pages/index/ms-3.jpg',
  stars: '★★★',
  reviewCount: 19,
  description: 'Affordable and reliable laptop for daily tasks like browsing, streaming, and document work. Lightweight design with long battery life makes it perfect for students and home use.'
},
'ms4': {
  title: 'Bluetooth Travel Mouse',
  price: '¥3399',
  originalPrice: '¥4099',
  discount: '7% Off',
  image: '/pages/index/ms-4.jpg',
  stars: '★★★',
  reviewCount: 19,
  description: 'Affordable and reliable laptop for daily tasks like browsing, streaming, and document work. Lightweight design with long battery life makes it perfect for students and home use.'
},
'ph1': {
  title: 'OnePlus 12',
  price: '¥3399',
  originalPrice: '¥4099',
  discount: '7% Off',
  image: '/pages/index/ph-1.jpg',
  stars: '★★★',
  reviewCount: 19,
  description: 'Affordable and reliable laptop for daily tasks like browsing, streaming, and document work. Lightweight design with long battery life makes it perfect for students and home use.'
},
'ph2': {
  title: 'iPhone 14',
  price: '¥3399',
  originalPrice: '¥4099',
  discount: '7% Off',
  image: '/pages/index/ph-2.jpg',
  stars: '★★★',
  reviewCount: 19,
  description: 'Affordable and reliable laptop for daily tasks like browsing, streaming, and document work. Lightweight design with long battery life makes it perfect for students and home use.'
},
'ph3': {
  title: 'iPhone 15 Pro',
  price: '¥3399',
  originalPrice: '¥4099',
  discount: '7% Off',
  image: '/pages/index/ph-3.jpg',
  stars: '★★★',
  reviewCount: 19,
  description: 'Affordable and reliable laptop for daily tasks like browsing, streaming, and document work. Lightweight design with long battery life makes it perfect for students and home use.'
},
'ph4': {
  title: 'Oppo s13 pro',
  price: '¥3399',
  originalPrice: '¥4099',
  discount: '7% Off',
  image: '/pages/index/ph-4.jpg',
  stars: '★★★',
  reviewCount: 19,
  description: 'Affordable and reliable laptop for daily tasks like browsing, streaming, and document work. Lightweight design with long battery life makes it perfect for students and home use.'
},
'so1': {
  title: 'Nike Air Zoom Pegasus',
  price: '¥3399',
  originalPrice: '¥4099',
  discount: '7% Off',
  image: '/pages/index/so-1.jpg',
  stars: '★★★',
  reviewCount: 19,
  description: 'Affordable and reliable laptop for daily tasks like browsing, streaming, and document work. Lightweight design with long battery life makes it perfect for students and home use.'
},
'so2': {
  title: 'Adidas Ultraboost',
  price: '¥3399',
  originalPrice: '¥4099',
  discount: '7% Off',
  image: '/pages/index/so-2.jpg',
  stars: '★★★',
  reviewCount: 19,
  description: 'Affordable and reliable laptop for daily tasks like browsing, streaming, and document work. Lightweight design with long battery life makes it perfect for students and home use.'
},
'so3': {
  title: 'Reebok Classic Leather',
  price: '¥3399',
  originalPrice: '¥4099',
  discount: '7% Off',
  image: '/pages/index/so-3.jpg',
  stars: '★★★',
  reviewCount: 19,
  description: 'Affordable and reliable laptop for daily tasks like browsing, streaming, and document work. Lightweight design with long battery life makes it perfect for students and home use.'
},
'so4': {
  title: 'Classic Leather',
  price: '¥3399',
  originalPrice: '¥4099',
  discount: '7% Off',
  image: '/pages/index/so-4.jpg',
  stars: '★★★',
  reviewCount: 19,
  description: 'Affordable and reliable laptop for daily tasks like browsing, streaming, and document work. Lightweight design with long battery life makes it perfect for students and home use.'
},
'wt1': {
  title: 'Seiko Mechanical Watch',
  price: '¥3399',
  originalPrice: '¥4099',
  discount: '7% Off',
  image: '/pages/index/wt-1.jpg',
  stars: '★★★',
  reviewCount: 19,
  description: 'Affordable and reliable laptop for daily tasks like browsing, streaming, and document work. Lightweight design with long battery life makes it perfect for students and home use.'
},
'wt2': {
  title: 'Apple Watch Series 9',
  price: '¥3399',
  originalPrice: '¥4099',
  discount: '7% Off',
  image: '/pages/index/wt-2.jpg',
  stars: '★★★',
  reviewCount: 19,
  description: 'Affordable and reliable laptop for daily tasks like browsing, streaming, and document work. Lightweight design with long battery life makes it perfect for students and home use.'
},
'wt3': {
  title: 'ossil Gen 6',
  price: '¥3399',
  originalPrice: '¥4099',
  discount: '7% Off',
  image: '/pages/index/wt-3.jpg',
  stars: '★★★',
  reviewCount: 19,
  description: 'Affordable and reliable laptop for daily tasks like browsing, streaming, and document work. Lightweight design with long battery life makes it perfect for students and home use.'
},

    };

    const base = products[id] || { title: 'Product Not Found', description: '' };
    const product = this.randomizeProductVisuals(id, base);
    this.setData({ product });
  },

  // ===== Helpers to diversify descriptions and randomize images deterministically =====
  hashToIndex(key, mod) {
    let h = 0;
    const s = String(key || '');
    for (let i = 0; i < s.length; i += 1) {
      h = (h * 31 + s.charCodeAt(i)) >>> 0;
    }
    return mod > 0 ? (h % mod) : 0;
  },

  buildDescription(category, title) {
    const commonSnippets = [
      'Ships within 24h with careful packaging.',
      'Backed by a 7‑day easy return policy.',
      'Quality‑checked before dispatch for peace of mind.',
      'Minimalist design meets everyday practicality.',
      'Customer‑loved for its reliability and value.',
    ];
    const bag = [
      'Multiple compartments keep essentials neatly organized.',
      'Comfortable straps and reinforced seams for daily carry.',
      'Water‑repellent finish protects valuables on rainy days.',
    ];
    const laptop = [
      'Powerful performance with long‑lasting battery life.',
      'Slim, lightweight body perfect for work and travel.',
      'Fast SSD storage and crisp display for productivity.',
    ];
    const phone = [
      'Vivid display and all‑day battery for non‑stop use.',
      'Powerful processor ensures smooth multitasking.',
      'Pro‑grade camera for stunning photos and videos.',
    ];
    const headphone = [
      'Crystal‑clear audio with balanced bass and treble.',
      'All‑day comfort with soft ear cushions.',
      'Stable Bluetooth connection with low latency.',
    ];
    const keyboard = [
      'Responsive switches with a satisfying tactile feel.',
      'Durable keycaps with fade‑resistant legends.',
      'Detachable USB‑C cable for easy portability.',
    ];
    const monitor = [
      'Eye‑care tech reduces blue light and flicker.',
      'Accurate colors great for gaming and content creation.',
      'Adjustable stand for comfortable viewing angles.',
    ];
    const mouse = [
      'Precision sensor and ergonomic contouring.',
      'Customizable DPI for work and play.',
      'Silent clicks for late‑night sessions.',
    ];
    const shoe = [
      'Breathable mesh upper keeps feet cool.',
      'Cushioned midsole for superior comfort.',
      'High‑grip outsole for confident strides.',
    ];
    const watch = [
      'Scratch‑resistant glass and water‑resistant build.',
      'Long battery life and quick magnetic charging.',
      'Health tracking with heart‑rate and sleep insights.',
    ];
    const makeup = [
      'Skin‑friendly formula with lasting wear.',
      'Blendable texture for a natural finish.',
      'Travel‑friendly size with secure cap.',
    ];

    const poolMap = {
      bag, laptop, phone, headphone, keyboard, monitor, mouse, shoe, watch, makeup,
    };
    const pool = poolMap[category] || commonSnippets;
    const commonPick = commonSnippets[this.hashToIndex(title + category, commonSnippets.length)];
    const poolPick = pool[this.hashToIndex(category + title, pool.length)];
    return `${title}. ${poolPick} ${commonPick}`;
  },

  randomizeProductVisuals(id, base) {
    const product = { ...base };
    const idStr = String(id || '').toLowerCase();

    // Determine category and available images
    const images = {
      bag: ['bag-1.jpg','bag-2.jpg','bag-3.jpg','bag-4.jpg','bag-5.jpg','bag-6.jpg'],
      ball: ['ball-1.jpg','ball-2.jpg','ball-3.jpg'],
      cloth: ['cloth-1.jpg','cloth-2.jpg','cloth-3.jpg','cloth-4.jpg'],
      football: ['football-1.jpg','football-2.jpg'],
      headphone: ['headphone-1.jpg','headphone-2.jpg','headphone-3.jpg','headphone-4.jpg','headphone-5.jpg','headphone-6.jpg'],
      key: ['key-1.jpg','key-2.jpg','key-3.jpg','key-4.jpg'],
      laptop: ['laptop-1.jpg','laptop-2.jpg','laptop-3.jpg','laptop-4.jpg','laptop-5.jpg','laptop-6.jpg'],
      mk: ['mk-1.jpg','mk-2.jpg','mk-3.jpg','mk-4.jpg'],
      mn: ['mn-1.jpg','mn-2.jpg','mn-3.jpg','mn-4.jpg'],
      ms: ['ms-1.jpg','ms-2.jpg','ms-3.jpg','ms-4.jpg'],
      ph: ['ph-1.jpg','ph-2.jpg','ph-3.jpg','ph-4.jpg'],
      so: ['so-1.jpg','so-2.jpg','so-3.jpg','so-4.jpg'],
      wt: ['wt-1.jpg','wt-2.jpg','wt-3.jpg','wt-4.jpg'],
    };

    let category = null;
    if (/^\d+$/.test(idStr)) category = 'bag';
    else if (idStr.startsWith('ball')) category = 'ball';
    else if (idStr.startsWith('cloth')) category = 'cloth';
    else if (idStr.startsWith('football')) category = 'football';
    else if (idStr.startsWith('hd')) category = 'headphone';
    else if (idStr.startsWith('k')) category = 'key';
    else if (idStr.startsWith('lp')) category = 'laptop';
    else if (idStr.startsWith('mk')) category = 'mk';
    else if (idStr.startsWith('mn')) category = 'mn';
    else if (idStr.startsWith('ms')) category = 'ms';
    else if (idStr.startsWith('ph')) category = 'ph';
    else if (idStr.startsWith('so')) category = 'so';
    else if (idStr.startsWith('wt')) category = 'wt';

    if (category && images[category] && images[category].length) {
      const choices = images[category];
      const idx = this.hashToIndex(idStr + product.title, choices.length);
      product.image = `/pages/index/${choices[idx]}`;
      // Build a unique yet consistent description for this product
      product.description = this.buildDescription(category, product.title);
    } else if (product.title) {
      // At least diversify description even if category not matched
      product.description = this.buildDescription('generic', product.title);
    }

    return product;
  },

  // Utility to convert price strings like "¥356" to numeric 356
  parsePriceToNumber(price) {
    if (typeof price === 'number') return price;
    if (!price) return 0;
    const match = String(price).replace(/[^0-9.]/g, '');
    const num = parseFloat(match || '0');
    return isNaN(num) ? 0 : num;
  },

  // Add current product to cart in local storage
  addToCart() {
    const current = this.data.product;
    if (!current) return;

    const cart = wx.getStorageSync('cart') || [];

    // Determine an identifier: prefer this.data.productId fallback to title
    const id = this.data.productId || current.id || current.title;
    const title = current.title || current.name || 'Product';
    const image = current.image || '';
    const unitPrice = this.parsePriceToNumber(current.price);

    // Look for existing item
    const existingIndex = cart.findIndex((item) => item.id === id);
    if (existingIndex >= 0) {
      cart[existingIndex].quantity = (cart[existingIndex].quantity || 1) + 1;
    } else {
      cart.push({ id, title, image, price: unitPrice, quantity: 1 });
    }

    wx.setStorageSync('cart', cart);

    wx.showToast({
      title: 'Added to cart',
      icon: 'success',
      duration: 1200
    });
  },

  buyNow() {
    // Ensure current product is in the cart, then proceed to cart/checkout
    this.addToCart();
    // Navigate to cart so user can add multiple items and see totals, then checkout
    wx.navigateTo({ url: '/pages/cart/cart' });
  },
});

