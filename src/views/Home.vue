<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: zhazhayu
 * @Date: 2022-01-03 14:32:47
 * @LastEditors: zhazhayu
 * @LastEditTime: 2022-02-14 19:39:42
-->
<template>
  <div class="main">
    <Passage :type="this.$route.params.type" />
    <Navigation />
  </div>
</template>

<script>
import Navigation from "../components/page/Navigation.vue";
import Passage from "../components/layouts/Passage.vue";
export default {
  name: "Home",
  components: { Navigation, Passage },
};
</script>
<style scoped>
.main {
  display: flex;
  width: auto;
  flex-wrap: nowrap;
}
</style>
