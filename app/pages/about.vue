<script setup lang="ts">
const identities = [
  { label: "Nama Resmi", value: "Himpunan Mahasiswa Informatika" },
  { label: "Singkatan", value: "HIMATIFA" },
  { label: "Universitas", value: "Universitas Muhammadiyah Surabaya" },
  { label: "Program Studi", value: "Informatika" },
  { label: "Berdiri", value: "2020" },
  { label: "Periode Aktif", value: "2026/2027" },
]
</script>

<template>
  <main>
    <PageHero
        label="Tentang Kami"
        title="Profil HIMATIFA"
        subtitle="Mengenal Himpunan Mahasiswa Informatika Universitas Muhammadiyah Surabaya"
    />

    <div class="bg-background py-16 px-6">
      <div class="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">

        <div class="md:col-span-2 space-y-10">

          <div>
            <SectionLabel>Sejarah</SectionLabel>
            <h2 class="text-2xl font-bold text-foreground mb-4 font-display">
              Latar Belakang HIMATIFA
            </h2>
            <div class="space-y-4 text-muted-foreground text-base leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
              </p>
            </div>
          </div>

          <div>
            <SectionLabel>Visi & Misi</SectionLabel>
            <div class="space-y-6">

              <div class="bg-card border border-border rounded-xl p-6">
                <h3 class="text-card-foreground font-semibold text-lg mb-3 flex items-center gap-2 font-display">
                  <span class="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground">V</span>
                  Visi
                </h3>
                <p class="text-muted-foreground leading-relaxed italic">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                </p>
              </div>

              <div class="bg-card border border-border rounded-xl p-6">
                <h3 class="text-card-foreground font-semibold text-lg mb-4 flex items-center gap-2 font-display">
                  <span class="w-5 h-5 rounded-full bg-accent flex items-center justify-center text-xs font-bold text-primary-foreground">M</span>
                  Misi
                </h3>
                <ul class="space-y-3">
                  <li v-for="n in 4" :key="n" class="flex items-start gap-3 text-muted-foreground leading-relaxed">
                    <span class="mt-1.5 w-4 h-4 rounded-full border border-primary/50 flex items-center justify-center text-[8px] text-accent shrink-0">
                      {{ n }}
                    </span>
                    <span>
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.
                    </span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        <div class="space-y-6">

          <div class="bg-card border border-border rounded-xl p-8 flex flex-col items-center text-center">
            <div class="relative mb-4">
              <div class="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-150" />
              <img
                  src="/img/logo.png"
                  alt="Logo HIMATIFA"
                  class="relative w-24 h-24 object-contain mix-blend-screen"
              />
            </div>
            <div class="text-card-foreground font-bold text-lg font-display">
              HIMATIFA
            </div>
            <div class="text-accent text-xs tracking-widest uppercase mt-0.5">
              UMSurabaya
            </div>
          </div>

          <div class="bg-card border border-border rounded-xl p-5 space-y-4">
            <h4 class="text-card-foreground text-sm font-semibold font-display">
              Identitas Organisasi
            </h4>
            <div v-for="row in identities" :key="row.label">
              <div class="text-accent text-xs mb-0.5">{{ row.label }}</div>
              <div class="text-foreground text-sm font-medium">{{ row.value }}</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </main>
</template>