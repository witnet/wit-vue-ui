<template>
  <a
    :href="link"
    :aria-label="text"
    target="_blank"
    class="flex items-center icon-container w-fit"
    :class="{ 'flex-col': position === 'bottom' }"
  >
    <WIconRounded
      v-if="rounded"
      class="rounded-icon"
      :class="{ 'mr-md': position === 'right', 'mb-sm': position === 'bottom' }"
    >
      <slot></slot>
    </WIconRounded>

    <slot v-else></slot>

    <p class="text-link text-black-950" :class="{ 'font-fold': bold }">{{ text }}</p>
  </a>
</template>

<script setup lang="ts">
import { iconTextPositions } from './WIconText'
import WIconRounded from '../IconRounded/WIconRounded.vue'

defineProps({
  text: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true,
    validator(value: any) {
      return iconTextPositions.includes(value)
    }
  },
  bold: {
    type: Boolean,
    default: false
  },
  rounded: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss">
// .rounded-icon {
//   @apply bg-wit-blue-500 transition-colors;
// }
// .icon-container:hover > .rounded-icon {
//   @apply bg-wit-blue-300;
// }

// // .social-icon-color {
// //     @apply fill-black-950 !important;
// //   }
</style>
