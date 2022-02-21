const app = Vue.createApp({
    data() {
        return {
            boxAselected: false,
            boxBselected: false,
            boxCselected: false,
        }
    },
    methods: {
        boxSelected(box) {
            console.log(this.boxAselected)
            if (box === 'A') {
                this.boxAselected = !this.boxAselected;
            } else if (box === 'B') {
                this.boxBselected = !this.boxBselected;
            } else if (box === 'C') {
                this.boxCselected = !this.boxCselected;
                
            }
            
        }
    }, 
    computed: {
        boxAClasses() {
            return {
                active: this.boxAselected
            }
        }
    }

});

app.mount('#styling');