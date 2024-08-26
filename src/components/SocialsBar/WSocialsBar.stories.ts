import type { Meta, StoryObj } from '@storybook/vue3'
import WSocialsBar from './WSocialsBar.vue'

const meta = {
  title: 'Example/WSocialsBar',
  component: WSocialsBar,
  tags: ['autodocs'],
  argTypes: {},
  args: {}
} satisfies Meta<typeof WSocialsBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { WSocialsBar },
    setup() {
      return { args }
    },
    template: `<WSocialsBar v-bind="args" />`
  }),
  args: {}
}
