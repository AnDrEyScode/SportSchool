<template>
  <div class="relative">
    <side-tab-menu :menu-tabs />
    <Button
      label="Выйти"
      icon="pi pi-sign-out"
      class="absolute top-3 right-3"
      @click="userStore.signOutAccount"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { SideTabMenu } from "@/widgets/side-tab-menu";
import { AccountInfo } from "@/widgets/account-info";
import { AccountStatistics } from "@/widgets/account-statistics";
import { AccountTimetable } from "@/widgets/account-timetable";
import { AccountTrainers } from "@/widgets/account-trainers";
import { AccountGroups } from "@/widgets/account-groups";
import type { MenuTab } from "@/widgets/side-tab-menu/types";
import { useUserStore } from "@/entities/user/store";

const menuTabs = [
  {
    label: "Личный кабинет",
    icon: "pi pi-info-circle",
    component: AccountInfo,
  },
  {
    label: "Статистика и достижения",
    icon: "pi pi-chart-bar",
    component: AccountStatistics,
  },
  {
    label: "Расписание",
    icon: "pi pi-calendar",
    component: AccountTimetable,
  },
  {
    label: "Тренеры",
    icon: "pi pi-users",
    component: AccountTrainers,
  },
  {
    label: "Мои группы",
    icon: "pi pi-list",
    component: AccountGroups,
  },
] as MenuTab[];

const userStore = useUserStore();
</script>
