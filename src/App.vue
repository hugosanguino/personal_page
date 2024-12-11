<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import LanguageSwitch from './components/LanguageSwitch.vue';

const { t } = useI18n();
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
          <div class="flex space-x-8">
            <a href="#" class="text-gray-900 hover:text-blue-600">{{ t('nav.home') }}</a>
            <a href="#about" class="text-gray-900 hover:text-blue-600">{{ t('nav.about') }}</a>
            <a href="#experience" class="text-gray-900 hover:text-blue-600">{{ t('nav.experience') }}</a>
            <a href="#contact" class="text-gray-900 hover:text-blue-600">{{ t('nav.contact') }}</a>
          </div>
          <LanguageSwitch />
        </div>
      </div>
    </nav>

    <main>
      <!-- Hero Section -->
      <section class="bg-blue-600 text-white py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl font-bold mb-4">{{ t('hero.title') }}</h1>
          <h2 class="text-2xl mb-6">{{ t('hero.subtitle') }}</h2>
          <p class="text-xl">{{ t('hero.description') }}</p>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold mb-8 text-center">{{ t('about.title') }}</h2>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto text-center">
            {{ t('about.content') }}
          </p>
        </div>
      </section>

      <!-- Skills Section -->
      <section class="bg-gray-100 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold mb-12 text-center">{{ t('skills.title') }}</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 class="text-xl font-semibold mb-4">{{ t('skills.erp') }}</h3>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 class="text-xl font-semibold mb-4">{{ t('skills.development') }}</h3>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 class="text-xl font-semibold mb-4">{{ t('skills.integration') }}</h3>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 class="text-xl font-semibold mb-4">{{ t('skills.business') }}</h3>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl font-bold mb-8">{{ t('contact.title') }}</h2>
          <p class="text-xl mb-8">{{ t('contact.message') }}</p>
          <a 
            href="mailto:contact@hugosanguino.com" 
            class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Email Me
          </a>
        </div>
      </section>
    </main>

    <footer class="bg-gray-800 text-white py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; {{ new Date().getFullYear() }} Hugo Sanguino. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>