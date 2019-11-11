import { shallowMount } from "@vue/test-utils"
import ProfileShow from "@/components/settings/ProfileShow.vue"

describe("ProfileShow component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ProfileShow, {
      propsData: {
        user: { nickname: 'demo', image: { url: null } }
      }
    });
  });

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("has the expected nickname element", () => {
    expect(wrapper.contains('v-text-field[label="Nickname"]')).toBe(true)
  })

  it("has the expected button element", () => {
    expect(wrapper.contains('v-btn[disabled="true"]')).toBe(true)
  })
});
