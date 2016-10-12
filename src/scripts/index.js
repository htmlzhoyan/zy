//js的入口文件
//引入swiper
var $ = require('./components/zepto-modules/_custom');

var IScroll=require('./components/iscoll/iscroll.js')
$('#mainContent').hide()
$('.swiper-container').hide()



$('#enter').tap(function(){
	$('#mainContent').show()
  $('.swiper-container').hide()
  //数据请求,然后请求api、skill，显示在浏览器上iScoll
  $.post('/api/skill',{},function(response){
    var html = '';
    for(var i=0;i<response.length;i++){
      html+='<li>'+response[i].category+'</li>'
    }
    $('#scroller ul').html(html);

    myScroll = new IScroll('#wrapper', {mouseWheel:true});
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);  
  })




 
})
// var jquery = require('./components/jquery/jquery-1.12.4.min.js')
// var circliful=require('./components/circlifu/jquery.circliful.js')
// console.log(circliful)

 // jquery( document ).ready(function() {
               
 //        jquery('#myStat').circliful();
               
 // });


var Swiper = require('./components/swiper/swiper-3.3.1.min.js');
//引入swiper animate
var SwiperAnimate = require('./components/swiper/swiper.animate1.0.2.min.js');

// var mySwiper=new Swiper('.swiper-container');

var mySwiper = new Swiper ('.swiper-container', {
	effect:'cube',



  onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
  	SwiperAnimate.swiperAnimateCache(swiper); //隐藏动画元素 
    SwiperAnimate.swiperAnimate(swiper); //初始化完成开始动画
  }, 
  onSlideChangeEnd: function(swiper){ 
    SwiperAnimate.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
  } 
}) 

$('#footer div').tap(function(){
  var apiT = $(this).attr('id');

  //数据请求,然后请求api、skill，显示在浏览器上iScoll
  $.post('/api/'+apiT,{},function(response){
    var html = '';
    for(var i=0;i<response.length;i++){
      html+='<li>'+response[i].category+'</li>'
    }
    $('#scroller ul').html(html);

   
  })

})

var interval = setInterval(function(){
  if(document.readyState === 'complete'){
    clearInterval(interval);
    $('#preload').hide();
    $('.swiper-container').show();
    mySwiper.updateContainerSize();
    mySwiper.updateSlidesSize();
  }else{
    $('#preload').show();
  }
},100);

// var k=0	
// 	 $('canvas.process').each(function() {	
		
// 		var text =k+"%";
        
    
//         var process = text.substring(0, text.length-1);  
             
//             // 一个canvas标签  
//         var canvas = this;  
//             // 拿到绘图上下文,目前只支持"2d"  
//         var context = canvas.getContext('2d');  
//     // 将绘图区域清空,如果是第一次在这个画布上画图,画布上没有东西,这步就不需要了  
//         context.clearRect(0, 0, 480, 480);  
          
//     // ***开始画一个灰色的圆  
//         context.beginPath();  
//             // 坐标移动到圆心  
     
//             // 画圆,圆心是24,24,半径24,从角度0开始,画到2PI结束,最后一个参数是方向顺时针还是逆时针  
//         context.arc(240, 240, 240, 0, Math.PI * 2, false);  
//         context.closePath();  
//             // 填充颜色  
//         context.fillStyle = '#ddd';  
//         context.fill();  
//             // ***灰色的圆画完  
          
//         // 画进度  
//         context.beginPath();  
//             // 画扇形的时候这步很重要,画笔不在圆心画出来的不是扇形  
   
//             // 跟上面的圆唯一的区别在这里,不画满圆,画个扇形  
//         context.arc(240, 240, 240, 0, Math.PI * 2 * process / 100, false);  
//         context.closePath();  
//         context.fillStyle = '#e74c3c';  
//         context.fill();  
//         // 画内部空白  
       
//        context.beginPath();
   
//         context.arc(240, 240, 210, 0, Math.PI * 2, true);  
//         context.closePath();  
//         context.fillStyle = 'rgba(255,255,255,1)';  
//         context.fill();  
          
//     // 画一条线  
//         context.beginPath();  
//         context.arc(240, 240, 185, 0, Math.PI * 2, true);  
//         context.closePath();  
//             // 与画实心圆的区别,fill是填充,stroke是画线  
//         context.strokeStyle = '#ddd';  
//         context.stroke();  
          
//             //在中间写字  
//         context.font = "bold 100pt Arial";  
//         context.fillStyle = '#e74c3c';  
//         context.textAlign = 'center';  
//         context.textBaseline = 'middle';  
      
//         context.moveTo(240, 240);  
//         context.fillText(text, 240, 240); 
        
//       })  
	
	
	
// 	Times=setInterval(function(){
// 	 $('canvas.process').each(function() {	
// 		k++													//k++
		
// 		if(k==100){
// 			clearInterval(Times)							//终止条件
// 		}
// 		var text =k+"%";
        
    
//         var process = text.substring(0, text.length-1);  
             
//             // 一个canvas标签  
//         var canvas = this;  
//             // 拿到绘图上下文,目前只支持"2d"  
//         var context = canvas.getContext('2d');  
//     // 将绘图区域清空,如果是第一次在这个画布上画图,画布上没有东西,这步就不需要了  
//         context.clearRect(0, 0, 480, 480);  
          
//     // ***开始画一个灰色的圆  
//         context.beginPath();  
//             // 坐标移动到圆心  
     
//             // 画圆,圆心是24,24,半径24,从角度0开始,画到2PI结束,最后一个参数是方向顺时针还是逆时针  
//         context.arc(240, 240, 240, 0, Math.PI * 2, false);  
//         context.closePath();  
//             // 填充颜色  
//         context.fillStyle = '#ddd';  
//         context.fill();  
//             // ***灰色的圆画完  
          
//         // 画进度  
//         context.beginPath();  
//             // 画扇形的时候这步很重要,画笔不在圆心画出来的不是扇形  
   
//             // 跟上面的圆唯一的区别在这里,不画满圆,画个扇形  
//         context.arc(240, 240, 240, 0, Math.PI * 2 * process / 100, false);  
//         context.closePath();  
//         context.fillStyle = '#e74c3c';  
//         context.fill();  
//         // 画内部空白  
// //     #e74c3c
//        context.beginPath();
   
//         context.arc(240, 240, 210, 0, Math.PI * 2, true);  
//         context.closePath();  
//         context.fillStyle = 'rgba(255,255,255,1)';  
//         context.fill();  
          
//     // 画一条线  
//         context.beginPath();  
//         context.arc(240, 240, 185, 0, Math.PI * 2, true);  
//         context.closePath();  
//             // 与画实心圆的区别,fill是填充,stroke是画线  
//         context.strokeStyle = '#ddd';  
//         context.stroke();  
          
//             //在中间写字  
//         context.font = "bold 100pt Arial";  
//         context.fillStyle = '#e74c3c';  
//         context.textAlign = 'center';  
//         context.textBaseline = 'middle';  
      
//         context.moveTo(240, 240);  
//         context.fillText(text, 240, 240); 
        
//       })  
        
// 	},200)
