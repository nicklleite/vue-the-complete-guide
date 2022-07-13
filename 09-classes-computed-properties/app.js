const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false
        }
    },
    computed: {
        boxAClasses() {
            return { active: this.boxASelected }
        }
    },
    watch: {},
    methods: {
        selectBox(box) {
            if (box.toUpperCase() === 'A') {
                this.boxASelected = !this.boxASelected;
            }

            if (box.toUpperCase() === 'B') {
                this.boxBSelected = !this.boxBSelected;
            }

            if (box.toUpperCase() === 'C') {
                this.boxCSelected = !this.boxCSelected;
            }
        }
    }
});

app.mount("#styling")