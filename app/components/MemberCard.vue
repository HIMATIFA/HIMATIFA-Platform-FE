<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  name: string
  role: string
  division?: string | null
}>()

const initials = computed(() => {
  return props.name
      .replace(/[[\]]/g, "")
      .trim()
      .split(" ")
      .map((w) => w[0] ?? "")
      .filter(Boolean)
      .join("")
      .slice(0, 2)
      .toUpperCase() || "??"
})
</script>

<template>
  <div class="bg-[#001A4A] border border-[#4D65E9]/20 rounded-xl p-6 flex flex-col items-center text-center gap-3 hover:border-[#4D65E9]/50 transition-all duration-200 hover:-translate-y-0.5">
    <div class="w-16 h-16 rounded-full bg-[#002AA7] flex items-center justify-center text-white text-lg font-bold tracking-wide">
      {{ initials }}
    </div>
    <div>
      <div class="text-white font-semibold text-sm leading-snug">{{ name }}</div>
      <div class="text-[#80AAFF] text-xs mt-0.5">{{ role }}</div>
      <div
          v-if="division"
          class="text-[#6679FF] text-xs font-medium mt-1.5 bg-[#4D65E9]/10 rounded-full px-2.5 py-0.5 inline-block"
      >
        {{ division }}
      </div>
    </div>
  </div>
</template>