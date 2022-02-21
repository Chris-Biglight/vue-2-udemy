Vue.createApp({
    data() {
        return {
            alertText: "This is an alert",
            userOutput: "",
            finalisedOutput: ""
        }
    },
    methods: {
        showAlert() {
            alert(this.alertText)
        },
        createOutput(e) {
            this.userOutput = e.currentTarget.value;
        },
        finaliseOutput(e) {
            this.finalisedOutput = e.currentTarget.value;;
        }
    }
}).mount('#assignment');