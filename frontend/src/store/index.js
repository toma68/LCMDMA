import Vue from 'vue'
import Vuex from 'vuex'
import router from "@/router";

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        user: null, tarifs: null, achats: null, prestataire: null, services: null, messages: null, billets: null,
        billetScanned: null, setActivites: null
    }, mutations: {
        setUser(state, user) {
            state.user = user
        }, logout(state) {
            state.user = null;
            state.tarifs = null;
            state.achats = null;
            state.prestataire = null;
            state.services = null;
            state.messages = null;
            state.billets = null;
            state.billetScanned = null;
            state.setActivites = null

        }, setTarifs(state, tarifs) {
            state.tarifs = tarifs
        }, setAchats(state, achats) {
            state.achats = achats
        }, addAchat(state, achat) {
            state.achats.push(achat)
        }, setPrestataire(state, prestataire) {
            state.prestataire = prestataire
        }, setServices(state, services) {
            state.services = services
        },
        setMessages(state, messages) {
            state.messages = messages
        },
        addMessage(state, message) {
            state.messages.push(message)
        },
        setBillets(state, billets) {
            state.billets = billets
        },
        setBilletScanned(state, billet) {
            state.billetScanned = billet
        },
        setActivites(state, activites) {
            state.activites = activites
        },
        trashCommit() {

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
        }, registerUser({commit}, user) {
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
        }, connexionUser({commit}, user) {
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
        }, deconnexionUser({commit}) {
            commit('logout')
            localStorage.removeItem('token')
            localStorage.removeItem('role')
            router.push({name: 'login'})
                .then(r => console.log(r))

        }, getTarifs({commit}) {
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
        },

        getBillets({commit, state}) {
            return fetch('http://localhost:3000/api/achats/user/' + state.user.userId, {
                method: 'GET', headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => {
                    return response.json()
                })
                .then(
                    (billets) => commit('setBillets', billets)
                )
        },
        getBilletAfterScan({commit}, qrCode) {
            return fetch('http://localhost:3000/api/achats/qrCode/' + qrCode, {
                method: 'GET', headers: {
                    'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
                .then((response) => {
                    return response.json()
                })
                .then(
                    (billet) => commit('setBilletScanned', billet)
                )
        },
        composterBillet({commit}, billet) {
            return fetch('http://localhost:3000/api/achats/' + billet.id, {
                method: 'PUT', headers: {
                    'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token'),
                }, body: JSON.stringify({
                    "quantite": billet.quantite - 1,
                })
            })
                .then((response) => {
                    return response.json()
                })
                .then(
                    () => commit('trashCommit')
                )

        }
        , validerPanier({dispatch}, panier) {
            return fetch('http://localhost:3000/api/achats/', {
                method: 'POST', headers: {
                    'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')
                }, body: JSON.stringify(panier)
            })
                .then(response => response.json())
                .then(response => {
                    response.forEach(() => {
                        dispatch('getBillets')
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
        }, getPrestataireById({commit}, id) {
            return fetch('http://localhost:3000/api/infoPrestataires/' + id, {
                method: 'GET', headers: {
                    'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
                .then(response => response.json())
                .then(response => {
                    commit('setPrestataire', response)
                })
        },
        togglePageMasque({state, commit}) {
            return fetch('http://localhost:3000/api/infoPrestataires/' + state.user.userId, {
                method: 'PUT', headers: {
                    'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')
                }, body: JSON.stringify({
                    pageMasque: !state.prestataire.pageMasque
                })
            }).then(response => response.json())
                .then(() => {
                    commit('setPrestataire', {
                        ...state.prestataire, pageMasque: !state.prestataire.pageMasque
                    })
                });
        }, updateContenuPage({state, commit}, contenu) {
            return fetch('http://localhost:3000/api/infoPrestataires/' + state.user.userId, {
                method: 'PUT', headers: {
                    'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')
                }, body: JSON.stringify({
                    contenuPage: contenu
                })
            }).then(response => response.json())
                .then(() => {
                    commit('setPrestataire', {
                        ...state.prestataire, contenuPage: contenu
                    })
                });
        }, getServices({state, commit}) {
            return fetch('http://localhost:3000/api/services', {
                method: 'GET', headers: {
                    'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }).then(response => response.json()).then(response => {
                response.forEach(service => {
                    state.prestataire.services.forEach(servicePrestataire => {
                        if (servicePrestataire.id === service.id) {
                            service.checked = true;
                        }
                    });
                })
                commit('setServices', response)
            })
        }, toggleService({state}, service) {
            return fetch('http://localhost:3000/api/services/' + state.user.userId, {
                method: 'PUT', headers: {
                    'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')
                }, body: JSON.stringify({
                    services: service.id, numeroSiret: state.prestataire.numeroSiret, bool: service.bool
                })
            })
        },
        getMessagesFromLivreDOr({commit}, siret) {
            return fetch('http://localhost:3000/api/livre-d-or/' + siret, {
                method: 'GET', headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => {
                    return response.json()
                })
                .then(
                    (messages) => commit('setMessages', messages)
                )
        },
        addMessageOnLivreDOr({commit}, message) {
            return fetch('http://localhost:3000/api/livre-d-or/', {
                method: 'POST', headers: {
                    'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')
                }, body: JSON.stringify(
                    message
                )
            }).then((response) => {
                return response.json()
            }).then((message) => {
                    commit('addMessage', message)
                }
            )
        },
        getActivitesByPrestataire({commit}, siret) {
            return fetch('http://localhost:3000/api/activites/prestataire/' + siret, {
                method: 'GET', headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => {
                    return response.json()
                })
                .then(
                    (activites) => {
                        commit('setActivites', activites)
                    }
                )
        },
        updateActivite({dispatch}, activite) {
            return fetch('http://localhost:3000/api/activites/' + activite.id, {
                method: 'GET', headers: {
                    'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                body: JSON.stringify(
                    activite
                )

            })
                .then(
                    dispatch('getActivitesByPrestataire', activite.siret))

        }
    }, getters: {
        user: state => state.user,
        tarifs: state => state.tarifs,
        achats: state => state.achats,
        prestataire: state => state.prestataire,
        services: state => state.services,
        messages: state => state.messages,
        billetScanned: state => state.billetScanned,
        activites: state => state.activites
    }
})
