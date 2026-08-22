<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

defineProps<{
  item: {
    id?: number | string
    image?: string
    title: string
    category: string
    date: string
    summary?: string
  }
}>()

defineEmits(['click'])
</script>

<template>
  <article
      class="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer group flex flex-col"
      @click="$emit('click')"
  >
    <div class="aspect-[16/9] bg-muted overflow-hidden relative shrink-0">
      <img
          v-if="item.image"
          :src="item.image"
          :alt="item.title"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <PlaceholderImage
          v-else
          heightClass="h-full absolute inset-0"
          text="Gambar Berita Belum Tersedia"
      />
    </div>

    <div class="p-5 flex flex-col grow">
      <div class="flex items-center gap-2 mb-3">
        <span class="px-2 py-0.5 rounded bg-primary/20 text-muted-foreground text-[10px] uppercase font-bold tracking-wider">
          {{ item.category }}
        </span>
        <span class="text-accent/60 text-xs">{{ item.date }}</span>
      </div>

      <h3 class="text-card-foreground font-display font-semibold text-base leading-snug mb-2 group-hover:text-secondary-foreground transition-colors">
        {{ item.title }}
      </h3>

      <p class="text-muted-foreground text-sm leading-relaxed line-clamp-2">
        {{ item.summary }}
      </p>

      <div class="mt-4 flex items-center gap-1.5 text-accent text-sm font-medium mt-auto">
        Baca selengkapnya <ArrowRight :size="14" />
      </div>
    </div>
  </article>
</template>