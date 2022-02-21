<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">Save</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  data(){
    return{
      savedChanges: false
    }
  },
  inject: ['users'],
  methods: {
    confirmInput(){
      this.$router.push('/teams');
    },
    saveChanges(){
      this.savedChanges = true
    }
  },

  beforeRouteLeave(to, from, next){
    if(this.savedChanges){
      next();
    } else {
      const userWantToLeave = confirm('Are you sure? You have unsaved changes!');
      next(userWantToLeave)
    }
  },

  beforeRouteEnter(to, from, next){
    console.log('user list component before route enter')
    console.log(to, from)
    next()
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>