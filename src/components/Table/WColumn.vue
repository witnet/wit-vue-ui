<template>
  <a
    v-if="url"
    :href="url ?? ''"
    target="_blank"
    class="text-wit-blue-600 dark:text-wit-blue-500 hover:underline"
    :class="{ 'truncate block [&&]:max-w-[400px]': truncate }"
  >
    {{ value ?? 'unknown' }} <span v-if="!truncate">></span>
  </a>
  <p v-else-if="chips" class="grid grid-cols-[max-content_max-content] w-max">
    <span
      v-for="(chip, index) in chips"
      :key="index"
      :class="chip.color"
      class="text-sm text-white-50 dark:text-white-50 rounded-full py-xs px-sm m-xs w-max"
    >
      {{ chip.label }}
    </span>
  </p>
  <span v-else :class="{ 'truncate block [&&]:max-w-[400px]': truncate }">
    {{ value }}
  </span>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { Chip } from './WTable'

defineProps({
  url: {
    type: String,
    default: null
  },
  truncate: {
    type: Boolean,
    default: null
  },
  chips: {
    type: Object as PropType<Chip[]>,
    default: null
  },
  value: {
    type: [String, Number],
    default: null
  }
})
</script>
