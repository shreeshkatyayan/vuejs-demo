<template>
  <button
    :class="`cursor-pointer rounded-md border-2 font-bold leading-none inline-block px-6 py-3 border-none shadow-md ${getButtonClass}`"
    @click="onClick">
    {{ label }}
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { buttonProps } from './props';

const props = defineProps(buttonProps);

const getButtonClass = computed(() => {
  const { theme } = props;
  switch (theme) {
    case 'primary':
      return 'bg-primary text-white';
    case 'error':
      return 'bg-error text-white';
    default:
      return 'text-black bg-white';
  }
});
</script>
