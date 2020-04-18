import { shallowMount } from '@vue/test-utils'
import PostForm from '@/components/post/Form.vue'

describe('PostForm component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(PostForm)
  })

  it('has the expected html structure', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('has the expected title element', () => {
    expect(wrapper.contains('v-text-field[label="Title"]')).toBe(true)
  })

  it('has the expected body element', () => {
    expect(wrapper.contains('v-textarea[label="Body"]')).toBe(true)
  })

  it('has the expected button element', () => {
    expect(wrapper.contains('v-btn[disabled="true"]')).toBe(true)
  })
})
