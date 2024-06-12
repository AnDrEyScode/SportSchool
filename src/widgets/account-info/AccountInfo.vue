<template>
  <div class="p-fluid h-screen">
    <h2>Личный кабинет</h2>
    <div class="flex h-full gap-6">
      <div class="flex flex-1 flex-col justify-center items-center">
        <div class="field flex flex-col items-center h-[300px]">
          <img
            :src="`assets/pupil_avatar.jpg`"
            alt="Фото"
            class="mt-2 rounded-full object-cover flex-1"
          />
          <label>Фото</label>

          <Button label="Загрузить фото" icon="pi pi-upload" class="mt-2" />
          <input
            type="file"
            ref="fileInput"
            class="hidden"
            @change="onFileChange"
          />
        </div>
      </div>
      <div
        class="flex flex-1 flex-col justify-around items-stretch gap-6 my-6 py-6 mx-3"
      >
        <div class="field flex flex-col after:border-2 after:border-blue">
          <label for="lastName">Фамилия</label>
          <InputText id="lastName" v-model="lastName" class="border-none" />
        </div>
        <div class="field flex flex-col after:border-2 after:border-blue">
          <label for="firstName">Имя</label>
          <InputText id="firstName" v-model="firstName" class="border-none" />
        </div>
        <div class="field flex flex-col after:border-2 after:border-blue">
          <label for="middleName">Отчество</label>
          <InputText id="middleName" v-model="middleName" class="border-none" />
        </div>
      </div>
      <div
        class="flex flex-1 flex-col justify-around items-stretch gap-6 my-6 py-6 mx-3"
      >
        <div class="field flex flex-col after:border-2 after:border-blue">
          <label for="phone">Телефон</label>
          <InputText id="phone" v-model="phone" class="border-none" />
        </div>
        <div class="field flex flex-col after:border-2 after:border-blue">
          <label for="email">Email</label>
          <InputText id="email" v-model="email" class="border-none" />
        </div>
        <div class="field flex flex-col after:border-2 after:border-blue">
          <label for="dob">Дата рождения</label>
          <Calendar
            id="dob"
            v-model="dob"
            dateFormat="dd/mm/yy"
            class="border-none"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import InputText from "primevue/inputtext";
import Calendar from "primevue/calendar";
import Button from "primevue/button";

const lastName = ref("");
const firstName = ref("");
const middleName = ref("");
const photoUrl = ref<string | ArrayBuffer | null>(null);
const phone = ref("");
const email = ref("");
const dob = ref<Date | null>(new Date(Date.parse("2000-05-05")));
const fileInput = ref<HTMLInputElement | null>(null);

const onFileChange = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      photoUrl.value = e.target?.result;
    };
    reader.readAsDataURL(file);
  }
};
</script>

<style scoped>
.field {
  margin-bottom: 1rem;
}
.hidden {
  display: none;
}
</style>
