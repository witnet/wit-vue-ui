import type { Meta, StoryObj } from '@storybook/vue3'
import WSpinner from './WSpinner.vue'

const meta: any = {
  title: 'Example/WSpinner',
  component: WSpinner,
  tags: ['autodocs'],
  argTypes: {},
  args: {}
} satisfies Meta<typeof WSpinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => ({
    components: { WSpinner },
    setup() {
      return { args }
    },
    template: `<WSpinner />`
  })
}
