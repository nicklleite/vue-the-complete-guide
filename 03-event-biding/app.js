const app = Vue.createApp({
    data() {
        return {
            counter: 0
        };
    },

    methods: {
        addToCounter(num) {
            this.counter = this.counter + num
        },

        subtractFromCounter(num) {
            this.counter = this.counter - num
        }
    }
});

app.mount('#events');
