import Vue from 'vue';
import Vuex from 'vuex';
import VueSweetalert2 from 'vue-sweetalert2';


Vue.use(Vuex)
Vue.use(VueSweetalert2);

const state = {
    products: [],
    checkoutStatus: false
}

const getters = {

    getTotalPrice(state) {
        let totalPrice = 0;
        state.products.map(p => totalPrice += p.price * p.quantity)
        return totalPrice;

    }

}

const mutations = {

    addToCar(state, { product, cantidad }) {
        let prodIn = state.products.find(p => p._id === product._id)
        if (!prodIn || prodIn.length === 0) {
            product.quantity = parseInt(cantidad)
            state.products.push({ ...product })
        } else {
            prodIn.quantity += parseInt(cantidad);
            //console.log(state.products)        
        }
        Vue.swal.fire(product.name.toUpperCase(),
            'Added to cart!',
            'success');
    }
    ,
    incrementProductQuantity(state, { productCar }) {
        let prodIn = state.products.find(p => p._id === productCar._id)
        console.log(prodIn)
        if (prodIn && prodIn.quantity < prodIn.inventory) {
            prodIn.quantity++
        }
    },
    decrementProductQuantity(state, { productCar }) {
        let prodIn = state.products.find(p => p._id === productCar._id)
        if (prodIn) {
            if (prodIn.quantity > 1) {
                prodIn.quantity--
            } else {
                state.products = state.products.filter(p => p._id !== productCar._id)
            }
        }
    },
    emptyCar(state) {
        state.products = []
    }

}

export default new Vuex.Store({
    state,
    mutations,
    getters
})