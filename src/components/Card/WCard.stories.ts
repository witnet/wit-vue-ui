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
    type: CardType.Base
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
    template: `<WCard v-bind="args"><template #header><h3>Lorem ipsum</h3></template><template #description>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</template></WCard>`
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
    template: `<WCard v-bind="args"><template #icon><svg
          xmlns="http://www.w3.org/2000/svg"
          width="61"
          height="56"
          fill="none"
          viewBox="0 0 61 56"
          class="icon"
          data-v-0d0885e7=""
        >
          <path
            fill="#1D1D1B"
            d="M28.59 46.94c-.43.43-.91.83-1.42 1.18a23 23 0 0 1-3.12 1.97c-2.17 1.1-4.46 1.93-6.87 2.41-.59.12-1.18.24-1.78.32l-.91.12-.43.04-.43.04-.91.08-.91.04c-.59.04-1.22.04-1.82.08-1.78 0-3.55-.08-5.33-.24.2-.28.39-.59.59-.91.55-.87 1.07-1.82 1.54-2.76.87-1.89 1.54-3.87 2.09-5.84.51-1.93 1.14-3.79 1.85-5.68s1.54-3.71 2.49-5.48c-.67.75-1.26 1.58-1.82 2.45-.55.83-1.1 1.74-1.58 2.6-.99 1.78-1.85 3.67-2.53 5.56-.71 1.85-1.46 3.71-2.37 5.41s-2.01 3.28-3.28 4.77l-1.3 1.58 2.05.28c2.53.36 5.09.55 7.66.47.63-.04 1.3-.04 1.93-.12l.95-.08.95-.12c.63-.08 1.26-.24 1.89-.32.63-.16 1.26-.28 1.89-.47.63-.16 1.22-.39 1.85-.59.59-.24 1.22-.47 1.82-.75 1.18-.51 2.33-1.18 3.39-1.89s2.05-1.54 2.96-2.49c.87-.95 1.66-1.93 2.21-3.08-.43.55-.87 1.03-1.34 1.42m14.16-34.06c.71-.71 1.66-1.1 2.68-1.1s1.93.36 2.68 1.1a3.84 3.84 0 0 1 0 5.37c-1.46 1.46-3.87 1.46-5.37 0-.71-.71-1.1-1.66-1.1-2.68s.39-1.97 1.1-2.68m2.7 8.75c1.58 0 3.12-.59 4.3-1.78a6.14 6.14 0 0 0 0-8.64 6.09 6.09 0 0 0-8.6 0 6.07 6.07 0 0 0-1.78 4.3c0 1.62.63 3.16 1.78 4.3a5.95 5.95 0 0 0 4.3 1.82m1.77 8.76c-8.72 7.69-12.35 8.4-15.98 6.75l3.95-4.97c.59-.71.99-1.58 1.22-2.49l1.58-6.67-6.63 1.58c-.91.24-1.78.63-2.49 1.22l-4.97 3.95c-1.7-3.63-.95-7.26 6.71-15.98C37.82 5.54 53.13 3.65 57.67 3.25c-.36 4.54-2.25 19.89-10.5 27.15m-5.8 11.92c-.08.36-.28.71-.59.91-.91.63-2.33 1.5-3.59 2.29l.08-.24c.59-2.41.59-4.26 0-5.52 1.66-.51 3.43-1.42 5.45-2.8-.51 1.85-1.07 4.06-1.34 5.37zm-13.77-4.3c-.51.67-1.34 1.03-2.17.99h-2.01l6.87-8.29L22 37.59v-2.01c-.04-.83.32-1.66.99-2.17l7.26-5.76c.47-.36 1.03-.63 1.58-.79l2.96-.71-.71 2.96c-.16.59-.39 1.14-.79 1.62l-5.68 7.3zM15.76 23.74l-.24.08c.75-1.26 1.62-2.68 2.25-3.59.2-.32.55-.51.91-.59 1.3-.28 3.51-.83 5.37-1.3-1.38 2.01-2.29 3.83-2.8 5.48-1.22-.71-3.08-.71-5.48-.08zM58.89.85c-.83.04-20.87.95-30.07 11.4-.87.99-1.7 2.01-2.53 3.04-1.34.36-6 1.62-8.05 2.05-.95.2-1.82.75-2.37 1.58-1.42 2.05-3.87 6.27-3.95 6.43l-1.78 3.04 3.24-1.42c2.13-.91 5.68-1.85 6.94-1.1.2.12.43.36.47.95.04 1.5.43 2.96 1.18 4.42l-.43.36c-1.22.99-1.93 2.49-1.85 4.06v5.64h5.64c1.58.08 3.08-.63 4.06-1.85l.36-.43c1.46.75 2.92 1.18 4.42 1.18.59.04.79.24.95.47.79 1.26-.16 4.85-1.1 6.98l-1.42 3.24 3.04-1.78c.2-.12 4.38-2.56 6.43-3.99.79-.55 1.34-1.38 1.54-2.37.43-2.05 1.7-6.75 2.05-8.09.95-.75 1.93-1.62 3-2.56 10.42-9.19 11.36-29.28 11.4-30.11L60.1.73l-1.22.12z"
          ></path>
        </svg></template></template></WCard>`
  }),
  args: {
    type: 'icon',
    title: 'Lorem ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
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
    template: `<WCard v-bind="args"><template #description>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</template></WCard>`
  }),
  args: {
    type: 'link',
    title: 'Lorem ipsum'
  }
}
