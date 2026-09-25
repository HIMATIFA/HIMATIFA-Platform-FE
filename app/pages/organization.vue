<script setup lang="ts">
import { ref, computed } from 'vue'
import type { CSSProperties } from 'vue'
import { Users, Briefcase, Globe, MonitorPlay, X, User, MousePointerClick } from 'lucide-vue-next'
import kahim from "~~/public/img/kahim.jpg"

interface Member {
  id: number
  name: string
  role: string
  division: string | null
  image?: string
}

const org: Member[] = [
  { id: 1, name: "Vichras Mazcheranou Hafizh", role: "Wali Kota", division: null, image: kahim },
  { id: 2, name: "Andy Bagus Oesmadi", role: "Wakil Wali Kota", division: null, image: kahim },
  { id: 3, name: "Aura Rizki Inayah Fadylah", role: "Sekretaris", division: null, image: kahim },
  { id: 4, name: "Maulidia Dliyaun Najah", role: "Bendahara", division: null, image: kahim },

  { id: 5, name: "Vlahadiqa Runayasha Khandeva W.", role: "Ketua Departemen", division: "PSDM", image: kahim },
  { id: 101, name: "Zacky Maulana", role: "Sekretaris Departemen", division: "PSDM", image: kahim },
  { id: 102, name: "Moh. Faiz Haikal", role: "Anggota", division: "PSDM", image: kahim },
  { id: 103, name: "Albany Raffa Assyukurra", role: "Anggota", division: "PSDM", image: kahim },
  { id: 104, name: "Improatus Sholiha", role: "Anggota", division: "PSDM", image: kahim },
  { id: 105, name: "Fairuz Abdillah Idrus", role: "Anggota", division: "PSDM", image: kahim },

  { id: 6, name: "Naufal Umron Farras", role: "Ketua Departemen", division: "MEDKOMINFO", image: kahim },
  { id: 106, name: "Venerdi Dinarsa Narendra Putra Chaidir", role: "Sekretaris Departemen", division: "MEDKOMINFO", image: kahim },
  { id: 107, name: "Muhammad Dafa Firdaus", role: "Anggota", division: "MEDKOMINFO", image: kahim },
  { id: 108, name: "Galang Gumilar Aditama", role: "Anggota", division: "MEDKOMINFO", image: kahim },
  { id: 109, name: "Suci Dwi Prasetiyo", role: "Anggota", division: "MEDKOMINFO", image: kahim },
  { id: 110, name: "Manisa Ika Setyaningrum", role: "Anggota", division: "MEDKOMINFO", image: kahim },

  { id: 7, name: "Afzal Raza Sarfaraz", role: "Ketua Departemen", division: "KEPSOS", image: kahim },
  { id: 111, name: "Bilqis Prasasti Madinah", role: "Sekretaris Departemen", division: "KEPSOS", image: kahim },
  { id: 112, name: "Rangga Putra Ryandinata", role: "Anggota", division: "KEPSOS", image: kahim },
  { id: 113, name: "Maulida Imroatus Solehah", role: "Anggota", division: "KEPSOS", image: kahim },
  { id: 114, name: "Satrio", role: "Anggota", division: "KEPSOS", image: kahim },
  { id: 115, name: "Mutiah Al Karami", role: "Anggota", division: "KEPSOS", image: kahim },
  { id: 116, name: "Zilvo Nada Haerina", role: "Anggota", division: "KEPSOS", image: kahim },
  { id: 117, name: "Hanif Kanda Pratama", role: "Anggota", division: "KEPSOS", image: kahim },
  { id: 118, name: "Umert Muslim", role: "Anggota", division: "KEPSOS", image: kahim },
  { id: 119, name: "Mert Dolsis", role: "Anggota", division: "KEPSOS", image: kahim },

  { id: 8, name: "Khoirul Anam", role: "Ketua Departemen", division: "EKRAF", image: kahim },
  { id: 120, name: "Bintang Fauharza Harfa Abimanyu", role: "Sekretaris Departemen", division: "EKRAF", image: kahim },
  { id: 121, name: "Salsya Bhila Cendana Salehuddin", role: "Anggota", division: "EKRAF", image: kahim },
  { id: 122, name: "M.Nabil Al Ghifari", role: "Anggota", division: "EKRAF", image: kahim },
  { id: 123, name: "Agnes Putri Haryono", role: "Anggota", division: "EKRAF", image: kahim },
  { id: 124, name: "Hersanda Muhammad Alfarizi", role: "Anggota", division: "EKRAF", image: kahim },
  { id: 125, name: "Muhammad Nauvaldi Akbar Al Faruqi", role: "Anggota", division: "EKRAF", image: kahim },
  { id: 126, name: "Muhammad Ihsan Prdaipta Maulana", role: "Anggota", division: "EKRAF", image: kahim },
  { id: 127, name: "Fathul Hidayat Sampurna", role: "Anggota", division: "EKRAF", image: kahim },

  { id: 9, name: "Muhammad Arya Putra Riswanto", role: "Ketua Departemen", division: "Deplu", image: kahim },
  { id: 128, name: "Abidzar Dzakwan Sahudi", role: "Sekretaris Departemen", division: "Deplu", image: kahim },
  { id: 129, name: "Yasmin Salim Syamlan", role: "Anggota", division: "Deplu", image: kahim },
  { id: 130, name: "Muhammad Zakky Arifina", role: "Anggota", division: "Deplu", image: kahim },
]

const deptCovers: Record<string, string> = {
  "PSDM": "https://placehold.co/600x800/png?text=Feed+PSDM",
  "MEDKOMINFO": "https://placehold.co/600x800/png?text=Feed+MEDKOMINFO",
  "KEPSOS": "https://placehold.co/600x800/png?text=Feed+KEPSOS",
  "EKRAF": "https://placehold.co/600x800/png?text=Feed+EKRAF",
  "Deplu": "https://placehold.co/600x800/png?text=Feed+Deplu"
}

const pengurusInti = computed(() => org.filter(m => m.division === null))

const groupedDepartments = computed(() => {
  const divisiUnik = [...new Set(org.filter(m => m.division !== null).map(m => m.division as string))]

  return divisiUnik.map(divisi => {
    const deptMembers = org.filter(m => m.division === divisi)
    const ketua = deptMembers.find(m => m.role === "Ketua Departemen")
    const sekretaris = deptMembers.find(m => m.role === "Sekretaris Departemen")
    const anggota = deptMembers.filter(m => m.role === "Anggota")
    return {
      namaDivisi: divisi,
      coverImage: deptCovers[divisi] || null,
      isSingle: false,
      ketua,
      sekretaris,
      anggota,
      totalAnggota: deptMembers.length
    }
  })
})

const isModalOpen = ref(false)
const selectedDept = ref<any>(null)
const deptMembersList = ref<Member[]>([])
const currentCardIndex = ref(0)

const openSingleModal = (member: Member) => {
  selectedDept.value = { isSingle: true, title: member.role }
  deptMembersList.value = [member]
  currentCardIndex.value = 0
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const openModal = (group: any) => {
  selectedDept.value = group
  let list: Member[] = []
  if (group.ketua) list.push(group.ketua)
  if (group.sekretaris) list.push(group.sekretaris)
  if (group.anggota) list = [...list, ...group.anggota]

  deptMembersList.value = list
  currentCardIndex.value = 0
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isModalOpen.value = false
  setTimeout(() => {
    selectedDept.value = null
    deptMembersList.value = []
  }, 300)
  document.body.style.overflow = ''
}

const nextCard = () => {
  if (currentCardIndex.value < deptMembersList.value.length - 1) {
    currentCardIndex.value++
  } else {
    currentCardIndex.value = 0
  }
}

const getCardStyle = (index: number): CSSProperties => {
  const diff = index - currentCardIndex.value

  if (diff < 0) {
    return {
      transform: 'translateY(-100px) scale(0.8)',
      opacity: 0,
      zIndex: 0,
      pointerEvents: 'none'
    }
  }

  const translateY = diff * -20
  const scale = 1 - (diff * 0.05)
  const opacity = 1 - (diff * 0.2)

  return {
    transform: `translateY(${translateY}px) scale(${scale})`,
    opacity: opacity > 0 ? opacity : 0,
    zIndex: 50 - diff,
    pointerEvents: (diff === 0 ? 'auto' : 'none') as CSSProperties['pointerEvents']
  }
}

const getBadgeClass = (role: string) => {
  if (['Ketua Departemen', 'Wali Kota', 'Wakil Wali Kota'].includes(role)) {
    return 'bg-primary text-primary-foreground'
  } else if (['Sekretaris Departemen', 'Sekretaris', 'Bendahara'].includes(role)) {
    return 'bg-secondary-foreground text-secondary'
  }
  return 'bg-muted text-muted-foreground border border-border'
}

const formatRoleLabel = (role: string) => {
  const roleMap: Record<string, string> = {
    'Wali Kota': 'Ketua',
    'Wakil Wali Kota': 'Wakil',
    'Sekretaris': 'Sekretaris',
    'Bendahara': 'Bendahara',
    'Ketua Departemen': 'Ketua',
    'Sekretaris Departemen': 'Sekretaris',
    'Anggota': 'Anggota'
  }
  return roleMap[role] || 'Anggota'
}
</script>

<template>
  <main class="transition-colors duration-500 bg-background min-h-screen">
    <PageHero
        label="Kepengurusan"
        title="Struktur Organisasi"
        subtitle="Kepengurusan HIMATIFA Periode 2026/2027"
    />

    <div class="py-16 px-4 sm:px-6 transition-colors duration-500">
      <div class="max-w-6xl mx-auto space-y-24">

        <section class="flex flex-col items-center text-center">
          <div class="flex items-center justify-center gap-4 mb-4">
            <div class="w-10 h-0.5 bg-primary rounded-full"></div>
            <span class="text-xs font-bold text-primary uppercase tracking-widest">Kepengurusan</span>
            <div class="w-10 h-0.5 bg-primary rounded-full"></div>
          </div>

          <h2 class="text-3xl md:text-4xl font-extrabold text-foreground mb-3 font-display transition-colors">
            Pimpinan Umum
          </h2>
          <p class="text-muted-foreground max-w-xl mx-auto mb-12 transition-colors">
            Ketua, Wakil, Sekretaris, dan Bendahara HIMATIFA. Ketuk untuk melihat detail.
          </p>

          <div class="flex flex-wrap justify-center gap-10 md:gap-16 items-end">
            <div
                v-for="m in pengurusInti"
                :key="m.id"
                @click="openSingleModal(m)"
                class="flex flex-col items-center text-center group cursor-pointer"
            >
              <div
                  class="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-background shadow-lg mb-5 transition-all duration-300 group-hover:-translate-y-2 relative ring-2 ring-primary/40 group-hover:ring-primary"
              >
                <img
                    v-if="m.image"
                    :src="m.image"
                    :alt="m.name"
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div v-else class="w-full h-full bg-secondary/80 flex items-center justify-center">
                  <User class="w-1/3 h-1/3 text-muted-foreground opacity-50 group-hover:scale-110 transition-transform" />
                </div>
              </div>

              <h3 class="font-extrabold text-foreground text-base md:text-lg group-hover:text-primary transition-colors">
                {{ m.name }}
              </h3>
              <p class="text-sm text-muted-foreground mt-1 font-medium transition-colors">
                {{ m.role }}
              </p>
            </div>
          </div>
        </section>

        <section>
          <div class="mb-8">
            <h2 class="text-2xl md:text-3xl font-extrabold text-foreground mb-2 font-display transition-colors">
              Departemen
            </h2>
            <p class="text-muted-foreground text-sm md:text-base transition-colors">
              Setiap departemen punya fokus kerjanya sendiri. Ketuk salah satu untuk melihat daftar anggotanya.
            </p>
          </div>

          <div class="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            <div
                v-for="(dept, index) in groupedDepartments"
                :key="dept.namaDivisi || index"
                @click="openModal(dept)"
                class="snap-start shrink-0 relative w-[240px] h-[340px] rounded-2xl overflow-hidden group bg-card border border-border shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              <div class="absolute inset-0">
                <img
                    v-if="dept.coverImage"
                    :src="dept.coverImage"
                    :alt="`Cover ${dept.namaDivisi}`"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div
                    v-else
                    class="w-full h-full bg-gradient-to-br from-primary/10 to-transparent dark:from-primary/5 dark:to-background group-hover:scale-105 transition-transform duration-700"
                ></div>
              </div>

              <div v-if="!dept.coverImage" class="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-60 group-hover:scale-110 transition-all duration-500">
                <Users v-if="index % 4 === 0" class="w-20 h-20 text-foreground" />
                <Briefcase v-else-if="index % 4 === 1" class="w-20 h-20 text-foreground" />
                <MonitorPlay v-else-if="index % 4 === 2" class="w-20 h-20 text-foreground" />
                <Globe v-else class="w-20 h-20 text-foreground" />
              </div>

              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-300 group-hover:opacity-90"></div>

              <div class="absolute bottom-0 left-0 w-full p-5 z-10">
                <h3 class="text-white font-bold text-lg md:text-xl leading-tight font-display mb-1">
                  {{ dept.namaDivisi }}
                </h3>
                <p class="text-white/80 text-xs font-medium tracking-wide">
                  {{ dept.totalAnggota }} anggota
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>

    <Transition
        enter-active-class="transition-opacity duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
      <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="closeModal"></div>

        <div class="relative w-full max-w-[400px] bg-background border border-border rounded-3xl shadow-2xl flex flex-col p-5 md:p-6 transition-transform duration-300 scale-100">

          <div class="flex items-center justify-between mb-8">
            <h3 class="text-lg font-bold text-foreground font-display">
              {{ selectedDept?.isSingle ? selectedDept?.title : 'Departemen ' + selectedDept?.namaDivisi }}
            </h3>
            <button
                @click="closeModal"
                class="p-2 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
            >
              <X class="w-5 h-5" />
            </button>
          </div>

          <div v-if="deptMembersList.length > 0" class="relative h-[380px] w-full flex justify-center mt-4 perspective-1000">
            <div
                v-for="(member, idx) in deptMembersList"
                :key="member.id"
                @click="idx === currentCardIndex && deptMembersList.length > 1 ? nextCard() : null"
                class="absolute w-[90%] md:w-[320px] h-[340px] bg-card border border-border rounded-2xl shadow-xl flex flex-col overflow-hidden transition-all duration-500 ease-out cursor-pointer"
                :style="getCardStyle(idx)"
            >
              <div class="h-[70%] bg-secondary flex items-center justify-center relative overflow-hidden">
                <img
                    v-if="member.image"
                    :src="member.image"
                    :alt="member.name"
                    class="w-full h-full object-cover"
                />
                <User v-else class="w-16 h-16 text-muted-foreground/40" />

                <div
                    class="absolute top-4 right-4 text-[10px] font-bold px-2.5 py-1 rounded-md shadow-sm uppercase tracking-wider transition-colors z-10"
                    :class="getBadgeClass(member.role)"
                >
                  {{ formatRoleLabel(member.role) }}
                </div>
              </div>

              <div class="h-[30%] bg-background p-4 flex flex-col items-center justify-center text-center border-t border-border z-10">
                <h4 class="font-extrabold text-foreground text-lg mb-1 leading-none">{{ member.name }}</h4>
                <p class="text-xs font-medium text-primary">{{ member.role }}</p>
              </div>
            </div>
          </div>

          <div v-else class="h-[380px] flex items-center justify-center text-center">
            <p class="text-muted-foreground text-sm italic">Belum ada pengurus terdaftar.</p>
          </div>

          <div v-if="deptMembersList.length > 0" class="mt-6 flex flex-col items-center">
            <div class="text-foreground font-bold text-sm tracking-widest font-display">
              {{ currentCardIndex + 1 }} / {{ deptMembersList.length }}
            </div>
            <div v-if="deptMembersList.length > 1" class="flex items-center gap-2 mt-2 text-muted-foreground">
              <MousePointerClick class="w-3.5 h-3.5" />
              <span class="text-xs font-medium">Ketuk kartu untuk anggota berikutnya</span>
            </div>
          </div>

        </div>
      </div>
    </Transition>

  </main>
</template>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.perspective-1000 {
  perspective: 1000px;
}
</style>