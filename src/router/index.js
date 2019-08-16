import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
// import {getUserInfoMessage} from '../utils/localStorage'

Vue.use(Router)



 const router= new Router({
  routes,
  mode:'history',
})

// router.beforeEach((to, from, next) => {
//       if(!sessionStorage.getItem('userInfo') && to.path!=='/psychology/author'){
//         if(to.path.indexOf('code') == -1){
//           if(to.fullPath.indexOf('?')>-1){
//             let path= to.fullPath.substring(to.fullPath.lastIndexOf('/')+1,to.fullPath.indexOf('?'))
//             window.location.href=window.location.origin+'/psychology/weChat/auth?returnUrl='+path
//           }else{
//             let path= to.fullPath.substring(to.fullPath.lastIndexOf('/')+1)
//             window.location.href=window.location.origin+'/psychology/weChat/auth?returnUrl='+path
//           }
//         }else{
//           next()
//         }
//       }else{
//         next(); 
//       }
// })


export default router