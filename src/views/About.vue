<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import LingeringObject from "../model/LingeringObject.js";
export default {
  name: 'about',
  mounted() {
    this.$store.dispatch("createLingeringObj", new LingeringObject({
      id: Math.floor((Math.random() * 100000) + 1)
    }));
    console.log("About- mounted()");
  },
  beforeDestroy() {
    this.$store.dispatch("createLingeringObj", null);
    console.log("About- beforeDestroy()");
  },
  watch: {
    '$store.state.lingeringObj': function (val) {
      console.log("lingeringObj set with id:" + val.id);
    }
  },
}
</script>
