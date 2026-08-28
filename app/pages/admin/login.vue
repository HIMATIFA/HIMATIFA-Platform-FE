<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ArrowLeft, ShieldCheck, Sun, Moon, Eye, EyeOff } from 'lucide-vue-next'

definePageMeta({
  layout: 'blank'
})

const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)

const showPassword = ref(false)

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark')
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
  }, 800)
}
</script>

<template>
  <div class="min-h-screen flex bg-primary dark:bg-background lg:bg-background transition-colors duration-500">

    <div class="hidden lg:block absolute inset-0 pointer-events-none opacity-50 transition-colors duration-500"
         style="background-image: radial-gradient(var(--border) 1.5px, transparent 1.5px); background-size: 24px 24px;">
    </div>

    <div class="hidden lg:flex flex-col justify-between p-12 w-[420px] flex-shrink-0 bg-primary dark:bg-secondary border-r border-border relative overflow-hidden transition-colors duration-500 shadow-[20px_0_40px_rgb(0,0,0,0.05)] dark:shadow-[20px_0_40px_rgb(0,0,0,0.4)] z-10">
      <div class="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/20 dark:bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div class="relative z-10 flex items-center gap-3 text-primary-foreground dark:text-foreground">
        <HimatifaLogoMark src="/img/logo.png" sizeClass="w-8 h-8" />
        <span class="font-display font-bold text-lg tracking-wider">HIMATIFA</span>
      </div>

      <div class="flex justify-center relative z-10 my-8">
        <div class="p-8 rounded-full bg-primary-foreground/10 dark:bg-card border border-primary-foreground/20 dark:border-border backdrop-blur-sm transition-colors duration-500">
          <HimatifaLogoMark src="/img/logo.png" sizeClass="w-32 h-32" />
        </div>
      </div>

      <div class="relative z-10">
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-foreground/15 dark:bg-card text-primary-foreground dark:text-primary text-[11px] font-bold tracking-widest uppercase mb-4 transition-colors duration-500 border dark:border-border">
          <ShieldCheck class="w-3.5 h-3.5" /> Super Admin Control
        </div>
        <h2 class="text-3xl font-black text-primary-foreground dark:text-foreground mb-3 font-display leading-tight transition-colors duration-500">
          Panel Utama<br />CMS HIMATIFA
        </h2>
        <p class="text-sm leading-relaxed text-primary-foreground/80 dark:text-muted-foreground transition-colors duration-500">
          Pusat kendali penuh untuk mengelola berita, struktur organisasi, dan seluruh konten portal.
        </p>
      </div>

      <div class="text-xs text-primary-foreground/60 dark:text-muted-foreground font-medium relative z-10 transition-colors duration-500">
        © 2026 HIMATIFA · System Version 2.0
      </div>
    </div>

    <div class="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 lg:p-6 relative z-10">

      <button
          @click="toggleTheme"
          class="hidden lg:flex absolute top-6 right-6 p-2.5 rounded-xl bg-background border border-border text-foreground hover:border-primary/50 hover:text-primary shadow-sm transition-all duration-300 z-20"
          title="Ganti Tema"
      >
        <Moon v-if="!isDark" class="w-5 h-5" />
        <Sun v-else class="w-5 h-5" />
      </button>

      <div class="w-full max-w-sm bg-background dark:bg-card lg:bg-transparent lg:dark:bg-transparent p-8 lg:p-0 rounded-[2rem] lg:rounded-none shadow-2xl lg:shadow-none border border-border/40 dark:border-border lg:border-none relative z-10 transition-colors duration-500">

        <div class="lg:hidden mb-8 flex justify-center">
          <HimatifaLogoMark src="/img/logo.png" sizeClass="w-16 h-16" />
        </div>

        <h1 class="text-2xl font-black mb-2 font-display text-foreground transition-colors duration-500">
          Halo, Masuk Yuk! 👋
        </h1>
        <p class="text-sm mb-8 text-muted-foreground transition-colors duration-500">
          Akses khusus pengurus Super Admin.
        </p>

        <form @submit.prevent="handleLogin" class="space-y-5">
          <div class="group">
            <label class="block text-xs font-bold uppercase tracking-wider mb-2 text-foreground/80 group-focus-within:text-primary transition-colors duration-300">
              Email Super Admin
            </label>
            <input
                type="email"
                v-model="email"
                class="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-ring transition-all text-foreground placeholder:text-muted-foreground/50 text-sm"
                placeholder="superadmin@himatifa.or.id"
                required
            />
          </div>

          <div class="group">
            <label class="block text-xs font-bold uppercase tracking-wider mb-2 text-foreground/80 group-focus-within:text-primary transition-colors duration-300">
              Kata Sandi
            </label>
            <div class="relative">
              <input
                  :type="showPassword ? 'text' : 'password'"
                  v-model="password"
                  class="w-full pl-4 pr-12 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-ring transition-all text-foreground placeholder:text-muted-foreground/50 text-sm"
                  placeholder="••••••••"
                  required
              />
              <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground transition-colors duration-200"
                  tabindex="-1"
              >
                <Eye v-if="showPassword" class="w-[18px] h-[18px]" />
                <EyeOff v-else class="w-[18px] h-[18px]" />
              </button>
            </div>
          </div>

          <div v-if="error" class="p-3.5 rounded-xl text-xs bg-warning/10 text-warning-foreground dark:text-warning border border-warning/20 font-medium animate-in fade-in slide-in-from-top-2 duration-300">
            {{ error }}
          </div>

          <button
              type="submit"
              class="w-full flex justify-center px-4 py-3.5 bg-primary text-primary-foreground rounded-xl font-bold font-display hover:bg-accent hover:shadow-lg hover:shadow-primary/30 active:scale-[0.98] active:brightness-90 transition-all duration-200 disabled:opacity-50 disabled:active:scale-100 disabled:hover:shadow-none"
              :disabled="loading"
          >
            {{ loading ? 'Mengecek Data...' : 'Masuk ke CMS' }}
          </button>
        </form>

        <div class="mt-8 p-4 rounded-2xl bg-card border border-border transition-colors duration-500 shadow-sm group hover:border-primary/30">
          <p class="text-xs font-bold mb-2 uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors">
            Akses Cepat (Demo)
          </p>
          <button
              @click="fillDemo"
              type="button"
              class="w-full text-xs px-3 py-2.5 rounded-xl font-semibold transition-all text-center bg-input-background border border-border text-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/5 active:scale-[0.98] shadow-sm"
          >
            Isi Otomatis Kredensial
          </button>
        </div>

        <button
            @click="navigateTo('/')"
            class="mt-8 text-sm w-full text-center transition-colors text-muted-foreground font-medium hover:text-foreground flex items-center justify-center gap-2 group"
        >
          <ArrowLeft class="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          Kembali ke Halaman Utama
        </button>
      </div>
    </div>
  </div>
</template>

