import Vue from "vue";
import SignInForm from "comps/molecules/SignInForm";

import storePlugin from "store/storePlugin.js";

Vue.config.productionTip = false;

Vue.use(storePlugin);

new Vue({
  render: h => h(SignInForm),
  created() {
    this.$store.dispatch("initialize", "user");
  }
}).$mount("#app");
