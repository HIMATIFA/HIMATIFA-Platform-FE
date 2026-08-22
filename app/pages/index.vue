<script setup lang="ts">
import {
  ArrowRight,
  Users,
  BookOpen,
  Layers,
  MessageCircle,
  Instagram,
  Youtube,
  Mail
} from 'lucide-vue-next'

const stats = [
  { value: "2020", label: "Tahun Berdiri" },
  { value: "40", label: "Anggota Aktif" },
  { value: "5", label: "Departemen" },
  { value: "15+", label: "Program Kerja" },
]

const introFeatures = [
  { icon: Users, title: "Keanggotaan", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec." },
  { icon: BookOpen, title: "Akademik", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec." },
  { icon: Layers, title: "Inovasi", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec." },
  { icon: MessageCircle, title: "Komunikasi", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec." },
]

const org = [
  { id: 1, name: "Vice Rajin Sholat", role: "Ketua Himpunan", departement: "BPH" },
  { id: 2, name: "Andy Bagus", role: "Wakil Ketua", departement: "BPH" },
  { id: 3, name: "Aura Rizky", role: "Sekretaris", departement: "BPH" },
  { id: 4, name: "Maulidia", role: "Bendahara", departement: "BPH" }
]

const Departements = [
  { id: 1, name: "Pengembangan Sumber Daya Mahasiswa", abbr: "PSDM", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.", accent: "var(--primary)" },
  { id: 2, name: "Luar Negeri", abbr: "Deplu", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.", accent: "var(--accent)" },
  { id: 3, name: "Ekonomi Kreatif", abbr: "Ekraf", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.", accent: "var(--chart-3)" },
  { id: 4, name: "Kepedulian Sosial", abbr: "Kepsos", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.", accent: "var(--chart-5)" },
  { id: 5, name: "Media Komunikasi & Informasi", abbr: "Medkom", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.", accent: "var(--chart-5)" },
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

        <h1 class="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight mb-4">
          HIMATIFA
        </h1>
        <p class="font-display text-secondary-foreground text-lg md:text-xl font-medium mb-2">
          Himpunan Mahasiswa Informatika
        </p>
        <p class="text-accent text-base mb-8">
          Universitas Muhammadiyah Surabaya
        </p>
        <p class="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
          <NuxtLink
              to="/about"
              class="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all duration-150 text-sm shadow-[0_0_24px_rgba(77,101,233,0.35)]"
          >
            Tentang HIMATIFA
          </NuxtLink>
          <NuxtLink
              to="/organization"
              class="flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-muted-foreground font-semibold hover:border-primary hover:text-foreground hover:bg-primary/10 transition-all duration-150 text-sm"
          >
            Kepengurusan
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
          <div class="text-accent text-xs tracking-wide">{{ s.label }}</div>
        </div>
      </div>
    </section>

    <section class="bg-background py-20 px-6">
      <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div>
          <div class="text-accent text-sm font-bold uppercase tracking-wider mb-2 font-display">Tentang Kami</div>

          <h2 class="font-display text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
            Organisasi Mahasiswa Informatika yang Progresif
          </h2>
          <p class="text-muted-foreground text-base leading-relaxed mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel metus accumsan, elementum diam a, vulputate nisi. Nunc rutrum, ipsum vel varius rhoncus.
          </p>
          <p class="text-muted-foreground text-base leading-relaxed mb-8">
            Donec interdum velit id est facilisis aliquet. Integer pellentesque, enim sit amet pharetra malesuada, nisl est facilisis neque, ac auctor turpis nisi quis risus.
          </p>
          <NuxtLink
              to="/about"
              class="inline-flex items-center gap-2 text-accent font-semibold hover:text-foreground transition-colors text-sm"
          >
            Pelajari lebih lanjut <ArrowRight :size="14" />
          </NuxtLink>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div v-for="item in introFeatures" :key="item.title" class="bg-card border border-border rounded-xl p-5 hover:border-primary/40 transition-colors">
            <div class="text-accent mb-3">
              <component :is="item.icon" :size="20" />
            </div>
            <h4 class="font-display text-card-foreground text-sm font-semibold mb-1.5">{{ item.title }}</h4>
            <p class="text-muted-foreground text-xs leading-relaxed">{{ item.desc }}</p>
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
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
              v-for="d in Departements"
              :key="d.id"
              class="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all duration-200 hover:-translate-y-0.5 group"
          >
            <div
                class="px-3 py-1.5 rounded-lg inline-flex items-center justify-center text-xs font-bold mb-4 bg-background border w-fit"
                :style="{ color: d.accent, borderColor: d.accent }"
            >
              {{ d.abbr }}
            </div>
            <h3 class="font-display text-card-foreground text-sm font-semibold mb-2 leading-snug">
              {{ d.name }}
            </h3>
            <p class="text-muted-foreground text-xs leading-relaxed line-clamp-3">{{ d.description }}</p>
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
        <div class="bg-card border border-border rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 class="font-display text-2xl md:text-3xl font-bold text-card-foreground mb-3">
              Terhubung dengan HIMATIFA
            </h2>
            <p class="text-muted-foreground text-base max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id pellentesque eros, non tincidunt orci.
            </p>
          </div>
          <div class="flex flex-wrap items-center gap-3 shrink-0">
            <a
                href="#"
                aria-label="Instagram"
                class="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary/10 border border-border text-accent text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-150"
            >
              <Instagram :size="15" /> Instagram
            </a>
            <a
                href="#"
                aria-label="YouTube"
                class="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary/10 border border-border text-accent text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-150"
            >
              <Youtube :size="15" /> YouTube
            </a>
            <NuxtLink
                to="/contact"
                class="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:brightness-110 shadow-[0_0_16px_rgba(77,101,233,0.3)] transition-colors"
            >
              <Mail :size="15" /> Kontak
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
