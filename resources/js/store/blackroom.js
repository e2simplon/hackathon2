import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/blackroom'
import axios from "axios";


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        spots: [],
        users: [],
        projects: [],
        snack: {color:"success", text:"no text", status: false}
    },
    mutations: {
        setSpotsData(state, payload) {
            state.spots = payload;
        },
        setUsersData(state, payload) {
            state.users = payload;
        },
        snackMessage(state, payload) {
            state.snack = payload;
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
                    commit("snackMessage", {color:"success", text:"Plateau ajouté", status: true});
                }).catch(error => {
            });
        },
        setUsers({commit}, payload) {
            commit("setUsersData", payload);
        },
        addUser({commit}, payload) {
            axios.post(window.location.origin + "/api/users", payload)
                .then(response => {
                    commit("setUsersData", response.data);
                    commit("snackMessage", {color:"success", text:"Utilisateur ajouté", status: true});
                }).catch(error => {
            });
        },
    }
})



