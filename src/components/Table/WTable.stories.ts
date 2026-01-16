import type { Meta, StoryObj } from '@storybook/vue3'
import WTable from './WTable.vue'
import {
  getMockupData,
  getMockupData2,
  getMockupData3,
  getMockupLabels,
  getMockupLabels2,
  getMockupLabels3
} from './utils'

const meta: Meta<typeof WTable> = {
  title: 'Example/WTable',
  component: WTable,
  tags: ['autodocs'],
  argTypes: {},
  args: {}
} satisfies Meta<typeof WTable>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: unknown) => ({
    components: { WTable },
    setup() {
      return { args }
    },
    template: `<WTable v-bind="args" />`
  }),
  args: {
    labels: getMockupLabels(),
    data: getMockupData()
  }
}

export const Chips: Story = {
  render: (args: unknown) => ({
    components: { WTable },
    setup() {
      return { args }
    },
    template: `<WTable v-bind="args" />`
  }),
  args: {
    labels: getMockupLabels2(),
    data: getMockupData2(),
    long: true
  }
}

export const Truncate: Story = {
  render: (args: unknown) => ({
    components: { WTable },
    setup() {
      return { args }
    },
    template: `<WTable v-bind="args" />`
  }),
  args: {
    labels: getMockupLabels3(),
    data: getMockupData3(),
    long: true
  }
}
