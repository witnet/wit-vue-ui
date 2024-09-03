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
    default: true
  },
  label: {
    type: String,
    required: true
  }
})

const classes = computed(() => {
  return {
    underline: props.underline,
    'hover:font-semibold': props.hover
  }
})
</script>
