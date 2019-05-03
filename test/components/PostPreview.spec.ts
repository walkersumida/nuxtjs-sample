import { shallowMount } from "@vue/test-utils"
import PostPreview from "@/components/PostPreview.vue"

describe("PostPreview component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PostPreview, {
      propsData: {
        post: {
          id: 1,
          title: "AAA",
          description: "aaa"
        }
      }
    });
  });

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("has the expected text", () => {
    expect(wrapper.text()).toBe('AAA aaa');
  });
});
