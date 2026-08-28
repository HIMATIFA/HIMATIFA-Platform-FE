<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Plus, Edit2, Trash2, ChevronLeft, AlertTriangle,
  Image as ImageIcon, X, Check, Calendar
} from 'lucide-vue-next'

definePageMeta({
  layout: 'admin'
})

type DocItem = {
  id: number;
  title: string;
  event: string;
  date: string;
  description: string;
  category: string;
  status: "Published" | "Draft" | "Archived";
  coverImage: string;
  gallery: string[];
};

const INITIAL_DOCS: DocItem[] = [
  { id: 1, title: "Workshop Web Development 2026", event: "Workshop Web Development", date: "2026-08-20", description: "Dokumentasi kegiatan workshop pemrograman web yang diikuti oleh mahasiswa Informatika UMSurabaya.", category: "Workshop", status: "Published", coverImage: "", gallery: ["", ""] },
  { id: 2, title: "Rapat Koordinasi Kepengurusan", event: "Rapat Koordinasi", date: "2026-08-15", description: "Dokumentasi rapat koordinasi seluruh pengurus HIMATIFA periode 2025/2026.", category: "Internal", status: "Published", coverImage: "", gallery: [""] },
  { id: 3, title: "Kompetisi IT Nasional", event: "Kompetisi IT", date: "2026-08-10", description: "Dokumentasi partisipasi tim HIMATIFA dalam kompetisi IT tingkat nasional.", category: "Kompetisi", status: "Draft", coverImage: "", gallery: [""] },
];

const docs = ref<DocItem[]>(INITIAL_DOCS)
const view = ref<"list" | "create" | "edit">("list")
const deleteId = ref<number | null>(null)
const isSaved = ref(false)

const form = ref<Partial<DocItem>>({
  title: "", event: "", date: "", description: "", category: "Workshop", status: "Draft", coverImage: "", gallery: []
})

const getStatusClass = (status: string) => {
  const map: Record<string, string> = {
    Published: "bg-primary/10 text-primary border border-primary/25",
    Draft: "bg-muted text-muted-foreground border border-border",
    Archived: "bg-secondary text-secondary-foreground border border-border",
  };
  return map[status] || map.Draft;
}

const openCreate = () => {
  form.value = { title: "", event: "", date: "", description: "", category: "Workshop", status: "Draft", coverImage: "", gallery: [] }
  view.value = "create"
}

const openEdit = (item: DocItem) => {
  form.value = { ...item }
  view.value = "edit"
}

const handleSave = () => {
  isSaved.value = true
  setTimeout(() => {
    isSaved.value = false
    view.value = "list"
  }, 600)
}

const handleDelete = () => {
  if (deleteId.value !== null) {
    docs.value = docs.value.filter(d => d.id !== deleteId.value)
    deleteId.value = null
  }
}

const deleteTarget = computed(() => docs.value.find(d => d.id === deleteId.value))
</script>

<template>
  <div class="space-y-6 animate-in fade-in duration-300">

    <div v-if="deleteId !== null && deleteTarget" class="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div class="bg-card rounded-2xl shadow-xl border border-border w-full max-w-md p-7 animate-in zoom-in-95 duration-200">
        <div class="flex items-start gap-4 mb-6">
          <div class="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center text-destructive shrink-0">
            <AlertTriangle class="w-5 h-5" />
          </div>
          <div>
            <h3 class="text-foreground font-bold text-base font-display">Hapus Dokumentasi</h3>
            <p class="text-muted-foreground text-sm mt-1">
              Apakah Anda yakin ingin menghapus <span class="font-bold text-foreground">"{{ deleteTarget.title }}"</span>? Semua gambar galeri akan turut dihapus.
            </p>
          </div>
        </div>
        <div class="flex items-center justify-end gap-3">
          <button @click="deleteId = null" class="px-4 py-2 rounded-xl border border-border text-foreground text-sm font-medium hover:bg-input-background transition-colors">Batal</button>
          <button @click="handleDelete" class="px-4 py-2 rounded-xl bg-destructive text-destructive-foreground text-sm font-bold hover:bg-destructive/90 transition-colors">Hapus</button>
        </div>
      </div>
    </div>

    <div v-if="view !== 'list'">
      <button @click="view = 'list'" class="flex items-center gap-1.5 text-muted-foreground text-sm font-medium hover:text-primary transition-colors mb-6">
        <ChevronLeft class="w-4 h-4" /> Kembali ke Daftar Dokumentasi
      </button>

      <h1 class="text-2xl font-black text-foreground mb-6 font-display">
        {{ view === 'edit' ? 'Edit Dokumentasi' : 'Buat Dokumentasi Baru' }}
      </h1>

      <div class="grid lg:grid-cols-3 gap-6">
        <div class="lg:col-span-2 space-y-5">

          <div class="bg-card rounded-2xl border border-border p-5 shadow-sm">
            <label class="block text-primary text-xs font-bold mb-3 uppercase tracking-wider">Cover Image</label>
            <div class="aspect-[16/7] rounded-xl overflow-hidden bg-input-background border-2 border-dashed border-border flex flex-col items-center justify-center cursor-pointer hover:border-primary/40 transition-colors">
              <PlaceholderImage class="w-full h-full object-cover opacity-80 mix-blend-multiply" />
            </div>
          </div>

          <div class="bg-card rounded-2xl border border-border p-5 space-y-4 shadow-sm">
            <div>
              <label class="block text-primary text-xs font-bold mb-1.5 uppercase tracking-wider">Judul Dokumentasi</label>
              <input v-model="form.title" type="text" placeholder="Judul dokumentasi kegiatan" class="w-full border border-border bg-transparent rounded-xl px-4 py-2.5 text-foreground text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all" />
            </div>
            <div>
              <label class="block text-primary text-xs font-bold mb-1.5 uppercase tracking-wider">Nama Kegiatan/Event</label>
              <input v-model="form.event" type="text" placeholder="Nama kegiatan yang didokumentasikan" class="w-full border border-border bg-transparent rounded-xl px-4 py-2.5 text-foreground text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all" />
            </div>
            <div>
              <label class="block text-primary text-xs font-bold mb-1.5 uppercase tracking-wider">Deskripsi</label>
              <textarea v-model="form.description" placeholder="Deskripsi singkat kegiatan..." rows="3" class="w-full border border-border bg-transparent rounded-xl px-4 py-2.5 text-foreground text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all resize-none"></textarea>
            </div>
          </div>

          <div class="bg-card rounded-2xl border border-border p-5 shadow-sm">
            <div class="flex items-center justify-between mb-3">
              <label class="text-primary text-xs font-bold uppercase tracking-wider">Galeri Foto ({{ form.gallery?.length || 0 }} foto)</label>
            </div>
            <div class="grid grid-cols-3 sm:grid-cols-4 gap-3">
              <div v-for="(img, idx) in form.gallery" :key="idx" class="aspect-square rounded-xl overflow-hidden bg-input-background relative group">
                <PlaceholderImage class="w-full h-full object-cover" />
                <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button class="w-6 h-6 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center hover:scale-110 transition-transform">
                    <X class="w-3 h-3" />
                  </button>
                </div>
              </div>
              <button class="aspect-square rounded-xl border-2 border-dashed border-border flex flex-col items-center justify-center gap-1 hover:border-primary/40 transition-colors text-muted-foreground hover:text-primary">
                <Plus class="w-5 h-5" />
                <span class="text-[10px] font-medium">Tambah</span>
              </button>
            </div>
          </div>
        </div>

        <div class="space-y-5">
          <div class="bg-card rounded-2xl border border-border p-5 space-y-4 shadow-sm">
            <h3 class="text-foreground text-sm font-bold font-display border-b border-border pb-2">Detail</h3>
            <div>
              <label class="block text-primary text-xs font-bold mb-1.5 uppercase tracking-wider">Status</label>
              <select v-model="form.status" class="w-full border border-border bg-transparent rounded-xl px-3 py-2.5 text-foreground text-sm focus:outline-none focus:border-primary transition-all">
                <option value="Draft">Draft</option>
                <option value="Published">Published</option>
                <option value="Archived">Archived</option>
              </select>
            </div>
            <div>
              <label class="block text-primary text-xs font-bold mb-1.5 uppercase tracking-wider">Tanggal Kegiatan</label>
              <div class="flex items-center gap-2 border border-border rounded-xl px-3 py-2.5 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 transition-all">
                <Calendar class="w-4 h-4 text-muted-foreground shrink-0" />
                <input v-model="form.date" type="date" class="flex-1 bg-transparent text-foreground text-sm focus:outline-none" />
              </div>
            </div>
            <div>
              <label class="block text-primary text-xs font-bold mb-1.5 uppercase tracking-wider">Kategori</label>
              <select v-model="form.category" class="w-full border border-border bg-transparent rounded-xl px-3 py-2.5 text-foreground text-sm focus:outline-none focus:border-primary transition-all">
                <option>Workshop</option>
                <option>Internal</option>
                <option>Kompetisi</option>
                <option>Sosial</option>
                <option>Lainnya</option>
              </select>
            </div>
            <div class="pt-4 space-y-2">
              <div v-if="isSaved" class="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 text-sm font-bold">
                <Check class="w-4 h-4" /> Tersimpan!
              </div>
              <template v-else>
                <button @click="handleSave" class="w-full py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-colors shadow-sm">
                  Simpan
                </button>
                <button @click="view = 'list'" class="w-full py-2.5 rounded-xl border border-border text-foreground text-sm font-medium hover:bg-input-background transition-colors">
                  Batal
                </button>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <div class="flex items-center justify-between mb-6">
        <div>
          <h1 class="text-2xl font-black text-foreground font-display">Dokumentasi</h1>
          <p class="text-muted-foreground text-sm mt-1">{{ docs.length }} dokumentasi kegiatan</p>
        </div>
        <button @click="openCreate" class="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-colors shadow-sm">
          <Plus class="w-4 h-4" /> Buat Dokumentasi
        </button>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div v-for="doc in docs" :key="doc.id" class="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/40 hover:shadow-md transition-all duration-300 group flex flex-col">
          <div class="aspect-[16/9] bg-input-background overflow-hidden relative">
            <PlaceholderImage class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div class="p-4 flex flex-col flex-1">
            <div class="flex items-center justify-between mb-3">
              <span class="text-primary text-[10px] font-bold uppercase tracking-wider">{{ doc.category }}</span>
              <span :class="['inline-flex px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wide', getStatusClass(doc.status)]">
                {{ doc.status }}
              </span>
            </div>
            <h3 class="text-foreground font-bold text-sm leading-snug mb-1 font-display line-clamp-2">
              {{ doc.title }}
            </h3>
            <p class="text-muted-foreground text-xs">{{ doc.date }}</p>

            <div class="flex items-center gap-1.5 mt-3 mb-4">
              <ImageIcon class="w-3 h-3 text-muted-foreground" />
              <span class="text-muted-foreground text-xs">{{ doc.gallery.length }} foto</span>
            </div>

            <div class="flex items-center gap-2 mt-auto pt-4 border-t border-border">
              <button @click="openEdit(doc)" class="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-primary/10 text-xs text-primary font-bold hover:bg-primary hover:text-primary-foreground transition-colors">
                <Edit2 class="w-3 h-3" /> Edit
              </button>
              <button @click="deleteId = doc.id" class="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-destructive/10 text-xs text-destructive font-bold hover:bg-destructive hover:text-destructive-foreground transition-colors">
                <Trash2 class="w-3 h-3" /> Hapus
              </button>
            </div>
          </div>
        </div>

        <button @click="openCreate" class="bg-input-background rounded-2xl border-2 border-dashed border-border flex flex-col items-center justify-center gap-3 p-8 hover:border-primary/40 hover:bg-primary/5 transition-all group min-h-[250px]">
          <div class="w-12 h-12 rounded-xl bg-card border border-border shadow-sm flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300">
            <Plus class="w-6 h-6" />
          </div>
          <span class="text-muted-foreground text-sm font-bold group-hover:text-primary transition-colors">
            Tambah Dokumentasi
          </span>
        </button>
      </div>
    </div>
  </div>
</template>