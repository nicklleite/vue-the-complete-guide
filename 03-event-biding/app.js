const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: ''
        };
    },

    methods: {
        setName(e) {
            this.name = e.target.value
        },

        addToCounter(num) {
            this.counter = this.counter + num
        },

        subtractFromCounter(num) {
            this.counter = this.counter - num
        }
    }
});

app.mount('#events');
