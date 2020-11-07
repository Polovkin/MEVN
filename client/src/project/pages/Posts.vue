<template lang="pug">
    .container
        .row
            .col-12
                h1
                    | Posts
                header.d-flex.align-items-center.justify-content-between

                    h3
                        | This file will list all the posts
                    router-link(to='/posts/new') new posts

                section.panel.panel-success( v-if="posts" )
                    .panel-heading
                        | list of posts

                    table.table
                        thead.thead-dark
                            tr
                                th(scope='col') #
                                th(scope='col') Title
                                th(scope='col') Description
                                th(scope='col').text-center Action

                        tbody
                            tr( v-for="(post, index) in posts", :key="post._id" )
                                td #
                                td {{ post.title }}
                                td {{ post.description }}
                                td.d-flex.justify-content-end
                                    router-link(:to="`/posts/${post._id}`").btn.btn-primary edit
                                    button(@click="removePost(post._id)").btn.btn-danger.ml-1 delete

                section.panel.panel-danger( v-else )
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
