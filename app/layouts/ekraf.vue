<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import {
  Menu, X, ArrowLeft, ArrowRight,
  Sun, Moon, Monitor,
  Instagram, Youtube, Mail, MapPin, Github, Linkedin
} from 'lucide-vue-next'

const route = useRoute()
const open = ref(false)
const isThemeMenuOpen = ref(false)

watch(() => route.path, () => {
  open.value = false
})

const HEADER_LINKS = [
  { to: '/software-house', label: 'Pengenalan' },
  { to: '/software-house/produk', label: 'Produk' },
  { to: '/software-house/layanan', label: 'Layanan' },
  { to: '/software-house/portofolio', label: 'Portofolio' },
]

const footerLinks = [
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

const currentTheme = ref('system')
const themes = [
  { value: 'light', icon: Sun, label: 'Terang' },
  { value: 'dark', icon: Moon, label: 'Gelap' },
  { value: 'system', icon: Monitor, label: 'Sistem' }
]

const applyTheme = (themeValue: string) => {
  currentTheme.value = themeValue
  localStorage.setItem('theme', themeValue)
  isThemeMenuOpen.value = false

  const isDark =
      themeValue === 'dark' ||
      (themeValue === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)

  if (isDark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme') || 'system'
  applyTheme(savedTheme)

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (currentTheme.value === 'system') applyTheme('system')
  })
})

const isActive = (to: string) => {
  return to === '/software-house'
      ? route.path === '/software-house'
      : route.path.startsWith(to)
}
</script>

<template>
  <div class="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300 font-sans">

    <header class="fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-md border-b border-border transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center h-16 gap-6">

          <NuxtLink
              to="/"
              class="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
          >
            <ArrowLeft :size="14" />
            Kembali
          </NuxtLink>

          <div class="w-px h-5 bg-border hidden sm:block" />

          <NuxtLink to="/software-house" class="flex items-center gap-3 flex-shrink-0 group">
            <img src="/img/logo.png" alt="HIMATIFA" class="w-7 h-7 object-cover rounded-full dark:mix-blend-screen transition-all group-hover:scale-105" />
            <div class="flex flex-col leading-none">
              <div class="leading-none transition-colors duration-500">
                <div class="text-foreground font-display font-bold text-sm tracking-wide">
                  HIMATIFA
                </div>
                <div class="text-accent text-[9px] tracking-widest uppercase font-medium">
                  UMSurabaya
                </div>
              </div>
            </div>
          </NuxtLink>

          <nav class="hidden lg:flex items-center gap-1 ml-auto">
            <NuxtLink
                v-for="link in HEADER_LINKS"
                :key="link.to"
                :to="link.to"
                class="px-3 py-2 text-xs font-semibold rounded-lg transition-all"
                :class="isActive(link.to) ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground hover:bg-secondary'"
            >
              {{ link.label }}
            </NuxtLink>

            <a
                href="https://wa.me/6289601261250" target="_blank"
                class="ml-3 bg-primary text-primary-foreground text-xs font-bold px-4 py-2 rounded-lg hover:brightness-110 transition-all shadow-sm"
            >
              Kolaborasi
            </a>

            <div class="relative ml-3">
              <button
                  @click="isThemeMenuOpen = !isThemeMenuOpen"
                  class="p-2 rounded-lg text-muted-foreground hover:text-foreground bg-card border border-border shadow-sm hover:border-primary/50 transition-all duration-300 flex items-center justify-center"
                  aria-label="Ubah Tema"
              >
                <Sun v-if="currentTheme === 'light'" :size="16" />
                <Moon v-else-if="currentTheme === 'dark'" :size="16" />
                <Monitor v-else :size="16" />
              </button>

              <Transition
                  enter-active-class="transition duration-200 ease-out"
                  enter-from-class="transform scale-95 opacity-0 translate-y-2"
                  enter-to-class="transform scale-100 opacity-100 translate-y-0"
                  leave-active-class="transition duration-150 ease-in"
                  leave-from-class="transform scale-100 opacity-100 translate-y-0"
                  leave-to-class="transform scale-95 opacity-0 translate-y-2"
              >
                <div v-if="isThemeMenuOpen" class="absolute right-0 mt-2 w-36 bg-popover border border-border rounded-xl shadow-lg z-50 overflow-hidden">
                  <button
                      v-for="t in themes"
                      :key="t.value"
                      @click="applyTheme(t.value)"
                      class="w-full flex items-center gap-3 px-3 py-2 text-sm text-left transition-colors duration-200 hover:bg-secondary"
                      :class="currentTheme === t.value ? 'text-primary font-semibold' : 'text-popover-foreground'"
                  >
                    <component :is="t.icon" :size="14" />
                    {{ t.label }}
                  </button>
                </div>
              </Transition>
              <div v-if="isThemeMenuOpen" @click="isThemeMenuOpen = false" class="fixed inset-0 z-40"></div>
            </div>
          </nav>

          <button
              class="lg:hidden ml-auto p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary"
              @click="open = true"
              aria-label="Buka Menu"
          >
            <Menu :size="20" />
          </button>
        </div>
      </div>
    </header>

    <Transition
        enter-active-class="transition-opacity duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-300 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
      <div
          v-if="open"
          class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
          @click="open = false"
      ></div>
    </Transition>

    <Transition
        enter-active-class="transition-transform duration-300 ease-out"
        enter-from-class="translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition-transform duration-200 ease-in"
        leave-from-class="translate-x-0"
        leave-to-class="translate-x-full"
    >
      <div
          v-if="open"
          class="fixed top-0 right-0 bottom-0 w-[280px] max-w-[80vw] bg-background border-l border-border shadow-2xl z-[60] lg:hidden flex flex-col"
      >
        <div class="flex items-center justify-between p-4 border-b border-border">
          <div class="flex items-center gap-2">
            <img src="/img/logo.png" alt="HIMATIFA" class="w-6 h-6 object-cover rounded-full dark:mix-blend-screen" />
            <span class="font-display font-bold text-sm tracking-wide">Menu Utama</span>
          </div>
          <button
              @click="open = false"
              class="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
          >
            <X :size="20" />
          </button>
        </div>

        <div class="flex-1 overflow-y-auto py-4 px-4 flex flex-col gap-2">
          <NuxtLink
              v-for="link in HEADER_LINKS"
              :key="link.to"
              :to="link.to"
              class="px-4 py-3 text-sm font-medium rounded-xl transition-colors flex items-center justify-between group"
              :class="isActive(link.to) ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground hover:bg-secondary'"
          >
            {{ link.label }}
            <ArrowRight :size="16" class="opacity-0 group-hover:opacity-100 transition-opacity" :class="isActive(link.to) ? 'opacity-100' : ''" />
          </NuxtLink>

          <a href="https://wa.me/6289601261250" target="_blank" class="mt-4 bg-primary text-primary-foreground text-sm font-bold px-4 py-3 rounded-xl text-center shadow-sm hover:brightness-110 transition-all">
            Kolaborasi Bersama
          </a>
        </div>

        <div class="p-4 border-t border-border bg-secondary/30 mt-auto">
          <p class="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-3 px-1">Tampilan</p>
          <div class="grid grid-cols-3 gap-2 bg-background p-1.5 rounded-xl border border-border">
            <button
                v-for="t in themes"
                :key="t.value"
                @click="applyTheme(t.value)"
                class="flex flex-col items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-medium transition-all"
                :class="currentTheme === t.value ? 'bg-primary/10 text-primary shadow-sm' : 'text-muted-foreground hover:bg-secondary hover:text-foreground'"
                :title="t.label"
            >
              <component :is="t.icon" :size="16" />
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <main class="flex-1 pt-16 flex flex-col">
      <slot />
    </main>

    <footer class="bg-secondary relative overflow-hidden border-t border-border transition-colors duration-500 mt-auto">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none transition-colors duration-500" />
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none transition-colors duration-500" />

      <div class="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">

        <div class="md:col-span-4 lg:col-span-5">
          <div class="flex items-center gap-3 mb-5 group w-fit">
            <div class="relative w-12 h-12 shrink-0 transition-transform duration-300 group-hover:scale-110">
              <div class="absolute inset-0 bg-primary/20 blur-md rounded-full group-hover:bg-primary/40 transition-colors duration-500" />
              <img
                  src="/img/logo.png"
                  alt="Logo HIMATIFA"
                  class="relative w-12 h-12 object-contain transition-all duration-500 dark:mix-blend-screen"
              />
            </div>
            <div class="transition-colors duration-500">
              <div class="font-display font-extrabold text-lg bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                HIMATIFA
              </div>
              <div class="text-accent text-[10px] tracking-widest uppercase font-bold flex gap-1">
                UMSurabaya <span class="text-primary">| COMPANY</span>
              </div>
            </div>
          </div>

          <p class="text-muted-foreground text-sm leading-relaxed mb-6 transition-colors duration-500">
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
          <h4 class="font-display text-foreground text-sm font-bold mb-5 flex items-center gap-2 transition-colors duration-500">
            <span class="w-2 h-2 rounded-full bg-primary transition-colors duration-500" /> Jelajahi
          </h4>
          <ul class="space-y-3">
            <li v-for="link in footerLinks" :key="link.path">
              <NuxtLink
                  :to="link.path"
                  class="group flex items-center gap-2 text-muted-foreground text-sm hover:text-foreground transition-colors duration-300 w-fit"
              >
                <ArrowRight :size="14" class="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 text-primary transition-all duration-300" />
                <span class="group-hover:translate-x-1 transition-transform duration-300">{{ link.label }}</span>
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="md:col-span-5 lg:col-span-4 flex flex-col justify-between">
          <div>
            <h4 class="font-display text-foreground text-sm font-bold mb-5 flex items-center gap-2 transition-colors duration-500">
              <span class="w-2 h-2 rounded-full bg-accent transition-colors duration-500" /> Hubungi Kami
            </h4>
            <ul class="space-y-4 mb-8">
              <li>
                <a href="mailto:himatifa@umsurabaya.ac.id" class="group flex items-start gap-3 text-muted-foreground hover:text-foreground text-sm transition-colors duration-300">
                  <div class="p-1.5 rounded-lg bg-background border border-border group-hover:border-primary/50 group-hover:text-primary transition-colors duration-300 mt-0.5">
                    <Mail :size="14" />
                  </div>
                  <span class="mt-1">himatifa@umsurabaya.ac.id</span>
                </a>
              </li>
              <li>
                <a href="https://maps.google.com/?q=Universitas+Muhammadiyah+Surabaya" target="_blank" rel="noopener noreferrer" class="group flex items-start gap-3 text-muted-foreground hover:text-foreground text-sm transition-colors duration-300">
                  <div class="p-1.5 rounded-lg bg-background border border-border group-hover:border-primary/50 group-hover:text-primary transition-colors duration-300 mt-0.5">
                    <MapPin :size="14" />
                  </div>
                  <span class="mt-1 leading-relaxed">Jl. Sutorejo No.59, Dukuh Sutorejo, Surabaya, Jawa Timur 60113</span>
                </a>
              </li>
            </ul>

            <div class="pt-4 border-t border-border/60">
              <NuxtLink to="/" class="group flex items-center justify-between w-full p-4 rounded-xl bg-background border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <ArrowLeft :size="16" />
                  </div>
                  <div class="flex flex-col">
                    <span class="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Navigasi</span>
                    <span class="text-sm font-bold text-foreground">Kembali ke Web Utama</span>
                  </div>
                </div>
              </NuxtLink>
            </div>

          </div>
        </div>

      </div>

      <div class="border-t border-border bg-background/50 transition-colors duration-500">
        <div class="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground/80 text-xs font-medium transition-colors duration-500">
          <div class="flex items-center gap-1.5">
            <span>© 2026</span>
            <span class="w-1 h-1 rounded-full bg-border transition-colors duration-500" />
            <span class="text-foreground transition-colors duration-500">HIMATIFA UMSurabaya</span>
          </div>
          <div class="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <span>Program Studi Informatika</span>
            <span class="hidden sm:inline-block text-accent">·</span>
            <span>Since 2020</span>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>