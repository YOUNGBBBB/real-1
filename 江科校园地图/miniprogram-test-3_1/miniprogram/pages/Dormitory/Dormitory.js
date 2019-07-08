// pages/Dormitory/Dormitory.js
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
      latitude: 28.68218680181276,
      longitude: 116.01579385248318,
      iconPath: '/images/wu.png',
      callout: {
        content: "宿1栋",
        color: "#FFFFFF",
        fontSize: "10",
        borderRadius: "10",
        bgColor: "#FFBBFF",
        padding: "10",
        display: "ALWAYS",
        borderRadius: "80"
               }
      },{
        id: 2,
        latitude: 28.682782916123234,
        longitude: 116.01579385248318,
        iconPath: '/images/wu.png',
        callout: {
          content: "宿2栋",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#FFBBFF",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
    
      }, {
        id: 3,
        latitude: 28.683452756163323,
        longitude: 116.01579385248318,
        iconPath: '/images/wu.png',
        callout: {
          content: "宿3栋",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#FFBBFF",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }

      }, {
        id: 4,
        latitude: 28.68264173162992,
        longitude: 116.01690249947627,
        iconPath: '/images/wu.png',
        callout: {
          content: "宿4栋",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#FFBBFF",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }

      } , {
        id: 5,
        latitude: 28.683344515397806,
        longitude: 116.01690249947627,
        iconPath: '/images/wu.png',
        callout: {
          content: "宿5栋",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#FFBBFF",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }

      }, {
        id: 6,
        latitude: 28.684069256502937,
        longitude: 116.01690249947627,
        iconPath: '/images/wu.png',
        callout: {
          content: "宿6栋",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#FFBBFF",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }

      }, {
        id: 7,
        latitude: 28.682164839544434,
        longitude: 116.0178001453993,
        iconPath: '/images/wu.png',
        callout: {
          content: "宿7栋",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#FFBBFF",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }

      }, {
        id: 8,
        latitude: 28.683482562116247,
        longitude: 116.0179539252464,
        iconPath: '/images/wu.png',
        callout: {
          content: "宿8栋",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#FFBBFF",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }

      }, {
        id: 8,
        latitude: 28.684081806184103,
        longitude: 116.0179539252464,
        iconPath: '/images/wu.png',
        callout: {
          content: "宿8栋",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#FFBBFF",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }

      }, {
        id: 9,
        latitude: 28.682164839544434,
        longitude: 116.01844745145958,
        iconPath: '/images/wu.png',
        callout: {
          content: "宿9栋",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#1E90FF",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }

      }, {
        id: 10,
        latitude: 28.68339628285789,
        longitude: 116.01850824841553,
        iconPath: '/images/wu.png',
        callout: {
          content: "宿10栋",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#FFBBFF",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }

      }, {
        id: 100,
        latitude: 28.683761791287942,
        longitude: 116.01850824841553,
        iconPath: '/images/wu.png',
        callout: {
          content: "宿10栋",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#1E90FF",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 11,
        latitude: 28.681926392489714,
        longitude: 116.01957040220317,
        iconPath: '/images/wu.png',
        callout: {
          content: "宿11栋",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#1E90FF",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 12,
        latitude: 28.682535058579756,
        longitude: 116.01957040220317,
        iconPath: '/images/wu.png',
        callout: {
          content: "宿12栋",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#1E90FF",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 13,
        latitude: 28.68404415742357,
        longitude: 116.01947742013057,
        iconPath: '/images/wu.png',
        callout: {
          content: "宿13栋",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#FFBBFF",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      },{
        id: 14,
        latitude: 28.684706146108784,
        longitude: 116.01579385248318,
        iconPath: '/images/wu.png',
        callout: {
          content: "宿14栋",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#1E90FF",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
        }, {
        id: 15,
        latitude: 28.685208125248923,
        longitude: 116.01579385248318,
        iconPath: '/images/wu.png',
        callout: {
          content: "宿15栋",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#1E90FF",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 16,
        latitude: 28.68580892866521,
        longitude: 116.01579385248318,
        iconPath: '/images/wu.png',
        callout: {
          content: "宿16栋",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#1E90FF",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 17,
        latitude: 28.684706146324196,
        longitude: 116.01685243160195,
        iconPath: '/images/wu.png',
        callout: {
          content: "宿17栋",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#FFBBFF",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 18,
        latitude: 28.68518302651418,
        longitude: 116.01685243160195,
        iconPath: '/images/wu.png',
        callout: {
          content: "宿18栋",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#1E90FF",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 19,
        latitude: 28.685605000888874,
        longitude: 116.01685243160195,
        iconPath: '/images/wu.png',
        callout: {
          content: "宿19栋",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#FFBBFF",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 20,
        latitude: 28.684822229105663,
        longitude: 116.01767139944845,
        iconPath: '/images/wu.png',
        callout: {
          content: "宿20栋",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#1E90FF",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 21,
        latitude: 28.68518302651418,
        longitude: 116.01767139944845,
        iconPath: '/images/wu.png',
        callout: {
          content: "宿21栋",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#1E90FF",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 22,
        latitude: 28.685605000888874,
        longitude: 116.01767139944845,
        iconPath: '/images/wu.png',
        callout: {
          content: "宿22栋(教)",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#FFD700",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 23,
        latitude: 28.684756344123826,
        longitude: 116.01878988011653,
        iconPath: '/images/wu.png',

        callout: {
          content: "宿23栋",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#FFBBFF",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 24,
        latitude: 28.684756344123826,
        longitude: 116.0193513558976,
        iconPath: '/images/wu.png',

        callout: {
          content: "宿24栋 ",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#FFBBFF",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 27,
        latitude: 28.684756344123826,
        longitude: 116.0201059508096,
        iconPath: '/images/wu.png',

        callout: {
          content: "宿27栋",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#FFBBFF",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 28,
        latitude: 28.685123416609077,
        longitude: 116.0201059508096,
        iconPath: '/images/wu.png',

        callout: {
          content: "宿28栋(留学生)",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#FFD700",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 26,
        latitude: 28.685123416609077,
        longitude: 116.01878988011653,
        iconPath: '/images/wu.png',

        callout: {
          content: "宿26栋",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#FFBBFF",
          padding: "10",
          display: "ALWAYS",
          borderRadius: "80"
        }
      }, {
        id: 25,
        latitude: 28.685123416609077,
        longitude: 116.01939427091442,
        iconPath: '/images/wu.png',

        callout: {
          content: "宿25栋 ",
          color: "#FFFFFF",
          fontSize: "10",
          borderRadius: "10",
          bgColor: "#1E90FF",
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
  }
})
