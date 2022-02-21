const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: ""
    };
  },

  methods: {
    confirmName() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert('sign up')
    },
    increment(num) {
      this.counter = this.counter + num;
    },
    decrement(num) {
      this.counter = this.counter - num;
    },
    setName(e, surname) {
      this.name = e.currentTarget.value + " " + surname;
    }
  }
});

app.mount('#events');
