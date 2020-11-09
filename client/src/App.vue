<template lang="pug">
    #app
        v-app
            component(:is="layout")
                router-view
</template>
<script>


import Base from "./project/layouts/Base";
import Home from "./project/Home";

export default {
    name: 'App',
    components: {Home, Base},
    computed: {
        layout() {
            return this.$route.meta.layout === 'main' ? 'Base' : ''
        }
    }

}
</script>
<style lang="scss">
#app {
    height: 100vh;

}

</style>
