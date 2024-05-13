<template>
  <TabMenu :model="menuItems" v-model:activeIndex="activeTab" />
  <!-- <div>Личный кабинет</div> -->
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const tabs = [
  "Личный кабинет",
  "Статистика и достижения",
  "Расписание",
  "Тренеры",
  "Мои группы",
];

const menuItems = ref([
  {
    label: "Личный кабинет",
    icon: "pi pi-home",
  },
  {
    label: "Статистика и достижения",
    icon: "pi pi-chart-line",
  },
  {
    label: "Расписание",
    icon: "pi pi-list",
  },
  {
    label: "Тренеры",
    icon: "pi pi-inbox",
  },
  {
    label: "Мои группы",
    icon: "pi pi-inbox",
  },
]);

const activeTab = ref(0);
watch(activeTab, () => {
  console.log(activeTab.value);
});
</script>

<style>
/* отрефакторит, удалить стили */
.p-tabmenu-nav {
  display: flex;
  flex-direction: column;
}
</style>
