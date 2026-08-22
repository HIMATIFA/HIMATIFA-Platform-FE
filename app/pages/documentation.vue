<script setup lang="ts">
import { ref } from 'vue'
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-vue-next'

const docs = [
  {
    id: 1,
    title: "Malam Keakraban (Makrab) 2025",
    date: "15 Jan 2026",
    description: "Kegiatan pengakraban seluruh anggota dan pengurus baru HIMATIFA di awal kepengurusan.",
    images: ["", "", ""]
  },
  {
    id: 2,
    title: "Pelatihan Web Development",
    date: "12 Mar 2026",
    description: "Workshop intensif pembuatan website menggunakan framework Nuxt 3 dan Tailwind.",
    images: ["", ""]
  }
]

const lightbox = ref<{ images: string[]; idx: number } | null>(null)

const openLightbox = (images: string[], idx: number) => {
  lightbox.value = { images, idx }
}

const closeLightbox = () => {
  lightbox.value = null
}

const prevImg = () => {
  if (lightbox.value) {
    const total = lightbox.value.images.length
    lightbox.value.idx = (lightbox.value.idx - 1 + total) % total
  }
}

const nextImg = () => {
  if (lightbox.value) {
    const total = lightbox.value.images.length
    lightbox.value.idx = (lightbox.value.idx + 1) % total
  }
}
</script>

<template>
  <main>
    <PageHero
        label="Dokumentasi"
        title="Dokumentasi Kegiatan"
        subtitle="Rekam jejak aktivitas dan program HIMATIFA"
    />

    <div class="bg-background py-16 px-6">
      <div class="max-w-5xl mx-auto space-y-12">

        <div
            v-for="doc in docs"
            :key="doc.id"
            class="bg-card border border-border rounded-2xl overflow-hidden"
        >
          <div class="p-6 border-b border-border">
            <div class="flex items-center gap-2 mb-1">
              <Camera :size="15" class="text-primary" />
              <span class="text-accent font-medium text-xs">{{ doc.date }}</span>
            </div>
            <h3 class="text-card-foreground font-bold font-display text-xl">
              {{ doc.title }}
            </h3>
            <p class="text-muted-foreground text-sm mt-1">{{ doc.description }}</p>
          </div>

          <div class="p-5 grid grid-cols-2 md:grid-cols-3 gap-3">
            <button
                v-for="(img, idx) in doc.images"
                :key="idx"
                @click="openLightbox(doc.images, idx)"
                class="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted hover:ring-2 hover:ring-primary/50 transition-all duration-150 focus-visible:ring-2 focus-visible:ring-primary"
            >
              <img
                  v-if="img"
                  :src="img"
                  :alt="`${doc.title} — foto ${idx + 1}`"
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <PlaceholderImage
                  v-else
                  heightClass="h-full absolute inset-0"
                  text="Foto Kegiatan"
              />
            </button>
          </div>
        </div>

      </div>
    </div>

    <div
        v-if="lightbox"
        class="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
        @click="closeLightbox"
    >
      <div class="relative max-w-4xl w-full" @click.stop>

        <button
            @click="closeLightbox"
            class="absolute -top-10 right-0 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Tutup"
        >
          <X :size="22" />
        </button>

        <div class="relative rounded-2xl overflow-hidden bg-card flex items-center justify-center border border-border">
          <img
              v-if="lightbox.images[lightbox.idx]"
              :src="lightbox.images[lightbox.idx]"
              :alt="`Foto ${lightbox.idx + 1}`"
              class="w-full max-h-[75vh] object-contain"
          />
          <PlaceholderImage
              v-else
              heightClass="h-[50vh] md:h-[60vh] w-full"
              text="Foto Kegiatan Belum Tersedia"
          />
        </div>

        <div class="flex items-center justify-between mt-4">
          <button
              @click="prevImg"
              class="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
          >
            <ChevronLeft :size="16" /> Sebelumnya
          </button>

          <span class="text-muted-foreground/60 text-sm font-medium">
            {{ lightbox.idx + 1 }} / {{ lightbox.images.length }}
          </span>

          <button
              @click="nextImg"
              class="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
          >
            Berikutnya <ChevronRight :size="16" />
          </button>
        </div>

      </div>
    </div>
  </main>
</template>
