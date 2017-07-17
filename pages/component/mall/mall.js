// pages/component/mall/mall.js
var menu = require("../../common/menu.js");
Page({
  data: {
    height: 0,
    indicatorDots: true,
    mode: 'aspectFit',
    autoplay: true,
    interval: 3000,
    duration: 1000,
    menu_list: [],
    scrollTop: 100,
    curIndex: 1,
    toView: ''
  },
  switchTab: function (e) {
    this.setData({
      curIndex: e.target.dataset.id,
      toView: e.target.dataset.value
    })
  }, 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    self.setData({
      menu_list: menu
    });
    console.log(self.data.menu_list);
    wx.getSystemInfo({
      success: function (res) {
        self.setData({
          height: res.windowHeight
        });
      }
    })
  }
})