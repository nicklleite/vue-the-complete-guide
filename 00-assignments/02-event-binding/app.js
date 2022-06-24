const app = Vue.createApp({
    data() {
        return {
            name: "",
            confirmedName: ""
        };
    },

    methods: {
        welcomeMessage() {
            alert("Welcome to the course!")
        },

        // ---------------------------------------

        setName(e) {
            this.name = e.target.value
        },

        // ---------------------------------------

        confirmName() {
            this.confirmedName = this.name
        }
    }
});

app.mount('#assignment');
