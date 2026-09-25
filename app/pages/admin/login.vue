<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import {
  ArrowLeft,
  ShieldCheck,
  Sun,
  Moon,
  Eye,
  EyeOff,
  Monitor,
  Loader2
} from 'lucide-vue-next'

definePageMeta({
  layout: 'blank'
})

const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)
const showPassword = ref(false)

const theme = ref('system')
const isThemeMenuOpen = ref(false)
let mediaQuery: MediaQueryList | null = null

const applyTheme = () => {
  const isDarkOS = window.matchMedia('(prefers-color-scheme: dark)').matches
  const shouldBeDark = theme.value === 'dark' || (theme.value === 'system' && isDarkOS)

  if (shouldBeDark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  localStorage.setItem('cms-theme', theme.value)
}

const setTheme = (newTheme: string) => {
  theme.value = newTheme
  applyTheme()
  isThemeMenuOpen.value = false
}

const handleSystemThemeChange = () => {
  if (theme.value === 'system') applyTheme()
}

onMounted(() => {
  const savedTheme = localStorage.getItem('cms-theme')
  if (savedTheme) {
    theme.value = savedTheme
  }

  mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  mediaQuery.addEventListener('change', handleSystemThemeChange)

  applyTheme()
})

onUnmounted(() => {
  if (mediaQuery) {
    mediaQuery.removeEventListener('change', handleSystemThemeChange)
  }
})

const demoAccount = {
  label: 'Super Admin',
  role: 'superadmin',
  email: 'superadmin@himatifa.or.id'
}

const fillDemo = () => {
  email.value = demoAccount.email
  password.value = 'admin123'
}

const handleLogin = () => {
  loading.value = true
  error.value = ''

  setTimeout(() => {
    if (email.value === demoAccount.email && password.value === 'admin123') {
      navigateTo('/admin')
    } else {
      error.value = 'Oops, sepertinya email atau kata sandi kurang tepat. Coba periksa kembali, ya!'
    }
    loading.value = false
  }, 1200)
}
</script>

<template>
  <div class="min-h-screen flex bg-primary dark:bg-background lg:bg-background transition-colors relative overflow-hidden">

    <div class="hidden lg:block absolute inset-0 pointer-events-none opacity-[0.15] dark:opacity-30 z-0"
         style="background-image: radial-gradient(var(--border) 1.5px, transparent 1.5px); background-size: 24px 24px;">
    </div>

    <div class="hidden lg:flex flex-col p-10 w-[440px] flex-shrink-0 bg-primary dark:bg-secondary border-r border-border relative overflow-hidden shadow-[20px_0_40px_rgb(0,0,0,0.05)] dark:shadow-[20px_0_40px_rgb(0,0,0,0.4)] z-10">

      <div class="absolute top-0 right-0 w-72 h-72 bg-primary-foreground/20 dark:bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground/10 dark:bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

      <div class="relative z-10 flex items-center gap-3">
        <HimatifaLogoMark src="/img/logo.png" sizeClass="w-10 h-10 drop-shadow-md" />
        <div class="leading-none">
          <div class="text-primary-foreground dark:text-foreground font-display font-bold text-base tracking-wide">
            HIMATIFA
          </div>
          <div class="text-primary-foreground/70 dark:text-accent text-[10px] tracking-widest uppercase font-medium mt-0.5">
            UMSURA
          </div>
        </div>
      </div>

      <div class="relative z-10 flex flex-col justify-center my-auto py-12">
        <div class="mb-8 mx-20">
          <HimatifaLogoMark src="/img/logo.png" sizeClass="w-32 h-32 drop-shadow-2xl" />
        </div>

        <h2 class="text-4xl font-black text-primary-foreground dark:text-foreground mb-4 font-display leading-[1.15] tracking-tight">
          Panel Utama<br />CMS HIMATIFA
        </h2>

        <p class="text-base leading-relaxed text-primary-foreground/80 dark:text-muted-foreground max-w-sm">
          Pusat kendali penuh untuk mengelola berita, struktur organisasi, dan seluruh konten portal digital.
        </p>
      </div>
    </div>

    <div class="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 lg:p-6 relative z-10 w-full min-h-screen">

      <div class="lg:hidden absolute top-6 left-5 sm:left-8 flex items-center gap-3 z-20">
        <HimatifaLogoMark src="/img/logo.png" sizeClass="w-8 h-8 drop-shadow-md" />
        <div class="leading-none">
          <div class="text-primary-foreground dark:text-foreground font-display font-bold text-sm tracking-wide">
            HIMATIFA
          </div>
          <div class="text-primary-foreground/70 dark:text-accent text-[9px] tracking-widest uppercase font-medium mt-0.5">
            UMSurabaya
          </div>
        </div>
      </div>

      <div class="absolute top-5 right-5 sm:top-8 sm:right-8 lg:top-6 lg:right-6 z-50">
        <button
            @click="isThemeMenuOpen = !isThemeMenuOpen"
            class="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-background/90 dark:bg-card/80 backdrop-blur-md border border-border text-foreground hover:border-primary hover:text-primary shadow-sm transition-colors"
            title="Pengaturan Tema"
        >
          <Sun v-if="theme === 'light'" class="w-[18px] h-[18px] sm:w-5 sm:h-5" />
          <Moon v-else-if="theme === 'dark'" class="w-[18px] h-[18px] sm:w-5 sm:h-5" />
          <Monitor v-else class="w-[18px] h-[18px] sm:w-5 sm:h-5" />
        </button>

        <div v-if="isThemeMenuOpen" class="absolute right-0 mt-2 w-36 bg-card border border-border rounded-xl shadow-xl overflow-hidden py-1">
          <button @click="setTheme('light')" class="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium hover:bg-secondary transition-colors" :class="{'text-primary bg-primary/5': theme === 'light'}">
            <Sun class="w-4 h-4" /> Terang
          </button>
          <button @click="setTheme('dark')" class="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium hover:bg-secondary transition-colors" :class="{'text-primary bg-primary/5': theme === 'dark'}">
            <Moon class="w-4 h-4" /> Gelap
          </button>
          <button @click="setTheme('system')" class="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium hover:bg-secondary transition-colors" :class="{'text-primary bg-primary/5': theme === 'system'}">
            <Monitor class="w-4 h-4" /> Sistem
          </button>
        </div>

        <div v-if="isThemeMenuOpen" @click="isThemeMenuOpen = false" class="fixed inset-0 z-[-1]"></div>
      </div>

      <div class="w-full max-w-sm mt-16 sm:mt-8 lg:mt-0 bg-background/95 dark:bg-card/95 lg:bg-background/80 lg:dark:bg-transparent backdrop-blur-xl lg:backdrop-blur-none p-6 sm:p-8 lg:p-10 rounded-[1.75rem] lg:rounded-none shadow-2xl lg:shadow-none border border-border/50 dark:border-border lg:border-none relative z-10">

        <div class="mb-7">
          <h1 class="text-2xl sm:text-3xl font-black mb-1.5 font-display text-foreground tracking-tight">
            Halo, Masuk Yuk! 👋
          </h1>
          <p class="text-xs sm:text-sm text-muted-foreground">
            Pastikan Anda memiliki akses pengurus.
          </p>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-4 sm:space-y-5">
          <div class="group">
            <label class="block text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2 text-foreground/80 group-focus-within:text-primary transition-colors">
              Email Administrator
            </label>
            <div class="relative overflow-hidden rounded-xl border border-border bg-input-background focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 shadow-sm">
              <input
                  type="email"
                  v-model="email"
                  class="w-full px-4 py-3 sm:py-3.5 bg-transparent focus:outline-none text-foreground placeholder:text-muted-foreground/50 text-sm relative z-10"
                  placeholder="superadmin@himatifa.or.id"
                  required
                  :disabled="loading"
              />
            </div>
          </div>

          <div class="group">
            <div class="flex items-center justify-between mb-2">
              <label class="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-foreground/80 group-focus-within:text-primary transition-colors">
                Kata Sandi
              </label>
            </div>
            <div class="relative overflow-hidden rounded-xl border border-border bg-input-background focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 shadow-sm">
              <input
                  :type="showPassword ? 'text' : 'password'"
                  v-model="password"
                  class="w-full pl-4 pr-12 py-3 sm:py-3.5 bg-transparent focus:outline-none text-foreground placeholder:text-muted-foreground/50 text-sm relative z-10"
                  placeholder="••••••••"
                  required
                  :disabled="loading"
              />
              <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-muted-foreground hover:text-foreground z-20"
                  tabindex="-1"
                  :disabled="loading"
              >
                <Eye v-if="showPassword" class="w-[18px] h-[18px]" />
                <EyeOff v-else class="w-[18px] h-[18px]" />
              </button>
            </div>
          </div>

          <div v-if="error" class="p-3 sm:p-4 rounded-xl text-xs bg-destructive/10 text-destructive border border-destructive/20 font-semibold flex items-start gap-2">
            <span>⚠️</span>
            <span>{{ error }}</span>
          </div>

          <button
              type="submit"
              class="w-full flex items-center justify-center gap-2 mt-2 px-4 py-3.5 sm:py-4 bg-primary text-primary-foreground rounded-xl font-bold font-display text-sm sm:text-base hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed"
              :disabled="loading"
          >
            <Loader2 v-if="loading" class="w-5 h-5 animate-spin" />
            <span v-if="loading">Memverifikasi...</span>
            <span v-else>Masuk ke CMS</span>
          </button>
        </form>

        <div class="hidden md:block mt-8 p-5 rounded-2xl bg-secondary/50 border border-border/50">
          <div class="flex items-center justify-between mb-3">
            <p class="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
              Akses Pengembang
            </p>
            <span class="px-2 py-0.5 rounded text-[9px] font-bold bg-primary/10 text-primary uppercase tracking-widest border border-primary/20">Demo</span>
          </div>
          <button
              @click="fillDemo"
              type="button"
              class="w-full text-xs px-3 py-3 rounded-xl font-bold text-center bg-background border border-border text-foreground hover:border-primary hover:text-primary hover:bg-primary/5 shadow-sm"
              :disabled="loading"
          >
            Isi Otomatis Kredensial Demo
          </button>
        </div>

        <button
            @click="navigateTo('/')"
            class="mt-8 sm:mt-10 text-xs sm:text-sm w-full text-center text-muted-foreground font-semibold hover:text-foreground flex items-center justify-center gap-2"
        >
          <ArrowLeft class="w-4 h-4" />
          Kembali ke Beranda
        </button>
      </div>

    </div>
  </div>
</template>