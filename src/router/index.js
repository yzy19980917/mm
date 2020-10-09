import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRouter from '@/router/Movie/movie.js'
import cinemaRouter from '@/router/Cinema/cinema.js'
import mineRouter from '@/router/Mine/mine.js'
import cityRouter from '@/router/City/city.js'
import detailRouter from '@/router/Detail/detail.js'
Vue.use(VueRouter)

const routes = [
  movieRouter,
  cinemaRouter,
  mineRouter,
  cityRouter,
  detailRouter,
  {
    path : "/",
    redirect : "/movie"
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
