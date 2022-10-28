<template>
  <div class="asideBox d-grid px-2">
    <div class="imgRender pb-3">
      <!-- tornar dinamico `:src="-acessar um objeto{} no pai, nav altera templates no objeto pra true ou false ..v-show?-"` e `:alt=""` -->
      <img src="@/assets/img/asideIcons/medal-pvsn.png" alt="" />
    </div>
    <div id="socialMedia" class="row">
      <h4>Mídias Sociais</h4>
      <ul class="d-flex flex-row px-3">
        <li>
          <a :href="linkInstagram" target="_blank">
            <img
              src="@/assets/img/socialMedia/instagramBorderBlack.svg"
              alt=""
            />
            <p>Instagram</p>
          </a>
        </li>
        <li>
          <a :href="linkFacebook" target="_blank">
            <img
              src="@/assets/img/socialMedia/facebookBorderBlack.svg"
              alt=""
            />
            <p>Facebook</p>
          </a>
        </li>
        <li>
          <a :href="linkWhatsappGroup" target="_blank">
            <img
              src="@/assets/img/socialMedia/whatsappBorderBlack.svg"
              alt=""
            />
            <p>Grupo Geral</p>
          </a>
        </li>
        <li>
          <a :href="linkDiscordServer" target="_blank">
            <img src="@/assets/img/socialMedia/discordBorderBlack.svg" alt="" />
            <p>Discord</p>
          </a>
        </li>
      </ul>
    </div>
    <div id="otherLinks" class="row">
      <h4>Links Úteis</h4>
      <ul>
        <li>
          <!-- <a v-bind:href="suaVariavelAqui" -->
          <a :href="linkDWG" target="_blank"
            ><img src="@/assets/img/otherLinks/ico-dwg.png" alt="" />DWG</a
          >
        </li>
        <li>
          <a :href="linkBase" target="_blank"
            ><img src="@/assets/img/otherLinks/ico-base.png" alt="" />Base</a
          >
        </li>
      </ul>
    </div>
    <div id="aboutProject" class="row">
      <h4>Sobre o Projeto</h4>
      <p>
        O Portal foi criado para atender a falta de uma fonte de informações
        claras e objetivas sobre a 25ª área, uma iniciativa para melhorar a
        interação e a troca entre moradores.
      </p>
    </div>
    <div id="aboutDev" class="row mb-2">
      <h4>Sobre o Dev</h4>
      <p>
        Aquele que encontrou na programação uma forma diferente de ver a vida e
        trazer acessibilidade a informação.
      </p>
      <img src="@/assets/img/ico-tommattih.png" alt="" />
      <a :href="linkTommattih" target="_blank">Saiba mais</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AsideContent',
  data() {
    return {
      linkInstagram: 'https://www.instagram.com/pvsn.25/',
      linkFacebook: 'https://fb.me/PVSN.25',
      linkWhatsappGroup: 'https://chat.whatsapp.com/K4JaFotEZSWC7EAtq2xn2y',
      linkDiscordServer: 'https://discord.gg/ABEhtET4dC',
      linkDWG:
        'https://drive.google.com/file/d/17qEcm0crWzm3HLrvgScMqHbGc5LNFnZm/view?usp=sharing',
      linkBase:
        'https://docs.google.com/spreadsheets/d/189o1r6BDabCCI_lDz6GeMch8T6TuCLvx_U69waz4OnI/edit?usp=sharing',
      linkTommattih: 'https://tommattih.github.io/'
    }
  }
}
</script>
<style scoped>
* {
  list-style: none;
}
h4 {
  font-size: 1.25rem;
  text-decoration-line: underline;
  text-underline-offset: 4px;
  padding: 1rem 0 0.5rem;
}
.asideBox {
  border: 1px dotted #60663962;
  width: 20%;
}
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  /* flex-direction: row; */
}
.imgRender img {
  width: 100%;
}
ul li img {
  height: 2rem;
  margin: 0.5rem;
}
p,
a,
a:hover {
  font-size: 1.1rem;
  color: var(--font-color2);
  text-decoration: none;
  text-shadow: 2px 0px 3px var(--font-color);
}
li:hover {
  border: dotted 1px #bbd8a36c;
  padding: 0 0.5rem;
  transition: 0.2s;
  border-radius: 0.5rem;
  background: var(--font-color);
  filter: brightness(1.05);
}
#aboutDev img {
  width: 5rem;
  margin: 0.5rem auto;
}
#aboutDev a:hover {
  width: 80%; /*turn patern?*/
  margin: 0 auto;
  transition: 0.25s;
  border-radius: 0.5rem;
  background: var(--font-color);
  filter: brightness(0.9);
}
p {
  text-align: center;
  padding: 0 1rem;
}
</style>
