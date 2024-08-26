<template>
  <nav class="flex items-center gap-xs" aria-label="Pagination">
    <button
      type="button"
      :disabled="data.isFirstPage"
      @click="data.prev"
      :class="{
        'opacity-50': data.isFirstPage,
        'pointer-events-none': data.isFirstPage
      }"
      class="min-h-[38px] min-w-[38px] py-sm px-sm inline-flex justify-center items-center gap-sm text-sm rounded-lg hover:bg-wit-blue-400 focus:outline-none"
      aria-label="Previous"
    >
      <svg
        class="shrink-0 size-3.5"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="m15 18-6-6 6-6"></path>
      </svg>
      <span>Previous</span>
    </button>
    <div class="flex items-center gap-x-xs">
      <button
        v-for="p in data.pageCount"
        :key="p"
        type="button"
        class="min-h-[38px] min-w-[38px] flex justify-center items-center hover:bg-wit-blue-400 py-sm px-sm text-sm rounded-lg"
        :class="{
          'outline-none': p === page,
          'bg-wit-blue-500': p === page,
          'pointer-events-none': p === page
        }"
      >
        {{ p }}
      </button>
    </div>
    <button
      type="button"
      :disabled="data.isLastPage"
      @click="data.next"
      class="min-h-lg min-w-lg py-sm px-sm inline-flex justify-center items-center gap-xs text-sm rounded-lg hover:bg-wit-blue-400 focus:outline-none"
      :class="{ 'opacity-10': data.isLastPage, 'pointer-events-none': data.isLastPage }"
      aria-label="Next"
    >
      <span>Next</span>
      <svg
        class="shrink-0 size-3.5"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="m9 18 6-6-6-6"></path>
      </svg>
    </button>
  </nav>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'
import { useOffsetPagination } from '@vueuse/core'

const props = defineProps({
  total: {
    type: Number,
    required: true
  },
  page: {
    type: Number,
    required: true
  },
  pageSize: {
    type: Number,
    required: true
  },
  onPageChange: {
    type: Function
  },
  onPageSizeChange: {
    type: Function
  },
  onPageCountChange: {
    type: Function
  }
})

const emit = defineEmits(['page-change', 'page-size-change', 'page-count-change'])

// { currentPage, currentPageSize, pageCount, isFirstPage, isLastPage, prev, next }
const data = computed(() =>
  reactive(
    useOffsetPagination({
      ...props,
      onPageChange(...args) {
        props.onPageChange?.(...args)
        emit('page-change', ...args)
      },
      onPageSizeChange(...args) {
        props.onPageSizeChange?.(...args)
        emit('page-size-change', ...args)
      },
      onPageCountChange(...args) {
        props.onPageCountChange?.(...args)
        emit('page-count-change', ...args)
      }
    })
  )
)
</script>
