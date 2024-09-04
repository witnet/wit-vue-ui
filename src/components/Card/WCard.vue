<template>
  <div v-if="isLinkCard">
    <a
      :href="url"
      :aria-label="title"
      target="_blank"
      class="cursor-pointer"
      @mouseenter="toggleHover"
      @mouseleave="toggleHover"
    >
      <BaseCard :title="title" :hover="hover" :link="true">
        <template #description>
          <slot name="description"></slot>
        </template>
      </BaseCard>
    </a>
  </div>
  <div v-if="isBaseCard">
    <BaseCard :hover="hover">
      <template #header><slot name="header"></slot></template>
      <template #description>
        <slot name="description"></slot>
      </template>
    </BaseCard>
  </div>
  <div
    v-if="isIconCard"
    class="h-full w-auto out-of-boundaries card border-2 border-black-950 bg-white-50 rounded-lg px-xl py-xl max-w-sm"
  >
    <WIconRounded class="rounded-icon" :size="90" :disableHoverEffect="true">
      <slot name="icon">Icon</slot>
    </WIconRounded>
    <div class="ml-xl px-sm">
      <h3 class="text-2xl text-black-950 font-semibold leading-4 pl-14">
        {{ title }}
      </h3>
      <hr class="hr my-md ml-14" />
    </div>
    <p class="text text-black-950 mb-lg">
      {{ description }}
    </p>

    <SlashesIcon class="slashes w-2xl sm:hidden"></SlashesIcon>
    <a :href="url" :aria-label="urlLabel" target="_blank">
      <WButton class="action" type="arrow">{{ urlLabel }}</WButton>
    </a>
  </div>
</template>

<script setup lang="ts">
import { cardTypes, CardType } from './WCard.ts'
import { PropType, computed, ref } from 'vue'

import SlashesIcon from '@/assets/svg/slashes.svg?component'
import WButton from '../Button/WButton.vue'
import WIconRounded from '../IconRounded/WIconRounded.vue'
import BaseCard from './BaseCard.vue'
const hover = ref(false)
const props = defineProps({
  type: {
    type: String as PropType<CardType>,
    default: CardType.Base,
    validator(value: CardType) {
      return cardTypes.includes(value)
    }
  },
  title: {
    type: String,
    default: 'Title'
  },
  description: {
    type: String,
    default: 'Description'
  },
  urlLabel: {
    type: String,
    required: false
  },
  url: {
    type: String,
    required: false
  }
})
const isIconCard = computed(() => props.type === CardType.Icon)
const isLinkCard = computed(() => props.type === CardType.Link)
const isBaseCard = computed(() => props.type === CardType.Base)
function toggleHover() {
  hover.value = !hover.value
}
</script>

<style scoped lang="scss">
.out-of-boundaries {
  // add margin equal to out of boundaries
  margin: 15px 30px 25px 15px;
}

.rounded-icon {
  position: absolute;
  top: -15px;
  left: -15px;
}

.action {
  position: absolute;
  right: -30px;
  bottom: 16px;
}

.slashes {
  position: absolute;
  bottom: 32px;
}

.card {
  box-shadow: 7px 10px 0px rgb(0, 0, 0);
  position: relative;
}

.title-h2 {
  font-weight: bold;
}

.hr {
  height: 3px; /* Modern Browsers */
  @apply bg-black-950;
}

.circle {
  line-height: 1;
  font-size: 24px;
  height: 48px;
  min-width: 48px;
  align-content: center;
  text-align: center;
  @apply bg-wit-blue-500;
}
</style>
