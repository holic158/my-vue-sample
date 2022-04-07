import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import('@/components/Main'),
    },
    {
        path: '/views/VCalendar',
        name: 'VCalendar',
        component: () => import('@/components/views/VCalendar')
      },
      {
        path: '/views/asyncAwait',
        name: 'asyncAwait',
        component: () => import('@/components/views/asyncAwait')
      },
      {
        path: '/views/unAsyncAwait',
        name: 'unAsyncAwait',
        component: () => import('@/components/views/unAsyncAwait')
      },
      {
        path: '/views/sequencialCall',
        name: 'sequencialCall',
        component: () => import('@/components/views/sequencialCall')
      }    
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  export default router;