<template>
  <div class="bg-blue relative h-16" id="main-page-header">
    <Menubar :model="menuItems" class="bg-blue fixed w-full top-0 left-0">
      <template #start>
        <img src="@/shared/assets/main_logo.png" alt="logo" class="h-8 m-4" />
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
            class="mr-2"
            size="large"
            shape="circle"
          />
          <Button v-else>Вход</Button>
        </div>
      </template>
    </Menubar>
  </div>
</template>
<script setup lang="ts">
import type { MenuItem } from "primevue/menuitem";

const menuItems = [
  { label: "Главная", icon: "pi pi-home" },
  { label: "Сведения об образовательной организации", icon: "pi pi-info" },
  { label: "Новости", icon: "pi pi-star" },
  { label: "Отделения", icon: "pi pi-envelope" },
  { label: "Тренеры", icon: "pi pi-envelope" },
  { label: "Виды спорта", icon: "pi pi-envelope" },
] as MenuItem[];

const authorized = false;
</script>
