<template>
  <div class="project" @mouseover="showShortInfo" @mouseleave="hideShortInfo">
    <image-galery
      class="project-img"
      :items="project.path"
      :itemHeight="450"
      :itemWidth="630"
      :isGaleryScrolling="isGaleryScrolling"
      @move="moveRight"
    />

    <div class="project-content">
      <h3>{{ project.title }}</h3>
      <p class="address">{{ project.address }}</p>
      <!-- <p>{{ project.body }}</p> -->

      <div class="project-phases">
        <div class="phase-list">
          <p>Были проведены следующие этапы:</p>
          <ul>
            <li
              class="phase-item"
              v-for="phase in project.phases"
              :key="Date.now() + phase.length"
            >
              {{ phase }}
            </li>
          </ul>
        </div>

        <div class="count-charecters">
          <div class="time-span">
            <img src="@/assets/icons/time.png" alt="clock" />
            {{ project.timespan }}
          </div>
        </div>
      </div>
      <my-button :value="'Скрыть'" @click="hideFull" class="blue hidebtn" />
      <my-button :value="'Подробнее'" @click="showFull" class="blue showbtn" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      isFullView: false,
      isGaleryScrolling: false,
    };
  },

  methods: {
    showShortInfo() {
      if (this.isFullView) return;

      this.$el
        .querySelector(".project-content")
        .classList.add("project-content-short-view");
    },

    hideShortInfo() {
      if (this.isFullView) return;

      this.$el
        .querySelector(".project-content")
        .classList.remove("project-content-short-view");
    },

    showFull() {
      this.isFullView = true;
      this.isGaleryScrolling = true;
      // content = this.$el.querySelector(".project-content")
      this.$el
        .querySelector(".project-content")
        .classList.remove("project-content-short-view");
      this.$el
        .querySelector(".project-content")
        .classList.add("project-content-full-view");
    },

    hideFull() {
      this.isFullView = false;
      this.isGaleryScrolling = false;
      this.$el
        .querySelector(".project-content")
        .classList.remove("project-content-full-view");
    },

    moveRight() {
      let firstItem = this.project.path.pop();
      setTimeout(() => this.project.path.unshift(firstItem), 1000);
    },
  },
};
</script>

<style scoped>
.project {
  position: relative;
  height: 450px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;

  overflow: hidden;
  /* width: 630px; */
  /* max-width: 630px; */
  min-width: 630px;
  margin: 10px 5px;
}

.project-img {
  position: relative;
  width: 100%;
  height: 100%;

  max-width: 630px;
  /* object-fit: cover; */
}

.project-content {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  flex-shrink: 0;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(17, 6, 68, 0.3);
  backdrop-filter: blur(2px);
  transform: translateY(80%);
  width: 100%;
  height: 100%;
  max-width: 630px;
  padding: 10px 20px;
}

.project p {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #2c2450;
}

.project-phases {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.phase-list > p {
  font-weight: 600;
}

.phase-list > ul {
  list-style-position: inside;
  margin: 20px 0px;
}

.count-charecters img {
  height: 20px;
  margin-right: 10px;
}

.count-charecters > div {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
}

.project-content > * {
  /* text-align: left; */
  display: none;
}

.project-content > h3 {
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  display: block;
  color: #ffffff;
}

.project-content-short-view {
  width: 60%;
  left: 40%;
  transform: none;
  padding: 30px;
  justify-content: center;
}

.project-content-short-view * {
  color: #ffffff;
}

.project-content-short-view > h3 {
  display: block;
  margin: 20px 0px;
}

.project-content-short-view > .address {
  display: block;
  order: -1;
  color: #ffffff;
}

.project-content-short-view > .project-phases {
  display: block;
}

.project-content-short-view .phase-list {
  display: block;
}

.project-content-short-view .phase-list > * {
  display: none;
}

.project-content-short-view .count-charecters {
  display: flex;
  margin: 10px 0px;
  justify-content: space-between;
}

.project-content-short-view .count-charecters > div {
  display: flex;
  align-items: center;
}

.project-content-short-view > .showbtn {
  display: block;
  text-align: center;
  align-self: center;
  width: 90%;
  margin-top: 20px;
}

.project-content-full-view {
  transform: none;
  background: #ffffff;
  position: relative;
  display: flex;
  max-width: 630px;
  width: 100%;
}

.project-content-full-view > * {
  display: flex;
}

.project-content-full-view > h3 {
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 37px;
  color: #2c2450;
}

.project-content-full-view > p {
  margin: 10px 0px;
  color: #2c2450;
}

.project-content-full-view > .phase-list {
  margin: 20px;
  margin-right: 40px;
}

.project-content-full-view .count-charecters {
  /* margin-right: 70px; */
  min-width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: left;
}

.project-content-full-view .count-charecters > div {
  display: flex;
  align-items: center;
}

.project-content-full-view > .showbtn {
  display: none;
}

.project-content-full-view > .hidebtn {
  display: block;
  width: 50%;
  text-align: center;
}

@media screen and (max-width: 800px) {
  .project {
    min-width: 0;
  }

  .project h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
  }

  .project-content {
    padding: 10px;
  }

  .count-charecters > div {
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
  }

  .project-content-short-view {
    justify-content: center;
  }

  .project-content-short-view h3 {
    margin: 10px 0;
  }

  .project-content-short-view .address {
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 13px;
  }

  .project-content-short-view .phases {
    height: min-content;
  }

  .project-content-short-view .count-charecters {
    flex-direction: column;
    justify-content: space-between;
    margin: 0;
  }

  .project-content-short-view .time-span {
    margin-bottom: 5px;
  }

  .project-content-short-view .showbtn {
    margin-top: 10px;
    width: 100%;
  }
}

@media screen and (max-width: 600px) {
  .project {
    height: max-content;
    width: 100%;
    margin: 10px auto;
    padding: 0;
    flex-wrap: wrap;
    min-width: 0;
  }

  .project-img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  .project-content {
    transform: translateY(70%);
  }

  .project-content-short-view {
    transform: none;
  }

  .project-content > h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
  }

  .project-content > p {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
  }

  .showbtn {
    width: 100%;
  }

  .project-content-full-view {
    transform: none;
    height: max-content;
  }

  .project-content-full-view .phase-list {
    display: none;
  }

  .project-content-short-view .project-phases {
    height: min-content;
  }

  .project-content-full-view .phases {
    justify-content: center;
    align-self: center;
    width: 100%;
  }

  .project-content-full-view .project-phases {
    justify-content: center;
    align-self: center;
    width: 100%;
  }

  .project-content-full-view .count-charecters {
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    margin: 0;
  }

  .project-content-full-view .hidebtn {
    width: 100%;
    margin-top: 10px;
  }

  /* .project-content-full-view > p{
    margin: 10px 0px;
    color: #2C2450;
  }

  .project-content-full-view > .phase-list{
    margin: 20px;
  }

  .project-content-full-view .count-charecters{
    margin-right: 70px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: left;
  }

  .project-content-full-view .count-charecters > div{
    display: flex;
    align-items: center;
  }

  .project-content-full-view > .showbtn{
    display: none;
  }

  .project-content-full-view > .hidebtn{
    display: block;
    width:50%;
    text-align: center;
  } */
}
</style>
