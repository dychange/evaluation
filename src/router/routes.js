export default [
    {
        path:'/',
        redirect:'/psychology/index'
    },
    {
        path: '/psychology/index',
        name: 'home',
        component: () => import('../views/Home.vue')
    },
    {
        path: "/psychology/author",
        name: 'Author',
        component: () => import('../views/Author.vue')
    },
    {
        path:'/psychology/upload',
        name:'Upload',
        component:()=> import ('../components/Upload.vue')
    },
    {
        path:'/psychology/detail/:id',
        name:'Detail',
        component:()=> import ('../views/Detail.vue')
    },
    {
        path:'/psychology/pcenter',
        name:'PersonCenter',
        component:()=> import ('../views/PersonCenter.vue')
    },
    {
        path:'/psychology/self',
        name:'/SelfUpload',
        component:()=>import('../views/SelfUpload.vue')
    },
    {
        path:'/psychology/code',
        name:'Code',
        component:()=>import('../components/Code.vue')
    }
]