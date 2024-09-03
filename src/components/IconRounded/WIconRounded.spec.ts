import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import WIconRounded from './WIconRounded.vue'

describe('WIconRounded', () => {
  it('renders properly', () => {
    const wrapper = mount(WIconRounded, {
      slots: {
        default: `
          <WIconRounded v-bind="args">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="email">
              <g data-name="Layer 2">
              <path
                  fill="#ccc"
                  d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm0 2-6.5 4.47a1 1 0 0 1-1 0L5 6z"
                  data-name="email"
                ></path>
              </g>
            </svg>
          </WIconRounded>
        `
      }
    })

    expect(wrapper.element).toMatchSnapshot()
  })

  it('renders the slot', () => {
    const wrapper = mount(WIconRounded, {
      slots: {
        default: `
          <WIconRounded v-bind="args">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="email">
              <g data-name="Layer 2">
              <path
                  fill="#ccc"
                  d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm0 2-6.5 4.47a1 1 0 0 1-1 0L5 6z"
                  data-name="email"
                ></path>
              </g>
            </svg>
          </WIconRounded>
        `
      }
    })

    expect(wrapper.html().replaceAll(' ', '').replaceAll('\n', '')).toContain(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="email">
          <g data-name="Layer 2">
          <path
              fill="#ccc"
              d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm0 2-6.5 4.47a1 1 0 0 1-1 0L5 6z"
              data-name="email"
            ></path>
          </g>
        </svg>
        `
        .replaceAll(' ', '')
        .replaceAll('\n', '')
    )
  })
})
