import { createStore } from 'vuex'

export default createStore({
    state: {
        mailAdminFromVuex: ""
    },
    getters: {
        
    },
    mutations: {
        setMailAdminFromVuex(state, nouvelle_valeur) {
            state.mailAdminFromVuex = nouvelle_valeur;
        }
    },
    actions: {

    },
    modules: {

    }
})