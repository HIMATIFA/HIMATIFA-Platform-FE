<script setup lang="ts">
import PlaceholderImage from '~/components/PlaceholderImage.vue'

const showcaseItems = [
  { id: 1, type: 'Produk', category: 'Merchandise', name: 'Lanyard HIMATIFA 2026', desc: 'Lanyard eksklusif dengan material premium dan desain khas mahasiswa Informatika.' },
  { id: 2, type: 'Layanan', category: 'Jasa Digital', name: 'Web Development', desc: 'Jasa pembuatan website profile & landing page responsif untuk kebutuhan personal atau instansi.' },
  { id: 3, type: 'Produk', category: 'Aksesoris', name: 'Sticker Pack Developer', desc: 'Kumpulan stiker die-cut tahan air bertema programming dan kehidupan IT.' },
  { id: 4, type: 'Layanan', category: 'Jasa Teknis', name: 'HIMATIFA Services', desc: 'Layanan instalasi OS, perbaikan software, dan perawatan hardware komputer/laptop.' },
  { id: 5, type: 'Produk', category: 'Apparel', name: 'T-Shirt "Code & Coffee"', desc: 'Kaos katun premium dengan desain tipografi minimalis khusus untuk programmer.' },
  { id: 6, type: 'Produk', category: 'Merchandise', name: 'Totebag HIMATIFA', desc: 'Totebag kanvas tebal dengan sablon logo HIMATIFA, sangat cocok untuk membawa laptop.' },
]
</script>

<template>
  <div class="min-h-screen bg-background text-foreground pt-24 pb-24 animate-in fade-in duration-500">
    <div class="max-w-6xl mx-auto px-6">

      <div class="text-center mb-16">
        <h1 class="text-3xl md:text-5xl font-black font-display text-primary mb-4">
          Ekraf HIMATIFA
        </h1>
        <p class="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Etalase kreativitas dan layanan mandiri dari mahasiswa Teknik Informatika UMSurabaya.
          Temukan karya, merchandise eksklusif, hingga layanan digital profesional kami.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div
            v-for="item in showcaseItems"
            :key="item.id"
            class="group flex flex-col overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300"
        >
          <div class="relative w-full h-52 bg-input-background overflow-hidden flex items-center justify-center">

            <PlaceholderImage class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

            <div class="absolute top-4 right-4 px-3 py-1.5 bg-background/90 backdrop-blur-md border border-border rounded-full shadow-sm">
              <span class="text-[10px] font-bold uppercase tracking-wider text-primary">
                {{ item.type }}
              </span>
            </div>
          </div>

          <div class="p-6 flex flex-col flex-1">
            <span class="text-xs font-semibold text-muted-foreground mb-2 block font-display">
              {{ item.category }}
            </span>
            <h3 class="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors font-display">
              {{ item.name }}
            </h3>
            <p class="text-sm text-muted-foreground line-clamp-2 mb-6 flex-1">
              {{ item.desc }}
            </p>

            <button class="w-full mt-auto py-2.5 rounded-xl bg-primary/10 text-primary text-sm font-bold hover:bg-primary hover:text-primary-foreground transition-colors">
              Lihat Detail
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>