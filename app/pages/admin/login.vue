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
  Loader2,
  CheckCircle2
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
  <div class="min-h-screen flex bg-primary dark:bg-background lg:bg-background transition-colors duration-500 relative overflow-hidden">

    <div class="hidden lg:block absolute inset-0 pointer-events-none opacity-[0.15] dark:opacity-30 transition-colors duration-500 z-0"
         style="background-image: radial-gradient(var(--border) 1.5px, transparent 1.5px); background-size: 24px 24px;">
    </div>

    <div class="hidden lg:block absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none opacity-60 dark:opacity-20 transition-opacity duration-500">
      <svg class="relative block w-full h-[25vh] min-h-[150px] max-h-[300px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g class="waves">
          <use href="#gentle-wave" x="48" y="0" class="text-primary/20 fill-current animate-wave-slow" />
          <use href="#gentle-wave" x="48" y="3" class="text-primary/30 fill-current animate-wave-medium" />
          <use href="#gentle-wave" x="48" y="5" class="text-primary/40 fill-current animate-wave-fast" />
        </g>
      </svg>
    </div>

    <div class="hidden lg:flex flex-col justify-between p-10 w-[440px] flex-shrink-0 bg-primary dark:bg-secondary border-r border-border relative overflow-hidden transition-colors duration-500 shadow-[20px_0_40px_rgb(0,0,0,0.05)] dark:shadow-[20px_0_40px_rgb(0,0,0,0.4)] z-10">
      <div class="absolute top-0 right-0 w-72 h-72 bg-primary-foreground/20 dark:bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none transition-colors duration-500 animate-pulse-slow"></div>
      <div class="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground/10 dark:bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none transition-colors duration-500"></div>

      <div class="relative z-10 flex items-center gap-3 group cursor-default">
        <HimatifaLogoMark src="/img/logo.png" sizeClass="w-10 h-10 group-hover:scale-110 transition-transform duration-500 drop-shadow-md" />
        <div class="leading-none transition-colors duration-500">
          <div class="text-primary-foreground dark:text-foreground font-display font-bold text-base tracking-wide">
            HIMATIFA
          </div>
          <div class="text-primary-foreground/70 dark:text-accent text-[10px] tracking-widest uppercase font-medium mt-0.5">
            UMSurabaya
          </div>
        </div>
      </div>

      <div class="relative z-10 flex flex-col justify-center my-auto py-12">
        <div class="w-fit mb-8 relative">
          <div class="absolute inset-0 bg-primary-foreground/20 dark:bg-primary/20 blur-2xl rounded-full scale-150 animate-pulse"></div>
          <div class="p-8 rounded-[2rem] bg-primary-foreground/10 dark:bg-card border border-primary-foreground/20 dark:border-border backdrop-blur-md transition-colors duration-500 relative shadow-xl hover:-translate-y-2 hover:shadow-2xl hover:border-primary-foreground/40 dark:hover:border-primary/50">
            <HimatifaLogoMark src="/img/logo.png" sizeClass="w-32 h-32 drop-shadow-2xl" />
          </div>
        </div>

        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-foreground/15 dark:bg-card text-primary-foreground dark:text-primary text-[11px] font-bold tracking-widest uppercase mb-5 transition-colors duration-500 border border-primary-foreground/20 dark:border-border w-fit shadow-sm backdrop-blur-sm">
          <ShieldCheck class="w-4 h-4" /> Super Admin Control
        </div>

        <h2 class="text-4xl font-black text-primary-foreground dark:text-foreground mb-4 font-display leading-[1.15] transition-colors duration-500 tracking-tight">
          Panel Utama<br />CMS HIMATIFA
        </h2>

        <p class="text-base leading-relaxed text-primary-foreground/80 dark:text-muted-foreground transition-colors duration-500 max-w-sm">
          Pusat kendali penuh untuk mengelola berita, struktur organisasi, dan seluruh konten portal digital.
        </p>
      </div>

      <div class="text-xs text-primary-foreground/60 dark:text-muted-foreground font-medium relative z-10 transition-colors duration-500 flex items-center gap-2">
        <CheckCircle2 class="w-4 h-4 text-green-400 dark:text-green-500" />
        Sistem Berjalan Normal · Versi 2.0
      </div>
    </div>

    <div class="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 lg:p-6 relative z-10 w-full min-h-screen">

      <div class="lg:hidden absolute top-6 left-5 sm:left-8 flex items-center gap-3 z-20 group">
        <HimatifaLogoMark src="/img/logo.png" sizeClass="w-8 h-8 drop-shadow-md group-hover:scale-105 transition-transform" />
        <div class="leading-none transition-colors duration-500">
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
            class="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-background/90 dark:bg-card/80 backdrop-blur-md border border-border text-foreground hover:border-primary hover:text-primary shadow-sm hover:shadow-md transition-all duration-300"
            title="Pengaturan Tema"
        >
          <Sun v-if="theme === 'light'" class="w-[18px] h-[18px] sm:w-5 sm:h-5" />
          <Moon v-else-if="theme === 'dark'" class="w-[18px] h-[18px] sm:w-5 sm:h-5" />
          <Monitor v-else class="w-[18px] h-[18px] sm:w-5 sm:h-5" />
        </button>

        <div v-if="isThemeMenuOpen" class="absolute right-0 mt-2 w-36 bg-card border border-border rounded-xl shadow-xl overflow-hidden py-1 animate-in fade-in slide-in-from-top-2 duration-200">
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

      <div class="w-full max-w-sm mt-16 sm:mt-8 lg:mt-0 bg-background/95 dark:bg-card/95 lg:bg-background/80 lg:dark:bg-transparent backdrop-blur-xl lg:backdrop-blur-none p-6 sm:p-8 lg:p-10 rounded-[1.75rem] lg:rounded-none shadow-2xl lg:shadow-none border border-border/50 dark:border-border lg:border-none relative z-10 transition-colors duration-500">

        <div class="mb-7">
          <h1 class="text-2xl sm:text-3xl font-black mb-1.5 font-display text-foreground transition-colors duration-500 tracking-tight">
            Halo, Masuk Yuk! 👋
          </h1>
          <p class="text-xs sm:text-sm text-muted-foreground transition-colors duration-500">
            Pastikan Anda memiliki akses pengurus.
          </p>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-4 sm:space-y-5">
          <div class="group">
            <label class="block text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2 text-foreground/80 group-focus-within:text-primary transition-colors duration-300">
              Email Administrator
            </label>
            <div class="relative overflow-hidden rounded-xl border border-border bg-input-background focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all shadow-sm">
              <input
                  type="email"
                  v-model="email"
                  class="w-full px-4 py-3 sm:py-3.5 bg-transparent focus:outline-none text-foreground placeholder:text-muted-foreground/50 text-sm transition-colors relative z-10"
                  placeholder="superadmin@himatifa.or.id"
                  required
                  :disabled="loading"
              />
            </div>
          </div>

          <div class="group">
            <div class="flex items-center justify-between mb-2">
              <label class="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-foreground/80 group-focus-within:text-primary transition-colors duration-300">
                Kata Sandi
              </label>
            </div>
            <div class="relative overflow-hidden rounded-xl border border-border bg-input-background focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all shadow-sm">
              <input
                  :type="showPassword ? 'text' : 'password'"
                  v-model="password"
                  class="w-full pl-4 pr-12 py-3 sm:py-3.5 bg-transparent focus:outline-none text-foreground placeholder:text-muted-foreground/50 text-sm transition-colors relative z-10"
                  placeholder="••••••••"
                  required
                  :disabled="loading"
              />
              <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-muted-foreground hover:text-foreground transition-colors duration-200 z-20"
                  tabindex="-1"
                  :disabled="loading"
              >
                <Eye v-if="showPassword" class="w-[18px] h-[18px]" />
                <EyeOff v-else class="w-[18px] h-[18px]" />
              </button>
            </div>
          </div>

          <div v-if="error" class="p-3 sm:p-4 rounded-xl text-xs bg-destructive/10 text-destructive border border-destructive/20 font-semibold flex items-start gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
            <span>⚠️</span>
            <span>{{ error }}</span>
          </div>

          <button
              type="submit"
              class="w-full flex items-center justify-center gap-2 mt-2 px-4 py-3.5 sm:py-4 bg-primary text-primary-foreground rounded-xl font-bold font-display text-sm sm:text-base hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
              :disabled="loading"
          >
            <Loader2 v-if="loading" class="w-5 h-5 animate-spin relative z-10" />
            <span v-if="loading" class="relative z-10">Memverifikasi...</span>
            <span v-else class="group-hover:tracking-wider transition-all duration-300 relative z-10">Masuk ke CMS</span>
            <div class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
          </button>
        </form>

        <div class="hidden md:block mt-8 p-5 rounded-2xl bg-secondary/50 border border-border/50 transition-colors duration-500 hover:border-primary/30 hover:bg-secondary group">
          <div class="flex items-center justify-between mb-3">
            <p class="text-[11px] font-bold uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors">
              Akses Pengembang
            </p>
            <span class="px-2 py-0.5 rounded text-[9px] font-bold bg-primary/10 text-primary uppercase tracking-widest border border-primary/20">Demo</span>
          </div>
          <button
              @click="fillDemo"
              type="button"
              class="w-full text-xs px-3 py-3 rounded-xl font-bold transition-all text-center bg-background border border-border text-foreground hover:border-primary hover:text-primary hover:bg-primary/5 active:scale-[0.98] shadow-sm"
              :disabled="loading"
          >
            Isi Otomatis Kredensial Demo
          </button>
        </div>

        <button
            @click="navigateTo('/')"
            class="mt-8 sm:mt-10 text-xs sm:text-sm w-full text-center transition-colors text-muted-foreground font-semibold hover:text-foreground flex items-center justify-center gap-2 group"
        >
          <ArrowLeft class="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          Kembali ke Beranda
        </button>
      </div>

    </div>
  </div>
</template>

<style scoped>
.animate-wave-slow {
  animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;
}
.animate-wave-medium {
  animation: move-forever 20s cubic-bezier(.55,.5,.45,.5) infinite;
}
.animate-wave-fast {
  animation: move-forever 15s cubic-bezier(.55,.5,.45,.5) infinite;
}

@keyframes move-forever {
  0% { transform: translate3d(-90px, 0, 0); }
  100% { transform: translate3d(85px, 0, 0); }
}

.animate-pulse-slow {
  animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse-slow {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: .7; transform: scale(1.05); }
}
</style>