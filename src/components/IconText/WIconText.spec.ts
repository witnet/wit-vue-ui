import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import WIconText from './WIconText.vue'
import WIconRounded from '../IconRounded/WIconRounded.vue'

describe.only('WIconText', () => {
  it('renders properly NOT ROUNDED BOTTOM', () => {
    const wrapper = mount(WIconText, {
      props: {
        link: '#',
        position: 'bottom',
        text: 'Text',
        bold: false,
        rounded: false
      },
      slots: {
        default: `
          <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.54 0C19.896 0 21 1.104 21 2.472V24L18.42 21.72L16.968 20.376L15.432 18.948L16.068 21.168H2.46C1.104 21.168 0 20.064 0 18.696V2.472C0 1.104 1.104 0 2.46 0L18.54 0ZM13.908 15.672C16.56 15.588 17.58 13.848 17.58 13.848C17.58 9.984 15.852 6.852 15.852 6.852C14.124 5.556 12.48 5.592 12.48 5.592L12.312 5.784C14.352 6.408 15.3 7.308 15.3 7.308C14.052 6.624 12.828 6.288 11.688 6.156C10.824 6.06 9.996 6.084 9.264 6.18L9.06 6.204C8.64 6.24 7.62 6.396 6.336 6.96C5.892 7.164 5.628 7.308 5.628 7.308C5.628 7.308 6.624 6.36 8.784 5.736L8.664 5.592C8.664 5.592 7.02 5.556 5.292 6.852C5.292 6.852 3.564 9.984 3.564 13.848C3.564 13.848 4.572 15.588 7.224 15.672C7.224 15.672 7.668 15.132 8.028 14.676C6.504 14.22 5.928 13.26 5.928 13.26L6.264 13.464L6.312 13.5L6.359 13.527L6.373 13.533L6.42 13.56C6.72 13.728 7.02 13.86 7.296 13.968C7.788 14.16 8.376 14.352 9.06 14.484C9.96 14.652 11.016 14.712 12.168 14.496C12.732 14.4 13.308 14.232 13.908 13.98C14.328 13.824 14.796 13.596 15.288 13.272C15.288 13.272 14.688 14.256 13.116 14.7C13.476 15.156 13.908 15.672 13.908 15.672ZM8.328 10.068C7.644 10.068 7.104 10.668 7.104 11.4C7.104 12.132 7.656 12.732 8.328 12.732C9.012 12.732 9.552 12.132 9.552 11.4C9.564 10.668 9.012 10.068 8.328 10.068ZM12.708 10.068C12.024 10.068 11.484 10.668 11.484 11.4C11.484 12.132 12.036 12.732 12.708 12.732C13.392 12.732 13.932 12.132 13.932 11.4C13.932 10.668 13.392 10.068 12.708 10.068Z"
              fill="#ccc"
              class="social-icon"
            />
          </svg>
        `
      }
    })

    expect(wrapper.element).toMatchSnapshot()
  })

  it('renders properly ROUNDED RIGHT', () => {
    const wrapper = mount(WIconText, {
      props: {
        link: '#',
        position: 'right',
        text: 'Text',
        bold: true,
        rounded: true
      },
      slots: {
        default: `
          <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.54 0C19.896 0 21 1.104 21 2.472V24L18.42 21.72L16.968 20.376L15.432 18.948L16.068 21.168H2.46C1.104 21.168 0 20.064 0 18.696V2.472C0 1.104 1.104 0 2.46 0L18.54 0ZM13.908 15.672C16.56 15.588 17.58 13.848 17.58 13.848C17.58 9.984 15.852 6.852 15.852 6.852C14.124 5.556 12.48 5.592 12.48 5.592L12.312 5.784C14.352 6.408 15.3 7.308 15.3 7.308C14.052 6.624 12.828 6.288 11.688 6.156C10.824 6.06 9.996 6.084 9.264 6.18L9.06 6.204C8.64 6.24 7.62 6.396 6.336 6.96C5.892 7.164 5.628 7.308 5.628 7.308C5.628 7.308 6.624 6.36 8.784 5.736L8.664 5.592C8.664 5.592 7.02 5.556 5.292 6.852C5.292 6.852 3.564 9.984 3.564 13.848C3.564 13.848 4.572 15.588 7.224 15.672C7.224 15.672 7.668 15.132 8.028 14.676C6.504 14.22 5.928 13.26 5.928 13.26L6.264 13.464L6.312 13.5L6.359 13.527L6.373 13.533L6.42 13.56C6.72 13.728 7.02 13.86 7.296 13.968C7.788 14.16 8.376 14.352 9.06 14.484C9.96 14.652 11.016 14.712 12.168 14.496C12.732 14.4 13.308 14.232 13.908 13.98C14.328 13.824 14.796 13.596 15.288 13.272C15.288 13.272 14.688 14.256 13.116 14.7C13.476 15.156 13.908 15.672 13.908 15.672ZM8.328 10.068C7.644 10.068 7.104 10.668 7.104 11.4C7.104 12.132 7.656 12.732 8.328 12.732C9.012 12.732 9.552 12.132 9.552 11.4C9.564 10.668 9.012 10.068 8.328 10.068ZM12.708 10.068C12.024 10.068 11.484 10.668 11.484 11.4C11.484 12.132 12.036 12.732 12.708 12.732C13.392 12.732 13.932 12.132 13.932 11.4C13.932 10.668 13.392 10.068 12.708 10.068Z"
              fill="#ccc"
              class="social-icon"
            />
          </svg>
        `
      }
    })

    expect(wrapper.element).toMatchSnapshot()
  })

  it('renders a WIconRounded component when prop ROUNDED is TRUE', () => {
    const wrapper = mount(WIconText, {
      props: {
        rounded: true,
        link: '#',
        position: 'bottom',
        text: 'Text'
      },
      slots: {
        default: `
          <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.54 0C19.896 0 21 1.104 21 2.472V24L18.42 21.72L16.968 20.376L15.432 18.948L16.068 21.168H2.46C1.104 21.168 0 20.064 0 18.696V2.472C0 1.104 1.104 0 2.46 0L18.54 0ZM13.908 15.672C16.56 15.588 17.58 13.848 17.58 13.848C17.58 9.984 15.852 6.852 15.852 6.852C14.124 5.556 12.48 5.592 12.48 5.592L12.312 5.784C14.352 6.408 15.3 7.308 15.3 7.308C14.052 6.624 12.828 6.288 11.688 6.156C10.824 6.06 9.996 6.084 9.264 6.18L9.06 6.204C8.64 6.24 7.62 6.396 6.336 6.96C5.892 7.164 5.628 7.308 5.628 7.308C5.628 7.308 6.624 6.36 8.784 5.736L8.664 5.592C8.664 5.592 7.02 5.556 5.292 6.852C5.292 6.852 3.564 9.984 3.564 13.848C3.564 13.848 4.572 15.588 7.224 15.672C7.224 15.672 7.668 15.132 8.028 14.676C6.504 14.22 5.928 13.26 5.928 13.26L6.264 13.464L6.312 13.5L6.359 13.527L6.373 13.533L6.42 13.56C6.72 13.728 7.02 13.86 7.296 13.968C7.788 14.16 8.376 14.352 9.06 14.484C9.96 14.652 11.016 14.712 12.168 14.496C12.732 14.4 13.308 14.232 13.908 13.98C14.328 13.824 14.796 13.596 15.288 13.272C15.288 13.272 14.688 14.256 13.116 14.7C13.476 15.156 13.908 15.672 13.908 15.672ZM8.328 10.068C7.644 10.068 7.104 10.668 7.104 11.4C7.104 12.132 7.656 12.732 8.328 12.732C9.012 12.732 9.552 12.132 9.552 11.4C9.564 10.668 9.012 10.068 8.328 10.068ZM12.708 10.068C12.024 10.068 11.484 10.668 11.484 11.4C11.484 12.132 12.036 12.732 12.708 12.732C13.392 12.732 13.932 12.132 13.932 11.4C13.932 10.668 13.392 10.068 12.708 10.068Z"
              fill="#ccc"
              class="social-icon"
            />
          </svg>
        `
      }
    })

    expect(wrapper.findComponent(WIconRounded)).toBeTruthy()
  })
})
