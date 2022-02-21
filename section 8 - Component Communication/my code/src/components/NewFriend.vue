<template>
    <form @submit.prevent="submitData">
        <div>
            <label for="name">Name</label>
            <input type="text" name="name" v-model="friend.name" />
        </div>

        <div>
            <label for="phone">Phone</label>
            <input type="tel" name="phone" v-model="friend.phone" />
        </div>

        <div>
            <label for="email">Email</label>
            <input type="email" name="email" v-model="friend.email" />
        </div>
        
        <div>
            <label for="isFavourite">Favourite?</label>
            <input type="checkbox" name="isFavourite" v-model="friend.isFavourite" />
        </div>

        <button>Add New Friend</button>
    </form>
</template>

<script>
export default {

    data() {
        return{
            friend: {
                id: 1,
                name: '',
                phone: '',
                email: '',
                isFavourite: false
            }
        }
    },

    emits: ['add-new-friend'],

    methods: {
        submitData(){
            this.$emit('add-new-friend', this.friend);
            //this.clearFormData()
        },
        clearFormData(){
            this.friend.id += this.friend.id;
            this.friend.name = '';
            this.friend.phone = '';
            this.friend.email = '';
            this.friend.isFavourite = false
        }
    }
    
}
</script>