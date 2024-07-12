import {
    Home,
    NotFound,
    Contact
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
        path: '/contact',
        component: Contact,
        name: 'contact',
        meta: {
            title: 'Contact',

        }
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