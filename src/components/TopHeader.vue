<template>
  <div id="header" class="header" role="menu">
    <!-- blog log -->
    <div class="zhazhayu">
      <a href="https://www.angoykeith.xyz"
        ><img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F03%2F20%2F52%2F5b64f2eead44f_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639748821&t=2b412dced511b418b5a814aadb04fd6a"
          class="log"
      /></a>
    </div>

    <!-- navbar collapse（顶部导航栏） -->
    <div class="Topnavbar-collapse">
      <el-row>
        <!-- 个人统计数据按钮 -->
        <el-button id="myinfo" type="primary"
          ><el-icon><Edit /></el-icon
        ></el-button>
        <!-- 搜索框 -->
        <el-button id="search-form" type="primary"
          ><el-icon><Search /></el-icon
        ></el-button>
        <!-- 待开发 音乐播放器 -->
        <!-- 闲言碎语 -->
        <el-button id="dropdown" type="primary"
          ><el-icon><Share /></el-icon
        ></el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
import { Edit, Share, Search } from "@element-plus/icons";
export default {
  name: "TopHeader",
  components: { Edit, Share, Search },
};
</script>
<style scoped>
.header {
  z-index: 1;
  position: fixed;
  margin: 0;
  padding: 0;
  top: 0;
  width: 100%;
  height: 50px;
}
.zhazhayu {
  position: fixed;
  height: 50px;
  width: 217px;
  background: #f9f9f9;
}
.log {
  height: 50px;
  margin: 0px 80px;
}
/* 顶部导航栏 */
.Topnavbar-collapse {
  position: relative;
  margin-left: 217px;
  height: 50px;
  width: auto;
  background-color: #f9f9f9;
}
/* 数据统计按钮 */
.statitic-info {
  background-color: aqua;
  display: none;
}
/* 个人简介 */
.myself {
  display: flex;
  width: 50px;
}
/* 闲言碎语 */
.dropdowm {
  display: flex;
  background-color: blue;
}
.search-form {
  display: flex;
}
/* 导入动画 */
.loading {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 123456789 !important;
  opacity: 1;
  -webkit-transition: opacity 0.3s ease;
  -moz-transition: opacity 0.3s ease;
  -ms-transition: opacity 0.3s ease;
  -o-transition: opacity 0.3s ease;
  transition: opacity 0.3s ease;
}

.loading .preloader-inner {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.loading .loader-inner.ball-scale-multiple div {
  background-color: #000;
}

.loading.loading-loaded {
  opacity: 0;
  display: none;
}

@-webkit-keyframes ball-scale-multiple {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 0;
  }

  5% {
    opacity: 1;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
}

@keyframes ball-scale-multiple {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 0;
  }

  5% {
    opacity: 1;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
}

.ball-scale-multiple {
  position: relative;
  -webkit-transform: translateY(-30px);
  transform: translateY(-30px);
}

.ball-scale-multiple > div:nth-child(2) {
  -webkit-animation-delay: -0.4s;
  animation-delay: -0.4s;
}

.ball-scale-multiple > div:nth-child(3) {
  -webkit-animation-delay: -0.2s;
  animation-delay: -0.2s;
}

.ball-scale-multiple > div {
  position: absolute;
  left: -30px;
  top: 0;
  opacity: 0;
  margin: 0;
  width: 60px;
  height: 60px;
  -webkit-animation: ball-scale-multiple 1s 0s linear infinite;
  animation: ball-scale-multiple 1s 0s linear infinite;
}

.ball-scale-multiple > div {
  background-color: #fff;
  border-radius: 100%;
}
</style>
