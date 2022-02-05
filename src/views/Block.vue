<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: zhazhayu
 * @Date: 2022-01-03 14:32:47
 * @LastEditors: zhazhayu
 * @LastEditTime: 2022-01-31 00:50:22
-->
<template>
  <div class="main">
    <el-timeline>
      <el-timeline-item
        v-for="activity in activities"
        :key="activity.id"
        :color="colorrandom()"
        :size="normal"
        :timestamp="activity.createtime"
      >
        <a :href="'#/' + activity.id"
          ><el-button :type="typerandom()">{{ activity.title }}</el-button></a
        >
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "File",
  mounted() {
    this.$http({
      method: "GET",
      url: "/api/blog/list",
    }).then((response) => {
      this.activities = response.data.data;
    });
  },
  data() {
    return {
      activities: [],
      typecolor: ["primary", "success", "info", "warning", "danger"],
    };
  },
  methods: {
    typerandom() {
      let i = this.typecolor[Math.floor(Math.random() * 4)];
      return i;
    },
    colorrandom() {
      return "#409eff";
    },
  },
});
</script>
<style scoped>
.main {
  padding: 20px;
}
</style>
