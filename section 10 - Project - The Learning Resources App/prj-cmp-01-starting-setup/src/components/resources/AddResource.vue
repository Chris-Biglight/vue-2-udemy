<template>
    <base-card>
        <form @submit.prevent="submitHandler">
            <div class="form-control">
                <label for="title">Title</label>
                <input type="text" name="title" id="title" ref="titleInput" />
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea name="description" id="description" rows="3" ref="descriptionInput" />
            </div>
            <div class="form-control">
                <label for="link">Link</label>
                <input type="url" name="link" id="link" ref="linkInput" />
            </div>
            <div>
                <base-button type="submit" >Add Resource</base-button>
            </div>
        </form>
        <base-dialog v-if="!formDataIsValid" @close="confirmError">
            <template #header>
                <h2>There is a form error</h2>
            </template>
            <p>At least one error</p>
            <template #actions>
                <base-button @click="confirmError">Close</base-button>
            </template>
        </base-dialog>
    </base-card>
</template>

<script>
export default {
    data(){
        return{
            formDataIsValid: true
        }
    },

    inject: ['addResource'],

    methods: {
        submitHandler(){
            const enteredTitle = this.$refs.titleInput.value;
            const enteredDescription = this.$refs.descriptionInput.value;
            const enteredLink = this.$refs.linkInput.value;

            if(enteredTitle.trim() === ''|| enteredDescription.trim() === ''|| enteredLink.trim() === ''){
                this.formDataIsValid = false;

                return;
            }

            this.addResource(enteredTitle, enteredDescription, enteredLink)

        },

        confirmError(){
            this.formDataIsValid = true
        }
    }
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>