Page({
  data: {
    username: '',
    password: ''
  },

  onUsernameInput(e) {
    this.setData({ username: e.detail.value });
  },

  onPasswordInput(e) {
    this.setData({ password: e.detail.value });
  },

  onLogin() {
    const { username, password } = this.data;

    if (username === 'masum' && password === '1234') {
      wx.showToast({
        title: 'Login Success',
        icon: 'success'
      });

      // ✅ navigate to home
      setTimeout(() => {
        wx.redirectTo({
          url: '/pages/home/home'  // double check this path
        });
      }, 500);
    } else {
      wx.showToast({
        title: 'Invalid Credentials',
        icon: 'none'
      });
    }
  }
});


