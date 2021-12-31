<template>
  <TopHeader />
  <AsideNavBar />

  <!-- 路由显示框 -->
  <router-view class="MainView" />
  <Footer class="Footer" />
</template>
<script>
import TopHeader from "./components/TopHeader.vue";
import AsideNavBar from "./components/AsideNavBar.vue";
import Footer from "./components/Footer.vue";

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
  padding: 0px;
  height: auto;
}
.Footer {
  margin-left: 217px;
  left: 217px;
  height: 50px;
  width: auto;
}
</style>
