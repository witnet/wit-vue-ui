import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import WSelect from './WSelect.vue'
import { DropdownPosition } from './WSelect'
import Icon from '@/assets/svg/navigation-cursor.svg?component'

describe('WSelect', () => {
  it('renders properly', () => {
    const wrapper = mount(WSelect, {
      emits: ['update:modelValue'],
      props: {
        dropdownPosition: DropdownPosition.bottom,
        modelValue: {
          key: 'en',
          label: 'English',
          icon: null
        },
        'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e }),
        options: [{
            key: 'en',
            label: 'English',
            icon: null
          },{
            key: 'es',
            label: 'Español',
            icon: null,
          }
        ]
      },
    })

    expect(wrapper.element).toMatchSnapshot()
  })

  it('renders properly an icon when provided', () => {
    const wrapper = mount(WSelect, {
      emits: ['update:modelValue'],
      props: {
        dropdownPosition: DropdownPosition.bottom,
        modelValue: {
          key: 'en',
          label: 'English',
          icon: Icon
        },
        'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e }),
        options: [{
            key: 'en',
            label: 'English',
            icon: Icon
          },{
            key: 'es',
            label: 'Español',
            icon: Icon,
          }
        ]
      },
    })

    expect(wrapper.element).toMatchSnapshot()
  })
})
