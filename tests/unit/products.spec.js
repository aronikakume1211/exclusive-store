// tests/unit/HelloWorld.spec.js
import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/src/components/HelloWorld.vue'; // Adjust the path if necessary

describe('HelloWorld.vue', () => {
  it('renders "Hello, World!"', () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.text()).toMatch('Hello, World!');
  });
});
