<template>
  <div class="project-container">
    <h1>All Recent Projects</h1>
    <h3>
      These some of my most recent projects, you can see more of them on my
      <a href="https://github.com/kielt12">GitHub.</a>
    </h3>
    <div :class="scroll()">
      <div v-if="cardModule !== null">
        <div v-for="card in cardModule" :key="card.id">
          <component :is="cards" :payload="card"> </component>
        </div>
      </div>
      <div id="loading-wrapper" v-else>
        <div id="loading-text">LOADING</div>
        <div id="loading-content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onUnmounted, ref } from "vue";
import ProjectCard from "../components/ProjectCard";
import Card from "../components/Card";
import { useStore } from "vuex";
export default {
  components: { ProjectCard, Card },
  setup() {
    const windowSize = ref(null);
    const cards = ref("");
    const store = useStore();
    const myEventHandler = () => {
      windowSize.value = window.innerWidth;
      if (window.innerWidth < 1140) {
        cards.value = "Card";
      } else {
        cards.value = "ProjectCard";
      }
    };
    const scroll = () => {
      if (windowSize.value < 1140) {
        return "not-scroll";
      }
      return "scroll";
    };
    myEventHandler();
    window.addEventListener("resize", myEventHandler);
    onUnmounted(() => {
      window.removeEventListener("resize", myEventHandler);
    });

    return {
      myEventHandler,
      windowSize,
      cards,
      scroll,
      cardModule: computed(() => store.getters.cardModule),
    };
  },
};
</script>

<style lang="scss" scoped>
.project-container {
  padding-left: 8%;
  padding-right: 8%;

  h1 {
    padding-top: 10px;
    text-align: center;
    font-size: 48px;
    color: #fff;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 200;
    padding-bottom: 20px;
  }
  h3 {
    margin-bottom: 18px;
    font-size: 18px;
    color: #fff;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 200;
    a {
      text-decoration: none;
      color: #fff;
    }
  }
  .scroll {
    overflow-y: auto;
    height: 660px;
    overflow: -moz-scrollbars-none;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      width: 0 !important;
      display: none;
    }
  }
}
#loading-wrapper {
  position: fixed;
  width: 100%;
  height: 40%;
  left: 0;
  top: 120;
}

#loading-text {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  color:#fff;
  width: 100px;
  height: 30px;
  margin: -7px 0 0 -45px;
  text-align: center;
  font-family: "PT Sans Narrow", sans-serif;
  font-size: 20px;
}

#loading-content {
  display: block;
  position: relative;
  left: 50%;
  top: 50%;
  width: 170px;
  height: 170px;
  margin: -85px 0 0 -85px;
  border: 3px solid #f00;
}

#loading-content {
  border: 3px solid transparent;
  border-top-color: rgb(121, 61, 185);
  border-bottom-color: rgb(121, 61, 185);
  border-radius: 50%;
  -webkit-animation: loader 2s linear infinite;
  -moz-animation: loader 2s linear infinite;
  -o-animation: loader 2s linear infinite;
  animation: loader 2s linear infinite;
}

@keyframes loader {
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.not-scroll {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .card {
    padding-right: 20px;
    padding-bottom: 10px;
    padding-top: 10px;
  }
}
@media only screen and (max-width: 833px) {
  .not-scroll {
    .card {
      padding-right: 0px;
    }
  }
}
</style>
