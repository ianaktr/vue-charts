import {shallowMount} from '@vue/test-utils'
import Pie from '@/components/Pie.vue'

describe('Pie.vue', () => {
  const data = [
    {value: 10, legend: 'First'},
    {value: 20, legend: 'Second'},
    {value: 30, legend: 'Third'}
  ]

  it('has correct computed properties', () => {
    const wrapper = shallowMount(Pie, {
      propsData: {data}
    })

    expect(wrapper.vm.chartPathes.length).toEqual(3)
    expect(wrapper.vm.dataValues.length).toEqual(3)
    expect(wrapper.vm.chartData.length).toEqual(3)
  })
})
