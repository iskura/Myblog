<template>
  <div v-for="item in getData" :key="item.id" class="box">
    <img
      style="width: 280px; height: 220px; flex-direction: column"
      :src="item.url"
    />

    <div class="box1">
      <el-link :underline="false" style="padding-top: 15px">{{
        item.title
      }}</el-link>
      <span class="content">{{ item.content }}</span>
      <div class="createauthor">
        <span class="author">{{ item.author }}</span>
        <span class="createtime">{{ item.createtime }}</span>
      </div>
    </div>
  </div>
  <el-pagination
    background
    :page-size="18"
    :pager-count="11"
    layout="prev, pager, next"
    :total="200"
  >
  </el-pagination>
</template>

<script>
import { defineComponent } from "vue";
import dayjs from "dayjs";

export default defineComponent({
  data() {
    return {
      loading: true,
      currentDate: dayjs().format("YYYY-MM-DD"),
      getData: [
        {
          id: 1,
          url: require("../assets/1.png"),
          title: "100vw和100%的区别",
          content: "内容1",
          createtime: 16546515,
          author: "炸炸鱼",
        },
        {
          id: 2,
          url: require("../assets/2.jpg"),
          title: "flex",
          content: "内容2",
          createtime: 1654651522,
          author: "炸炸鱼",
        },
        {
          id: 3,
          url: require("../assets/1.png"),
          title: "elementui 骨架盒",
          content: "内容3",
          createtime: 1654656515,
          author: "炸炸鱼",
        },
        {
          id: 4,
          url: require("../assets/86.jpg"),
          title: "elementui 骨架盒",
          content: "内容3",
          createtime: 1654656515,
          author: "炸炸鱼",
        },
        {
          id: 5,
          url: require("../assets/2.jpg"),
          title: "elementui 骨架盒",
          content: "内容3",
          createtime: 1654656515,
          author: "炸炸鱼",
        },

        {
          id: 6,
          url: require("../assets/2.jpg"),
          title: "table",
          content: "内容4",
          createtime: 165423456515,
          author: "炸炸鱼",
        },
        {
          id: 7,
          url: require("../assets/2.jpg"),
          title: "时间轴 归档",
          content: "内容5",
          createtime: 1654633515,
          author: "炸炸鱼",
        },
        {
          id: 8,
          url: require("../assets/2.jpg"),
          title: "测试文章",
          content: "内容6",
          createtime: 1633546515,
          author: "炸炸鱼",
        },
      ],
    };
  },
  methods: {
    // getAjax() {
    //   const xhr = new XMLHttpRequest();
    //   xhr.open(
    //     "GET",
    //     "http://192.168.0.105:8000/api/blog/list?author=zhazhayu&keyword=A"
    //   );
    //   xhr.send();
    //   xhr.onreadystatechange = function () {
    //     if (xhr.readyState === 4) {
    //       if (xhr.status >= 200 && xhr.status < 300) {
    //         console.log(xhr.status);
    //         console.log(xhr.statusText);
    //         console.log(xhr.response);
    //         // this.data.getData = xhr.response;
    //       }
    //     }
    //   };
    // },
  },
});
</script>

<style scoped>
.box {
  background-color: #dee4ec;
  display: flex;
  margin: 20px;
  border-radius: 4px;
  overflow: hidden;
}
.box1 {
  width: auto;
  display: flex;
  text-align: center;
  flex-direction: column;
  margin: 0 auto;
}

.content {
  margin-top: 15px;
}
.createauthor {
  margin-bottom: 0px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
