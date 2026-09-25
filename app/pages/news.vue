<script setup lang="ts">
import { ref, computed } from 'vue'
import { ChevronLeft, Calendar, ExternalLink } from 'lucide-vue-next'

const newsData = [
  {
    id: 1,
    title: "Orientasi Studi & Cinta Almamater (OSCAR) 2026",
    date: "19 - 20 September 2026",
    category: "Organisasi",
    summary: "Fakultas Teknik menyelenggarakan kegiatan OSCAR (Orientasi Studi Cinta Akademik dan Almamater) Fakultas Teknik 2026 sebagai rangkaian kegiatan pengenalan bagi mahasiswa.",
    link: "https://www.kompasiana.com/himatifaumsurabaya/6ab2271434777c6eb9130687/orientasi-studi-cinta-almamater-oscar-2026#goog_rewarded",
    image: "https://assets-a2.kompasiana.com/items/album/2026/09/22/whatsapp-image-2026-09-22-at-13-48-58-6ab225e034777c689b74ed35.jpeg?t=o&v=770"
  },
  {
    id: 2,
    title: "Sokong visi Literasi Digital, S1 Informatika UMSURA Gelar AI Ambasador Workshop Di SpInS Interactional School",
    date: "13 Juli 2026",
    category: "Kegiatan",
    summary: "Kolaborasi apik di sektor pendidikan digital kembali ditunjukkan oleh akademisi muda kota Pahlawan. Mahasiswa Program Studi (Prodi) S1 Informatika Universitas Muhammadiyah Surabaya (UMSURA) sukses menyelenggarakan kegiatan pengabdian masyarakat berupa \"AI Ambassador Workshop\" yang bertempat di SpInS Interactional School Surabaya yang diadakan pada tanggal 13 Juli 2026.",
    link: "https://www.kompasiana.com/himatifaumsurabaya/6a577a9cc925c442882752e2/sokong-visi-literasi-digital-s1-informatika-umsura-gelar-ai-ambasador-workshop-di-spins-interactional-school#goog_rewarded",
    image: "https://assets-a2.kompasiana.com/items/album/2026/07/15/whatsapp-image-2026-07-14-at-19-54-41-6a577a32ed64157f6144eea2.jpeg?t=o&v=770"
  },
  {
    id: 3,
    title: "Program Studi Informatika UMSURA Sukses Selenggarakan Seminar Etika Profesi Bersama Alumni Yang Bekerja Di Pemkot Surabaya",
    date: "Rabu, 24 Juni 2026",
    category: "Prestasi",
    summary: "Menghadapi dinamika dunia kerja profesional yang semakin kompleks, Program Studi Informatika Universitas Muhammadiyah Surabaya (Umsura) sukses menyelenggarakan acara \"Seminar Etika Profesi dan Profesionalisme dalam Dunia Informatika\". ",
    link: "https://www.kompasiana.com/himatifaumsurabaya/6a3ca800c925c473a8367832/program-studi-informatika-umsura-sukses-selenggarakan-seminar-etika-profesi-bersama-alumni-yang-bekerja-di-pemkot-surabaya#goog_rewarded",
    image: "https://assets-a2.kompasiana.com/items/album/2026/06/25/gemini-generated-image-9x3znf9x3znf9x3z-6a3ca37bed64154f96160e82.png?t=o&v=770"
  },
  {
    id: 4,
    title: "15 Mahasiswa Universitas Muhammadiyah Surabaya Raih Gelar Double Gegree Di ST.John's University Taiwan",
    date: "Sabtu, 6 Juni 2026",
    category: "Kegiatan",
    summary: "Sebanyak 15 mahasiswa Fakultas Teknik Universitas Muhammadiyah Surabaya (UMSurabaya) kembali menorehkan prestasi membanggakan di tingkat internasional. Mahasiswa yang berasal dari Program Studi Informatika, Teknik Sipil, Teknik Elektro, dan Teknik Industri tersebut resmi diwisuda dalam Program Double Degree di St. John's University, Taiwan, pada Sabtu, 6 Juni 2026.Para lulusan merupakan peserta Program Double Degree yang diselenggarakan melalui kerja sama antara UMSurabaya dan sejumlah perguruan tinggi mitra di Taiwan dengan dukungan penuh dari International Industrial Talents Education Special Program (INTENSE). Program yang didukung oleh Kementerian Pendidikan Taiwan ini dirancang untuk mempersiapkan talenta internasional yang kompeten dan siap berkontribusi dalam dunia industri global.",
    link: "https://www.kompasiana.com/himatifaumsurabaya/6a2a176634777c358c691712/15-mahasiswa-universitas-muhammadiyah-surabaya-raih-gelar-double-gegree-di-st-john-s-university-taiwan#goog_rewarded",
    image: "https://assets-a2.kompasiana.com/items/album/2026/06/11/whatsapp-image-2026-06-10-at-19-37-27-1-6a2a14e6ed64156b23343f33.jpeg?t=o&v=770",
  },
  {
    id: 5,
    title: "Kuliah Tamu Telkomsat Collaboration : Membuka Wawasan Karier Mahasiswa Infomatika",
    date: "Sabtu, 6 Juni 2026",
    category: "Kegiatan",
    summary: "Dalam rangka mendukung pengembangan wawasan industri dan kesiapan karier mahasiswa, Himpunan Mahasiswa Informatika (HIMATIFA) Universitas Muhammadiyah Surabaya menyelenggarakan kegiatan Kuliah Tamu Telkomsat Collaboration Internship pada Rabu, 04 Februari, bertempat di Gedung F, Ruang Rapat Lantai 1, mulai pukul 09.00 WIB hingga selesai.",
    link: "https://www.kompasiana.com/himatifaumsurabaya/6984a566ed6415589c317344/kuliah-tamu-telkomsat-collaboration-membuka-wawasan-karier-mahasiswa-infomatika#goog_rewarded",
    image: "https://assets-a2.kompasiana.com/items/album/2026/02/05/img-8176-6984a528c925c4219d2b50d3.jpg?t=o&v=770",
  },
  {
    id: 6,
    title: "MIDNIGHT - Makrab 2025\n",
    date: "10 Mei 2026",
    category: "Kegiatan",
    summary: "Kegiatan Malam Keakraban (Makrab) MIDNIGHT 2025 menjadi momentum penting bagi bagi mahasiswa Informatika lintas angkatan untuk mempererat hubungan kebersamaan serta menumbuhkan rasa solidaritas antar mahasiswa Informatika. Kegiatan ini diselenggarakan oleh panitia dari Informatika Angkatan 2025 dengan melibatkan peserta dari angkatan 2022, 2023, dan 2024.",
    link: "https://www.kompasiana.com/himatifaumsurabaya/6984979fc925c439f74f2662/midnight-makrab-2025#goog_rewarded",
    image: "https://assets-a2.kompasiana.com/items/album/2026/02/05/img-20260111-wa0031-jpg-69849754c925c436a44c9c63.jpeg?t=o&v=770",
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
    <Transition mode="out-in" name="fade">

      <div v-if="selected" :key="'detail'" class="bg-background pt-28 pb-20 min-h-screen transition-colors duration-500">
        <div class="max-w-3xl mx-auto px-6">

          <button
              @click="selected = null"
              class="group flex items-center gap-1.5 text-muted-foreground text-sm font-medium hover:text-primary transition-colors duration-300 mb-8 px-3 py-1.5 rounded-lg hover:bg-primary/10 -ml-3"
          >
            <ChevronLeft :size="18" class="group-hover:-translate-x-1 transition-transform duration-300"/> Kembali ke Daftar
          </button>

          <div class="flex items-center gap-3 mb-5">
            <span class="px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary text-[11px] uppercase font-bold tracking-wider transition-colors duration-500">
              {{ selected.category }}
            </span>
            <div class="flex items-center gap-1.5 text-muted-foreground text-sm transition-colors duration-500">
              <Calendar :size="14"/> {{ selected.date }}
            </div>
          </div>

          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight font-display transition-colors duration-500">
            {{ selected.title }}
          </h1>

          <div v-if="selected.image" class="w-full h-[250px] md:h-[400px] mb-8 overflow-hidden rounded-2xl border border-border shadow-sm">
            <img :src="selected.image" :alt="selected.title" class="w-full h-full object-cover" />
          </div>

          <div class="border-t border-border pt-8 transition-colors duration-500">
            <p class="text-foreground text-base md:text-lg leading-relaxed mb-8 transition-colors duration-500">
              {{ selected.summary }}
            </p>

            <a
                :href="selected.link"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-2 rounded-xl text-sm font-medium transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30 h-11 px-6"
            >
              Baca Selengkapnya di Kompasiana
              <ExternalLink :size="16"/>
            </a>
          </div>

        </div>
      </div>

      <div v-else :key="'list'">
        <PageHero label="Berita" subtitle="Kabar terkini dan informasi seputar aktivitas HIMATIFA" title="Berita & Informasi"/>

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
              <NewsCard :item="item" :key="item.id" @click="selected = item" v-for="item in filteredNews"/>
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
