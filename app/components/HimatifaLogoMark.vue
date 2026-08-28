<script setup lang="ts">
import { computed } from 'vue'

const {
  size = 'md',
  sizeClass = '',
  variant = 'default',
  showText = false,
  src = '/img/logo.png'
} = defineProps<{
  size?: 'sm' | 'md' | 'lg'
  sizeClass?: string
  variant?: 'default' | 'white'
  showText?: boolean
  src?: string
}>()

const baseSizeConfig = {
  sm: { img: 'w-8 h-8', text: 'text-sm' },
  md: { img: 'w-10 h-10', text: 'text-base' },
  lg: { img: 'w-14 h-14', text: 'text-lg' }
}

const finalImageClass = computed(() => {
  return sizeClass ? sizeClass : baseSizeConfig[size].img
})
</script>

<template>
  <div class="inline-flex items-center gap-3">
    <img
        :src="src"
        alt="Logo HIMATIFA"
        class="object-contain flex-shrink-0 transition-all duration-300"
        :class="[
          finalImageClass,
          variant === 'white' ? 'mix-blend-screen brightness-125' : 'mix-blend-normal'
        ]"
    />

    <div v-if="showText" class="leading-tight text-left">
      <div
          class="font-display font-extrabold uppercase tracking-[0.05em]"
          :class="[
            baseSizeConfig[size].text,
            variant === 'white' ? 'text-white' : 'text-foreground'
          ]"
      >
        HIMATIFA
      </div>
      <div
          class="font-sans font-medium text-[0.65rem] tracking-[0.15em] uppercase mt-0.5 transition-colors"
          :class="variant === 'white' ? 'text-white/70' : 'text-muted-foreground'"
      >
        Teknik Informatika
      </div>
    </div>
  </div>
</template>
