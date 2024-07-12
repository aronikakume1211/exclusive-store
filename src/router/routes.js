import {
    Home,
    NotFound
} from "@/views";

export default [
    {
        path: '/',
        component: Home,
        name: 'Home',
        meta: {
            title: 'Home',
            icon: 'home'
        },
    },
    {
        path: '/:catchAll(.*)',
        component: NotFound,
        name: 'NotFound',
        meta: {
            title: 'Not Found',
            icon: 'not-found'
        },
    }
]