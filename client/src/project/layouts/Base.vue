<template lang="pug">
    div.base
        Header
        router-view.main
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
.base {
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}
.main {
    padding-top: 200px;
    min-height: 100vh;
}
</style>
