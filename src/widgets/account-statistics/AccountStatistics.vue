<template>
  <div>
    <h1 class="my-md">Моя статистика</h1>
    <div class="grid grid-rows-2 grid-cols-1 gap-3 w-full m-6 overflow-auto">
      <!-- barChart -->
      <div class="flex flex-col justify-center flex-1 gap-3">
        <Chart
          type="bar"
          :data="barChartData"
          :options="barChartOptions"
          class="w-1/3"
        />
        <h2>Посещаемость</h2>
      </div>
      <div class="flex flex-col justify-center flex-1 gap-3">
        <Chart
          type="doughnut"
          :data="doughnutChartData"
          :options="doughnutChartOptions"
          class="w-1/4"
        />
        <h2>Количество занятий по группам</h2>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";

onMounted(() => {
  barChartData.value = setBarChartData();
  barChartOptions.value = setBarChartOptions();
});

// Bar chart

const barChartData = ref();
const barChartOptions = ref();

const setBarChartData = () => {
  const documentStyle = getComputedStyle(document.documentElement);

  return {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: documentStyle.getPropertyValue("--cyan-500"),
        borderColor: documentStyle.getPropertyValue("--cyan-500"),
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: "My Second dataset",
        backgroundColor: documentStyle.getPropertyValue("--gray-500"),
        borderColor: documentStyle.getPropertyValue("--gray-500"),
        data: [28, 48, 40, 19, 86, 27, 90],
      },
    ],
  };
};
const setBarChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue("--text-color");
  const textColorSecondary = documentStyle.getPropertyValue(
    "--text-color-secondary"
  );
  const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

  return {
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
      legend: {
        labels: {
          color: textColor,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary,
          font: {
            weight: 500,
          },
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
          drawBorder: false,
        },
      },
    },
  };
};

// Doughnut chart

onMounted(() => {
  doughnutChartData.value = setDoughnutChartData();
  doughnutChartOptions.value = setDoughnutChartOptions();
});

const doughnutChartData = ref();
const doughnutChartOptions = ref();

const setDoughnutChartData = () => {
  const documentStyle = getComputedStyle(document.body);

  return {
    labels: ["A", "B", "C"],
    datasets: [
      {
        data: [540, 325, 702],
        backgroundColor: [
          documentStyle.getPropertyValue("--cyan-500"),
          documentStyle.getPropertyValue("--orange-500"),
          documentStyle.getPropertyValue("--gray-500"),
        ],
        hoverBackgroundColor: [
          documentStyle.getPropertyValue("--cyan-400"),
          documentStyle.getPropertyValue("--orange-400"),
          documentStyle.getPropertyValue("--gray-400"),
        ],
      },
    ],
  };
};

const setDoughnutChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue("--text-color");

  return {
    plugins: {
      legend: {
        labels: {
          cutout: "60%",
          color: textColor,
        },
      },
    },
  };
};
</script>
