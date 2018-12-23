import Vue from 'vue';
import VueRouter from 'vue-router';
const HomePage = () => import('@/modules/HomePage');

Vue.use(VueRouter);

let routeMode = {
  mode: "history"
};

let baseRoute = {
  routes: [
  {
    path: '/home',
    name: 'home',
    component: HomePage,
    meta: {
      keepAlive: true
    }
  },
  { // 路由不存在时,重定向到首页
    path: "*",
    redirect: "/home"
  }
]
}

let finalRoute = Object.assign(routeMode, baseRoute);

let Router = new VueRouter(finalRoute);

Router.beforeEach((from, to, next) => {
  next();
})

export default Router;