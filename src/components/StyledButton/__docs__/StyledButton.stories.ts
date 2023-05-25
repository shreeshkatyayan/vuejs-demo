// import { action } from '@storybook/addon-actions';
import StyledButton from '../StyledButton.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof StyledButton> = {
  component: StyledButton,
  title: 'Button',
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      description: 'Click action to be triggered on the button',
      defaultValue: null,
      type: 'function',
    },
    theme: {
      description: 'Theme of the button to be rendered',
      defaultValue: '',
      type: 'string',
      options: ['primary', 'error', ''],
      control: { type: 'radio' },
    },
    label: {
      description: 'Text to be displayed on the button',
      defaultValue: '',
      control: { type: 'text' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof StyledButton>;

export const Primary: Story = {
  render: () => ({
    components: { StyledButton },
    template: '<StyledButton theme="primary" label="Primary Button" />',
  }),
};

export const Error: Story = {
  render: () => ({
    components: { StyledButton },
    template: '<StyledButton theme="error" label="Error Button" />',
  }),
};

export const Default: Story = {
  render: () => ({
    components: { StyledButton },
    template: '<StyledButton label="Default Button" />',
  }),
};
