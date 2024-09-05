import type { Meta, StoryObj } from '@storybook/vue3'
import WTooltip from './WTooltip.vue'
import { TooltipPosition, tooltipPostions } from './WTooltip'

const meta: any = {
  title: 'Example/WTooltip',
  component: WTooltip,
  tags: ['autodocs'],
  argTypes: {
    position: { control: 'select', options: tooltipPostions }
  },
  args: {
    bgColor: '#000',
    position: TooltipPosition.CenterTop
  }
} satisfies Meta<typeof WTooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => ({
    components: { WTooltip },
    setup() {
      return { args }
    },
    template: `<div class="h-[200px] w-auto flex justify-center items-center"><WTooltip v-bind="args"><template #tooltip><p class="text-white-50 w-[200px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></template><template #main>
              <span class="text-xs ml-xs">ⓘ</span>
            </template></WTooltip></div>`,
    args: {
      bgColor: 'black-950'
    }
  })
}
