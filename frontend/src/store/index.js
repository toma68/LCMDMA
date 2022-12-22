import Vue from 'vue'
import Vuex from 'vuex'
import router from "@/router";

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        user: null, tarifs: null, achats: null, prestataire: null,
    }, mutations: {
        setUser(state, user) {
            state.user = user
        }, clearUser(state) {
            state.user = null
        }, setTarifs(state, tarifs) {
            state.tarifs = tarifs
        }, setAchats(state, achats) {
            state.achats = achats
        }, addAchat(state, achat) {
            state.achats.push(achat)
        }, setPrestataire(state, prestataire) {
            state.prestataire = prestataire
        }
    },
    actions: {
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
        }
        ,registerUser({commit}, user) {
            return fetch('http://localhost:3000/api/auth/register', {

                method: 'POST', headers: {
                    'Content-Type': 'application/json'
                }, body: JSON.stringify({
                    login: user.login,
                    password: user.password,
                    prenom: user.firstName,
                    nom: user.lastName,
                    email: user.email,
                    siret: user.siret,
                    nomEntreprise: user.companyName,
                    description: user.companyDescription,
                })
            })
                .then(response => response.json())
                .then(response => {
                    commit('setUser', "toto")
                    return response
                })
                .catch(error => console.error('Error:', error))
        }
        ,connexionUser({commit}, user) {
            return fetch('http://localhost:3000/api/auth/login', {

                method: 'POST', headers: {
                    'Content-Type': 'application/json'
                }, body: JSON.stringify(user)
            })
                .then(response => response.json())
                .then(response => {
                    commit('setUser', response)
                    localStorage.setItem('token', response.token)
                    localStorage.setItem('role', response.userRole)

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
        }
        ,deconnexionUser({commit}) {
            commit('clearUser')
            localStorage.removeItem('token')
            localStorage.removeItem('role')
            router.push({name: 'login'})
                .then(r => console.log(r))

        }
        ,getTarifs({commit}) {
            return fetch('http://localhost:3000/api/tarifs', {
                method: 'GET', headers: {
                    'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
                .then(response => response.json())
                .then(response => {
                    commit('setTarifs', response)
                })
                .catch(error => console.error('Error:', error))
        }
        ,validerPanier({commit}, panier) {
            return fetch('http://localhost:3000/api/achats/', {
                method: 'POST', headers: {
                    'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')
                }, body: JSON.stringify(panier)
            })
                .then(response => response.json())
                .then(response => {
                    response.forEach(achat => {
                        commit('addAchat', achat)
                    });
                    return response
                })
                .catch(error => console.error('Error:', error))
        }, getPrestataire({state, commit}) {
            return fetch('http://localhost:3000/api/infoPrestataires/' + state.user.userId, {
                method: 'GET', headers: {
                    'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
                .then(response => response.json())
                .then(response => {
                    commit('setPrestataire', response)
                })
        },
        getPrestataireById({commit}, id) {
            return fetch('http://localhost:3000/api/infoPrestataires/' + id, {
                method: 'GET', headers: {
                    'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
                .then(response => response.json())
                .then(response => {
                    commit('setPrestataire', response)
                })
        }
        ,togglePageMasque({state, commit}) {
            return fetch('http://localhost:3000/api/infoPrestataires/' + state.user.userId, {
                method: 'PUT', headers: {
                    'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')
                }, body: JSON.stringify({
                    pageMasque: !state.prestataire.pageMasque
                })
            }).then(response => response.json())
                .then(() => {
                    commit('setPrestataire', {
                        ...state.prestataire,
                        pageMasque: !state.prestataire.pageMasque
                    })
                });
        }
    },
    getters: {
        user: state => state.user,
        tarifs: state => state.tarifs,
        achats: state => state.achats,
        prestataire: state => state.prestataire,
    }
})
