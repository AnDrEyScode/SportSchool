<template>
  <my-header></my-header>
  <router-view to="/" />
</template>

<script setup lang="ts">
import MyHeader from "@/components/MyHeader.vue";
</script>

<style lang="less">
@font-face {
  font-family: "Montserrat";
  src: url("@/fonts/Montserrat/Montserrat-VariableFont_wght.ttf");
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat";
}

h1 {
  font-size: 64px;
  line-height: 78px;
}

h2 {
  font-size: 36px;
  line-height: 44px;
}

a {
  color: inherit;
  text-decoration: inherit;
}

a.text:active, /* активная/посещенная ссылка */
a.text:hover,  /* при наведении */
a.text {
  text-decoration: inherit;
  color: inherit;
}

@media screen and (max-width: 600px) {
  h2 {
    font-weight: 600;
    font-size: 30px;
    line-height: 37px;
  }
}

@media screen and (max-width: 480px) {
  h2 {
    font-size: 20px;
    line-height: 24px;
  }
}
</style>
