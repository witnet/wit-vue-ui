<template>
  <WSection :frame-classes="'bg-black-950'" :content-classes="'grid justify-items-center'">
    <template #content>
      <div class="footer grid gap-xl">
        <div class="grid grid-cols-[max-content_1fr] md:grid-cols-1 gap-3xl">
          <div
            class="grid grid-cols-[max-content_max-content_max-content] gap-3xl sm:gap-xl sm:grid-cols-2 justify-items-start"
          >
            <div
              v-for="section in footerSections"
              :key="section.title"
              class="py-2 flex flex-col gap-sm"
            >
              <p class="title font-bold footer-text mb-sm">
                {{ section.title }}
              </p>
              <ul class="py-2 flex flex-col gap-sm">
                <li v-for="link in section.links" :key="link.label" class="link-list-item">
                  <a
                    class="link footer-text"
                    :href="link.url"
                    :data-text="link.label"
                    target="_blank"
                  >
                    {{ link.label }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="w-full grid gap-md xs:mt-lg">
            <AdoIcon class="mb-2 w-[50px] h-auto" />
            <p class="footer-text">
              {{ adoDescription
              }}<a class="py-1 underline footer-text" :href="ADO_URL" target="_blank">
                theado.org
              </a>
            </p>
          </div>
        </div>
        <div
          class="grid grid-cols-[max-content_max-content_1fr] sm:grid-cols-1 align-middle gap-lg pt-xl items-center"
        >
          <WitOracleIcon class="w-[140px] h-auto white" name="witnet_dark" />
          <div class="h-max self-center">
            <p class="flex gap-xs copyright max-w-100 footer-text">
              © <span>2018-{{ new Date().getFullYear() }}</span>
              <slot name="custom-contributors">
                <span>
                  by <a :href="WITNET_FOUNDATION_URL" target="_blank"> Witnet Foundation </a> and
                  individual contributors.
                </span>
              </slot>
            </p>
            <p class="copyright max-w-100 footer-text">
              <slot name="custom-license">
                <span>
                  Content available under a
                  <a :href="CREATIVE_COMMONS_URL" target="_blank"> Creative Commons License </a>
                  .
                </span>
              </slot>
            </p>
          </div>
          <!-- <client-only>
            <LanguageSwitcher class="justify-self-end self-center" />
          </client-only> -->
        </div>
      </div>
    </template>
  </WSection>
</template>

<script setup lang="ts">
import AdoIcon from '@/assets/svg/ado.svg?component'
import WitOracleIcon from '@/assets/svg/witnet-logo-dark.svg?component'
import { FooterSection } from './WFooter'
import WSection from '@/components/Section/WSection.vue'
import { PropType } from 'vue'

const ADO_URL = 'https://github.com/adoracles/'
const WITNET_FOUNDATION_URL = 'https://witnet.foundation'
const CREATIVE_COMMONS_URL = 'https://creativecommons.org/publicdomain/zero/1.0/'

defineProps({
  footerSections: {
    type: Object as PropType<FooterSection[]>,
    required: true
  },
  adoDescription: {
    type: String,
    default: `Witnet is part of the Alliance of Decentralized Oracles (ADO), a joint effort by leading decentralized oracle solutions to make the life of smart contract developers easier by creating oracle standards. Learn more about the ADO at`
  }
})
</script>
