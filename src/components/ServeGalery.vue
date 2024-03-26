<template>
  <div class="galery">
    <transition-group :name="(scrollDirection ? 'serve-list' : 'serve-list-back')">
      <serve-item v-for="item in serveItems" :key="item.id + Date.now()" :serveItem="item"/>
    </transition-group>
  </div>
</template>

<script>
import ServeItem from '@/components/ServeItem.vue'
export default {
  components: { ServeItem },
  props: {
    serveItems: {
      type: Array,
      required: true
    },

    scroll: {
      type: Number,
      required: true
    },

    scrollDirection: {
      type: Boolean,
      required: true
    },

    widthItem: {
      type: Number,
      required: true
    }
  },

  watch: {
    scroll(newValue){
      document.querySelector('.galery').style.left = newValue + 'px'
    }
  }
}
</script>

<style scoped>
  .galery{
    display: flex;
    flex: 0 0 auto;
    position: absolute;
    height: 100%;
    width: max-content;
    transition: left 0.7s ease;
    left: 0px;
  }

  .serve-list-item {
    display: inline-block;
  }
  .serve-list-enter-active, .serve-list-leave-active {
    transition: all 0.7s;
  }
  .serve-list-enter, .serve-list-leave-to{
    transform: translateX(440px);
  }

  .serve-list-back-item {
    display: inline-block;
  }
  .serve-list-back-enter-active, .serve-list-back-leave-active {
    transition: all 0.7s;
  }
  .serve-list-back-enter, .serve-list-back-leave-to{
    transform: translateX(-440px);
  }  

  /*///////////////////////////*/

  .serve-list-back-complete-item {
    transition: all 0.7s;
    display: inline-block;
    margin-right: 10px;
  }
  .serve-list-back-complete-enter, .serve-list-back-complete-leave-to{
    opacity: 0;
    transform: translateY(30px);
  }
  .serve-list-back-complete-leave-active {
    position: absolute;
  }

  /*/////////////////////////////////*/

  @media screen and (max-width: 800px) {
    .serve-list-back-enter, .serve-list-back-leave-to{
      transform: translateX(-480px);
    } 

    .serve-list-enter, .serve-list-leave-to{
      transform: translateX(480px);
    }
  }

  @media screen and (max-width: 600px) {
    .serve-list-back-enter, .serve-list-back-leave-to{
      transform: translateX(-280px);
    } 

    .serve-list-enter, .serve-list-leave-to{
      transform: translateX(280px);
    }
  } 
</style>