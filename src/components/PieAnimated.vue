<template>
  <div class="chart-wrapper" ref="pie">
    <div class="row align-items-center">
      <div class="col-lg-12">
        <div class="chart-pie-animated">
          <svg :width="svgWidth" :height="svgHeight">
            <g
              :style="{
                transform: `translate(${svgWidth / 2}px, ${svgHeight / 2}px)`
              }"
            >
              <path
                v-for="(data, index) in chartPathes"
                :d="data"
                :id="`slice_${index}`"
                :key="`slice_${index}`"
                :fill="getColor(index)"
                @mouseover="mouseover(index)"
                @mouseout="mouseout(index)"
              ></path>
            </g>
          </svg>
        </div>
      </div>
      <div class="col-lg-12">
        <div
          class="chart-animated-legends"
          :class="{active: activeIndex !== null}"
        >
          <div
            v-for="(item, index) in data"
            :key="`legend_${index}`"
            :style="{background: getColor(index)}"
            class="legend-item"
            :class="{active: activeIndex === index}"
            @mouseover="mouseover(index)"
            @mouseout="mouseout(index)"
          >
            <div class="title">{{ item.legend }}</div>
            <div class="value">{{ formatNumbers(item.value) }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import colorsMixin from '../mixins/colorsMixin'
import chartHelperMixin from '../mixins/chartHelperMixin'

import * as d3 from 'd3'

export default {
  props: {
    data: Array
  },
  data() {
    return {
      activeIndex: null,
      elementWidth: 500
    }
  },
  mixins: [colorsMixin, chartHelperMixin],
  mounted() {
    window.addEventListener('resize', this.onResize)
    this.onResize()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  computed: {
    radius() {
      return this.elementWidth < 440 ? (this.elementWidth * 0.5) / 1.2 : 180
    },
    radiusInner() {
      return this.radius * 0.4
    },
    radiusBigger() {
      return this.radius * 1.2
    },
    svgWidth() {
      return this.elementWidth < 440 ? this.elementWidth : 440
    },
    svgHeight() {
      return this.elementWidth < 440 ? this.elementWidth : 440
    },
    dataValues() {
      return this.data.map(element => element.value)
    },
    chartData() {
      return d3.pie()(this.dataValues)
    },
    chartPathes() {
      return this.chartData.map(slice => this.drawPie(slice))
    },
    chartPathesBig() {
      return this.chartData.map(slice => this.drawPieBigger(slice))
    }
  },
  methods: {
    onResize() {
      this.elementWidth = this.$el.offsetWidth
    },
    drawPie(data) {
      return d3
        .arc()
        .outerRadius(this.radius)
        .innerRadius(this.radiusInner)
        .cornerRadius(0)
        .padAngle(0.01)(data)
    },
    drawPieBigger(data) {
      return d3
        .arc()
        .outerRadius(this.radiusBigger)
        .innerRadius(this.radiusInner)
        .cornerRadius(0)
        .padAngle(0.01)(data)
    },
    mouseover(index) {
      this.activeIndex = index
      d3.select(`.chart-pie-animated path#slice_${index}`)
        .transition()
        .duration(250)
        .attr('d', this.chartPathesBig[index])
    },
    mouseout(index) {
      this.activeIndex = null

      d3.select(`.chart-pie-animated path#slice_${index}`)
        .transition()
        .duration(300)
        .attr('d', this.chartPathes[index])
    }
  }
}
</script>

<style lang="scss" scoped>
.chart-wrapper {
  margin-bottom: 40px;
}

.chart-pie-animated {
  margin-bottom: 50px;
  text-align: center;

  path {
    cursor: pointer;
  }
}

.chart-animated-legends {
  column-count: 2;
  column-gap: 20px;

  &.active {
    .legend-item {
      opacity: 1;

      &:not(.active) {
        opacity: 0.2;
      }
    }
  }

  .legend-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 40px;
    margin-bottom: 15px;
    padding: 0 10px;
    font-size: 13px;
    line-height: 1;
    font-weight: 500;
    color: #fff;
    border-radius: 2px;
    transition: all 0.2s;
    cursor: pointer;

    .value {
      min-width: 80px;
      text-align: right;
    }
  }
}

@media (max-width: 992px) {
  .chart-animated-legends {
    column-count: unset;
    column-gap: unset;
  }
}

@media (max-width: 768px) {
  .chart-pie-animated {
    margin-bottom: 50px;
  }
}
</style>
