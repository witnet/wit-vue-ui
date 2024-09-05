<template>
  <div class="group inline relative p-sm -m-sm">
    <slot name="main"></slot>
    <div
      :class="tooltipPosition"
      class="tooltip-container hidden min-w-max py-md px-md rounded-lg group-hover:inline group-hover:opacity-100 text-sm rounded-md absolute"
    >
      <slot name="tooltip"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TooltipPosition, tooltipPostions } from './WTooltip'
import { PropType, computed } from 'vue'

const props = defineProps({
  bgColor: {
    type: String,
    required: true
  },
  position: {
    type: String as PropType<TooltipPosition>,
    default: TooltipPosition.CenterTop,
    validation(value: TooltipPosition) {
      tooltipPostions.includes(value)
    }
  }
})
const tooltipStypePositions: Record<TooltipPosition, string> = {
  [TooltipPosition.CenterTop]: 'bottom-lg -translate-x-[50%]',
  [TooltipPosition.CenterBottom]: 'top-lg -translate-x-[50%]',
  [TooltipPosition.RightTop]: 'bottom-lg translate-x-[0%]',
  [TooltipPosition.RightBottom]: 'top-lg translate-x-[0%]',
  [TooltipPosition.LeftTop]: 'bottom-lg -translate-x-[100%]',
  [TooltipPosition.LeftBottom]: 'top-lg -translate-x-[100%]'
}
const tooltipPosition = computed(() => {
  return tooltipStypePositions[props.position]
})
</script>

<style scoped lang="scss">
.tooltip-container {
  @apply bg-[v-bind(bgColor)];
}
</style>
