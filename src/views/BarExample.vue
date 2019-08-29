<template>
  <div class="container">
    <Header />
    <div class="text-center msg-block">
      The example is going to be soon...
    </div>
  </div>
</template>

<script>
import Header from '../components/header'

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
.msg-block {
  font-size: 25px;
  font-weight: 300;
  margin-top: 100px;
}
</style>


