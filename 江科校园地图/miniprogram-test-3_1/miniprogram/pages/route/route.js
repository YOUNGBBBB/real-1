// pages/route/route.js
var QQMapWX = require('../qqmap/qqmap-wx-jssdk.min.js');

// 实例化API核心类
var qqmapsdk = new QQMapWX({
  key: 'GAMBZ-AALC4-OANUG-XWG5V-PK5F7-IHFQF' // 必填
});
var lat = '';
var long = '';
var marker=[{},{}];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    name: '终点位置',
    address: '',
    latitude: '28.67775662444011',
    longitude: '116.01790564523857',
    end: "",
    markers:"",
  },
  
  getLocation: function () {
    var _this = this;
    wx.chooseLocation({
      success: function (res) {
        var name = res.name
        var address = res.address
        var latitude = res.latitude
        var longitude = res.longitude
             var marker=[{
      
               latitude: res.latitude,
               longitude: res.longitude,
               iconPath: '/images/终(1).png',
               width:40,
               height:40,
             }]
        var end = String(res.latitude + ',' + res.longitude)

        wx.getLocation({
          type: 'gcj02',
          success(mres) { 
            var map_lat = mres.latitude;
            var map_long = mres.longitude;
             marker.push({ 
              latitude: map_lat,
              longitude: map_long,
              iconPath: '/images/起.png',
              width: 35,
              height: 35,
            })
            _this.setData({
              markers: marker
            });
          }
        });

        wx.setStorageSync('end', end);
      _this.setData({
          name: name,
          address: address,
          latitude: latitude,
          longitude: longitude,
          end: end,
          markers: marker
         
         
        })
      }
    })
   
   

  },
  formSubmit(e) {
    var _this = this;
    var end = wx.getStorageSync("end")
     

  
    //调用距离计算接口
    qqmapsdk.direction({
      mode: 'walking',//可选值：'driving'（驾车）、'walking'（步行）、'bicycling'（骑行），不填默认：'driving',可不填
      //from参数不填默认当前地址
      from: "",
      to: end,
      success: function (res) {
        console.log(res);
        var ret = res;
        var coors = ret.result.routes[0].polyline, pl = [];
        //坐标解压（返回的点串坐标，通过前向差分进行压缩）
        var kr = 1000000;
        for (var i = 2; i < coors.length; i++) {
          coors[i] = Number(coors[i - 2]) + Number(coors[i]) / kr;
        }
        //将解压后的坐标放入点串数组pl中
        for (var i = 0; i < coors.length; i += 2) {
          pl.push({ latitude: coors[i], longitude: coors[i + 1] })
        }
        console.log(pl)
        //设置polyline属性，将路线显示出来,将解压坐标第一个数据作为起点
        _this.setData({
          latitude: pl[0].latitude,
          longitude: pl[0].longitude,
          polyline: [{
            points: pl,
            color: '#4876FF',
            arrowLine:"ture",
            width: 8
          }]
        })
        //获取距离
        qqmapsdk.calculateDistance({
          //mode: 'driving',//可选值：'driving'（驾车）、'walking'（步行），不填默认：'walking',可不填
          //from参数不填默认当前地址
          //获取表单提交的经纬度并设置from和to参数（示例为string格式）
          from: e.detail.value.start || '', //若起点有数据则采用起点坐标，若为空默认当前地址
          to:end, //终点坐标
          success: function (res) {//成功后的回调
            console.log(res);
            var res = res.result;
            var dis = [];
            for (var i = 0; i < res.elements.length; i++) {
              dis.push(res.elements[i].distance); //将返回数据存入dis数组，
            }
            _this.setData({ //设置并更新distance数据
              distance: dis
            });
          }
        });


      },
      fail: function (error) {
        console.error(error);
      },
      complete: function (res) {
        console.log(res);

      }
    });
  }, luxian(e){
     var luxian="false"

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

  }
})