import type { Meta, StoryObj } from '@storybook/vue3'
import WInput from './WInput.vue'
import { InputType, inputTypes } from './WInput'

const meta: any = {
  title: 'Example/WInput',
  component: WInput,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: inputTypes }
  },
  args: {}
} satisfies Meta<typeof WInput>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  render: (args: any) => ({
    components: { WInput },
    setup() {
      return { args }
    },
    template: `<WInput v-bind="args">WInput</WInput>`
  }),
  args: {
    type: InputType.Base,
    contentType: 'string'
  }
}

export const Action: Story = {
  parameters: {
    backgrounds: { default: 'grey' }
  },
  render: (args: any) => ({
    components: { WInput },
    setup() {
      return { args }
    },
    template: `<WInput v-bind="args">WInput</WInput>`
  }),
  args: {
    type: InputType.Action,
    placeholder: 'email@mail.com',
    contentType: 'email'
  }
}
