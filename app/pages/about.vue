<script setup lang="ts">
const identities = [
  { label: "Nama Resmi", value: "Himpunan Mahasiswa Informatika" },
  { label: "Singkatan", value: "HIMATIFA" },
  { label: "Universitas", value: "Universitas Muhammadiyah Surabaya" },
  { label: "Program Studi", value: "Informatika" },
  { label: "Berdiri", value: "2020" },
  { label: "Periode Aktif", value: "2026/2027" },
]

const MISSIONS = [
  "Memperkuat internal organisasi sebagai fondasi keberlangsungan HIMATIFA.",
  "Meningkatkan kompetensi mahasiswa Informatika melalui program pengembangan terstruktur.",
  "Membangun komunikasi yang baik dengan dosen sebagai mitra akademik.",
  "Mengelola keuangan secara mandiri dan produktif untuk mendukung setiap program kerja.",
  "Memperluas relasi eksternal untuk membuka peluang kolaborasi dan jejaring.",
  "Memperkuat branding HIMATIFA sebagai identitas yang dikenal dan dipercaya.",
  "Menjadikan HIMATIFA sebagai wadah aspirasi, inovasi, kreativitas, dan peluang bagi seluruh mahasiswa."
]
</script>

<template>
  <main>
    <PageHero
        label="Tentang Kami"
        title="Profil HIMATIFA"
        subtitle="Mengenal Himpunan Mahasiswa Informatika Universitas Muhammadiyah Surabaya"
    />

    <div class="bg-background py-16 px-6 transition-colors duration-500">
      <div class="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">

        <div class="md:col-span-2 space-y-10">

          <div>
            <SectionLabel>Sejarah</SectionLabel>
            <h2 class="text-2xl font-bold text-foreground mb-4 font-display transition-colors duration-500">
              Latar Belakang HIMATIFA
            </h2>
            <div class="space-y-4 text-muted-foreground text-base leading-relaxed transition-colors duration-500">
              <p>
                HIMATIFA (Himpunan Mahasiswa Teknik Informatika) adalah organisasi kemahasiswaan resmi yang menaungi seluruh mahasiswa Program Studi Teknik Informatika di Universitas Muhammadiyah Surabaya.
              </p>
              <p>
                Sebagai wadah aspirasi dan kreativitas, HIMATIFA berperan menjembatani mahasiswa dengan pihak kampus, mengembangkan kompetensi di bidang teknologi informasi, serta membangun jaringan yang luas baik di tingkat internal maupun eksternal. HIMATIFA menjadi rumah bagi mahasiswa Informatika UMSurabaya untuk tumbuh, berkarya, dan berkompetisi.
              </p>
            </div>
          </div>

          <div>
            <SectionLabel>Visi & Misi</SectionLabel>
            <div class="space-y-6">

              <div class="bg-card border border-border rounded-xl p-6 transition-all duration-500 hover:border-primary/40 hover:shadow-sm">
                <h3 class="text-card-foreground font-semibold text-lg mb-3 flex items-center gap-2 font-display transition-colors duration-500">
                  <span class="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground transition-colors duration-500">V</span>
                  Visi
                </h3>
                <p class="text-muted-foreground leading-relaxed italic transition-colors duration-500">
                  "Menjadikan HIMATIFA sebagai organisasi mahasiswa Informatika yang unggul, solid, dan berdaya saing dalam pengembangan aspirasi, kreativitas, dan kompetensi mahasiswa."
                </p>
              </div>

              <div class="bg-card border border-border rounded-xl p-6 transition-all duration-500 hover:border-primary/40 hover:shadow-sm">
                <h3 class="text-card-foreground font-semibold text-lg mb-4 flex items-center gap-2 font-display transition-colors duration-500">
                  <span class="w-5 h-5 rounded-full bg-accent flex items-center justify-center text-xs font-bold text-primary-foreground transition-colors duration-500">M</span>
                  Misi
                </h3>
                <ul class="space-y-3">
                  <li v-for="(misi, index) in MISSIONS" :key="index" class="flex items-start gap-3 text-muted-foreground leading-relaxed transition-colors duration-500 hover:text-foreground">
                    <span class="mt-1.5 w-4 h-4 rounded-full border border-primary/50 flex items-center justify-center text-[8px] text-accent shrink-0 transition-colors duration-500">
                      {{ index + 1 }}
                    </span>
                    <span>
                      {{ misi }}
                    </span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        <div class="space-y-6">
          <div class="bg-card border border-border rounded-xl p-8 flex flex-col items-center text-center transition-all duration-500 hover:border-primary/40 hover:shadow-sm">
            <div class="relative mb-4">
              <div class="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-150 transition-colors duration-500" />
              <img
                  src="/img/logo.png"
                  alt="Logo HIMATIFA"
                  class="relative w-24 h-24 object-contain transition-all duration-500 dark:mix-blend-screen"
              />
            </div>
            <div class="text-card-foreground font-bold text-lg font-display transition-colors duration-500">
              HIMATIFA
            </div>
            <div class="text-accent text-xs tracking-widest uppercase mt-0.5 transition-colors duration-500">
              UMSurabaya
            </div>
          </div>

          <div class="bg-card border border-border rounded-xl p-5 space-y-4 transition-all duration-500 hover:border-primary/40 hover:shadow-sm">
            <h4 class="text-card-foreground text-sm font-semibold font-display transition-colors duration-500">
              Identitas Organisasi
            </h4>
            <div v-for="row in identities" :key="row.label" class="group">
              <div class="text-accent text-xs mb-0.5 transition-colors duration-500">{{ row.label }}</div>
              <div class="text-foreground text-sm font-medium transition-colors duration-500 group-hover:text-primary">{{ row.value }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>