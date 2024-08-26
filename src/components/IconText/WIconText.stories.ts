import type { Meta, StoryObj } from '@storybook/vue3'
// import { fn } from '@storybook/test';
import WIconText from './WIconText.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Example/WIconText',
  component: WIconText,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    bold: {
      control: 'boolean'
    },
    rounded: {
      control: 'boolean',
      default: false
    },
    text: { control: 'text' },
    position: { control: 'select', options: ['right', 'bottom'] }
  },
  args: {
    // type: 'primary',
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    // onClick: fn(),
  }
} satisfies Meta<typeof WIconText>

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */

//  export const Default: Story = {
//   render: (args) => ({
//     components: { WIconText },
//     setup() {
//       return { args }
//     },
//     template: `
//       <WIconText v-bind="args" class="">
//         <svg width="45" height="45" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path
//             fill-rule="evenodd"
//             clip-rule="evenodd"
//             d="M18.54 0C19.896 0 21 1.104 21 2.472V24L18.42 21.72L16.968 20.376L15.432 18.948L16.068 21.168H2.46C1.104 21.168 0 20.064 0 18.696V2.472C0 1.104 1.104 0 2.46 0L18.54 0ZM13.908 15.672C16.56 15.588 17.58 13.848 17.58 13.848C17.58 9.984 15.852 6.852 15.852 6.852C14.124 5.556 12.48 5.592 12.48 5.592L12.312 5.784C14.352 6.408 15.3 7.308 15.3 7.308C14.052 6.624 12.828 6.288 11.688 6.156C10.824 6.06 9.996 6.084 9.264 6.18L9.06 6.204C8.64 6.24 7.62 6.396 6.336 6.96C5.892 7.164 5.628 7.308 5.628 7.308C5.628 7.308 6.624 6.36 8.784 5.736L8.664 5.592C8.664 5.592 7.02 5.556 5.292 6.852C5.292 6.852 3.564 9.984 3.564 13.848C3.564 13.848 4.572 15.588 7.224 15.672C7.224 15.672 7.668 15.132 8.028 14.676C6.504 14.22 5.928 13.26 5.928 13.26L6.264 13.464L6.312 13.5L6.359 13.527L6.373 13.533L6.42 13.56C6.72 13.728 7.02 13.86 7.296 13.968C7.788 14.16 8.376 14.352 9.06 14.484C9.96 14.652 11.016 14.712 12.168 14.496C12.732 14.4 13.308 14.232 13.908 13.98C14.328 13.824 14.796 13.596 15.288 13.272C15.288 13.272 14.688 14.256 13.116 14.7C13.476 15.156 13.908 15.672 13.908 15.672ZM8.328 10.068C7.644 10.068 7.104 10.668 7.104 11.4C7.104 12.132 7.656 12.732 8.328 12.732C9.012 12.732 9.552 12.132 9.552 11.4C9.564 10.668 9.012 10.068 8.328 10.068ZM12.708 10.068C12.024 10.068 11.484 10.668 11.484 11.4C11.484 12.132 12.036 12.732 12.708 12.732C13.392 12.732 13.932 12.132 13.932 11.4C13.932 10.668 13.392 10.068 12.708 10.068Z"
//             fill="#000"
//           />
//         </svg>
//       </WIconText>`
//   }),
//   args: {
//     link: '#',
//     position: 'bottom',
//     text: 'Text',
//   }
// }
export const Bottom: Story = {
  render: (args) => ({
    components: { WIconText },
    setup() {
      return { args }
    },
    template: `
      <WIconText v-bind="args" class="">
        <svg width="45" height="45" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.54 0C19.896 0 21 1.104 21 2.472V24L18.42 21.72L16.968 20.376L15.432 18.948L16.068 21.168H2.46C1.104 21.168 0 20.064 0 18.696V2.472C0 1.104 1.104 0 2.46 0L18.54 0ZM13.908 15.672C16.56 15.588 17.58 13.848 17.58 13.848C17.58 9.984 15.852 6.852 15.852 6.852C14.124 5.556 12.48 5.592 12.48 5.592L12.312 5.784C14.352 6.408 15.3 7.308 15.3 7.308C14.052 6.624 12.828 6.288 11.688 6.156C10.824 6.06 9.996 6.084 9.264 6.18L9.06 6.204C8.64 6.24 7.62 6.396 6.336 6.96C5.892 7.164 5.628 7.308 5.628 7.308C5.628 7.308 6.624 6.36 8.784 5.736L8.664 5.592C8.664 5.592 7.02 5.556 5.292 6.852C5.292 6.852 3.564 9.984 3.564 13.848C3.564 13.848 4.572 15.588 7.224 15.672C7.224 15.672 7.668 15.132 8.028 14.676C6.504 14.22 5.928 13.26 5.928 13.26L6.264 13.464L6.312 13.5L6.359 13.527L6.373 13.533L6.42 13.56C6.72 13.728 7.02 13.86 7.296 13.968C7.788 14.16 8.376 14.352 9.06 14.484C9.96 14.652 11.016 14.712 12.168 14.496C12.732 14.4 13.308 14.232 13.908 13.98C14.328 13.824 14.796 13.596 15.288 13.272C15.288 13.272 14.688 14.256 13.116 14.7C13.476 15.156 13.908 15.672 13.908 15.672ZM8.328 10.068C7.644 10.068 7.104 10.668 7.104 11.4C7.104 12.132 7.656 12.732 8.328 12.732C9.012 12.732 9.552 12.132 9.552 11.4C9.564 10.668 9.012 10.068 8.328 10.068ZM12.708 10.068C12.024 10.068 11.484 10.668 11.484 11.4C11.484 12.132 12.036 12.732 12.708 12.732C13.392 12.732 13.932 12.132 13.932 11.4C13.932 10.668 13.392 10.068 12.708 10.068Z"
            fill="#000"
          />
        </svg>
      </WIconText>`
  }),
  args: {
    link: '#',
    position: 'bottom',
    text: 'Text'
  }
}

export const Right: Story = {
  render: (args) => ({
    components: { WIconText },
    setup() {
      return { args }
    },
    template: `
      <WIconText v-bind="args" class="">
        <svg width="45" height="45" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.54 0C19.896 0 21 1.104 21 2.472V24L18.42 21.72L16.968 20.376L15.432 18.948L16.068 21.168H2.46C1.104 21.168 0 20.064 0 18.696V2.472C0 1.104 1.104 0 2.46 0L18.54 0ZM13.908 15.672C16.56 15.588 17.58 13.848 17.58 13.848C17.58 9.984 15.852 6.852 15.852 6.852C14.124 5.556 12.48 5.592 12.48 5.592L12.312 5.784C14.352 6.408 15.3 7.308 15.3 7.308C14.052 6.624 12.828 6.288 11.688 6.156C10.824 6.06 9.996 6.084 9.264 6.18L9.06 6.204C8.64 6.24 7.62 6.396 6.336 6.96C5.892 7.164 5.628 7.308 5.628 7.308C5.628 7.308 6.624 6.36 8.784 5.736L8.664 5.592C8.664 5.592 7.02 5.556 5.292 6.852C5.292 6.852 3.564 9.984 3.564 13.848C3.564 13.848 4.572 15.588 7.224 15.672C7.224 15.672 7.668 15.132 8.028 14.676C6.504 14.22 5.928 13.26 5.928 13.26L6.264 13.464L6.312 13.5L6.359 13.527L6.373 13.533L6.42 13.56C6.72 13.728 7.02 13.86 7.296 13.968C7.788 14.16 8.376 14.352 9.06 14.484C9.96 14.652 11.016 14.712 12.168 14.496C12.732 14.4 13.308 14.232 13.908 13.98C14.328 13.824 14.796 13.596 15.288 13.272C15.288 13.272 14.688 14.256 13.116 14.7C13.476 15.156 13.908 15.672 13.908 15.672ZM8.328 10.068C7.644 10.068 7.104 10.668 7.104 11.4C7.104 12.132 7.656 12.732 8.328 12.732C9.012 12.732 9.552 12.132 9.552 11.4C9.564 10.668 9.012 10.068 8.328 10.068ZM12.708 10.068C12.024 10.068 11.484 10.668 11.484 11.4C11.484 12.132 12.036 12.732 12.708 12.732C13.392 12.732 13.932 12.132 13.932 11.4C13.932 10.668 13.392 10.068 12.708 10.068Z"
            fill="#000"
          />
        </svg>
      </WIconText>`
  }),
  args: {
    link: '#',
    position: 'right',
    text: 'Text',
    rounded: true,
    bold: true
  }
}
