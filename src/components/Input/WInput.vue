<template>
  <div class="flex">
    <input
      :type="contentType"
      :placeholder="placeholder"
      :name="contentType"
      :class="{ [`[&&]:border-black-950 border-2`]: outlined, [`[&&]:rounded-l-full [&&]:rounded-none`]: isActionInput }"
      class="text-black-950 outline-none border-white-50 required email rounded-full border min-w-[300px] sm:min-w-full py-sm px-md block w-full shadow-sm text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
      value=""
    />
    <input
      v-if="isActionInput"
      @click="action"
      type="submit"
      :name="actionLabel"
      class="text-wit-blue-500 margin rounded-r-full py-sm px-md inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-black-950 bg-black-950 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
      :value="actionLabel"
    />
  </div>
</template>

<script setup lang="ts">
import { PropType, computed } from 'vue'
import { inputTypes, InputType } from './WInput'

const props = defineProps({
  type: {
    type: String as PropType<InputType>,
    default: InputType.Base,
    validator(value: InputType) {
      return inputTypes.includes(value)
    }
  },
  outlined: {
    type: Boolean,
    default: false,
  },
  contentType: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: null,
  },
  actionLabel: {
    type: String,
    required: false,
  }
})
const emit = defineEmits(['action'])
const isActionInput = computed(() => props.type === InputType.Action)
function action() {
  emit('action')
}
</script>
