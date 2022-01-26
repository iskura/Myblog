<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: zhazhayu
 * @Date: 2022-01-03 14:32:47
 * @LastEditors: zhazhayu
 * @LastEditTime: 2022-01-26 23:24:16
-->
<template>
  <TopHeader style="z-index: 1" />
  <AsideNavBar class="AsideNavBar" />

  <!-- 路由显示框 -->
  <router-view class="MainView" />
  <Footer class="Footer" />
</template>
<script>
import TopHeader from "./components/layouts/TopHeader.vue";
import AsideNavBar from "./components/layouts/AsideNavBar.vue";
import Footer from "./components/layouts/Footer.vue";

export default {
  components: { TopHeader, AsideNavBar, Footer },
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
}
.MainView {
  position: relative;
  margin-left: 217px;
  margin-top: 50px;
  height: auto;
  width: auto;
  background-color: #f1f3f4;
}
.Footer {
  margin-left: 217px;
  left: 217px;
  height: 50px;
  width: auto;
}
@media screen and (max-width: 855px) {
  .AsideNavBar {
    display: none;
  }
  .MainView {
    height: auto;
    width: auto;
    margin-left: 0px;

    margin-top: 50px;
  }
  .Footer {
    margin-top: 15px;
    margin-left: 0;
  }
}
</style>
