<template>
  <button class="menu" @click="menu = !menu">
    <more style="width: 22px; height: 22px" />
  </button>
  <transition name="fade">
    <div class="aside" v-if="menu">
      <el-scrollbar style="heigth: 100%">
        <el-row class="tac">
          <el-tag type="info" color="#0000">导航</el-tag>
          <el-col :span="24">
            <el-menu router default-active="1" class="main">
              <el-menu-item index="/">
                <el-icon><House /></el-icon><span>首页</span></el-menu-item
              >

              <el-menu-item index="Box">
                <el-icon><files /></el-icon>
                <span>作品</span>
              </el-menu-item>
              <el-menu-item index="Sample">
                <el-icon><document /></el-icon>
                <span>仓库</span>
              </el-menu-item>
              <el-menu-item index="Music">
                <el-icon><cherry /></el-icon>
                <span>音乐</span>
              </el-menu-item>
              <el-menu-item index="Block">
                <el-icon><timer /></el-icon>
                <span>归档</span>
              </el-menu-item>
              <el-menu-item index="Message">
                <el-icon><chat-dot-square /></el-icon>
                <span>留言</span>
              </el-menu-item>
              <el-menu-item index="Something">
                <el-icon><message-box /></el-icon>
                <span>一些盒子</span>
              </el-menu-item>
            </el-menu>
          </el-col>
          <el-tag type="info" color="#0000"> 组成</el-tag>

          <el-col :span="24">
            <el-menu class="main" router @unique-opened="true">
              <el-sub-menu :index="path">
                <template #title="">
                  <el-icon><grid /></el-icon>
                  <span>分类</span>
                </template>
                <el-menu-item-group>
                  <router-link
                    v-for="item in listdate"
                    :key="item"
                    :to="{ name: 'Home', params: { type: item.type } }"
                    ><el-menu-item>{{ item.name }}</el-menu-item></router-link
                  >
                  <el-menu-item index="newworld">新世界的大门</el-menu-item>
                </el-menu-item-group>
              </el-sub-menu>
              <el-sub-menu index="2">
                <template #title="">
                  <el-icon><document-add /></el-icon>
                  <span>页面</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="Sample">项目</el-menu-item>
                  <el-menu-item index="Block">归档</el-menu-item>
                  <el-menu-item index="Message">留言板</el-menu-item>
                  <el-menu-item index="2-5">BILIBILI</el-menu-item>
                </el-menu-item-group>
              </el-sub-menu>

              <el-menu-item index="3">
                <el-icon><document /></el-icon>
                <span>一些有用的连接</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-scrollbar>
    </div>
  </transition>
</template>

<script>
import { defineComponent } from "vue";
import {
  House,
  Files,
  Document,
  Cherry,
  Timer,
  More,
  ChatDotSquare,
  Grid,
  DocumentAdd,
  MessageBox,
} from "@element-plus/icons";
export default defineComponent({
  components: {
    House,
    Files,
    Cherry,
    Document,
    Timer,
    ChatDotSquare,
    MessageBox,
    Grid,
    DocumentAdd,
    More,
  },
  data() {
    return {
      menu: true,
      name: "Something",
      listdate: [
        {
          name: "闲谈",
          type: 1,
        },
        {
          name: "笔记",
          type: 2,
        },
        {
          name: "设计",
          type: 3,
        },
        {
          name: "一周记录",
          type: 4,
        },
        {
          name: "技术",
          type: 5,
        },
        {
          name: "生活",
          type: 6,
        },
        {
          name: "技术",
          type: 7,
        },
      ],
    };
  },
  mounted() {
    if (visualViewport.width <= 770) {
      this.menu = false;
    }
  },

  methods: {},
});
// 组件信息
</script>

<style lang="less" scoped>
.menu {
  z-index: 3;
  position: fixed;
  top: 15px;
  left: 28px;
  cursor: pointer;
  display: none;
  border: none;
  background-color: #f9f9f9;
}
.aside {
  z-index: 3;
  float: left;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  margin-top: 50px;
  width: 217px;
  overflow: hidden;
  background-color: #f9f9f9;
  .main {
    background-color: #f9f9f9;
  }
}
.tac {
  flex-direction: column;
}
.fade-enter-active {
  transition: all 0.3s ease-out;
}

.fade-leave-active {
  transition: all 0.8s;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(-217px);
  opacity: 0;
}
@media screen and (max-width: 770px) {
  .menu {
    display: block;
  }
}
</style>
