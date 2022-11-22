<template>
  <div>
    <slot>
      <h3>{{ newsData.titleSection }}</h3>
      <h5>{{ newsData.titleNews }}</h5>
      <img :src="newsData.imageNews" :alt="newsData.imageNewsAlt" />
      <p>
        A <strong>SABESP irá operar no loteamento</strong>, possivelmente, em
        meados de Outubro. No momento desta reunião está concluindo os serviços
        na 28ª área, a seguir irá para a 26ª e, e depois, virá a 25ª área.
      </p>

      <p>
        Para <strong>quem ainda não fez a retirada de terra</strong>, o custo da
        operação provavelmente se elevará se tiver que despachar a terra
        excedende fora do loteamento. A Associação não indica nenhuma companhia,
        cada um está por conta para cotar os preços. Os vizinhos que quiserem se
        unir para buscar desconto com as empresas de terraplenagem podem
        conversar pelo grupo do whatsapp (Link aqui no final da página)
      </p>

      <p>
        <strong>Recur$os para obras de infraestrutura</strong> subsequentes,
        virão da Secretaria de Habitação do Estado.
      </p>

      <p>
        A partir do dia 23/08/2021 (de segunda-feira a sexta-feira,
        <strong>das 09:00 às 18:00</strong>), os associados que estiverem com as
        contribuições em dia, podem ir até a sede da Associação e fazer a ficha
        de atendimento, que funciona como senha, para (por meio de ligação ou
        whataspp) agendarem a data da elaboração da planta indiviual. O projeto
        será elaborado junto com o(a) arquiteto(a) no próprio terreno no
        loteamento. <strong>Ou seja</strong>, é necesssário estar quitado para
        pegar o protocolo, a partir do qual eles entrarão em contato pra agendar
        o dia pra comparecer no lote e estudar as opções de planta
      </p>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'NewsContent',
  props: {
    newsData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100%;
  margin: 0 1rem 1rem;
  box-shadow: -1px 2px 4px rgba(45, 61, 37, 0.52);
}
</style>
