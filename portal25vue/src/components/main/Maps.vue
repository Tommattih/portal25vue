<template>
  <div id="maps">
    <mapsView />
  </div>
</template>

<script>
import mapsView from '../../views/MapsView.vue'
export default {
  name: 'MapsDirections',
  data() {
    return {
      h3: 'top'
    }
  },
  components: { mapsView }
}
</script>

<style>
/* ta ao contrario a lógica de importação
/*ñ é estilo é nota
<div class="box">
                    <div class="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1787.8994050230262!2d-46.778048990577396!3d-23.4400447481186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cefcf9ff046bed%3A0xbba599a8eb55ab4!2sAlameda%20Aristotenes%20Claudio%20Sbrigh%2C%20923%20-%20Vila%20Jaragu%C3%A1%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005282-000!5e1!3m2!1spt-BR!2sbr!4v1622959672281!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                    <div class="text">
                        <h3>Pontos de referência</h3>
                        <p>SP-021, Rodoanel Mario Covas</p>
                        <p>Cemitério do Jaraguá</p>
                        <p>BR-050, Parque São Domingos</p>
                        <p>KM-24, Rodovia Anhanguera</p>
                        <p>Nas proximidades do Pico do Jaraguá</p>
                        <p>Terminal Jardim Britânia</p>
                        
                        <h3>Transporte Público</h3>
                        <p>Se você não tem carro, não tem problema, também é possível chegar de ônibus. </strong>Estas são algumas das opções mais próximas ao loteamento:</strong></p>
                        <p><strong>-> </strong> Ponto de parada, Al. Aristóteles Claudio Sbrighi, 20 / Final</p>
                        <p>Linha 8040-10 Lapa / Sol Nascente<a href="https://moovitapp.com/index/pt-br/transporte_p%C3%BAblico-line-8040_10-Sao_Paulo-242-10224-611285-0">(Detalhes)</a>.</p>
                        <p>Linha 1019-10 Terminal Pirituba / Sol Nascente <a href="https://moovitapp.com/sao_paulo-242/lines/1019-10/577477/2253663/pt-br?customerId=4908&ref=2&poiType=line">(Detalhes)</a>.</p>
                        
                        <p><strong>Outras linhas nas proximidades</strong> <br><strong>-> </strong> Ponto de parada, BR-050, 1572 (+15min a pé)</p>
                        <p>Linha 119L-10 Term. Lapa / Vl. Sulina <a href="https://moovitapp.com/sao_paulo-242/lines/119L-10/181322/4542097/pt-br?customerId=4908&ref=1&poiType=stop">(Detalhes)</a>.</p>
                        <p>Linha 8013-10 Lapa / Term. Jardim Britânia <a href="https://moovitapp.com/sao_paulo-242/lines/8013-10/698434/2963017/pt-br?customerId=4908&ref=1&poiType=stop">(Detalhes)</a>.</p>
                        <p>Linha 8050-10 Lapa / Pq. Morro Doce <a href="https://moovitapp.com/sao_paulo-242/lines/8050-10/182336/564298/pt-br?customerId=4908&ref=1&poiType=stop">(Detalhes)</a>.</p>
                        <p>Linha 8050-31 Lapa / Pq. Morro Doce <a href="https://moovitapp.com/sao_paulo-242/lines/8050-31/25111644/4542057/pt-br?customerId=4908&ref=1&poiType=stop">(Detalhes)</a>.</p>
                        <p>Linha 8055-10 Lapa / Perus <a href="https://moovitapp.com/sao_paulo-242/lines/8055-10/182340/564304/pt-br?customerId=4908&ref=1&poiType=stop">(Detalhes)</a>.</p>
                        <p>Linha 8055-51 Metrô Barra Funda / Perus <a href="https://moovitapp.com/sao_paulo-242/lines/8055-51/505434/1893702/pt-br?customerId=4908&ref=1&poiType=stop">(Detalhes)</a>.</p>
                        <p>Linha 8622-10 Pça. Ramos de Azevedo / Morro Doce <a href="https://moovitapp.com/sao_paulo-242/lines/8622-10/505490/1893799/pt-br?customerId=4908&ref=1&poiType=stop">(Detalhes)</a>.</p>
                    </div>
                </div>
            </section>

            ////talk baloon
            //html
            <section class="semicircle"></section> 
            ///css
            .semicircle {
  position: relative;
  background: #2c3e50;
  height: 50vh;
}

.semicircle::before {
  position: absolute;
  content: '';
  left: 13%;
  z-index: 10;
  width: 41px;
  height: 241px;
  border-radius: 50%;
  background: inherit;
  transform: translateX(-50%) translateY(11%);
  bottom: 0px;
}

bg-dots
       @keyframes move {
    100% {
        transform: translate3d(0, 0, 1px) rotate(360deg);
    }
}

.background {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: #0a0523;
    overflow: hidden;
}

.background span {
    width: 3vmin;
    height: 3vmin;
    border-radius: 3vmin;
    backface-visibility: hidden;
    position: absolute;
    animation: move;
    animation-duration: 38;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}


.background span:nth-child(0) {
    color: #ffb3fc;
    top: 24%;
    left: 72%;
    animation-duration: 11s;
    animation-delay: -117s;
    transform-origin: 15vw 16vh;
    box-shadow: -6vmin 0 1.1696823179816482vmin currentColor;
}
.background span:nth-child(1) {
    color: #2c3868;
    top: 66%;
    left: 94%;
    animation-duration: 65s;
    animation-delay: -49s;
    transform-origin: -15vw 2vh;
    box-shadow: 6vmin 0 1.6218102544251878vmin currentColor;
}
.background span:nth-child(2) {
    color: #2c3868;
    top: 3%;
    left: 24%;
    animation-duration: 84s;
    animation-delay: -16s;
    transform-origin: -20vw 6vh;
    box-shadow: 6vmin 0 0.8284818605431739vmin currentColor;
}
.background span:nth-child(3) {
    color: #2c3868;
    top: 65%;
    left: 43%;
    animation-duration: 25s;
    animation-delay: -111s;
    transform-origin: -6vw -19vh;
    box-shadow: 6vmin 0 1.2936857678500386vmin currentColor;
}
.background span:nth-child(4) {
    color: #8ad8ff;
    top: 44%;
    left: 54%;
    animation-duration: 106s;
    animation-delay: -117s;
    transform-origin: 25vw 21vh;
    box-shadow: 6vmin 0 1.5464262798056176vmin currentColor;
}
.background span:nth-child(5) {
    color: #ffb3fc;
    top: 91%;
    left: 6%;
    animation-duration: 100s;
    animation-delay: -79s;
    transform-origin: 16vw -17vh;
    box-shadow: 6vmin 0 1.1182094411099917vmin currentColor;
}
.background span:nth-child(6) {
    color: #ffffff;
    top: 6%;
    left: 4%;
    animation-duration: 24s;
    animation-delay: -46s;
    transform-origin: 22vw -5vh;
    box-shadow: 6vmin 0 0.9177857214587177vmin currentColor;
}
.background span:nth-child(7) {
    color: #ffb3fc;
    top: 1%;
    left: 77%;
    animation-duration: 97s;
    animation-delay: -61s;
    transform-origin: -8vw 17vh;
    box-shadow: 6vmin 0 0.9480234020546929vmin currentColor;
}
.background span:nth-child(8) {
    color: #ffb3fc;
    top: 94%;
    left: 68%;
    animation-duration: 32s;
    animation-delay: -91s;
    transform-origin: 20vw -15vh;
    box-shadow: 6vmin 0 0.8417395188520402vmin currentColor;
}
.background span:nth-child(9) {
    color: #8ad8ff;
    top: 45%;
    left: 82%;
    animation-duration: 26s;
    animation-delay: -99s;
    transform-origin: -5vw -8vh;
    box-shadow: -6vmin 0 1.2587213156444061vmin currentColor;
}
.background span:nth-child(10) {
    color: #ffb3fc;
    top: 98%;
    left: 63%;
    animation-duration: 20s;
    animation-delay: -5s;
    transform-origin: -5vw 15vh;
    box-shadow: 6vmin 0 1.1405472459437205vmin currentColor;
}
.background span:nth-child(11) {
    color: #ffb3fc;
    top: 49%;
    left: 12%;
    animation-duration: 11s;
    animation-delay: -43s;
    transform-origin: -19vw -21vh;
    box-shadow: 6vmin 0 1.390462598585503vmin currentColor;
}
.background span:nth-child(12) {
    color: #ffb3fc;
    top: 100%;
    left: 18%;
    animation-duration: 68s;
    animation-delay: -67s;
    transform-origin: 6vw -4vh;
    box-shadow: -6vmin 0 1.3734257714370852vmin currentColor;
}
.background span:nth-child(13) {
    color: #ffb3fc;
    top: 80%;
    left: 21%;
    animation-duration: 64s;
    animation-delay: -37s;
    transform-origin: 21vw 24vh;
    box-shadow: 6vmin 0 1.0670935218181379vmin currentColor;
}
.background span:nth-child(14) {
    color: #2c3868;
    top: 56%;
    left: 57%;
    animation-duration: 46s;
    animation-delay: -58s;
    transform-origin: -2vw 17vh;
    box-shadow: 6vmin 0 1.5305134533382518vmin currentColor;
}
.background span:nth-child(15) {
    color: #ffffff;
    top: 70%;
    left: 36%;
    animation-duration: 61s;
    animation-delay: -88s;
    transform-origin: 0vw 6vh;
    box-shadow: 6vmin 0 1.1057223942289012vmin currentColor;
}
.background span:nth-child(16) {
    color: #2c3868;
    top: 82%;
    left: 40%;
    animation-duration: 32s;
    animation-delay: -113s;
    transform-origin: 4vw -16vh;
    box-shadow: 6vmin 0 1.1861727014579937vmin currentColor;
}
.background span:nth-child(17) {
    color: #ffffff;
    top: 80%;
    left: 20%;
    animation-duration: 36s;
    animation-delay: -64s;
    transform-origin: 24vw 10vh;
    box-shadow: -6vmin 0 0.8378503693397157vmin currentColor;
}
.background span:nth-child(18) {
    color: #ffffff;
    top: 92%;
    left: 17%;
    animation-duration: 79s;
    animation-delay: -91s;
    transform-origin: 16vw -24vh;
    box-shadow: -6vmin 0 1.74712576452714vmin currentColor;
}
.background span:nth-child(19) {
    color: #2c3868;
    top: 74%;
    left: 3%;
    animation-duration: 82s;
    animation-delay: -86s;
    transform-origin: -21vw -18vh;
    box-shadow: -6vmin 0 1.7406512260450184vmin currentColor;
}
.background span:nth-child(20) {
    color: #8ad8ff;
    top: 60%;
    left: 12%;
    animation-duration: 12s;
    animation-delay: -113s;
    transform-origin: -2vw 12vh;
    box-shadow: -6vmin 0 0.8460329295867328vmin currentColor;
}
.background span:nth-child(21) {
    color: #ffb3fc;
    top: 9%;
    left: 81%;
    animation-duration: 73s;
    animation-delay: -35s;
    transform-origin: 20vw -3vh;
    box-shadow: 6vmin 0 1.5363392049099351vmin currentColor;
}
.background span:nth-child(22) {
    color: #ffffff;
    top: 38%;
    left: 23%;
    animation-duration: 105s;
    animation-delay: -56s;
    transform-origin: 19vw -19vh;
    box-shadow: 6vmin 0 1.2863924856131226vmin currentColor;
}
.background span:nth-child(23) {
    color: #2c3868;
    top: 83%;
    left: 38%;
    animation-duration: 31s;
    animation-delay: -4s;
    transform-origin: 2vw -7vh;
    box-shadow: 6vmin 0 1.4094667977403506vmin currentColor;
}

fazer a navbar dinamicamente, cada botao é um objeto
{id: 1, text: 'Notícias', visibility: true}
{id: 2, text: 'Mapas', visibility: false}

usar props pai pra filho [render main]
usar $emit filho pra pai [trocar asideImage]
     */
</style>
