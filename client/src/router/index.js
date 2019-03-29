import Vue from 'vue'
import Router from 'vue-router'
import users from '@/components/User/users'
import create from '@/components/User/create'
import EditUser from '@/components/User/EditUser'
import show from '@/components/User/show'
import Login from '@/components/Login'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/users',
      name: 'users',
      component: users
    },
    {
      path: '/user/create',
      name: 'create',
      component: create
    },
    {
      path: '/user/edit/:userId',
      name: 'edit',
      component: EditUser
    },
    {
      path: '/user/:userId',
      name: 'showuser',
      component: show
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
