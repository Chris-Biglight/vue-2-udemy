<template>
    <button @click="login" v-if="!isLoggedIn">Login</button>
    <button @click="logout" v-else>Logout</button>
    <p> {{testAuth}} </p>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    computed: {
        ...mapGetters(['isLoggedIn', 'testAuth']),
        
    }, 
    methods: {
        ...mapActions(['login', 'logout'])
    }
    
}
</script>