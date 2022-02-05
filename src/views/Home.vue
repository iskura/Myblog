<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: zhazhayu
 * @Date: 2022-01-03 14:32:47
 * @LastEditors: zhazhayu
 * @LastEditTime: 2022-01-27 23:08:11
-->
<template>
  <div class="main">
    <Passage />
    <Navigation />
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "../components/layouts/Navigation.vue";
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
