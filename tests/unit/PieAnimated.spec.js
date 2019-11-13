import {shallowMount} from '@vue/test-utils'
import PieAnimated from '@/components/PieAnimated.vue'

describe('PieAnimated.vue', () => {
  const data = [
    {value: 10, legend: 'First'},
    {value: 20, legend: 'Second'},
    {value: 30, legend: 'Third'}
  ]

  it('calls mouseover method when hovers svg', () => {
    const wrapper = shallowMount(PieAnimated, {
      propsData: {data}
    })

    wrapper
      .findAll('svg path')
      .at(1)
      .trigger('mouseover')

    expect(wrapper.vm.activeIndex).toEqual(1)
  })

  it('calls mouseout method when removes mouse', () => {
    const wrapper = shallowMount(PieAnimated, {
      propsData: {data}
    })

    wrapper.setData({activeIndex: 2})

    wrapper
      .findAll('svg path')
      .at(1)
      .trigger('mouseout')

    expect(wrapper.vm.activeIndex).toEqual(null)
  })

  it('adds event listener in mounted hook', () => {
    const onResizeStub = jest.fn()
    window.addEventListener = jest.fn()

    shallowMount(PieAnimated, {
      propsData: {data},
      methods: {onResize: onResizeStub}
    })

    expect(window.addEventListener).toBeCalled()
  })

  it('removes event listener before destroy', () => {
    const onResizeStub = jest.fn()
    window.removeEventListener = jest.fn()

    const wrapper = shallowMount(PieAnimated, {
      propsData: {data},
      methods: {onResize: onResizeStub}
    })
    wrapper.destroy()

    expect(window.removeEventListener).toBeCalled()
  })
})
