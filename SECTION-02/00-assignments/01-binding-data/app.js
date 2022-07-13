const app = Vue.createApp({
    data: function() {
        return {
            name: "Nicholas",
            age: 30,
            favoriteNumber: 0,
            randomImage: "https://api.lorem.space/image/game?w=150&h=220"
        }
    }
});

app.mount("#assignment");