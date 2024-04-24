<template>
  <a name="serves"></a>
  <div class="serve-galery-container">
    <div class="serve-btns">
      <input
        type="image"
        src="@/assets/icons/arrowLeft.png"
        alt="ArrowLeft"
        @click="galeryMoveLeft"
        class="arrowLeft"
      />
      <input
        type="image"
        src="@/assets/icons/arrowRight.png"
        alt="ArrowRight"
        @click="galeryMoveRight"
        class="arrowRight"
      />
    </div>

    <div class="serve-galery">
      <h2>Наши услуги</h2>
      <div class="galery-wnd">
        <serve-galery
          class="galery"
          :widthItem="widthItem"
          :scroll="scroll"
          :scrollDirection="scrollDirection"
          :serveItems="serveItems"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ServeGalery from "@/components/ServeGalery.vue";

export default {
  components: { ServeGalery },
  data() {
    return {
      serveItems: [],
      scroll: 0,
      widthItem: 440,
      currentServeId: 0,
      scrollDirection: true,
      isInScroll: false,
    };
  },

  methods: {
    galeryMoveLeft() {
      document.querySelector(".arrowLeft").setAttribute("disabled", true);

      if (this.scroll < -this.widthItem) this.scroll += this.widthItem;
      else {
        this.scrollDirection = true;
        let lastItem = this.serveItems.pop();
        this.serveItems.unshift(lastItem);
      }

      setTimeout(() => {
        document.querySelector(".arrowLeft").removeAttribute("disabled");
      }, 1000);
    },

    galeryMoveRight() {
      document.querySelector(".arrowRight").setAttribute("disabled", true);

      if (
        document.querySelector(".galery").offsetWidth + this.scroll >
        document.querySelector(".galery-wnd").offsetWidth + 2 * this.widthItem
      )
        this.scroll -= this.widthItem;
      else {
        this.scrollDirection = false;
        let firstItem = this.serveItems.shift();
        this.serveItems.push(firstItem);
      }

      setTimeout(() => {
        document.querySelector(".arrowRight").removeAttribute("disabled");
      }, 1000);
    },
  },

  mounted() {
    fetch("data/serveItems.json")
      .then((response) => response.json())
      .then((json) => (this.serveItems = json.serveItems))
      .catch((e) => console.log(e));

    if (document.documentElement.clientWidth < 600) this.widthItem = 280;
    else if (document.documentElement.clientWidth < 800) this.widthItem = 480;

    this.currentServeId = this.serveItems.length + 1;
    this.scroll = -this.widthItem;
  },
};
</script>

<style scoped>
.serve-galery-container {
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
}

.serve-btns {
  align-self: flex-end;
  margin: 20px 50px;
}

.serve-btns > input:first-child {
  margin-right: 20px;
}

.serve-galery {
  height: 80%;
  display: flex;
  align-items: center;
}

.serve-galery > h2 {
  width: 500px;
  margin-left: 50px;
  color: #2c2450;
}

.galery-wnd {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
}

@media screen and (max-width: 800px) {
  /* .serve-galery{
      height: 330px;
    } */

  .serve-galery > h2 {
    position: absolute;
    left: 0;
    top: 0;
    margin-left: 20px;
    margin-top: 40px;
    width: auto;

    font-weight: 600;
    font-size: 30px;
    line-height: 37px;
  }

  .serve-btns {
    margin: 20px;
    margin-top: 0;
  }

  .serve-btns > input {
    width: 30px;
  }

  .serve-btns > input[type="button"]:disabled {
    cursor: pointer;
  }

  .galery-wnd {
    margin-left: 85px;
  }
}

@media screen and (max-width: 600px) {
  .serve-galery-container {
    height: 80vh;
  }

  .serve-galery {
    height: 70%;
  }

  .galery-wnd {
    margin-left: 20px;
  }

  .serve-galery > h2 {
    margin-top: 25px;
  }
}
</style>
