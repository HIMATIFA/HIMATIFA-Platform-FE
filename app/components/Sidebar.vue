<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import {
  LayoutDashboard,
  Newspaper,
  Camera,
  Users,
  Layers,
  LogOut,
    Cog
} from 'lucide-vue-next'

defineProps<{
  isCollapsed?: boolean
}>()

const route = useRoute()
const router = useRouter()

const menuGroups = [
  {
    title: 'Menu Utama',
    items: [
      { id: 'dashboard', label: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    ]
  },
  {
    title: 'Konten Publik',
    items: [
      { id: 'news', label: 'Berita', path: '/admin/news', icon: Newspaper },
      { id: 'docs', label: 'Dokumentasi', path: '/admin/docs', icon: Camera },
    ]
  },
  {
    title: 'Kepengurusan',
    items: [
      { id: 'divisions', label: 'Departements', path: '/admin/org', icon: Layers },
      { id: 'settign', label: 'Pengaturan', path: '/admin/settigns', icon: Cog },
    ]
  }
]

const isItemActive = (path: string) => {
  if (path === '/admin') {
    return route.path === '/admin' || route.path === '/admin/'
  }
  return route.path.startsWith(path)
}

const handleExit = () => {
  router.push('/')
}
</script>

<template>
  <aside
      :class="[
      'bg-card border-r border-border flex flex-col h-screen sticky top-0 transition-all duration-300 z-30',
      isCollapsed ? 'w-20' : 'w-64'
    ]"
  >
    <div class="p-4 border-b border-border flex items-center justify-center min-h-[64px] shrink-0">
      <NuxtLink to="/admin" class="flex items-center gap-3 overflow-hidden" :class="{ 'justify-center': isCollapsed }">
        <img src="/img/logo.png" alt="HIMATIFA Logo" class="w-8 h-8 shrink-0 object-contain" />
        <div v-if="!isCollapsed" class="leading-none transition-colors duration-500 min-w-0">
          <div class="text-foreground font-display font-bold text-sm tracking-wide truncate">
            HIMATIFA
          </div>
          <div class="text-accent text-[9px] tracking-widest uppercase font-medium truncate">
            UMSurabaya
          </div>
        </div>
      </NuxtLink>
    </div>

    <nav class="flex-1 overflow-y-auto p-3 space-y-6 custom-scrollbar">
      <div v-for="(group, index) in menuGroups" :key="index" class="space-y-1.5">

        <div
            v-if="!isCollapsed"
            class="px-3.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 mb-2 font-display"
        >
          {{ group.title }}
        </div>
        <div v-else-if="index !== 0" class="w-8 mx-auto border-t border-border my-3" />

        <NuxtLink
            v-for="item in group.items"
            :key="item.id"
            :to="item.path"
            :title="isCollapsed ? item.label : undefined"
            :class="[
            'w-full flex items-center gap-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group',
            isCollapsed ? 'justify-center px-0' : 'px-3.5',
            isItemActive(item.path)
              ? 'bg-primary text-primary-foreground font-semibold shadow-sm'
              : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
          ]"
        >
          <component
              :is="item.icon"
              :class="[
              'w-[18px] h-[18px] shrink-0 transition-colors',
              isItemActive(item.path)
                ? 'text-primary-foreground'
                : 'text-muted-foreground group-hover:text-foreground'
            ]"
          />
          <span v-if="!isCollapsed" class="truncate">{{ item.label }}</span>
        </NuxtLink>
      </div>
    </nav>

    <div class="p-3 border-t border-border shrink-0">
      <button
          @click="handleExit"
          :title="isCollapsed ? 'Keluar CMS' : undefined"
          :class="[
          'w-full flex items-center gap-3 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:bg-destructive/10 hover:text-destructive border border-transparent hover:border-destructive/20 transition-all duration-200',
          isCollapsed ? 'justify-center px-0' : 'px-3.5'
        ]"
      >
        <LogOut class="w-[18px] h-[18px] shrink-0" />
        <span v-if="!isCollapsed" class="truncate">Keluar CMS</span>
      </button>
    </div>
  </aside>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: hsl(var(--border));
  border-radius: 10px;
}
</style>