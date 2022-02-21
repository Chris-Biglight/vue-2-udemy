<template>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component" />
    </transition>
  </router-view>
  <!-- <div class="container">
    <users-list></users-list>
    </div>  


  <div class="container">
    <div class="block" :class="{animate: animatedBlock}"></div>
    <button @click="animateBlock">Animate</button>
  </div>

  <div class="container">
    <transition name="para" 
    @before-enter="beforeEnter" 
    @before-leave="beforeLeave" 
    @enter="enter" 
    @after-enter="afterEnter" 
    @leave="leave" 
    @after-leave="afterLeave"
    @enter-cancelled="cancelEnter"
    @leave-cancelled="cancelLeave">
      <p v-if="paraIsVisible">This is only visiable when buttons is clicked </p>
    </transition>
    <button @click="togglePara">Toggle P</button>
  </div>

  <div class="container">
    <transition name="fade-button" mode="out-in">
      <button @click="showUsers" v-if="!usersAreVisible">Show Users</button>
      <button @click="hideUsers" v-else>Hide Users</button>
    </transition>
  </div>

  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>

  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div> -->
</template>  

<script>
// import UsersList from './components/UsersList.vue';

export default {
  // components: {UsersList},
  data() {
    return { dialogIsVisible: false, animatedBlock: false, paraIsVisible: false, usersAreVisible: false, enterInterval: null, leaveInterval: null };
  },
  methods: {
    beforeEnter(el){
      console.log('before-enter')
      el.style.opacity = 0;
    },
    beforeLeave(el){
      console.log(el, 'before-leave')
    },
    enter(el, done){
      console.log('enter')
      let round = 1;
      this.enterInterval = setInterval(() => {
          el.style.opacity = round * 0.01;
          round++;

          if(round > 100){
            clearInterval(this.enterInterval)
            done()
          }
      }, 20)
    },
    leave(el, done){
      console.log(el, 'leave')
      let round = 1;
      this.leaveInterval = setInterval(() => {
          el.style.opacity = 1 - (round * 0.01);
          round++;

          if(round > 100){
            clearInterval(this.leaveInterval)
            done()
          }
      }, 20)
    },
    cancelEnter(el){
      console.log(el)
      clearInterval(this.enterInterval)
    },
    cancelLeave(el){
      console.log(el)
       clearInterval(this.leaveInterval)
    },
    afterEnter(el){
      console.log(el, 'after-enter')
    },
    afterLeave(el){
      console.log(el, 'after-leave')
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock(){
      this.animatedBlock = true;
    }, 
    togglePara(){
      this.paraIsVisible = !this.paraIsVisible
    },
    showUsers(){
      this.usersAreVisible = true
    },
    hideUsers(){
      this.usersAreVisible = false
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: all 1s ease-in-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}


.v-leave-to{
 /* opacity: 0;
  transform: translateY(-30px); */
}

/* .modal-enter-from{

} */

/* .modal-enter-active{
  animation: modal 1s;
}

.modal-enter-to{
  
}

.modal-leave-from{

}

.modal-leave-active{
  animation: modal 1s;
  
}

.modal-leave-to{
  
}

.animate{
  /* transform: translateX(-150px); */
  /* animation: slide-scale 2s ease-out forwards;
} */

.fade-button-enter-from, .fade-button-leave-to{
  opacity: 0;
}

.fade-button-enter-active, .fade-button-leave-active{
  transition: all 1s ease-out;
}

.fade-button-enter-to, .fade-button-leave-from{
  opacity: 1;
}

.route-enter-from{}
.route-enter-active{
  animation:  fade 1s;
}
.route-enter-to{}


.route-leave-from{}
.route-leave-from{
  animation:  fade 1s;
}
.route-leave-from{}

@keyframes modal {
  from{
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }

  to{
    opacity: 1;
    transform: translateX(0px) scale(1);
  }
} 

@keyframes fade {
  from{
    opacity: 0;
  }

  to{
    opacity: 1;
  }
}

@keyframes slide-scale{
  0%{
    transform: translateX(0) scale(1);
  }

  70%{
    transform: translateX(120px) scale(1.1);
  }

  100%{
    transform: translateX(-150px) scale(1);
  }
}
</style>