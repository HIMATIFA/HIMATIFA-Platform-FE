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
      class="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer group flex flex-col hover:shadow-lg hover:shadow-primary/5"
      @click="$emit('click')"
  >
    <div class="aspect-[16/9] bg-muted overflow-hidden relative shrink-0 transition-colors duration-500">
      <img
          v-if="item.image"
          :src="item.image"
          :alt="item.title"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <PlaceholderImage
          v-else
          heightClass="h-full absolute inset-0"
          text="Gambar Berita Belum Tersedia"
      />
    </div>

    <div class="p-5 flex flex-col grow">
      <div class="flex items-center gap-2 mb-3">
        <span class="px-2.5 py-0.5 rounded-md bg-primary/10 border border-primary/20 text-primary text-[10px] uppercase font-bold tracking-wider transition-colors duration-500">
          {{ item.category }}
        </span>
        <span class="text-muted-foreground text-xs transition-colors duration-500">{{ item.date }}</span>
      </div>

      <h3 class="text-card-foreground font-display font-semibold text-base leading-snug mb-2 group-hover:text-primary transition-colors duration-300">
        {{ item.title }}
      </h3>

      <p class="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4 transition-colors duration-500">
        {{ item.summary }}
      </p>

      <div class="mt-auto flex items-center gap-1.5 text-primary text-sm font-medium pt-2">
        <span>Baca selengkapnya</span>
        <ArrowRight :size="14" class="group-hover:translate-x-1.5 transition-transform duration-300" />
      </div>
    </div>
  </article>
</template>