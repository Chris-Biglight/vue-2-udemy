const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'chris',
                    name: 'Chris Davies',
                    phone: '000999000999',
                    email: 'chris@chris.com'
                },
                {
                    id: 'jess',
                    name: 'Jess Levy',
                    phone: '8123984792',
                    email: 'jess@jess.com'
                }
            ]
        }
    }
})

app.component('friend-contact', {
    template: `
    <li>
        <h2>{{friend.name}}</h2>
        <button @click="toggleDetails()">{{detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
        </ul>
    </li>
    `, 
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: 'jess',
                name: 'Jess Levy',
                phone: '8123984792',
                email: 'jess@jess.com'
            }
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount("#app")

