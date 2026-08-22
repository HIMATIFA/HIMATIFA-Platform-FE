<script setup lang="ts">
import { Image as ImageIcon } from 'lucide-vue-next'

defineProps({
  text: {
    type: String,
    default: 'Gambar Belum Tersedia'
  },
  heightClass: {
    type: String,
    default: 'h-48'
  }
})
</script>

<template>
  <div
      :class="[
      'w-full flex flex-col items-center justify-center bg-muted text-muted-foreground rounded-lg border border-border',
      heightClass
    ]"
  >
    <ImageIcon :size="32" class="mb-2 opacity-50" />
    <span class="text-xs font-medium font-display opacity-80">{{ text }}</span>
  </div>
</template>