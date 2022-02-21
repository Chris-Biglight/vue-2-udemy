<template>
    <form @submit.prevent="submitForm">
        <div class="form-control" :class="{invalid: !email.isValid}">
            <label for="email">Your Email</label>
            <input type="email" id="email" name="email" v-model.trim="email.val">
            <p v-if="!email.isValid">Email address is invalid</p>
        </div>
        <div class="form-control" :class="{invalid: !message.isValid}">
            <label for="message">Your Message</label>
            <input type="textarea" id="message" name="message" row="5" v-model.trim="message.val">
            <p v-if="!message.isValid">Message is invalid</p>
        </div>
        <p v-if="!formIsValid">Please fix the errors above</p>
        <div class="actions">
            <base-button isButton>Send Message</base-button>
        </div>
    </form>
</template>

<script>
export default {
    emits: ['save-data'],
    data(){
        return{
            formIsValid: true,
            email: {
                val: '',
                isValid: true
            }, 
            message: {
                val: '',
                isValid: true
            }
        }
    },
    methods: {
        validateForm(){
            this.formIsValid = true;
            if(this.email.val === '' || !this.email.val.includes('@')){
                this.email.isValid = false;
                this.formIsValid = false
            }
            if(this.message.val === ''){
                this.message.isValid = false;
                this.formIsValid = false
            }
        }, 
        submitForm(){
            this.validateForm();

            if(!this.formIsValid){
                return;
            }

            const formData = {
                coachId: this.$route.params.id,
                email: this.email.val,
                message: this.message.val
            }

            this.$store.dispatch('requests/contactCoach', formData)

            this.$router.replace('/coaches')

            console.log(formData)
        }
    }
}
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>