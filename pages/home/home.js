Page({
  data: {
    searchText: '',
  },

  onSearchInput(e) {
    this.setData({ searchText: e.detail.value });
  },

  onSearchConfirm() {
    const keyword = (this.data.searchText || '').trim().toLowerCase();
    if (!keyword) return;
    // Simple keyword routing: if it includes laptop/phone/mouse/keyboard/watch/bag/ball/cloth/headphone/monitor
    const routeMap = [
      { key: 'laptop', id: 'lp1' },
      { key: 'phone', id: 'ph1' },
      { key: 'mouse', id: 'ms1' },
      { key: 'keyboard', id: 'k1' },
      { key: 'watch', id: 'wt1' },
      { key: 'bag', id: '1' },
      { key: 'football', id: 'football1' },
      { key: 'ball', id: 'ball2' },
      { key: 'cloth', id: 'cloth1' },
      { key: 'headphone', id: 'hd1' },
      { key: 'monitor', id: 'mn1' },
    ];
    const match = routeMap.find(m => keyword.includes(m.key));
    if (match) {
      wx.navigateTo({ url: `/pages/details/details?productId=${match.id}` });
    } else {
      wx.showToast({ title: 'No match', icon: 'none' });
    }
  },

  onShopNowTap() {
    wx.navigateTo({ url: '/pages/Categories/Categories' });
  },

  goToHomePage() {
    wx.reLaunch({ url: '/pages/home/home' });
  },

  goToCategories() {
    wx.navigateTo({
      url: '/pages/Categories/Categories'
    });
  },

  goTocartpage() {
    wx.navigateTo({
      url: '/pages/cartpage/cartpage'
    });
  },

  goToprofilepage() {
    wx.navigateTo({
      url: '/pages/profilepage/profilepage'
    });
  },

  goTocart() {
    wx.navigateTo({
      url: '/pages/cart/cart'
    });
  },
});
