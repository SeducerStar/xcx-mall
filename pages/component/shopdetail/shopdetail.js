// pages/shopdetail/shopdetail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
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
    ],
    num: 1,
    totalNum: 0,
    hasCarts: false,
    curIndex: 0,
    show: false,
    scaleCart: false,
    id: 0
  },
  addCount() {
    let num = this.data.num
    num++
    this.setData({
      num: num
    })
  },

  reduceCount() {
    let num = this.data.num
    if (num >= 2 ) {
      num--
      this.setData({
        num: num
      })
    }
  },

  addToCart() {
    const self = this
    const num = this.data.num
    let total = this.data.totalNum
    self.setData({
      show: true
    })
    setTimeout(function () {
      self.setData({
        show: false,
        scaleCart: true
      })
      setTimeout(function () {
        self.setData({
          scaleCart: false,
          hasCarts: true,
          totalNum: num + total
        })      
      }, 200)
    }, 300)
    let temp = this.data.id
    this.data.goods[temp].num = num + total
    self.setData({
      goods: this.data.goods
    })
    var shopcart = wx.getStorageSync('shopcart') || []
    shopcart = this.data.goods
    wx.setStorageSync('shopcart', shopcart)
    console.log(wx.getStorageSync('shopcart'))
    console.log(this.data.goods)
  },

  bindTap(e) {
    const index = parseInt(e.currentTarget.dataset.index)
    this.setData({
      curIndex: index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id - 1
    })
    console.log('shopdetail loading...')
    var shopcart = wx.getStorageSync('shopcart') || []
    if(shopcart.length > 0){
      this.setData({
        goods: shopcart
      })
    }
    console.log(shopcart)
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