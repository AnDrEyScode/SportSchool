<template>
  <div class="projects-list">
    <project-item v-for="proj in projects" :key="proj.id" :project="proj"/>
  </div>
</template>

<script>
import ProjectItem from '@/components/ProjectItem.vue'
export default {
  components: {
    ProjectItem
  },
  props: {
    projects: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>
  .projects-list{
    width: 100%;
    max-width: 1300px;
    display: flex;
    justify-content: left;
    
    flex-wrap: wrap;
  }
</style>