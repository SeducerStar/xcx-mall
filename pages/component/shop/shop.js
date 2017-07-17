// pages/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    mode: 'aspectFit',
    autoplay: true,
    interval: 3000,
    duration: 1000,
    goods: [
      {
        id: 1,
        image: '../../img/1.jpg',
        title: '商品简介',
        price: 200,
        stock: '有货',
        detail: '商品名称1',
        parameter: '200积分/个',
        service: '不支持退货',
        selected: true,
        num: 0
      },
      {
        id: 2,
        image: '../../img/2.jpg',
        title: '商品简介',
        price: 250,
        stock: '有货',
        detail: '商品名称2',
        parameter: '250积分/个',
        service: '不支持退货',
        selected: true,
        num: 0
      }, 
      {
        id: 3,
        image: '../../img/3.jpg',
        title: '商品简介',
        price: 300,
        stock: '有货',
        detail: '商品名称3',
        parameter: '300积分/个',
        service: '不支持退货',
        selected: true,
        num: 0
      }, 
      {
        id: 4,
        image: '../../img/4.jpg',
        title: '商品简介',
        price: 400,
        stock: '有货',
        detail: '商品名称4',
        parameter: '400积分/个',
        service: '不支持退货',
        selected: true,
        num: 0
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  }
})