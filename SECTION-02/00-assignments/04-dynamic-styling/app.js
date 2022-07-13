const app = Vue.createApp({
    data() {
        return {
            styleClass: '',
            visibility: true,
            styleColor: ''
        }
    },
    computed: {
        visibilityClass() {
            if (this.visibility) {
                return "visible";
            }

            return "hidden"
        }
    },
    watch: {},
    methods: {
        toggleVisibility() {
            this.visibility = !this.visibility
        }
    }
});

app.mount("#assignment");