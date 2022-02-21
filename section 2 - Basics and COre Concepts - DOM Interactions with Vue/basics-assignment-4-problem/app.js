Vue.createApp({
    data() {
        return {
            userInput: "",
            visibility: true,
            backgroundColor: ""
        }
    },
    methods: {
        toggleParagraph() {
            this.visibility = !this.visibility
        },
        setUserBackgroundColour(e) {
            this.backgroundColor = e.currentTarget.value;
            console.log(this.backgroundColor)
        }
    }, 
    computed: {
        userInputClasses() {
            return {
                user1: this.userInput == "user1",
                user2 : this.userInput == "user2"
            }
        },
        visibleClasses() {
            return {
                visible: this.visibility,
                hidden: !this.visibility
            }
        },
        userBackgroundColour(){
            return "backgroundColor: " + this.backgroundColor;
        }
       
    }
}).mount('#assignment')