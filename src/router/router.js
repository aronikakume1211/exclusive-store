import { createRouter, createWebHistory } from 'vue-router';

import routes from './routes';


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior: () => ({ y: 0, x: 0 }),
    linkActiveClass: 'active',
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} - ${import.meta.env.VUE_APP_NAME}`;
    next();
});

export default router;