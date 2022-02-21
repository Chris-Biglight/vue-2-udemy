<template>
    <button @click="increment">Add mapAction Increment</button>
    <button @click="increase({value: 10})">Add mapAction Increase</button>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    methods: {
        ...mapActions('numbers', ['increase', 'increment'])
        // addOne(){
        //     // Two ways of committing with payloads
        //     // this.$store.commit('increase', {
        //     //     value: 2
        //     // })

        //     this.$store.dispatch({
        //         type: 'increase',
        //         value: 2
        //     })
        // }
    }
}
</script>