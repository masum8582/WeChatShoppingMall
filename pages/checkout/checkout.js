Page({
  data: {
    selectedPayment: 'wechat',
    isProcessing: false
  },

  // Update selected payment method
  onPaymentChange: function(e) {
    this.setData({
      selectedPayment: e.detail.value
    });
  },

  // Trigger payment
  payNow: function() {
    const paymentMethod = this.data.selectedPayment;

    if (this.data.isProcessing) return; // prevent double-click
    this.setData({ isProcessing: true });

    // Show loading indicator
    wx.showLoading({
      title: 'Processing Payment...',
      mask: true
    });

    // Simulate calling backend to get payment params
    setTimeout(() => {
      wx.hideLoading();

      // Here you would normally call your backend API to create a payment order
      // and then call wx.requestPayment() with the returned parameters
      // For demo, we simulate success
      wx.requestPayment({
        timeStamp: '1234567890', // backend should provide
        nonceStr: 'nonceStr123', // backend should provide
        package: 'prepay_id=123456', // backend should provide
        signType: 'MD5',
        paySign: 'paySign123', // backend should provide
        success: (res) => {
          wx.showToast({
            title: 'Payment Successful',
            icon: 'success',
            duration: 2000
          });

          // Redirect to success page if needed
          // wx.redirectTo({ url: '/pages/payment-success/payment-success' });
        },
        fail: (err) => {
          wx.showToast({
            title: 'Payment Failed',
            icon: 'error',
            duration: 2000
          });
          console.error('Payment Error:', err);
        },
        complete: () => {
          this.setData({ isProcessing: false });
        }
      });

    }, 1000); // simulate network delay
  }
});
