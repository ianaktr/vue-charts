<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import './assets/styles/style.scss';

#app {
  min-height: 100%;
  height: 100%;
}
</style>
