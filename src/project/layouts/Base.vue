<template lang="pug">
    div
        Header
        router-view
        Footer
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";

export default {
    name: "Base",
    components: {Footer, Header}
}
</script>

<style scoped>

</style>
