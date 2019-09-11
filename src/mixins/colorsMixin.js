const colorsMixin = {
  data() {
    return {
      colorList: [
        '#4e78a7',
        '#f28e2c',
        '#e05658',
        '#76b8b2',
        '#5aa14e',
        '#edc949',
        '#b07aa1',
        '#ff9da8',
        '#9c755f',
        '#bab0ac'
      ]
    }
  },
  methods: {
    getColor(index) {
      return this.colorList[index % this.colorList.length]
    }
  }
}

export default colorsMixin
