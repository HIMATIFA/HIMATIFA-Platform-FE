<script setup lang="ts">
import { Users, Globe, Lightbulb, HeartHandshake, Megaphone } from 'lucide-vue-next'

const Departemens = [
  {
    id: 1,
    name: "Pengembangan Sumber Daya Mahasiswa",
    abbr: "PSDM",
    icon: Users,
    description: "Departemen yang bertanggung jawab atas pengembangan kualitas manusia di dalam organisasi HIMATIFA. PSDM menjadi motor penggerak dalam membangun karakter kepemimpinan, meningkatkan kapasitas anggota, serta memastikan setiap individu memiliki kompetensi yang memadai.",
    programs: ["Pelatihan & pengembangan kepemimpinan anggota", "Rekrutmen dan seleksi pengurus baru", "Evaluasi performa & kinerja pengurus", "Membangun kebersamaan & solidaritas internal"]
  },
  {
    id: 2,
    name: "Luar Negeri",
    abbr: "Deplu",
    icon: Globe,
    description: "Departemen yang membawa HIMATIFA keluar dari lingkup internal kampus. DEPLU bertugas membangun dan memelihara relasi dengan organisasi lain, universitas se-Jawa Timur, komunitas teknologi, hingga pihak industri sebagai ujung tombak jejaring dan kolaborasi.",
    programs: ["Jaringan & kerja sama antar organisasi kampus", "Koneksi dengan universitas & komunitas eksternal", "Perwakilan HIMATIFA di acara & forum eksternal", "Membuka peluang sponsorship & partnership"]
  },
  {
    id: 3,
    name: "Ekonomi Kreatif",
    abbr: "Ekraf",
    icon: Lightbulb,
    description: "Departemen yang mengelola aspek kreatif dan ekonomi organisasi. EKRAF bertugas merancang produk kreatif, mengelola merchandise, serta menjadi penggerak roda ekonomi internal HIMATIFA agar organisasi berdiri secara finansial mandiri dan produktif.",
    programs: ["Desain & produksi merchandise HIMATIFA", "Pengelolaan keuangan organisasi secara transparan", "Pengembangan ide-ide bisnis kreatif mahasiswa", "Pengelolaan booth dan kegiatan ekonomi kreatif"]
  },
  {
    id: 4,
    name: "Kepedulian Sosial",
    abbr: "Kepsos",
    icon: HeartHandshake,
    description: "Departemen yang menjadi jembatan komunikasi antara HIMATIFA dengan berbagai pihak di lingkungan internal kampus. KEPSOS memastikan aspirasi mahasiswa tersampaikan, membangun hubungan harmonis dengan dosen dan civitas akademika, serta merancang kegiatan yang berdampak sosial.",
    programs: ["Menampung & menyalurkan aspirasi mahasiswa", "Komunikasi & relasi dengan dosen pembimbing", "Penyelenggaraan kegiatan sosial & pengabdian", "Membangun iklim internal yang positif & inklusif"]
  },
  {
    id: 5,
    name: "Media Komunikasi & Informasi",
    abbr: "Medkominfo",
    icon: Megaphone,
    description: "Departemen yang menjadi suara dan wajah digital HIMATIFA. MEDKOMINFO bertanggung jawab atas seluruh publikasi, branding, pengelolaan media sosial, dokumentasi kegiatan, serta pemanfaatan teknologi informasi untuk memperkuat citra organisasi.",
    programs: ["Pengelolaan media sosial & konten digital", "Dokumentasi foto & video setiap kegiatan", "Desain grafis untuk publikasi & poster", "Strategi branding & identitas visual HIMATIFA"]
  }
]
</script>

<template>
  <main>
    <PageHero
        label="Departemen"
        title="Daftar Departemen"
        subtitle="Unit-unit kerja yang menjalankan program HIMATIFA"
    />

    <div class="bg-background py-16 px-6 transition-colors duration-500">
      <div class="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <div
            v-for="d in Departemens"
            :key="d.id"
            class="group bg-card border border-border rounded-2xl p-7 hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 flex flex-col cursor-default"
        >
          <div class="flex items-center gap-4 mb-5">
            <div
                class="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shrink-0"
            >
              <component :is="d.icon" :size="22" />
            </div>

            <div class="transition-colors duration-500">
              <h3 class="text-card-foreground font-bold text-base font-display leading-tight group-hover:text-primary transition-colors duration-300">
                {{ d.name }}
              </h3>
              <span class="text-accent text-xs font-medium tracking-wide">
                {{ d.abbr }}
              </span>
            </div>
          </div>

          <p class="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow transition-colors duration-500">
            {{ d.description }}
          </p>

          <div class="transition-colors duration-500">
            <div class="text-accent text-xs font-semibold tracking-wide mb-3 transition-colors duration-500">
              Program Kerja
            </div>
            <ul class="space-y-2">
              <li
                  v-for="p in d.programs"
                  :key="p"
                  class="flex items-start gap-2 text-muted-foreground text-sm transition-colors duration-500 group-hover:text-foreground/80"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors duration-300 shrink-0 mt-1.5" />
                <span class="leading-snug">{{ p }}</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </main>
</template>