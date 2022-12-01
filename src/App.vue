<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { RouterView, useRoute } from 'vue-router'
import { ScreenLayout } from './router/screen-layouts';

const route = useRoute();
const { path } = route
const layout = computed(() => route.meta.layout || ScreenLayout.DEFAULT_LAYOUT)

</script>

<template>
  <component :is="layout">
    <RouterView :key="path" />
  </component>
</template>

<style scoped lang="scss">

</style>
