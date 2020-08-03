<template>
  <div class="shopping-cart">
    <!-- Title -->
    <div class="title">Shopping Bag</div>
    <!-- <h2>Carrito</h2>
    <ul v-if="products">
      <li
        v-for="product in products"
        v-bind:key="product.product.id"
      >{{ product.product.name }} - {{ product.product.price }} x {{ product.quantity }}</li>
      {{getTotalPrice}}
    </ul>-->
    <div class="item" v-for="productCar of products" v-bind:key="productCar._id">
      <div class="image">
        <img
          class="car-product-image"
          :src="productCar.image"
          :alt="productCar.name"
        />
      </div>

      <div class="description">
        <span>{{productCar.name}}</span>
        <span>{{productCar.description}}</span>
      </div>

      <div class="quantity">
        <span>{{productCar.quantity}}</span>
        <div class="button-container">
          <button
            class="minus-btn"
            type="button"
            name="button"
            @click="decrementProductQuantity({productCar})"
          >-</button>
          <button
            class="plus-btn"
            type="button"
            name="button"
            @click="incrementProductQuantity({productCar})"
          >+</button>
        </div>
      </div>
      <div class="current-total-price">${{productCar.quantity * productCar.price}}</div>
    </div>
    <br />
    <div class="total-price">
      <span>
        <strong>TOTAL PRICE:</strong>
        {{getTotalPrice}}
      </span>
      <button
        class="shop-btn"
        type="button"
        size="20"
        :disabled="products.length===0"
        @click="postOrder()"
      >Shop</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import axios from "axios";

export default {
  name: "ShoppingCarComponent",
  computed: {
    ...mapState(["products"]),
    ...mapGetters(["getTotalPrice"]),
  },
  methods: {
    postOrder() {

      axios
        .post(`${this.urlApi}/orders/`, {
          products: this.products,
        })
        .then((response) => {
          let order = response.data;
          this.emptyCar();
          this.order = order;
          this.$swal.fire({
            icon: "success",
            title: `Order #${order._id}`,
            html: `<strong>Total Price:</strong> ${order.totalPrice} </br>`,
          });
        })
        .catch((err) => {
          this.$swal.fire({
            icon: "error",
            title: `${err.response.data.statusCode}`,
            html: `<strong>Error:</strong> ${err.response.data.message} </br>`,
          });
        });
    },

    ...mapMutations([
      "incrementProductQuantity",
      "decrementProductQuantity",
      "emptyCar",
    ]),
  },

  data() {
    return {
      urlApi: process.env.VUE_APP_ROUTE_API,
      order: Object,
    };
  },
};
</script>

<style scoped>
.shopping-cart {
  width: 95%;
  margin: 80px auto;
  background: #ffffff;
  box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.1);
  border-radius: 6px;

  display: flex;
  flex-direction: column;
}

.title {
  height: 60px;
  border-bottom: 1px solid #e1e8ee;
  padding: 20px 30px;
  color: #5e6977;
  font-size: 18px;
  font-weight: 400;
}

.item {
  padding: 20px 30px;
  height: 120px;
  display: flex;
}

.item:nth-child(3) {
  border-top: 1px solid #e1e8ee;
  border-bottom: 1px solid #e1e8ee;
}
.buttons {
  position: relative;
  padding-top: 30px;
  margin-right: 60px;
}

.image {
  margin-right: 50px;
}

.description {
  padding-top: 10px;
  margin-right: 60px;
  width: 115px;
}

.description span {
  display: block;
  font-size: 14px;
  color: #43484d;
  font-weight: 400;
}

.description span:first-child {
  margin-bottom: 5px;
}
.description span:last-child {
  font-weight: 300;
  margin-top: 8px;
  color: #86939e;
}

.quantity {
  margin-right: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 40px;
}

.button-container button {
  width: 30px;
  height: 30px;
  background-color: #e1e8ee;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  margin: 2px;
}

.car-product-image {
  width: 100px;
  height: 100px;
}

.current-total-price {
  width: 83px;
  padding-top: 27px;
  text-align: center;
  font-size: 16px;
  color: #43484d;
  font-weight: 300;
}
.total-price {
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
}
.shop-btn {
  background-color: #63c063;
  color: white;
  border-radius: 6px;
  width: 100px;
}
</style>