<template>
  <div class="group inline relative p-[4px] -p-[4px]">
    <slot name="main"></slot>
    <div
      class="tooltip-container hidden min-w-max py-md px-md rounded-lg group-hover:inline hover:inline transition-opacity text-sm rounded-md absolute bottom-md -translate-x-[50%] mb-sm"
    >
      <slot name="tooltip"></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  bgColor: {
    type: String,
    required: true,
  },
})
</script>

<style scoped lang="scss">
.tooltip-container {
  @apply bg-[v-bind(bgColor)];
}
</style>
