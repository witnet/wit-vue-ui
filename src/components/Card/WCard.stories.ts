import type { Meta, StoryObj } from '@storybook/vue3'
import WCard from './WCard.vue'
import { CardType } from './WCard'

const meta: any = {
  title: 'Example/WCard',
  component: WCard,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['base', 'icon', 'link'] }
  },
  args: {
    type: CardType.base
  }
} satisfies Meta<typeof WCard>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  render: (args: any) => ({
    components: { WCard },
    setup() {
      return { args }
    },
    template: `<WCard v-bind="args"><template #content>Link description</template></WCard>`
  }),
  args: {
    type: 'base'
  }
}

export const Icon: Story = {
  parameters: {
    backgrounds: { default: 'grey' }
  },
  render: (args: any) => ({
    components: { WCard },
    setup() {
      return { args }
    },
    template: `<WCard v-bind="args" />`
  }),
  args: {
    type: 'icon',
    title: 'Custom title',
    description: 'Custom description',
    url: '#url',
    urlLabel: 'Link to'
  }
}

export const Link: Story = {
  render: (args: any) => ({
    components: { WCard },
    setup() {
      return { args }
    },
    template: `<WCard v-bind="args"><template #description>Link description</template></WCard>`
  }),
  args: {
    type: 'link',
    title: 'Custom link title',
  }
}
