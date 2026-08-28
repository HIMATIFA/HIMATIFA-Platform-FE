<script setup lang="ts">
import { ref, computed } from 'vue'
import { Search, Upload, X, Check, Image as ImageIcon, Grid, List } from 'lucide-vue-next'

definePageMeta({
  layout: 'admin'
})

type MediaFile = {
  id: number;
  filename: string;
  url: string;
  size: string;
  date: string;
  type: string;
  selected: boolean;
};

const MEDIA_FILES: MediaFile[] = [
  { id: 1, filename: "workshop-webdev-01.jpg", url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97", size: "1.2 MB", date: "20 Agu 2026", type: "Kegiatan", selected: false },
  { id: 2, filename: "workshop-webdev-02.jpg", url: "https://images.unsplash.com/photo-1531482615713-2afd69097998", size: "980 KB", date: "20 Agu 2026", type: "Kegiatan", selected: false },
  { id: 3, filename: "workshop-webdev-03.jpg", url: "https://images.unsplash.com/photo-1516321497487-e288fb19713f", size: "1.5 MB", date: "20 Agu 2026", type: "Kegiatan", selected: false },
  { id: 4, filename: "rakor-kepengurusan-01.jpg", url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac", size: "870 KB", date: "15 Agu 2026", type: "Organisasi", selected: false },
  { id: 5, filename: "rakor-kepengurusan-02.jpg", url: "https://images.unsplash.com/photo-1543269865-cbf427effbad", size: "1.1 MB", date: "15 Agu 2026", type: "Organisasi", selected: false },
  { id: 6, filename: "kompetisi-it-01.jpg", url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d", size: "2.0 MB", date: "10 Agu 2026", type: "Kompetisi", selected: false },
  { id: 7, filename: "kompetisi-it-02.jpg", url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c", size: "1.7 MB", date: "10 Agu 2026", type: "Kompetisi", selected: false },
  { id: 8, filename: "campus-coding-session.jpg", url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d", size: "1.3 MB", date: "5 Agu 2026", type: "Kegiatan", selected: false },
];

const media = ref<MediaFile[]>(MEDIA_FILES)
const search = ref("")
const filterType = ref("Semua")
const viewMode = ref<"grid" | "list">("grid")
const types = ["Semua", "Kegiatan", "Organisasi", "Kompetisi"]

const uploadOpen = ref(false)
const preview = ref<MediaFile | null>(null)
const isDragging = ref(false)
const isUploadDone = ref(false)

const filteredMedia = computed(() => {
  return media.value.filter((m) => {
    const matchSearch = m.filename.toLowerCase().includes(search.value.toLowerCase());
    const matchType = filterType.value === "Semua" || m.type === filterType.value;
    return matchSearch && matchType;
  });
})

const selectedCount = computed(() => media.value.filter(m => m.selected).length)

const toggleSelect = (id: number) => {
  const target = media.value.find(m => m.id === id);
  if (target) target.selected = !target.selected;
}

const clearSelection = () => {
  media.value.forEach(m => m.selected = false)
}

const deleteSelected = () => {
  media.value = media.value.filter(m => !m.selected)
}

const handleDrop = () => {
  isDragging.value = false;
  setTimeout(() => isUploadDone.value = true, 800);
}

const closeUpload = () => {
  uploadOpen.value = false;
  setTimeout(() => {
    isUploadDone.value = false;
    isDragging.value = false;
  }, 300);
}
</script>

<template>
  <div class="space-y-6 animate-in fade-in duration-300">

    <div v-if="uploadOpen" class="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div class="bg-card rounded-2xl shadow-xl border border-border w-full max-w-lg animate-in zoom-in-95 duration-200">
        <div class="flex items-center justify-between px-6 py-4 border-b border-border">
          <h3 class="text-foreground font-bold text-base font-display">Upload Media</h3>
          <button @click="closeUpload" class="text-muted-foreground hover:text-foreground transition-colors">
            <X class="w-5 h-5" />
          </button>
        </div>
        <div class="p-6">
          <div v-if="isUploadDone" class="flex flex-col items-center justify-center py-10 gap-3 animate-in zoom-in duration-300">
            <div class="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <Check class="w-6 h-6" />
            </div>
            <p class="text-foreground font-bold text-sm">File berhasil diunggah</p>
            <button @click="closeUpload" class="mt-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-colors">
              Selesai
            </button>
          </div>
          <div v-else>
            <div
                @dragover.prevent="isDragging = true"
                @dragleave="isDragging = false"
                @drop.prevent="handleDrop"
                :class="[
                'aspect-video rounded-xl border-2 border-dashed flex flex-col items-center justify-center gap-3 transition-all cursor-pointer',
                isDragging ? 'border-primary bg-primary/5' : 'border-border bg-input-background hover:border-primary/40'
              ]"
            >
              <div class="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground">
                <Upload class="w-6 h-6" />
              </div>
              <div class="text-center">
                <p class="text-foreground font-bold text-sm">Seret file ke sini</p>
                <p class="text-muted-foreground text-xs mt-0.5">atau klik untuk memilih file</p>
              </div>
              <p class="text-muted-foreground/60 text-[10px]">PNG, JPG, WEBP — maks. 10 MB per file</p>
            </div>
            <div class="flex items-center justify-end gap-3 mt-4">
              <button @click="closeUpload" class="px-4 py-2 rounded-xl border border-border text-foreground text-sm font-medium hover:bg-input-background transition-colors">Batal</button>
              <button @click="isUploadDone = true" class="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-colors">Upload</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="preview" @click="preview = null" class="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-center p-4">
      <div @click.stop class="bg-card rounded-2xl overflow-hidden max-w-2xl w-full border border-border animate-in zoom-in-95 duration-200">
        <div class="flex items-center justify-between px-5 py-3.5 border-b border-border">
          <div>
            <div class="text-foreground font-bold text-sm">{{ preview.filename }}</div>
            <div class="text-muted-foreground text-xs">{{ preview.size }} · {{ preview.date }}</div>
          </div>
          <button @click="preview = null" class="text-muted-foreground hover:text-foreground">
            <X class="w-5 h-5" />
          </button>
        </div>
        <div class="p-4 bg-input-background/50 flex justify-center aspect-video">
          <PlaceholderImage class="w-full h-full object-contain rounded-xl" />
        </div>
        <div class="px-5 py-3.5 flex items-center justify-end gap-3 border-t border-border">
          <button class="px-4 py-2 rounded-xl border border-border text-foreground text-sm font-medium hover:bg-input-background transition-colors">
            Salin URL
          </button>
          <button class="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-colors">
            Gunakan Media
          </button>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-between flex-wrap gap-3">
      <div>
        <h1 class="text-2xl font-black text-foreground font-display">Media Library</h1>
        <p class="text-muted-foreground text-sm mt-1">{{ media.length }} file media</p>
      </div>
      <button @click="uploadOpen = true" class="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-colors shadow-sm">
        <Upload class="w-4 h-4" /> Upload Media
      </button>
    </div>

    <div class="bg-card rounded-2xl border border-border p-4 flex flex-col sm:flex-row gap-3 items-start sm:items-center shadow-sm">
      <div class="flex-1 flex items-center gap-2 border border-border bg-input-background rounded-xl px-4 py-2.5 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 transition-all w-full">
        <Search class="w-4 h-4 text-muted-foreground shrink-0" />
        <input v-model="search" placeholder="Cari file..." class="flex-1 bg-transparent text-foreground text-sm focus:outline-none" />
        <button v-if="search" @click="search = ''" class="text-muted-foreground hover:text-foreground"><X class="w-4 h-4" /></button>
      </div>

      <div class="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
        <button
            v-for="t in types" :key="t"
            @click="filterType = t"
            :class="['px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap', filterType === t ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary hover:bg-primary/20']"
        >
          {{ t }}
        </button>
        <div class="w-px h-5 bg-border mx-1 shrink-0" />
        <button @click="viewMode = 'grid'" :class="['w-7 h-7 rounded-lg flex items-center justify-center transition-colors shrink-0', viewMode === 'grid' ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground']">
          <Grid class="w-4 h-4" />
        </button>
        <button @click="viewMode = 'list'" :class="['w-7 h-7 rounded-lg flex items-center justify-center transition-colors shrink-0', viewMode === 'list' ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground']">
          <List class="w-4 h-4" />
        </button>
      </div>
    </div>

    <div v-if="selectedCount > 0" class="bg-primary text-primary-foreground rounded-2xl px-5 py-3 flex items-center justify-between shadow-md animate-in slide-in-from-top-2">
      <span class="text-sm font-bold">{{ selectedCount }} file dipilih</span>
      <div class="flex items-center gap-4">
        <button @click="deleteSelected" class="text-sm font-bold text-primary-foreground/80 hover:text-primary-foreground transition-colors">Hapus</button>
        <button @click="clearSelection" class="text-sm font-medium text-primary-foreground/60 hover:text-primary-foreground transition-colors">Batalkan</button>
      </div>
    </div>

    <div v-if="viewMode === 'grid'" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      <div
          v-for="file in filteredMedia" :key="file.id"
          :class="['bg-card rounded-2xl border overflow-hidden cursor-pointer group transition-all', file.selected ? 'border-primary ring-2 ring-primary/20' : 'border-border hover:border-primary/40']"
      >
        <div class="aspect-square relative bg-input-background" @click="preview = file">
          <PlaceholderImage class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />

          <button
              @click.stop="toggleSelect(file.id)"
              :class="['absolute top-2 left-2 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all', file.selected ? 'bg-primary border-primary text-primary-foreground' : 'bg-background/90 border-border opacity-0 group-hover:opacity-100']"
          >
            <Check v-if="file.selected" class="w-3 h-3" />
          </button>
        </div>
        <div class="p-3">
          <div class="text-foreground text-xs font-bold truncate">{{ file.filename }}</div>
          <div class="text-muted-foreground text-[10px] mt-0.5">{{ file.size }} · {{ file.type }}</div>
        </div>
      </div>

      <button @click="uploadOpen = true" class="bg-input-background rounded-2xl border-2 border-dashed border-border aspect-square flex flex-col items-center justify-center gap-2 hover:border-primary/40 hover:bg-primary/5 transition-colors group">
        <Upload class="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        <span class="text-muted-foreground text-xs font-bold group-hover:text-primary transition-colors">Upload</span>
      </button>
    </div>

    <div v-if="viewMode === 'list'" class="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
      <div class="divide-y divide-border">
        <div
            v-for="file in filteredMedia" :key="file.id"
            :class="['flex items-center gap-4 px-5 py-3.5 hover:bg-input-background transition-colors cursor-pointer', file.selected ? 'bg-primary/5' : '']"
        >
          <input type="checkbox" :checked="file.selected" @change="toggleSelect(file.id)" class="rounded border-border text-primary focus:ring-primary" />

          <div class="w-12 h-10 rounded-lg overflow-hidden bg-input-background shrink-0" @click="preview = file">
            <PlaceholderImage class="w-full h-full object-cover" />
          </div>

          <div class="flex-1 min-w-0" @click="preview = file">
            <div class="text-foreground text-sm font-bold truncate">{{ file.filename }}</div>
            <div class="text-muted-foreground text-xs">{{ file.type }}</div>
          </div>

          <div class="hidden sm:block text-muted-foreground text-xs w-20">{{ file.size }}</div>
          <div class="hidden sm:block text-muted-foreground text-xs w-24">{{ file.date }}</div>

          <button @click="media = media.filter(m => m.id !== file.id)" class="text-muted-foreground hover:text-destructive transition-colors">
            <X class="w-4 h-4" />
          </button>
        </div>
      </div>

      <div v-if="filteredMedia.length === 0" class="py-14 text-center">
        <ImageIcon class="w-8 h-8 text-muted-foreground/40 mx-auto mb-2" />
        <p class="text-muted-foreground text-sm font-medium">Tidak ada file ditemukan.</p>
      </div>
    </div>
  </div>
</template>