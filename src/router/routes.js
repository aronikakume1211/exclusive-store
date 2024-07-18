import {
    Home,
    NotFound,
    Contact,
    Cart,
    Wishlist,
    Product,
    Signup
} from "@/views";
import Signin from '@/views/Signup/Signin.vue';

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
        path: '/cart',
        component: Cart,
        name: 'cart',
        meta: {
            title: 'Cart',
            icon: 'cart'
        }
    },
    {
        path: '/wishlist',
        component: Wishlist,
        name: 'Wishlist',
        meta: {
            title: 'Wishlist',
            icon: 'wishlist'
        },
    },
    {
        path: `/product/:id`,
        component: Product,
        name: 'product',
        meta: {
            title: 'Product',
            icon: 'product'
        }
    },
    {
        path: '/login',
        component: Signin,
        name: 'signin',
        meta: {
            title: 'Signin',
            icon: 'signin'
        }
    },
    {
        path: '/sign-up',
        component: Signup,
        name: 'signup',
        meta: {
            title: 'Signup',
            icon: 'signup'
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