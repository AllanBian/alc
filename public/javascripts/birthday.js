/*
 * @Author: bxdsam
 * @Date:   2018-08-05 23:35:22
 * @Last Modified by:   xiaodong.bian
 * @Last Modified time: 2018-08-06 10:52:27
 */
(function(win) {
  var num = 0;
  var weixin = false;
  var cake = document.querySelector('.cake');
  var point = document.querySelector('.point');
  var qiqiuG = document.querySelector('.qiqiu-g');
  var qiqiuY = document.querySelector('.qiqiu-y');
  var hatRed = document.querySelector('.hat-red');
  var hatWhite = document.querySelector('.hat-white');
  var hatYellow = document.querySelector('.hat-yellow');
  var yaoqinghan = document.querySelector('.yaoqinghan');
  var audio = document.getElementById('audio');

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

  function audioPlay(){
    audio.src = '/video/qingcunwuqu.mp3';
    audio.loop = true;
    audio.autoplay = true;
  }

  function imgLoad(e) {
    num++;
    console.log(num)
    if (num === 9) {
      animateFun();
    }
    if(weixin){
      audioPlay();
      audio.currentTime = 0
      audio.play()
    }else{
      audioPlay();
    }
  };

  win.imgLoad = imgLoad

  document.addEventListener("WeixinJSBridgeReady", function() {
    weixin = true
  }, false);
})(window);
