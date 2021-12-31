<template>
  <button
    v-for="item in getData"
    :key="item.title"
    :body-style="{ padding: '0px', marginBottom: '1px' }"
  >
    <h5>{{ item.content }}</h5>
    <div style="padding: 14px">
      <span>{{ item.title }}</span>

      <div class="bottom card-header">
        <span class="time">{{ item.createtime }}</span>
        <span class="time">{{ item.author }}</span>
        <el-button type="text" class="button">Operation button</el-button>
      </div>
    </div>
  </button>
</template>
<script>
import { defineComponent } from "vue";
import dayjs from "dayjs";

export default defineComponent({
  data() {
    return {
      loading: true,
      currentDate: dayjs().format("YYYY-MM-DD"),
      lists: [],
    };
  },
  beforeCreate() {
    this.loading = false;
    this.getData = [
      {
        title: "100vw和100%的区别",
        content: "内容1",
        createtime: 16546515,
        author: "炸炸鱼",
      },
      {
        title: "flex",
        content: "内容2",
        createtime: 1654651522,
        author: "炸炸鱼",
      },
      {
        title: "elementui 骨架盒",
        content: "内容3",
        createtime: 1654656515,
        author: "炸炸鱼",
      },
      {
        title: "table",
        content: "内容4",
        createtime: 165423456515,
        author: "炸炸鱼",
      },
      {
        title: "时间轴 归档",
        content: "内容5",
        createtime: 1654633515,
        author: "炸炸鱼",
      },
      {
        title: "测试文章",
        content: "内容6",
        createtime: 1633546515,
        author: "炸炸鱼",
      },
    ];
  },
  methods: {
    setLoading() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
  },
});
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 220px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
