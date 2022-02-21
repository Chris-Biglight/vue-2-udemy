<template>
<section>
    <base-card>
        <h2>{{fullname}}</h2>
        <h3>${{rate}}/hour</h3>
    </base-card>
</section>
<section>
    <base-card>
        <header>
            <h2>Interested? Reach out not!</h2>
            <base-button :to="contactLink">Contact Coach</base-button>
        </header>
        <router-view></router-view>
    </base-card>
</section>
<base-card>
    <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
    <p>{{description}}</p>
</base-card>
    
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            default: ''
        }
    },
    data(){
        return this.selectedCoach = null;
    },
    created(){
        const coaches = this.$store.getters['coaches/coaches'];
        this.selectedCoach = coaches.find((coach) => coach.id === this.id)
    },
    computed: {
        fullname(){
            return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName
        }, 
        contactLink(){
            return this.$route.path + '/contact'
        },
        rate(){
            return this.selectedCoach.hourlyRate
        }, 
        description(){
            return this.selectedCoach.description
        }, 
        areas(){
            return this.selectedCoach.areas
        }
    }
}
</script>

