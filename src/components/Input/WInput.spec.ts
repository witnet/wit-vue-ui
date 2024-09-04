import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import WInput from './WInput.vue'
import { InputType } from './WInput'

describe('WInput', () => {
  it('base', () => {
    const wrapper = mount(WInput, {
      props: {
        type: InputType.Base,
        contentType: 'string',
        placeholder: 'Amount'
      },
    })

    expect(wrapper.element).toMatchSnapshot()
  })

  it('action', () => {
    const wrapper = mount(WInput, {
      props: {
        type: InputType.Action,
        contentType: 'email',
        placeholder: 'email@mail.com'
      },
    })

    expect(wrapper.element).toMatchSnapshot()
  })
})
