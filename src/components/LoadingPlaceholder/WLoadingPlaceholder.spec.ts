import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import WLoadingPlaceholder from './WLoadingPlaceholder.vue'

describe('WLoadingPlaceholder', () => {
  it('renders properly', () => {
    const wrapper = mount(WLoadingPlaceholder, {
      props: {
        text: 'Empty state',
      },
    })

    expect(wrapper.element).toMatchSnapshot()
  })
})