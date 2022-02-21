<template>
    <form @submit.prevent="updateUser">
        <div>
            <label for="username">Username</label>
            <input type="text" name="username" v-model="username" />
        </div>

        <div>
            <label for="age">Age</label>
            <input type="number" name="age" v-model="age" />
        </div>

        <button>Update User</button>
    </form>
</template>

<script>
export default {
    data(){
        return{
            // updatedUser: {
            //     username: "",
            //     age: null
            // }
            username: "",
            age: null
            
        }
    },

    emits: ['update-user'],

    methods: {
        updateUser(){
            this.$emit('update-user', this.username, this.age)
        }
    }
}
</script>