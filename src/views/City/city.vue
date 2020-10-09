<template>
    <div>
        <div class="head">
            <p>常用城市:</p>
                <mt-button type="default" class="btn" @click="handerClick(420100,'武汉')">武汉</mt-button>
                <mt-button type="default" class="btn" @click="handerClick(110100,'北京')">北京</mt-button>
                <mt-button type="default" class="btn" @click="handerClick(310100,'上海')">上海</mt-button>
                <mt-button type="default" class="btn" @click="handerClick(440100,'广州')">广州</mt-button>
        </div>
        <mt-index-list>
            <mt-index-section :index="data.index" v-for="data in datalist" :key="data.index">
                <div @click="handerClick(data2.cityId,data2.name)" v-for="data2 in data.datalist2" :key="data2.cityId">
                    <mt-cell :title="data2.name"></mt-cell>
                </div>
            </mt-index-section>
        </mt-index-list>
    </div>
</template>
<script>
import { IndexList, IndexSection } from 'mint-ui'
import axios from 'axios'
export default {
    data () {
        return {
            datalist : []
        }
    },
    mounted(){
        axios({
            url : "https://m.maizuo.com/gateway?k=9502566",
            headers : {
                  'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15610855429195524981146"}',
                  'X-Host': 'mall.film-ticket.city.list'
            }
        }).then(res => {
                this.datalist = this.handerCity(res.data.data.cities)
                console.log(this.datalist)
        })
    },
    methods : {
        handerCity(data){
            var list = []
            for(var i = 65;i < 91;i++){
                list.push(String.fromCharCode(i))
            }
            var list2 = []
            for(var j = 0;j < data.length;j++){
                var arr = data.filter(item => item.pinyin.substring(0,1).toUpperCase() === list[j])
                if(arr.length){
                    list2.push({
                        index : list[j],
                        datalist2 : arr
                    })
                }
            }
            return list2
        },
        handerClick(id,name){
            localStorage.setItem("CityId",id)
            localStorage.setItem("CityName",name)
            this.$router.push('/movie/nowplaying')
        }

    }
}
</script>
<style lang="scss" scoped>
.head{
    p{
        text-align: center;
        font-size: 20px;
    }
    .btn{
        margin: 10px;
        width: 100px;
    }
}

</style>