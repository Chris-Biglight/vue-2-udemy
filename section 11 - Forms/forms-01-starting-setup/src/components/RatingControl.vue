<template>
    <ul>
        <li @click="setActiveButton('Poor')" :class="{active: modelValue === 'Poor'}"><button type="button">Poor</button></li>
        <li @click="setActiveButton('Average')" :class="{active: modelValue === 'Average'}"><button type="button">Average</button></li>
        <li @click="setActiveButton('Great')" :class="{active: modelValue === 'Great'}"><button type="button">Great</button></li>
    </ul>
</template>

<script>
export default {
    props: ['modelValue'],
    emit: ['update:modelValue'],
    // data(){
    //     return{
    //         activeButton: this.modelValue
    //     }
    // },

    // compouted:{
    //     activeOption(){
    //         return this.modelValue
    //     }
    // },

    methods: {
        setActiveButton(button){

            this.$emit('update:modelValue', button)
        }
    }
}
</script>

<style scoped>
.active{
    border-color: purple;
}
.active button{
    color: purple;
}
ul{
    list-style: none;
    display: flex;
    margin: 0.5rem 0;
    padding: 0;

}

li{
    margin: 0 1rem;
    border: solid 1px #ccc;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

button{
     font: inherit;
     border: none;
     background: transparent;
     cursor: pointer;
}
</style>