import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Link from './WLink.vue'

describe('WLink', () => {
  it('renders properly', () => {
    const href = 'http://localhost:6006/'
    const label = 'Link'

    const wrapper = mount(Link, { props: { label, href } })

    expect(wrapper.text()).toContain(label)
    expect(wrapper.attributes('href')).toContain(href)
  })

  it('renders underline', () => {
    const href = 'http://localhost:6006/'
    const label = 'Link'
    const underline = true

    const wrapper = mount(Link, { props: { label, href, underline } })

    expect(wrapper.classes()).toContain('underline')
  })
})
