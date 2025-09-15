// JS Code
Page({
  data: {
    messages: [], // Array to store dynamic chat messages
    inputValue: '', // Current input value
    isTyping: false, // Whether merchant is typing
    scrollToView: '', // ID of the element to scroll to
    messageCount: 2 // Starting message count (after initial 2 messages)
  },

  onLoad: function() {
    // No need to add initial messages here since they're hardcoded in WXML
  },

  // Handle input event
  onInput: function(e) {
    this.setData({
      inputValue: e.detail.value
    });
  },

  // Send message function
  sendMessage: function() {
    const message = this.data.inputValue.trim();
    
    if (message) {
      // Add user message (will appear on LEFT side with 'incoming' class)
      const newMessage = {
        text: message,
        type: 'incoming', // Changed to 'incoming' for left side
        time: this.getCurrentTime()
      };
      
      this.setData({
        messages: [...this.data.messages, newMessage],
        inputValue: '',
        messageCount: this.data.messageCount + 1
      }, () => {
        // Scroll to bottom after data is updated (callback function)
        this.scrollToBottom();
      });
      
      // Auto-reply after a short delay
      setTimeout(() => {
        this.autoReply();
      }, 1000);
    }
  },

  // Auto-reply function
  autoReply: function() {
    // Show typing indicator
    this.setData({
      isTyping: true
    });
    
    // Scroll to bottom to show typing indicator
    this.scrollToBottom();
    
    // Wait for 2 seconds before showing the message (simulating typing)
    setTimeout(() => {
      const autoReplyMessage = {
        text: 'Please wait a moment to connect with a merchant.',
        type: 'outgoing', // Changed to 'outgoing' for right side
        time: this.getCurrentTime()
      };
      
      this.setData({
        messages: [...this.data.messages, autoReplyMessage],
        isTyping: false,
        messageCount: this.data.messageCount + 1
      }, () => {
        // Scroll to bottom after data is updated (callback function)
        this.scrollToBottom();
      });
    }, 2000);
  },

  // Function to get current time in HH:MM format
  getCurrentTime: function() {
    const now = new Date();
    return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
  },

  // Function to scroll to the bottom of the chat
  scrollToBottom: function() {
    // Use setTimeout to ensure the view is updated before scrolling
    setTimeout(() => {
      this.setData({
        scrollToView: `msg${this.data.messageCount}`
      });
    }, 100);
  }
})