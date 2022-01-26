<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: zhazhayu
 * @Date: 2022-01-03 14:32:47
 * @LastEditors: zhazhayu
 * @LastEditTime: 2022-01-25 23:13:09
-->
<template>
  <div class="main">
    <el-timeline>
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :icon="activity.icon"
        :type="activity.type"
        :color="activity.color"
        :size="activity.size"
        :hollow="activity.hollow"
        :timestamp="activity.timestamp"
      >
        {{ activity.content }}
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
      this.getData = response.data.data;
      for (let id = 0; id < this.getData.length; id++) {
        this.activities[id].content = this.getData[id].title;
        this.activities[id].timestamp = this.getData[id].createtime;
        console.log(this.activities);
      }
    });
  },
  data() {
    return {
      activities: {
        content: String,
        timestamp: Number,
      },
      getData: [],
    };
  },
});
</script>
<style scoped>
.main {
  padding: 20px;
}
</style>
