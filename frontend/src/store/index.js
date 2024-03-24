import Vue from 'vue'
import Vuex from 'vuex'
import router from "@/router";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null, tarifs: null, achats: null, prestataire: null, services: null, messages: null, billets: null,
        billetScanned: null, activites: null, users: null
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
            state.activites = null;
            state.users = null;


        }, setTarifs(state, tarifs) {
            state.tarifs = tarifs
        }, setAchats(state, achats) {
            state.achats = achats
        }, addAchat(state, achat) {
            state.achats.push(achat)
        }, setPrestataire(state, prestataire) {
            console.log("ici ca set les prestataires", prestataire)
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
        setUsers(state, users) {
            state.users = users
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
                    router.push({name: 'billeterie'}).then(r => console.log(r))
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
                        router.push({name: 'billeterie'})
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
            if (state.user !== null) {
                return fetch('http://localhost:3000/api/achats/user/' + state.user.userId, {
                    method: 'GET', headers: {
                        'Content-Type': 'application/json',  'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                })
                    .then((response) => {
                        return response.json()
                    })
                    .then(
                        (billets) => commit('setBillets', billets)
                    )
            } else {
                return null
            }
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
                    (billet) => {
                        if (billet !== null) {
                            commit('setBilletScanned', billet)
                        }
                        else {
                            commit('setBilletScanned', 'vide')
                        }
                    }
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
        }, getUser({state, commit}) {
            return fetch('http://localhost:3000/api/users/' + state.user.id, {
                method: 'GET', headers: {
                    'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
                .then(response => response.json())
                .then(response => {
                    commit('setUsers', response)
                })
        }, getUsers({commit}) {
            return fetch('http://localhost:3000/api/users/', {
                method: 'GET', headers: {
                    'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
                .then(response => response.json())
                .then(response => {
                    commit('setUsers', response)
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
        },
        updatePrestataire({dispatch}, prestataire) {
            return fetch('http://localhost:3000/api/infoPrestataires/' + prestataire.id.id, {
                method: 'PUT', headers: {
                    'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')
                }, body: JSON.stringify({
                    prestataire
                })
            }).then(response => response.json())
                .then(() => {
                    dispatch('getPrestataire')
                });
        },
        updateContenuPage({state, commit}, contenu) {
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

        getMessagesFromLivreDOrById({commit,dispatch}, id) {
            return dispatch('getPrestataireById',id)
                .then(
                    (result) => result.json()
                )
                .then((result) => {
                        console.log("allez stp")
                    return fetch('http://localhost:3000/api/livre-d-or/' + result.numeroSiret, {
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
                }
                )
        },
        addMessageOnLivreDOr({dispatch}, message) {
            return fetch('http://localhost:3000/api/livre-d-or/', {
                method: 'POST', headers: {
                    'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')
                }, body: JSON.stringify(
                    message
                )
            }).then(()=> {
                dispatch('getMessagesFromLivreDOr', message.prestataire)
                }
            )
        },
        getAllActivites({commit}) {
            return fetch('http://localhost:3000/api/activites', {
                method: 'GET', headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => {
                    return response.json()
                })
                .then(
                    (activites) => commit('setActivites', activites)
                )
        }
        ,
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
                        activites.forEach(activite => {
                            activite.heureDebut = activite.heureDebut.split('T')[0] + " " + activite.heureDebut.split('T')[1].split('.')[0];
                            activite.heureFin = activite.heureFin.split('T')[0] + " " + activite.heureFin.split('T')[1].split('.')[0];
                        })
                        commit('setActivites', activites)
                    }
                )
        },
        updateActivite({dispatch, state}, activite) {
            return fetch('http://localhost:3000/api/activites/' + activite.id, {
                method: 'PUT', headers: {
                    'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                body: JSON.stringify(
                    activite
                )

            })
                .then(
                    dispatch('getActivitesByPrestataire', state.user.userId))

        },
        deleteActivite({dispatch, state}, activite) {
            return fetch('http://localhost:3000/api/activites/' + activite.id, {
                method: 'DELETE', headers: {
                    'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
                .then(
                    dispatch('getActivitesByPrestataire', state.user.userId))

        },
        getAchats({commit}) {
            return fetch('http://localhost:3000/api/achats/', {
                method: 'GET', headers: {
                    'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
                .then(
                    (response) => {
                        return response.json()
                    })
                .then(
                    (achats) => {
                        commit('setAchats', achats)
                    })
        },
        getInfoPrestataire({commit}) {
            return fetch('http://localhost:3000/api/infoPrestataires/' , {
                method: 'GET', headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(
                (response) => {
                    return response.json()
                })
                .then(
                    (prestataire) => {
                        commit('setPrestataire', prestataire)
                    })
        },
        getInfoPrestataireById({commit}, id) {
            return fetch('http://localhost:3000/api/infoPrestataires/' + id, {
                method: 'GET', headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(
                    (response) => {
                        return response.json()
                    })
                .then(
                    (prestataire) => {
                        commit('setPrestataire', prestataire)
                    })
        },
        getActivitesByStand({commit}) {
            return fetch('http://localhost:3000/api/activites/stand/', {
                method: 'GET', headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(
                    (response) => {
                        return response.json()
                    })
                .then(
                    (activites) => {
                        commit('setActivites', activites)
                    })
        },
        addActivite({dispatch, state}, activite) {
            return fetch('http://localhost:3000/api/activites/', {
                method: 'POST', headers: {
                    'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                body: JSON.stringify(
                    activite)
            })
                .then(
                    dispatch('getActivitesByPrestataire', state.user.userId))
        },
        updateUser({dispatch}, user) {
            return fetch('http://localhost:3000/api/users/' + user.id.id, {
                method: 'PUT', headers: {
                    'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                body: JSON.stringify({roleId: user.roleId})
        }
        )
            .then(
                () => {
                    dispatch('getUsers')
                }
            )

        },


    }, getters: {
        user: state => state.user,
        tarifs: state => state.tarifs,
        achats: state => state.achats,
        prestataire: state => state.prestataire,
        services: state => state.services,
        messages: state => state.messages,
        billetScanned: state => state.billetScanned,
        activites: state => state.activites,
        billets: state => state.billets,
        users: state => state.users,
    }
})
