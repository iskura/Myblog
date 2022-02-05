<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: zhazhayu
 * @Date: 2022-01-26 23:50:07
 * @LastEditors: zhazhayu
 * @LastEditTime: 2022-01-27 22:43:53
-->
<template>
  <div id="vcomments"></div>
</template>

<script>
import Valine from "valine";
export default {
  props: ["postid"],
  name: "Valine",
  data() {
    return {};
  },
  mounted() {
    this.createValine();
  },
  methods: {
    createValine() {
      let path = this.postid;
      new Valine({
        el: "#vcomments",
        appId: "UCfTwCsTUwcXbbnnvxxlhP14-gzGzoHsz",
        appKey: "519A2JkOR4002zpi0XlpfBPD",
        visitor: true,
        avatar: "monsterid",
        path: "/" + path,
        placeholder: "欢迎留言与我分享您的想法...",
      });
      this.valineRefresh = true;
    },
  },
  watch: {
    $route(to, from) {
      if (to.path !== from.path) {
        setTimeout(() => {
          console.log("watch刷新了评论");
          this.createValine();
        }, 300);
      }
    },
  },
};
</script>

<style>
#vcomments {
  margin-top: 10px;
}
</style>
