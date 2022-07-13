const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false
        }
    },
    computed: {},
    watch: {},
    methods: {
        selectBox(box) {
            if (box.toUpperCase() === 'A') {
                this.boxASelected = true;
            }

            if (box.toUpperCase() === 'B') {
                this.boxBSelected = true;
            }

            if (box.toUpperCase() === 'C') {
                this.boxCSelected = true;
            }
        }
    }
});

app.mount("#styling")