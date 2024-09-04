import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import WCard from './WCard.vue'
import { CardType } from './WCard'
import AnimatedArrow from '../AnimatedArrow/AnimatedArrow.vue'

describe('WCard', () => {
  it('base', () => {
    const wrapper = mount(WCard, {
      props: {
        type: CardType.Base
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
        type: CardType.Icon,
        title: 'Lorem ipsum',
        description:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
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
        type: CardType.Link,
        title: 'Lorem ipsum'
      },
      slots: {
        description:
          '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>'
      }
    })

    const found = wrapper.findComponent(AnimatedArrow)
    expect(found.exists()).toBe(true)
  })
})
