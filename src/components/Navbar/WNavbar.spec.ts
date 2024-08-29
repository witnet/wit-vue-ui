import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import WNavbar from './WNavbar.vue'

describe('WNavbar', () => {
  const wrapper = mount(WNavbar, {
    props: {
      navLinks: [
        {
          key: 'stake',
          active: false,
          to: '/stake',
          rel: 'stake',
          locale: 'Stake'
        },
        {
          key: 'buy',
          active: false,
          to: '/buy',
          rel: 'buy',
          locale: 'Buy'
        },
        {
          key: 'build',
          active: true,
          to: '/build',
          rel: 'build',
          locale: 'Build'
        }
      ],
      redirectionActive: false
    }
  })
  it('renders properly the component', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
