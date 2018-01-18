/*
* @Author: 刘贤富
* @Date:   2018-01-18 10:51:01
* @Last Modified by:   刘贤富
* @Last Modified time: 2018-01-18 15:25:18
*/

$(function(){
    //获得slider插件对象
    mui('.mui-slider').slider({
        interval:1000//自动轮播周期，若为0则不自动播放，默认为0；
    });
    // 初始化mui的滚动
    mui('.mui-scroll-wrapper').scroll({
      indicators: false, //是否显示滚动条
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
})