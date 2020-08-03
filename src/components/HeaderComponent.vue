<template>
  <header id="header">
    <div class="logo-container">
      <img id="logo-kubo" src="../assets/logo.png" alt="Kubo Logo" />
      <span id="kubo-name-page">Kubo Shopping Car</span>
    </div>
    <nav id="menu">
      <router-link to="/products" active-class="active">Productos</router-link>
      <router-link to="/car" active-class="active">Carrito</router-link>
    </nav>
  </header>
</template>
<script>
export default {
  name: "headerComponent",
  props: {},
};
</script>

<style scoped>
#header {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 120px;
}

.logo-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

#logo-kubo {
  width: 100px;
  height: 100px;
}

#menu {
  display: flex;
  flex-basis: 20%;
  height: 100%;
}

#kubo-name-page {
  font-size: 2em;
  font-style: revert;
  font-weight: bold;
}

#menu {
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  align-items: flex-end;
}

a:link {
  padding-left: 0.5em;
  font-size: 1.5rem;
  text-decoration: none;
}
.router-link-exact-active{
  color: rgb(7, 179, 179);
}
</style>