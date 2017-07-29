import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Key from '@/components/KeyManage/Key'
import addKey from '@/components/KeyManage/addKey'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/keyManage',
      name: 'keyManage',
      component: Key,
      children:[
        {
          path: '/keyManage/add',
          name: 'addKey',
          component: addKey
        }
      ]
    }
  ]
})
