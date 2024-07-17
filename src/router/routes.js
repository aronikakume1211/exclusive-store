import {
    Home,
    NotFound,
    Contact,
    Cart,
    Wishlist,
    Product
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
        path: '/:catchAll(.*)',
        component: NotFound,
        name: 'NotFound',
        meta: {
            title: 'Not Found',
            icon: 'not-found'
        },
    }
]