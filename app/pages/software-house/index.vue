<script setup lang="ts">
definePageMeta({
  layout: 'ekraf'
})

const SECTIONS = [
  { to: '/kaizen-company/produk', icon: '📦', label: 'Produk', desc: 'Katalog produk unggulan yang dikelola kader IMM Kaizen.' },
  { to: '/kaizen-company/layanan', icon: '⚙️', label: 'Layanan', desc: 'Jasa profesional dari tim kreatif dan teknis Kaizen.' },
  { to: '/kaizen-company/portofolio', icon: '🎨', label: 'Portofolio', desc: 'Karya, proyek, dan output terbaik yang pernah kami hasilkan.' },
  { to: '/kaizen-company/tim', icon: '👥', label: 'Tim & Kapabilitas', desc: 'Mengenal kemampuan dan kompetensi tim Kaizen Company.' },
]

const PORTFOLIO_PREVIEW = [
  { title: '[Nama Proyek A]', cat: 'Desain Grafis', img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop&auto=format' },
  { title: '[Nama Proyek B]', cat: 'Produksi Konten', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&auto=format' },
  { title: '[Nama Proyek C]', cat: 'Identitas Visual', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&auto=format' },
]

const STATS = [
  { value: '10+', label: 'Proyek Selesai' },
  { value: '15+', label: 'Klien & Mitra' },
  { value: '50+', label: 'Kader Terlibat' },
]
</script>

<template>
  <div class="font-sans">

    <section class="min-h-[calc(100vh-4rem)] flex items-center relative overflow-hidden bg-background">
      <div class="absolute top-0 left-0 w-1 h-full bg-primary"></div>

      <div
          class="absolute inset-0 opacity-[0.04] text-foreground"
          style="background-image: radial-gradient(currentColor 1px, transparent 0); background-size: 28px 28px;"
      ></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 w-full">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          <div class="max-w-3xl">
            <div class="inline-flex items-center gap-2 text-muted-foreground text-xs font-semibold border border-border px-4 py-1.5 rounded-full mb-10 font-display">
              Studio & Layanan Profesional
            </div>
            <h1 class="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-foreground leading-[0.95] tracking-tight mb-8 font-display">
              HIMATIFA<br />
              <span class="text-primary">COMPANY</span>
            </h1>
            <p class="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl mb-12">
              Wajah profesional dan kreatif dari IMM Kaizen. Kami menghadirkan produk, layanan, dan karya berkualitas yang lahir dari semangat kolaborasi dan pengembangan kader.
            </p>
            <div class="flex flex-wrap gap-4">
              <NuxtLink
                  to="/kaizen-company/portofolio"
                  class="bg-primary text-primary-foreground font-bold px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors text-sm font-display"
              >
                Lihat Portofolio
              </NuxtLink>
              <a
                  href="mailto:kaizen@immkaizen.org"
                  class="border border-border text-foreground font-bold px-8 py-4 rounded-lg hover:bg-input-background transition-colors text-sm font-display"
              >
                Kolaborasi Bersama
              </a>
            </div>
          </div>

          <div class="relative flex justify-center items-center mt-10 lg:mt-0">
            <!-- Glow Effect -->
            <div class="absolute w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] bg-gradient-to-tr from-primary to-primary/30 rounded-full blur-[80px] opacity-40"></div>

            <div class="relative z-10 w-64 h-64 sm:w-80 sm:h-80 rounded-full p-[2px] bg-gradient-to-b from-foreground/20 via-foreground/5 to-transparent">
              <div class="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden border border-border shadow-2xl">
                <img
                    src="~~~/public/img/logo.png"
                    alt="Logo Kaizen Company"
                    class="w-full h-full object-cover opacity-90 mix-blend-lighten"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- Ambient Background Blurs -->
      <div class="absolute right-0 top-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
      <div class="absolute left-1/4 bottom-0 w-64 h-64 rounded-full bg-foreground/5 blur-3xl pointer-events-none"></div>
    </section>

    <!-- Tentang Section -->
    <section class="bg-card border-t border-border py-20 lg:py-28">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span class="text-primary text-xs font-bold tracking-widest uppercase font-display">Tentang</span>
          <h2 class="mt-3 text-3xl sm:text-4xl font-extrabold text-foreground leading-tight font-display">
            Kreativitas & Profesionalisme dari IMM Kaizen
          </h2>
          <p class="mt-5 text-muted-foreground leading-relaxed text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi commodi consequatur corporis cumque delectus dignissimos dolores doloribus ea earum, error ex expedita hic id ipsa laborum magnam maiores minima nam nemo nesciunt nobis obcaecati odio omnis optio qui rem voluptate! Consequatur est porro quis sed sit! Accusamus ad animi atque beatae facere hic, inventore molestiae non, nulla ratione voluptatum.
          </p>
          <div class="mt-8 grid grid-cols-3 gap-6">
            <div v-for="stat in STATS" :key="stat.label">
              <div class="text-2xl font-extrabold text-primary font-display">{{ stat.value }}</div>
              <div class="text-xs text-muted-foreground mt-1">{{ stat.label }}</div>
            </div>
          </div>
        </div>
        <div class="relative rounded-2xl overflow-hidden bg-input-background aspect-[4/3]">
          <img
              src="~~~/public/img/logo.png"
              alt="Kaizen Company workspace"
              class="w-full h-full object-cover opacity-60"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
        </div>
      </div>
    </section>

    <!-- Jelajahi Section -->
    <section class="bg-background py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-2xl font-extrabold text-foreground font-display">Jelajahi Kaizen Company</h2>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <NuxtLink
              v-for="s in SECTIONS"
              :key="s.to"
              :to="s.to"
              class="group p-6 rounded-xl bg-card border border-border hover:bg-input-background hover:border-primary/50 transition-all flex flex-col h-full"
          >
            <div class="text-3xl mb-4">{{ s.icon }}</div>
            <h3 class="font-bold text-foreground text-sm mb-2 group-hover:text-primary transition-colors font-display">{{ s.label }}</h3>
            <p class="text-xs text-muted-foreground leading-relaxed mt-auto">{{ s.desc }}</p>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section class="bg-card py-20 border-t border-border">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span class="text-primary text-xs font-bold tracking-widest uppercase font-display">Karya Terbaru</span>
            <h2 class="mt-2 text-2xl font-extrabold text-foreground font-display">Sorotan Portofolio</h2>
          </div>
          <NuxtLink to="/kaizen-company/portofolio" class="text-muted-foreground hover:text-foreground text-xs font-semibold transition-colors font-display">
            Lihat semua &rarr;
          </NuxtLink>
        </div>
        <div class="grid sm:grid-cols-3 gap-4">
          <div
              v-for="p in PORTFOLIO_PREVIEW"
              :key="p.title"
              class="group relative rounded-xl overflow-hidden aspect-[4/3] bg-input-background cursor-pointer"
          >
            <img
                :src="p.img"
                :alt="p.title"
                class="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-5">
              <div class="text-xs text-primary font-bold mb-1 font-display uppercase tracking-wider">{{ p.cat }}</div>
              <div class="font-bold text-foreground text-sm font-display">{{ p.title }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-primary py-20 relative overflow-hidden">
      <!-- Pattern Overlay -->
      <div
          class="absolute inset-0 opacity-10 pointer-events-none text-primary-foreground"
          style="background-image: repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 30px);"
      ></div>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 class="text-4xl sm:text-5xl font-extrabold text-primary-foreground mb-6 font-display leading-tight">
          Ada Proyek yang Ingin Kita Kerjakan Bersama?
        </h2>
        <p class="text-primary-foreground/80 text-base sm:text-lg mb-10 max-w-lg mx-auto leading-relaxed">
          Kami terbuka untuk kolaborasi, kemitraan, dan proyek baru. Ceritakan kebutuhanmu, dan biarkan tim Kaizen menjawabnya.
        </p>
        <a
            href="mailto:kaizen@immkaizen.org"
            class="inline-flex items-center gap-3 bg-background text-primary font-extrabold px-10 py-4 rounded-lg hover:bg-background/90 transition-colors text-sm font-display shadow-lg"
        >
          Mulai Kolaborasi
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </section>

  </div>
</template>
