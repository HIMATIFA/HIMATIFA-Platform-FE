<script setup lang="ts">
import { ref, computed } from 'vue'
import { ChevronLeft, Calendar } from 'lucide-vue-next'

const news = [
  {
    id: 1,
    title: "Pelatihan Web Development 2026",
    date: "12 Mar 2026",
    category: "Kegiatan",
    summary: "HIMATIFA mengadakan pelatihan web development menggunakan Nuxt 3 dan Tailwind CSS untuk mahasiswa semester 4.",
    content: "Pelatihan ini bertujuan untuk meningkatkan kompetensi mahasiswa di bidang pengembangan antarmuka web modern. Diikuti oleh lebih dari 50 peserta, acara ini berjalan lancar dengan pemateri dari kalangan alumni yang kini bekerja sebagai Frontend Engineer.",
    image: ""
  },
  {
    id: 2,
    title: "Kunjungan Industri ke Tech Company",
    date: "05 Mar 2026",
    category: "Kegiatan",
    summary: "Studi banding dan kunjungan industri ke beberapa perusahaan teknologi ternama di Surabaya.",
    content: "Dalam rangka memperkenalkan dunia kerja, HIMATIFA memfasilitasi mahasiswa untuk melihat langsung proses kerja di industri teknologi. Kunjungan ini membuka wawasan mahasiswa mengenai budaya kerja, metodologi Agile, dan kolaborasi tim.",
    image: ""
  },
  {
    id: 3,
    title: "Open Recruitment Pengurus Baru",
    date: "28 Feb 2026",
    category: "Organisasi",
    summary: "Pendaftaran pengurus baru HIMATIFA periode 2026/2027 telah resmi dibuka.",
    content: "Kami memanggil seluruh mahasiswa Informatika UMSurabaya yang memiliki dedikasi dan semangat untuk berkontribusi memajukan himpunan. Siapkan berkas dan ikuti proses seleksi yang akan diselenggarakan bulan depan.",
    image: ""
  }
]

const categories = ["Semua", "Kegiatan", "Organisasi", "Prestasi"]

const selected = ref<typeof news[0] | null>(null)
const activeCategory = ref("Semua")

const filteredNews = computed(() => {
  if (activeCategory.value === "Semua") return news
  return news.filter(item => item.category === activeCategory.value)
})
</script>

<template>
  <main>
    <div v-if="selected" class="bg-background pt-20 min-h-screen">
      <div class="max-w-3xl mx-auto px-6 py-10">

        <button
            @click="selected = null"
            class="flex items-center gap-1.5 text-accent text-sm font-medium hover:text-foreground transition-colors mb-8"
        >
          <ChevronLeft :size="15" /> Kembali ke Berita
        </button>

        <div class="aspect-[16/9] rounded-2xl overflow-hidden mb-8 bg-muted relative">
          <img
              v-if="selected.image"
              :src="selected.image"
              :alt="selected.title"
              class="w-full h-full object-cover"
          />
          <PlaceholderImage
              v-else
              heightClass="h-full absolute inset-0"
              text="Gambar Berita Belum Tersedia"
          />
        </div>

        <div class="flex items-center gap-3 mb-5">
          <span class="px-2.5 py-1 rounded-md bg-primary/20 text-muted-foreground text-[11px] uppercase font-bold tracking-wider">
            {{ selected.category }}
          </span>
          <div class="flex items-center gap-1.5 text-accent/80 text-sm">
            <Calendar :size="12" /> {{ selected.date }}
          </div>
        </div>

        <h1 class="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight font-display">
          {{ selected.title }}
        </h1>

        <div class="border-t border-border pt-6">
          <p class="text-muted-foreground text-base leading-relaxed font-medium mb-4">
            {{ selected.summary }}
          </p>
          <p class="text-muted-foreground text-base leading-relaxed">
            {{ selected.content }}
          </p>
        </div>

      </div>
    </div>

    <div v-else>
      <PageHero
          label="Berita"
          title="Berita & Informasi"
          subtitle="Kabar terkini dari HIMATIFA"
      />

      <div class="bg-background py-16 px-6">
        <div class="max-w-5xl mx-auto">

          <div class="flex flex-wrap gap-2 mb-10">
            <button
                v-for="cat in categories"
                :key="cat"
                @click="activeCategory = cat"
                class="px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-150"
                :class="activeCategory === cat
                ? 'bg-primary text-primary-foreground border-primary'
                : 'border-border text-muted-foreground hover:border-primary/60 hover:text-foreground'"
            >
              {{ cat }}
            </button>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <NewsCard
                v-for="item in filteredNews"
                :key="item.id"
                :item="item"
                @click="selected = item"
            />
          </div>

          <p v-if="filteredNews.length === 0" class="text-center text-muted-foreground/60 text-sm mt-10">
            Belum ada berita untuk kategori ini.
          </p>
          <p v-else class="text-center text-muted-foreground/60 text-sm mt-10">
            Konten berita akan bertambah seiring berjalannya kegiatan HIMATIFA.
          </p>

        </div>
      </div>
    </div>
  </main>
</template>