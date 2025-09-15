Page({
  data: {
    cartItems: [],
    totalPrice: 0
  },

  onShow() {
    const cart = wx.getStorageSync('cart') || [];
    this.setData({
      cartItems: cart
    });
    this.calculateTotal();
  },

  calculateTotal() {
    let total = 0;
    this.data.cartItems.forEach(item => {
      total += item.price * item.quantity;
    });
    this.setData({
      totalPrice: total.toFixed(2)
    });
  },

  increaseQuantity(e) {
    const id = e.currentTarget.dataset.id;
    let items = this.data.cartItems;
    items.forEach(item => {
      if (item.id === id) {
        item.quantity += 1;
      }
    });
    this.setData({ cartItems: items });
    wx.setStorageSync('cart', items);
    this.calculateTotal();
  },

  decreaseQuantity(e) {
    const id = e.currentTarget.dataset.id;
    let items = this.data.cartItems;
    items = items.reduce((acc, item) => {
      if (item.id === id) {
        const newQty = (item.quantity || 1) - 1;
        if (newQty > 0) {
          acc.push({ ...item, quantity: newQty });
        }
        // if newQty <= 0, drop the item (remove from cart)
      } else {
        acc.push(item);
      }
      return acc;
    }, []);
    this.setData({ cartItems: items });
    wx.setStorageSync('cart', items);
    this.calculateTotal();
  },

  checkout() {
    wx.navigateTo({
      url: '/pages/checkout/checkout'
    });
  }
  ,
  // Remove item entirely from cart
  removeItem(e) {
    const id = e.currentTarget.dataset.id;
    const items = (this.data.cartItems || []).filter(item => item.id !== id);
    this.setData({ cartItems: items });
    wx.setStorageSync('cart', items);
    this.calculateTotal();
  }
});
