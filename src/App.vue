<template>
  <div id="app">
   <router-view></router-view>
   <Tabs v-if="$route.meta.tabBarFlag"></Tabs>
  </div>
</template>

<script>

export default {
  
}
</script>

<style lang="scss">

</style>
