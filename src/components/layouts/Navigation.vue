<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: zhazhayu
 * @Date: 2022-01-03 14:32:47
 * @LastEditors: zhazhayu
 * @LastEditTime: 2022-01-27 01:00:08
-->
<template>
  <el-tabs v-model="editableTabsValue" class="Navigation" stretch="true">
    <el-tab-pane>
      <template #label>
        <span class="span">
          <el-icon><check /></el-icon
        ></span>
      </template>
      <!-- 热门文章 -->
      <div>热门文章</div>
    </el-tab-pane>
    <el-tab-pane>
      <template #label>
        <span>
          <el-icon><chat-square /></el-icon
        ></span>
      </template>
      <!-- 最多评论 -->
      <div>最多评论</div>
    </el-tab-pane>
    <el-tab-pane>
      <template #label>
        <span>
          <el-icon><fries /></el-icon
        ></span>
      </template>
      <!-- 随机 -->
      <div>随机文章</div>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { ChatSquare, Check, Fries } from "@element-plus/icons-vue";
import { ref } from "vue";
export default {
  name: "Navigation",
  components: { ChatSquare, Check, Fries },
  setup() {
    const editableTabsValue = ref("0");

    const editableTabs = ref([
      {
        title: "Tab 1",
        name: "1",
        content: "Tab 1 content",
      },
      {
        title: "Tab 2",
        name: "2",
        content: "Tab 2 content",
      },
    ]);
    return {
      editableTabsValue,
      editableTabs,
    };
  },
};
</script>

<style scoped lang="less">
.Navigation {
  right: 0px;
  min-width: 250px;
  height: auto;
  background-color: #f9f9f9;
}
@media screen and (max-width: 1127px) {
  .Navigation {
    display: none;
  }
}
</style>
