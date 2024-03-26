<template>
  <div class="image-galery-wnd" >
    <div class="galery-container">
      <transition-group name="galery-content">
        <div
          class="galery-photo"
          v-for="item in items"
          :key="item"
          :style="{ width: itemWidth }"
        >
          <img :src="item" alt="img" class="project-img galery-photo-image" />
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "image-galery",

  data() {
    return {
      scroll: 0,
      scrollingIntervalId: undefined,
      widthItem: 630,
    };
  },

  mounted() {
    if(document.documentElement.clientWidth < 600)
      this.widthItem = 400
    else if(document.documentElement.clientWidth < 800)
      this.widthItem = 480
  },

  props: {
    items: {
      type: Array,
      require: true,
    },

    itemWidth: {
      type: Number,
      default: 300,
    },

    itemHeight: {
      type: Number,
      default: 170,
    },

    isGaleryScrolling: {
      type: Boolean,
      require: true,
    },
  },

  methods: {
    galeryMoveRight() {
      // if (
      //   document.querySelector(".galery-container").offsetWidth + this.scroll >
      //   document.querySelector(".image-galery-wnd").offsetWidth +
      //     2 * this.itemWidth
      // ) {
      //   //console.log("Сдвиг");
      //   //this.scroll -= this.itemWidth;
      //   // this.$emit("move");
      //   // setTimeout(() => this.scroll = 0, 1000)
        
      // } else {
      //   console.log("Удаление добавление");
      //   this.$emit("move");
      // }
      
      this.$emit("move");
    },
  },

  watch: {
    isGaleryScrolling(newValue) {
      if (newValue && this.items.length > 1) {
        this.scrollingIntervalId = setInterval(() => {
          this.galeryMoveRight.call(this);
        }, 3000);
      } else clearInterval(this.scrollingIntervalId);
    },
    scroll(newValue) {
      document.querySelector(".galery-container").style.left = newValue + "px";
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.image-galery-wnd {
  height: 100%;
  min-width: 630px;
  width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
}

.galery-container {
  position: absolute;
  left: 0px;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: max-content;

  transition: left 0.7s ease;
}

.animate {
  animation: move 1s ease 3s infinite;
}

.project-img {
  position: relative;
  width: 100%;
  height: 100%;

  max-width: 630px;
  /* object-fit: cover; */
}

.galery-photo {
  position: relative;
  align-content: center;
  overflow: hidden;
  height: 100%;
  /* width: 100%; */
}

.galery-photo > img {
  display: block;
  margin: 0 auto; 
  position: relative;
  height: 100%;
  width:auto;
  max-width: 630px;
  object-fit: cover;
}

.galery-content-move {
  transition: transform 1s;
}

.galery-content-item {
  transition: all 0.7s;
  display: inline-block;
}
.galery-content-enter, .galery-content-leave-to {
  opacity: 0;
  transform: translateX(440px);
}

.galery-content-leave-active {
  position: absolute;
}

/*/ /////////////////////////////////*/

@keyframes move {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}



/* @media screen and (max-width: 600px) {

  .project-img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
}


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
}  */
</style>