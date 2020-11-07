import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../project/Home.vue'
import Posts from '../project/pages/Posts.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            layout: 'main'
        },
    },
    {
        path: '/posts',
        name: 'Posts',
        meta: {
            layout: 'main'
        },
        component: () => import('@/project/pages/Posts.vue')
    },
    {
        path: '/posts/new',
        name: 'NewPost',
        meta: {
            layout: 'main'
        },
        component: () => import('@/project/pages/NewPostPage.vue')
    },
    {
        path: '/posts/:id',
        name: 'EditPost',
        meta: {
            layout: 'main'
        },
        component: () => import('@/project/pages/EditPost.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
