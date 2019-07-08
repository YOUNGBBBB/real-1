// pages/search/search.js
var QQMapWX = require('../qqmap/qqmap-wx-jssdk.js');

// 实例化API核心类
var qqmapsdk = new QQMapWX({
  key: 'GAMBZ-AALC4-OANUG-XWG5V-PK5F7-IHFQF' // 必填
});
Page({
  

  /**
   * 页面的初始数据
   */
  data: {
   addr:''
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

  },
   showInput: function () {
    this.setData({
      inputShowed: true
    });
    
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  // 
  inputTyping: function (e) {
    
    var id = e.currentTarget.id;
    for (var i = 0; i < this.data.suggestion.length; i++) {
      if (i == id) {
        this.setData({
          inputTyping: this.data.suggestion[i].title
        });
      }
    }
    
  },
  getsuggest: function (e) {
    var _this = this;
    //调用关键词提示接口
   
    qqmapsdk.getSuggestion({
      //获取输入框值并设置keyword参数
      keyword:"江西科技学院"+ e.detail.value, //用户输入的关键词，可设置固定值,如keyword:'KFC'
      region: '南昌',
      page_size:1,
      //region:'北京', //设置城市名，限制关键词所示的地域范围，非必填参数
      success: function (res) {//搜索成功后的回调
        console.log(res);
        var sug = [];
        var adr=[]
        var loc=[]
        for (var i = 0; i < res.data.length; i++) {
          sug.push({ // 获取返回结果，放到sug数组中
            adr: wx.setStorageSync("adr", res.data[i].title),
            loc: wx.setStorageSync("loc",(String(res.data[i].location.lat + ',' + res.data[i].location.lng))),
            title: res.data[i].title,
            id: res.data[i].id,
            addr: res.data[i].address,
            city: res.data[i].city,
            district: res.data[i].district,
            latitude: res.data[i].location.lat,
            longitude: res.data[i].location.lng,
            location: String(res.data[i].location.lat + ',' + res.data[i].location.lng),

          });
           
         
        }
         //缓存本地 
       
        _this.setData({ //设置suggestion属性，将关键词搜索结果以列表形式展示
          suggestion: sug
        });
      },
      fail: function (error) {
        console.error(error);
      },
      complete: function (res) {
        console.log(res);
      }
    });
  }, serch: function () {

    wx.navigateTo({
      url: '../search-r/search-r',
    })
  },
  
})