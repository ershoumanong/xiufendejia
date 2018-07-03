import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Movie from '../components/movie'
import Cinema from '../components/cinema'
import Login from '../components/login'
import Register from '../components/register'
import Detail from '../components/detail'
import Search from '../components/search'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
   
   {
    	path:"/movie",
    	component:Movie,
    	
    },
    {
     	path:"/cinema",
     	component:Cinema
     },
     {
      	path:"/login",
      	component:Login
      },
      {
       	path:"/register",
       	component:Register
       },
       
        {
    	path:"*",
    	redirect:"/movie"
    },
        {
      path:"/search",
      redirect:"/Search"
    },
     {
    	path:"/detail/:id", //动态路由
    	component:Detail
    },
  ]
})
