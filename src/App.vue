<template>
  <div id="app">
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
    
   <Tabs v-if="$route.meta.tabBarFlag"></Tabs>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">

</style>
