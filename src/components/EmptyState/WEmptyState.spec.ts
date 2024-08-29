import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import WEmptyState from './WEmptyState.vue'

describe('WEmptyState', () => {
  it('renders properly', () => {
    const wrapper = mount(WEmptyState, {
      props: {
        text: 'Empty state'
      }
    })

    expect(wrapper.element).toMatchSnapshot()
  })
})
