<template>
  <div role="status">
    <Spinner aria-hidden="true" class="w-8 h-8 text-gray-100 animate-spin fill-wit-blue-500" />
    <span class="sr-only">Loading...</span>
  </div>
</template>
<script lang="ts" setup>
import Spinner from '@/assets/svg/spinner.svg?component'
</script>
