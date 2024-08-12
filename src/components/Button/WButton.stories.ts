import type { Meta, StoryObj } from '@storybook/vue3'
// import { fn } from '@storybook/test';
import WButton from './WButton.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: any = {
  title: 'Example/WButton',
  component: WButton,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['primary', 'secondary', 'arrow', 'dark'] }
  },
  args: {
    type: 'primary'
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    // onClick: fn(),
  }
} satisfies Meta<typeof WButton>

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */

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
