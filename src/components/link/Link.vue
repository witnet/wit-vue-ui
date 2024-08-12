<template>
  <a :href="href" :class="classes">{{ label }}</a>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  href: {
    type: String,
    required: true
  },
  underline: {
    type: Boolean,
    default: false
  },
  hover: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    required: true
  }
  // TODO: Add size
})

const classes = computed(() => {
  return {
    underline: props.underline,
    'hover:font-semibold': props.hover
  }
})
</script>
