<template>
  <div>
      <headermy title="私人影院"></headermy>
      这是cinema的地方
      <tabber></tabber>
  </div>
</template>

<script>
import headermy from '@/components/Header.vue'
import tabber from '@/components/Tabber.vue'
export default {
    name : "cinema",
    components : {
      headermy,
      tabber
    }
}
</script>

<style>

</style>