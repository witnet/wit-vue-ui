<template>
  <vSelect
    v-model="model"
    transition="dropdown"
    ref="select"
    :options="options"
    :clearable="false"
    :filterable="false"
    :searchable="false"
    class="language-selector"
    :class="xPosition"
  >
    <template #selected-option-container="{ option }">
      <span class="vs__selected">
        <component
          :is="(option as Option).icon"
          v-if="(option as Option).icon"
          class="dropdown-items"
        />
        {{ (option as Option).label }}
      </span>
    </template>

    <template #option="option">
      <div class="option">
        <component
          :is="(option as Option).icon"
          v-if="(option as Option).icon"
          class="dropdown-items"
        />
        <span>{{ (option as Option).label }}</span>
      </div>
    </template>
  </vSelect>
</template>
<script setup lang="ts">
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import {
  dropdownYPositions,
  dropdownXPositions,
  DropdownYPosition,
  DropdownXPosition
} from './WSelect'
import { PropType, computed, DefineComponent, SVGAttributes } from 'vue'

type Option = { key: string; label: string; icon: DefineComponent<SVGAttributes> | null }

const model = defineModel()
const props = defineProps({
  options: {
    type: Array as PropType<Array<Option>>,
    required: true
  },
  dropdownYPosition: {
    type: String as PropType<DropdownYPosition>,
    default: DropdownYPosition.Bottom,
    validator(value: DropdownYPosition) {
      return dropdownYPositions.includes(value)
    }
  },
  dropdownXPosition: {
    type: String as PropType<DropdownXPosition>,
    default: DropdownXPosition.Right,
    validator(value: DropdownXPosition) {
      return dropdownXPositions.includes(value)
    }
  },
  hexPrimaryColor: {
    type: String,
    default: '#000000'
  },
  hexSecondaryColor: {
    type: String,
    default: '#ffffff'
  }
})
const yPositions: Record<DropdownYPosition, string> = {
  [DropdownYPosition.Top]: '-210%',
  [DropdownYPosition.Bottom]: '110%'
}
const xPositions: Record<DropdownXPosition, string> = {
  [DropdownXPosition.Right]: 'right',
  [DropdownXPosition.Left]: 'left'
}
const yPosition = computed(() => yPositions[props.dropdownYPosition])
const xPosition = computed(() => xPositions[props.dropdownXPosition])
</script>

<style lang="scss">
.dropdown-enter {
  transform: translateY(-8px);
}

.dropdown-enter-to {
  transform: translateY(0px);
}
.dropdown-enter-from {
  opacity: 0;
  transform: translateY(-8px);
}

.dropdown-leave {
  transform: translateY(0px);
}

.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.dropdown-leave-from {
  transform: translateY(0);
}

.dropdown-leave-active {
  transition: all 0.2s cubic-bezier(0.42, 0, 0.58, 1);
}

.dropdown-enter-active {
  transition: all 0.2s cubic-bezier(0.42, 0, 0.58, 1);
}
.vs--open {
  .vs__open-indicator {
    transform: rotate(180deg) scale(0.5) !important;
  }
}

.language-selector {
  @apply bg-[v-bind(hexPrimaryColor)] h-max w-auto px-md py-xs rounded-full flex justify-center;
  &.right {
    .vs__dropdown-menu {
      left: unset;
      right: 0px;
    }
  }
  &.left {
    .vs__dropdown-menu {
      left: 0px;
    }
  }
  .option {
    @apply grid grid-cols-[max-content_max-content] justify-start items-center h-max;
  }
  .vs__dropdown-toggle {
    @apply grid grid-flow-col gap-xs justify-center items-center;
    padding: 0;
    .vs__selected-options {
      padding: 0;
    }
  }
  .vs__dropdown-toggle,
  .vs__dropdown-menu {
    @apply rounded-lg;
    background: v-bind(hexPrimaryColor);
    box-shadow: none;
    border: none;
    color: v-bind(hexSecondaryColor);
    min-width: max-content;
    .dropdown-items {
      margin-right: 8px;
    }
  }
  .vs__dropdown-menu {
    z-index: -10;
    top: v-bind(yPosition);
    background: v-bind(hexSecondaryColor);
    border: 2px solid v-bind(hexPrimaryColor);
    border-radius: 16px;
  }
  .vs__open-indicator {
    font-size: 8px;
  }

  .vs__dropdown-option {
    font-family: 'NeueMachina-Regular', sans-serif;
    color: v-bind(hexPrimaryColor);
  }

  .vs__dropdown-option--highlight {
    z-index: 10;
    color: v-bind(hexSecondaryColor);
    background: v-bind(hexPrimaryColor);
  }

  .vs__clear,
  .vs__open-indicator {
    fill: v-bind(hexSecondaryColor);
    transform: scale(0.5);
    transition: transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);
    transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);
  }

  .vs__selected {
    color: v-bind(hexSecondaryColor);
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  &:hover {
    .vs__selected {
      color: v-bind(hexSecondaryColor);
    }
    .vs__open-indicator {
      color: v-bind(hexSecondaryColor);
    }
  }
  // remove extra space
  .vs__search {
    padding: 0 !important;
  }
  .vs__actions {
    padding: 0;
  }
}

// avoid decrease size on open
.vs--single.vs--open .vs__selected {
  opacity: 1 !important;
  position: inherit !important;
}
</style>
