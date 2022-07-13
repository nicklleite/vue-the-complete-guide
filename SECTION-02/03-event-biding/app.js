const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            confirmedName: ''
        };
    },

    methods: {
        addToCounter(num) {
            this.counter = this.counter + num
        },
        subtractFromCounter(num) {
            this.counter = this.counter - num
        },
        setName(e) {
            this.name = e.target.value
        },
        submitForm() {
            alert('Submitted!');
        },
        confirmName() {
            this.confirmedName = this.name
        }
    }
});

app.mount('#events');
