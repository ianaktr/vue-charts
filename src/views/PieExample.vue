<template>
  <div class="container">
    <Header />
    <div class="one-block">
      <div class="block-title">Simple pie chart</div>
      <div class="block-description">
        10 countries in Europe with the biggest population
      </div>
      <PieChart :data="data" />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import PieChart from '../components/Pie'
import {mapGetters} from 'vuex'

export default {
  components: {
    Header,
    PieChart
  },
  data() {
    return {}
  },
  created() {
    this.$store.dispatch('getData')
  },
  computed: {
    ...mapGetters(['getCountriesByRegion']),
    data() {
      return this.getCountriesByRegion
        .filter(element => element.population > 13000000)
        .map(element => {
          return {value: element.population, legend: element.name}
        })
        .sort((a, b) => b.value - a.value)
    }
  }
}
</script>

<style lang="scss">
.block-title {
  margin-bottom: 30px;
  padding-bottom: 10px;
  font-size: 1.5rem;
  border-bottom: 1px solid #d8d8d8;
}

.block-description {
  margin-bottom: 50px;
}
</style>
