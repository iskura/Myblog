<template>
  <md-editor v-model="text" />
</template>

<script>
import { defineComponent } from "vue";
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";

export default defineComponent({
  components: { MdEditor },
  data() {
    return {
      text: "## 😲 md-editoMarkdown 编辑器，基于 react，使用 jsx 和 typescript 语法开发，支持切换主题、prettier 美化文本等。### 🤖 基本演示 **加粗**，<u>下划线</u>，_斜体_，~删除线~，上标<sup>26</sup>，下标<sub>[1]</sub>，`inline code`，[超链接](https://imbf.cc) > 引用：世界上没有绝对，只有相对 ## 🤗 代码演示",
    };
  },
});
</script>
