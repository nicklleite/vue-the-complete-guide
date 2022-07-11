const app = Vue.createApp({
    data() {
        return {
            result: 0,
            limit: 37
        };
    },
    watch: {
        result(value) {
            console.log(value)
            if (value > this.limit) {
                const t = this

                setTimeout(function() {
                    t.result = 0
                }, 5000)
            }
        }
    },
    computed: {
        output() {
            if (this.result < this.limit) {
                return "Not there yet!"
            }

            if (this.result > this.limit) {
                return "Too much!"
            }

            return this.result
        }
    },
    methods: {
        add(e, num) {
            this.result = this.result + num
        }
    }
});

app.mount('#assignment');
