import Vue from 'vue'
import Vuex from 'vuex'
import PostsService from '@/services/PostsService'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        data: null,
        onePost: null,
    },
    mutations: {
        SET_API_DATA(s, data) {
            s.data = data.posts
        },
        SET_POST_DATA(s, data) {
            s.onePost = data
        },
    },
    actions: {
        async GET_POSTS({commit}) {
            try {
                const response = await PostsService.fetchPosts()
                if (response.status >= 200 && response.status < 400) {
                    commit('SET_API_DATA', response.data)
                } else {
                    console.log(response.statusText);
                }

            } catch (e) {
                console.log(e);
                throw e
            }
        },
        async GET_POST({commit}, data) {
            try {
                const response = await PostsService.getPost(data)
                if (response.status >= 200 && response.status < 400) {
                    commit('SET_POST_DATA', response.data)
                } else {
                    console.log(response.statusText);
                }

            } catch (e) {
                console.log(e);
                throw e
            }
        },
        async ADD_POST({}, data) {
            try {
                await PostsService.addNewPost({
                    title: data.title,
                    description: data.description
                })

            } catch (e) {
                console.log(e);
                throw e
            }
        },
        async UPDATED_POST({}, data) {
            try {
                const response = await PostsService.updatePost({
                    title: data.title,
                    description: data.description,
                    id: data.id
                })
                return response.status >= 200 && response.status < 400;


            } catch (e) {
                console.log(e);
                throw e
            }
        },
        async DELETE_POST({commit}, id) {
            try {
              await PostsService.deletePost(id)

            } catch (e) {
                console.log(e);
                throw e
            }
        },
    },
    getters: {},
    modules: {}
})
