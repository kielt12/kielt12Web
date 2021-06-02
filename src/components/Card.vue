<template>
  <div class="card">
    <div class="card-top">
      <img :src="payload.image" alt="" />
    </div>
    <div class="card-bottom">
      <h1>{{ payload.header }}</h1>
      <div class="card-text">
        <div v-for="da in payload.icons" :key="da">
          <img :src="da" alt="" />
        </div>
      </div>
      <div class="github">
        <div>
          <a :href="payload.github">
            <span>See more</span>
            <img src="../assets/github3.png" alt="" />
          </a>
        </div>
        <div v-if="payload.site !== null">
          <h1><a :href="payload.site">Site here </a></h1>
        </div>
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

<style lang="scss">
.card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
  width: 350px;
  height: 512px;
}
.card-top {
  height: 240px;

  img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 240px;
    width: 350px;
  }
}
.card-bottom {
  width: 100%;
  background: linear-gradient(135deg, #e25544 2.88%, #42127e 98.14%);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 272px;
  h1 {
    text-align: center;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 21px;
    color: #fff;
    padding-bottom: 12px;
    line-height: 26px;
  }
  .card-text {
    padding-left: 6%;
    padding-right: 6%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    div {
      border-radius: 10px;
      width: 67px;
      height: 26px;
      text-align: center;
      font-family: Montserrat;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 23px;
      text-align: center;
      color: #000000;
      margin-bottom: 12px;
    }
  }
  .github {
    padding-left: 6%;
    padding-right: 6%;
    cursor: pointer;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    color: white;
    span {
      padding-right: 12px;
      font-size: 16px;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
    h1 {
      line-height: 17px;
      font-size: 16px;
      font-family: Montserrat;
      font-style: normal;
      font-weight: normal;
    }
  }
}
</style>
