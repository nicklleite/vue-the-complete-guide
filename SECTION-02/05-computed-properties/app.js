const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: ''
        };
    },
    computed: {
        fullname() {
            console.log("Running Again!")
            if (this.name === '') {
                return ''
            }

            return this.name + ' ' + 'Leite'
        }
    },
    methods: {
        setName(event) {
            this.name = event.target.value
        },
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
        },
        resetInput() {
            this.name = ''
        }
    }
});

app.mount('#events');
