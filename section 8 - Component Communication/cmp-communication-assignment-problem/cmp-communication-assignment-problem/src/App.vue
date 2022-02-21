<template>
    <div class="users">
        <active-user :username="username" :age="age"></active-user>
        <user-data @updateUser="updateUser"></user-data>
    </div>
</template>

<script>
export default {
    data(){
        return{
            username: "Chris",
            age: 35
        }
    },
    methods: {
        updateUser(username, age) {
            this.username = username
            this.age = age
        }
    }
}
</script>

<style>
    .users{
        width: 70%;
        margin: auto;
        border: solid 1px grey;
        padding: 30px;
        border-radius: 10px;
        display: flex;
        justify-content: space-around;
    }

    .users > *{
        margin: 10px;
    }

    .users h2, .users h3{
        margin: 0;
    }

    .users form div{
        margin-bottom: 10px;
    }
    .users form div label{
        margin-right: 5px;
        display: inline-block;
        min-width: 100px;
    }

    
</style>