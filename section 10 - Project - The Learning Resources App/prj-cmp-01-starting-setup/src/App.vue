<template>
    <div>
        <the-header :title="header"></the-header>
        <the-resources></the-resources>
    </div>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue'
import TheResources from './components/resources/TheResources.vue'

export default {
    components: {
        TheHeader,
        TheResources
    },
    data(){
        return{
            header: "Remember Me"
        }
    }
}
</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    * {
        box-sizing: border-box;
    }

    html {
        font-family: 'Roboto', sans-serif;
    }

    body {
     margin: 0;
    }
</style>