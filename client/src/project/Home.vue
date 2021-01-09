<template lang="pug">
    include ../pug/utils/mixins
    v-container
        v-btn-toggle( v-model="toggle_multiple"
            dense
            background-color="primary"
            dark
            multiple)
            v-btn(to='/posts' ) Posts
            v-btn(to='/api' ) Api
            v-btn(to='/form') Form





</template>

<script>


export default {
    name: 'Home',
    data() {
        return {
            toggle_multiple: [0, 1, 2],
        }
    },

}

</script>
<style scoped
       lang="scss">


</style>
