<template>
  <div
  class="card border rounded-lg px-xl py-xl mr-sm mb-sm max-w-md h-full"
>
  <div class="flex justify-between items-center">
    <h3 class="text-xl text-black-950 font-semibold leading-4">
      {{ title }}
    </h3>
    <AnimatedArrow v-if="link" :hover="hover" color="#C6C6C6" />
  </div>
  <hr class="hr my-md" />
  <slot name="description" class="text-sm text-black-950"></slot>
</div>
</template>
<script setup lang="ts">
import AnimatedArrow from '../AnimatedArrow/AnimatedArrow.vue'
defineProps({
  title: {
    type: String,
    required: true,
  },
  hover: {
    type: Boolean,
    required: true,
  },
  link: {
    type: Boolean,
    default: false
  }
})
</script>
<style lang="scss" scoped>
.hr {
  height: 3px; /* Modern Browsers */
  @apply bg-black-950;
}

</style>