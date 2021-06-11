<template>
  <Nav />
  <router-view />
  <Footer />
</template>

<script>
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { useStore } from "vuex";
export default {
  title:"Moulon",
  components: { Nav, Footer },
  setup(){
    const store = useStore()
    store.dispatch('getModule')
  }
};
</script>
<style lang="scss">
@import "./variables.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

*,
*:focus,
*:hover {
  outline: none;
}
body {
  background: $bg-color;
  margin: 0;
  padding: 0;
}
</style>
