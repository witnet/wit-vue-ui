import type { Meta, StoryObj } from '@storybook/vue3'
import WEmptyState from './WEmptyState.vue'

const meta: any = {
  title: 'Example/WEmptyState',
  component: WEmptyState,
  tags: ['autodocs'],
  argTypes: {},
  args: {}
} satisfies Meta<typeof WEmptyState>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => ({
    components: { WEmptyState },
    setup() {
      return { args }
    },
    template: `<WEmptyState v-bind="args" />`
  }),
  args: {
    text: 'Empty state text'
  }
}
