<template>
  <a :aria-label="url" class="link" :href="url" target="_blank">
    <slot></slot>
  </a>
</template>
<script setup lang="ts">
defineProps({
  url: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss">
.icon {
  .social-icon {
    @apply fill-white-400 transition-all;
  }
}
.icon:hover > .social-icon {
  @apply fill-white-500;
}
</style>
