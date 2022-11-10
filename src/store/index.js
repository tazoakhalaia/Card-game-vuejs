import { createStore } from 'vuex'

export default createStore({
    state: {
        saxeli: ""
    },
    mutations: {
        changeValue(state, playload){
            state.saxeli = playload.value
        }
    }
})