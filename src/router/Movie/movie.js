export default {
        path : "/movie",
        component : () => import('@/views/Movie/movie.vue'),
        children : [
                {
                        path : "nowplaying",
                        component : () => import('@/views/Movie/Children/nowplaying.vue')
                },
                {
                        path : "comingsoon",
                        component : () => import('@/views/Movie/Children/comingsoon.vue')
                },
                {
                        path : "search",
                        component : () => import('@/views/Movie/Children/search.vue')
                },
                //二级路由重定向写在children中
                {
                        path : "/movie",
                        redirect : "/movie/nowplaying"
                }
        ]
      
}