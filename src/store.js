import api from './api'

export default {
  state: {
    appName: 'My first app',
    countries: []
  },
  actions: {
    async getData({commit}) {
      const response = await api.getData()
      // console.log(response)
      commit('SET_COUNTRIES', response.data)
    }
  },
  mutations: {
    SET_COUNTRIES(state, all) {
      state.countries = all
    }
  },
  getters: {
    getCountriesByRegion(state) {
      return state.countries.filter(elem => elem.region === 'Europe')
    }
  }
}
