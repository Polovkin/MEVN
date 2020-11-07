<template lang="pug">
    section.container
        h1
            | Edit post
        form(@submit.prevent="editPost()"  v-if="onePost")
            .form-group
                label(for='exampleInputEmail1') Email address
                    input#exampleInputEmail1.form-control(type='text' aria-describedby='emailHelp' placeholder="Title" v-model.trim="post.title" )
                    small#emailHelp.form-text.text-muted We'll never share your email with anyone else.
            .form-group
                label(for='exampleInputPassword1') Password
                input#exampleInputPassword1.form-control(type='text' placeholder='Description'  v-model.trim="post.description" )
            button.btn.btn-primary(type='submit' name="editPost" ) edit post
        div
            router-link( :to="{ name: 'Posts' }" )
                | go to list of posts


</template>

<script>

import {mapActions, mapState} from "vuex";

export default {
    name: 'EditPostPage',
    data() {
        return {
            post: {
                title: '',
                description: ''
            }
        }
    },


    methods: {
        ...mapActions(['GET_POST', 'UPDATED_POST']),
        async editPost() {
            const data = {
                title: this.post.title,
                description: this.post.description,
                id: this.$route.params.id
            }

             this.UPDATED_POST(data).then(() => {
                this.$router.push({name: 'Posts'})
            });


        }
    },
    computed: {
        onePost() {
            return this.$store.state.onePost;
        }
    },
    created() {
        let params = {id: this.$route.params.id}
        this.GET_POST(params).then(() => {
            this.post.title = this.$store.state.onePost.title
            this.post.description = this.$store.state.onePost.description
        })
    },
    mounted() {

    }
}
</script>
