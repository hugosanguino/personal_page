<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'es' : 'en';
};
</script>

<template>
  <button 
    @click="toggleLanguage"
    class="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
  >
    {{ locale === 'en' ? 'ES' : 'EN' }}
  </button>
</template>