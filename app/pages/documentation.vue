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

    <div class="bg-background py-16 px-6 transition-colors duration-500">
      <div class="max-w-5xl mx-auto space-y-12">

        <div
            v-for="doc in docs"
            :key="doc.id"
            class="group bg-card border border-border rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-md"
        >
          <!-- Header Kartu -->
          <div class="p-6 border-b border-border transition-colors duration-500">
            <div class="flex items-center gap-2 mb-1">
              <Camera :size="15" class="text-primary" />
              <span class="text-accent font-medium text-xs transition-colors duration-500">{{ doc.date }}</span>
            </div>
            <h3 class="text-card-foreground font-bold font-display text-xl transition-colors duration-500 group-hover:text-primary">
              {{ doc.title }}
            </h3>
            <p class="text-muted-foreground text-sm mt-1 transition-colors duration-500">{{ doc.description }}</p>
          </div>

          <!-- Grid Foto -->
          <div class="p-5 grid grid-cols-2 md:grid-cols-3 gap-4 bg-card/50 transition-colors duration-500">
            <button
                v-for="(img, idx) in doc.images"
                :key="idx"
                @click="openLightbox(doc.images, idx)"
                class="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted border border-transparent hover:border-primary/50 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background group/img"
            >
              <!-- Overlay Hover -->
              <div class="absolute inset-0 bg-primary/0 group-hover/img:bg-primary/10 z-10 transition-colors duration-300"></div>

              <img
                  v-if="img"
                  :src="img"
                  :alt="`${doc.title} — foto ${idx + 1}`"
                  class="w-full h-full object-cover scale-100 group-hover/img:scale-110 transition-transform duration-500"
              />
              <PlaceholderImage
                  v-else
                  heightClass="h-full absolute inset-0 transition-transform duration-500 group-hover/img:scale-105"
                  text="Foto Kegiatan"
              />
            </button>
          </div>
        </div>

      </div>
    </div>

    <Transition name="fade">
      <div
          v-if="lightbox"
          class="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center p-4 transition-colors duration-500"
          @click="closeLightbox"
      >
        <div class="relative max-w-4xl w-full" @click.stop>

          <button
              @click="closeLightbox"
              class="absolute -top-12 right-0 text-muted-foreground hover:text-destructive hover:scale-110 transition-all duration-200 bg-background/50 hover:bg-background rounded-full p-2"
              aria-label="Tutup"
          >
            <X :size="24" />
          </button>

          <div class="relative rounded-2xl overflow-hidden bg-card flex items-center justify-center border border-border shadow-2xl transition-colors duration-500 group">
            <img
                v-if="lightbox.images[lightbox.idx]"
                :src="lightbox.images[lightbox.idx]"
                :alt="`Foto ${lightbox.idx + 1}`"
                class="w-full max-h-[75vh] object-contain transition-opacity duration-300"
            />
            <PlaceholderImage
                v-else
                heightClass="h-[50vh] md:h-[60vh] w-full"
                text="Foto Kegiatan Belum Tersedia"
            />
          </div>

          <div class="flex items-center justify-between mt-6 px-2">
            <button
                @click="prevImg"
                class="flex items-center gap-2 px-3 py-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 text-sm font-medium"
            >
              <ChevronLeft :size="18" /> Sebelumnya
            </button>

            <span class="text-foreground/80 font-display font-medium px-4 py-1.5 bg-card border border-border rounded-full shadow-sm text-sm transition-colors duration-500">
              {{ lightbox.idx + 1 }} / {{ lightbox.images.length }}
            </span>

            <button
                @click="nextImg"
                class="flex items-center gap-2 px-3 py-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 text-sm font-medium"
            >
              Berikutnya <ChevronRight :size="18" />
            </button>
          </div>

        </div>
      </div>
    </Transition>
  </main>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>