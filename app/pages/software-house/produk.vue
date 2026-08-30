<script setup lang="ts">
import { ref, computed } from 'vue'
import { Package, ArrowRight, ShoppingBag } from 'lucide-vue-next'

definePageMeta({
  layout: 'ekraf'
})

const PRODUCTS = [
  {
    cat: 'Merchandise',
    name: 'Tumbler Eksklusif HIMATIFA',
    desc: 'Tumbler stainless steel tahan panas/dingin berkapasitas 500ml dengan ukiran logo Himatifa. Cocok untuk menemani ngoding seharian.',
    tags: ['Fisik', 'Bestseller']
  },
  {
    cat: 'Merchandise',
    name: 'Sticker Pack Developer',
    desc: 'Kumpulan stiker vinyl anti air bertema programming, Linux, dan maskot Himatifa. Pas untuk ditempel di casing laptop kamu.',
    tags: ['Fisik', 'Aksesoris']
  },
  {
    cat: 'Merchandise',
    name: 'Gantungan Kunci Akrilik IT',
    desc: 'Gantungan kunci akrilik tebal dua sisi dengan desain elemen kode dan tipografi Informatika yang keren & minimalis.',
    tags: ['Fisik', 'Merch']
  },
  {
    cat: 'Akun Premium',
    name: 'ChatGPT Plus (1 Bulan)',
    desc: 'Akses penuh ke GPT-4, DALL-E 3, dan Advanced Data Analysis untuk membantu tugas ngoding, riset, dan analisis data.',
    tags: ['AI', 'Digital'],
    brandName: 'ChatGPT',
    brandBg: 'bg-[#10A37F]'
  },
  {
    cat: 'Akun Premium',
    name: 'Claude Pro (1 Bulan)',
    desc: 'Akun premium Claude dengan kemampuan luar biasa dalam menganalisis dokumen panjang dan memecahkan bug koding kompleks.',
    tags: ['AI', 'Digital'],
    brandName: 'Claude',
    brandBg: 'bg-[#D97757]'
  },
  {
    cat: 'Akun Premium',
    name: 'Netflix Premium 4K Shared',
    desc: 'Akun sharing Netflix resolusi 4K UHD. Solusi hiburan terbaik untuk bersantai dan nonton film setelah lelah mengerjakan project.',
    tags: ['Hiburan', 'Shared'],
    brandName: 'NETFLIX',
    brandBg: 'bg-black'
  },
  {
    cat: 'Akun Premium',
    name: 'Canva Pro (1 Bulan / 1 Tahun)',
    desc: 'Akses ke semua template premium, elemen grafis, fitur AI, dan tools pro Canva. Desain UI/UX atau presentasi jadi lebih instan.',
    tags: ['Desain', 'Digital'],
    brandName: 'Canva',
    brandBg: 'bg-gradient-to-tr from-[#00C4CC] to-[#7D2AE8]'
  }
]

const CATS = ['Semua', 'Merchandise', 'Akun Premium']

const active = ref('Semua')

const filtered = computed(() => {
  if (active.value === 'Semua') {
    return PRODUCTS
  }
  return PRODUCTS.filter(p => p.cat === active.value)
})
</script>

<template>
  <div class="font-sans bg-background min-h-screen transition-colors duration-300">

    <section class="pt-24 pb-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span class="text-primary text-xs font-bold tracking-widest uppercase flex items-center gap-2">
          <ShoppingBag class="w-4 h-4" /> Katalog Produk
        </span>
        <h1 class="mt-3 text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">Merch & Premium</h1>
        <p class="mt-4 text-muted-foreground max-w-xl text-sm leading-relaxed">
          Koleksi merchandise fisik resmi dan layanan akun premium digital yang disediakan khusus oleh tim HIMATIFA Platform untuk mendukung produktivitas dan gayamu.
        </p>
      </div>
    </section>

    <section class="bg-background/90 backdrop-blur-md border-y border-border py-4 sticky top-16 z-30 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-2 flex-wrap">
        <button
            v-for="c in CATS"
            :key="c"
            @click="active = c"
            class="px-4 py-1.5 rounded-full text-xs font-bold transition-all border"
            :class="active === c
              ? 'bg-primary border-primary text-primary-foreground shadow-sm'
              : 'bg-secondary border-border text-muted-foreground hover:text-foreground hover:bg-secondary/80 hover:border-primary/30'"
        >
          {{ c }}
        </button>
      </div>
    </section>

    <section class="py-16 pb-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
              v-for="p in filtered"
              :key="p.name"
              class="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            <div class="aspect-[16/10] bg-secondary overflow-hidden relative flex items-center justify-center">

              <template v-if="p.cat === 'Akun Premium'">
                <div :class="['w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105', p.brandBg]">
                  <span
                      class="text-3xl font-extrabold tracking-wider drop-shadow-sm"
                      :class="p.brandName === 'NETFLIX' ? 'text-[#E50914]' : 'text-white'"
                  >
                    {{ p.brandName }}
                  </span>
                </div>
              </template>

              <template v-else>
                <PlaceholderImage class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
              </template>

            </div>

            <div class="p-6 flex flex-col flex-1">
              <div class="flex items-center justify-between mb-4">
                <span class="text-[10px] sm:text-xs text-primary font-bold bg-primary/10 px-2.5 py-1 rounded-md">
                  {{ p.cat }}
                </span>
                <div class="flex gap-1.5 flex-wrap justify-end">
                  <span
                      v-for="t in p.tags"
                      :key="t"
                      class="text-[10px] text-muted-foreground bg-secondary border border-border px-2 py-0.5 rounded-md"
                  >
                    {{ t }}
                  </span>
                </div>
              </div>

              <h3 class="font-bold text-foreground text-base mb-2 group-hover:text-primary transition-colors">{{ p.name }}</h3>
              <p class="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{{ p.desc }}</p>

              <a
                  :href="`https://wa.me/6289601261250?text=Halo,%20saya%20ingin%20memesan%20${encodeURIComponent(p.name)}`"
                  target="_blank"
                  class="mt-auto w-full flex items-center justify-center bg-background border border-border text-foreground text-xs font-semibold py-2.5 rounded-xl hover:border-primary hover:text-primary hover:bg-primary/5 transition-colors"
              >
                Pesan Sekarang
              </a>
            </div>
          </div>
        </div>

        <div class="mt-20 text-center p-10 rounded-2xl bg-primary/5 border border-primary/20 relative overflow-hidden flex flex-col items-center">
          <div class="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none"></div>

          <Package class="w-12 h-12 text-primary mb-4 relative z-10" />

          <h3 class="text-foreground text-lg font-bold mb-2 relative z-10">Punya Usulan Produk atau Merchandise?</h3>
          <p class="text-muted-foreground text-sm mb-6 relative z-10 max-w-lg">
            Ada ide merchandise keren atau butuh layanan akun premium lain yang belum tersedia? Sampaikan usulanmu kepada tim HIMATIFA Platform.
          </p>

          <a
              href="https://wa.me/6289601261250"
              target="_blank"
              class="relative z-10 inline-flex items-center gap-2 bg-primary text-primary-foreground text-xs font-bold px-6 py-3 rounded-xl hover:brightness-110 shadow-sm transition-all group"
          >
            Hubungi Kami
            <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  </div>
</template>