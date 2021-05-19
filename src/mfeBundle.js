import Vue from "vue";
import VueTableSf from "./vue-table-sf.vue";

Vue.config.productionTip = false;

function createApp(el, data) {
  const app = new Vue({
    render: (h) =>
      h(VueTableSf, {
        props: {
          ...data,
        },
      }),
    el,
  });
  return app;
}

export default createApp;
