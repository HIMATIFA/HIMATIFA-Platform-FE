<script setup lang="ts">
import {
  ArrowRight,
  Users,
  Instagram,
  Youtube,
  Mail,
  Globe,
  Lightbulb,
  HeartHandshake,
  Megaphone,
  Code,
  Calendar,
  Clock,
  MapPin
} from 'lucide-vue-next'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const swiperModules = [Autoplay, Pagination, Navigation]

const stats = [
  { value: "2020", label: "Tahun Berdiri" },
  { value: "40+", label: "Anggota Aktif" },
  { value: "5", label: "Departemen" },
  { value: "15+", label: "Program Kerja" },
]

const introFeatures = [
  {
    icon: Users,
    title: "Wadah Aspirasi",
    desc: "Menjadi rumah dan jembatan komunikasi yang solid bagi seluruh anggota dan civitas akademika."
  },
  {
    icon: Code,
    title: "Fokus Akademik",
    desc: "Mengembangkan kompetensi dan pemahaman mahasiswa di bidang teknologi informasi secara terstruktur."
  },
  {
    icon: Lightbulb,
    title: "Inovasi & Kreativitas",
    desc: "Mendorong lahirnya ide-ide kreatif, kemandirian, dan peluang baru bagi mahasiswa Informatika."
  },
  {
    icon: Globe,
    title: "Jaringan Eksternal",
    desc: "Memperluas relasi dan peluang kolaborasi dengan komunitas, universitas, dan pihak industri."
  }
]

const org = [
  { id: 1, name: "Vichras Mazcheranou Hafizh", role: "Ketua Himpunan", departement: "BPH" },
  { id: 2, name: "Andy Bagus", role: "Wakil Ketua", departement: "BPH" },
  { id: 3, name: "Aura Rizky", role: "Sekretaris", departement: "BPH" },
  { id: 4, name: "Maulidia", role: "Bendahara", departement: "BPH" }
]

const Departements = [
  {
    id: 1,
    name: "Pengembangan Sumber Daya Mahasiswa",
    abbr: "PSDM",
    icon: Users,
    description: "Departemen yang bertanggung jawab atas pengembangan kualitas manusia di dalam organisasi HIMATIFA. PSDM menjadi motor penggerak dalam membangun karakter kepemimpinan, meningkatkan kapasitas anggota, serta memastikan setiap individu memiliki kompetensi yang memadai.",
    accent: "var(--primary)"
  },
  {
    id: 2,
    name: "Luar Negeri",
    abbr: "Deplu",
    icon: Globe,
    description: "Departemen yang membawa HIMATIFA keluar dari lingkup internal kampus. DEPLU bertugas membangun dan memelihara relasi dengan organisasi lain, universitas se-Jawa Timur, komunitas teknologi, hingga pihak industri sebagai ujung tombak jejaring dan kolaborasi.",
    accent: "var(--primary)"
  },
  {
    id: 3,
    name: "Ekonomi Kreatif",
    abbr: "Ekraf",
    icon: Lightbulb,
    description: "Departemen yang mengelola aspek kreatif dan ekonomi organisasi. EKRAF bertugas merancang produk kreatif, mengelola merchandise, serta menjadi penggerak roda ekonomi internal HIMATIFA agar organisasi berdiri secara finansial mandiri dan produktif.",
    accent: "var(--primary)"
  },
  {
    id: 4,
    name: "Kepedulian Sosial",
    abbr: "Kepsos",
    icon: HeartHandshake,
    description: "Departemen yang menjadi jembatan komunikasi antara HIMATIFA dengan berbagai pihak di lingkungan internal kampus. KEPSOS memastikan aspirasi mahasiswa tersampaikan, membangun hubungan harmonis dengan dosen dan civitas akademika, serta merancang kegiatan yang berdampak sosial.",
    accent: "var(--primary)"
  },
  {
    id: 5,
    name: "Media Komunikasi & Informasi",
    abbr: "Medkominfo",
    icon: Megaphone,
    description: "Departemen yang menjadi suara dan wajah digital HIMATIFA. MEDKOMINFO bertanggung jawab atas seluruh publikasi, branding, pengelolaan media sosial, dokumentasi kegiatan, serta pemanfaatan teknologi informasi untuk memperkuat citra organisasi.",
    accent: "var(--primary)"
  },
]

const oprecSettings = {
  isActive: true,
  startDate: "2026-09-25T08:00",
  endDate: "2026-10-10T23:59",
  formLink: "https://forms.gle/contohlinkhimatifa"
}

const isOprecOpen = computed(() => {
  if (!oprecSettings.isActive) return false;
  const now = new Date();
  const start = new Date(oprecSettings.startDate);
  const end = new Date(oprecSettings.endDate);
  return now >= start && now <= end;
})

const news = [
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
]

const upcomingEvents = [
  { id: 1, title: "Study Club Github", date: "20 April 2026", time: "09:00 WIB", location: "Gedung At-Tauhid Tower" },
  { id: 2, title: "Spartain", date: "15 Mei 2026", time: "08:00 WIB", location: "Lab Terpadu Lantai 4 Ruang FT-405" }
]
</script>

<template>
  <main>
    <section class="relative pt-24 pb-16 md:pt-32 md:pb-20 flex items-center justify-center bg-background overflow-hidden">
      <div
          class="absolute inset-0 opacity-40"
          style="background-image: radial-gradient(var(--primary) 1px, transparent 1px); background-size: 28px 28px;"
      />
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div class="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <div class="flex justify-center mb-8">
          <div class="relative">
            <div class="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-150" />
            <img
                src="/img/logo.png"
                alt="Logo HIMATIFA"
                class="relative w-24 h-24 md:w-28 md:h-28 object-contain mix-blend-screen"
            />
          </div>
        </div>

        <h1 class="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight mb-3">
          HIMATIFA
        </h1>
        <p class="font-display text-secondary-foreground text-lg md:text-xl font-medium mb-1">
          Himpunan Mahasiswa Informatika
        </p>
        <p class="text-accent text-sm md:text-base font-semibold tracking-wide uppercase mb-8">
          Universitas Muhammadiyah Surabaya
        </p>

        <p class="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10">
          Wadah kolaborasi dan inovasi bagi mahasiswa Informatika UMSurabaya untuk mengasah kompetensi, membangun jejaring, dan siap bersaing di era digital.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
          <NuxtLink
              to="/about"
              class="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all duration-150 text-sm shadow-[0_0_24px_rgba(77,101,233,0.35)]"
          >
            Jelajahi Profil
          </NuxtLink>
          <NuxtLink
              to="/organization"
              class="flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-muted-foreground font-semibold hover:border-primary hover:text-foreground hover:bg-primary/10 transition-all duration-150 text-sm"
          >
            Struktur Pengurus
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="relative w-full bg-black">
      <Swiper
          :modules="swiperModules"
          :slides-per-view="1"
          :loop="true"
          :autoplay="{ delay: 8000, disableOnInteraction: false }"
          :pagination="{ clickable: true }"
          :navigation="true"
          class="w-full h-[400px] md:h-[600px] lg:h-[700px] group"
      >
        <SwiperSlide>
          <div class="relative w-full h-full bg-black flex items-center justify-center overflow-hidden">
            <iframe
                class="absolute top-1/2 left-1/2 w-[300vw] h-[300vh] md:w-[150vw] md:h-[150vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-50"
                src="https://www.youtube.com/embed/C8Ythiv5oKc?autoplay=1&mute=1&loop=1&playlist=C8Ythiv5oKc&controls=0&showinfo=0&rel=0"
                title="Profil Program Studi Teknik Informatika UMSurabaya"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>

            <div class="relative z-10 text-center px-4">
              <h2 class="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-widest uppercase font-display drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                Profil HIMATIFA
              </h2>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="relative w-full h-full bg-black">
            <img src="/img/swiper/slide1.jpg" alt="Visi HIMATIFA" class="w-full h-full object-cover opacity-60" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-center items-center text-center p-8 md:p-12">
              <h2 class="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight font-display drop-shadow-lg">
                Visi HIMATIFA
              </h2>
              <p class="text-white/90 text-lg md:text-2xl max-w-4xl font-medium leading-relaxed drop-shadow-md">
                "Mewujudkan himpunan yang adaptif, inovatif, dan memberikan dampak nyata bagi lingkungan kampus dan masyarakat."
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>

    <section class="bg-secondary border-y border-border">
      <div class="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div v-for="s in stats" :key="s.label" class="text-center">
          <div class="font-display text-3xl font-extrabold text-foreground mb-1">
            {{ s.value }}
          </div>
          <div class="text-accent text-xs tracking-wide font-medium">{{ s.label }}</div>
        </div>
      </div>
    </section>

    <section class="bg-background py-20 px-6">
      <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div>
          <div class="text-accent text-sm font-bold uppercase tracking-wider mb-2 font-display">
            Tentang Kami
          </div>
          <h2 class="font-display text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
            Apa itu HIMATIFA?
          </h2>
          <p class="text-muted-foreground text-base leading-relaxed mb-5">
            HIMATIFA (Himpunan Mahasiswa Teknik Informatika) adalah organisasi resmi yang menaungi seluruh mahasiswa Informatika di Universitas Muhammadiyah Surabaya sejak tahun 2020.
          </p>
          <p class="text-muted-foreground text-base leading-relaxed mb-8">
            Kami hadir dengan visi untuk menjadi organisasi yang <strong>unggul, solid, dan berdaya saing</strong>. HIMATIFA bukan sekadar tempat berorganisasi, melainkan ruang bagi mahasiswa untuk tumbuh bersama, meningkatkan kompetensi, dan berkarya menyongsong era digital.
          </p>
          <NuxtLink
              to="/about"
              class="inline-flex items-center gap-2 text-accent font-semibold hover:text-foreground transition-colors text-sm group"
          >
            Pelajari lebih lanjut
            <ArrowRight :size="14" class="group-hover:translate-x-1 transition-transform duration-300" />
          </NuxtLink>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div
              v-for="item in introFeatures"
              :key="item.title"
              class="bg-card border border-border rounded-xl p-5 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 shadow-sm"
          >
            <div class="text-accent mb-4 bg-primary/10 w-fit p-2 rounded-lg">
              <component :is="item.icon" :size="20" />
            </div>
            <h4 class="font-display text-card-foreground text-sm font-bold mb-2">
              {{ item.title }}
            </h4>
            <p class="text-muted-foreground text-xs leading-relaxed">
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-secondary py-20 px-6 border-y border-border">
      <div class="max-w-5xl mx-auto">
        <div class="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <div class="text-accent text-sm font-bold uppercase tracking-wider mb-2 font-display">Kepengurusan</div>
            <h2 class="font-display text-3xl font-bold text-foreground">
              Pengurus HIMATIFA
            </h2>
            <p class="text-muted-foreground text-sm mt-1">Periode 2026/2027</p>
          </div>
          <NuxtLink
              to="/organization"
              class="flex items-center gap-1.5 text-accent text-sm font-semibold hover:text-foreground transition-colors"
          >
            Lihat semua <ArrowRight :size="14" />
          </NuxtLink>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <MemberCard v-for="m in org.slice(0, 4)" :key="m.id" :name="m.name" :role="m.role" :departement="m.departement" />
        </div>
      </div>
    </section>

    <section class="bg-background py-20 px-6">
      <div class="max-w-5xl mx-auto">
        <div class="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <div class="text-accent text-sm font-bold uppercase tracking-wider mb-2 font-display">Departemen</div>
            <h2 class="font-display text-3xl font-bold text-foreground">
              Daftar Departemen
            </h2>
          </div>
          <NuxtLink
              to="/departements"
              class="flex items-center gap-1.5 text-accent text-sm font-semibold hover:text-foreground transition-colors"
          >
            Lihat semua <ArrowRight :size="14" />
          </NuxtLink>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div
              v-for="d in Departements"
              :key="d.id"
              class="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm group flex flex-col"
          >
            <div class="flex items-center gap-3 mb-4">
              <div
                  class="w-10 h-10 rounded-lg flex items-center justify-center bg-background border shrink-0 transition-colors group-hover:bg-primary/5"
                  :style="{ borderColor: d.accent, color: d.accent }"
              >
                <component :is="d.icon" :size="18" />
              </div>
              <span class="font-bold text-sm tracking-wide" :style="{ color: d.accent }">
                {{ d.abbr }}
              </span>
            </div>
            <h3 class="font-display text-card-foreground text-sm font-bold mb-2 leading-snug">
              {{ d.name }}
            </h3>
            <p class="text-muted-foreground text-xs leading-relaxed line-clamp-3">
              {{ d.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-secondary py-20 px-6 border-t border-border">
      <div class="max-w-5xl mx-auto">
        <div class="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <div class="text-accent text-sm font-bold uppercase tracking-wider mb-2 font-display">Berita</div>
            <h2 class="font-display text-3xl font-bold text-foreground">
              Berita Terkini
            </h2>
          </div>
          <NuxtLink
              to="/news"
              class="flex items-center gap-1.5 text-accent text-sm font-semibold hover:text-foreground transition-colors"
          >
            Semua berita <ArrowRight :size="14" />
          </NuxtLink>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <NewsCard v-for="item in news.slice(0, 3)" :key="item.id" :item="item" />
        </div>
      </div>
    </section>

    <section class="bg-background py-20 px-6 border-t border-border">
      <div class="max-w-5xl mx-auto">
        <div class="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <div class="text-accent text-sm font-bold uppercase tracking-wider mb-2 font-display">Agenda</div>
            <h2 class="font-display text-3xl font-bold text-foreground">
              Acara Mendatang
            </h2>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 gap-6">
          <div
              v-for="event in upcomingEvents"
              :key="event.id"
              class="flex flex-col md:flex-row gap-6 bg-card border border-border p-6 rounded-2xl hover:border-primary/40 transition-colors shadow-sm group"
          >
            <div class="flex-shrink-0 flex flex-col items-center justify-center bg-primary/10 w-20 h-20 rounded-xl text-primary">
              <span class="text-2xl font-bold font-display leading-none">{{ event.date.split(' ')[0] }}</span>
              <span class="text-xs font-semibold uppercase mt-1">{{ event.date.split(' ')[1] }}</span>
            </div>
            <div class="flex-1">
              <h3 class="font-display text-lg font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                {{ event.title }}
              </h3>
              <div class="space-y-2">
                <div class="flex items-center gap-2 text-muted-foreground text-sm">
                  <Clock :size="14" class="text-accent" />
                  <span>{{ event.time }}</span>
                </div>
                <div class="flex items-center gap-2 text-muted-foreground text-sm">
                  <MapPin :size="14" class="text-accent" />
                  <span>{{ event.location }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-secondary py-20 px-6 border-t border-border">
      <div class="max-w-5xl mx-auto">
        <div class="bg-card border border-border rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm relative overflow-hidden">

          <div v-if="isOprecOpen" class="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none"></div>

          <div class="relative z-10">
            <h2 class="font-display text-2xl md:text-3xl font-bold text-card-foreground mb-3">
              {{ isOprecOpen ? 'Bergabunglah Bersama Kami!' : 'Terhubung dengan HIMATIFA' }}
            </h2>
            <p class="text-muted-foreground text-sm md:text-base max-w-md leading-relaxed">
              {{ isOprecOpen
                ? 'Pendaftaran kepengurusan HIMATIFA periode baru telah dibuka. Ambil peranmu dan kembangkan potensimu sekarang.'
                : 'Punya pertanyaan, ingin berkolaborasi, atau tertarik dengan kegiatan kami? Ikuti media sosial kami atau hubungi langsung.'
              }}
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-3 shrink-0 relative z-10">
            <a
                href="https://www.instagram.com/himatifa_umsura/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                class="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary/10 border border-border text-accent text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-150"
            >
              <Instagram :size="15" /> Instagram
            </a>

            <a
                href="https://www.youtube.com/@HIMATIFAUMSBY/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                class="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary/10 border border-border text-accent text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-150"
            >
              <Youtube :size="15" /> YouTube
            </a>

            <NuxtLink
                to="/contact"
                :class="['flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all',
                isOprecOpen
                  ? 'bg-secondary border border-border text-foreground hover:bg-input-background'
                  : 'bg-primary text-primary-foreground hover:brightness-110 shadow-[0_0_16px_rgba(77,101,233,0.3)]'
              ]"
            >
              <Mail :size="15" /> Kontak
            </NuxtLink>

            <a
                v-if="isOprecOpen"
                :href="oprecSettings.formLink"
                target="_blank"
                class="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-bold hover:brightness-110 shadow-[0_0_20px_rgba(77,101,233,0.4)] animate-in zoom-in duration-300"
            >
              <UserPlus :size="16" /> Daftar Pengurus
            </a>

            <button
                v-else-if="oprecSettings.isActive === false"
                disabled
                class="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-muted text-muted-foreground text-sm font-semibold cursor-not-allowed border border-border"
            >
              <XCircle :size="15" /> Oprec Ditutup
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  backdrop-filter: blur(8px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
}

:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  font-size: 20px;
  font-weight: 900;
}

.group:hover :deep(.swiper-button-next),
.group:hover :deep(.swiper-button-prev) {
  opacity: 1;
}

:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  background-color: var(--primary);
  border-color: var(--primary);
  transform: scale(1.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

:deep(.swiper-button-prev) {
  left: 20px;
}

:deep(.swiper-button-next) {
  right: 20px;
}

:deep(.swiper-pagination-bullet) {
  background-color: rgba(255, 255, 255, 0.6);
  opacity: 1;
  width: 10px;
  height: 10px;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: var(--primary);
  width: 32px;
  border-radius: 8px;
  transition: all 0.3s ease;
}
</style>
