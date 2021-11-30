<template>
  <TopHeader />
  <AsideNavBar />

  <!-- <div id="nav">router测试代码
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->

  <!-- 路由显示框 -->
  <div class="router">
    <router-view />
    <Footer class="footer" />
  </div>
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
.router {
  margin-left: 217px;
}
/* .footer {
} */
</style>
