const app = Vue.createApp({
  data() {
    return {
      addedTask: '',
      tasks: [],
      hidden: false
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.addedTask)
    },
    toggleHide() {
      this.hidden = !this.hidden
    }
  }
});

app.mount('#assignment');
