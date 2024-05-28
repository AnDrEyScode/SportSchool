<template>
  <div class="sticky top-0 left-0 bg-blue z-50" id="main-page-header">
    <Menubar :model="menuItems" class="bg-blue w-full">
      <template #start>
        <img src="@/shared/assets/main_logo.png" alt="logo" class="h-4 mx-4" />
      </template>
      <template #item="{ item, props }">
        <a
          class="flex align-items-center text-white hover:text-blue"
          v-bind="props.action"
        >
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </template>
      <template #end>
        <div class="flex align-items-center gap-2">
          <Avatar
            v-if="!authorized"
            icon="pi pi-user"
            class="mr-2 hover:cursor-pointer"
            size="large"
            shape="circle"
            @click="goToProfile"
          />
          <Button v-else>Вход</Button>
        </div>
      </template>
    </Menubar>
  </div>
</template>
<script setup lang="ts">
import type { MenuItem } from "primevue/menuitem";
import { useRouter } from "vue-router";

const menuItems = [
  { label: "Главная", icon: "pi pi-home" },
  { label: "Сведения об образовательной организации", icon: "pi pi-info" },
  { label: "Новости", icon: "pi pi-star" },
  { label: "Отделения", icon: "pi pi-envelope" },
  { label: "Тренеры", icon: "pi pi-envelope" },
  { label: "Виды спорта", icon: "pi pi-envelope" },
] as MenuItem[];

const authorized = false;

const router = useRouter();

function goToProfile() {
  router.push("/account");
}
</script>
