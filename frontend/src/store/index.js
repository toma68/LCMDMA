import Vue from 'vue'
import Vuex from 'vuex'
import router from "@/router";

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        user: null,
        tarifs: null,
    }, getters: {}, mutations: {
        setUser(state, user) {
            state.user = user
        },
        clearUser(state) {
            state.user = null
        },
        setTarifs(state, tarifs) {
            state.tarifs = tarifs
        }
    }, actions: {
        registerPrestataire({commit}, prestataire) {
            return fetch('http://localhost:3000/api/auth/register', {

                method: 'POST', headers: {
                    'Content-Type': 'application/json'
                }, body: JSON.stringify(prestataire)
            })
                .then(response => response.json())
                .then(response => {
                    commit('setUser', "toto")
                    return response
                })
                .catch(error => console.error('Error:', error))
        },
        registerUser({commit}, user) {
            return fetch('http://localhost:3000/api/auth/register', {

                method: 'POST', headers: {
                    'Content-Type': 'application/json'
                }, body: JSON.stringify(user)
            })
                .then(response => response.json())
                .then(response => {
                    commit('setUser', "toto")
                    return response
                })
                .catch(error => console.error('Error:', error))
        },
        getTarifs({commit}) {
            return fetch('http://localhost:3000/api/tarifs', {
                method: 'GET', headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(response => {
                    commit('setTarifs', response)
        })
                .catch(error => console.error('Error:', error))
        },
        connexionUser({commit}, user) {
            return fetch('http://localhost:3000/api/auth/login', {

                method: 'POST', headers: {
                    'Content-Type': 'application/json'
                }, body: JSON.stringify(user)
            })
                .then(response => response.json())
                .then(response => {
                    commit('setUser', response.data)
                    localStorage.setItem('token', response.token)

                    if (response.userRole === 1) {
                        router.push({name: 'home'})
                            .then(r => console.log(r))
                    } else if (response.userRole === 2) {
                        router.push({name: 'prestataires'})
                            .then(r => console.log(r))
                    } else if (response.userRole === 3) {
                        router.push({name: 'admin'})
                            .then(r => console.log(r))
                    }
                    return response
                })
                .catch(error => console.error('Error:', error))
        },
    }, modules: {}
})
