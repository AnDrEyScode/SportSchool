<template>
  <div class="bg-blue" id="main-page-header">
    <Menubar :model="menuItems" class="bg-blue">
      <!-- <template #start> </template> -->
      <template #item="{ item, props }">
        <a class="flex align-items-center text-white" v-bind="props.action">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </template>
      <template #end>
        <div class="flex align-items-center gap-2">
          <InputText
            placeholder="Search"
            type="text"
            class="w-8rem sm:w-auto"
          />
          <Avatar image="/images/avatar/amyelsner.png" shape="circle" />
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
</script>
