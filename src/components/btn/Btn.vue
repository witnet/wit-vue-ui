<template>
  <button
    class="btn w-fit flex items-center"
    :class="`btn-${classType}`"
    @mouseenter="toggleHover()"
    @mouseleave="toggleHover()"
  >
    <slot> </slot>
    <AnimatedArrow v-if="type === ButtonType.arrow" :hover="hover" />
  </button>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import AnimatedArrow from './AnimatedArrow.vue'

enum ButtonType {
  primary = 'primary',
  secondary = 'secondary',
  arrow = 'arrow'
}

const props = defineProps({
  type: {
    type: String,
    default: ButtonType.primary,
    validator(value: any) {
      return Object.values(ButtonType).includes(value)
    }
  }
})
const hover = ref(false)

function toggleHover() {
  hover.value = !hover.value
}

const classType = computed(() => {
  if (props.type === ButtonType.primary) {
    return 'primary'
  } else if (props.type === ButtonType.secondary) {
    return 'secondary'
  } else if (props.type === ButtonType.arrow) {
    return 'secondary'
  }
})
</script>

<style scoped lang="scss">
.btn-secondary {
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
