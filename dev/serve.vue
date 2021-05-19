<script>
import Vue from 'vue';
import VueTableSf from '@/vue-table-sf.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VueTableSf
  }
});
</script>

<template>
  <div id="app">
    <vue-table-sf />
  </div>
</template>
