import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import AddBlog from '../components/AddBlog.vue'
import Details from '../components/Details.vue'
import Message from '../components/Message.vue'
import Aboutme from '../components/Aboutme.vue'
import Timeaxis from '../components/Timeaxis.vue'
import Login from '../components/Login.vue'
import Admin from '../components/Admin.vue'
import ManageBlog from '../components/ManageBlog.vue'
import ManageMsg from '../components/ManageMsg.vue'
import BuildBlog from '../components/BuildBlog.vue'
import EditBlog from '../components/EditBlog.vue'

var router=new VueRouter({
  routes:[
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path:'/Home',
      component:Home
    },
    {
      path:'/AddBlog',
      component:AddBlog
    },
    {
      path:'/Details/:id',
      component:Details
    },
    {
      path:'/Message',
      component:Message
    },
    {
      path:'/Aboutme',
      component:Aboutme
    },
    {
      path:'/Timeaxis',
      component:Timeaxis
    },
    {
      path:'/Login',
      component:Login
    },
    {
      path:'/Admin',component:Admin,
      children:[
        {path:"/",component:ManageBlog},
      	{path:"ManageBlog",component:ManageBlog},
        {path:"BuildBlog",component:BuildBlog},
        {path:"ManageMsg",component:ManageMsg},
        {path:"EditBlog/:id",component:EditBlog},
      ]
    }
  ],
})

export default router
