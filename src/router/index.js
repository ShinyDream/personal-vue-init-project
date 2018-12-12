import Vue from 'vue';
import VueRouter from 'vue-router';
// import HomePage from '@/modules/HomePage';
const HomePage = () => {import('@/modules/HomePage')};

Vue.use(VueRouter);

let routeMode = {
  mode: "history"
};

let baseRoute = {
  routes: [
  {
    path: '/',
    component: HomePage,
    meta: {
      keepAlive: true
    }
  },
  { // 路由不存在时,重定向到首页
    path: "*",
    redirect: "/"
  }
]
}

let finalRoute = Object.assign(routeMode, baseRoute);

let Router = new VueRouter(finalRoute);

export default Router;