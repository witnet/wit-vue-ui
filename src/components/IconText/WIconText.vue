<template>
  <a
    :href="link"
    :aria-label="text"
    target="_blank"
    class="flex items-center icon-container w-fit"
    :class="{ 'flex-col': position === IconTextPosition.Bottom }"
  >
    <WIconRounded v-if="rounded" class="rounded-icon" :class="textPositionClass">
      <slot></slot>
    </WIconRounded>

    <slot v-else></slot>

    <p class="text-link text-black-950" :class="{ 'font-fold': bold }">{{ text }}</p>
  </a>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue'
import { iconTextPositions, IconTextPosition } from './WIconText'
import WIconRounded from '../IconRounded/WIconRounded.vue'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  position: {
    type: String as PropType<IconTextPosition>,
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

const textPositionClass = computed(() => {
  return {
    'mr-md': props.position === IconTextPosition.Right,
    'mb-sm': props.position === IconTextPosition.Bottom
  }
})
</script>
