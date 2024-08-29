import type { Meta, StoryObj } from '@storybook/vue3'
import WLoadingPlaceholder from './WLoadingPlaceholder.vue'

const meta: any = {
  title: 'Example/WLoadingPlaceholder',
  component: WLoadingPlaceholder,
  tags: ['autodocs'],
  argTypes: {},
  args: {}
} satisfies Meta<typeof WLoadingPlaceholder>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => ({
    components: { WLoadingPlaceholder },
    setup() {
      return { args }
    },
    template: `<WLoadingPlaceholder v-bind="args" />`
  }),
  args: {
    height: '100px',
    width: '150px',
    borderRadius: '8%'
  }
}
