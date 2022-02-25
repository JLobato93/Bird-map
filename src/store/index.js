import Vuex from 'vuex'
import Vue from 'vue'
import map from './modules/map'
import birds from "./modules/birds";

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        map,
        birds
    }
})