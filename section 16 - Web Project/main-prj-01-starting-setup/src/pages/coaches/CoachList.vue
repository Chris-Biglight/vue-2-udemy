<template>
    <base-dialog :show="!!error" title="An Error Occurred" @close="handleError">
        <p>{{error}}</p>
    </base-dialog>
    <h2>Coaches List</h2>
    <section>
        <coach-filter @change-filter="setFilters"></coach-filter>
    </section>
    <section>
        <base-card>
            <div class="controls">
                <base-button isButton mode="outline" @click="loadCoaches(true)">Refresh</base-button>
                <base-button to="/register" v-if="!isCoach && !isLoading">Register as Coach</base-button>
            </div>
            <div v-if="isLoading">
                <base-spinner></base-spinner>
            </div>
            <ul v-else-if="hasCoaches">
                
                <coach-item v-for="coach in filteredCoaches" :key="coach.id" :id="coach.id" :firstname="coach.firstName" :surname="coach.lastName" :areas="coach.areas" :rate="coach.hourlyRate"></coach-item>  
            </ul> 
            <h3 v-else>No Coaches Found</h3>
        </base-card>
    </section>
</template>

<script>
import CoachFilter from '../../components/coaches/CoachFilter.vue'
import CoachItem from '../../components/coaches/CoachItem.vue'
// import {mapGetters} from 'vuex'

export default {
    components: { CoachItem, CoachFilter },
    data(){
        return{
            isLoading: false,
            error: null,
            activeFilters: {
                frontend: true,
                backend: true,
                career: true
            }
        }
    },
    computed: {
        filteredCoaches(){
            const coaches = this.$store.getters['coaches/coaches']
            console.log('coaches', coaches)
            return coaches.filter(coach => {
                if(this.activeFilters.frontend && coach.areas.includes('frontend')){
                    return true
                }
                 if(this.activeFilters.backend && coach.areas.includes('backend')){
                    return true
                }
                 if(this.activeFilters.career && coach.areas.includes('career')){
                    return true
                }

                return false
            })
        },
        hasCoaches(){
            return !this.isLoading && this.$store.getters['coaches/hasCoaches']
        }, 
        isCoach(){
            return this.$store.getters['coaches/isCoach']
        }
    
    },
    methods: {
        setFilters(updatedFilters){
            console.log('updatedFilters filters', updatedFilters)
            this.activeFilters = updatedFilters
        },
        async loadCoaches(refresh = false){
            this.isLoading = true;
            try{
                await this.$store.dispatch('coaches/loadCoaches', {forceRefresh: refresh })
            } catch (error){
                this.error = error.message || 'Something went wrong!'
            }
            this.isLoading = false;
        },
        handleError(){
            this.error = null;
        }
    },
    created(){
        this.loadCoaches();
    }
}
</script>

<style scoped>


ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>