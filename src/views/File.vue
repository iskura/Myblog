<template>
  <div>
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
import { MoreFilled } from "@element-plus/icons-vue";

export default defineComponent({
  name: "File",
  setup() {
    return {
      activities: [
        {
          content: "Custom icon",
          timestamp: "2018-04-12 20:46",
          size: "large",
          type: "primary",
          icon: MoreFilled,
        },
        {
          content: "Custom color",
          timestamp: "2018-04-03 20:46",
          color: "#0bbd87",
        },
        {
          content: "Custom size",
          timestamp: "2018-04-03 20:46",
          size: "large",
        },
        {
          content: "Custom hollow",
          timestamp: "2018-04-03 20:46",
          type: "primary",
          hollow: true,
        },
        {
          content: "Default node",
          timestamp: "2018-04-03 20:46",
        },
      ],
    };
  },
});
</script>
