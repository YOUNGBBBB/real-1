// pages/searchbar/searchbar.js
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
    inputShowed: false,
    inputVal: ""

  },

  /**
   * 组件的方法列表
   */
  methods: {
    showInput: function () {
     
      wx.navigateTo({
        url: '../search/search',
      })
    }
    

  }
})
