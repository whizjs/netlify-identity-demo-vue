const state = {
    user: window.localStorage.getItem('gotrue.user')
};

const getters = {
    getUserStatus: state => !!state.user,
    getUser: state => state.user
};

//Mutations Must Be Synchronous
const mutations = {
    setUser: (state, currentUser) => {
        state.user = currentUser
    }
};

const actions = {
    updateUser: ({ commit }, payload) => {
        commit('setUser', payload.currentUser)
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}