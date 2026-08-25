<script setup lang="ts">
import { computed } from 'vue'
import { Users } from 'lucide-vue-next'

const org = [
  { id: 1, name: "Vice Rajin Sholat", role: "Ketua Himpunan", division: null },
  { id: 2, name: "Andy Bagus", role: "Wakil Ketua", division: null },
  { id: 3, name: "Aura Rizky", role: "Sekretaris", division: null },
  { id: 4, name: "Maulidia", role: "Bendahara", division: null },

  { id: 5, name: "Depa Raja Iblis", role: "Ketua Departemen", division: "PSDM" },
  { id: 101, name: "Raffa Raja Jawa", role: "Anggota", division: "PSDM" },
  { id: 102, name: "Fairus Suki", role: "Anggota", division: "PSDM" },

  { id: 6, name: "Muhammad Arya", role: "Ketua Departemen", division: "Deplu" },
  { id: 104, name: "Abidzar Dzakwan", role: "Anggota", division: "Deplu" },
  { id: 105, name: "Zakky Sekum Kaizen", role: "Anggota", division: "Deplu" },

  { id: 7, name: "Khoirul Anam", role: "Ketua Departemen", division: "EKRAF" },
  { id: 107, name: "Fathul Hidayat Sampoerna", role: "Anggota", division: "EKRAF" },
  { id: 108, name: "Esan Admin JMK", role: "Anggota", division: "EKRAF" },

  { id: 8, name: "Afzal Raza", role: "Ketua Departemen", division: "KEPSOS" },

  { id: 9, name: "Naufal Umron", role: "Ketua Departemen", division: "MEDKOMINFO" },
  { id: 113, name: "Galang gumilar", role: "Anggota", division: "MEDKOMINFO" },
]

const pengurusInti = computed(() => org.filter(m => m.division === null))

const groupedDepartments = computed(() => {
  const divisiUnik = [...new Set(org.filter(m => m.division !== null).map(m => m.division))]

  return divisiUnik.map(divisi => {
    return {
      namaDivisi: divisi,
      ketua: org.find(m => m.division === divisi && m.role === "Ketua Departemen"),
      anggota: org.filter(m => m.division === divisi && m.role === "Anggota")
    }
  })
})
</script>

<template>
  <main class="transition-colors duration-500">
    <PageHero
        label="Kepengurusan"
        title="Struktur Organisasi"
        subtitle="Kepengurusan HIMATIFA Periode 2026/2027"
    />

    <div class="bg-background py-16 px-6 transition-colors duration-500 min-h-screen">
      <div class="max-w-5xl mx-auto space-y-20">

        <div>
          <SectionLabel>Pengurus Inti</SectionLabel>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
            <MemberCard
                v-for="m in pengurusInti"
                :key="m.id"
                :name="m.name"
                :role="m.role"
                :division="null"
            />
          </div>
        </div>

        <div class="space-y-12">
          <SectionLabel>Departemen</SectionLabel>

          <div
              v-for="dept in groupedDepartments"
              :key="dept.namaDivisi"
              class="group bg-card border border-border rounded-3xl p-6 md:p-8 transition-all duration-500 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
          >
            <div class="flex items-center gap-4 mb-8 pb-6 border-b border-border transition-colors duration-500">
              <div class="p-3 rounded-2xl bg-primary/10 text-primary transition-colors duration-500">
                <Users :size="24" />
              </div>
              <h3 class="text-card-foreground font-display font-bold text-xl md:text-2xl uppercase tracking-wide group-hover:text-primary transition-colors duration-300">
                Departemen {{ dept.namaDivisi }}
              </h3>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">

              <div class="md:col-span-1 border-b md:border-b-0 md:border-r border-border pb-8 md:pb-0 md:pr-8 transition-colors duration-500">
                <p class="text-primary text-xs font-bold uppercase tracking-wider mb-5 flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  Ketua Departemen
                </p>
                <MemberCard
                    v-if="dept.ketua"
                    :name="dept.ketua.name"
                    :role="dept.ketua.role"
                    :division="dept.ketua.division"
                />
                <div v-else class="text-sm text-muted-foreground italic">
                  Belum ada ketua
                </div>
              </div>

              <div class="md:col-span-3">
                <p class="text-muted-foreground text-xs font-bold uppercase tracking-wider mb-5">
                  Anggota Tim
                </p>

                <div v-if="dept.anggota.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  <MemberCard
                      v-for="anggota in dept.anggota"
                      :key="anggota.id"
                      :name="anggota.name"
                      :role="anggota.role"
                      :division="anggota.division"
                  />
                </div>

                <div v-else class="flex items-center justify-center h-full min-h-[100px] rounded-xl border border-dashed border-border bg-muted/30 text-muted-foreground text-sm font-medium transition-colors duration-500">
                  Belum ada anggota terdaftar
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  </main>
</template>