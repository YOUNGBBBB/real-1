// pages/express/express.js
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
    scale: 17,
    latitude: 28.683993960000493,
    longitude: 116.01901518591934,
    markers: [{
      id: 1,
      latitude: 28.68357982168086,
      longitude: 116.02034913765114,
      iconPath: '/images/wu.png',
      callout: {
        content: "天天快递",
        color: "#FFFFFF",
        fontSize: "10",
        borderRadius: "10",
        bgColor: "#B23AEE",
        padding: "10",
        display: "ALWAYS",
        borderRadius: "80"
      }
    }, {
        id: 2,
        latitude: 28.684022195652148,
        longitude: 116.02034913765114,
        iconPath: '/images/wu.png',

        callout: {
          content: "申通快递 ",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#B23AEE",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 3,
        latitude: 28.683379026932858,
        longitude: 116.02034913765114,
        iconPath: '/images/wu.png',

        callout: {
          content: "安能速尔",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#B23AEE",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 4,
        latitude: 28.683811989899276,
        longitude: 116.02034913765114,
        iconPath: '/images/wu.png',

        callout: {
          content: "中通快递",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#B23AEE",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 5,
        latitude: 28.683284904446275,
        longitude: 116.01962672949284,
        iconPath: '/images/wu.png',

        callout: {
          content: "百世 ",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#B23AEE",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 6,
        latitude: 28.683284904446275,
        longitude: 116.01939427091442,
        iconPath: '/images/wu.png',

        callout: {
          content: "韵达 ",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#B23AEE",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 7,
        latitude: 28.683637863963103,
        longitude: 116.01939427091442,
        iconPath: '/images/wu.png',

        callout: {
          content: "京东",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#B23AEE",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 8,
        latitude: 28.683488836525292,
        longitude: 116.01962672949284,
        iconPath: '/images/wu.png',

        callout: {
          content: "顺丰",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#B23AEE",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 9,
        latitude: 28.68427318744955,
        longitude: 116.01771341938606,
        iconPath: '/images/wu.png',

        callout: {
          content: "圆通快递 ",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#B23AEE",
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
