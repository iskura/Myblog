import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    //懒加载
    path: '/Main',
    name: 'Main',
    component: () => import('../views/Main.vue')
  },
  {
    path: '/Music',
    name: 'Music',
    component:()=>import('../views/Music.vue')
  },
  {
    path: '/File',
    name: 'File',
    component:()=>import('../views/File.vue')
  },
  {
    path: '/Message',
    name: 'Message',
    component:()=>import('../views/Message.vue')
  },
  {
    path: '/Box',
    name: 'Box',
    component:()=>import('../views/Box.vue')
  },
  {
    path: '/Sample',
    name: 'Sample',
    component:()=>import('../views/Sample.vue')
  },
  {
    path: '/Something',
    name: 'Something',
    component:()=>import('../views/Something.vue')
  },
  {
    path: '/Page',
    name: 'Id',
    component:()=>import('../components/page/id.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
