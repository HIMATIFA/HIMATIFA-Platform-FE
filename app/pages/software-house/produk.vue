<script setup lang="ts">
import { ref, computed } from 'vue'
import { Package, ArrowRight, ShoppingBag, ShieldCheck, CheckCircle2, CreditCard } from 'lucide-vue-next'

definePageMeta({
  layout: 'ekraf'
})

interface Variant {
  name: string
  price: number
}

interface Product {
  id: string
  cat: 'Akun Premium' | 'Merchandise'
  name: string
  desc: string
  tags: string[]
  brandName?: string
  brandBg?: string
  brandTextColor?: string
  variants: Variant[]
}

const PRODUCTS: Product[] = [
  {
    id: 'chatgpt',
    cat: 'Akun Premium',
    name: 'ChatGPT Plus / Go',
    desc: 'Akses fitur AI cerdas untuk bantu tugas koding, riset, dan penyusunan dokumen secara instan.',
    tags: ['AI', 'Bergaransi', 'Bestseller'],
    brandName: 'ChatGPT',
    brandBg: 'bg-[#10A37F]',
    brandTextColor: 'text-white',
    variants: [
      { name: '1 Bulan Plan Plus (Private - Garansi 24 Jam)', price: 35500 },
      { name: '3 Bulan Plan Go (Private - Garansi 24 Jam)', price: 50000 },
      { name: '1 Bulan Plan Go (Private - Garansi Full)', price: 52500 },
      { name: '3 Bulan Plan Go (Private - Garansi Full)', price: 60000 }
    ]
  },
  {
    id: 'netflix',
    cat: 'Akun Premium',
    name: 'Netflix Premium 4K',
    desc: 'Streaming ribuan film & serial TV tanpa iklan dengan kualitas terbaik 4K Ultra HD.',
    tags: ['Hiburan', 'Bergaransi', 'Hot'],
    brandName: 'NETFLIX',
    brandBg: 'bg-black',
    brandTextColor: 'text-[#E50914]',
    variants: [
      { name: '1 Profile 1 User (1 Hari)', price: 8000 },
      { name: '1 Profile 1 User (3 Hari)', price: 10000 },
      { name: '1 Profile 1 User (7 Hari)', price: 15500 },
      { name: '1 Profile 1 User (1 Bulan)', price: 30000 },
      { name: '1 Profile 2 User (1 Bulan)', price: 20000 },
      { name: 'Semi Private (1 Bulan)', price: 35000 }
    ]
  },
  {
    id: 'canva',
    cat: 'Akun Premium',
    name: 'Canva Pro',
    desc: 'Buka semua elemen grafis premium, hapus background otomatis, dan ekspor desain kualitas tinggi.',
    tags: ['Desain', 'Bergaransi'],
    brandName: 'Canva',
    brandBg: 'bg-gradient-to-tr from-[#00C4CC] to-[#7D2AE8]',
    brandTextColor: 'text-white',
    variants: [
      { name: 'Private / Invite (1 Bulan)', price: 10000 },
      { name: 'Invite Member (6 Bulan)', price: 15000 },
      { name: 'Private (6 Bulan)', price: 20000 },
      { name: 'Private / Invite (9 Bulan)', price: 25000 },
      { name: 'Private / Invite (1 Tahun)', price: 30000 }
    ]
  },
  {
    id: 'capcut',
    cat: 'Akun Premium',
    name: 'CapCut Pro',
    desc: 'Fitur editing video profesional tanpa watermark, efek premium, dan ekstraksi audio otomatis.',
    tags: ['Video', 'Bergaransi'],
    brandName: 'CapCut',
    brandBg: 'bg-zinc-900',
    brandTextColor: 'text-white',
    variants: [
      { name: 'Private (7 Hari - Garansi 8 Hari)', price: 15500 },
      { name: 'Private (1 Bulan - Garansi 25 Hari)', price: 35500 }
    ]
  },
  {
    id: 'gemini',
    cat: 'Akun Premium',
    name: 'Gemini Plus',
    desc: 'Model AI multimodal canggih dari Google untuk analisis data kompleks, coding, dan integrasi Google Workspace.',
    tags: ['AI', 'Bergaransi'],
    brandName: 'Gemini',
    brandBg: 'bg-gradient-to-r from-[#1A73E8] via-[#8AB4F8] to-[#EA4335]',
    brandTextColor: 'text-white',
    variants: [
      { name: 'Gemini Plus (6 Bulan - Garansi 1 Bulan)', price: 15000 }
    ]
  },
  {
    id: 'vidio',
    cat: 'Akun Premium',
    name: 'Vidio Platinum',
    desc: 'Nonton tayangan olahraga live streaming, drama Korea, film Hollywood, dan sinetron eksklusif.',
    tags: ['Streaming', 'Bergaransi'],
    brandName: 'Vidio',
    brandBg: 'bg-[#E20613]',
    brandTextColor: 'text-white',
    variants: [
      { name: 'Private Platinum (1 Bulan Mobile)', price: 30500 },
      { name: 'Private Platinum (1 Bulan All Device)', price: 40500 },
      { name: 'Private Platinum TV Only (1 Tahun - Garansi 1 Bulan)', price: 15000 }
    ]
  },
  {
    id: 'lightroom',
    cat: 'Akun Premium',
    name: 'Adobe Lightroom',
    desc: 'Akses semua preset premium dan tools pengeditan foto profesional di smartphone & PC.',
    tags: ['Fotografi', 'Sharing'],
    brandName: 'Lightroom',
    brandBg: 'bg-[#31A8FF]',
    brandTextColor: 'text-[#001E36]',
    variants: [
      { name: 'Sharing (1 Bulan)', price: 10000 },
      { name: 'Sharing (1 Tahun)', price: 15500 }
    ]
  },
  {
    id: 'wattpad',
    cat: 'Akun Premium',
    name: 'Wattpad Premium+',
    desc: 'Baca cerita favorit tanpa gangguan iklan, akses koin gratis harian, dan bonus cerita eksklusif.',
    tags: ['Buku', 'Bergaransi'],
    brandName: 'Wattpad',
    brandBg: 'bg-[#FF6600]',
    brandTextColor: 'text-white',
    variants: [
      { name: 'Sharing (1 Bulan)', price: 10500 },
      { name: 'Sharing (1 Tahun)', price: 15500 },
      { name: 'Private (1 Bulan)', price: 15500 }
    ]
  },
  {
    id: 'tumbler',
    cat: 'Merchandise',
    name: 'Tumbler Eksklusif HIMATIFA',
    desc: 'Tumbler stainless steel tahan panas/dingin berkapasitas 500ml dengan gravir logo Himatifa.',
    tags: ['Fisik', 'Bestseller'],
    variants: [
      { name: 'Hitam Matte (500ml)', price: 50000 },
      { name: 'Silver Metallic (500ml)', price: 50000 }
    ]
  },
  {
    id: 'sticker',
    cat: 'Merchandise',
    name: 'Sticker Pack Developer',
    desc: 'Kumpulan stiker vinyl anti air bertema programming, Linux, dan maskot Himatifa.',
    tags: ['Fisik', 'Aksesoris'],
    variants: [
      { name: 'Pack Isi 10 Stiker', price: 10000 }
    ]
  },
  {
    id: 'ganci',
    cat: 'Merchandise',
    name: 'Gantungan Kunci Akrilik IT',
    desc: 'Gantungan kunci akrilik tebal 3mm dua sisi dengan desain elemen kode minimalis.',
    tags: ['Fisik', 'Merch'],
    variants: [
      { name: 'Model Terminal Code', price: 12000 },
      { name: 'Model Logo Himatifa', price: 12000 }
    ]
  }
]

const OTHER_PRODUCTS = [
  'Alight Motion', 'Apple Music', 'Apple TV', 'Grammarly', 'Spotify',
  'Grok AI', 'Viu', 'YouTube Premium', 'Zoom Pro', 'CamScanner',
  'DramaBox', 'DrakorID', 'Oranily'
]

const CATS = ['Semua', 'Akun Premium', 'Merchandise']
const activeCat = ref('Semua')

const selectedVariantMap = ref<Record<string, number>>({})

PRODUCTS.forEach(p => {
  selectedVariantMap.value[p.id] = 0
})

const filteredProducts = computed(() => {
  if (activeCat.value === 'Semua') return PRODUCTS
  return PRODUCTS.filter(p => p.cat === activeCat.value)
})

const formatRupiah = (val: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(val)
}

const getWaUrl = (product: Product) => {
  const variantIndex = selectedVariantMap.value[product.id] || 0
  const variant = product.variants[variantIndex]

  if (!variant) return '#'

  const text = `Halo Admin HIMATIFA, saya ingin memesan produk:\n\n` +
      `📌 *Produk*: ${product.name}\n` +
      `⏱️ *Paket*: ${variant.name}\n` +
      `💰 *Harga*: ${formatRupiah(variant.price)}\n\n` +
      `Apakah stok masih tersedia?`
  return `https://wa.me/6287762728979?text=${encodeURIComponent(text)}`
}
</script>

<template>
  <div class="font-sans bg-background min-h-screen transition-colors duration-300">

    <section class="pt-24 pb-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span class="text-primary text-xs font-bold tracking-widest uppercase flex items-center gap-2">
          <ShoppingBag class="w-4 h-4" /> Katalog Resmi HIMATIFA
        </span>
        <h1 class="mt-3 text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
          Merch & Premium Services
        </h1>
        <p class="mt-4 text-muted-foreground max-w-2xl text-sm sm:text-base leading-relaxed">
          Dapatkan layanan akun premium digital bergaransi untuk menunjang tugas & hiburan, serta koleksi merchandise resmi buatan HIMATIFA UMSurabaya.
        </p>
      </div>
    </section>

    <section class="bg-background/90 backdrop-blur-md border-y border-border py-4 sticky top-16 z-30 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 flex-wrap">
        <div class="flex gap-2 flex-wrap">
          <button
              v-for="c in CATS"
              :key="c"
              @click="activeCat = c"
              class="px-4 py-1.5 rounded-full text-xs font-bold transition-all border"
              :class="activeCat === c
                ? 'bg-primary border-primary text-primary-foreground shadow-sm'
                : 'bg-secondary border-border text-muted-foreground hover:text-foreground hover:bg-secondary/80 hover:border-primary/30'"
          >
            {{ c }}
          </button>
        </div>

        <div class="flex items-center gap-1.5 text-xs text-muted-foreground">
          <ShieldCheck class="w-4 h-4 text-primary" />
          <span>Proses Cepat & Bergaransi</span>
        </div>
      </div>
    </section>

    <section class="py-12 pb-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
              v-for="p in filteredProducts"
              :key="p.id"
              class="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            <div class="aspect-[16/9] bg-secondary overflow-hidden relative flex items-center justify-center border-b border-border">
              <template v-if="p.cat === 'Akun Premium'">
                <div :class="['w-full h-full flex flex-col items-center justify-center transition-transform duration-500 group-hover:scale-105', p.brandBg]">
                  <span
                      class="text-3xl font-extrabold tracking-wider drop-shadow-md font-display"
                      :class="p.brandTextColor || 'text-white'"
                  >
                    {{ p.brandName }}
                  </span>
                  <span class="text-[11px] text-white/80 tracking-widest uppercase mt-1 font-semibold">Premium Service</span>
                </div>
              </template>

              <template v-else>
                <PlaceholderImage class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
              </template>

              <span class="absolute top-3 left-3 text-[10px] font-bold bg-background/90 backdrop-blur-md border border-border text-foreground px-2.5 py-1 rounded-full shadow-sm">
                {{ p.cat }}
              </span>
            </div>

            <div class="p-5 flex flex-col flex-1">

              <div class="flex gap-1.5 flex-wrap mb-2">
                <span
                    v-for="t in p.tags"
                    :key="t"
                    class="text-[10px] text-primary bg-primary/10 font-bold px-2 py-0.5 rounded-md"
                >
                  {{ t }}
                </span>
              </div>

              <h3 class="font-bold text-foreground text-lg mb-1 group-hover:text-primary transition-colors font-display">
                {{ p.name }}
              </h3>
              <p class="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                {{ p.desc }}
              </p>

              <div class="mt-auto pt-4 border-t border-border/60">
                <label class="text-[11px] font-semibold text-muted-foreground mb-1.5 block">
                  Pilih Paket / Durasi:
                </label>

                <select
                    v-model="selectedVariantMap[p.id]"
                    class="w-full bg-secondary border border-border text-foreground text-xs rounded-lg p-2.5 font-medium focus:ring-1 focus:ring-primary focus:border-primary outline-none cursor-pointer mb-4"
                >
                  <option
                      v-for="(v, idx) in p.variants"
                      :key="idx"
                      :value="idx"
                  >
                    {{ v.name }} - {{ formatRupiah(v.price) }}
                  </option>
                </select>

                <div class="flex items-center justify-between gap-3 pt-2">
                  <div>
                    <span class="text-[10px] text-muted-foreground block">Harga</span>
                    <span class="text-lg font-extrabold text-primary font-display">
                      {{ formatRupiah(p.variants[selectedVariantMap[p.id] || 0]?.price || 0) }}
                    </span>
                  </div>

                  <a
                      :href="getWaUrl(p)"
                      target="_blank"
                      class="flex-1 inline-flex items-center justify-center gap-1.5 bg-primary text-primary-foreground font-bold text-xs py-2.5 px-4 rounded-xl hover:brightness-110 shadow-sm transition-all"
                  >
                    Pesan via WA
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="mt-16 p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm">
          <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div class="space-y-2">
              <span class="text-xs font-bold text-primary uppercase tracking-wider">Cek Ketersediaan Produk Lain</span>
              <h3 class="text-xl font-bold text-foreground">Butuh Layanan Akun Premium Lainnya?</h3>
              <p class="text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed">
                Kami juga menyediakan berbagai akun premium lainnya seperti:
              </p>
              <div class="flex flex-wrap gap-1.5 pt-2">
                <span
                    v-for="item in OTHER_PRODUCTS"
                    :key="item"
                    class="text-xs bg-secondary border border-border px-2.5 py-1 rounded-lg text-foreground font-medium"
                >
                  {{ item }}
                </span>
                <span class="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-lg font-bold">+ Banyak Lagi!</span>
              </div>
            </div>

            <a
                href="https://wa.me/6287762728979?text=Halo%20Admin%20HIMATIFA,%20saya%20ingin%20menanyakan%20ketersediaan%20produk%20lainnya"
                target="_blank"
                class="shrink-0 w-full md:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-xs px-6 py-3 rounded-xl hover:brightness-110 transition-all shadow-sm"
            >
              Tanyakan ke Admin
              <ArrowRight class="w-4 h-4" />
            </a>
          </div>
        </div>

        <div class="mt-8 grid md:grid-cols-3 gap-6">
          <div class="md:col-span-1 bg-secondary/50 border border-border rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-2 text-primary font-bold text-sm mb-2">
                <CreditCard class="w-4 h-4" /> Metode Pembayaran
              </div>
              <p class="text-xs text-muted-foreground mb-4 leading-relaxed">
                Pembayaran dapat dilakukan dengan mudah dan aman melalui e-wallet atau bank transfer.
              </p>
            </div>

            <div class="space-y-2 pt-2 border-t border-border/60">
              <div class="flex items-center justify-between text-xs">
                <span class="font-bold text-foreground">SeaBank</span>
                <span class="font-mono text-muted-foreground">087762728979</span>
              </div>
              <div class="flex items-center justify-between text-xs">
                <span class="font-bold text-foreground">DANA</span>
                <span class="font-mono text-muted-foreground">087762728979</span>
              </div>
            </div>
          </div>

          <div class="md:col-span-2 p-6 sm:p-8 rounded-2xl bg-primary/5 border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div class="space-y-2">
              <div class="flex items-center gap-2 text-primary font-bold text-sm">
                <Package class="w-5 h-5" /> Punya Usulan Merchandise atau Produk?
              </div>
              <p class="text-xs sm:text-sm text-muted-foreground max-w-md leading-relaxed">
                Sampaikan request produk digital atau ide merchandise baru yang kamu inginkan kepada tim Ekonomi Kreatif HIMATIFA.
              </p>
            </div>

            <a
                href="https://wa.me/6287762728979?text=Halo%20Admin,%20saya%20punya%20usulan%20produk/merchandise"
                target="_blank"
                class="shrink-0 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-background border border-border text-foreground font-semibold text-xs px-5 py-3 rounded-xl hover:border-primary hover:text-primary transition-all"
            >
              Kirim Usulan
            </a>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>
