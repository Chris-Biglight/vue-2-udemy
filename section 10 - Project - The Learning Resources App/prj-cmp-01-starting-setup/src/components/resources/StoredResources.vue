<template>
   <ul>
      <learning-resource v-for="resource in resources" :key="resource.id" :data="resource"></learning-resource>
    </ul>
</template>

<script>
import LearningResource from './LearningResource'

export default {
  components: {
    LearningResource
  },
  inject: ['resources']
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>