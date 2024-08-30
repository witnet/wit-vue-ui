<template>
  <div class="border border-black-950 w-min rounded-full p-md bg-wit-blue-500">
    <div class="icon-container flex justify-center items-center">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
defineProps({
  iconSize: {
    type: String,
    required: true,
  }
})
</script>

<style>
.icon-container {
  @apply min-h-[v-bind(iconSize)] min-w-[v-bind(iconSize)]
}
</style>