<template>
  <div id="auth-page" class="h-screen w-full flex items-center justify-center">
    <form
      action="auth"
      class="p-10 border-2 rounded-lg border-blue text-blue w-fit flex flex-col items-center gap-2"
    >
      <i class="pi pi-user text-5xl text-blue mb-8"></i>
      <div class="flex justify-between w-full">
        <label>Логин: </label>
        <InputText v-model="inputLogin" class="border-2 rounded border-blue" />
      </div>
      <div class="flex justify-between w-full">
        <label>Пароль: </label>
        <Password
          v-model="inputPass"
          toggleMask
          class="border-2 rounded border-blue ml-2"
        />
      </div>
      <Button
        outlined
        label="Вход"
        class="bg-blue text-white px-5 py-2 mt-5 self-end"
      />
    </form>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const inputPass = ref("");
const inputLogin = ref("");
</script>
