import mapboxgl from "mapbox-gl";

const state = {
    map: {}
}

const actions = {
    createMap({commit}) {
        mapboxgl.accessToken = 'pk.eyJ1IjoiamxvY29zYW4iLCJhIjoiY2wwMTY1MTJtMHI0azNqdDFsdWZxbHd5eiJ9.8qyEz4gXWvJ60DoNWV40gw';
        let map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/dark-v10',
            center: [
                4.915277,
                52.361053
            ],
            zoom: 10
        });

        commit('setMap', map)
    },
    async loadMap({dispatch, rootGetters}) {
        await dispatch('createMap')

        state.map.on('load', () => {
            state.map.addSource('birds', {
                type: 'geojson',
                data: rootGetters["birds/allBirds"]
            });
            state.map.addLayer(
                {
                    id: 'bird-nestings',
                    type: 'circle',
                    source: 'birds',
                    paint: {
                        'circle-color': [
                            'match',
                            ['get', 'Vogel'],
                            'Gierzwaluw',
                            '#a500ff',
                            'Boerenzwaluw',
                            '#0057ff',
                            'Huiszwaluw',
                            '#ffe700',
                            'Huismus',
                            '#ff0000',
                            'Spreeuw',
                            '#00e30c',
                            '#ffffff'
                        ]
                    }
                },
            );
        });
    }
}

const mutations = {
    setMap: (state, map) => (state.map = map)
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}