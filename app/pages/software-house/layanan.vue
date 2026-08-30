<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  MessageSquare,
  ArrowRight,
  Star,
  Wrench,
  MessageCircle
} from 'lucide-vue-next'

definePageMeta({
  layout: 'ekraf'
})

const SERVICES = [
  {
    cat: 'Himatifa Web',
    name: 'Pembuatan Website Company Profile',
    price: 350000,
    rating: 5.0,
    clients: 24,
    badge: 'Populer'
  },
  {
    cat: 'Himatifa Web',
    name: 'Pembuatan Website Toko Online (E-Commerce)',
    price: 750000,
    rating: 4.9,
    clients: 15,
    badge: ''
  },
  {
    cat: 'Himatifa Web',
    name: 'Website Undangan Digital Pernikahan',
    price: 100000,
    rating: 4.9,
    clients: 89,
    badge: 'Cepat Selesai'
  },

  {
    cat: 'Himatifa Services',
    name: 'Jasa Install Ulang Windows 10/11 + Full Aplikasi',
    price: 50000,
    rating: 4.9,
    clients: 156,
    badge: 'Mahasiswa'
  },
  {
    cat: 'Himatifa Services',
    name: 'Pembersihan Laptop (Cleaning & Repasta)',
    price: 75000,
    rating: 4.9,
    clients: 89,
    badge: ''
  },
  {
    cat: 'Himatifa Services',
    name: 'Jasa Upgrade & Pasang RAM / SSD Laptop',
    price: 35000,
    rating: 5.0,
    clients: 110,
    badge: ''
  },

  {
    cat: 'Himatifa Foto',
    name: 'Jasa Foto Produk Katalog / UMKM (Per Produk)',
    price: 25000,
    rating: 4.8,
    clients: 45,
    badge: 'UMKM Friendly'
  },
  {
    cat: 'Himatifa Foto',
    name: 'Jasa Dokumentasi Event / Acara Himpunan',
    price: 150000,
    rating: 4.9,
    clients: 32,
    badge: 'Laris'
  },
]

const CATS = ['Semua', 'Himatifa Web', 'Himatifa Services', 'Himatifa Foto']

const active = ref('Semua')

const filtered = computed(() => {
  if (active.value === 'Semua') return SERVICES
  return SERVICES.filter(p => p.cat === active.value)
})

const formatRupiah = (angka: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(angka)
}
</script>

<template>
  <div class="font-sans min-h-screen bg-background transition-colors duration-300">

    <section class="pt-24 pb-8 relative overflow-hidden">
      <div class="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none transition-colors duration-500"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <span class="text-primary text-xs font-bold tracking-widest uppercase">Jasa & Kapabilitas</span>
        <h1 class="mt-3 text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight transition-colors">Layanan Himatifa</h1>
        <p class="mt-4 text-muted-foreground max-w-xl text-sm leading-relaxed transition-colors">
          Solusi teknologi, perbaikan, dan kreatif multimedia yang ditawarkan oleh tim HIMATIFA Platform — dikerjakan oleh mahasiswa IT terbaik dengan dedikasi penuh.
        </p>
      </div>
    </section>

    <section class="border-b border-border mb-8 bg-background/80 backdrop-blur-sm sticky top-16 z-30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex gap-6 overflow-x-auto no-scrollbar py-3">
          <button
              v-for="c in CATS"
              :key="c"
              @click="active = c"
              class="relative whitespace-nowrap text-sm font-semibold transition-all py-1.5"
              :class="active === c ? 'text-primary' : 'text-muted-foreground hover:text-foreground'"
          >
            {{ c }}
            <div v-if="active === c" class="absolute -bottom-3 left-0 right-0 h-0.5 bg-primary rounded-t-full"></div>
          </button>
        </div>
      </div>
    </section>

    <section class="pb-24 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          <div
              v-for="p in filtered"
              :key="p.name"
              class="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-md transition-all duration-300 flex flex-col relative"
          >
            <div v-if="p.badge" class="absolute top-3 left-3 z-10 bg-primary text-primary-foreground text-[10px] font-bold px-2.5 py-1 rounded-md shadow-sm">
              {{ p.badge }}
            </div>

            <div class="aspect-[4/3] bg-secondary overflow-hidden relative">
              <PlaceholderImage class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div class="absolute inset-0 bg-background/10 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>

            <div class="p-4 flex flex-col flex-1">
              <span class="text-[10px] font-medium text-primary mb-1 uppercase tracking-wider">{{ p.cat }}</span>
              <h3 class="text-sm font-bold text-foreground mb-3 line-clamp-2 leading-snug group-hover:text-primary transition-colors min-h-[40px]">
                {{ p.name }}
              </h3>

              <div class="mt-auto">
                <span class="text-[10px] text-muted-foreground block mb-0.5">Estimasi Biaya Mulai</span>
                <div class="font-extrabold text-base text-foreground mb-3">
                  {{ formatRupiah(p.price) }}
                </div>

                <div class="flex items-center gap-1.5 text-[10px] sm:text-xs text-muted-foreground pb-4 border-b border-border">
                  <Star class="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                  <span class="font-medium text-foreground">{{ p.rating }}</span>
                  <div class="w-1 h-1 rounded-full bg-border mx-0.5"></div>
                  <span>{{ p.clients }} Klien</span>
                </div>

                <a
                    :href="`https://wa.me/6289601261250?text=Halo,%20saya%20tertarik%20dengan%20layanan%20${encodeURIComponent(p.name)}`"
                    target="_blank"
                    class="mt-4 w-full flex items-center justify-center gap-1.5 bg-background text-foreground border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary text-xs font-bold py-2.5 rounded-lg transition-all duration-300 shadow-sm"
                >
                  <MessageCircle class="w-4 h-4" />
                  Konsultasi
                </a>
              </div>
            </div>
          </div>
        </div>

        <div v-if="filtered.length === 0" class="text-center py-20 flex flex-col items-center">
          <Wrench class="w-12 h-12 text-muted-foreground mb-3 opacity-50" />
          <h3 class="text-foreground font-bold text-lg">Layanan belum tersedia</h3>
          <p class="text-sm text-muted-foreground mt-1">Silakan cek kategori lainnya.</p>
        </div>

        <div class="mt-20 relative overflow-hidden rounded-3xl bg-secondary/50 border border-border p-10 sm:p-12 text-center flex flex-col items-center transition-colors">
          <div class="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none"></div>
          <div class="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none"></div>

          <MessageSquare class="w-12 h-12 text-primary mb-5 relative z-10" />

          <h3 class="text-2xl font-extrabold text-foreground mb-3 relative z-10 transition-colors">Punya Kebutuhan Custom?</h3>
          <p class="text-muted-foreground text-sm mb-8 max-w-lg mx-auto relative z-10 leading-relaxed transition-colors">
            Kebutuhan IT, servis, atau fotografi Anda belum tercantum di atas? Kami sangat terbuka untuk berdiskusi dan merancang solusi yang paling tepat untuk Anda.
          </p>

          <a
              href="https://wa.me/6289601261250"
              target="_blank"
              class="relative z-10 group inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-3.5 rounded-xl hover:opacity-90 transition-all duration-300 text-sm shadow-md"
          >
            Diskusikan Proyekmu
            <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>