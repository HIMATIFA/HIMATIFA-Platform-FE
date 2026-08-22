<script setup lang="ts">
const Departemens = [
  {
    id: 1,
    name: "Pengembangan Sumber Daya Mahasiswa",
    abbr: "PSDM",
    description: "Fokus pada pengembangan kader dan skill mahasiswa, serta menjaga solidaritas internal pengurus HIMATIFA.",
    accent: "var(--primary)",
    programs: ["Latihan Dasar Kepemimpinan", "Upgrading Pengurus", "Study Club"]
  },
  {
    id: 2,
    name: "Luar Negeri",
    abbr: "Deplu",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    accent: "var(--primary)",
    programs: ["Lorem ipsum dolor sit amet", "Consectetur adipiscing elit", "Sed do eiusmod tempor"]
  },
  {
    id: 3,
    name: "Ekonomi Kreatif",
    abbr: "Ekraf",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    accent: "var(--primary)",
    programs: ["Ut enim ad minim veniam", "Quis nostrud exercitation", "Ullamco laboris nisi ut"]
  },
  {
    id: 4,
    name: "Kesejahteraan Sosial",
    abbr: "Kepsos",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.",
    accent: "var(--primary)",
    programs: ["Duis aute irure dolor in", "Reprehenderit in voluptate", "Velit esse cillum dolore"]

  },
  {
    id: 5,
    name: "Media Komunikasi & Informasi",
    abbr: "Medkominfo",
    description: "Mengelola media, publikasi, dan menjalin relasi dengan pihak eksternal himpunan.",
    accent: "var(--primary)",
    programs: ["Pengelolaan Sosial Media", "Mading & Buletin Informatika"]
  },
]
</script>

<template>
  <main>
    <PageHero
        label="Departemen"
        title="Daftar Departemen"
        subtitle="Unit-unit kerja yang menjalankan program HIMATIFA"
    />

    <div class="bg-background py-16 px-6">
      <div class="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <div
            v-for="d in Departemens"
            :key="d.id"
            class="bg-card border border-border rounded-2xl p-7 hover:border-primary/50 transition-all duration-200 flex flex-col"
        >
          <div class="flex items-center gap-4 mb-5">
            <div
                class="px-3 py-2 rounded-xl flex items-center justify-center text-sm font-bold bg-background border shrink-0"
                :style="{
                color: d.accent,
                borderColor: d.accent
              }"
            >
              {{ d.abbr }}
            </div>

            <div>
              <h3 class="text-card-foreground font-bold text-base font-display leading-tight">
                {{ d.name }}
              </h3>
              <span class="text-accent text-xs">
                Departemen {{ d.abbr }}
              </span>
            </div>
          </div>

          <p class="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
            {{ d.description }}
          </p>

          <div>
            <div class="text-accent text-xs font-semibold tracking-wide mb-3">
              Program Kerja
            </div>
            <ul class="space-y-2">
              <li
                  v-for="p in d.programs"
                  :key="p"
                  class="flex items-start gap-2 text-muted-foreground text-sm"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                <span class="leading-snug">{{ p }}</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </main>
</template>