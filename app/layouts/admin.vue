<script setup lang="ts">
import { ref } from 'vue'
import Sidebar from '~/components/Sidebar.vue'
import Header from '~/components/Header.vue'

const currentPage = ref('dashboard')
const isSidebarCollapsed = ref(false)

const handleNavigate = (page: string) => {
  currentPage.value = page
}

const toggleSidebar = () => {
  isSidebarCollapsed.value = !isSidebarCollapsed.value
}
</script>

<template>
  <div class="h-screen w-full flex bg-background text-foreground transition-colors duration-500 overflow-hidden">
    <Sidebar
        :activePage="currentPage"
        :isCollapsed="isSidebarCollapsed"
        @navigate="handleNavigate"
    />

    <div class="flex-1 flex flex-col min-w-0 h-full">
      <Header
          class="shrink-0"
          :isCollapsed="isSidebarCollapsed"
          @toggleSidebar="toggleSidebar"
      />

      <main class="flex-1 p-6 md:p-8 overflow-y-auto bg-background">
        <slot :currentPage="currentPage" :navigate="handleNavigate" />
      </main>
    </div>
  </div>
</template>