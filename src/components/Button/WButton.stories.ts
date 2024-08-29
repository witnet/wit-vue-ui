import type { Meta, StoryObj } from '@storybook/vue3'
import WButton from './WButton.vue'

const meta: any = {
  title: 'Example/WButton',
  component: WButton,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['primary', 'secondary', 'arrow', 'dark'] }
  },
  args: {
    type: 'primary'
  }
} satisfies Meta<typeof WButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (args: any) => ({
    components: { WButton },
    setup() {
      return { args }
    },
    template: `<WButton v-bind="args">WButton</WButton>`
  }),
  args: {
    type: 'primary'
  }
}

export const Secondary: Story = {
  parameters: {
    backgrounds: { default: 'grey' }
  },
  render: (args: any) => ({
    components: { WButton },
    setup() {
      return { args }
    },
    template: `<WButton v-bind="args">WButton</WButton>`
  }),
  args: {
    type: 'secondary'
  }
}

export const Arrow: Story = {
  render: (args: any) => ({
    components: { WButton },
    setup() {
      return { args }
    },
    template: `<WButton v-bind="args">WButton</WButton>`
  }),
  args: {
    type: 'arrow'
  }
}

export const Dark: Story = {
  render: (args: any) => ({
    components: { WButton },
    setup() {
      return { args }
    },
    template: `<WButton v-bind="args">WButton</WButton>`
  }),
  args: {
    type: 'dark'
  }
}
