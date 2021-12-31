<template>
  <div class="main">
    <div class="blog">
      <Passage />
    </div>
    <Navigation />
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "../components/Navigation.vue";
import Passage from "../components/Passage.vue";
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
.blog {
  float: right;
  width: 75%;
}
</style>
