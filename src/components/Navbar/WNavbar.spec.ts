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
  it('renders properly first link', () => {
    expect(wrapper.html()).toContain('<a href="#stake"')
  })
  it('renders properly second link', () => {
    expect(wrapper.html()).toContain('<a href="#buy"')
  })
  it('renders properly third link', () => {
    expect(wrapper.html()).toContain('<a href="#build"')
  })
  it('renders properly pointer icon when active', () => {
    expect(wrapper.html())
      .toContain(`<li class="nav-link"><a href="#build" class="text font-[500] flex cursor-pointer sm:text-white-50 relative p-[8px] m-[-8px] pl-[16px]">
          <transition-stub name="fade" appear="false" persisted="false" css="true"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" fill="none" viewBox="0 0 12 13" class="w-sm h-auto absolute top-[16px] left-[4px]">
              <path fill="#00E2ED" d="M11.17 6.39 5.89 9.44.61 12.48V.29l5.28 3.05z"></path>
            </svg></transition-stub><span></span><span class="slash text-wit-blue-500">/</span>Build
        </a></li>`)
  })
})
