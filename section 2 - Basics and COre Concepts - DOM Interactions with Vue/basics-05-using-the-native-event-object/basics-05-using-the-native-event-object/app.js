const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastname: "",
      //fullname: ""
    };
  },
  watch: {
    counter(value, oldValue) {
      if (value > 30) {
        this.counter = 0 
      } 
    }
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
    outputFullName() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Davies"
    }
  },
  computed: {
    fullname() {
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastname
    }
  }
});

app.mount('#events');
