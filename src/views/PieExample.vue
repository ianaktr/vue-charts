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
      <Pie :data="data" />

      <Collapse :collapseTitle="'Pie chart code'">
        <HighlightCode :text="PieCode" />
      </Collapse>
    </div>

    <div class="one-block">
      <div class="block-title">Pie chart with animation</div>
      <div class="block-text">
        For better user experience it would be nice to visually see a connection
        between the part of the cahrt and legend. It is also essential for
        charts where there is a lot of data. Also, this chart changes its width
        in order to fit the screen size.
      </div>
      <div class="block-description">
        10 countries in Europe with the biggest population
      </div>
      <PieAnimated :data="data" />

      <Collapse :collapseTitle="'Animated pie chart code'">
        <HighlightCode :text="PieAnimatedCode" />
      </Collapse>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import Pie from '../components/Pie'
import PieAnimated from '../components/PieAnimated'
import Collapse from '../components/Collapse'
import HighlightCode from '../components/HighlightCode'

import rawPie from '!!raw-loader!../components/Pie.vue'
import rawPieAnimated from '!!raw-loader!../components/PieAnimated.vue'

import {mapGetters} from 'vuex'

export default {
  components: {
    Header,
    Pie,
    PieAnimated,
    HighlightCode,
    Collapse
  },
  data() {
    return {
      PieCode: rawPie,
      PieAnimatedCode: rawPieAnimated
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
    },
    dataAnimated() {
      return this.getCountriesByRegion
        .filter(element => element.population > 10000000)
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
  margin-bottom: 70px;
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
