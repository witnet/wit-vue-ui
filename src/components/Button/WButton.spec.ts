import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import WBtn from './WButton.vue'
import AnimatedArrow from './AnimatedArrow.vue'

describe('WBtn', () => {
  it('renders properly', () => {
    const wrapper = mount(WBtn, {
      slots: {
        default: '<p>Button</p>'
      }
    })

    expect(wrapper.html()).toContain('<p>Button</p>')
  })

  it('primary', () => {
    const wrapper = mount(WBtn, {
      props: {
        type: 'primary'
      },
      slots: {
        default: 'Button'
      }
    })

    expect(wrapper.text()).toContain('Button')
    expect(wrapper.classes()).toContain('btn-primary')
  })

  it('secondary', () => {
    const wrapper = mount(WBtn, {
      props: {
        type: 'secondary'
      },
      slots: {
        default: 'Button'
      }
    })

    expect(wrapper.text()).toContain('Button')
    expect(wrapper.classes()).toContain('btn-secondary')
  })

  it('arrow', () => {
    const wrapper = mount(WBtn, {
      props: {
        type: 'arrow'
      },
      slots: {
        default: 'Button'
      }
    })

    const found = wrapper.findComponent(AnimatedArrow)
    expect(found.exists()).toBe(true)
  })
})
