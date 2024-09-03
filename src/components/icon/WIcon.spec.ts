import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import WIcon from './WIcon.vue'
import { IconName } from './WIcon'

describe('WIcon', () => {
  it('renders the specified svg', () => {
    const wrapper = mount(WIcon, {
      props: {
        name: IconName.Github
      }
    })

    expect(wrapper.element).toMatchSnapshot()
  })
})
