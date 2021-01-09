<template lang="pug">
    .container
        h1 Posts
        hr
        header.post-header
            h4 This file will list all the posts
            v-btn(to='/posts/new') new posts

        section( v-if="posts" )
            v-data-table.elevation-1(:headers='headers' :items='posts' :items-per-page='5')

        section( v-else )
            p
            | There are no posts ... Lets add one now!
            div
                router-link( :to="{ name: 'NewPost' }" )
                    | add new post
</template>

<script>


import {mapActions} from "vuex";

export default {
    name: 'Posts',
    data() {
        return {
            headers: [
                {
                    text: '#',
                    align: 'start',
                    sortable: false,
                    value: 'posts.index',
                },
                {text: 'Title', value: 'title'},
                {text: 'Description', value: 'description'},

            ],
        }
    },
    methods: {
        ...mapActions(['GET_POSTS', 'DELETE_POST']),
        async removePost(id) {
            await this.DELETE_POST(id)
            await this.GET_POSTS()
        }
    },
    computed: {
        posts() {
            return this.$store.state.data;
        }
    },
    mounted() {
        this.GET_POSTS()
    }
}
</script>
<style lang="scss">
.post-header {
    padding: 50px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
