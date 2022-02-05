<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: zhazhayu
 * @Date: 2022-01-08 23:39:58
 * @LastEditors: zhazhayu
 * @LastEditTime: 2022-01-31 00:25:34
-->
<template>
  <div class="layui-col-md8 index-list">
    <div v-if="!articleList.length" style="text-align: center; color: #999">
      还没有文章呢～
    </div>
    <ul class="newsList">
      <li v-for="item in articleList" :key="item.id">
        <a class="img" :href="'/details/' + item.id">
          <img :src="item.cover_img_url" />
        </a>
        <div class="txt">
          <a :href="'/details/' + item.id">{{ item.title }}</a>
          <div class="label">
            <span>{{ item.author }}</span>
            {{ item.user.name }}
            <b>{{ item.created_at }}</b>
          </div>
          <p class="cont" v-if="item.description.length > 100">
            {{ item.description.substring(0, 100) + "..." }}
          </p>
          <p class="cont" v-else>{{ item.description }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { dateFormat } from "./index";
dateFormat();
export default {
  name: "ArticleList",
  props: {
    articleList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  methods: {
    articlesDetailsFn: function (id) {
      this.$router.push({ path: `/details/${id}` });
    },
  },
};
</script>
