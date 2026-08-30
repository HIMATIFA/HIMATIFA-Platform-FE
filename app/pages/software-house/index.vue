<script setup lang="ts">
import {
  ArrowRight,
  Code2,
  Palette,
  ShoppingBag,
  Sparkles,
  Smartphone,
  MessageSquare
} from 'lucide-vue-next'

definePageMeta({
  layout: 'ekraf'
})

useHead({
  title: 'HIMATIFA Platform - Software House & Ekraf',
  meta: [
    { name: 'description', content: 'Layanan IT profesional dan merchandise kreatif dari HIMATIFA UMSurabaya.' }
  ]
})

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Pembuatan website modern, responsif, dan teroptimasi mulai dari company profile hingga e-commerce.'
  },
  {
    icon: Palette,
    title: 'Kreatif & Desain',
    description: 'Layanan jasa dokumentasi event, foto katalog UMKM, hingga desain antarmuka (UI/UX).'
  },
  {
    icon: Smartphone,
    title: 'IT & Services',
    description: 'Layanan perbaikan, instalasi OS, pembersihan (cleaning & repasta), dan upgrade komponen laptop/PC.'
  }
]

const products = [
  { name: 'Tumbler Eksklusif HIMATIFA', price: 'Rp 45.000', tag: 'Bestseller' },
  { name: 'Sticker Pack Developer', price: 'Rp 15.000', tag: 'Aksesoris' },
  { name: 'Gantungan Kunci Akrilik IT', price: 'Rp 20.000', tag: 'Merch' },
]

const portfolios = [
  { title: 'Sistem Informasi Akademik', category: 'Web App' },
  { title: 'Redesign Company Profile', category: 'UI/UX' },
]
</script>

<template>
  <div class="font-sans min-h-screen bg-background text-foreground transition-colors duration-300">

    <section class="relative min-h-[90vh] flex items-center bg-background overflow-hidden border-b border-border">
      <div
          class="absolute inset-0 opacity-40"
          style="background-image: radial-gradient(var(--primary) 1px, transparent 1px); background-size: 28px 28px;"
      />
      <div class="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none transition-colors duration-500" />
      <div class="absolute -top-32 -left-32 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none transition-colors duration-500" />

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-20">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          <div class="text-left flex flex-col items-start order-2 lg:order-1">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight max-w-2xl">
              Solusi Digital & <br class="hidden lg:block" />
              <span class="text-primary">Kreativitas Tanpa Batas</span>
            </h1>

            <p class="text-muted-foreground text-sm md:text-base max-w-lg mb-10 leading-relaxed">
              Memberdayakan ide Anda melalui layanan pengembangan perangkat lunak profesional, jasa IT, dan merchandise eksklusif karya mahasiswa Teknik Informatika UMSurabaya.
            </p>

            <div class="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <NuxtLink to="/software-house/layanan" class="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md group">
                Mulai Proyek
                <ArrowRight :size="16" class="group-hover:translate-x-1 transition-transform" />
              </NuxtLink>
              <NuxtLink to="/software-house/produk" class="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-background text-foreground font-bold text-sm flex items-center justify-center gap-2 border border-border hover:bg-secondary transition-all">
                Lihat Katalog
                <ShoppingBag :size="16" />
              </NuxtLink>
            </div>
          </div>

          <div class="flex justify-center lg:justify-end order-1 lg:order-2 mb-10 lg:mb-0">
            <div class="relative group">
              <div class="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-125 group-hover:scale-150 group-hover:bg-primary/30 transition-all duration-700" />

              <div class="relative w-56 h-56 md:w-72 md:h-72 lg:w-[380px] lg:h-[380px] flex items-center justify-center p-8 bg-background/30 backdrop-blur-md rounded-full border border-primary/20 shadow-2xl">
                <img
                    src="/img/logo.png"
                    alt="Logo HIMATIFA Platform"
                    class="relative w-full h-full object-contain mix-blend-screen drop-shadow-[0_0_15px_rgba(77,101,233,0.5)] group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="py-24 bg-secondary/30 border-y border-border transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="text-primary text-xs font-bold tracking-widest uppercase mb-2 block">Keahlian Kami</span>
          <h2 class="text-3xl font-extrabold text-foreground mb-4">Layanan IT Profesional</h2>
          <p class="text-muted-foreground text-sm leading-relaxed">Kami menyediakan solusi teknologi, servis perangkat, dan multimedia yang disesuaikan dengan kebutuhan Anda.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="service in services" :key="service.title" class="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group flex flex-col items-center text-center">
            <div class="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <component :is="service.icon" :size="28" />
            </div>
            <h3 class="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{{ service.title }}</h3>
            <p class="text-sm text-muted-foreground leading-relaxed">
              {{ service.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 class="text-3xl font-extrabold text-foreground mb-3">Karya Terbaik Kami</h2>
            <p class="text-muted-foreground text-sm">Beberapa proyek yang telah berhasil diselesaikan oleh tim HIMATIFA.</p>
          </div>
          <NuxtLink to="/software-house/layanan" class="text-primary text-sm font-bold flex items-center gap-1.5 hover:opacity-80 transition-opacity">
            Lihat layanan kami <ArrowRight :size="16" />
          </NuxtLink>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div v-for="port in portfolios" :key="port.title" class="group relative rounded-2xl overflow-hidden border border-border aspect-video bg-secondary cursor-pointer">
            <PlaceholderImage class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
            <div class="absolute bottom-0 left-0 p-6 sm:p-8 translate-y-2 group-hover:translate-y-0 transition-transform">
              <span class="text-primary text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2 block bg-primary/20 backdrop-blur-sm w-fit px-2 py-1 rounded">{{ port.category }}</span>
              <h3 class="text-xl sm:text-2xl font-bold text-white">{{ port.title }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-primary/5 border-y border-border transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider mb-4 border border-primary/10">
              <ShoppingBag :size="14" /> Ekraf Store
            </div>
            <h2 class="text-3xl font-extrabold text-foreground mb-3">Merch & Premium</h2>
            <p class="text-muted-foreground text-sm">Dukung aktivitas produktif Anda dengan merchandise fisik dan akun premium digital.</p>
          </div>
          <NuxtLink to="/software-house/produk" class="px-6 py-2.5 rounded-xl bg-background border border-border text-foreground text-xs font-bold hover:bg-secondary hover:border-primary/50 transition-colors shadow-sm">
            Katalog Lengkap
          </NuxtLink>
        </div>

        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div v-for="prod in products" :key="prod.name" class="bg-card rounded-2xl overflow-hidden border border-border flex flex-col group hover:border-primary/50 hover:shadow-lg transition-all duration-300">
            <div class="relative aspect-square overflow-hidden bg-secondary">
              <PlaceholderImage class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div class="absolute inset-0 bg-background/10 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div class="p-6 flex flex-col flex-1 text-center items-center">
              <span class="text-[10px] text-muted-foreground font-medium bg-secondary px-2.5 py-1 rounded-md mb-3 border border-border">{{ prod.tag }}</span>
              <h3 class="font-bold text-foreground text-sm mb-2 group-hover:text-primary transition-colors">{{ prod.name }}</h3>
              <p class="text-foreground font-extrabold text-base mt-auto">{{ prod.price }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative overflow-hidden rounded-3xl bg-secondary/50 border border-border p-10 sm:p-16 text-center flex flex-col items-center transition-colors">
          <div class="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none"></div>
          <div class="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none"></div>

          <MessageSquare class="w-12 h-12 text-primary mb-5 relative z-10" />

          <h3 class="text-2xl md:text-3xl font-extrabold text-foreground mb-4 relative z-10">Siap Mewujudkan Ide Anda?</h3>
          <p class="text-muted-foreground text-sm mb-10 max-w-xl mx-auto relative z-10 leading-relaxed">
            Diskusikan kebutuhan website, perbaikan laptop, atau pengadaan merchandise untuk acara Anda bersama tim profesional kami.
          </p>

          <a
              href="https://wa.me/6289601261250"
              target="_blank"
              class="relative z-10 group inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-3.5 rounded-xl hover:opacity-90 transition-all duration-300 text-sm shadow-md"
          >
            Hubungi via WhatsApp
            <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>

  </div>
</template>
