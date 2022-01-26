<template>
  <div class="footer">
    <div class="footer-p">
      <span class="footer-i">{{ name }}</span>
      <span class="footer-i">&nbsp; • &nbsp;</span>
      <span>
        <a
          href="http://beian.miit.gov.cn/"
          class="footer-a"
          target="_blank"
          rel="noopener"
          >{{ numble }}</a
        ></span
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "炸炸鱼 © 2022",
      numble: "赣ICP备2021009143号",
    };
  },
};
</script>

<style lang="less" scoped>
.footer {
  font-weight: 300;
  width: auto;
  height: 50px;
  background: #f9f9f9;
  .footer-p {
    float: left;
    width: auto;
    margin-top: 15px;
    margin-left: 20%;
    color: rgb(0, 0, 0);
    .footer-a {
      text-decoration: none;
      color: rgb(0, 0, 0);
    }
  }
}
</style>
