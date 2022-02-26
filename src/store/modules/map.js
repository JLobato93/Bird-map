import mapboxgl from "mapbox-gl";

const state = {
    map: {},
    mapLoaded: false
}

const actions = {
    createMap({commit}) {
        mapboxgl.accessToken = process.env.VUE_APP_ACCESS_TOKEN;
        let map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/dark-v10',
            center: [
                4.915277,
                52.361053
            ],
            zoom: 12
        });

        commit('setMap', map)
    },
    async loadMap({dispatch, rootGetters}) {
        await dispatch('createMap')

        state.map.on('load', () => {
            state.map.addControl(new mapboxgl.NavigationControl())

            state.map.addSource('birds', {
                type: 'geojson',
                data: rootGetters["birds/birdsGeoSet"]
            });

            state.map.addLayer(
                {
                    id: 'breeding-grounds',
                    type: 'circle',
                    source: 'birds',
                    paint: {
                        'circle-color': [
                            'match',
                            ['get', 'Vogel'],
                            'Gierzwaluw',
                            '#43e2ce',
                            'Boerenzwaluw',
                            '#0b379d',
                            'Huiszwaluw',
                            '#ff7b00',
                            'Huismus',
                            '#8f2f67',
                            'Spreeuw',
                            '#008f06',
                            '#ffffff'
                        ],
                        'circle-opacity': 0.8
                    }
                },
            );
        });
    }
}

const mutations = {
    setMap: (state, map) => {
        state.map = map
        state.mapLoaded = true
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}