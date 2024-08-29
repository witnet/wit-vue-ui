import type { Meta, StoryObj } from '@storybook/vue3'
import WSection from './WSection.vue'

const meta: any = {
  title: 'Example/WSection',
  component: WSection,
  tags: ['autodocs'],
  argTypes: {},
  args: {}
} satisfies Meta<typeof WSection>

export default meta
type Story = StoryObj<typeof meta>

export const Section: Story = {
  render: (args: any) => ({
    components: { WSection },
    setup() {
      return { args }
    },
    template: `<WSection v-bind="args">
        <template #content>
          <p class="text-white-50">Section content<p>
        </template>
      </WSection>`
  }),
  args: {
    frameClasses: 'bg-black-950',
    contentClasses: 'grid justify-items-center'
  }
}
