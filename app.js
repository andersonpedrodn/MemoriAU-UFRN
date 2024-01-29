new Vue({
    el: '#app',
    data: {
        frase: ["Legado", "História", "Inovação", "Premiações"],
        indiceFrase: 0,
        },
    
    computed: {
        legado() {
            return this.frase[this.indiceFrase];
        }
    },
    
    mounted() {
        this.interval = setTimeout(() => {
            this.indiceFrase = (this.indiceFrase + 1) % this.frase.length;
            console.log("Novo indice") 
        }, 5000)
            
        },
        
    beforeDestroy() {
        clearInterval(this.interval)
    }
});