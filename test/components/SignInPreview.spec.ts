import { shallowMount } from "@vue/test-utils"
import SignInPreview from "@/components/SignInPreview.vue"

describe("SignInPreview component", () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(SignInPreview)
  })

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it("has the expected email element", () => {
    expect(wrapper.contains('v-text-field[type="email"]')).toBe(true)
  })

  it("has the expected password element", () => {
    expect(wrapper.contains('v-text-field[type="password"]')).toBe(true)
  })

  it("has the expected Sign In button", () => {
    expect(wrapper.contains('v-btn[name="signIn"]')).toBe(true)
  })

  it("is called signIn() when click Sign In button", () => {
    const mock = jest.fn()
    wrapper.setMethods({ signIn: mock })
    wrapper.find('v-btn[name="signIn"]').trigger('click')
    expect(mock).toBeCalled()
  })
})
