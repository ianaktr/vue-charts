import {shallowMount} from '@vue/test-utils'
import HighlightCode from '@/components/HighlightCode.vue'

describe('HighlightCode.vue', () => {
  it('renders props.text when passed', () => {
    const text = 'test'

    const wrapper = shallowMount(HighlightCode, {
      propsData: {text}
    })

    expect(wrapper.text()).toMatch(text)
  })

  it('renders component with other language when passed', () => {
    const text = 'test'
    const language = 'css'

    const wrapper = shallowMount(HighlightCode, {
      propsData: {text, language}
    })
    expect(wrapper.html()).toContain('css')
  })
})
