<template>
  <div class="chart-wrapper">
    <div class="row align-items-center">
      <div class="col-md-6 col-lg-4">
        <div class="chart-pie">
          <svg width="280" height="280">
            <g transform="translate(140,140)">
              <path
                v-for="(data, index) in chartPathes"
                :d="data"
                :key="`slice_${index}`"
                :fill="getColor(index)"
              ></path>
            </g>
          </svg>
        </div>
      </div>
      <div class="col-md-6 col-lg-8">
        <div class="chart-legends">
          <div
            v-for="(item, index) in data"
            :key="`legend_${index}`"
            :style="{'border-color': getColor(index)}"
            class="legend-item"
          >
            <div class="title">{{ item.legend }}</div>
            <div class="value">{{ item.value }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import colorsMixin from '../mixins/colorsMixin'
import * as d3 from 'd3'

export default {
  name: 'pie',
  props: {
    data: Array
  },
  mixins: [colorsMixin],
  computed: {
    dataValues() {
      return this.data.map(element => element.value)
    },
    chartData() {
      return d3.pie()(this.dataValues)
    },
    chartPathes() {
      return this.chartData.map(slice => this.drawPie(slice))
    }
  },
  methods: {
    drawPie(data) {
      return d3
        .arc()
        .outerRadius(130)
        .innerRadius(30)
        .cornerRadius(0)
        .padAngle(0.02)(data)
    }
  }
}
</script>

<style lang="scss">
.chart-pie {
  text-align: center;
}

.chart-legends {
  column-count: 2;
  column-gap: 40px;
}

.legend-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  margin-bottom: 10px;
  margin-right: 20px;
  padding: 0 10px;
  font-size: 13px;
  line-height: 1;
  color: #111;
  border-left: 4px solid;
}

@media (max-width: 992px) {
  .chart-legends {
    column-count: unset;
    column-gap: unset;
  }
}

@media (max-width: 768px) {
  .chart-pie {
    margin-bottom: 50px;
  }
}
</style>
