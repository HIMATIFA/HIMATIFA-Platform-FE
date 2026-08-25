<script setup lang="ts">
import { ref, computed } from 'vue'
import { ChevronLeft, Calendar } from 'lucide-vue-next'

const newsData = [
  {
    id: 1,
    title: "Pelantikan Pengurus HIMATIFA Periode 2026/2027",
    date: "12 Agustus 2026",
    category: "Organisasi",
    summary: "Acara pelantikan pengurus baru Himpunan Mahasiswa Teknik Informatika (HIMATIFA) berjalan dengan lancar dan dihadiri oleh jajaran program studi.",
    link: "#",
    image: ""
  },
  {
    id: 2,
    title: "Workshop Frontend Development dengan Vue.js",
    date: "25 Juli 2026",
    category: "Kegiatan",
    summary: "HIMATIFA sukses menyelenggarakan workshop pembuatan antarmuka web modern menggunakan Vue 3 yang diikuti oleh puluhan mahasiswa.",
    link: "#",
    image: ""
  },
  {
    id: 3,
    title: "Mahasiswa Teknik Informatika Juara 1 UI/UX Design Nasional",
    date: "15 Juni 2026",
    category: "Prestasi",
    summary: "Tim delegasi dari program studi Teknik Informatika UM Surabaya berhasil meraih juara 1 pada ajang kompetisi desain nasional.",
    link: "#",
    image: ""
  },
  {
    id: 4,
    title: "Kunjungan Industri ke Perusahaan Teknologi Terkemuka",
    date: "10 Mei 2026",
    category: "Kegiatan",
    summary: "Menambah wawasan dunia kerja, mahasiswa diajak berkeliling dan melihat langsung proses kerja di industri startup digital.",
    link: "#",
    image: ""
  }
]

const news = ref(newsData)
const categories = ["Semua", "Kegiatan", "Organisasi", "Prestasi"]
const selected = ref<any | null>(null)
const activeCategory = ref("Semua")

const filteredNews = computed(() => {
  if (activeCategory.value === "Semua") return news.value
  return news.value.filter(item => item.category === activeCategory.value)
})
</script>

<template>
  <main class="transition-colors duration-500">
    <Transition name="fade" mode="out-in">

      <div v-if="selected" :key="'detail'" class="bg-background pt-28 pb-20 min-h-screen transition-colors duration-500">
        <div class="max-w-3xl mx-auto px-6">

          <button
              @click="selected = null"
              class="group flex items-center gap-1.5 text-muted-foreground text-sm font-medium hover:text-primary transition-colors duration-300 mb-8 px-3 py-1.5 rounded-lg hover:bg-primary/10 -ml-3"
          >
            <ChevronLeft :size="18" class="group-hover:-translate-x-1 transition-transform duration-300" /> Kembali ke Daftar
          </button>

          <div class="flex items-center gap-3 mb-5">
            <span class="px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary text-[11px] uppercase font-bold tracking-wider transition-colors duration-500">
              {{ selected.category }}
            </span>
            <div class="flex items-center gap-1.5 text-muted-foreground text-sm transition-colors duration-500">
              <Calendar :size="14" /> {{ selected.date }}
            </div>
          </div>

          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight font-display transition-colors duration-500">
            {{ selected.title }}
          </h1>

          <div class="border-t border-border pt-8 transition-colors duration-500">
            <p class="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 transition-colors duration-500">
              {{ selected.summary }}
            </p>
            <button
                class="inline-flex items-center justify-center gap-2 rounded-xl text-sm font-medium transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30 h-11 px-6"
            >
              Baca Selengkapnya
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </button>
          </div>

        </div>
      </div>

      <div v-else :key="'list'">
        <PageHero
            label="Berita"
            subtitle="Kabar terkini dan informasi seputar aktivitas HIMATIFA"
            title="Berita & Informasi"
        />

        <div class="bg-background py-16 px-6 transition-colors duration-500 min-h-screen">
          <div class="max-w-5xl mx-auto">

            <div class="flex flex-wrap gap-2 mb-10">
              <button
                  v-for="cat in categories"
                  :key="cat"
                  @click="activeCategory = cat"
                  class="px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-300 hover:-translate-y-0.5"
                  :class="activeCategory === cat
                  ? 'bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20'
                  : 'bg-card border-border text-muted-foreground hover:border-primary/50 hover:text-primary'"
              >
                {{ cat }}
              </button>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <NewsCard
                  v-for="item in filteredNews"
                  :key="item.id"
                  :item="item"
                  @click="selected = item"
              />
            </div>

            <div v-if="filteredNews.length === 0" class="text-center py-20 text-muted-foreground">
              Belum ada berita untuk kategori ini.
            </div>

          </div>
        </div>
      </div>

    </Transition>
  </main>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>