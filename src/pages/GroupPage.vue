<template>
  <div class="h-screen flex flex-col">
    <h1>Страница секции</h1>
    <div class="w-full flex flex-col items-stretch flex-1">
      <div
        class="flex flex-col items-center gap-2 basis-1/2 overflow-auto py-4"
      >
        <div class="overflow-hidden">
          <img
            src="@/shared/assets/football.jpeg"
            alt="groupImg"
            class="object-contain h-[400px] w-auto rounded-sm overflow-hidden"
          />
        </div>
        <FileUpload
          mode="basic"
          name="demo[]"
          url="/api/upload"
          accept="image/*"
          :maxFileSize="1000000"
          @upload="onUploadFile"
          :auto="true"
          chooseLabel="Browse"
        />
      </div>
      <div class="flex basis-1/2 px-6 justify-center">
        <div class="flex w-[70%] gap-3">
          <div class="flex basis-2/3 relative">
            <Textarea placeholder="Описание" class="min-h-[33%] w-full p-3" />
          </div>
          <div class="flex flex-col basis-1/3 justify-start gap-4">
            <Dropdown
              v-model="group.sportType"
              :options="SportOptions"
              optionLabel="name"
              placeholder="Вид спорта"
              class="hover:shadow-md"
            />
            <Dropdown
              v-model="group.ageGroup"
              :options="AgeGroupOptions"
              optionLabel="name"
              placeholder="Возрастная группа"
              class="hover:shadow-md"
            />
            <Dropdown
              v-model="group.filial"
              :options="FilialOptions"
              optionLabel="name"
              placeholder="Филиал"
              class="hover:shadow-md"
            />
            <Dropdown
              v-model="group.ageGroup"
              :options="TrainerOptions"
              optionLabel="name"
              placeholder="Тренер"
              class="hover:shadow-md"
            />
            <div class="flex flex-col">
              <label>Максимальное кол-во детей:</label>
              <InputNumber placeholder="2-20" />
            </div>
            <div class="flex flex-col">
              <label> Даты тренировок </label>
              <Calendar
                v-model="group.trainings"
                showIcon
                iconDisplay="input"
                :showOnFocus="false"
                selectionMode="multiple"
                showTime
                hourFormat="24"
                class="border-2 rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import { useToast } from "primevue/usetoast";
import {
  SportOptions,
  AgeGroupOptions,
  FilialOptions,
  TrainerOptions,
} from "@/shared/const/group-options";

const group = ref({
  filial: "",
  ageGroup: "",
  sportType: "",
  trainer: "Иванов Иван Иванович",
  trainings: [],
});

const toast = useToast();

const onUploadFile = (file) => {
  console.log("file: ", file);
  toast.add({
    severity: "info",
    summary: "Success",
    detail: "File Uploaded",
    life: 3000,
  });
};

watch(
  () => group.value.trainings,
  () => {
    console.log(group.value.trainings);
  }
);
</script>
