Page({
  data: {
    searchText: "",
    categories: [
      { id: 1, name: "Bag", icon: "/images/icons/bag.png" },
      { id: 2, name: "Football", icon: "/images/icons/football.png" },
      { id: 3, name: "Cloths", icon: "/images/icons/cloths.png" },
      { id: 4, name: "Headphone", icon: "/images/icons/headphone.png" },
      { id: 5, name: "Laptop", icon: "/images/icons/laptop.png" },
      { id: 6, name: "Keyboard", icon: "/images/icons/keyboard.png" },
      { id: 7, name: "Mouse", icon: "/images/icons/mouse.png" },
      { id: 8, name: "Makeup", icon: "/images/icons/makeup.png" },
      { id: 9, name: "Monitor", icon: "/images/icons/monitor.png" },
      { id: 10, name: "Phone", icon: "/images/icons/phone.png" },
      { id: 11, name: "Watch", icon: "/images/icons/watch.png" }
    ],
    currentCategory: 1,
    currentCategoryName: "Bag",
    products: [
      { id: 101, category: 1, name: "Elegant Bag", price: 356, discount: 10, originalPrice: 399, image: "/pages/index/bag-1.jpg", rating: 4 },
      { id: 102, category: 2, name: "Pro Football", price: 199, discount: 15, originalPrice: 235, image: "/pages/index/football-1.jpg", rating: 5 },
      { id: 103, category: 4, name: "Wireless Headphone", price: 499, discount: 20, originalPrice: 620, image: "/pages/index/headphone-1.jpg", rating: 4 },
      { id: 104, category: 5, name: "Gaming Laptop", price: 5999, discount: 12, originalPrice: 6800, image: "/pages/index/laptop-2.jpg", rating: 5 }
    ],
    filteredProducts: [],
    scrollToView: "",
    showModal: false,
    priceRange: 10000,
    sortOptions: [
      { value: "priceLowHigh", label: "Price: Low to High" },
      { value: "priceHighLow", label: "Price: High to Low" },
      { value: "ratingHighLow", label: "Rating: High to Low" }
    ],
    sortBy: "",
    isLoading: false
  },

  onLoad() {
    this.filterProducts(this.data.currentCategory);
  },

  /* ===== Search ===== */
  onSearchInput(e) {
    this.setData({ searchText: e.detail.value });
  },

  onSearchConfirm() {
    this.applyFilters();
  },

  onDealsTap() {
    wx.showToast({ title: "Showing hot deals!", icon: "none" });
  },

  /* ===== Category Selection ===== */
  onCategorySelect(e) {
    const id = e.currentTarget.dataset.id;
    const category = this.data.categories.find(c => c.id === id);
    this.setData({
      currentCategory: id,
      currentCategoryName: category.name
    });
    this.filterProducts(id);
  },

  /* ===== Filtering Logic ===== */
  filterProducts(categoryId) {
    let results = this.data.products.filter(p => p.category === categoryId);

    // Apply search filter
    if (this.data.searchText) {
      const q = this.data.searchText.toLowerCase();
      results = results.filter(p => p.name.toLowerCase().includes(q));
    }

    // Apply price filter
    results = results.filter(p => p.price <= this.data.priceRange);

    // Apply sorting
    if (this.data.sortBy === "priceLowHigh") {
      results.sort((a, b) => a.price - b.price);
    } else if (this.data.sortBy === "priceHighLow") {
      results.sort((a, b) => b.price - a.price);
    } else if (this.data.sortBy === "ratingHighLow") {
      results.sort((a, b) => b.rating - a.rating);
    }

    this.setData({ filteredProducts: results });
  },

  /* ===== Add to Cart ===== */
  addToCart(e) {
    const id = e.currentTarget.dataset.id;
    const product = this.data.products.find(p => p.id === id);
    wx.showToast({ title: product.name + " added!", icon: "success" });
  },

  /* ===== Product Details ===== */
  goToDetails(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({ url: "/pages/details/details?id=" + id });
  },

  /* ===== Modal Handling ===== */
  showFilterModal() {
    this.setData({ showModal: true });
  },

  hideFilterModal() {
    this.setData({ showModal: false });
  },

  onPriceRangeChange(e) {
    this.setData({ priceRange: e.detail.value });
  },

  onSortChange(e) {
    this.setData({ sortBy: e.detail.value });
  },

  resetFilters() {
    this.setData({ priceRange: 10000, sortBy: "", searchText: "" });
  },

  applyFilters() {
    this.filterProducts(this.data.currentCategory);
    this.hideFilterModal();
  }
});
