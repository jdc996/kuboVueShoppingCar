<template>
  <article class="card">
    <img
      class="product-image"
      :src="product.image"
      :alt="product.name"
    />
    <div class="description-container">
      <h4>
        <b>{{product.name}}</b>
      </h4>
      <p>{{product.description}}</p>
      <p>
        <strong>Precio $</strong>
        {{product.price}}
      </p>
    </div>
    <div v-if="product.inventory>0" class="shop-container">
      <input
        type="number"
        v-model.number="cantidad"
        size="8"
        min="1"
        value="0"
        :max="product.inventory"
      />
      <button :disabled="cantidad<=0" @click="addToCar({product,cantidad})">Añadir</button>
    </div>
    <div v-else class="shop-container">
      <h4>Producto Agotado!</h4>
    </div>
  </article>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Product",
  props: {
    initialProduct: Object,
  },
  computed: {
    ...mapGetters(["getTotalPrice"]),
  },
  methods: {
    ...mapMutations([
      "addToCar",
      "incrementProductQuantity",
      "decrementProductQuantity",
    ]),
  },
  data() {
    return {
      product: this.initialProduct,
      cantidad: 0,
    };
  },
};
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
}
.product-image {
  width: 160px;
  height: 200px;
  margin: auto;
}
.card {
  padding: 1.2em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  height: 350px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.description-container {
  padding: 2px 16px;
}

.shop-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

@media (max-width: 570px) {
  .product-image {
    width: 100px;
    height: 120px;
    margin: auto;
  }
  .card {
  padding: 1.2em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 200px;
  height: 250px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}
}
</style>