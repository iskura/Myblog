<template>
  <div class="block">
    <span class="demonstration">When you have few pages</span>
    <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
  </div>
</template>

<script>
export default {
  name: "Footer",
  components: {},
};
</script>

<style scoped>
.block {
  padding-left: 29vh;
  height: 50px;
}
</style>
