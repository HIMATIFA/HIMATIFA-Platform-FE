<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const open = ref(false)
const colorMode = useColorMode()

watch(() => route.path, () => {
  open.value = false
})

const NAV_LINKS = [
  { to: '/himatifa-company', label: 'Pengenalan' },
  { to: '/himatifa-company/produk', label: 'Produk' },
  { to: '/himatifa-company/layanan', label: 'Layanan' },
  { to: '/himatifa-company/portofolio', label: 'Portofolio' },
  { to: '/himatifa-company/tim', label: 'Tim & Kapabilitas' },
]

const themes = [
  { value: 'light', icon: 'ph:sun-bold', label: 'Terang' },
  { value: 'dark', icon: 'ph:moon-bold', label: 'Gelap' },
  { value: 'system', icon: 'ph:monitor-bold', label: 'Sistem' }
]

const isActive = (to: string) => {
  return to === '/himatifa-company'
      ? route.path === '/himatifa-company'
      : route.path.startsWith(to)
}
</script>

<template>
  <div class="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">

    <header class="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border font-sans transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center h-16 gap-6">

          <NuxtLink
              to="/"
              class="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
          >
            <Icon name="ph:arrow-left-bold" class="text-sm" />
            HIMATIFA
          </NuxtLink>

          <div class="w-px h-5 bg-border" />

          <NuxtLink to="/himatifa-company" class="flex items-center gap-3 flex-shrink-0">
            <img src="~~~/public/img/logo.png" alt="HIMATIFA" class="w-7 h-7 object-cover rounded-full opacity-90" />
            <div class="flex flex-col leading-none">
              <span class="text-foreground font-extrabold text-sm tracking-wide">HIMATIFA</span>
              <span class="text-primary text-[9px] font-bold tracking-widest uppercase">Company</span>
            </div>
          </NuxtLink>

          <nav class="hidden lg:flex items-center gap-1 ml-auto">
            <NuxtLink
                v-for="link in NAV_LINKS"
                :key="link.to"
                :to="link.to"
                class="px-3 py-2 text-xs font-semibold rounded-lg transition-colors"
                :class="isActive(link.to) ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground hover:bg-input-background'"
            >
              {{ link.label }}
            </NuxtLink>

            <a
                href="mailto:halo@himatifa.org"
                class="ml-3 bg-primary text-primary-foreground text-xs font-bold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
            >
              Kolaborasi
            </a>

            <!-- Theme Switcher Desktop -->
            <div class="flex items-center p-1 rounded-xl bg-card border border-border ml-3 shadow-sm">
              <button
                  v-for="t in themes"
                  :key="t.value"
                  @click="colorMode.preference = t.value"
                  :title="t.label"
                  :class="[
                  'p-1.5 rounded-lg transition-all flex items-center justify-center',
                  colorMode.preference === t.value
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-input-background'
                ]"
              >
                <Icon :name="t.icon" class="text-[1.1rem] block" />
              </button>
            </div>
          </nav>

          <button
              class="lg:hidden ml-auto p-2 text-muted-foreground hover:text-foreground"
              @click="open = !open"
          >
            <Icon :name="open ? 'ph:x-bold' : 'ph:list-bold'" class="text-xl" />
          </button>
        </div>
      </div>

      <div v-if="open" class="lg:hidden border-t border-border bg-background transition-colors duration-300">
        <div class="px-4 py-4 flex flex-col gap-1">
          <NuxtLink
              v-for="link in NAV_LINKS"
              :key="link.to"
              :to="link.to"
              class="px-4 py-3 text-sm font-medium rounded-xl transition-colors"
              :class="isActive(link.to) ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground hover:bg-input-background'"
          >
            {{ link.label }}
          </NuxtLink>

          <a href="mailto:halo@himatifa.org" class="mt-2 mb-4 bg-primary text-primary-foreground text-sm font-bold px-4 py-3 rounded-xl text-center shadow-sm">
            Kolaborasi
          </a>

          <!-- Theme Switcher Mobile -->
          <div class="border-t border-border pt-4">
            <p class="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2 px-1">Tema Tampilan</p>
            <div class="flex gap-2">
              <button
                  v-for="t in themes"
                  :key="t.value"
                  @click="colorMode.preference = t.value"
                  :class="[
                  'flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm transition-all border',
                  colorMode.preference === t.value
                    ? 'bg-primary/10 text-primary border-primary/20 font-bold'
                    : 'bg-card text-muted-foreground border-border hover:bg-input-background hover:text-foreground'
                ]"
              >
                <Icon :name="t.icon" class="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main class="flex-1 pt-16">
      <slot />
    </main>

    <footer class="border-t border-border py-10 font-sans transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <img src="~~~/public/img/logo.png" alt="HIMATIFA" class="w-7 h-7 object-cover rounded-full opacity-70" />
          <span class="text-muted-foreground text-xs">HIMATIFA Company — Bagian dari HIMATIFA</span>
        </div>

        <NuxtLink to="/app/pages" class="text-xs text-muted-foreground/70 hover:text-foreground transition-colors">
          Kembali ke HIMATIFA &rarr;
        </NuxtLink>
      </div>
    </footer>
  </div>
</template>
