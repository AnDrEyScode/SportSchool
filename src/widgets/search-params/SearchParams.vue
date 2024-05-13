<template>
  <div class="w-full flex p-6 *:mr-2">
    <InputText class="flex-1 border-0" placeholder="Search..." />
    <Divider layout="vertical" type="solid" class="border border-blue" />
    <div class="flex flex-[3] *:border-0">
      <div class="flex flex-1 *:flex-1">
        <MultiSelect
          v-model="selectedSports"
          display="chip"
          :options="sportOptions"
          optionLabel="name"
          placeholder="Вид спорта"
          class="hover:shadow-md"
        />
        <Dropdown
          v-model="selectedAgeGroup"
          :options="ageGroupOptions"
          optionLabel="name"
          placeholder="Возрастная группа"
          class="hover:shadow-md :"
        />
        <MultiSelect
          v-model="selectedFilial"
          display="chip"
          :options="FilialOptions"
          optionLabel="name"
          placeholder="Филиал"
          class="hover:shadow-md"
        />
      </div>
      <Button icon="pi pi-search" class="ml-2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const selectedSports = ref();
const sportOptions = ref([
  { name: "Волейбол", code: "NY" },
  { name: "Баскетбол", code: "RM" },
  { name: "Легкая отлетика", code: "LDN" },
  { name: "Футбол", code: "IST" },
  { name: "Гимнастика", code: "PRS" },
]);

const selectedAgeGroup = ref();
const ageGroupOptions = ref([
  { name: "7-8 лет", code: "NY" },
  { name: "9-10 лет", code: "RM" },
  { name: "11-12 лет", code: "LDN" },
  { name: "13-14 лет", code: "IST" },
  { name: "15-16 лет", code: "PRS" },
]);

const selectedFilial = ref();
const FilialOptions = ref([
  { name: "Филиал 1", code: "NY" },
  { name: "Филиал 2", code: "NY" },
  { name: "Филиал 3", code: "NY" },
  { name: "Филиал 4", code: "NY" },
]);
</script>
