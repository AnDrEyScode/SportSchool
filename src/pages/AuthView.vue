<template>
  <div id="auth-page" class="h-screen w-full flex items-center justify-center">
    <form
      action="auth"
      class="p-6 border-2 rounded-lg border-blue text-blue w-fit flex flex-col items-center gap-2"
    >
      <i class="pi pi-user text-5xl text-blue mb-4"></i>
      <SelectButton
        v-model="formMode"
        :options="formModeOptions"
        aria-labelledby="basic"
        optionLabel="name"
        class="mb-2"
      />
      <div v-if="isSignInMode" class="flex flex-col items-center gap-2">
        <div class="flex justify-between w-full">
          <label>Логин: </label>
          <InputText v-model="inputSignLogin" />
        </div>
        <div class="flex justify-between w-full">
          <label>Пароль: </label>
          <Password
            v-model="inputSignPass"
            :feedback="false"
            toggleMask
            class="ml-2 border-none"
          />
        </div>
      </div>
      <div v-else class="flex flex-col items-center gap-2">
        <div class="flex justify-between w-full">
          <label>Логин: </label>
          <InputText v-model="inputRegLogin" />
        </div>
        <div class="flex justify-between w-full">
          <label>Пароль: </label>
          <Password
            v-model="inputRegPass"
            :feedback="false"
            toggleMask
            class="ml-2 border-none"
          />
        </div>
        <div class="flex justify-between w-full">
          <label>Пароль ещё раз: </label>
          <Password
            v-model="inputRegPass2"
            :feedback="false"
            toggleMask
            class="ml-2 border-none"
          />
        </div>
      </div>

      <Button
        outlined
        :label="isSignInMode ? 'Вход' : 'Зарегистрироваться'"
        class="mt-5 self-end"
        @click.prevent="onSubmit"
      />
    </form>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";

enum AuthFormMode {
  SIGN_IN = "SignIn",
  REG = "Reg",
}
interface ModeOption {
  name: string;
  value: AuthFormMode;
}

const formModeOptions = [
  { name: "Вход", value: AuthFormMode.SIGN_IN },
  { name: "Регистрация", value: AuthFormMode.REG },
];

const formMode = ref(formModeOptions[0]);
const inputSignPass = ref("");
const inputSignLogin = ref("");

const inputRegPass = ref("");
const inputRegPass2 = ref("");
const inputRegLogin = ref("");

function onSubmit() {
  console.log(formMode.value);
  console.log("isSignInMode: ", isSignInMode.value);
}

const isSignInMode = computed(
  () => formMode.value.value === AuthFormMode.SIGN_IN
);
</script>
