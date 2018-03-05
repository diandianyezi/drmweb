import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import KeyList from '@/components/KeyManage/KeyList'
import vedioList from '@/components/vedio/vedioList'
import privilege from '@/components/privilegeManage/privilege'
import userList from '@/components/userManage/userList'
import playVedio from '@/components/PlayVedio/playVedio'
import Login from '@/components/Login/Login'
import purchaseRecords from '@/components/RecordManage/purchaseRecords'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/users',
      name: 'Users',
      component: userList
    },
    {
      path: '/keyManage',
      name: 'keyManage',
      component: KeyList
    },
    {
      path: '/vedio',
      name: 'vedio_list',
      component: vedioList,
      childrean: [

      ]
    },
    {
      path: '/privilegeManage',
      name: 'privilege',
      component: privilege,
    },
    {
      path: '/play',
      component: playVedio
    },
    {
      path: '/purchaseRecord',
      component: purchaseRecords
    }
  ]
})
