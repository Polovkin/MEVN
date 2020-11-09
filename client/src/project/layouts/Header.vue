<template lang="pug">
    header
        v-toolbar(color='indigo' dark fixed app)
            v-toolbar-side-icon(@click.stop='drawer = !drawer;')
            v-toolbar-title Application


</template>

<script>
export default {
    name: "Header"
}
</script>

<style lang="scss"
       scoped>

</style>
