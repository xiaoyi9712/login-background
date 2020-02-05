import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Admin from "@/components/Admin"
import UserList from "@/components/UserList"
import OldUser from "@/components/OldUser"
import NewUser from "@/components/NewUser"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'loginlink',
      component: Login
    },
    {
      path:"/admin",
      name:"adminLink",
      component:Admin,
      redirect:"/userlist",//路由重新定向到userlist这个路由
      children:[
        {path:"/userlist",component:UserList,name:"userlist"},
        {path:"/olduser",component:OldUser,name:"olduser"},
        {path:"/newuser",component:NewUser,name:"newuser"}
      ]
    }
  ]
})
