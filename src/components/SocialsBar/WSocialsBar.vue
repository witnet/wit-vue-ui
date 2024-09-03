<template>
  <div
    class="opacity-60 hover:opacity-100 grid grid-rows-1 grid-flow-row content-center gap-y-md w-fit justify-items-center"
  >
    <IconExternalLink :url="SOCIAL_URLS.x">
      <WIcon :name="IconName.X" class="icon h-auto w-md" />
    </IconExternalLink>
    <IconExternalLink :url="SOCIAL_URLS.telegram">
      <WIcon :name="IconName.Telegram" class="icon h-auto w-md" />
    </IconExternalLink>
    <IconExternalLink :url="SOCIAL_URLS.discord">
      <WIcon :name="IconName.Discord" class="icon h-auto w-md" />
    </IconExternalLink>
    <IconExternalLink :url="SOCIAL_URLS.github">
      <WIcon :name="IconName.Github" class="icon h-auto w-md" />
    </IconExternalLink>

    <!-- TODO(#413): set width to 40px to avoid wrong alignment -->
    <div class="flex mt-3xl w-xl">
      <p class="text-sm font-light text-white-400 [writing-mode:vertical-lr] -rotate-180 subtitle">
        Enjoy Smart, Neutral,
      </p>
      <p class="text-sm font-light text-white-400 [writing-mode:vertical-lr] -rotate-180 subtitle">
        and Secure Data
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import WIcon from '../icon/WIcon.vue'
import { IconName } from '../icon/WIcon'
import IconExternalLink from './IconExternalLink.vue'
import { SOCIAL_URLS } from './WSocialsBar'
</script>
