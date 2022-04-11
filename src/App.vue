<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: zhazhayu
 * @Date: 2022-01-03 14:32:47
 * @LastEditors: zhazhayu
 * @LastEditTime: 2022-02-07 00:26:41
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
import "./assets/css/main.less";
export default {
  components: { TopHeader, AsideNavBar, Footer },
};
</script>
