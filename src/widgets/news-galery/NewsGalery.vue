<template>
  <section class="relative w-full h-[70vh] flex flex-col justify-center">
    <h1>Новости</h1>
    <div
      class="relative max-w-7/10 max-h-1/2 flex flex-col justify-center items-center flex-wrap bg-light-blue"
    >
      <!-- <div>
        <img src="@\shared\assets\about-school-baner.jpg" alt="" />
      </div>
      <div>
        <img src="@\shared\assets\about-school-baner.jpg" alt="" />
      </div>
      <div>
        <img src="@\shared\assets\about-school-baner.jpg" alt="" />
      </div>
      <div>
        <img src="@\shared\assets\about-school-baner.jpg" alt="" />
      </div> -->

      <!-- <div
        v-for="(news, index) in images"
        :key="index"
        class="h-1/2 first:h-full bg-white"
      >
        <img src="@\shared\assets\about-school-baner.jpg" alt="" />
      </div>
      <div>
        <div>Смотреть все новости</div>
      </div> -->
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
