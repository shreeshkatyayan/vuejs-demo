<template>
    <div class="pb-4" v-for="element in props.elements" v-bind:key="element.name">
      <input
        :type="element.type"
        :name="element.name"
        :id="element.name"
        v-model="element.value.value"
        :placeholder="element.placeholder"
        class="w-full border border-gray-200 border-solid rounded p-2 text-lg font-light tracking-wider" />
      <!-- <span></span> -->
    </div>
</template>

<script setup lang="ts">
import { formLayoutProps } from './props';

const props = defineProps(formLayoutProps);
</script>