<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  name: string
  role: string
  departement?: string | null
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
  <div class="bg-card border border-border rounded-xl p-6 flex flex-col items-center text-center gap-3 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group hover:shadow-sm">
    <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 text-lg font-bold tracking-wide">
      {{ initials }}
    </div>

    <div>
      <div class="text-card-foreground font-semibold text-sm leading-snug transition-colors duration-500">
        {{ name }}
      </div>
      <div class="text-muted-foreground text-xs mt-0.5 transition-colors duration-500">
        {{ role }}
      </div>
      <div
          v-if="departement"
          class="text-accent text-xs font-medium mt-1.5 bg-primary/10 border border-primary/10 rounded-full px-2.5 py-0.5 inline-block transition-colors duration-500"
      >
        {{ departement }}
      </div>
    </div>
  </div>
</template>