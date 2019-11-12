import {shallowMount} from '@vue/test-utils'
import Collapse from '@/components/Collapse.vue'

describe('Collapse.vue', () => {
  it('renders collapse with hidden text', () => {
    const collapseTitle = 'Test collapse title'

    const wrapper = shallowMount(Collapse, {
      propsData: {collapseTitle},
      slots: {default: ['Test content']}
    })

    expect(wrapper.vm.isOpen).toBe(false)
  })

  it('shows hidden text when button is clicked', () => {
    const collapseTitle = 'Test collapse title'

    const wrapper = shallowMount(Collapse, {
      propsData: {collapseTitle},
      slots: {default: ['Test content']}
    })

    wrapper.find('.collapse-btn').trigger('click')

    expect(wrapper.vm.isOpen).toBe(true)
  })
})
