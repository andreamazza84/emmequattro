let app = new Vue({
    el: '#root',
    data: {
        menu: [
            { name: "home", color: "#bc0018" },
            { name: "azienda", color: "#f97000" },
            { name: "vernici", color: "#d6cc58" },
            { name: "marchi", color: "#02ba33" },
            { name: "servizi", color: "#5398e6" },
            { name: "contattaci", color: "#877ce1" }
        ],
        url: "dist/assets/img/",
        header_img: "slide_1.jpg",
        cards: [
            { name: "azienda", img: "etienne-girardet-Xh6BpT-1tXo-unsplash.jpg", visible: false },
            { name: "vernici", img: "rhondak-native-florida-folk-artist-_Yc7OtfFn-0-unsplash.jpg", visible: false },
            { name: "marchi", img: "russn_fckr-krV5aS4jDjA-unsplash.jpg", visible: false },
            { name: "contattaci", img: "luca-bravo-9l_326FISzk-unsplash.jpg", visible: false },
        ],
        card_map: [],
        pointer: -1,
        filter: false,
        appear: false,
    },
    computed: {},
    methods: {
        show: function(pointer){
            if (this.cards[pointer].visible === true){
                return this.cards[pointer].visible = false;
            }
            else{
                return this.cards[pointer].visible = true;
            }
        }
    },
    created() { },
    mounted() { },
});