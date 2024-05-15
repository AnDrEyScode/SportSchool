<template>
  <div class="h-screen w-full pl-2 pt-2">
    <TabView class="h-full">
      <TabPanel v-for="tab in menuTabs" :key="tab.label">
        <template #header>
          <div class="flex items-center gap-2">
            <span :class="tab.icon" />
            <span class="font-bold white-space-nowrap">{{ tab.label }}</span>
          </div>
        </template>
        <div class="m-0">
          <component :is="tab.component"></component>
        </div>
      </TabPanel>
    </TabView>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from "vue";
import type { MenuTab } from "./types";

const props = defineProps<{
  menuTabs: MenuTab[];
}>();
const { menuTabs } = toRefs(props);
</script>
<style>
.p-tabview {
  display: flex;
  align-items: stretch;
}
.p-tabview-nav-content {
  height: 100%;
  border-radius: 25px 0px 0px 25px;
}
.p-tabview-nav {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: fit-content;
  height: 100%;

  background-color: #161f6d;
  padding-left: 40px;
}

.p-tabview-header {
  flex: 1 1 0%;
  background-color: #161f6d;
  display: flex;
  align-items: center;
}
.p-tabview-header > a {
  background-color: #161f6d;
  color: white;
  flex: 1 1 0%;
  border-radius: 25px 0px 0px 25px;
  padding: 30px 40px 30px 20px;
}
.p-tabview-header > a:focus,
.p-tabview-header > a:hover {
  background-color: white;
  color: #161f6d;
}
</style>
