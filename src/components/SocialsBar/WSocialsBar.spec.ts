import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import WSocialsBar from './WSocialsBar.vue'

describe('SocialsBar', () => {
  it('renders properly', () => {
    const wrapper = mount(WSocialsBar)

    expect(wrapper.element).toMatchSnapshot()
  })
})
