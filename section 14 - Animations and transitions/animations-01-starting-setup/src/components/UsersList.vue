<template>
        <transition-group tag="ul" name="user-list">
            <li v-for="user in users" :key="user" @click="removeUser(user)">{{user}}</li>
        </transition-group>
    <div>
        <input type="text" ref="userNameInput" />
        <button @click="addUser">Add User</button>
    </div>
</template>

<script>
export default {
    data(){
         return{
             users: ['Chris', 'Jess', 'Tom', 'Adam']
         }
    }, 
    methods: {
        addUser(){
            this.users.unshift(this.$refs.userNameInput.value)
        },
        removeUser(name){
            this.users = this.users.filter(usr => usr !== name)
        }
    }
}
</script>

<style scoped>
    ul{ 
        list-style: none;
        margin: 0;
        padding: 0;
        margin: 1rem 0;
    }

    li{
        border: 1px solid #ccc;
        padding: 1rem;
        text-align: center;
    }

    .user-list-enter-from{
        opacity: 0;
        transform: translateX(-50px);
    }

     .user-list-enter-active{
        transition: all 1s;
    }

    .user-list-enter-to{
        opacity: 1;
        transform: translateX(0);
    }

     .user-list-leave-from{
        opacity: 1;
        transform: translateX(0px);
    }

     .user-list-leave-active{
        transition: all 1s;
        position: absolute;
    }

    .user-list-leave-to{
        opacity: 0;
        transform: translateX(50px);
    }

    .user-list-move{
         transition: all 1s;
    }
</style>