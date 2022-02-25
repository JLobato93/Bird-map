import axios from "axios";

const state = {
    allBirds: [],
    filteredBirds: [],
    gierzwaluw: 0,
    boerenzwaluw: 0,
    huiszwaluw: 0,
    huismus: 0,
    spreeuw: 0,
    totalBirds: 0,
    checkedBirds: [
        'Gierzwaluw',
        'Boerenzwaluw',
        'Huiszwaluw',
        'Huismus',
        'Spreeuw'
    ]
}

const getters = {
    allBirds: state => state.allBirds,
    gierzwaluwenCount: state => state.gierzwaluw,
    boerenzwaluwenCount: state => state.boerenzwaluw,
    huiszwaluwenCount: state => state.huiszwaluw,
    huismussenCount: state => state.huismus,
    spreeuwenCount: state => state.spreeuw,
    totalBirdsCount: state => state.totalBirds
}

const actions = {
    async fetchBirds({commit}) {
        const {data} = await axios.get('https://maps.amsterdam.nl/open_geodata/geojson_lnglat.php?KAARTLAAG=VOGELS&THEMA=vogels')
        // Filter out the Vogels with value 'overig'
        data.features = data.features.filter(bird => {
            if (bird.properties.Vogel.toLowerCase() !== 'overig') {
                return bird
            }
        })
        commit('setBirds', data)
        commit('setTotalBirdsCount', data.features.length)
        commit('setGierzwaluwenCount', count(data.features, 'gierzwaluw'))
        commit('setBoerenzwaluwenCount', count(data.features, 'boerenzwaluw'))
        commit('setHuiszwaluwenCount', count(data.features, 'huiszwaluw'))
        commit('setHuismussenCount', count(data.features, 'huismus'))
        commit('setSpreeuwenCount', count(data.features, 'spreeuw'))
    },
    calculateTotalBirds({commit}, selectedBirds) {
        let total = 0;
        selectedBirds.forEach(bird => {
            total += state[bird.toLowerCase()]
        })
        commit('setTotalBirdsCount', total)
    },
    filterBirds({dispatch}) {
        state.filteredBirds = {...state.allBirds}
        state.filteredBirds.features = state.allBirds.features.filter(bird => {
            return state.checkedBirds.includes(bird.properties.Vogel)
        })
        dispatch('calculateTotalBirds', state.checkedBirds)
    }

}

const mutations = {
    setBirds: (state, birds) => (state.allBirds = birds),
    setGierzwaluwenCount: (state, total) => state.gierzwaluw = total,
    setBoerenzwaluwenCount: (state, total) => state.boerenzwaluw = total,
    setHuiszwaluwenCount: (state, total) => state.huiszwaluw = total,
    setHuismussenCount: (state, total) => state.huismus = total,
    setSpreeuwenCount: (state, total) => state.spreeuw = total,
    setTotalBirdsCount: (state, total) => state.totalBirds = total,
}
let count = (birds, type) => {
    return birds.filter(bird => {
        return bird.properties.Vogel.toLowerCase() === type
    }).length
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}