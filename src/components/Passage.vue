<template>
  <div
    v-for="item in getData.slice(
      (pagecount - 1) * pagesize,
      pagecount * pagesize
    )"
    :key="item.id"
    class="box"
  >
    <img
      style="width: 280px; height: 220px; flex-direction: column"
      :src="item.url"
    />

    <div class="box1">
      <a
        ><router-link :to="{ name: 'Id', params: item }">{{
          item.title
        }}</router-link></a
      >

      <span class="content">{{ item.content.substring(0, 250) }}</span>
      <div class="createauthor">
        <span class="author">{{ item.author }}</span>
        <span class="createtime">{{ item.createtime }}</span>
      </div>
    </div>
  </div>
  <el-pagination
    background
    :page-size="pagesize"
    :pager-count="pagecount"
    layout="prev, pager, next"
    :total="getData.length"
    @current-change="handleCurrentChange"
  >
  </el-pagination>
</template>

<script>
import { defineComponent } from "vue";
import dayjs from "dayjs";

export default defineComponent({
  props: {
    articleList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      loading: true,
      currentDate: dayjs().format("YYYY-MM-DD"),
      pagesize: 8,
      pagecount: 1,
      getData: [],
    };
  },
  methods: {
    handleCurrentChange(val) {
      this.pagecount = val;
    },
  },
  mounted() {
    this.$http({
      method: "GET",
      url: "/api/blog/list",
    }).then((response) => {
      this.getData = response.data.data;
    });
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
a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  word-break: break-all;
}
</style>
