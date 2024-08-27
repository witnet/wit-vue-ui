import type { Meta, StoryObj } from '@storybook/vue3'
// import { fn } from '@storybook/test';
import WFooter from './WFooter.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: any = {
  title: 'Example/WFooter',
  component: WFooter,
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
} satisfies Meta<typeof WFooter>

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */

export const Footer: Story = {
  render: (args: any) => ({
    components: { WFooter },
    setup() {
      return { args }
    },
    template: `<WFooter v-bind="args" />`
  }),
  args: {
    footerSections: [
      {
        title: 'Developers',
        links: [
          {
            url: '#reference',
            label: 'reference'
          },
          {
            url: '#randomness',
            label: 'randomness'
          },
          {
            url: '#randomness',
            label: 'randomness'
          },
          {
            url: '#supported_chains',
            label: 'supported_chains'
          },
          {
            url: '#solidity_sdk',
            label: 'solidity_sdk'
          }
        ]
      },
      {
        title: 'Ecosystem',
        links: [
          {
            url: '#block_explorer',
            label: 'block_explorer'
          },
          {
            url: '#data_feeds_explorer',
            label: 'data_feeds_explorer'
          },
          {
            url: '#sheikah',
            label: 'sheikah'
          },
          {
            url: '#my_wit_wallet',
            label: 'my_wit_wallet'
          }
        ]
      },
      {
        title: 'Learn',
        links: [
          {
            url: '#whitepaper',
            label: 'whitepaper'
          },
          {
            url: '#medium',
            label: 'medium'
          },
          {
            url: '#tutorials',
            label: 'tutorials'
          }
        ]
      }
    ]
  }
}
