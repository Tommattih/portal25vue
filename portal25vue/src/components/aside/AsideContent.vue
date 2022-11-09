<template>
  <div class="asideBox d-grid px-2">
    <div class="imgRender mb-2 mobileHidden">
      <img :src="imgSrc" alt="medal-pvsn" />
    </div>
    <div id="socialMedia" class="row">
      <h4 class="mobileHidden">Mídias Sociais</h4>
      <ul class="d-flex">
        <li>
          <a :href="linkDiscordServer" target="_blank">
            <img src="/img/socialMedia/discordBorderBlack.svg" alt="" /><span
              class="mobileHidden"
              >Discord</span
            >
          </a>
        </li>
        <li>
          <a :href="linkInstagram" target="_blank">
            <img src="/img/socialMedia/instagramBorderBlack.svg" alt="" /><span
              class="mobileHidden"
              >Instagram</span
            >
          </a>
        </li>
        <li>
          <a :href="linkFacebook" target="_blank">
            <img src="/img/socialMedia/facebookBorderBlack.svg" alt="" /><span
              class="mobileHidden"
              >Facebook</span
            >
          </a>
        </li>
        <li>
          <a :href="linkWhatsappGroup" target="_blank">
            <img
              src="/img/socialMedia/whatsappBorderBlack.svg"
              alt="Logo do Whatsapp para o Grupo Geral da área"
            /><span class="mobileHidden">Whatsapp</span>
          </a>
        </li>
      </ul>
    </div>
    <div id="otherLinks" class="row">
      <h4 class="mobileHidden">Links Úteis</h4>
      <ul>
        <li>
          <!-- <a v-bind:href="suaVariavelAqui" -->
          <a :href="linkDWG" target="_blank"
            ><img src="/img/otherLinks/ico-dwg.png" alt="" /><span
              class="mobileHidden"
              >DWG</span
            ></a
          >
        </li>
        <li>
          <a :href="linkBase" target="_blank"
            ><img src="/img/otherLinks/ico-base.png" alt="" /><span
              class="mobileHidden"
              >Base</span
            ></a
          >
        </li>
      </ul>
    </div>
    <div id="aboutProject" class="row px-2 mobileHidden">
      <h4>Sobre o Projeto</h4>
      <p>
        O Portal foi criado para atender a falta de uma fonte de informações
        claras e objetivas sobre a 25ª área, uma iniciativa para melhorar a
        interação e a troca entre moradores.
      </p>
    </div>
    <div id="aboutDev" class="row px-2 mb-2 mobileHidden">
      <h4>Sobre o Dev</h4>
      <p>
        Aquele que encontrou na programação uma forma diferente de ver a vida e
        trazer acessibilidade a informação.
      </p>
      <img src="/img/asideIcons/ico-tommattih.png" alt="" />
      <a :href="linkTommattih" target="_blank">Saiba mais</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AsideContent',
  props: ['imgSrc'],
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
  text-decoration: none;
}
/******* full view ********/
.imgRender img {
  width: 100%;
  padding: 0 1rem;
}
h4 {
  font-size: 1.25rem;
  text-decoration-line: underline;
  text-underline-offset: 4px;
  margin: 0 auto 0.5rem;
}
.asideBox {
  padding: 0.5rem 0;
  max-width: 18%;
  background: rgba(177, 198, 139, 0.2);
  box-shadow: -2px 10px 10px 0 rgb(50 75 25 / 50%);
  /* backdrop-filter: blur(1.5px); */
  /* -webkit-backdrop-filter: blur(1.5px); */
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.75);
  justify-content: center;
}
ul {
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: stretch;
  gap: 0.5rem;
}
#aboutDev a,
li {
  transition: 0.25s ease-in-out;
}
ul li img {
  height: 1.75rem;
  margin: 0.5rem;
}
a,
a:hover {
  font-size: 1.1rem;
  color: var(--font-color2);
  text-shadow: 0px 0px 6px var(--font-color);
}
#aboutDev a:hover,
li:hover {
  border-radius: 0.5rem;
  filter: brightness(1.2);
  background: #9daf7145;
  box-shadow: -1px 2px 4px rgba(45, 61, 37, 0.52);
}
#aboutDev img {
  width: 5rem;
  margin: 0.5rem auto;
}
p {
  text-align: center;
}
@media only screen and (max-width: 768px) {
  .mobileHidden {
    display: none;
  }
  ul {
    margin-bottom: 0;
    gap: 0;
  }
  #socialMedia li {
    margin-bottom: 0;
    padding: 0;
  }
}
</style>
