<script setup lang="ts">
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
    badge: 'Populer'
  },
  {
    cat: 'Himatifa Services',
    name: 'Jasa Upgrade & Pasang RAM / SSD Laptop',
    price: 35000,
    rating: 5.0,
    clients: 110,
    badge: ''
  },
]

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

    <section class="pt-24 pb-12 relative overflow-hidden">
      <div class="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none transition-colors duration-500"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <span class="text-primary text-xs font-bold tracking-widest uppercase">Jasa & Kapabilitas</span>
        <h1 class="mt-3 text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight transition-colors">Himatifa Services</h1>
        <p class="mt-4 text-muted-foreground max-w-xl text-sm leading-relaxed transition-colors">
          Solusi perbaikan dan maintenance perangkat komputasi yang ditawarkan oleh tim HIMATIFA. Dikerjakan oleh mahasiswa IT berpengalaman dengan layanan <strong>Gratis Konsultasi</strong>.
        </p>
      </div>
    </section>

    <section class="pb-24 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          <div
              v-for="p in SERVICES"
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
                <div class="flex justify-between items-end mb-3">
                  <div>
                    <span class="text-[10px] text-muted-foreground block mb-0.5">Estimasi Biaya Mulai</span>
                    <div class="font-extrabold text-base text-foreground">
                      {{ formatRupiah(p.price) }}
                    </div>
                  </div>
                  <span class="text-[9px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-md">
                    Konsultasi Gratis
                  </span>
                </div>

                <div class="flex items-center gap-1.5 text-[10px] sm:text-xs text-muted-foreground pb-4 border-b border-border">
                  <Star class="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                  <span class="font-medium text-foreground">{{ p.rating }}</span>
                  <div class="w-1 h-1 rounded-full bg-border mx-0.5"></div>
                  <span>{{ p.clients }} Klien</span>
                </div>

                <a
                    :href="`https://wa.me/6289601261250?text=Halo,%20saya%20ingin%20konsultasi%20gratis%20terkait%20layanan%20${encodeURIComponent(p.name)}`"
                    target="_blank"
                    class="mt-4 w-full flex items-center justify-center gap-1.5 bg-background text-foreground border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary text-xs font-bold py-2.5 rounded-lg transition-all duration-300 shadow-sm"
                >
                  <MessageCircle class="w-4 h-4" />
                  Gratis Konsultasi
                </a>
              </div>
            </div>
          </div>
        </div>

        <div v-if="SERVICES.length === 0" class="text-center py-20 flex flex-col items-center">
          <Wrench class="w-12 h-12 text-muted-foreground mb-3 opacity-50" />
          <h3 class="text-foreground font-bold text-lg">Layanan belum tersedia</h3>
          <p class="text-sm text-muted-foreground mt-1">Silakan kembali lagi nanti.</p>
        </div>

        <div class="mt-20 relative overflow-hidden rounded-3xl bg-secondary/50 border border-border p-10 sm:p-12 text-center flex flex-col items-center transition-colors">
          <div class="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none"></div>
          <div class="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none"></div>

          <MessageSquare class="w-12 h-12 text-primary mb-5 relative z-10" />

          <h3 class="text-2xl font-extrabold text-foreground mb-3 relative z-10 transition-colors">Laptop Punya Masalah Lain?</h3>
          <p class="text-muted-foreground text-sm mb-8 max-w-lg mx-auto relative z-10 leading-relaxed transition-colors">
            Kendala laptop atau PC Anda belum tercantum di atas? Kami menyediakan layanan <strong>Gratis Konsultasi</strong> untuk membantu mengecek dan memberikan solusi terbaik bagi perangkat Anda.
          </p>

          <a
              href="https://wa.me/6289601261250?text=Halo,%20saya%20ingin%20konsultasi%20masalah%20laptop%20saya..."
              target="_blank"
              class="relative z-10 group inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-3.5 rounded-xl hover:opacity-90 transition-all duration-300 text-sm shadow-md"
          >
            Mulai Konsultasi Gratis
            <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  </div>
</template>