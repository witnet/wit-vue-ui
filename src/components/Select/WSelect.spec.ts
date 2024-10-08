import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import WSelect from './WSelect.vue'
import { DropdownXPosition, DropdownYPosition } from './WSelect'
import Icon from '@/assets/svg/navigation-cursor.svg?component'

describe('WSelect', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(WSelect, {
      props: {
        dropdownXPosition: DropdownXPosition.Right,
        dropdownYPosition: DropdownYPosition.Bottom,
        modelValue: {
          key: 'en',
          label: 'English',
          icon: null
        },
        options: [
          {
            key: 'en',
            label: 'English',
            icon: null
          },
          {
            key: 'es',
            label: 'Español',
            icon: null
          }
        ]
      }
    })

    expect(wrapper.element).toMatchSnapshot()
  })

  it('renders properly an icon when provided', () => {
    const wrapper = shallowMount(WSelect, {
      props: {
        dropdownXPosition: DropdownXPosition.Right,
        dropdownYPosition: DropdownYPosition.Bottom,
        modelValue: {
          key: 'en',
          label: 'English',
          icon: Icon
        },
        options: [
          {
            key: 'en',
            label: 'English',
            icon: Icon
          },
          {
            key: 'es',
            label: 'Español',
            icon: Icon
          }
        ]
      }
    })

    expect(wrapper.element).toMatchSnapshot()
  })
})
