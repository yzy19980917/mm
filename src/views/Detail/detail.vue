<template>
    <div>
        <div id="header">
            <span @click="back()"><</span>
            <p>影片详情</p>
        </div>

        <div class="body">
            <div class="detail_left">
				<!-- <img :src="movieList.img | imgFilter" alt=""> -->
			</div>
			<div class="detail_right">
				    <h2>{{ movieList.nm}}</h2>
					<p>主演:{{ movieList.dir}}</p>
					<p>评分:{{ movieList.sc}}</p>
					<p>类型:{{ movieList.cat}}</p>
					<p>{{ movieList.pubDesc}}</p>
			</div>
        </div>
        detail -- {{ $route.params.id}}
    </div>
</template>

<script>
import  axios from 'axios'
import Vue from 'vue'
Vue.filter('imgFilter',function(data){
    return data.replace('w.h','128.180');
})
export default {
    data(){
        return {
            movieList : {}        
            }
    },
    mounted(){
        console.log(this.$route.params.id)
        axios.get(`/ajax/detailmovie?movieId=${this.$route.params.id}&optimus_uuid=3958E90003EE11EB911DADA82E500F95FD100AAE93E147898760FBF6B0AC646E&optimus_risk_level=71&optimus_code=10`).then(res => {
            this.movieList = res.data.detailMovie
            console.log(this.movieList)
            console.log(res.data)
        })
    },
    methods : {
        back(){
            this.$router.go(-1)
        }
    }
}
</script>>
<style lang="scss" scoped>
#header{
    background: #e54847;
    text-align: center;
    height: 50px;
    line-height: 50px;
    position: relative;
    span{
        position: absolute;
        left: 5px;
        font-size: 30px;
        color: #ffffff;
    }
    p{
        font-size: 20px;
        color: #ffffff;
    }
}
.body{
    height: 200px;
    background: pink;
    display: flex;
    .detail_left{
        flex: 2;
        overflow: hidden;
        img{
            margin-left: 5px;
            margin-top: 10px;
        }
    }
    .detail_right{
        flex: 3;
        padding: 5px;
       font-size: 14px;
       h2{
           margin-top: 5px;
       }
       p{
           margin-top: 5px;
       }
    }
}
</style>
