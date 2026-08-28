<script setup lang="ts">
import { useRouter } from 'vue-router'
import {
  Newspaper,
  Camera,
  Users,
  Layers,
  ArrowRight,
  Plus,
  Clock
} from 'lucide-vue-next'

definePageMeta({
  layout: 'admin'
})

const router = useRouter()

const stats = [
  { label: 'Total Berita', value: 3, icon: Newspaper, path: '/admin/news', published: 2, draft: 1 },
  { label: 'Dokumentasi', value: 3, icon: Camera, path: '/admin/docs', published: 3, draft: 0 },
  { label: 'Anggota Pengurus', value: 8, icon: Users, path: '/admin/members', published: 8, draft: 0 },
  { label: 'Bidang', value: 4, icon: Layers, path: '/admin/org', published: 4, draft: 0 },
]

const recentNews = [
  { id: 1, title: 'HIMATIFA Sukses Gelar Workshop Pemrograman Web', date: '20 Agu 2026', status: 'Published', category: 'Kegiatan' },
  { id: 2, title: 'Rapat Koordinasi Kepengurusan HIMATIFA 2025/2026', date: '15 Agu 2026', status: 'Draft', category: 'Organisasi' },
  { id: 3, title: 'Tim HIMATIFA Raih Prestasi di Kompetisi IT Nasional', date: '10 Agu 2026', status: 'Published', category: 'Prestasi' },
]

const quickActions = [
  { label: 'Buat Berita Baru', path: '/admin/news', icon: Newspaper },
  { label: 'Tambah Dokumentasi', path: '/admin/docs', icon: Camera },
  { label: 'Kelola Pengurus', path: '/admin/members', icon: Users },
  { label: 'Atur Bidang', path: '/admin/divisions', icon: Layers },
]

const contentStatus = [
  { label: 'Published', count: 5, color: 'var(--success)' },
  { label: 'Draft', count: 1, color: 'var(--warning)' },
  { label: 'Archived', count: 0, color: 'var(--muted-foreground)' },
]

const getStatusStyle = (status: string) => {
  switch (status) {
    case 'Published':
      return 'bg-success/10 text-success border border-success/20'
    case 'Draft':
      return 'bg-warning/10 text-warning border border-warning/20'
    case 'Archived':
      return 'bg-muted text-muted-foreground border border-border'
    default:
      return 'bg-muted text-muted-foreground border border-border'
  }
}

const navigateTo = (path: string) => {
  router.push(path)
}
</script>

<template>
  <div class="space-y-7">
    <div>
      <h1 class="text-2xl font-bold text-foreground font-display">
        Dashboard
      </h1>
      <p class="text-muted-foreground text-sm mt-0.5">Overview konten HIMATIFA Platform</p>
    </div>

    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <button
          v-for="s in stats"
          :key="s.label"
          @click="navigateTo(s.path)"
          class="bg-card rounded-2xl border border-border p-5 text-left hover:border-primary/50 hover:shadow-sm transition-all duration-150 group"
      >
        <div class="flex items-center justify-between mb-4">
          <div class="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <component :is="s.icon" :size="18" />
          </div>
          <ArrowRight :size="14" class="text-muted-foreground/50 group-hover:text-primary transition-colors" />
        </div>
        <div class="text-3xl font-extrabold text-foreground leading-none mb-1 font-display">
          {{ s.value }}
        </div>
        <div class="text-muted-foreground text-xs font-medium">{{ s.label }}</div>
        <div v-if="s.draft > 0" class="mt-2 text-[10px] text-warning">
          {{ s.draft }} draft
        </div>
      </button>
    </div>

    <div class="grid lg:grid-cols-3 gap-6">
      <div class="lg:col-span-2 bg-card rounded-2xl border border-border overflow-hidden">
        <div class="flex items-center justify-between px-5 py-4 border-b border-border">
          <h2 class="text-foreground font-semibold text-sm font-display">
            Berita Terkini
          </h2>
          <button
              @click="navigateTo('/admin/news')"
              class="text-primary text-xs font-medium flex items-center gap-1 hover:text-primary/80 transition-colors"
          >
            Lihat semua <ArrowRight :size="11" />
          </button>
        </div>
        <div class="divide-y divide-border">
          <div v-for="item in recentNews" :key="item.id" class="flex items-center gap-4 px-5 py-3.5">
            <div class="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <Newspaper :size="14" />
            </div>
            <div class="flex-1 min-w-0">
              <div class="text-foreground text-sm font-medium leading-snug truncate">
                {{ item.title }}
              </div>
              <div class="flex items-center gap-2 mt-0.5">
                <span class="text-muted-foreground text-xs">{{ item.date }}</span>
                <span class="text-muted-foreground/50">·</span>
                <span class="text-primary/80 text-xs">{{ item.category }}</span>
              </div>
            </div>
            <span :class="['inline-flex px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide', getStatusStyle(item.status)]">
              {{ item.status }}
            </span>
          </div>
        </div>
      </div>

      <div class="bg-card rounded-2xl border border-border overflow-hidden">
        <div class="px-5 py-4 border-b border-border">
          <h2 class="text-foreground font-semibold text-sm font-display">
            Aksi Cepat
          </h2>
        </div>
        <div class="p-4 space-y-2">
          <button
              v-for="action in quickActions"
              :key="action.label"
              @click="navigateTo(action.path)"
              class="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-secondary text-secondary-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-150 group"
          >
            <span class="text-primary group-hover:text-primary-foreground transition-colors">
              <component :is="action.icon" :size="14" />
            </span>
            {{ action.label }}
            <Plus :size="13" class="ml-auto text-muted-foreground group-hover:text-primary-foreground/80 transition-colors" />
          </button>
        </div>
      </div>
    </div>

    <div class="bg-card rounded-2xl border border-border p-5">
      <h2 class="text-foreground font-semibold text-sm mb-4 flex items-center gap-2 font-display">
        <Clock :size="14" class="text-primary" />
        Status Konten
      </h2>
      <div class="grid sm:grid-cols-3 gap-4">
        <div
            v-for="s in contentStatus"
            :key="s.label"
            class="flex items-center gap-3 p-3 rounded-xl bg-secondary/50"
        >
          <div class="w-2 h-8 rounded-full" :style="{ backgroundColor: s.color }" />
          <div>
            <div class="text-xl font-bold text-foreground font-display">{{ s.count }}</div>
            <div class="text-xs text-muted-foreground">{{ s.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
