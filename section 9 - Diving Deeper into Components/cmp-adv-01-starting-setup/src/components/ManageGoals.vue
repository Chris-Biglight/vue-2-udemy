<template>
    <div>
        <h2>Manage Goals</h2>
        <input type="text" ref="goal" />
        <button @click="saveGoal">Set Goal</button>

        <teleport to="body">
            <error-alert v-if="!isInputValid">
                <h2>This is invalid!</h2>
                <p>Please enter at leaest a few characters...</p>
                <button @click="confirmError">Okay</button>
            </error-alert>
        </teleport>
    </div>
</template>

<script>
import ErrorAlert from "./ErrorAlert"

export default {
    components: {
        ErrorAlert
    },

    data(){
        return{
            isInputValid: true
        }
    },
    methods: {
        saveGoal(){
            const enteredValue = this.$refs.goal.value;

            if(enteredValue === ''){
                this.isInputValid = false
            }
        },
        confirmError(){
            this.isInputValid = true
        }
    }
}
</script>