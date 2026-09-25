<script setup lang="ts">
import { ref, computed } from 'vue'
import { FolderOpen } from 'lucide-vue-next'

definePageMeta({
  layout: 'ekraf'
})

const CATS = ['Semua', 'Website', 'Desain UI/UX', 'Fotografi', 'IT Project']

const WORKS: Array<{ cat: string; title: string; client: string; year: string; desc: string }> = []

const active = ref('Semua')

const filtered = computed(() => {
  if (active.value === 'Semua') return WORKS
  return WORKS.filter((w) => w.cat === active.value)
})
</script>

<template>
  <div class="font-sans min-h-screen bg-background">

    <section class="pt-24 pb-12 relative overflow-hidden">
      <div class="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <span class="text-primary text-xs font-bold tracking-widest uppercase">Karya & Pengalaman</span>
        <h1 class="mt-3 text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">Portofolio</h1>
        <p class="mt-4 text-muted-foreground max-w-xl text-sm leading-relaxed">
          Kumpulan proyek website, desain, IT services, dan fotografi yang dikerjakan oleh tim HIMATIFA Platform.
        </p>
      </div>
    </section>

    <section class="bg-background/90 backdrop-blur-md border-y border-border py-4 sticky top-16 z-30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-2 flex-wrap">
        <button
            v-for="c in CATS"
            :key="c"
            @click="active = c"
            class="px-4 py-1.5 rounded-full text-xs font-bold border"
            :class="active === c
              ? 'bg-primary border-primary text-primary-foreground shadow-sm'
              : 'bg-secondary border-border text-muted-foreground hover:text-foreground hover:bg-secondary/80 hover:border-primary/30'"
        >
          {{ c }}
        </button>
      </div>
    </section>

    <section class="py-12 pb-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div v-if="filtered.length > 0" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
              v-for="w in filtered"
              :key="w.title"
              class="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 cursor-pointer shadow-sm hover:shadow-lg"
          >
            <div class="aspect-[4/3] bg-secondary overflow-hidden">
              <PlaceholderImage
                  class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105"
              />
            </div>

            <div class="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-90 group-hover:opacity-100" />

            <div class="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end h-full">
              <div class="flex items-center gap-2 mb-3">
                <span class="text-[10px] font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-md backdrop-blur-sm">{{ w.cat }}</span>
                <span class="text-[10px] text-muted-foreground font-semibold bg-background/50 px-2 py-1 rounded border border-border/50">{{ w.year }}</span>
              </div>

              <h3 class="font-bold text-foreground text-base mb-1 group-hover:text-primary">{{ w.title }}</h3>
              <p class="text-xs text-muted-foreground font-medium">{{ w.client }}</p>

              <p class="text-xs text-muted-foreground mt-3 leading-relaxed opacity-0 group-hover:opacity-100 border-t border-border/50 pt-3">
                {{ w.desc }}
              </p>
            </div>
          </div>
        </div>

        <div v-if="filtered.length === 0" class="text-center py-32 flex flex-col items-center justify-center bg-card/50 rounded-2xl border border-dashed border-border mt-8">
          <FolderOpen class="w-12 h-12 text-muted-foreground mb-4 opacity-50" />
          <h3 class="text-foreground font-bold text-lg">Belum Ada Portofolio</h3>
          <p class="text-muted-foreground text-sm mt-1">Belum ada portofolio atau project yang diselesaikan saat ini.</p>
        </div>

      </div>
    </section>
  </div>
</template>