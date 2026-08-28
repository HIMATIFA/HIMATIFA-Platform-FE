<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Plus, Search, Edit2, Trash2, Eye, X, ChevronLeft,
  AlertTriangle, Check, Bold,
  Italic, Link, List, AlignLeft, Calendar, User, Tag
} from 'lucide-vue-next'

definePageMeta({
  layout: 'admin'
})

type Status = "Published" | "Draft" | "Archived";

interface NewsItem {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  status: Status;
  date: string;
  author: string;
  image: string;
};

const INITIAL_NEWS: NewsItem[] = [
  { id: 1, title: "HIMATIFA Sukses Gelar Workshop Pemrograman Web Semester Ini", slug: "himatifa-workshop-pemrograman-web", excerpt: "Workshop pemrograman web yang diselenggarakan HIMATIFA mendapatkan antusias tinggi dari ratusan mahasiswa Informatika.", category: "Kegiatan", status: "Published", date: "2026-08-20", author: "Humas Team", image: "" },
  { id: 2, title: "Rapat Koordinasi Kepengurusan HIMATIFA Periode 2025/2026", slug: "rapat-koordinasi-kepengurusan-2025-2026", excerpt: "Seluruh pengurus HIMATIFA menghadiri rapat koordinasi untuk mematangkan program kerja dan rencana kegiatan.", category: "Organisasi", status: "Draft", date: "2026-08-15", author: "Sekretariat", image: "" },
  { id: 3, title: "Tim HIMATIFA Raih Prestasi di Kompetisi IT Tingkat Nasional", slug: "tim-himatifa-prestasi-kompetisi-it-nasional", excerpt: "Tim mahasiswa yang berafiliasi dengan HIMATIFA berhasil meraih prestasi membanggakan dalam kompetisi IT nasional.", category: "Prestasi", status: "Published", date: "2026-08-10", author: "Bid. Prestasi", image: "" },
];

const categories = ["Kegiatan", "Organisasi", "Prestasi", "Pengumuman", "Lainnya"];
const statuses: Status[] = ["Draft", "Published", "Archived"];

const news = ref<NewsItem[]>(INITIAL_NEWS);
const search = ref("");
const filterStatus = ref<"All" | Status>("All");
const view = ref<"list" | "create" | "edit">("list");
const deleteId = ref<number | null>(null);
const isSaved = ref(false);

const form = ref<Partial<NewsItem>>({
  title: "", slug: "", excerpt: "", category: "Kegiatan", status: "Draft", author: "", date: "", image: ""
});

const filteredNews = computed(() => {
  return news.value.filter((n) => {
    const matchSearch = n.title.toLowerCase().includes(search.value.toLowerCase());
    const matchStatus = filterStatus.value === "All" || n.status === filterStatus.value;
    return matchSearch && matchStatus;
  });
});

const deleteTarget = computed(() => news.value.find((n) => n.id === deleteId.value));

const getStatusBadgeClass = (status: Status) => {
  const map: Record<Status, string> = {
    Published: "bg-primary/10 text-primary border border-primary/25",
    Draft: "bg-muted text-muted-foreground border border-border",
    Archived: "bg-secondary text-secondary-foreground border border-border",
  };
  return map[status];
};

const autoSlug = (title: string) => {
  return title.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").slice(0, 60);
};

watch(() => form.value.title, (newTitle) => {
  if (view.value === 'create' && newTitle) {
    form.value.slug = autoSlug(newTitle);
  }
});

const openCreate = () => {
  form.value = { title: "", slug: "", excerpt: "", category: "Kegiatan", status: "Draft", author: "Admin", date: new Date().toISOString().split('T')[0], image: "" };
  view.value = "create";
};

const openEdit = (item: NewsItem) => {
  form.value = { ...item };
  view.value = "edit";
};

const handleSave = () => {
  isSaved.value = true;
  setTimeout(() => {
    if (view.value === 'edit' && form.value.id) {
      news.value = news.value.map(n => n.id === form.value.id ? { ...n, ...form.value } as NewsItem : n);
    } else {
      news.value.push({ ...form.value, id: Date.now() } as NewsItem);
    }
    isSaved.value = false;
    view.value = "list";
  }, 600);
};

const confirmDelete = (id: number) => {
  deleteId.value = id;
};

const handleDelete = () => {
  if (deleteId.value !== null) {
    news.value = news.value.filter(n => n.id !== deleteId.value);
    deleteId.value = null;
  }
};
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
            <h3 class="text-foreground font-bold text-base font-display">Hapus Berita</h3>
            <p class="text-muted-foreground text-sm mt-1">
              Apakah Anda yakin ingin menghapus berita <span class="font-bold text-foreground">"{{ deleteTarget.title }}"</span>? Tindakan ini tidak dapat dibatalkan.
            </p>
          </div>
        </div>
        <div class="flex items-center justify-end gap-3">
          <button @click="deleteId = null" class="px-4 py-2 rounded-xl border border-border text-foreground text-sm font-medium hover:bg-input-background transition-colors">
            Batal
          </button>
          <button @click="handleDelete" class="px-4 py-2 rounded-xl bg-destructive text-destructive-foreground text-sm font-bold hover:bg-destructive/90 transition-colors">
            Hapus
          </button>
        </div>
      </div>
    </div>

    <div v-if="view !== 'list'" class="space-y-6">
      <button @click="view = 'list'" class="flex items-center gap-1.5 text-muted-foreground text-sm font-medium hover:text-primary transition-colors mb-6">
        <ChevronLeft class="w-4 h-4" /> Kembali ke Daftar Berita
      </button>

      <div class="flex items-center justify-between mb-6">
        <h1 class="text-2xl font-black text-foreground font-display">
          {{ view === 'edit' ? 'Edit Berita' : 'Buat Berita Baru' }}
        </h1>
      </div>

      <div class="grid lg:grid-cols-3 gap-6">
        <div class="lg:col-span-2 space-y-5">
          <div class="bg-card rounded-2xl border border-border p-5 shadow-sm">
            <label class="block text-primary text-xs font-bold mb-3 uppercase tracking-wider">Cover Image</label>
            <div class="aspect-[16/7] rounded-xl bg-input-background border-2 border-dashed border-border flex flex-col items-center justify-center gap-2 hover:border-primary/40 transition-colors cursor-pointer group">
              <PlaceholderImage class="w-full h-full object-cover opacity-50 mix-blend-multiply rounded-xl" />
              <div class="absolute flex flex-col items-center justify-center text-center p-4">
                <ImageIcon class="w-8 h-8 text-muted-foreground/60 group-hover:text-primary transition-colors mb-2" />
                <span class="text-muted-foreground text-sm font-medium">Klik untuk unggah gambar</span>
                <span class="text-muted-foreground/50 text-xs mt-1">PNG, JPG, WEBP — maks. 5 MB</span>
              </div>
            </div>
          </div>

          <div class="bg-card rounded-2xl border border-border p-5 space-y-4 shadow-sm">
            <div>
              <label class="block text-primary text-xs font-bold mb-1.5 uppercase tracking-wider">Judul</label>
              <input v-model="form.title" type="text" placeholder="Judul berita yang menarik" class="w-full border border-border bg-transparent rounded-xl px-4 py-2.5 text-foreground text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all" />
            </div>
            <div>
              <label class="block text-primary text-xs font-bold mb-1.5 uppercase tracking-wider">Slug (URL)</label>
              <div class="flex items-center gap-2 border border-border bg-input-background rounded-xl px-4 py-2.5 focus-within:border-primary transition-all">
                <span class="text-muted-foreground/50 text-sm">/berita/</span>
                <input v-model="form.slug" type="text" placeholder="slug-berita-otomatis" class="flex-1 bg-transparent text-foreground text-sm focus:outline-none font-mono" />
              </div>
            </div>
          </div>

          <div class="bg-card rounded-2xl border border-border p-5 shadow-sm">
            <label class="block text-primary text-xs font-bold mb-1.5 uppercase tracking-wider">Ringkasan (Excerpt)</label>
            <textarea v-model="form.excerpt" placeholder="Ringkasan singkat untuk daftar berita..." rows="3" class="w-full border border-border bg-transparent rounded-xl px-4 py-2.5 text-foreground text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all resize-none Leading-relaxed"></textarea>
          </div>

          <div class="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
            <div class="flex items-center gap-1 px-4 py-2 border-b border-border bg-input-background/50">
              <span class="text-muted-foreground text-xs font-medium mr-2">Format:</span>
              <button v-for="icon in [Bold, Italic, Link, List, AlignLeft]" :key="icon.name" class="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
                <component :is="icon" class="w-4 h-4" />
              </button>
            </div>
            <div class="p-4">
              <label class="block text-primary text-xs font-bold mb-2 uppercase tracking-wider">Konten Utama</label>
              <textarea placeholder="Mulai menulis berita di sini menggunakan Markdown atau teks biasa..." rows="12" class="w-full text-foreground text-sm focus:outline-none resize-none leading-relaxed bg-transparent"></textarea>
            </div>
          </div>
        </div>

        <div class="space-y-5">
          <div class="bg-card rounded-2xl border border-border p-5 space-y-4 shadow-sm">
            <h3 class="text-foreground text-sm font-bold font-display border-b border-border pb-2">Publikasi</h3>
            <div>
              <label class="block text-primary text-xs font-bold mb-1.5 uppercase tracking-wider">Status</label>
              <select v-model="form.status" class="w-full border border-border bg-transparent rounded-xl px-3 py-2.5 text-foreground text-sm focus:outline-none focus:border-primary transition-all">
                <option v-for="s in statuses" :key="s" :value="s">{{ s }}</option>
              </select>
            </div>
            <div>
              <label class="block text-primary text-xs font-bold mb-1.5 uppercase tracking-wider">Tanggal Publikasi</label>
              <div class="flex items-center gap-2 border border-border rounded-xl px-3 py-2.5 focus-within:border-primary transition-all">
                <Calendar class="w-4 h-4 text-muted-foreground" />
                <input v-model="form.date" type="date" class="flex-1 bg-transparent text-foreground text-sm focus:outline-none" />
              </div>
            </div>
            <div class="pt-4 space-y-2">
              <div v-if="isSaved" class="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 text-sm font-bold">
                <Check class="w-4 h-4" /> Tersimpan!
              </div>
              <template v-else>
                <button @click="handleSave" class="w-full py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-colors shadow-sm">
                  {{ form.status === 'Published' ? 'Publish Sekarang' : 'Simpan Draft' }}
                </button>
                <button @click="view = 'list'" class="w-full py-2.5 rounded-xl border border-border text-foreground text-sm font-medium hover:bg-input-background transition-colors">
                  Batal
                </button>
              </template>
            </div>
          </div>

          <div class="bg-card rounded-2xl border border-border p-5 space-y-4 shadow-sm">
            <h3 class="text-foreground text-sm font-bold font-display border-b border-border pb-2">Metadata</h3>
            <div>
              <label class="block text-primary text-xs font-bold mb-1.5 uppercase tracking-wider">Kategori</label>
              <div class="relative">
                <Tag class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <select v-model="form.category" class="w-full border border-border bg-transparent rounded-xl pl-9 pr-3 py-2.5 text-foreground text-sm focus:outline-none focus:border-primary transition-all">
                  <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
                </select>
              </div>
            </div>
            <div>
              <label class="block text-primary text-xs font-bold mb-1.5 uppercase tracking-wider">Penulis</label>
              <div class="flex items-center gap-2 border border-border rounded-xl px-3 py-2.5 focus-within:border-primary transition-all">
                <User class="w-4 h-4 text-muted-foreground" />
                <input v-model="form.author" type="text" placeholder="Nama penulis" class="flex-1 bg-transparent text-foreground text-sm focus:outline-none" />
              </div>
            </div>
          </div>

          <button class="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-primary/20 bg-primary/5 text-primary text-sm font-bold hover:bg-primary/10 transition-colors">
            <Eye class="w-4 h-4" /> Preview Tampilan Publik
          </button>
        </div>
      </div>
    </div>

    <div v-else class="space-y-6">
      <div class="flex items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl font-black text-foreground font-display">Berita HIMATIFA</h1>
          <p class="text-muted-foreground text-sm mt-1">{{ news.length }} total artikel berita</p>
        </div>
        <button @click="openCreate" class="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-colors shadow-sm whitespace-nowrap">
          <Plus class="w-4 h-4" /> Buat Berita Baru
        </button>
      </div>

      <div class="bg-card rounded-2xl border border-border p-4 flex flex-col sm:flex-row gap-4 shadow-sm relative z-10">
        <div class="flex-1 flex items-center gap-2 border border-border bg-input-background rounded-xl px-4 py-2.5 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 transition-all">
          <Search class="w-4 h-4 text-muted-foreground shrink-0" />
          <input v-model="search" type="text" placeholder="Cari judul berita atau slug..." class="flex-1 bg-transparent text-foreground text-sm focus:outline-none" />
          <button v-if="search" @click="search = ''" class="text-muted-foreground hover:text-foreground">
            <X class="w-4 h-4" />
          </button>
        </div>
        <div class="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 custom-scrollbar">
          <button
              v-for="s in (['All', ...statuses] as const)"
              :key="s"
              @click="filterStatus = s"
              :class="['px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap border',
              filterStatus === s
                ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                : 'bg-input-background text-muted-foreground border-border hover:border-primary/30 hover:text-primary'
            ]"
          >
            {{ s === 'All' ? 'Semua' : s }}
          </button>
        </div>
      </div>

      <div class="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
        <div class="hidden md:block overflow-x-auto custom-scrollbar">
          <table class="w-full text-sm text-left">
            <thead>
            <tr class="border-b border-border bg-input-background/50 text-muted-foreground font-semibold text-xs uppercase tracking-wider font-display">
              <th class="px-5 py-3 w-12"><input type="checkbox" class="rounded border-border text-primary focus:ring-primary" /></th>
              <th class="px-5 py-3 min-w-[300px]">Info Berita</th>
              <th class="px-5 py-3">Kategori</th>
              <th class="px-5 py-3">Status</th>
              <th class="px-5 py-3">Tanggal</th>
              <th class="px-5 py-3 text-right">Aksi</th>
            </tr>
            </thead>
            <tbody class="divide-y divide-border">
            <tr v-if="filteredNews.length === 0">
              <td colspan="6" class="px-5 py-16 text-center text-muted-foreground/60 text-sm">
                <ImageIcon class="w-10 h-10 mx-auto mb-3 opacity-40" />
                Tidak ada berita yang ditemukan.
              </td>
            </tr>
            <tr v-for="item in filteredNews" :key="item.id" class="hover:bg-input-background/40 transition-colors group">
              <td class="px-5 py-4"><input type="checkbox" class="rounded border-border text-primary focus:ring-primary" /></td>
              <td class="px-5 py-4">
                <div class="flex items-center gap-3">
                  <div class="w-16 h-10 rounded-lg overflow-hidden bg-input-background shrink-0 shadow-inner">
                    <PlaceholderImage class="w-full h-full object-cover" />
                  </div>
                  <div class="min-w-0">
                    <div class="text-foreground font-semibold text-sm leading-snug line-clamp-1 group-hover:text-primary transition-colors font-display">{{ item.title }}</div>
                    <div class="text-muted-foreground/60 text-xs mt-0.5 font-mono truncate">/berita/{{ item.slug }}</div>
                  </div>
                </div>
              </td>
              <td class="px-5 py-4">
                <span class="text-primary text-xs font-semibold font-display">{{ item.category }}</span>
              </td>
              <td class="px-5 py-4">
                  <span :class="['px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider', getStatusBadgeClass(item.status)]">
                    {{ item.status }}
                  </span>
              </td>
              <td class="px-5 py-4 text-muted-foreground text-xs font-mono">{{ item.date }}</td>
              <td class="px-5 py-4 text-right">
                <div class="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button @click="openEdit(item)" class="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all" title="Edit Berita">
                    <Edit2 class="w-3.5 h-3.5" />
                  </button>
                  <button class="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all" title="Preview Publik">
                    <Eye class="w-3.5 h-3.5" />
                  </button>
                  <button @click="confirmDelete(item.id)" class="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-all" title="Hapus Berita">
                    <Trash2 class="w-3.5 h-3.5" />
                  </button>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

        <div class="md:hidden divide-y divide-border">
          <div v-if="filteredNews.length === 0" class="p-10 text-center text-muted-foreground/60 text-sm">
            <ImageIcon class="w-10 h-10 mx-auto mb-3 opacity-40" />
            Tidak ada berita.
          </div>
          <div v-for="item in filteredNews" :key="item.id" class="p-4 hover:bg-input-background/40 transition-colors">
            <div class="flex gap-4 mb-3">
              <div class="w-20 h-14 rounded-xl overflow-hidden bg-input-background shrink-0 shadow-inner">
                <PlaceholderImage class="w-full h-full object-cover" />
              </div>
              <div class="flex-1 min-w-0 space-y-1">
                <div class="text-foreground font-semibold text-sm line-clamp-2 leading-snug font-display">{{ item.title }}</div>
                <div class="text-primary text-[11px] font-bold uppercase tracking-wider font-display">{{ item.category }}</div>
              </div>
            </div>
            <div class="flex items-center justify-between gap-2 border-t border-border pt-3 mt-1">
              <div class="flex items-center gap-2">
                  <span :class="['px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider', getStatusBadgeClass(item.status)]">
                    {{ item.status }}
                  </span>
                <span class="text-muted-foreground text-xs font-mono">{{ item.date }}</span>
              </div>
              <div class="flex items-center gap-1">
                <button @click="openEdit(item)" class="w-8 h-8 rounded-lg flex items-center justify-center bg-input-background text-muted-foreground hover:bg-primary/10 hover:text-primary">
                  <Edit2 class="w-3.5 h-3.5" />
                </button>
                <button @click="confirmDelete(item.id)" class="w-8 h-8 rounded-lg flex items-center justify-center bg-input-background text-muted-foreground hover:bg-destructive/10 hover:text-destructive">
                  <Trash2 class="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="px-5 py-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground bg-input-background/30 font-medium">
          <span>Menampilkan {{ filteredNews.length }} dari {{ news.length }} berita</span>
          <div class="flex items-center gap-1.5">
            <button class="w-7 h-7 flex items-center justify-center rounded-lg border border-border bg-card hover:bg-input-background disabled:opacity-50" disabled>‹</button>
            <button class="w-7 h-7 flex items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">1</button>
            <button class="w-7 h-7 flex items-center justify-center rounded-lg border border-border bg-card hover:bg-input-background">›</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  height: 4px;
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: hsl(var(--border));
  border-radius: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: hsl(var(--primary) / 0.5);
}
</style>