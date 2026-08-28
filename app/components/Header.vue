<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Sun, Moon, PanelLeftClose, PanelLeftOpen, Maximize2, Minimize2 } from 'lucide-vue-next'

defineProps<{
  isCollapsed?: boolean
}>()

const emit = defineEmits<{
  (e: 'toggleSidebar'): void
}>()

const isDark = ref(false)
const isFullscreen = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

const toggleFullscreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {})
    isFullscreen.value = true
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen().catch(() => {})
    }
    isFullscreen.value = false
  }
}

onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark')
  document.addEventListener('fullscreenchange', () => {
    isFullscreen.value = !!document.fullscreenElement
  })
})
</script>

<template>
  <header class="h-16 bg-card border-b border-border px-4 sm:px-6 flex items-center justify-between sticky top-0 z-20 transition-colors duration-500">
    <div class="flex items-center gap-3">
      <button
          @click="emit('toggleSidebar')"
          class="p-2 rounded-xl bg-input-background border border-border text-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
          :title="isCollapsed ? 'Buka Sidebar' : 'Tutup Sidebar'"
      >
        <PanelLeftOpen v-if="isCollapsed" class="w-4 h-4" />
        <PanelLeftClose v-else class="w-4 h-4" />
      </button>

      <h2 class="text-sm font-bold text-foreground font-display hidden sm:block">
        Super Admin Control Panel
      </h2>
    </div>

    <div class="flex items-center gap-2.5">
      <button
          @click="toggleFullscreen"
          class="p-2 rounded-xl bg-input-background border border-border text-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
          :title="isFullscreen ? 'Keluar Layar Penuh' : 'Layar Penuh'"
      >
        <Minimize2 v-if="isFullscreen" class="w-4 h-4" />
        <Maximize2 v-else class="w-4 h-4" />
      </button>

      <button
          @click="toggleTheme"
          class="p-2 rounded-xl bg-input-background border border-border text-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
          title="Ganti Tema"
      >
        <Moon v-if="!isDark" class="w-4 h-4" />
        <Sun v-else class="w-4 h-4" />
      </button>

      <div class="flex items-center gap-3 pl-3 border-l border-border">
        <div class="w-8 h-8 rounded-full bg-primary/20 text-primary border border-primary/30 flex items-center justify-center font-bold text-xs">
          SA
        </div>
        <div class="hidden sm:block text-left">
          <div class="text-xs font-bold text-foreground">Super Admin</div>
          <div class="text-[10px] text-muted-foreground">superadmin@himatifa.or.id</div>
        </div>
      </div>
    </div>
  </header>
</template>