<template>
  <footer>
      <h2>About us</h2>
      <h4>Juan David Cubillos C.</h4>
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
  flex-direction: column;
  margin-top: 30px;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 5rem;
  background-color: #3c3d41;
  color: rgba(255, 255, 255, 1);
  justify-content: center;
}
footer h2,h4{
    margin: 0;
    align-self: center;
    
}
</style>