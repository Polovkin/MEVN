<template lang="pug">
    // Footer
    footer.page-footer.font-small.special-color-dark.pt-4
        // Footer Elements
        .container
            // Social buttons
            ul.list-unstyled.list-inline.text-center
                li.list-inline-item
                    a.btn-floating.btn-fb.mx-1
                        i.fab.fa-facebook-f
                li.list-inline-item
                    a.btn-floating.btn-tw.mx-1
                        i.fab.fa-twitter
                li.list-inline-item
                    a.btn-floating.btn-gplus.mx-1
                        i.fab.fa-google-plus-g
                li.list-inline-item
                    a.btn-floating.btn-li.mx-1
                        i.fab.fa-linkedin-in
                li.list-inline-item
                    a.btn-floating.btn-dribbble.mx-1
                        i.fab.fa-dribbble
            // Social buttons
            // Footer Elements
            // Copyright
            .footer-copyright.text-center.py-3
                | © 2020 Copyright:
                a(href='https://mdbootstrap.com/')  MDBootstrap.com
            // Copyright
    // Footer

</template>

<script>
export default {
    name: "footer.vue"
}
</script>

<style lang="scss"
       scoped>

</style>
