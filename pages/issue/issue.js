//index.js
//获取应用实例
var app = getApp()
Page({
    data: {},
    onLoad: function(ev) {
        console.log(ev)
    },
    toClass: function(e) {
        console.log(e)
        wx.navigateTo({
          url: '../class/class?master=' + e.target.dataset.master
        })
    },
    toClass: function(e) {
        console.log(e)
        wx.navigateTo({
          url: '../class/class?master='+e.currentTarget.dataset.master
        })
    }
})
