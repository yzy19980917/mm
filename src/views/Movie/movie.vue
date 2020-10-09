<template>
  <div>
      <headermy title="影院电影"></headermy>
      <div id="top">
          <ul>
            <router-link tag="li" to="/city" active-class="active">{{ city }}<span class="iconfont icon-lower-triangle"></span></router-link>
            <router-link tag="li" to="/movie/nowplaying" active-class="active">正在热映</router-link>
            <router-link tag="li" to="/movie/comingsoon" active-class="active">即将上映</router-link>
            <router-link tag="li" to="/movie/search" active-class="active"><span class="iconfont icon-sousuo"></span></router-link>
          </ul>
      </div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <tabber></tabber>
  </div>
</template>

<script>
import headermy from '@/components/Header.vue'
import tabber from '@/components/Tabber.vue'
export default {
  name :  "movie",
  data () {
    return {
      datalist : ["111","222","333"],
      city : ""
    }
  },
  mounted(){
    this.city = localStorage.getItem("CityName")
  },
    components : {
      headermy,
      tabber
    }
}
</script>

<style lang="scss" scoped>
  #top{
    width: 100%;
    height: 50px;
    background:#fff;
    ul{
      display: flex;
      .active{
        color:  red;
        border-bottom: 1px solid red;
      }
        li{
          width: 25%;
          float: left;
          text-align: center;
          line-height: 50px;
          font-size: 16px;
          color: #000;
        }
        li:nth-child(1){
          flex: 1;
          span{
            margin-left: 2px;
          }
        }
        li:nth-child(2){
          flex: 1.5;
        }
        li:nth-child(3){
          flex: 1.5;
        }
        li:nth-child(4){
          flex: 1;
          span{
            color:red;
          }
        }
    }
  }
</style>