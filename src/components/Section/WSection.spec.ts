import { describe, it, expect } from 'vitest'
import { h } from 'vue'
import { mount } from '@vue/test-utils'
import WSection from './WSection.vue'

describe('WSection', () => {
  it('renders properly', () => {
    const wrapper = mount(WSection, {
      props: {
        frameClasses: 'bg-black-950',
        contentClasses: 'grid justify-items-center',
      },
      slots: {
        content: h('p', 'Section content')
      }
    })

    expect(wrapper.element).toMatchSnapshot()
  })
})