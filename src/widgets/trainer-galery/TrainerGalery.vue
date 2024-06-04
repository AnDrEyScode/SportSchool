<template>
  <section class="overflow-hidden">
    <h1 class="my-4">Тренеры</h1>
    <Carousel
      :value="products"
      :numVisible="3"
      :numScroll="1"
      :responsiveOptions="responsiveOptions"
      circular
    >
      <template #item="slotProps">
        <Card class="overflow-auto max-w-[400px]">
          <template #header>
            <img alt="user header" src="@/shared/assets/trainer.jpg" />
          </template>
          <template #title>Иванов Иван Иванович</template>
          <template #subtitle>Стаж: более 10 лет</template>
          <template #content>
            <p class="m-0">
              Опытный тренер по волейболу. Воспитал чемпионов и призёров
              чемпионатов Москвы и России. В данный момент является главным
              тренером сборной Североморска. В личных спортивных достижениях -
              является мастером спорта, неоднократно становился чемпионом
              России.
            </p>
          </template>
          <template #footer>
            <div class="flex gap-3 mt-1">
              <Button
                label="Записаться"
                severity="secondary"
                outlined
                class="w-full"
              />
              <Button label="Подробнее" class="w-full" />
            </div>
          </template>
        </Card>
      </template>
    </Carousel>
  </section>
</template>
<script setup lang="ts">
import { ref } from "vue";

const products = ref([
  {
    id: "1000",
    code: "f230fh0g3",
    name: "Bamboo Watch",
    description: "Product Description",
    image: "bamboo-watch.jpg",
    price: 65,
    category: "Accessories",
    quantity: 24,
    inventoryStatus: "INSTOCK",
    rating: 5,
  },
  {
    id: "1000",
    code: "f230fh0g3",
    name: "Bamboo Watch",
    description: "Product Description",
    image: "bamboo-watch.jpg",
    price: 65,
    category: "Accessories",
    quantity: 24,
    inventoryStatus: "INSTOCK",
    rating: 5,
  },
  {
    id: "1000",
    code: "f230fh0g3",
    name: "Bamboo Watch",
    description: "Product Description",
    image: "bamboo-watch.jpg",
    price: 65,
    category: "Accessories",
    quantity: 24,
    inventoryStatus: "INSTOCK",
    rating: 5,
  },
  {
    id: "1000",
    code: "f230fh0g3",
    name: "Bamboo Watch",
    description: "Product Description",
    image: "bamboo-watch.jpg",
    price: 65,
    category: "Accessories",
    quantity: 24,
    inventoryStatus: "INSTOCK",
    rating: 5,
  },
]);
const responsiveOptions = ref([
  {
    breakpoint: "1400px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "1199px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "767px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
    numScroll: 1,
  },
]);

const getSeverity = (status: string) => {
  switch (status) {
    case "INSTOCK":
      return "success";

    case "LOWSTOCK":
      return "warning";

    case "OUTOFSTOCK":
      return "danger";

    default:
      return undefined;
  }
};
</script>
