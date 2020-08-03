<template>
  <main>
    <div class="pagination-container">
      <sliding-pagination :current="page" :total="totalPages" @page-change="pageChangeHandler"></sliding-pagination>
    </div>
    <div class=products-container>
      <div v-if="categories" class="category-container">
        <h2>Categories</h2>
        <div v-for="category of categories" v-bind:key="category">
          <input
            type="checkbox"
            @change="filterProdutsByCategory()"
            :value="category"
            v-model="checkedCategories"
          />
          <label>{{category}}</label>
        </div>
      </div>
      <div v-if="products" class="card-container">
        <div v-for="product in products" :key="product._id" class="product-container">
          <ProductComponent :initialProduct="product" />
        </div>
        <!-- <button @click="comprar()">Comprar</button> -->
      </div>
    </div>
  </main>
</template>
<script>
import axios from "axios";
import ProductComponent from "./ProductComponent.vue";
import SlidingPagination from "vue-sliding-pagination";

export default {
  name: "ProductsComponent",
  async mounted() {
    this.products = await this.getProducts();
    this.categories = await this.getCategories();
  },
  components: { ProductComponent, SlidingPagination },
  methods: {
    async pageChangeHandler(selectedPage) {
      this.page=selectedPage
      this.products = await this.getProducts();
    },

    async filterProdutsByCategory() {
      this.categoriesFilter = "";
      this.checkedCategories.map((category) => {
        this.categoriesFilter += `category=${category}&&`;
      });
      this.products = await this.getProducts();
    },
    async getCategories() {
      try {
        let res = await axios.get(
          "http://localhost:3000/products/categories/all/"
        );
        let categories = res.data;
        return categories;
      } catch (error) {
        return error;
      }
    },

    async getProducts() {
      try {
        let res = await axios.get(
          `http://localhost:3000/products?${this.categoriesFilter}page=${this.page}`
        );
        console.log(res);
        let products = res.data.docs;
        this.page = res.data.page;
        this.totalPages = res.data.totalPages;
        return products;
      } catch (error) {
        return error;
      }
    },
    comprar() {},
  },
  data() {
    return {
      products: [],
      categories: [],
      checkedCategories: [],
      page: 1,
      totalPages: 1,
      categoriesFilter: "",
    };
  },
};
</script>


<style scoped>
@import "~vue-sliding-pagination/dist/style/vue-sliding-pagination.css";
main {
  margin-top: 10px;
  border-top: 2px solid #3c3d41;
  display: flex;
  flex-direction: column;
}
.pagination-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
}
.category-container {
  width: 15%;
  margin-top: 30px;
  box-sizing: border-box;
  padding-left: 15px;
}

.products-container{
  display: flex;
}
.card-container {
  padding: 0.5em;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
}

.product-container {
  display: flex;
  padding: 1em;
}
</style>