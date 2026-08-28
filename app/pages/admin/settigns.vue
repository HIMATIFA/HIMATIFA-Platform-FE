<script setup lang="ts">
import { ref } from 'vue'
import {
  Building2, Globe, Mail, Instagram, Youtube, Info, Check, Save, Settings
} from 'lucide-vue-next'

definePageMeta({
  layout: 'admin'
})

type Section = "org" | "social" | "contact" | "meta"

const activeSection = ref<Section>("org")
const saved = ref(false)

const orgForm = ref({
  name: "Himpunan Mahasiswa Informatika",
  abbr: "HIMATIFA",
  university: "Universitas Muhammadiyah Surabaya",
  prodi: "Informatika",
  founded: "2020",
  period: "2026/2027",
  description: "HIMATIFA adalah himpunan mahasiswa Program Studi Informatika Universitas Muhammadiyah Surabaya yang berdiri sejak tahun 2020.",
})

const socialForm = ref({
  instagram: "@himatifa_ums",
  youtube: "HIMATIFA UMSurabaya",
  website: "",
  twitter: "",
  linkedin: "",
})

const contactForm = ref({
  email: "himatifa@umsurabaya.ac.id",
  phone: "",
  address: "Universitas Muhammadiyah Surabaya",
  city: "Surabaya",
  province: "Jawa Timur",
})

const metaForm = ref({
  siteTitle: "HIMATIFA — Himpunan Mahasiswa Informatika UMSurabaya",
  metaDesc: "Website resmi Himpunan Mahasiswa Informatika Universitas Muhammadiyah Surabaya.",
  keywords: "himatifa, informatika, umsurabaya, himpunan mahasiswa",
  ogImage: "",
})

const sectionTabs = [
  { key: "org" as Section, label: "Informasi Organisasi", icon: Building2 },
  { key: "social" as Section, label: "Media Sosial", icon: Instagram },
  { key: "contact" as Section, label: "Kontak", icon: Mail },
  { key: "meta" as Section, label: "Metadata Website", icon: Globe },
]

const socialFields = [
  { key: "instagram" as const, label: "Instagram", icon: Instagram, prefix: "@" },
  { key: "youtube" as const, label: "YouTube", icon: Youtube, prefix: "" },
  { key: "website" as const, label: "Website Resmi", icon: Globe, prefix: "https://" },
]

const handleSave = () => {
  saved.value = true
  setTimeout(() => {
    saved.value = false
  }, 2000)
}

const inputClass = "w-full border border-border bg-input-background text-foreground rounded-xl px-4 py-2.5 text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-ring focus:ring-1 focus:ring-ring/20 transition-all"
const textareaClass = `${inputClass} resize-none`
</script>

<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div>
          <h1 class="text-2xl font-bold text-foreground font-display">Pengaturan</h1>
          <p class="text-muted-foreground text-sm mt-0.5">Konfigurasi dasar HIMATIFA Platform</p>
        </div>
      </div>

      <button
          @click="handleSave"
          :class="[
          'flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-sm',
          saved ? 'bg-success text-success-foreground' : 'bg-primary text-primary-foreground hover:bg-primary/90'
        ]"
      >
        <template v-if="saved"><Check :size="14" /> Tersimpan</template>
        <template v-else><Save :size="14" /> Simpan Perubahan</template>
      </button>
    </div>

    <div class="flex items-start gap-3 bg-info/10 border border-info/20 rounded-2xl px-5 py-4">
      <Info :size="16" class="text-info mt-0.5 shrink-0" />
      <p class="text-foreground text-sm">
        Pengaturan ini merupakan UI exploration untuk future CMS. Perubahan di sini belum terhubung ke implementasi V1 public website.
      </p>
    </div>

    <div class="grid lg:grid-cols-4 gap-6">
      <div class="lg:col-span-1">
        <div class="bg-card rounded-2xl border border-border overflow-hidden">
          <div class="px-4 py-3 border-b border-border text-muted-foreground text-xs font-semibold uppercase tracking-wider font-display">
            Bagian
          </div>
          <nav class="p-2 space-y-1">
            <button
                v-for="tab in sectionTabs"
                :key="tab.key"
                @click="activeSection = tab.key"
                :class="[
                'w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all text-left',
                activeSection === tab.key
                  ? 'bg-primary text-primary-foreground font-semibold shadow-sm'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              ]"
            >
              <component :is="tab.icon" :size="14" :class="activeSection === tab.key ? 'text-primary-foreground' : 'text-muted-foreground'" />
              {{ tab.label }}
            </button>
          </nav>
        </div>
      </div>

      <div class="lg:col-span-3 space-y-5">

        <div v-if="activeSection === 'org'" class="bg-card rounded-2xl border border-border overflow-hidden">
          <div class="flex items-center gap-3 px-6 py-4 border-b border-border bg-secondary/30">
            <Building2 :size="16" class="text-primary" />
            <h3 class="text-foreground font-semibold text-sm font-display">Informasi Organisasi</h3>
          </div>
          <div class="p-6 space-y-5">
            <div class="grid sm:grid-cols-2 gap-5">
              <div>
                <label class="block text-muted-foreground text-xs font-semibold mb-1.5 uppercase tracking-wider">Nama Organisasi</label>
                <input v-model="orgForm.name" type="text" :class="inputClass" />
              </div>
              <div>
                <label class="block text-muted-foreground text-xs font-semibold mb-1.5 uppercase tracking-wider">Singkatan</label>
                <input v-model="orgForm.abbr" type="text" :class="inputClass" />
              </div>
              <div>
                <label class="block text-muted-foreground text-xs font-semibold mb-1.5 uppercase tracking-wider">Universitas</label>
                <input v-model="orgForm.university" type="text" :class="inputClass" />
              </div>
              <div>
                <label class="block text-muted-foreground text-xs font-semibold mb-1.5 uppercase tracking-wider">Program Studi</label>
                <input v-model="orgForm.prodi" type="text" :class="inputClass" />
              </div>
              <div>
                <label class="block text-muted-foreground text-xs font-semibold mb-1.5 uppercase tracking-wider">Tahun Berdiri</label>
                <input v-model="orgForm.founded" type="text" :class="inputClass" />
              </div>
              <div>
                <label class="block text-muted-foreground text-xs font-semibold mb-1.5 uppercase tracking-wider">Periode Kepengurusan Aktif</label>
                <input v-model="orgForm.period" type="text" :class="inputClass" />
              </div>
            </div>
            <div>
              <label class="block text-muted-foreground text-xs font-semibold mb-1.5 uppercase tracking-wider">Deskripsi Singkat Organisasi</label>
              <textarea v-model="orgForm.description" rows="3" :class="textareaClass"></textarea>
              <p class="text-muted-foreground/60 text-xs mt-1">Tampil pada footer dan metadata website.</p>
            </div>
          </div>
        </div>

        <div v-if="activeSection === 'social'" class="bg-card rounded-2xl border border-border overflow-hidden">
          <div class="flex items-center gap-3 px-6 py-4 border-b border-border bg-secondary/30">
            <Instagram :size="16" class="text-primary" />
            <h3 class="text-foreground font-semibold text-sm font-display">Media Sosial</h3>
          </div>
          <div class="p-6 space-y-5">
            <div v-for="item in socialFields" :key="item.key">
              <label class="block text-muted-foreground text-xs font-semibold mb-1.5 uppercase tracking-wider">{{ item.label }}</label>
              <div class="flex items-center gap-2 border border-border bg-input-background rounded-xl px-4 py-2.5 focus-within:border-ring focus-within:ring-1 focus-within:ring-ring/20 transition-all">
                <component :is="item.icon" :size="14" class="text-primary shrink-0" />
                <span v-if="item.prefix" class="text-muted-foreground/60 text-sm shrink-0">{{ item.prefix }}</span>
                <input
                    v-model="socialForm[item.key]"
                    type="text"
                    :placeholder="`${item.label} HIMATIFA`"
                    class="flex-1 text-foreground text-sm placeholder:text-muted-foreground/40 focus:outline-none bg-transparent"
                />
              </div>
            </div>
          </div>
        </div>

        <div v-if="activeSection === 'contact'" class="bg-card rounded-2xl border border-border overflow-hidden">
          <div class="flex items-center gap-3 px-6 py-4 border-b border-border bg-secondary/30">
            <Mail :size="16" class="text-primary" />
            <h3 class="text-foreground font-semibold text-sm font-display">Informasi Kontak</h3>
          </div>
          <div class="p-6 space-y-5">
            <div>
              <label class="block text-muted-foreground text-xs font-semibold mb-1.5 uppercase tracking-wider">Email Resmi</label>
              <input v-model="contactForm.email" type="email" placeholder="email@umsurabaya.ac.id" :class="inputClass" />
            </div>
            <div>
              <label class="block text-muted-foreground text-xs font-semibold mb-1.5 uppercase tracking-wider">Nomor Telepon/WhatsApp</label>
              <input v-model="contactForm.phone" type="text" placeholder="+62..." :class="inputClass" />
              <p class="text-muted-foreground/60 text-xs mt-1">Opsional</p>
            </div>
            <div>
              <label class="block text-muted-foreground text-xs font-semibold mb-1.5 uppercase tracking-wider">Alamat</label>
              <input v-model="contactForm.address" type="text" :class="inputClass" />
            </div>
            <div class="grid sm:grid-cols-2 gap-5">
              <div>
                <label class="block text-muted-foreground text-xs font-semibold mb-1.5 uppercase tracking-wider">Kota</label>
                <input v-model="contactForm.city" type="text" :class="inputClass" />
              </div>
              <div>
                <label class="block text-muted-foreground text-xs font-semibold mb-1.5 uppercase tracking-wider">Provinsi</label>
                <input v-model="contactForm.province" type="text" :class="inputClass" />
              </div>
            </div>
          </div>
        </div>

        <div v-if="activeSection === 'meta'" class="bg-card rounded-2xl border border-border overflow-hidden">
          <div class="flex items-center gap-3 px-6 py-4 border-b border-border bg-secondary/30">
            <Globe :size="16" class="text-primary" />
            <h3 class="text-foreground font-semibold text-sm font-display">Metadata Website</h3>
          </div>
          <div class="p-6 space-y-5">
            <div>
              <label class="block text-muted-foreground text-xs font-semibold mb-1.5 uppercase tracking-wider">Site Title</label>
              <input v-model="metaForm.siteTitle" type="text" :class="inputClass" />
              <p class="text-muted-foreground/60 text-xs mt-1">Judul tab browser dan hasil pencarian.</p>
            </div>
            <div>
              <label class="block text-muted-foreground text-xs font-semibold mb-1.5 uppercase tracking-wider">Meta Description</label>
              <textarea v-model="metaForm.metaDesc" rows="3" maxlength="160" :class="textareaClass"></textarea>
              <div class="flex justify-between items-center mt-1">
                <p class="text-muted-foreground/60 text-xs">Deskripsi singkat website untuk mesin pencari (maks. 160 karakter).</p>
                <p class="text-muted-foreground/40 text-[10px]">{{ metaForm.metaDesc.length }}/160</p>
              </div>
            </div>
            <div>
              <label class="block text-muted-foreground text-xs font-semibold mb-1.5 uppercase tracking-wider">Keywords</label>
              <input v-model="metaForm.keywords" type="text" :class="inputClass" />
              <p class="text-muted-foreground/60 text-xs mt-1">Pisahkan dengan koma.</p>
            </div>
            <div>
              <label class="block text-muted-foreground text-xs font-semibold mb-1.5 uppercase tracking-wider">OG Image (Open Graph)</label>
              <div class="border-2 border-dashed border-border rounded-xl p-6 flex flex-col items-center gap-2 text-muted-foreground/60 hover:border-primary/50 transition-colors cursor-pointer bg-input-background">
                <Globe :size="20" />
                <span class="text-sm font-medium">Klik untuk memilih gambar</span>
                <span class="text-xs">Disarankan 1200×630 px</span>
              </div>
              <p class="text-muted-foreground/60 text-xs mt-1">Gambar yang tampil saat dibagikan di media sosial.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>