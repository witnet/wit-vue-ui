import type { Meta, StoryObj } from '@storybook/vue3'
// import { fn } from '@storybook/test';
import Link from './Link.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Example/Link',
  component: Link,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    // type: { control: 'select', options: ['primary', 'secondary'] },
  },
  args: {
    // type: 'primary',
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    // onClick: fn(),
  }
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */

export const Default: Story = {
  render: (args) => ({
    components: { Link },
    setup() {
      return { args }
    },
    template: `<Link v-bind="args">Link</Link>`
  }),
  args: {
    // type: "primary"
    label: 'Link',
    href: '#'
  }
}

export const Underline: Story = {
  render: (args) => ({
    components: { Link },
    setup() {
      return { args }
    },
    template: `<Link v-bind="args">Link</Link>`
  }),
  args: {
    // type: "primary"
    label: 'Link',
    underline: true,
    href: '#'
  }
}

export const Hover: Story = {
  render: (args) => ({
    components: { Link },
    setup() {
      return { args }
    },
    template: `<Link v-bind="args">Link</Link>`
  }),
  args: {
    label: 'Link',
    hover: true,
    href: '#'
  }
}
