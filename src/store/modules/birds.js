import axios from "axios";

const state = {
    birds: [
        initBirds('Gierzwaluw', 'Gierzwaluwen', '#43e2ce'),
        initBirds('Boerenzwaluw', 'Boerzwaluwen', '#0b379d'),
        initBirds('Huiszwaluw', 'Huiszwaluwen', '#ff7b00'),
        initBirds('Huismus', 'Huismussen', '#8f2f67'),
        initBirds('Spreeuw', 'Spreeuwen', '#008f06'),
    ],
    birdsGeoSet: [],
    filteredBirds: [],
    totalBirds: 0,
    checkedBirds: [

        'Boerenzwaluw',
        'Huiszwaluw',
        'Huismus',
        'Spreeuw'
    ]
}

const getters = {
    birdsGeoSet: state => state.birdsGeoSet,
    allBirds: state => state.birds,
    totalBirdsCount: state => state.totalBirds,
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
        commit('setBirdsCount', countBirds())
    },
    calculateTotalBirds({commit}) {
        let total = 0

        state.birds.forEach(bird => {
            if (bird.checked) total += bird.count
        })

        commit('setTotalBirds', total)
    }
}

const mutations = {
    setBirds: (state, birds) => (state.birdsGeoSet = birds),
    setBirdsCount: (state, birdTotals) => {
        state.birds.forEach(bird => {
            bird.count = birdTotals[bird.singularName]
        })
        state.totalBirds = birdTotals.totalBirds
    },
    setTotalBirds: (state, count) => state.totalBirds = count
}

let countBirds = () => {
    let birdTotals = {}

    state.birds.forEach(bird => birdTotals[bird.singularName] = count(bird.singularName))
    birdTotals.totalBirds = state.birdsGeoSet.features.length

    return birdTotals
}

function count(type) {
    return state.birdsGeoSet.features.filter(bird => {
        return bird.properties.Vogel === type
    }).length
}

function initBirds(singularName, pluralName, color) {
    return {
        singularName,
        pluralName,
        color,
        count: 0,
        checked: true
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}