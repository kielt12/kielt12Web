<template>
  <div class="project-container">
    <h1>All Recent Projects</h1>
    <h3>
      These some of my most recent projects, you can see more of them on my
      <a href="https://github.com/kielt12">GitHub.</a>
    </h3>
    <div :class="scroll()">
      <div v-for="card in cardModule" :key="card.id">
        <component :is="cards" :payload="card"> </component> 
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
    console.log(store);
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
    height: 620px;
    overflow: -moz-scrollbars-none;
    scrollbar-width: none;
    -ms-overflow-style: none;
    //overflow: hidden;
    &::-webkit-scrollbar {
      width: 0 !important;
      display: none;
    }
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
