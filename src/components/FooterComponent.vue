<template>
  <footer>
      <h2>Footer</h2>
  </footer>
</template>
<script>
export default {
  name: "FooterComponent",
};
</script>
<style scoped>

footer {
  display: flex;
  margin-top: 30px;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 5rem;
  background-color: #3c3d41;
  color: rgba(255, 255, 255, 1);
  justify-content: center;
  align-content: center;
}
</style>