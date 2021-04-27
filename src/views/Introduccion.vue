<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.fas.fa-info
      .h3 Introducción
    
    figure.mb-5
      img(src="@/assets/curso/intro/img01.png", alt="Introducción")
    
    p.mb-5 En este componente formativo se estudiarán los principios básicos sobre los que se fundamenta el proceso de análisis de requisitos desde marcos de desarrollo de software tradicional y ágiles. También, introduce a diferentes formas (planillas y estándares) para realizar el proceso de documentación de requisitos.

</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
