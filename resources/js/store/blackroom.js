import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/blackroom'
import axios from "axios";


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        spots: []
    },
    mutations: {
        setSpotsData(state, payload) {
            state.spots = payload;
        },
    },
    actions: {
        setSpots({commit}, payload) {
            commit("setSpotsData", payload);
        },
        addSpot({commit}, payload) {
            axios.post(window.location.origin + "/api/spots", payload)
                .then(response => {
                    commit("setSpotsData", response.data);


                }).catch(error => {
            });
        },
    }
})



