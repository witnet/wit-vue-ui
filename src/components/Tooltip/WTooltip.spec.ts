import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import WTooltip from './WTooltip.vue'

describe('WTooltip', () => {
  it('renders properly', () => {
    const wrapper = mount(WTooltip, {
      props: {
        bgColor: '#000'
      },
      slots: {
        main: `<p>Text</p>`,
        tooltip: `<p class="text-white-50">Text info</p>`
      }
    })

    expect(wrapper.element).toMatchSnapshot()
  })
})
