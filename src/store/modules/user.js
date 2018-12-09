const state = {
    user: window.localStorage.getItem('user')
};

const getters = {
    getUserStatus: state => !!state.user,
    getUser: state => JSON.parse(state.user)
};

//Mutations Must Be Synchronous
const mutations = {
    setUser: (state, currentUser) => {
        if (!currentUser) {
            state.user = null;
            window.localStorage.removeItem('user');
            return;
        }
        let theUser = JSON.stringify(currentUser);
        state.user = theUser;
        window.localStorage.setItem('user', theUser);
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