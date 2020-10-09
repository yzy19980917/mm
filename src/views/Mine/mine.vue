<template>
  <div>
      <headermy title="我的地盘"></headermy>
      这是mine的地方
      <tabber></tabber>
  </div>
</template>

<script>
import headermy from '@/components/Header.vue'
import tabber from '@/components/Tabber.vue'
export default {
  name : "mine",
    components : {
      headermy,
      tabber
    }
}
</script>

<style>

</style>