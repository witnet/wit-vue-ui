import type { Meta, StoryObj } from '@storybook/vue3'
import WSelect from './WSelect.vue'
import {
  DropdownXPosition,
  dropdownXPositions,
  DropdownYPosition,
  dropdownYPositions
} from './WSelect'
import { ref } from 'vue'
import 'vue-select/dist/vue-select.css'
import Icon from '@/assets/svg/navigation-cursor.svg?component'

const meta: any = {
  title: 'Example/WSelect',
  component: WSelect,
  tags: ['autodocs'],
  argTypes: {
    dropdownYPosition: { control: 'select', options: dropdownYPositions },
    dropdownXPosition: { control: 'select', options: dropdownXPositions }
  },
  args: {
    dropdownXPosition: DropdownXPosition.Right,
    dropdownYPosition: DropdownYPosition.Bottom,
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
} satisfies Meta<typeof WSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => ({
    components: { WSelect },
    setup() {
      const model = ref({
        key: 'en',
        label: 'English',
        icon: null
      })

      function update($event: any) {
        model.value = $event
      }

      return { args, model, update }
    },
    template: `<div class="h-[200px] flex justify-center items-center"><div class="h-max"><WSelect class="absolute top-xs" v-bind="args" v-model="model" @update:model-value="update" /></div></div>`,
    args: {
      dropdownXPosition: DropdownXPosition.Right,
      dropdownYPosition: DropdownYPosition.Bottom,
      options: [
        {
          key: 'en',
          label: 'English',
          icon: null
        },
        {
          key: 'es',
          label: 'Español',
          icon: Icon
        }
      ]
    }
  })
}
