Vue.createApp({
    data() {
        return {
            name: 'Chris Davies',
            age: 34,
            image: 'https://media.istockphoto.com/vectors/grunge-distressed-peace-sign-silhouette-make-love-not-war-vector-id470992448',
            value: "Input value"
        }
    },
    methods: {
        ageInFiveYears() {
            return this.age + 5;
        },
        randomNumber() {
            return Math.random();
        }
    }
}).mount('#assignment');