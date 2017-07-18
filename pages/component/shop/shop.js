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
  }
})