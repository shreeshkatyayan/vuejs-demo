import FormLayout from '../FormLayout.vue';
import exampleLoginForm from './loginForm.example';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof FormLayout> = {
  component: FormLayout,
  title: 'Form',
  tags: ['autodocs'],
  argTypes: {
    elements: {
      description: 'Array of form elements',
      defaultValue: exampleLoginForm,
    },
  },
};

export default meta;

type Story = StoryObj<typeof FormLayout>;

export const LoginForm: Story = {
  render: () => ({
    components: { FormLayout },
    template: '<FormLayout elements=',
  }),
};
