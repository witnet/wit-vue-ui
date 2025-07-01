<template>
  <table
    :class="long ? 'md2:divide-y-0 md2:w-full' : 'sm:divide-y-0 sm:w-full'"
    class="bg-white-100 dark:bg-black-800 rounded-[24px] w-full divide-y divide-white-200 dark:divide-white-500 text-black-500 dark:text-white-200 mb-md"
  >
    <thead
      :class="long ? 'md2:hidden' : 'sm:hidden'"
      class="text-xs dark:text-white-200 text-black-500"
    >
      <tr>
        <th
          scope="col"
          class="px-md py-md text-start cursor-pointer last:flex last:justify-end"
          v-for="col in labels"
          :key="col.label"
          @click="col.sortType ? setSortLabel(col.sortType, col.index) : () => {}"
        >
          <p>
            {{ col.label }}
            <span
              ><WSortArrow
                v-if="col.sortType"
                :current-label="currentSortType"
                :label="col.sortType"
                :order="order"
              ></WSortArrow
            ></span>
          </p>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(row, index) in sortedData"
        :key="row[0].value"
        :class="{
          'md2:grid md2:grid-cols-2 md2:w-full sm:grid-cols-1': long,
          'sm:grid sm:grid-col-1': !long,
          'md2:bg-white-200 md2:dark:bg-black-600': index % 2
        }"
        class="transition-all duration-200 last:rounded-b-[24px]"
      >
        <div
          v-for="col in row"
          :key="col.value"
          class="hidden w-full py-md"
          :class="{ 'md2:grid': long, 'sm:grid': !long }"
        >
          <th class="label">{{ col.label }}</th>
          <td
            class="px-md py-md [&&]:sm:pt-sm"
            :class="{ 'break-all': !breakLineByLabel(col.label) }"
          >
            <WColumn :url="col.url" :value="col.value" :chips="col.chips" class="w-full"></WColumn>
          </td>
        </div>
        <td
          v-for="col in row"
          :key="col.value"
          :class="{
            'md2:hidden': long,
            'sm:hidden': !long,
            'whitespace-normal': breakLineByLabel(col.label),
            'w-[1px]': !breakLineByLabel(col.label),
            'whitespace-nowrap': !breakLineByLabel(col.label),
            'bg-white-200 dark:bg-black-600': index % 2
          }"
          class="desktop-td px-md py-md [&&]:sm:pt-sm last:text-end"
        >
          <WColumn
            :url="col.url"
            :value="col.value"
            :chips="col.chips"
            :truncate="col.truncate ?? false"
            class="w-max"
          ></WColumn>
        </td>
      </tr>
    </tbody>
  </table>
  <div v-if="loading" class="text-center py-4">
    <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-wit-blue-500" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, type Ref } from 'vue'
import { Label, Row, Sort } from './WTable'
import WSortArrow from './WSortArrow.vue'
import WColumn from './WColumn.vue'

const props = defineProps({
  loading: Boolean,
  long: {
    type: Boolean,
    default: false
  },
  labels: {
    type: Array<Label>,
    required: true
  },
  data: {
    type: Array<Row>,
    required: true
  }
})

const currentSortType: Ref<Sort> = ref(Sort.ascentant)
const indexToSort: Ref<number> = ref(0)
const order: Ref<boolean> = ref(true)

const sortedData: Ref<Row[]> = computed(() => {
  const data: Row[] = props.data
  const sortFunctions = {
    [Sort.ascentant]: (a: Row, b: Row) => {
      const aValue: number = a[indexToSort.value].value as number
      const bValue: number = b[indexToSort.value].value as number
      return order.value ? aValue - bValue : bValue - aValue
    },
    [Sort.descendant]: (a: Row, b: Row) => {
      const aValue: number = a[indexToSort.value].value as number
      const bValue: number = b[indexToSort.value].value as number
      return order.value ? bValue - aValue : aValue - bValue
    },
    [Sort.alphabetically]: (a: Row, b: Row) => {
      const aValue: string = a[indexToSort.value].value as string
      const bValue: string = b[indexToSort.value].value as string
      return order.value ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue)
    },
    [Sort.alphabeticallyReverse]: (a: Row, b: Row) => {
      console.log(a[indexToSort.value].value)
      const aValue: string = a[indexToSort.value].value as string
      const bValue: string = b[indexToSort.value].value as string
      console.log('type of value', typeof aValue)
      return order.value ? bValue.localeCompare(aValue) : aValue.localeCompare(bValue)
    }
  }
  return data.sort(sortFunctions[currentSortType.value])
})

function breakLineByLabel(colLabel: string): boolean {
  return props.labels.reduce((label: Label, acc: Label): Label => {
    if (label.label === colLabel && label.break) {
      acc = label
    }
    return acc
  }).break
}

function setSortLabel(label: Sort, index: number) {
  if (currentSortType.value === label) {
    order.value = !order.value
    indexToSort.value = index
  } else {
    currentSortType.value = label
    order.value = true
    indexToSort.value = index
  }
}
</script>
<style lang="scss" scoped>
.pointer-events-none {
  @apply text-black-950;
}
.label {
  @apply px-md font-bold text-sm text-black-400 dark:text-white-300 text-start;
}
.t-value {
  @apply px-md py-md [&&]:sm:pt-sm;
}

tr:last-child .desktop-td:first-of-type {
  border-bottom-left-radius: 24px;
}
tr:last-child .desktop-td:last-of-type {
  border-bottom-right-radius: 24px;
}
</style>
