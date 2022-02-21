Vue.createApp({
    data() {
        return {
            resultValue: 0,
            resultString: ""
        }
    },
    methods: {
        add(num) {
            this.resultValue = this.resultValue + num
        }
    },
    computed: {
        result() {
            if (this.resultValue > 37) {
                this.resultString = "Too Much!";
            } else if (this.resultValue < 37) {
                this.resultString = "Not there yet!";
                
            } else {
                this.resultString = this.resultValue;
            }
            console.log(this.resultValue)
            return  this.resultString;
        }
    },
    watch: {
        resultValue() {
            const that = this;
            setTimeout(function () {
                that.resultValue = 0; 
            }, 5000)
        }
    }
}).mount('#assignment');