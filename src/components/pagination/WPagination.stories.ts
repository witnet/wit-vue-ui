import type { Meta, StoryObj } from '@storybook/vue3'
import WPagination from './WPagination.vue'

const meta = {
  title: 'Example/WPagination',
  component: WPagination,
  tags: ['autodocs'],
  argTypes: {},
  args: {}
} satisfies Meta<typeof WPagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { WPagination },
    setup() {
      return { args }
    },
    template: `<WPagination v-bind="args" v-model:page="args.page" />`
  }),
  args: {
    total: 100,
    pageSize: 5,
    page: 1,
  }
}
