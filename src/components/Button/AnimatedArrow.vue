<template>
  <div ref="arrow">
    <WIcon :name="IconName.RightArrow" class="arrow ml-md h-[14px]" :color="color"></WIcon>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { computed, ref, watch } from 'vue'

import WIcon from '../icon/WIcon.vue'
import { IconName } from '../icon/WIcon'

const arrow = ref(null)

const props = defineProps({
  hover: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: '#fff'
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
