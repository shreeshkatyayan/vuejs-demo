import FormLayout from '../FormLayout.vue';
import exampleLoginForm from '../__docs__/loginForm.example';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

describe('FormLayout', () => {
  it('Renders properly', () => {
    const wrapper = mount(FormLayout, { props: { elements: exampleLoginForm } });
    exampleLoginForm.forEach((element) => {
      expect(wrapper.find(`input[type='${element.type}']`).isVisible());
    });
  });
});
