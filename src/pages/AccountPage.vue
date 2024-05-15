<template>
  <div>
    <side-tab-menu :menu-tabs />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { SideTabMenu } from "@/widgets/side-tab-menu";
import { AccountStatistics } from "@/widgets/account-statistics";
import { AccountTimetable } from "@/widgets/account-timetable";
import type { MenuTab } from "@/widgets/side-tab-menu/types";

const menuTabs = [
  {
    label: "Личный кабинет",
    icon: "pi pi-home",
    component: AccountStatistics,
  },
  {
    label: "Статистика и достижения",
    icon: "pi pi-chart-line",
    component: AccountStatistics,
  },
  {
    label: "Расписание",
    icon: "pi pi-list",
    component: AccountTimetable,
  },
  {
    label: "Тренеры",
    icon: "pi pi-inbox",
    component: AccountStatistics,
  },
  {
    label: "Мои группы",
    icon: "pi pi-inbox",
    component: AccountStatistics,
  },
] as MenuTab[];

const activeTab = ref(0);
watch(activeTab, () => {
  console.log(activeTab.value);
});
</script>
