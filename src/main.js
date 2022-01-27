import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import titleMixin from './mixins/titleMixin'
console.log('dddd')
createApp(App).use(store).use(router).mixin(titleMixin).mount("#app");
