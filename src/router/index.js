import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    // The root page should show 'Chris.Mb' in the browser tab
    meta: { title: 'Chris.Mb' }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: { title: 'Présentation' }
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('../views/PortfolioView.vue'),
    meta: { title: 'Portfolio' }
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/BlogView.vue'),
    meta: { title: 'Blog' }
  },
  {
    path: '/read/:slug/:id',
    name: 'articleDetail',
    component: () => import('../views/ArticleView.vue'),
    meta: { title: 'Blog' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  // If the route's title is already 'Chris.Mb', show it as-is; otherwise append the site suffix.
  const siteSuffix = ' - Chris.Mb';
  if (to && to.meta && to.meta.title) {
    document.title = to.meta.title === 'Chris.Mb' ? 'Chris.Mb' : `${to.meta.title}${siteSuffix}`;
  } else {
    document.title = 'Chris.Mb';
  }
  next();
});

export default router
