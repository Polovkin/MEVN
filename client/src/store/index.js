import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        photo: null
    },
    mutations: {
        SET_IMAGES(s, data) {
            s.photo = data;
        }
    },
    actions: {
        GET_IMAGES_DATA: async ({commit}) => {
            try {
                axios.get('https://jsonplaceholder.typicode.com/photos')
                        .then((response) => {
                            if (response.status >= 200 && response.status < 400) {
                                commit('SET_IMAGES', response.data)
                            } else {
                                response.statusText
                            }
                        });
            } catch (e) {
                console.log(e);
                throw e
            }
        }
    },
    getters: {
        RETURN_SOME_IMAGES: (s) => {
            return s.photo ? s.photo.slice(0, 27) : []
        }
    },
    modules: {}
})
