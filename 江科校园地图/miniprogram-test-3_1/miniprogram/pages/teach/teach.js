// pages/index_01/index.js
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
    scale: 16,
    latitude: 28.67775662444011,
    longitude: 116.01790564523857,

    markers: [{
        id: 1,
        latitude: 28.67717303188762,
        longitude: 116.01740138986192,
        iconPath: '/images/wu.png',

        callout: {
          
          content: "  教2财经学院 ",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#00688B",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 2,
        latitude: 28.67775662451194,
        longitude: 116.01707952486198,
        iconPath: '/images/wu.png',

        callout: {
          content: "  教3外语外贸学院 ",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#00688B",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 3,
        latitude: 28.678114308662877,
        longitude: 116.01628559091172,
        iconPath: '/images/wu.png',

        callout: {
          content: "  教4艺术设计学院 ",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#00688B",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 4,
        latitude: 28.676313325084163,
        longitude: 116.01665752370413,
        iconPath: '/images/wu.png',

        callout: {
          content: "  教1管理学院 ",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#00688B",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 5,
        latitude: 28.676259985368116,
        longitude: 116.01892488474608,
        iconPath: '/images/wu.png',

        callout: {
          content: "s1实验楼 ",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#00688B",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 6,
        latitude: 28.67529045296279,
        longitude: 116.01784484852818,
        iconPath: '/images/大门1.png',
        title: '南校门'
      }, {
        id: 7,
        latitude: 28.677684459862025,
        longitude: 116.01628559091172,
        iconPath: '/images/wu.png',

        callout: {
          content: "  教七 ",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#00688B",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80",
          iconPath:'/images/wu.png'
        }
      }, {
        id: 8,
        latitude: 28.67547871236334,
        longitude: 116.01640182016003,
        iconPath: '/images/wu.png',

        callout: {
          content: "行政楼 ",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#00688B",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 9,
        latitude: 28.6772232334057,
        longitude: 116.01584749682719,
        iconPath: '/images/wu.png',

        callout: {
          content: "教6 ",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#00688B",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 10,
        latitude: 28.677612295377905,
        longitude: 116.01573663224248,
        iconPath: '/images/wu.png',

        callout: {
          content: "教5 ",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#00688B",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      },
      {
        id: 11,
        latitude: 28.676871821628026,
        longitude: 116.01874070650287,
        iconPath: '/images/wu.png',

        callout: {
          content: "s2实验楼 ",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#00688B",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 12,
        latitude: 28.676871821628026,
        longitude: 116.01927714814214,
        iconPath: '/images/wu.png',

        callout: {
          content: "s3实验楼 ",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#00688B",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 13,
        latitude: 28.676548647127955,
        longitude: 116.01986723404356,
        iconPath: '/images/wu.png',

        callout: {
          content: "s4实验楼 ",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#00688B",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 14,
        latitude: 28.677389526350304,
        longitude: 116.01927714806028,
        iconPath: '/images/wu.png',

        callout: {
          content: "s5实验楼 ",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#00688B",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 15,
        latitude: 28.677069490933995,
        longitude: 116.01992087830571,
        iconPath: '/images/wu.png',

        callout: {
          content: "教8汽车工程学院",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#00688B",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 16,
        latitude: 28.677568369205197,
        longitude: 116.01992087830571,
        iconPath: '/images/wu.png',

        callout: {
          content: "教9信息工程学院",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#00688B",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 17,
        latitude: 28.677568369205197,
        longitude: 116.01992087830571,
        iconPath: '/images/wu.png',

        callout: {
          content: "教9信息工程学院",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#00688B",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 18,
        latitude: 28.678010768639627,
        longitude: 116.01992087830571,
        iconPath: '/images/wu.png',

        callout: {
          content: "教10机械工程学院",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#00688B",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 19,
        latitude: 28.678010768639627,
        longitude: 116.0193343684647,
        iconPath: '/images/wu.png',

        callout: {
          content: "教10文传学院",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#00688B",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 20,
        latitude: 28.67839669009639,
        longitude: 116.0193343684647,
        iconPath: '/images/wu.png',

        callout: {
          content: "教11土木学院",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#00688B",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 21,
        latitude: 28.67839669009639,
        longitude: 116.01992087830571,
        iconPath: '/images/wu.png',

        callout: {
          content: "教11护理学院",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#00688B",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 22,
        latitude: 28.679661121554773,
        longitude: 116.02262365073206,
        iconPath: '/images/wu.png',

        callout: {
          content: "服装学院",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#00688B",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 23,
        latitude: 28.680476875856794,
        longitude: 116.02259235823898,
        iconPath: '/images/wu.png',

        callout: {
          content: "音乐舞蹈学院",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#00688B",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }
    ]

    
  },

  /**
   * 组件的方法列表
   */
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    ready: function (e) {
      this.mapCtx = wx.createMapContext('myMap', this)
    }
  },
  methods: {
    getCenterLocation: function() {
      
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
    moveToLocation: function() {
      this.mapCtx.moveToLocation()
    }, jia(res) {

      var that = this;
      that.setData({
        scale: ++this.data.scale
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