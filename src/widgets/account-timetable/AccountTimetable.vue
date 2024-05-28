<template>
  <div class="relative w-full">
    <div>Расписание</div>
    <qalendar :events="events" :config="config" />
  </div>
</template>

<script setup lang="ts">
const events = [
  {
    title: "Волейбол",
    with: "Барыкина Дина",
    time: { start: "2024-05-30 12:00", end: "2024-05-30 14:00" },
    color: "yellow",
    id: "753944708f0f",
  },
  {
    title: "Борьба",
    with: "Гасанян Магомед",
    time: { start: "2024-05-29 11:30", end: "2024-05-29 13:00" },
    color: "green",
    id: "5602b6f589fc",
    description: "Lorem",
  },
];
const config = {
  week: {
    startsOn: "monday",
    nDays: 7,
  },
  month: {
    // Hide leading and trailing dates in the month view (defaults to true when not set)
    showTrailingAndLeadingDates: false,
  },
  locale: "ru-RU",
  isSilent: true,
  showCurrentTime: true,
  dayBoundaries: {
    start: 9,
    end: 20,
  },
  defaultMode: "week",
};
</script>
