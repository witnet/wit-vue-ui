import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Btn from './Button.vue'
import AnimatedArrow from './AnimatedArrow.vue'

describe('Btn', () => {
  it('renders properly', () => {
    const wrapper = mount(Btn, {
      slots: {
        default: '<p>Button</p>'
      }
    })

    expect(wrapper.html()).toContain('<p>Button</p>')
  })

  it('primary', () => {
    const wrapper = mount(Btn, {
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
    const wrapper = mount(Btn, {
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
    const wrapper = mount(Btn, {
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
