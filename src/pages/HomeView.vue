<template>
  <app-header />
  <main class="relative">
    <main-baner />
    <organization-info />
    <news-galery />
    <trainer-galery />
    <school-filials />
    <app-footer />
  </main>
</template>
<script setup lang="ts">
import { AppHeader } from "@/widgets/app-header";
import { MainBaner } from "@/widgets/main-baner";
import { OrganizationInfo } from "@/widgets/organization-info";
import { TrainerGalery } from "@/widgets/trainer-galery";
import { NewsGalery } from "@/widgets/news-galery";
import { SchoolFilials } from "@/widgets/school-filials";
import { AppFooter } from "@/widgets/app-footer";
</script>
