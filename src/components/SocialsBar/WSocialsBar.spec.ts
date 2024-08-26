import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import SocialsBar from './WSocialsBar.vue'

describe('SocialsBar', () => {
  it('renders properly', () => {
    const wrapper = mount(SocialsBar)

    expect(wrapper.element).toMatchSnapshot()
  })
})
