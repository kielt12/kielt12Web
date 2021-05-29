<template>
  <div class="home">
    <div class="text-left">
      <div class="text-left-flex">
        <h1>Creative</h1>
        <h2 id="text">Full</h2>
        <h2 id="text1">Stack</h2>
        <h2 id="text2">Developer</h2>
        <img class="person-img" src="../assets/person-tablet.png" alt="" />
        <h3>UI/UX To Backend</h3>
      </div>
      <div class="contact-container">
        <img @click="contact" src="../assets/contact.png" alt="" />
        <button @click="contact">Contact me!</button>
      </div>
    </div>
    <div class="text-right">
      <img src="../assets/C18.png" alt="" />
    </div>
    <div class="icons" @click="contact">
      <img src="../assets/icons.png" alt="" />
    </div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
export default {
  components: {},
  setup(){
    const router = useRouter();
    const contact = () =>{
      router.push({
          name: "Contact",
        });
    }
    return{
      contact,
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../variables.scss";
.home {
  display: flex;
  padding-left: 6%;
  padding-right: 6%;
  justify-content: space-between;
}
.person-img {
  display: none;
}
.text-left {
  h1 {
    font-family: Kaushan Script;
    font-style: normal;
    font-weight: normal;
    font-size: 150px;
    line-height: 25px;
    color: #ffffff;
  }
  h2 {
    font-family: Kaushan Script;
    font-style: normal;
    font-weight: normal;
    display: inline;
    font-size: 70px;
    overflow-wrap: break-word;
    line-height: 30px;
    color: #ffffff;
  }
  h3 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 70px;
    color: #ffffff;
  }
}
.text-right {
  padding-top: 72px;
}
.contact-container {
  display: flex;
  img {
    cursor: pointer;
    padding-right: 50px;
  }
  button {
    margin-top: 32px;
    width: 200px;
    height: 42px;
    background: rgba(66, 18, 126, 0.51);
    border-radius: 10px;
    border: none;
    line-height: 20px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    color: #ffffff;
    cursor: pointer;
  }
}
.icons {
  cursor: pointer;
  display: none;
}
.text-left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media only screen and (max-width: 1800px) {
  #text2 {
    display: block;
  }
}
@media only screen and (max-width: 1600px) {
  .text-right {
    img {
      width: 850px;
    }
  }
}

@media only screen and (max-width: 1400px) {
  .home {
    display: inline;
    text-align: center;
  }
  #text2 {
    display: inline;
  }
  .text-right {
    img {
      display: none;
    }
  }
  .text-left {
    h1 {
      line-height: 50px;
    }
    h2 {
      line-height: 50px;
    }
    h3 {
      line-height: 50px;
    }
  }

  .person-img {
    display: inline;
  }
  .contact-container {
    display: inline-block;
    img {
      display: none;
    }
    button {
      margin-top: 15px;
    }
  }
  .icons {
    display: block;
  }
}

@media only screen and (max-width: 800px) {
  .text-left {
    h1 {
      font-size: 68px;
      line-height: 12px;
    }
    h2 {
      font-size: 36px;
    }
    h3 {
      padding-top: 12px;
    }
  }
  .person-img {
    width: 681px;
    height: 419px;
  }
}

@media only screen and (max-width: 700px) {
  .person-img {
    width: 430px;
    height: 205px;
  }
}
@media only screen and (max-width: 600px) {
  .person-img {
    width: 347px;
    height: 205px;
  }
}
</style>
