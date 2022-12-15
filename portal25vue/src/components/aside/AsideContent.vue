<template>
  <div class="asideBox d-grid px-2">
    <div class="imgRender mb-2 mobileHidden">
      <img :src="imgSrc" alt="medal-pvsn" />
    </div>
    <div id="socialMedia" class="row">
      <h5 class="mobileHidden">Mídias Sociais</h5>
      <ul class="d-flex">
        <li>
          <a :href="linkDiscordServer" target="_blank">
            <img src="/img/asideLinks/discord.png" alt="" /><span
              class="mobileHidden"
              >Discord</span
            >
          </a>
        </li>
        <li>
          <a :href="linkInstagram" target="_blank">
            <img src="/img/asideLinks/instagram.png" alt="" /><span
              class="mobileHidden"
              >Instagram</span
            >
          </a>
        </li>
        <li>
          <a :href="linkFacebook" target="_blank">
            <img src="/img/asideLinks/facebook.png" alt="" /><span
              class="mobileHidden"
              >Facebook</span
            >
          </a>
        </li>
        <li>
          <a :href="linkWhatsappGroup" target="_blank">
            <img
              src="/img/asideLinks/whatsapp.png"
              alt="Logo do Whatsapp para o Grupo Geral da área"
            /><span class="mobileHidden">Whatsapp</span>
          </a>
        </li>
      </ul>
    </div>
    <div id="otherLinks" class="row">
      <h5 class="mobileHidden">Utilidades</h5>
      <ul>
        <li>
          <a :href="linkBase" target="_blank"
            ><img src="/img/asideLinks/notes.png" alt="" /><span
              class="mobileHidden"
              >Ba$e</span
            ></a
          >
        </li>
      </ul>
    </div>
    <div id="aboutProject" class="row px-2 mobileHidden">
      <h5>Sobre o Projeto</h5>
      <p>
        O Portal foi criado para atender a falta de uma fonte de informações
        claras e objetivas sobre a 25ª área, uma iniciativa para melhorar a
        interação e a troca entre moradores.
      </p>
    </div>
    <div id="aboutDev" class="row px-2 mb-2 mobileHidden">
      <h5>Sobre o Dev</h5>
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
h5 {
  font-size: 1.25rem;
  text-decoration-line: underline;
  text-underline-offset: 4px;
  margin: 0 auto 0.5rem;
}
.asideBox {
  padding: 0.5rem 0;
  max-width: 18%;
  background: rgba(177, 198, 139, 0.2); /*same shaddow opacity color*/
  box-shadow: -2px 10px 10px 0 rgb(50 75 25 / 50%);
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
ul li img {
  height: 1.75rem;
  margin: 0.5rem;
}
.dark ul li img {
  filter: invert(1);
}
a,
a:hover {
  font-size: 1.1rem;
  color: var(--font-color2);
  text-shadow: 0px 0px 6px var(--font-color);
}
#aboutDev a,
li {
  transition: 0.25s ease-in-out;
}
#aboutDev a:hover,
li:hover {
  border-radius: 0.5rem;
  filter: brightness(1);
  /* background: #9daf7145; */
  box-shadow: var(--shaddow-button);
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
  ul li img {
    height: 1.75rem;
    margin: 0.5rem 0;
  }
  #socialMedia li {
    margin-bottom: 0;
    padding: 0;
  }
  .asideBox li {
    transition: 0.25s;
  }
  .asideBox li:hover {
    border-radius: 1rem;
    filter: brightness(0);
    margin: -0.25rem;
  }
}
</style>
