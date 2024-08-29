import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import WLoadingPlaceholder from './WLoadingPlaceholder.vue'

describe('WLoadingPlaceholder', () => {
  it('renders properly', () => {
    const wrapper = mount(WLoadingPlaceholder, {
      props: {
        height: '100px',
        width: '150px',
        borderRadius: '8%'
      }
    })

    expect(wrapper.element).toMatchSnapshot()
  })
})
