import type { Meta, StoryObj } from '@storybook/vue3'
// import { fn } from '@storybook/test';
import WLoadingPlaceholder from './WLoadingPlaceholder.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: any = {
  title: 'Example/WLoadingPlaceholder',
  component: WLoadingPlaceholder,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    // type: { control: 'select', options: ['primary', 'secondary', 'arrow', 'dark'] }
  },
  args: {
    // type: 'primary'
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    // onClick: fn(),
  }
} satisfies Meta<typeof WLoadingPlaceholder>

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */

export const Section: Story = {
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
