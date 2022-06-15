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
      },
      {
        path: '/views/loadImage',
        name: 'loadImage',
        component: () => import('@/components/views/loadImage')
      }    
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

router.beforeEach((to, from, next) => {
  
  //console.log('to:\n%s\n\n from:\n%s\n\n next:\n%s\n\n', JSON.stringify(to), JSON.stringify(from), next)

  console.log({to, from, next});

  next();
});

  export default router;