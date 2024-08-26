<template>
  <div
    ref="socials"
    class="opacity-60 hover:opacity-100 grid grid-rows-1 grid-flow-row content-center gap-y-md w-fit justify-items-center"
  >
    <IconExternalLink :url="socialsUrls.x">
      <IconTwitter class="icon h-auto w-md" />
    </IconExternalLink>
    <IconExternalLink :url="socialsUrls.telegram">
      <IconTelegram class="icon h-auto w-md" />
    </IconExternalLink>
    <IconExternalLink :url="socialsUrls.discord">
      <IconDiscord class="icon h-auto w-md" />
    </IconExternalLink>
    <IconExternalLink :url="socialsUrls.github">
      <IconGithub class="icon h-auto w-md" />
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
// import { ref } from 'vue'

import IconTwitter from '../icons/IconTwitter.vue'
import IconTelegram from '../icons/IconTelegram.vue'
import IconDiscord from '../icons/IconDiscord.vue'
import IconGithub from '../icons/IconGithub.vue'
import IconExternalLink from './IconExternalLink.vue'
import { socialsUrls } from './WSocialsBar'

// const socials = ref(null)
// const { gsap } = useGsap()
// onMounted(() => {
//   startAnimation()
// })
// function startAnimation() {
//   gsap.from(socials.value, {
//     yPercent: 100,
//     ease: 'power2.out',
//     opacity: 0,
//     duration: 1,
//   })
// }
</script>
