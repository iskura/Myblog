<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: zhazhayu
 * @Date: 2022-01-03 14:32:47
 * @LastEditors: zhazhayu
 * @LastEditTime: 2022-02-01 22:50:23
-->
<template>
  <TopHeader />
  <AsideNavBar />

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
  font-family: "Source Sans Pro", "Hiragino Sans GB", "Microsoft Yahei", SimSun,
    Helvetica, Arial, Sans-serif, monospace;
}
.MainView {
  position: relative;
  margin-left: 217px;
  font-weight: 350;
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
@media screen and (max-width: 770px) {
  .MainView {
    margin-left: 0px;
    flex-direction: column;
  }
  .Footer {
    margin-top: 15px;
    margin-left: 0;
  }
}
@media screen and (max-width: 1170px) {
  .MainView {
    flex-direction: column;
  }
}
</style>
