<template>
  <div class="asideBox d-grid px-2">
    <div class="imgRender pb-3">
      <img src="@/assets/img/asideIcons/medal-pvsn.png" alt="" />
    </div>
    <div id="socialMedia" class="row">
      <h4>Mídias Sociais</h4>
      <ul class="d-flex flex-row px-3">
        <li>
          <a href="https://www.instagram.com/pvsn.25/" target="_blank">
            <img
              src="@/assets/img/socialMedia/instagramBorderBlack.svg"
              alt=""
            />
            <p>Instagram</p>
          </a>
        </li>
        <li>
          <a href="https://fb.me/PVSN.25" target="_blank">
            <img
              src="@/assets/img/socialMedia/facebookBorderBlack.svg"
              alt=""
            />
            <p>Facebook</p>
          </a>
        </li>
        <li>
          <a
            href="https://chat.whatsapp.com/K4JaFotEZSWC7EAtq2xn2y"
            target="_blank"
          >
            <img
              src="@/assets/img/socialMedia/whatsappBorderBlack.svg"
              alt=""
            />
            <p>Grupo Geral</p>
          </a>
        </li>
        <li>
          <a href="https://discord.gg/ABEhtET4dC" target="_blank">
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
          <a href="#"
            ><img src="@/assets/img/otherLinks/ico-dwg.png" alt="" />DWG</a
          >
        </li>
        <li>
          <a href="#"
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
    <div id="aboutDev" class="row">
      <h4>Sobre o Dev</h4>
      <p>
        Aquele que encontrou na programação uma forma diferente de ver a vida e
        trazer acessibilidade a informação.
      </p>
      <img src="@/assets/img/ico-tommattih.png" alt="" />
      <a href="https://tommattih.github.io/">Saiba mais</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AsideContent'
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
