<template>
  <a name="projects"></a>
  <div class="projects">
    <h2>Выполненные проекты</h2>
    <projects-list class="projects-list" :projects="projects"/>
    <my-button class="blue projects-btn" :value="'Показать ещё'"/>
  </div>
</template>

<script>
import ProjectsList from '@/components/ProjectsList.vue'
export default {
  components: { ProjectsList },
  data(){
    return {
      projects: []
    }
  },

  mounted(){
     fetch('data/projects.json')
     .then(response => response.json())
     .then(json => this.projects = json.projects)
     .catch(e => console.log(e))
  }

}
</script>

<style scoped>
  .projects{
    height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 75px;
  }

  .projects > h2{
    margin: 70px auto;
    color: #2C2450;
  }

  .projects-btn{
    margin: 30px 0px 90px 0px;
  }

  @media screen and (max-width: 800px){
    
  }

  @media screen and (max-width: 600px){
    .projects{
      width: 80%;
      margin: 0 auto;
      padding: 0;
      justify-content: center;
    }

    .projects-list{
      width: 100%;
    }

    .projects-btn{
      width: 100%;
      margin-top: 10px;
    }
  }
</style>