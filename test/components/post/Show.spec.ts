import { shallowMount } from '@vue/test-utils'
import PostShow from '@/components/post/Show.vue'

describe('PostShow component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(PostShow, {
      propsData: {
        post: {
          id: 1,
          title: 'AAA',
          body: 'aaa'
        }
      }
    })
  })

  it('has the expected html structure', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('has the expected text', () => {
    expect(wrapper.text()).toBe('AAA aaa Delete Are you sure?   No Yes')
  })
})
