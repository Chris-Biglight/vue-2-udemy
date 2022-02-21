<template> 
    <base-dialog :show="!!error" title="An Error Occurred" @close="handleError">
        <p>{{error}}</p>
    </base-dialog>
    <section>
        <base-card>
        <header>
            <h2>Requests Received</h2>
        </header>
        <base-spinner v-if="isLoading"></base-spinner>
        <ul v-else-if="!isLoading && hasRequests">
            <request-item v-for="request in receievedRequests" :key="request.id" :email="request.userEmail" :message="request.message"></request-item>
        </ul>
        <h3 v-else>You haven't receieved any requests yet</h3>
        {{requests}}
        </base-card>
    </section>
   
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue'
export default {
    components: {
        RequestItem
    },
    data() {
        return{
            isLoading: false,
            error: null
        }
    },
    computed: {
        receievedRequests(){
            const requests = this.$store.getters['requests/getRequests']
    console.log('requests', requests)
            return requests
        },

        hasRequests(){
            return this.$store.getters['requests/hasRequests']
        }
    },

    methods: {
        async loadRequests() {
            this.isLoading = true;
            try{
                await this.$store.dispatch('requests/fecthRequests')
            } catch (error){
                this.error = error.message || 'Something failed'
            }
            
            this.isLoading = false;
        },
        handleError(){
            this.error = null;
        }
    },

    created(){
        this.loadRequests()
    }
}
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>