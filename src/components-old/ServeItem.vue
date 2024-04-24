<template>
  <div class="serve-item" @mouseover="showFull" @mouseout="hideFull">
    <img :src="serveItem.path" alt="serveItem-IMG">
    <div class="serve-item-content">
      
      <h3>{{ serveItem.title }}</h3>
      <div class="serve-item-list-container">
        <ul class="serve-item-list">
          <li class="list-item" v-for="part in serveItem.parts" :key="Date.now() + part.length">{{ part }}</li>
        </ul>
      </div>

      <my-button :value="'Оставить заявку'" class="blue serve-item-btn"/>

      <!-- <p>{{ serveItem.body }}</p> -->
    </div>
  </div>
</template>

<script>
import MyButton from './UI/MyButton.vue'
export default {
  components: { MyButton },
  props:{
    serveItem: {
      type: Object,
      required: true
    }
  },

  methods: {
    showFull(){
      this.$el.querySelector('.serve-item-content').classList.add('serve-item-content-onhover')
    }, 

    hideFull(){
      this.$el.querySelector('.serve-item-content').classList.remove('serve-item-content-onhover')
    }
  },

  watch: {
    serveItem(newValue){
      document.querySelector('.serve-IMG').setAttribute('src', newValue.path)
    }
  }


}
</script>

<style scoped>
  .serve-item{
    display: flex;
    flex-direction: column;
    width: 410px;
    height: 100%;
    
    position: relative;
    /* border: 2px solid black; */
    margin: 0px 15px;
    overflow: hidden;
    color: #fff;
  }

  .serve-item-content{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: rgba(17, 6, 68, 0.3);
    backdrop-filter: blur(3px);
    padding: 0px 20px;
    transform: translateY(70%);
    position: relative;
  }

  .serve-item img{
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;

  }

  .serve-item-content h3{
    width: 100%;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 37px;
    margin: 20px 0px;
  }

  .serve-item-list{
    list-style: none;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
  }

  .list-item{
    margin-bottom: 30px;
  }

  .serve-item-btn{
    width: calc(100% - 40px);
    position: absolute;
    bottom: 5px;
    margin: 20px auto;
  }

  .serve-item-content-onhover h3{
    margin-top: 100px;
    transition: margin-top 0.7s;
  }

  .serve-item-content-onhover .serve-item-list{
    list-style:unset;
    list-style-position: inside;
  }

  

  @media screen and (max-width: 800px){
    .serve-item{
      width: 450px;
    }
  }

  @media screen and (max-width: 600px){
    .serve-item{
      width: 250px;
    }

    .serve-item-content{
      transform: translateY(65%);
    }

    .serve-item-content h3{
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      margin-bottom: 10px;
    }

    .list-item{
      font-style: normal;
      font-weight: 400;
      font-size: 11px;
      line-height: 13px;
      margin-bottom: 10px;
      visibility: hidden;
    }

    .list-item:first-child{
      visibility: visible;
    }

    .serve-item-content-onhover h3{
      margin-top: 35px;
      transition: margin-top 0.7s;
    }

    .serve-item-content-onhover .list-item{
      visibility: visible;
    }
  }

  .serve-item-content-onhover{
    transform: none;
    transition: transform 0.7s;
  }

  

  



</style>