import Vue from 'vue'
import Router from 'vue-router'

//Users
import users from '@/components/User/Index'
import create from '@/components/User/create'
import EditUser from '@/components/User/EditUser'
import show from '@/components/User/show'
import Login from '@/components/Login'

//Blog
import BlogIndex from '@/components/Blogs/Index'
import BlogCreate from '@/components/Blogs/CreateBlog'
import BlogEdit from '@/components/Blogs/EditBlog'
import BlogShow from '@/components/Blogs/ShowBlog'

//comment
import Comment from '@/components/Comments/Index'

//upload
import upload from '@/components/Utils/upload'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    //users
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
    //login
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    //blog
    {
      path: '/blogs',
      name: 'blogs',
      component: BlogIndex
    },
    {
      path: '/blog/create',
      name: 'blog-create',
      component: BlogCreate
    },
    {
      path: '/blog/edit/:blogId',
      name: 'blog-edit',
      component: BlogEdit
    },
    {
      path: '/blog/:blogId',
      name: 'blog-show',
      component: BlogShow
    },
    //comment
    {
      path: '/comments',
      name: 'comment',
      component: Comment
    },
    //upload
    {
      path: '/upload',
      name: 'upload',
      component: upload

    }
  ]
})
