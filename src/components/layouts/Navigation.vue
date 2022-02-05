<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: zhazhayu
 * @Date: 2022-01-03 14:32:47
 * @LastEditors: zhazhayu
 * @LastEditTime: 2022-02-01 18:18:14
-->
<template>
  <div class="Navigation">
    <el-tabs v-model="editableTabsValue" stretch="true">
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon><check /></el-icon
          ></span>
        </template>
        <!-- 热门文章 -->
        <div class="tabs">热门文章</div>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon><chat-square /></el-icon
          ></span>
        </template>
        <!-- 最多评论 -->
        <div class="tabs">最多评论</div>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon><fries /></el-icon
          ></span>
        </template>
        <!-- 随机 -->
        <div class="tabs">随机文章</div>
      </el-tab-pane>
    </el-tabs>
    <div class="bloginfo">
      <span>博客信息</span
      ><el-card shadow="hover">
        <div class="itemcard" v-for="item in info" :key="item">
          {{ item.title }}----------- {{ item.Number }}
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { ChatSquare, Check, Fries } from "@element-plus/icons-vue";
import { ref } from "vue";
export default {
  name: "Navigation",
  components: { ChatSquare, Check, Fries },
  // props: ["pagelen"],
  setup() {
    const editableTabsValue = ref("0");

    const info = [
      {
        title: "文章数目",
        Number: 1,
      },
      {
        title: "评论数目",
        Number: 130,
      },
      {
        title: "运行天数",
        Number: 120,
      },
      {
        title: "最后活动",
        Number: "2022.2.1",
      },
    ];
    return {
      editableTabsValue,
      info,
    };
  },
};
</script>

<style scoped lang="less">
.Navigation {
  width: auto;
  right: 0px;
  min-width: 260px;
  min-height: 260px;
  height: auto;
  background-color: #f9f9f9;
}
@media screen and (max-width: 1127px) {
  .Navigation {
    flex-direction: column;
  }
}
.tabs {
  background-color: #f9f9f9;
  margin-left: 13px;
}
.bloginfo {
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
  margin: 15px;
  font-size: 13px;
}
.itemcard {
  margin-top: 10px;
}
</style>
