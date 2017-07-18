// pages/component/mall/mall.js
var menu = require("../../common/menu.js");
Page({
  data: {
    height: 0,
    menu_list: [],
    scrollTop: 100,
    curIndex: 1,
    toView: '',
    listsHeight: [],
    unitPx: 0.5,
    toViewLeft: '' 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    self.setData({
      menu_list: menu
    });
    wx.getSystemInfo({
      success: function (res) {
        self.setData({
          height: res.windowHeight,
          unitPx: res.windowWidth / 750
        });
      }
    }); 
  },
  onReady: function (options) {
    var list = this.getListHeight(menu, this.data.unitPx);
    this.setData({
      listsHeight: list
    });
  },
  switchTab: function (e) {
    this.setData({
      curIndex: e.target.dataset.id,
      toView: e.target.dataset.value
    })
  },
  scroll: function (e) {
    console.log(e.detail.scrollTop);
    var heights = this.data.listsHeight;
    var tempValue, tempId;
    for (var i in heights) {
      if (e.detail.scrollTop >= heights[i].height){
        tempValue = heights[i].value;
        tempId = heights[i].id;
      }
    }
    this.setData({
      curIndex: tempId,
      toViewLeft: tempValue
    });
  },
  getListHeight: function (arr, unit) {
    var kidsLength = 0; //获取该列子元素的长度
    for (var i in arr){
      if (i == 0) {
        kidsLength = arr[i].food.length;
        continue;
      }
      arr[i].height = arr[i - 1].height+(kidsLength * 130 + 50) * unit; 
      kidsLength = arr[i].food.length;
    }
    console.log(arr);
    return arr;
  }
})