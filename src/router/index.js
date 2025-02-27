import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BasicUnderstandingView from '../components/BasicUnderstanding.vue'
import CounterButtonView from '../components/CounterButton.vue'
import CoffeePlanView from '../views/CoffeePlanView.vue'
import GithubCardView from '../views/GithubCardView.vue'
import AppAlertView from '../views/AppAlertView.vue'
import ShoppingListView from '../views/ShoppingListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/basic',
      name: 'basic',
      component: BasicUnderstandingView,
    },
    {
      path: '/shopping-list',
      name: 'shopping-list',
      component: ShoppingListView,
    },
    {
      path: '/counter',
      name: 'counter',
      component: CounterButtonView,
    },
    {
      path: '/coffee-plan',
      name: 'coffee-plan',
      component: CoffeePlanView,
    },
    {
      path: '/github-card',
      name: 'github-card',
      component: GithubCardView,
    },
    {
      path: '/app-alert',
      name: 'app-alert',
      component: AppAlertView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
