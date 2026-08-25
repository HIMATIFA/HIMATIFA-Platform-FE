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
} from 'lucide-vue-next'

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
  { id: 1, name: "Vice Rajin Sholat", role: "Ketua Himpunan", departement: "BPH" },
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

const news = [
  { id: 1, title: "Pelatihan Web Development 2026", date: "12 Mar 2026", category: "Event" },
  { id: 2, title: "Kunjungan Industri ke Tech Company", date: "05 Mar 2026", category: "Kunjungan" },
  { id: 3, title: "Open Recruitment Pengurus Baru", date: "28 Feb 2026", category: "Informasi" }
]
</script>

<template>
  <main>
    <section class="relative min-h-[90vh] flex items-center justify-center bg-background overflow-hidden">
      <div
          class="absolute inset-0 opacity-40"
          style="background-image: radial-gradient(var(--primary) 1px, transparent 1px); background-size: 28px 28px;"
      />
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div class="relative z-10 text-center px-6 max-w-3xl mx-auto pt-16">
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

    <section class="bg-secondary py-20 px-6 border-y border-border">
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
          <NewsCard v-for="item in news" :key="item.id" :item="item" />
        </div>
      </div>
    </section>

    <section class="bg-background py-20 px-6">
      <div class="max-w-5xl mx-auto">
        <div class="bg-card border border-border rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          <div>
            <h2 class="font-display text-2xl md:text-3xl font-bold text-card-foreground mb-3">
              Terhubung dengan HIMATIFA
            </h2>
            <p class="text-muted-foreground text-sm md:text-base max-w-md leading-relaxed">
              Punya pertanyaan, ingin berkolaborasi, atau tertarik dengan kegiatan kami? Ikuti media sosial kami atau hubungi kami langsung.
            </p>
          </div>
          <div class="flex flex-wrap items-center gap-3 shrink-0">
            <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                class="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary/10 border border-border text-accent text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-150"
            >
              <Instagram :size="15" /> Instagram
            </a>
            <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                class="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary/10 border border-border text-accent text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-150"
            >
              <Youtube :size="15" /> YouTube
            </a>
            <NuxtLink
                to="/contact"
                class="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:brightness-110 shadow-[0_0_16px_rgba(77,101,233,0.3)] transition-all"
            >
              <Mail :size="15" /> Kontak
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>