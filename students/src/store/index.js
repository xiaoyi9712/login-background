import Vue from "vue"
import Vuex from "vuex"
import Router from "vue-router"
import axios from "axios"

Vue.use(Vuex)
export default new Vuex.Store({//仓库
    state:{//存放所有组件都可以使用的数据 同步数据
        loginUser:localStorage.getItem("user"),//获取本地保存的数据
        userList:JSON.parse(localStorage.getItem("data"))//获取本地保存的数据
    },
    mutations:{//通过函数处理上面state.loginUser的值
        saveloginUser(state,value){
            state.loginUser = value

            //把登陆的用户存储到本地
            localStorage.setItem("user",value)
        },
        saveUserList(state,users){
            state.userList = users;
        }
    },
    actions:{//放置异步数据资源
        getUserList(cxt){
            return new Promise((res,rej)=>{
                axios.get("/api/userlist").then((users)=>{//向后台拿数据,拿到后触发then函数,then函数第一个参数就是前台发过来的的数据(users)
                    cxt.commit("saveUserList",users.data)//拿到数据后 给mutations函数赋值给state仓库中的userList
                    localStorage.setItem("data",JSON.stringify(users.data))//把数据保存到本地
                    res()
                })
            })
        }
    },
    getters:{
        // newUsers:(state)=>{   //return的话可以简写
        //     return state.userList.filter(user=>user.age<30)
        // }
        newUsers:state=>state.userList.filter(user=>user.age<30),
        oldUsers:state=>state.userList.filter(user=>user.age>=30)
    }
})