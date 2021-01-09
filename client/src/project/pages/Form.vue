<template lang="pug">
    .container
        form
            v-text-field(
                v-model='name',
                :error-messages='nameErrors',
                :counter='maxLengthCounter' ,
                label='Name', required='',
                @input='$v.name.$touch()' ,
                @blur='$v.name.$touch()')
            v-text-field(
                v-model='email',
                :error-messages='emailErrors',
                label='E-mail' ,
                required='' ,
                @input='$v.email.$touch()',
                @blur='$v.email.$touch()')
            v-select(
                v-model='select',
                :items='items' ,
                :error-messages='selectErrors',
                label='Item' ,
                required='' ,
                @change='$v.select.$touch()',
                @blur='$v.select.$touch()')
            v-checkbox(
                v-model='checkbox' ,
                :error-messages='checkboxErrors' ,
                label='Do you agree?',
                required='',
                @change='$v.checkbox.$touch()',
                @blur='$v.checkbox.$touch()')
            v-btn.mr-4(
                @click='submit'
                :disabled="!valid"
                :color="!valid ? '':'light-blue'" )
                | submit
            v-btn(@click='clear')
                | clear
</template>

<script>
import {validationMixin} from 'vuelidate'
import {required, maxLength, email} from 'vuelidate/lib/validators'

export default {
    name: "Form",
    mixins: [validationMixin],

    validations: {
        name: {required, maxLength: maxLength(4)},
        email: {required, email},
        select: {required},
        checkbox: {
            checked(val) {
                return val
            },
        },
    },

    data: () => ({
        name: '',
        email: '',
        select: null,
        items: [
            'Item 1',
            'Item 2',
            'Item 3',
            'Item 4',
        ],
        checkbox: false,
        maxLengthCounter: 4,
    }),
    methods: {
        submit() {
            this.$v.$touch()
            console.log(!this.$v.$invalid);
        },
        clear() {
            this.$v.$reset()
            this.name = ''
            this.email = ''
            this.select = null
            this.checkbox = false
        },
    },
    computed: {
        valid() {
            return !this.$v.$invalid
        },
        checkboxErrors() {
            const errors = []
            if (!this.$v.checkbox.$dirty) return errors
            !this.$v.checkbox.checked && errors.push('You must agree to continue!')
            return errors
        },
        selectErrors() {
            const errors = []
            if (!this.$v.select.$dirty) return errors
            !this.$v.select.required && errors.push('Item is required')
            return errors
        },
        nameErrors() {
            const errors = []
            if (!this.$v.name.$dirty) return errors
            !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
            !this.$v.name.required && errors.push('Name is required.')
            return errors
        },
        emailErrors() {
            const errors = []
            if (!this.$v.email.$dirty) return errors
            !this.$v.email.email && errors.push('Must be valid e-mail')
            !this.$v.email.required && errors.push('E-mail is required')
            return errors
        },
    },

}
</script>

<style scoped>

</style>
