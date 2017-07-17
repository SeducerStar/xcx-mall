// pages/personalCenter/personalCenter.js
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    array: [{
      message: 'foo',
    }, {
      message: 'bar'
    }]
  },
  //事件处理函数
  bindViewTap: function () {
    console.log('123')
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  onShareAppMessage: function () {
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})
