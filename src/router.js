import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/foo', component: () => import('@/components/HelloWorld')  },
  { path: '/', component: () => import('@/views/login/index') }
]

const router = new Router({
  routes
})

export default router