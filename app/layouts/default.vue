<script setup lang="ts">
const navigationItems = ref([
  {
    label: 'Home',
    icon: 'i-lucide-home',
    to: '/',
  },
  {
    label: 'Users',
    icon: 'i-lucide-box',
    to: '/users',
  },
  {
    label: 'Create User',
    icon: 'i-lucide-link',
    to: '/users/create',
  },
])
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <slot />
  </div>
</template>
