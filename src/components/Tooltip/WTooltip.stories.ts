import type { Meta, StoryObj } from '@storybook/vue3'
import WTooltip from './WTooltip.vue'

const meta: any = {
  title: 'Example/WTooltip',
  component: WTooltip,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    bgColor: '#000',
  },
} satisfies Meta<typeof WTooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => ({
    components: { WTooltip },
    setup() {
      return { args }
    },
    template: `<WTooltip v-bind="args"><template #tooltip><p class="text-white-50 w-[200px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></template><template #main>
              <span class="text-xs ml-xs">ⓘ</span>
            </template></WTooltip>`,
    args: {
      bgColor: 'black-950',
    }
  })
}
