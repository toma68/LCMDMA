import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        user: null
    }, getters: {}, mutations: {
        setUser(state, user) {
            state.user = user
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
        }
    }, modules: {}
})
