<template>
  <div :class="`w-full h-full ${frameClasses}`">
    <div
      :class="`content p-[100px] m-[0_auto] max-w-[1100px] w-full sm:p-[70px_32px] xs:p-[70px_16px] z-50 ${contentClasses}`"
    >
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  frameClasses: {
    type: String,
    default: ''
  },
  contentClasses: {
    type: String,
    default: ''
  }
})
</script>
