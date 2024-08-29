import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import WSpinner from './WSpinner.vue'

describe('WSpinner', () => {
  it('renders properly', () => {
    const wrapper = mount(WSpinner)

    expect(wrapper.element).toMatchSnapshot()
  })
})