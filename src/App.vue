<template>
  <div id="app">
    <HeaderComponent />
    <router-view></router-view>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  position: relative;
  min-height: 100vh;
  padding-bottom: 5rem;
}
</style>
