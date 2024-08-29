import type { Meta, StoryObj } from '@storybook/vue3'
import WNavbar from './WNavbar.vue'

const meta: any = {
  title: 'Example/WNavbar',
  component: WNavbar,
  tags: ['autodocs'],
  argTypes: {},
  args: {}
} satisfies Meta<typeof WNavbar>

export default meta
type Story = StoryObj<typeof meta>

export const Navbar: Story = {
  render: (args: any) => ({
    components: { WNavbar },
    setup() {
      return { args }
    },
    template: `<WNavbar v-bind="args">
        <template #logo>
          Logo
        </template>
      </WNavbar>`
  }),
  args: {
    navLinks: [
      {
        key: 'stake',
        active: false,
        to: '/stake',
        rel: 'stake',
        locale: 'stake'
      },
      {
        key: 'buy',
        active: false,
        to: '/buy',
        rel: 'buy',
        locale: 'buy'
      },
      {
        key: 'build',
        active: false,
        to: '/build',
        rel: 'build',
        locale: 'build'
      }
    ],
    redirectionActive: false
  }
}
