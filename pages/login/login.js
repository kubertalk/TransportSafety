var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName:null,
    passWord:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.info("Login Load")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.info("Login Show")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

  loginBtnClick: function() {
    
    app.globalData.userInfo = {username:this.data.userName, password:this.data.passWord}
    wx.navigateTo({
      url: '../user/user',
    })
  },

  usernameInput: function(event){
    //console.log(event.detail.value)
    this.setData({userName:event.detail.value})
  },

  passwordInput: function(event){
    //console.log(event.detail.value)
    this.setData({passWord:event.detail.value})
  }
})