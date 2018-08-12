/*
 * @Author: bxdsam
 * @Date:   2018-08-05 23:35:22
 * @Last Modified by:   bxdsam
 * @Last Modified time: 2018-08-12 13:55:55
 */
(function(win) {
  var num = 0;
  var cake = document.querySelector('.cake');
  var point = document.querySelector('.point');
  var qiqiuG = document.querySelector('.qiqiu-g');
  var qiqiuY = document.querySelector('.qiqiu-y');
  var hatRed = document.querySelector('.hat-red');
  var hatWhite = document.querySelector('.hat-white');
  var hatYellow = document.querySelector('.hat-yellow');
  var yaoqinghan = document.querySelector('.yaoqinghan');
  var imgs = document.getElementsByTagName('img');
  var timer = null;
  console.log('imgs.length:' + imgs.length)
  // var audio = document.getElementById('audio');
  // audio#audio(autoplay='autoplay' loop='true' hidden='true' controls='controls')
  //   source(src='/video/qingcunwuqu.mp3?v=12' type='audio/mpeg')

  win.onload = function(){

    for(var i = 0; i < imgs.length; i++){
      //(function (that) {
        var _src = imgs[i].dataset['setImgSrc'];
        imgs[i].src = _src
      //})(i)
    }

  }


  function animateStart(){
    if (num === 9) {
      animateFun();
      window.clearTimeout(timer)
    }else{
      timer = window.setTimeout(function(){
        animateStart();
      },1000)
    }
  }
  function animateFun() {

    window.setTimeout(function() {
      cake.classList.add('show')
      point.classList.add('show')

      window.setTimeout(function() {
        qiqiuG.classList.add('show')
        window.setTimeout(function() {
          qiqiuY.classList.add('show')
        }, 200)

        window.setTimeout(function() {
          yaoqinghan.classList.add('show')

          window.setTimeout(function() {
            hatWhite.classList.add('show')
          }, 1200)
          window.setTimeout(function() {
            hatYellow.classList.add('show')
          }, 1400)
          window.setTimeout(function() {
            hatRed.classList.add('show')
          }, 1600)
        }, 1000)
      }, 1200)
    }, 1000)
  }

  function imgLoad(e) {
    num++;
    console.log(num)

    if(num === 9){
      timer = window.setTimeout(function(){
        animateStart();
      },1000)
    }
  };

  win.imgLoad = imgLoad

  // document.addEventListener("WeixinJSBridgeReady", function() {
  //   audio.currentTime = 0
  //   audio.play()
  // }, false);
})(window);
