/*
* @Author: Administrator
* @Date:   2017-03-14 21:05:04
* @Last Modified by:   Administrator
* @Last Modified time: 2017-03-14 21:07:02
*/

'use strict';
window.onload = function(){
	var box = document.getElementsByTagName("div")[0]; //获取元素
	var lis = box.children[0].children;
	for(var i=0;i<lis.length;i++){
		lis[i].style.backgroundImage = "url(images1/"+(i+1)+".jpg)";
													//i从0开始，所以要i+1
		lis[i].onmouseover = function(){
			for(var i=0;i<lis.length;i++){ //排他思想
				animate(lis[i],{width:100});
			}
			animate(this,{width:800});
		}
		lis[i].onmouseout = function(){
			for(var i=0;i<lis.length;i++){
				animate(lis[i],{width:240});
			}
		}
	}
	function animate(obj,json,fn){
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			for(var attr in json){
				var current = parseInt(getStyle(obj,attr));
				var step = (json[attr] - current) / 10;
				step = step > 0 ? Math.ceil(step) : Math.floor(step);
				obj.style[attr] = current + step + "px";
			}
		},10);
	}
	function getStyle(obj,attr){ //获取dom节点元素的CSS样式
		if(obj.currentStyle){
			return obj.currentStyle[attr];//ie
		}else{
			return window.getComputedStyle(obj,null)[attr]; //主流浏览器
		}
	}
}