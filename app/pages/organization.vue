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
  <main>
    <PageHero
        label="Kepengurusan"
        title="Struktur Organisasi"
        subtitle="Kepengurusan HIMATIFA Periode 2026/2027"
    />

    <div class="bg-background py-16 px-6">
      <div class="max-w-5xl mx-auto space-y-16">

        <div>
          <SectionLabel>Pengurus Inti</SectionLabel>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
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
              class="bg-card border border-border rounded-2xl p-6"
          >
            <div class="flex items-center gap-2 mb-6 pb-4 border-b border-border">
              <Users :size="20" class="text-primary" />
              <h3 class="text-card-foreground font-display font-bold text-xl uppercase tracking-wide">
                Departemen {{ dept.namaDivisi }}
              </h3>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div class="md:col-span-1 border-b md:border-b-0 md:border-r border-border pb-6 md:pb-0 md:pr-6">
                <p class="text-accent text-xs font-semibold uppercase mb-3">Ketua Departemen</p>
                <MemberCard
                    v-if="dept.ketua"
                    :name="dept.ketua.name"
                    :role="dept.ketua.role"
                    :division="dept.ketua.division"
                />
              </div>

              <div class="md:col-span-3">
                <p class="text-accent text-xs font-semibold uppercase mb-3">Anggota</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <MemberCard
                      v-for="anggota in dept.anggota"
                      :key="anggota.id"
                      :name="anggota.name"
                      :role="anggota.role"
                      :division="anggota.division"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </main>
</template>