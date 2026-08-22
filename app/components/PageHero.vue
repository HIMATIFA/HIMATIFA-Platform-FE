<script setup lang="ts">
defineProps<{
  label: string
  title: string
  subtitle: string
}>()
</script>

<template>
  <section class="relative bg-secondary pt-32 pb-20 px-6 border-b border-border overflow-hidden">
    <div
        class="absolute inset-0 opacity-20"
        style="background-image: radial-gradient(var(--primary) 1px, transparent 1px); background-size: 28px 28px;"
    />

    <div class="relative z-10 max-w-4xl mx-auto text-center">
      <div class="inline-block mb-4">
        <span class="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-muted-foreground text-xs font-semibold tracking-widest uppercase">
          {{ label }}
        </span>
      </div>

      <h1 class="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5">
        {{ title }}
      </h1>

      <p class="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
        {{ subtitle }}
      </p>
    </div>
  </section>
</template>