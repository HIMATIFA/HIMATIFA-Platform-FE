<script setup lang="ts">
import { Mail, Instagram, MapPin, Youtube, Github, Linkedin } from 'lucide-vue-next'

const contactInfo = [
  { icon: Mail, label: "Email", value: "himatifa@umsurabaya.ac.id" },
  { icon: Instagram, label: "Instagram", value: "@himatifa_ums" },
  { icon: MapPin, label: "Lokasi", value: "Universitas Muhammadiyah Surabaya, Jawa Timur" },
]

const socialLinks = [
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/himatifa_umsura/" },
  { name: "YouTube", icon: Youtube, url: "https://www.youtube.com/@HIMATIFAUMSBY" },
  { name: "GitHub", icon: Github, url: "https://github.com/HIMATIFA" },
  { name: "LinkedIn", icon: Linkedin, url: "#" },
]
</script>

<template>
  <main>
    <PageHero
        label="Kontak"
        title="Hubungi HIMATIFA"
        subtitle="Temukan lokasi dan media sosial resmi kami"
    />

    <div class="bg-background py-16 px-6 transition-colors duration-500">
      <div class="max-w-6xl mx-auto grid lg:grid-cols-12 gap-8">

        <div class="lg:col-span-5 space-y-6">
          <div>
            <SectionLabel>Informasi Kontak</SectionLabel>
            <h3 class="text-xl font-bold text-foreground mb-6 font-display transition-colors duration-500">
              Cara Menghubungi Kami
            </h3>
          </div>

          <div class="space-y-4">
            <div
                v-for="c in contactInfo"
                :key="c.label"
                class="group flex items-start gap-4 bg-card border border-border rounded-xl p-4 transition-all duration-300 hover:border-primary/40 hover:shadow-sm"
            >
              <div class="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shrink-0">
                <component :is="c.icon" :size="18" />
              </div>
              <div>
                <div class="text-accent text-xs mb-0.5 transition-colors duration-500">{{ c.label }}</div>
                <div class="text-foreground text-sm font-medium transition-colors duration-500 group-hover:text-primary">{{ c.value }}</div>
              </div>
            </div>
          </div>

          <div class="bg-card border border-border rounded-xl p-5 mt-6 transition-all duration-500 hover:border-primary/40 hover:shadow-sm">
            <div class="text-accent text-xs font-semibold mb-4 uppercase tracking-wide transition-colors duration-500">
              Jejaring Sosial
            </div>
            <div class="flex flex-wrap gap-2.5">
              <a
                  v-for="social in socialLinks"
                  :key="social.name"
                  :href="social.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  :aria-label="social.name"
                  class="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-background border border-border text-muted-foreground text-sm hover:bg-primary hover:text-primary-foreground hover:border-primary hover:-translate-y-0.5 transition-all duration-300 font-medium shadow-sm"
              >
                <component :is="social.icon" :size="15" /> {{ social.name }}
              </a>

              <a
                  href="#"
                  aria-label="TikTok"
                  class="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-background border border-border text-muted-foreground text-sm hover:bg-primary hover:text-primary-foreground hover:border-primary hover:-translate-y-0.5 transition-all duration-300 font-medium shadow-sm"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                </svg>
                TikTok
              </a>
            </div>
          </div>
        </div>

        <div class="lg:col-span-7 flex flex-col">
          <div class="bg-card border border-border rounded-2xl p-4 flex flex-col h-[400px] lg:h-full min-h-[400px] transition-all duration-500 hover:border-primary/40 hover:shadow-sm">
            <div class="flex items-center justify-between mb-4 px-2">
              <h3 class="text-card-foreground font-bold font-display text-lg transition-colors duration-500">
                Lokasi Kesekretariatan
              </h3>
            </div>

            <div class="relative w-full flex-1 rounded-xl overflow-hidden bg-muted border border-border transition-colors duration-500">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.872251025595!2d112.79361731518384!3d-7.255375994762319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa18fb9279b9%3A0xc31e459dbd3bf490!2sUniversitas%20Muhammadiyah%20Surabaya!5e0!3m2!1sen!2sid!4v1689000000000!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style="border:0;"
                  allowfullscreen="false"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  class="absolute inset-0 transition-all duration-500 dark:brightness-[0.85] dark:contrast-[0.95]"
              ></iframe>
            </div>
          </div>
        </div>

      </div>
    </div>
  </main>
</template>