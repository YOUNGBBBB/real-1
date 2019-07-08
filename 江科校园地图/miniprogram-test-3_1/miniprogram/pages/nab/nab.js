// pages/nab/nab.js
Page({
  "code": 0,
  /**
   * 页面的初始数据
   */
  data: {
    // 被点击索引
    currentIndexNav:0,
    "navList": [
      {
        "text": "教学楼",
        "id": 0
      },
      {
        "text": "寝室",
        "id": 1
      },
      {
        "text": "生活",
        "id": 2
      },
      {
        "text": "图书馆",
        "id": 3
      },
      {
        "text": "快递",
        "id": 4
      },
      {
        "text": "校园设施",
        "id": 5
      }, {
        "text": "其他",
        "id": 6
      }
      
      
      
    ]
  },//单击导航栏
  activeNav(e){
    this.setData({
      currentIndexNav:e.target.dataset.index
    })
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
   wx.setEnableDebug({
   enableDebug: true,
 })
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