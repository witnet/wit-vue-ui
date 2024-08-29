<template>
  <div role="status" class="spinner">
    <Spinner
      aria-hidden="true"
      class="w-full h-full text-gray-100 animate-spin fill-wit-blue-500"
    />
    <span class="sr-only">Loading...</span>
  </div>
</template>
<script lang="ts" setup>
import Spinner from '@/assets/svg/spinner.svg?component'
defineProps({
  size: {
    type: String,
    default: '40px'
  }
})
</script>

<style lang="scss">
.spinner {
  width: v-bind(size);
  height: auto;
}
</style>
