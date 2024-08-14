<template>
  <div ref="arrow">
    <IconRightArrow class="arrow ml-md h-[14px]"></IconRightArrow>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { computed, ref, watch } from 'vue'

import IconRightArrow from '../icons/IconRightArrow.vue'

// import ArrowRightIcon from '@/assets/svg/arrow_right.svg?component'
const arrow = ref(null)

const props = defineProps({
  hover: {
    type: Boolean,
    default: false
  }
})

const hover = computed(() => props.hover)

watch(hover, (value) => {
  if (value) {
    gsap.to(arrow.value, {
      translateX: 8,
      ease: 'circ.out',
      yoyo: true,
      repeat: -1
    })
  } else {
    gsap.killTweensOf(arrow.value)
    gsap.to(arrow.value, {
      translateX: 0
    })
  }
})
</script>
