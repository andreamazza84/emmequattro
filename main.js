let app = new Vue({
    el: '#root',
    data: {
        menu: [
            {name :"home", color: "#bc0018"},
            {name: "azienda", color: "#f97000"},
            {name: "vernici", color: "#d6cc58"},
            {name: "marchi", color: "#02ba33"},
            {name: "servizi", color: "#5398e6"},
            {name: "contattaci", color: "#877ce1"}
        ],
        url: "assets/img/",
        cards: [
            {name: "azienda", img: "etienne-girardet-Xh6BpT-1tXo-unsplash.jpg"},
            {name: "vernici", img: "rhondak-native-florida-folk-artist-_Yc7OtfFn-0-unsplash.jpg"},
            {name: "marchi", img: "russn_fckr-krV5aS4jDjA-unsplash.jpg"},
            {name: "contattaci", img: "luca-bravo-9l_326FISzk-unsplash.jpg"},
        ],
        pointer: -1,
        filter: false,
    },
    computed: {},
    methods: {

    },
    created(){},
    mounted(){},
});