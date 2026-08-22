<script setup lang="ts">
import { Instagram, Youtube, Mail, MapPin, Github, Linkedin, ArrowRight, Send } from 'lucide-vue-next'

const navLinks = [
  { label: 'Beranda', path: '/' },
  { label: 'Profil', path: '/about' },
  { label: 'Kepengurusan', path: '/organization' },
  { label: 'Departemen', path: '/departements' },
  { label: 'Berita', path: '/news' },
  { label: 'Dokumentasi', path: '/documentation' },
  { label: 'Kontak', path: '/contact' }
]

const socialLinks = [
  { label: 'Instagram', url: 'https://www.instagram.com/himatifa_umsura/', icon: Instagram },
  { label: 'YouTube', url: 'https://www.youtube.com/@HIMATIFAUMSBY', icon: Youtube },
  { label: 'GitHub', url: 'https://github.com/HIMATIFA', icon: Github },
  { label: 'LinkedIn', url: '#', icon: Linkedin },
  { label: 'TikTok', url: '#', icon: 'tiktok' }
]
</script>

<template>
  <footer class="bg-secondary relative overflow-hidden border-t border-border">
    <div class="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
    <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

    <div class="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">

      <div class="md:col-span-4 lg:col-span-5">
        <div class="flex items-center gap-3 mb-5 group w-fit">
          <div class="relative w-12 h-12 shrink-0 transition-transform duration-300 group-hover:scale-110">
            <div class="absolute inset-0 bg-primary/20 blur-md rounded-full group-hover:bg-primary/40 transition-colors" />
            <img
                src="/img/logo.png"
                alt="Logo HIMATIFA"
                class="relative w-12 h-12 object-contain mix-blend-screen"
            />
          </div>
          <div>
            <div class="font-display font-extrabold text-lg bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              HIMATIFA
            </div>
            <div class="text-accent text-[10px] tracking-widest uppercase font-bold">
              UMSurabaya
            </div>
          </div>
        </div>

        <p class="text-muted-foreground text-sm leading-relaxed mb-6">
          Wadah kolaborasi, inovasi, dan aspirasi bagi seluruh Mahasiswa Informatika Universitas Muhammadiyah Surabaya untuk berkembang bersama di era digital.
        </p>

        <div class="flex flex-wrap items-center gap-3">
          <a
              v-for="social in socialLinks"
              :key="social.label"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.label"
              class="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary-foreground hover:bg-primary hover:border-primary hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-[0_4px_20px_rgba(77,101,233,0.4)] group"
          >
            <component
                v-if="social.icon !== 'tiktok'"
                :is="social.icon"
                :size="18"
                class="group-hover:scale-110 transition-transform duration-300"
            />
            <svg
                v-else
                width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="group-hover:scale-110 transition-transform duration-300"
            >
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
            </svg>
          </a>
        </div>
      </div>

      <div class="md:col-span-3 lg:col-span-3">
        <h4 class="font-display text-foreground text-sm font-bold mb-5 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-primary" /> Jelajahi
        </h4>
        <ul class="space-y-3">
          <li v-for="link in navLinks" :key="link.path">
            <NuxtLink
                :to="link.path"
                class="group flex items-center gap-2 text-muted-foreground text-sm hover:text-foreground transition-colors w-fit"
            >
              <ArrowRight :size="14" class="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 text-primary transition-all duration-300" />
              <span class="group-hover:translate-x-1 transition-transform duration-300">{{ link.label }}</span>
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div class="md:col-span-5 lg:col-span-4 flex flex-col justify-between">
        <div>
          <h4 class="font-display text-foreground text-sm font-bold mb-5 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-accent" /> Hubungi Kami
          </h4>
          <ul class="space-y-4 mb-8">
            <li>
              <a href="mailto:himatifa@umsurabaya.ac.id" class="group flex items-start gap-3 text-muted-foreground hover:text-foreground text-sm transition-colors">
                <div class="p-1.5 rounded-lg bg-background border border-border group-hover:border-primary/50 group-hover:text-primary transition-colors mt-0.5">
                  <Mail :size="14" />
                </div>
                <span class="mt-1">himatifa@umsurabaya.ac.id</span>
              </a>
            </li>
            <li>
              <a href="https://maps.google.com/?q=Universitas+Muhammadiyah+Surabaya" target="_blank" rel="noopener noreferrer" class="group flex items-start gap-3 text-muted-foreground hover:text-foreground text-sm transition-colors">
                <div class="p-1.5 rounded-lg bg-background border border-border group-hover:border-primary/50 group-hover:text-primary transition-colors mt-0.5">
                  <MapPin :size="14" />
                </div>
                <span class="mt-1 leading-relaxed">Jl. Sutorejo No.59, Dukuh Sutorejo, Surabaya, Jawa Timur 60113</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

    </div>

    <div class="border-t border-border bg-background/50">
      <div class="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground/80 text-xs font-medium">
        <div class="flex items-center gap-1.5">
          <span>© 2026</span>
          <span class="w-1 h-1 rounded-full bg-border" />
          <span class="text-foreground">HIMATIFA UMSurabaya</span>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          <span>Program Studi Informatika</span>
          <span class="hidden sm:inline-block text-accent">·</span>
          <span>Since 2020</span>
        </div>
      </div>
    </div>
  </footer>
</template>