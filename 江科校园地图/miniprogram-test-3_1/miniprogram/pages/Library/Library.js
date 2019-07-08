// pages/Library/Library.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    scale:16,
    
    markers: [{
      id: 1,
      latitude: 28.679432081694014,
      longitude: 116.0195382158587,
      iconPath: '/images/图书馆.png',
      
      callout: {
        content: "图书馆",
        color: "#FFFFFF",
        fontSize: "20",
        bgColor: "#00688B",
        padding: "10",
        display: "ALWAYS",
        borderRadius: "80"
      }

    }]

  }, lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    ready: function (e) {
      this.mapCtx = wx.createMapContext('myMap', this)
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getCenterLocation: function () {

      this.mapCtx.getCenterLocation({
        success(res) {
          console.log(res.longitude)
          console.log(res.latitude)
        }
      })
    }, showInput: function () {

      wx.navigateTo({
        url: '../route/route',
      })
    },

    moveToLocation: function () {
      this.mapCtx.moveToLocation()
    },
    jia(res) {

      var that = this;
      that.setData({
        scale: ++this.data.scale,
        
      })
    },
    jian(res) {

      var that = this;
      that.setData({
        scale: --this.data.scale
      })

    }
  }
})
