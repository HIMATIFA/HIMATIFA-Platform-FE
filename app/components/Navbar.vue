<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import {
  Menu, X, ArrowRight, Instagram, Youtube, Globe,
  Sun, Moon, Monitor
} from 'lucide-vue-next'

const route = useRoute()

const navLinks = [
  { label: 'Beranda', path: '/' },
  { label: 'Profil', path: '/about' },
  { label: 'Kepengurusan', path: '/organization' },
  { label: 'Departement', path: '/departements' },
  { label: 'Berita', path: '/news' },
  { label: 'Dokumentasi', path: '/documentation' },
  { label: 'Kontak', path: '/contact' }
]

const socialLinks = [
  { label: 'Instagram', url: 'https://instagram.com/himatifa_ums', icon: Instagram },
  { label: 'YouTube', url: 'https://youtube.com/@himatifa_ums', icon: Youtube },
  { label: 'Website', url: 'https://umsurabaya.ac.id', icon: Globe }
]

const isScrolled = ref(false)
const isMobileOpen = ref(false)

const currentTheme = ref('system')
const isThemeMenuOpen = ref(false)

const themes = [
  { value: 'light', label: 'Terang', icon: Sun },
  { value: 'dark', label: 'Gelap', icon: Moon },
  { value: 'system', label: 'Sistem', icon: Monitor }
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

const handleScroll = () => {
  isScrolled.value = window.scrollY > 24
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })

  const savedTheme = localStorage.getItem('theme') || 'system'
  applyTheme(savedTheme)

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (currentTheme.value === 'system') applyTheme('system')
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

watch(() => route.path, () => {
  isMobileOpen.value = false
})
</script>

<template>
  <header
      class="fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-in-out"
      :class="[
      isScrolled || route.path !== '/'
        ? 'bg-background/90 backdrop-blur-md border-b border-border shadow-sm'
        : 'bg-transparent border-b border-transparent'
    ]"
  >
    <nav class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <NuxtLink to="/" class="flex items-center gap-3 group">
        <div class="relative w-8 h-8 shrink-0">
          <div class="absolute inset-0 bg-primary/20 blur-md rounded-full transition-opacity duration-500" />
          <img
              src="/img/logo.png"
              alt="Logo HIMATIFA"
              class="relative w-8 h-8 object-contain transition-all duration-500 dark:mix-blend-screen"
          />
        </div>
        <div class="leading-none transition-colors duration-500">
          <div class="text-foreground font-display font-bold text-sm tracking-wide">
            HIMATIFA
          </div>
          <div class="text-accent text-[9px] tracking-widest uppercase font-medium">
            UMSurabaya
          </div>
        </div>
      </NuxtLink>

      <ul class="hidden md:flex items-center gap-1">
        <li v-for="link in navLinks" :key="link.path">
          <NuxtLink
              :to="link.path"
              class="px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-300 inline-block"
              :class="[
              route.path === link.path
                ? 'text-foreground bg-primary/15'
                : 'text-muted-foreground hover:text-foreground hover:bg-primary/10'
            ]"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>

      <div class="hidden md:flex items-center gap-3">
        <div class="relative">
          <button
              @click="isThemeMenuOpen = !isThemeMenuOpen"
              class="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-300 flex items-center justify-center border border-transparent hover:border-border"
              aria-label="Ubah Tema"
          >
            <Sun v-if="currentTheme === 'light'" :size="18" />
            <Moon v-else-if="currentTheme === 'dark'" :size="18" />
            <Monitor v-else :size="18" />
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

        <NuxtLink
            to="/contact"
            class="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:brightness-110 transition-all duration-300 shadow-[0_0_16px_rgba(77,101,233,0.25)]"
        >
          Hubungi Kami
        </NuxtLink>
      </div>

      <button
          @click="isMobileOpen = true"
          class="md:hidden text-muted-foreground hover:text-foreground transition-colors duration-300 p-1"
          aria-label="Open menu"
      >
        <Menu :size="24" />
      </button>
    </nav>

    <Teleport to="body">
      <Transition
          enter-active-class="transition-opacity duration-300 ease-out"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition-opacity duration-200 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
      >
        <div
            v-if="isMobileOpen"
            @click="isMobileOpen = false"
            class="fixed inset-0 bg-background/80 backdrop-blur-sm z-[90] md:hidden transition-colors duration-500"
        />
      </Transition>

      <Transition
          enter-active-class="transition-transform duration-300 ease-out"
          enter-from-class="translate-x-full"
          enter-to-class="translate-x-0"
          leave-active-class="transition-transform duration-200 ease-in"
          leave-from-class="translate-x-0"
          leave-to-class="translate-x-full"
      >
        <aside
            v-if="isMobileOpen"
            class="fixed top-0 right-0 bottom-0 w-[280px] sm:w-[320px] bg-card border-l border-border z-[100] p-6 flex flex-col justify-between shadow-2xl md:hidden overflow-y-auto transition-colors duration-500"
        >
          <div>
            <div class="flex items-center justify-between pb-6 mb-6 border-b border-border transition-colors duration-500">
              <div class="flex items-center gap-2.5">
                <img src="/img/logo.png" alt="Logo HIMATIFA" class="w-7 h-7 object-contain dark:mix-blend-screen transition-all duration-500" />
                <span class="font-display font-bold text-foreground text-base transition-colors duration-500">HIMATIFA</span>
              </div>
              <button
                  @click="isMobileOpen = false"
                  class="p-1.5 text-muted-foreground hover:text-foreground rounded-lg hover:bg-secondary transition-colors duration-300"
                  aria-label="Close menu"
              >
                <X :size="20" />
              </button>
            </div>

            <ul class="flex flex-col gap-1.5 mb-6">
              <li v-for="link in navLinks" :key="link.path">
                <NuxtLink
                    :to="link.path"
                    class="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300"
                    :class="[
                    route.path === link.path
                      ? 'text-foreground bg-primary/15 font-semibold'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                  ]"
                >
                  <span>{{ link.label }}</span>
                  <ArrowRight :size="14" class="opacity-50" />
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div class="pt-6 border-t border-border mt-auto transition-colors duration-500">
            <div class="bg-secondary border border-border p-1.5 rounded-xl flex items-center gap-1 mb-6 transition-colors duration-500">
              <button
                  v-for="t in themes"
                  :key="t.value"
                  @click="applyTheme(t.value)"
                  class="flex-1 py-2 flex items-center justify-center rounded-lg transition-all duration-300"
                  :class="currentTheme === t.value ? 'bg-popover text-primary shadow-sm border border-border' : 'text-muted-foreground hover:text-foreground'"
              >
                <component :is="t.icon" :size="16" />
              </button>
            </div>

            <NuxtLink
                to="/contact"
                class="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:brightness-110 transition-all duration-300 shadow-[0_0_16px_rgba(77,101,233,0.25)] mb-6"
            >
              Hubungi Kami
            </NuxtLink>

            <div class="flex items-center justify-center gap-3">
              <a
                  v-for="s in socialLinks"
                  :key="s.label"
                  :href="s.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  :aria-label="s.label"
                  class="w-9 h-9 rounded-lg bg-secondary border border-border flex items-center justify-center text-accent hover:text-foreground hover:bg-primary/20 transition-all duration-300"
              >
                <component :is="s.icon" :size="16" />
              </a>
            </div>
          </div>
        </aside>
      </Transition>
    </Teleport>
  </header>
</template>