<template>
    <li>
        <h3>{{fullname}}</h3>
        <h4>${{rate}}/hour</h4>

        <div>
            <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
        </div>

        <div class="actions">
            <base-button mode="outline" :to="coachContact">Contact</base-button>
            <base-button :to="coachDetails">View Details</base-button>
        </div>
        </li>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            default: ''
        },
        coach: {
            type: Object,
            default: () => {}
        },
        firstname: {
            type: String,
            default: ''
        }, 
        surname: {
            type: String,
            default: ''
        },
        areas: {
            type: Array,
            default: () => []
        },
        description: {
            type: String,
            default: ''
        },
        rate: {
            type: Number,
            default: 0
        }
    }, 
    computed: {
        fullname(){
            return this.firstname + ' ' + this.surname
        },
        coachContact(){
            return this.$route.path + '/' + this.id + "/contact"
        },
        coachDetails(){
            return this.$route.path + '/' +this.id
        }
    }
}
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>