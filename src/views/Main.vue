<template>
  <div class="flower" :style="{ width: 1000 + 'px', height: 800 + 'px' }"></div>
</template>
<script>
export default {
  return: {
    data() {},
    methods: {
      renderLoadAnimation: function () {
        let that = this;
        var block = document.getElementsByClassName("flower")[0];
        for (var i = 0; i < 30; i++) {
          //花瓣数量
          var snow = document.createElement("img");
          snow.className = "snow";
          snow.src = "~@/../src/assets/logo-" + (i % 4) + ".png"; //图片位置
          /*随机大小*/
          var s_w = Math.random() * 15 + 5;
          snow.style.width = s_w + "px";
          snow.style.height = s_w + "px";
          snow.style.opacity = 0.7;
          /*随机位置分布*/
          //top值 left值
          //若top值小于自身高度，则设置top,若大于自身高度则top值为获取的高度减去自身高度
          var s_t =
            Math.random() * that.clientHeight < parseInt(snow.style.height)
              ? Math.random() * that.clientHeight
              : Math.random() * that.clientHeight - parseInt(snow.style.height);
          snow.style.top = s_t + "px";
          var s_l =
            Math.random() * that.clientWidth < parseInt(snow.style.width)
              ? Math.random() * that.clientWidth
              : Math.random() * that.clientWidth - parseInt(snow.style.width);
          snow.style.left = s_l + "px";

          block.appendChild(snow);
        }
        var snowh = document.getElementsByClassName("snow");
        setInterval(function () {
          for (var j = 0; j < snowh.length; j++) {
            //top的改变
            var snow_t = parseInt(snowh[j].style.top);
            snow_t++;
            if (snow_t > that.clientHeight) {
              snow_t = -30;
            }
            snowh[j].style.top = snow_t + "px";
            // left的改变
            // var snow_l=parseInt(snowh[j].style.left);
            // snow_l+=Math.sin(snow_t/2*0.1);
            // if(snow_l< 0){
            //     snow_l=that.clientWidth-parseInt(snowh[j].style.left);
            // }
            // if(snow_l>that.clientWidth){
            //     snow_l=0;
            // }
            // snowh[j].style.left=snow_l+"px";
          }
        }, 50);
      },
    },
  },
};
</script>
