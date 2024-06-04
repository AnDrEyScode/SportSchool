<template>
  <Toast />
  <ProgressBar v-if="userStore.isLoading" />
  <router-view v-else to="/" />
</template>

<script setup lang="ts">
import { useUserStore } from "@/entities/user/store";

const userStore = useUserStore();
</script>
