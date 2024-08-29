import type { Meta, StoryObj } from '@storybook/vue3'
import WLink from './WLink.vue'

const meta = {
  title: 'Example/WLink',
  component: WLink,
  tags: ['autodocs'],
  argTypes: {},
  args: {}
} satisfies Meta<typeof WLink>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { WLink },
    setup() {
      return { args }
    },
    template: `<Link v-bind="args">Link</Link>`
  }),
  args: {
    label: 'Link',
    href: '#'
  }
}

export const Underline: Story = {
  render: (args) => ({
    components: { WLink },
    setup() {
      return { args }
    },
    template: `<Link v-bind="args">Link</Link>`
  }),
  args: {
    label: 'Link',
    underline: true,
    href: '#'
  }
}

export const Hover: Story = {
  render: (args) => ({
    components: { WLink },
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
