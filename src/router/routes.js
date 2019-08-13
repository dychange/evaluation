export default [
    {
        path:'/',
        redirect:'/index'
    },
    {
        path: '/index',
        name: 'home',
        component: () => import('../views/Home.vue')
    },
    {
        path: "/author",
        name: 'Author',
        component: () => import('../views/Author.vue')
    },
    {
        path:'/upload',
        name:'Upload',
        component:()=> import ('../components/uploader/Upload.vue')
    },
    {
        path:'/detail/:id',
        name:'Detail',
        component:()=> import ('../views/Detail.vue')
    },
    {
        path:'/pcenter',
        name:'PersonCenter',
        component:()=> import ('../views/PersonCenter.vue')
    },
    {
        path:'/self',
        name:'/SelfUpload',
        component:()=>import('../views/SelfUpload.vue')
    }
]