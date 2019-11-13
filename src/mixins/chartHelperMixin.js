const chartHelperMixin = {
  methods: {
    formatNumbers(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    }
  }
}

export default chartHelperMixin
