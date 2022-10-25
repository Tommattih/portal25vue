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
            <!-- <img src="./img/instagramWhite.svg" alt="Instagram" /> -->
            <p>Instagram</p>
          </a>
        </li>
        <li>
          <a href="https://fb.me/PVSN.25" target="_blank">
            <!-- <img src="./img/facebookWhite.svg" alt="Facebook" /> -->
            <p>Facebook</p>
          </a>
        </li>
        <li>
          <a
            href="https://chat.whatsapp.com/K4JaFotEZSWC7EAtq2xn2y"
            target="_blank"
          >
            <!-- <img
            src="./img/whatsappWhite.svg"
            alt="Whatsapp Link para o grupo geral"
          /> -->
            <p>Grupo Geral</p>
          </a>
        </li>
        <li>
          <a href="https://discord.gg/ABEhtET4dC" target="_blank">
            <!-- <img src="./img/discordWhite.svg" alt="Discord" /> -->
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
}
.asideBox {
  border: 1px dotted var(--bg-color);
  width: 20%;
}
ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
#aboutDev img {
  width: 5rem;
  margin: 0.5rem auto;
}
.imgRender img {
  width: 100%;
}
ul li img {
  height: 2.25rem;
  margin: 0.5rem;
}
</style>
