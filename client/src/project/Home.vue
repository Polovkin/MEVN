<template lang="pug">
    include ../pug/utils/mixins
    section.container
        h1 home
        router-link(to='/posts') posts
        v-btn(color="primary" elevation="7") click


</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'

export default {
    name: 'Home',
    components: {},
    data() {
        return {}
    },

}
</script>
<style scoped
       lang="scss">


</style>
