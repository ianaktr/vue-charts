<template>
  <div class="container">
    <Header />
    <div class="one-block">
      <div class="block-title">Simple pie chart</div>
      <div class="block-text">
        This example is pretty easy. We don't add any effects to the pie chart.
        Just simply show the pie with ten values and the legends for the pie.
      </div>
      <div class="block-description">
        10 countries in Europe with the biggest population
      </div>
      <PieChart :data="data" />

      <Collapse :collapseTitle="'Pie chart code'">
        <HighlightCode :text="pieChartCode" />
      </Collapse>
    </div>

    <div class="one-block">
      <div class="block-title">Pie chart with animation</div>
      <div class="block-text">
        For better user experience it would be nice to have some effects. For
        example, when you hover the legened, you can see the slice is bold or
        bigger. It should work both ways.
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import PieChart from '../components/Pie'
import Collapse from '../components/Collapse'
import HighlightCode from '../components/HighlightCode'

import rawPie from '!!raw-loader!../components/Pie.vue'

import {mapGetters} from 'vuex'

export default {
  components: {
    Header,
    PieChart,
    HighlightCode,
    Collapse
  },
  data() {
    return {
      pieChartCode: rawPie
    }
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
.one-block {
  margin-bottom: 30px;
}

.block-title {
  margin-bottom: 30px;
  padding-bottom: 10px;
  font-size: 1.5rem;
  border-bottom: 1px solid #d8d8d8;
}

.block-text {
  margin-bottom: 30px;
  font-size: 1rem;
}

.block-description {
  margin-bottom: 50px;
  text-align: center;
}
</style>
