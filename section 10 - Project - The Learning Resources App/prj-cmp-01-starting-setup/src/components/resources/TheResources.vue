<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')" :mode="storedResourcesButton">Stored Resources</base-button>
        <base-button @click="setSelectedTab('add-resource')" :mode="addResourceButton">Add Resources</base-button>
        <keep-alive>
            <component :is="selectedTab"></component>
        </keep-alive>
    </base-card>
</template>

<script>
import StoredResources from './StoredResources.vue'
import AddResource from './AddResource.vue'

export default {
    components: {
        StoredResources,
        AddResource
    },
    props: {
        resources: {
            type: Array,
            default: () => []
        }
    },

    data(){
        return{
            selectedTab: 'stored-resources',
            storedResources: [{
                id: 'official-guide', 
                title: 'Official Guide', 
                description: 'The official VUE JS Documentation', 
                link: 'https://vuejs.org'
            },{
                id: 'google', 
                title: 'Goole', 
                description: 'You gotta Google', 
                link: 'https://google.com'
            }]
        }
    },

    computed: {
            storedResourcesButton(){
                return this.selectedTab === 'stored-resources' ? null : 'flat';
            },
            addResourceButton(){
                return this.selectedTab === 'add-resource' ? null : 'flat';
            } 
        
    },

    provide(){
        return{
            resources: this.storedResources,
            addResource: this.addResource,
            removeResource: this.removeResource
        }
    },

    methods: {
        setSelectedTab(tab){
            this.selectedTab = tab
        },
        addResource(title, description, url){
            const newResource = {
                id: new Date().toISOString(),
                title: title,
                description: description,
                link: url
            }

            this.storedResources.unshift(newResource);
            this.setSelectedTab('stored-resources')
        },
        removeResource(id){
            const resIndex = this.storedResources.findIndex(res => res.id === id);
            this.storedResources.splice(resIndex, 1);
        }
    }
}
</script>