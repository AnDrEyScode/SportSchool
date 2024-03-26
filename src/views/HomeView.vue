<script setup lang="ts">
import MainBlock from "@/components/MainBlock.vue";
import ServeGaleryBlock from "@/components/ServeGaleryBlock.vue";
import PreferencesBlock from "@/components/PreferencesBlock.vue";
import AboutCompanyBlock from "@/components/AboutCompanyBlock.vue";
import MyFooter from "@/components/MyFooter.vue";
import ContactsBlock from "@/components/ContactsBlock.vue";
import ProjectsBlock from "@/components/ProjectsBlock.vue";
</script>

<template>
  <main>
    <div class="home">
      <main-block />
      <serve-galery-block />
      <preferences-block />
      <projects-block />
      <about-company-block />
      <contacts-block />
      <my-footer />
    </div>
  </main>
</template>
