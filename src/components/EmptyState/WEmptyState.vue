<template>
  <div class="grid gap-md justify-center align-middle">
    <EmptyStateLogo class="w-max" />
    <p>{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
import EmptyStateLogo from '@/assets/svg/empty-state.svg?component'
defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>
