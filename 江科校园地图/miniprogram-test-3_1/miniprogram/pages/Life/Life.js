// pages/Life/life.js
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
    latitude: 28.682331124499736,
    longitude: 116.0183857608978,
    markers: [{
      id: 1,
      latitude: 28.68495556746207,
      longitude: 116.01865845212036,
      iconPath: '/images/wu.png',
      
      
    },{
        id: 2,
        latitude: 28.683124895651584,
        longitude: 116.01948457020502,
        iconPath: '/images/购物车标记.png',
       
         callout: {
           content: "蓝购",
           color: "#000000",
           fontSize: "10",
           bgColor: "#FFFFFF",
           padding: "10",
           display: "ALWAYS",
           borderRadius: "80"
         
        }
      }, {
        id: 3,
        latitude: 28.684767325094715,
        longitude: 116.01690607545483,
        iconPath: '/images/购物车标记.png',
        
        callout: {
          content: "17栋便利店",
          color: "#000000",
          fontSize: "10",
          bgColor: "#FFFFFF",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"

        }
      }, {
        id: 4,
        latitude: 28.682094246384143,
        longitude: 116.01580100574996,
        iconPath: '/images/购物车标记.png',
        
        callout: {
          content: "1栋便利店",
          color: "#000000",
          fontSize: "10",
          bgColor: "#FFFFFF",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"

        }
      }, {
        id: 5,
        latitude: 28.68353119156877,
        longitude: 116.01696687232892,
        iconPath: '/images/购物车标记.png',
        callout: {
          content: "5栋便利店",
          color: "#000000",
          fontSize: "10",
          bgColor: "#FFFFFF",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 6,
        latitude: 28.677555818779577,
        longitude: 116.01736741565095,
        iconPath: '/images/购物车标记.png',
        
        callout: {
          content: "教3便利店",
          color: "#000000",
          fontSize: "10",
          bgColor: "#FFFFFF",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 7,
        latitude: 28.676859271406293,
        longitude: 116.0194273517923,
        iconPath: '/images/购物车标记.png',
        
        callout: {
          content: "s3便利店",
          color: "#000000",
          fontSize: "10",
          bgColor: "#FFFFFF",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 8,
        latitude: 28.681756970658515,
        longitude: 116.01689445243996,
        iconPath: '/images/wu.png',

        callout: {
          content: "1楼井冈山餐厅",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#A0522D",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 9,
        latitude: 28.681571859103265,
        longitude: 116.01689445243996,
        iconPath: '/images/wu.png',

        callout: {
          content: "2楼鼎泰丰餐厅 ",
          color: "#ffffff",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#A0522D",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 10,
        latitude: 28.68430456101386,
        longitude: 116.01570355163734,
        iconPath: '/images/wu.png',

        callout: {
          content: "1楼米阅餐厅",
          color: "#ffffff",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#A0522D",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 11,
        latitude: 28.68416337839229,
        longitude: 116.01570355163734,
        iconPath: '/images/wu.png',

        callout: {
          content: "2楼庐山餐厅",
          color: "#ffffff",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#A0522D",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 13,
        latitude: 28.684837915770814,
        longitude: 116.01769553900216,
        iconPath: '/images/wu.png',

        callout: {
          content: "民族餐厅",
          color: "#ffffff",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#A0522D",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 14,
        latitude: 28.683124895651584,
        longitude: 116.01962672949284,
        iconPath: '/images/wu.png',
        callout: {
          content: "1楼鄱阳湖餐厅",
          color: "#ffffff",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#A0522D",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 15,
        latitude: 28.683488836525292,
        longitude: 116.01962672949284,
        iconPath: '/images/wu.png',
        callout: {
          content: "家之味餐厅",
          color: "#ffffff",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#A0522D",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 16,
        latitude: 28.68330843527341,
        longitude: 116.01962672949284,
        iconPath: '/images/wu.png',
        callout: {
          content: "2楼鼎拓餐厅",
          color: "#ffffff",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#A0522D",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }
    ]


  },
   lifetimes: {
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
        scale: ++this.data.scale
      })
    },
    jian(res) {

      var that = this;
      that.setData({
        scale: --this.data.scale
      })

    }
  },
  

 
})
