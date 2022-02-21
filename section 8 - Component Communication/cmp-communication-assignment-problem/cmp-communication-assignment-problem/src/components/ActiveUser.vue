<template>
    <div>
        <h2>{{username}}</h2>
        <h3>{{age}}</h3>
    </div>
</template>

<script>
export default {
    props: {
        username: {
            type: String,
            default: ""
        },
        age: {
            type: Number,
            default: null
        }
    }, 

}
</script>