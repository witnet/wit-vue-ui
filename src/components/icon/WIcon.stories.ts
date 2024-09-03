import type { Meta, StoryObj } from '@storybook/vue3'
import WIcon from './WIcon.vue'

const meta: any = {
  title: 'Example/WIcon',
  component: WIcon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: [
        'ado',
        'apple',
        'bitmart',
        'changelly',
        'close-nav',
        'discord',
        'docker',
        'empty-state',
        'gate',
        'github',
        'hamburguer',
        'letsexchange',
        'linux',
        'mexc',
        'my-wit-wallet',
        'navitagion-cursor',
        'raspberry',
        'right-arrow',
        'sheikah',
        'simpleswap',
        'telegram',
        'windows',
        'witnet-logo-dark',
        'x'
      ]
    }
  },
  args: {}
} satisfies Meta<typeof WIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Ado: Story = {
  render: (args: any) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args" />`
  }),
  args: {
    name: 'ado',
    color: 'black'
  }
}
export const Apple: Story = {
  render: (args: any) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args" />`
  }),
  args: {
    name: 'apple'
  }
}
export const Bitmart: Story = {
  render: (args: any) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args" />`
  }),
  args: {
    name: 'bitmart'
  }
}
export const Changelly: Story = {
  render: (args: any) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args" />`
  }),
  args: {
    name: 'changelly'
  }
}
export const CloseNav: Story = {
  render: (args: any) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args" />`
  }),
  args: {
    name: 'close-nav'
  }
}
export const Discord: Story = {
  render: (args: any) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args" />`
  }),
  args: {
    name: 'discord-nav'
  }
}
export const Docker: Story = {
  render: (args: any) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args" />`
  }),
  args: {
    name: 'docker-nav'
  }
}
export const EmptyState: Story = {
  render: (args: any) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args" />`
  }),
  args: {
    name: 'empty-state'
  }
}
export const Gate: Story = {
  render: (args: any) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args" />`
  }),
  args: {
    name: 'gate'
  }
}
export const Github: Story = {
  render: (args: any) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args" />`
  }),
  args: {
    name: 'github'
  }
}
export const Hamburguer: Story = {
  render: (args: any) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args" />`
  }),
  args: {
    name: 'hamburguer'
  }
}
export const Letsexchange: Story = {
  render: (args: any) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args" />`
  }),
  args: {
    name: 'letsexchange'
  }
}
export const Linux: Story = {
  render: (args: any) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args" />`
  }),
  args: {
    name: 'linux'
  }
}
export const Mexc: Story = {
  render: (args: any) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args" />`
  }),
  args: {
    name: 'mexc'
  }
}
export const MyWitWallet: Story = {
  render: (args: any) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args" />`
  }),
  args: {
    name: 'my-wit-wallet'
  }
}
export const NavitagionCursor: Story = {
  render: (args: any) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args" />`
  }),
  args: {
    name: 'navitagion-cursor'
  }
}
export const Raspberry: Story = {
  render: (args: any) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args" />`
  }),
  args: {
    name: 'raspberry'
  }
}
export const RightArrow: Story = {
  render: (args: any) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args" />`
  }),
  args: {
    name: 'right-arrow'
  }
}
export const Sheikah: Story = {
  render: (args: any) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args" />`
  }),
  args: {
    name: 'sheikah'
  }
}
export const Simpleswap: Story = {
  render: (args: any) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args" />`
  }),
  args: {
    name: 'simpleswap'
  }
}
export const Telegram: Story = {
  render: (args: any) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args" />`
  }),
  args: {
    name: 'telegram'
  }
}

export const Windows: Story = {
  render: (args: any) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args" />`
  }),
  args: {
    name: 'windows'
  }
}
export const Witnet: Story = {
  render: (args: any) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args" />`
  }),
  args: {
    name: 'witnet-logo-dark'
  }
}
export const X: Story = {
  render: (args: any) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args" />`
  }),
  args: {
    name: 'x'
  }
}
