<template>
  <section class="relative w-full h-[70vh] flex flex-col justify-center">
    <h1>Новости</h1>
    <div
      class="relative max-w-7/10 max-h-1/2 container grid grid-cols-4 grid-rows-2 gap-3"
    >
      <div
        v-for="(news, index) in images"
        :key="index"
        class="first:col-span-2 first:row-span-2"
      >
        <img src="@\shared\assets\about-school-baner.jpg" alt="" />
      </div>
      <div class="flex justify-center items-center">
        <Button rounded class="h-3/4 rounded-full text-xs">
          Смотреть все новости
        </Button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const images = new Array(4).fill(
  {
    img: `@\\shared\\assets\\about-school-baner.jpg`,
  },
  0,
  4
);
</script>
