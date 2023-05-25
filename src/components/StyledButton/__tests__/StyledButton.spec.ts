import StyledButton from '../StyledButton.vue';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

describe('StyledButton', () => {
  it('Runs properly', () => {
    expect(1 + 1, 'Doing dummy addition').toBe(2);
  })
  it('Renders properly', () => {
    const wrapper = mount(StyledButton, { props: { theme: 'primary', label: 'Primary button' } });
    expect(wrapper.text()).toContain('Primary button');
  });

  it('Handles click event', async () => {
    const wrapper = mount(StyledButton, { props: { theme: 'primary', label: 'Click' } });
    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted()).toHaveProperty('click');
  });
});
