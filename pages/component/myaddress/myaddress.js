var area = require("../../common/area.js");
var p = 0, c = 0, r = 0;
// pages/myaddress/myaddress.js
Page({
  data: {
    address: {
      name: '',
      phone: '',
      detail: '',
      provinceName: '',
      cityName: '',
      regionName: '',
      isDefault: false
    },
    provinces: [],
    citys: [],
    regions: [],   
    showMessage: false,
    showDistpicker: false  
  },
  onLoad() {
    this.setArea();
    var self = this;   
    wx.getStorage({
      key: 'address',
      success: function (res) {
        self.setData({
          address: res.data
        })
      }
    })
  },
  formSubmit() {
    console.log(this.data.address);
    var self = this;
    if (self.data.address.name && self.data.address.phone && self.data.address.detail && self.data.address.provinceName && self.data.address.cityName && self.data.address.regionName ) {
      if ((/^1(3|4|5|7|8)\d{9}$/.test(self.data.address.phone))) {
        wx.setStorage({
          key: 'address',
          data: self.data.address,
          success() {
            wx.navigateBack();
          }
        })
      } else {
        wx.showModal({
          title: '提示',
          content: '手机格式不正确',
          showCancel: false
        })
      }    
    } else {
      wx.showModal({
        title: '提示',
        content: '请填写完整资料',
        showCancel: false
      })
    }
  },
  bindName(e) {
    this.setData({
      'address.name': e.detail.value
    })
  },
  bindPhone(e) {
    this.setData({
      'address.phone': e.detail.value
    })
  },
  bindDetail(e) {
    this.setData({
      'address.detail': e.detail.value
    })
  },
  //初始化地区数据
  setArea(p, c, r) {
   var provinceIndex = p || 0;
   var cityIndex = c || 0;
   var regionIndex = r || 0
   //初始化省的数据
   var province = area.data['100000'];
   var provinceKey = [];
   var provinceValue = [];
   var provinceData = [];
   
   for (var item in province) {
     var temp = {
       'name': province[item],
       'key': item
     };
     provinceData.push(temp);
   }
   this.setData({
     provinces: provinceData
   })
   //设置市的数据
   var city = area.data[provinceData[provinceIndex].key];
   var cityData = []; 
   for (var item in city) {
      var temp = {
        'name': city[item],
        'key': item
      }
      cityData.push(temp);
   }
   this.setData({
     citys: cityData
   })

   // 设置区的数据
   var regionData = [];
   if (area.data[cityData[cityIndex].key]){
     var region = area.data[cityData[cityIndex].key];
     for (var item in region) {
       var temp = {
         'name': region[item],
         'key': item
       }
       regionData.push(temp);
     }
     this.setData({
       regions: regionData
     })
   } else {
     this.setData({
       regions: []
     })
   }
  },
  //地区改变是触发
  bindChangeArea (e) {
    p = e.detail.value[0];
    c = e.detail.value[1];
    r = e.detail.value[2];
    this.setArea(p, c, r);
  },
  //显示地区选择器
  showDistpicker () {
    this.setData({
      showDistpicker: true
    })
  },
  distpickerCancel () {
    this.setData({
      showDistpicker: false
    })
  },
  distpickerSure () {
    this.setData({
      'address.provinceName': this.data.provinces[p].name,
      'address.cityName': this.data.citys[c].name,
      'address.regionName': this.data.regions[r].name
    })
    this.distpickerCancel()
  },
  switchDefault (e) {
    this.setData({
      'address.isDefault': e.detail.value
    })
  }
})