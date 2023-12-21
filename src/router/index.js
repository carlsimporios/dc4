import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudentView from '../views/StudentView.vue'
import CourseView from '../views/CourseView.vue'
import GradeView from '../views/GradeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/student',
      name: 'student',
      component: StudentView
    },
    {
      path: '/course',
      name: 'course',
      component: CourseView
    },
    {
      path: '/grade',
      name: 'grade',
      component: GradeView
    }


  ]
})

export default router
