<script setup lang="ts">
import { ref, computed } from 'vue'
import { Calendar, Link, Check, AlertCircle } from 'lucide-vue-next'

definePageMeta({
  layout: 'admin'
})

const settings = ref({
  isActive: true,
  title: "Open Recruitment Kepengurusan HIMATIFA 2026",
  startDate: "2026-09-25T08:00",
  endDate: "2026-10-10T23:59",
  formLink: "https://forms.gle/contohlinkhimatifa"
})

const isSaved = ref(false)

const currentStatus = computed(() => {
  if (!settings.value.isActive) return { text: 'Ditutup Paksa (Manual)', color: 'text-destructive', bg: 'bg-destructive/10' }

  const now = new Date()
  const start = new Date(settings.value.startDate)
  const end = new Date(settings.value.endDate)

  if (now < start) return { text: 'Belum Dibuka (Menunggu Jadwal)', color: 'text-amber-500', bg: 'bg-amber-500/10' }
  if (now > end) return { text: 'Pendaftaran Berakhir', color: 'text-destructive', bg: 'bg-destructive/10' }
  return { text: 'Sedang Berjalan (Aktif)', color: 'text-emerald-500', bg: 'bg-emerald-500/10' }
})

const handleSave = () => {
  isSaved.value = true
  setTimeout(() => {
    isSaved.value = false
  }, 2000)
}
</script>

<template>
  <div class="space-y-6 animate-in fade-in duration-300 max-w-4xl">
    <div>
      <h1 class="text-2xl font-black text-foreground font-display">Pengaturan Open Recruitment</h1>
      <p class="text-muted-foreground text-sm mt-1">Atur jadwal pembukaan dan penutupan pendaftaran pengurus baru.</p>
    </div>

    <div class="grid md:grid-cols-3 gap-6">
      <div class="md:col-span-2 space-y-5">
        <div class="bg-card rounded-2xl border border-border p-6 shadow-sm space-y-6">

          <div>
            <label class="block text-primary text-xs font-bold mb-1.5 uppercase tracking-wider">Judul Rekrutmen</label>
            <input v-model="settings.title" type="text" class="w-full border border-border bg-input-background rounded-xl px-4 py-2.5 text-foreground text-sm focus:outline-none focus:border-primary transition-all" />
          </div>

          <div class="grid sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-primary text-xs font-bold mb-1.5 uppercase tracking-wider">Tanggal & Waktu Buka</label>
              <div class="flex items-center gap-2 border border-border bg-input-background rounded-xl px-3 py-2.5 focus-within:border-primary transition-all">
                <Calendar class="w-4 h-4 text-muted-foreground shrink-0" />
                <input v-model="settings.startDate" type="datetime-local" class="flex-1 bg-transparent text-foreground text-sm focus:outline-none" />
              </div>
            </div>
            <div>
              <label class="block text-primary text-xs font-bold mb-1.5 uppercase tracking-wider">Tanggal & Waktu Tutup</label>
              <div class="flex items-center gap-2 border border-border bg-input-background rounded-xl px-3 py-2.5 focus-within:border-primary transition-all">
                <Calendar class="w-4 h-4 text-muted-foreground shrink-0" />
                <input v-model="settings.endDate" type="datetime-local" class="flex-1 bg-transparent text-foreground text-sm focus:outline-none" />
              </div>
            </div>
          </div>

          <div>
            <label class="block text-primary text-xs font-bold mb-1.5 uppercase tracking-wider">Link Form (Google Forms/Typeform)</label>
            <div class="flex items-center gap-2 border border-border bg-input-background rounded-xl px-4 py-2.5 focus-within:border-primary transition-all">
              <Link class="w-4 h-4 text-muted-foreground shrink-0" />
              <input v-model="settings.formLink" type="url" placeholder="https://forms.gle/..." class="flex-1 bg-transparent text-foreground text-sm focus:outline-none" />
            </div>
          </div>

        </div>
      </div>

      <div class="space-y-5">
        <div class="bg-card rounded-2xl border border-border p-5 shadow-sm space-y-4 relative overflow-hidden">
          <h3 class="text-foreground text-sm font-bold font-display border-b border-border pb-2">Status Form</h3>

          <div :class="['px-3 py-2.5 rounded-lg text-xs font-bold flex items-center gap-2', currentStatus.bg, currentStatus.color]">
            <AlertCircle class="w-4 h-4" />
            {{ currentStatus.text }}
          </div>

          <div class="flex items-center justify-between pt-2">
            <span class="text-sm font-medium text-foreground">Aktifkan Manual</span>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" v-model="settings.isActive" class="sr-only peer">
              <div class="w-11 h-6 bg-input-background peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary border border-border"></div>
            </label>
          </div>
          <p class="text-[11px] text-muted-foreground leading-relaxed mt-2">
            Matikan tombol ini jika Anda ingin menutup pendaftaran secara paksa sebelum waktu "Jadwal Tutup" habis.
          </p>

          <div class="pt-4 mt-4 border-t border-border">
            <button v-if="!isSaved" @click="handleSave" class="w-full py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-colors shadow-sm">
              Simpan Pengaturan
            </button>
            <div v-else class="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 text-sm font-bold">
              <Check class="w-4 h-4" /> Tersimpan!
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>