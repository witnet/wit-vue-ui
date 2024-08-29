import type { Meta, StoryObj } from '@storybook/vue3'
import WSpinner from './WSpinner.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: any = {
  title: 'Example/WSpinner',
  component: WSpinner,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {},
  args: {}
} satisfies Meta<typeof WSpinner>

export default meta
type Story = StoryObj<typeof meta>

export const Section: Story = {
  render: (args: any) => ({
    components: { WSpinner },
    setup() {
      return { args }
    },
    template: `<WSpinner />`
  }),
}
