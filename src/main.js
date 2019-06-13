import Vue from "vue";
import App from "comps/App";

import storePlugin from "store/storePlugin.js";

Vue.config.productionTip = false;

Vue.use(storePlugin);

new Vue({
  render: h => h(App),
  created() {
    this.$store.dispatch("initialize", "user");
  }
}).$mount("#app");
