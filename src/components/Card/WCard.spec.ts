import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import WCard from './WCard.vue'
import { CardType } from './WCard'
import AnimatedArrow from '../AnimatedArrow.vue'

describe('WCard', () => {
  it('base', () => {
    const wrapper = mount(WCard, {
      props: {
        type: CardType.base
      },
      slots: {
        default: 'Button'
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('icon', () => {
    const wrapper = mount(WCard, {
      props: {
        type: CardType.icon,
        title: 'Custom title',
        description: 'Custom description',
        url: '#url',
        urlLabel: 'Link to'
      },
      slots: {
        icon: 'WIcon'
      }
    })

    expect(wrapper.element).toMatchSnapshot()
  })

  it('link', () => {
    const wrapper = mount(WCard, {
      props: {
        type: CardType.link,
        title: 'Custom link title',
      },
      slots: {
        description: '<p>Link description</p>'
      }
    })

    const found = wrapper.findComponent(AnimatedArrow)
    expect(found.exists()).toBe(true)
  })
})
