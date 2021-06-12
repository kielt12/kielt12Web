<template>
  <div class="project-card">
    <div class="project-card-top">
      <img :src="payload.image" alt="" />
    </div>
    <div class="project-card-bottom">
      <div class="project-card-text">
        <div class="header">
          <h1>{{ payload.header }}</h1>
          <div v-if="payload.site !== ''" class="demo">
            <h2><a :href="payload.site">Click the link here.</a></h2>
          </div>
        </div>

        <p>{{ payload.paragraph }}</p>
        <div class="icons-controller">
          <img class="icon-stack" src="../assets/layer.png" alt="" />
          <div class="icon-array" v-for="da in payload.icons" :key="da">
            <img :src="da" alt="" />
          </div>
        </div>
      </div>
      <div class="project-github">
        <a :href="payload.github">
          <img src="../assets/github2.png" alt="" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    payload: Object,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  div {
    flex-basis:20%;
    h1{
      font-size: 2px;
    }
  }
}



.project-card {
  padding-bottom: 12px;
  display: flex;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
  margin-bottom: 20px;
}
.project-card-top {
  height: 180px;
  img {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    height: 180px;
    width: 350px;
  }
}
.project-card-bottom {
  max-height: 180px;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(135deg, #e25544 2.88%, #42127e 98.14%);
  width: 100%;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  .project-card-text {
    padding-left: 2%;
    padding-right: 2%;
    h1 {
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 25px;
      line-height: 17px;
      color: #fff;
    }
    p {
      word-wrap: break-word;
      color: #fff;
    }
  }
  .project-github {
    margin-right: 30px;
    img {
      height: 175px;
      width: 175px;
    }
  }

  .icons-controller {
    display: flex;
  }

  .icon-stack {
    width: 36px;
    height: 36px;
    padding-right: 12px;
  }

  .icon-array {
    padding-right: 12px;
    padding-top: 5px;
  }
}

.demo {
  h2{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 17px;
   color: #fff;
  }
  a {
    font-weight: 400;
      text-decoration: none;
      color: #fff;
      cursor: pointer;
    }
}

@media only screen and (max-width: 1650px) {
  .project-card-top {
    img {
      width: 270px;
    }
  }
  .project-card-bottom {
    .project-card-text {
      h1 {
        font-size: 25px;
      }
      p {
        font-size: 15px;
      }
    }
  }
}

@media only screen and (max-width: 1400px) {
  .project-card-top {
    img {
      width: 250px;
    }
  }
  .project-card-bottom {
    .project-card-text {
      h1 {
        font-size: 20px;
      }
      p {
        font-size: 13px;
      }
    }
  }
}
</style>
