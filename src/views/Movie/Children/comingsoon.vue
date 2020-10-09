<template>
    <div>
        <div class="movie_body">
        <ul>
           <li v-for="data in comingList" :key="data.id">
                    <div class="pic_show">
                        <img :src="data.img | imgFilter">
                    </div>
                    <div class="info_list">
                        <h2>{{ data.nm }}</h2>
                        <p>观众评 <span class="grade">{{ data.sc }}</span></p>
                        <p>主演: {{ data.star }}</p>
                        <p> {{ data.showInfo}} </p>
                    </div>
                    <div class="btn_mall">
                        购票
                    </div>
                </li>
        </ul>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
Vue.filter("imgFilter",function(data){
    return data.replace('w.h','128.180')
})
export default {
    data () {
        return {
            comingList : []
        }
    },
    mounted() {
        axios.get("/ajax/comingList?ci=57&token=&limit=10&optimus_uuid=3958E90003EE11EB911DADA82E500F95FD100AAE93E1").then(res => {
            this.comingList = res.data.coming
            console.log(res.data)
        })
    }
}
</script>>

<style lang="scss" scoped>
.movie_body{margin-bottom: 50px;}
.movie_body ul{ margin:0 12px; overflow: hidden;}
.movie_body ul li{ margin-top:12px; display: flex; align-items:center; border-bottom: 1px #e6e6e6 solid; padding-bottom: 10px;}
.movie_body .pic_show{ width:64px; height: 90px;}
.movie_body .pic_show img{ width:100%;}
.movie_body .info_list { margin-left: 10px; flex:1; position: relative;}
.movie_body .info_list h2{ font-size: 17px; line-height: 24px; width:150px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list p{ font-size: 13px; color:#666; line-height: 22px; width:200px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list .grade{ font-weight: 700; color: #faaf00; font-size: 15px;}
.movie_body .info_list img{ width:50px; position: absolute; right:10px; top: 5px;}
.movie_body .btn_mall , .movie_body .btn_pre{ width:47px; height:27px; line-height: 28px; text-align: center; background-color: #f03d37; color: #fff; border-radius: 4px; font-size: 12px; cursor: pointer;}
.movie_body .btn_pre{ background-color: #3c9fe6;}
.movie_body .pullDown{ margin:0; padding:0; border:none;}
</style>