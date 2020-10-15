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
        setProjectsData(state, payload) {
            state.projects = payload;
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

        /*DELETE USER*/
        deleteUser({commit}, payload) {
            axios.delete(window.location.origin + "/api/users/"+payload, payload)
                .then(response => {
                    commit("setUsersData", response.data);
                    commit("snackMessage", {color:"success", text:"Utilisateur supprimé", status: true});
                }).catch(error => {
            });
        },
        /*DELETE USER*/

        /*EDIT USER*/
        editUserConfirm({commit}, payload) {
            axios.put(window.location.origin + "/api/users/"+payload.id, payload)
                .then(response => {
                    commit("setUsersData", response.data);
                    commit("snackMessage", {color:"success", text:"Utilisateur modifié", status: true});
                }).catch(error => {
            });
        },
        /*EDIT USER*/

        /*EDIT USER PASSWORD*/
        changePassword({commit}, payload) {
            axios.patch(window.location.origin + "/api/users/"+payload.id, payload)
                .then(response => {
                    commit("snackMessage", {color:"success", text:"Mot de passe modifié", status: true});
                }).catch(error => {
            });
        },
        /*EDIT USER PASSWORD*/

        /* DELETE SPOT */
        deleteSpot({commit}, payload) {
            axios.delete(window.location.origin + "/api/spots/"+payload, payload)
                .then(response => {
                    commit("setSpotsData", response.data);
                    commit("snackMessage", {color:"success", text:"Plateau supprimé", status: true});
                }).catch(error => {
            });
        },
        /*DELETE SPOT*/

        /*EDIT SPOT*/
        editSpotConfirm({commit}, payload) {
            axios.put(window.location.origin + "/api/spots/"+payload.id, payload)
                .then(response => {
                    commit("setSpotsData", response.data);
                    commit("snackMessage", {color:"success", text:"Plateau modifié", status: true});
                }).catch(error => {
            });
        },
        /*EDIT SPOT*/

        /* DELETE SPOT */
        deleteProject({commit}, payload) {
            axios.delete(window.location.origin + "/api/projects/"+payload, payload)
                .then(response => {
                    commit("setProjectsData", response.data);
                    commit("snackMessage", {color:"success", text:"Plateau supprimé", status: true});
                }).catch(error => {
            });
        },
        /*DELETE SPOT*/

        /*EDIT PROJECT*/
        editProjectConfirm({commit}, payload) {
            axios.put(window.location.origin + "/api/projects/"+payload.id, payload)
                .then(response => {
                    commit("setProjectsData", response.data);
                    commit("snackMessage", {color:"success", text:"Projet modifié", status: true});
                }).catch(error => {
            });
        },
        /*EDIT PROJECT*/

        setProjects({commit}, payload) {
            commit("setProjectsData", payload);
        },
        addProject({commit}, payload) {
            axios.post(window.location.origin + "/api/projects", payload)
                .then(response => {
                    commit("setProjectsData", response.data);
                    commit("snackMessage", {color:"success", text:"Projet ajouté", status: true});
                }).catch(error => {
            });
        },
    }
})



