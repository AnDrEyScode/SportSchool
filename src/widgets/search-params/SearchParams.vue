<template>
  <div class="w-full flex p-6 *:mr-2">
    <InputText class="flex-1 border-0" placeholder="Search..." />
    <Divider layout="vertical" type="solid" class="border border-blue" />
    <div class="flex flex-[3] *:border-0">
      <div class="flex flex-1 *:flex-1">
        <MultiSelect
          v-model="selectedSports"
          display="chip"
          :options="SportOptions"
          optionLabel="name"
          placeholder="Вид спорта"
          class="hover:shadow-md"
        />
        <Dropdown
          v-model="selectedAgeGroup"
          :options="AgeGroupOptions"
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
import {
  SportOptions,
  AgeGroupOptions,
  FilialOptions,
} from "@/shared/const/group-options";

const selectedSports = ref();
const selectedAgeGroup = ref();
const selectedFilial = ref();
</script>
