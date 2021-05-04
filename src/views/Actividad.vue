<template lang="pug">
.curso-main-container.pb-3
  BannerInterno.cWhite(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-segundo
      .h4 Actividad didáctica 1
    
    .row.mb-5.justify-content-center
      .col-6.col-md-3.mb-4.mb-md-0.TemaColor01.rounded.d-flex.align-items-center
        figure
          img.w-50.mx-auto.m-4(src="@/assets/curso/actividad/img01.svg", alt="proceso de priorizació")
      .col-12.col-md-9
        p.mb-4 Afianzar algunos de los conceptos más importantes asociados al proceso de priorización de requisitos.
        .tarjeta.tarjeta--morada.p-3
          .row.justify-content-around.align-items-center            
            .col.mb-3.mb-sm-0
              p.fw-bold.mb-0 Emparejamiento entre término y definición.
            .col-sm-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/actividad_01/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece
    
    .titulo-segundo.pt-4
      .h4 Actividad didáctica 2
    
    .row.justify-content-center
      .col-6.col-md-3.mb-4.mb-md-0.TemaColor01.rounded.d-flex.align-items-center
        figure
          img.w-50.mx-auto.m-4(src="@/assets/curso/actividad/img02.svg", alt="proceso de priorizació")
      .col-12.col-md-9
        p.mb-4 Afianzar el proceso de priorización de requisitos por medio de algunas técnicas (puntos de historia y valor del negocio, técnica urgente, MoSCow y matriz de priorización).
        .tarjeta.tarjeta--morada.p-3
          .row.justify-content-around.align-items-center            
            .col.mb-3.mb-sm-0
              p.fw-bold.mb-0 Construcción de lista de priorizada de requisitos de acuerdo con técnica de priorización.
            .col-sm-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/actividad_02/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece    

</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import CreditosComp from '../components/plantilla/CreditosComp'
import Footer from '../components/plantilla/Footer'
export default {
  name: 'Actividad',
  components: {
    BannerInterno,
    CreditosComp,
    Footer,
  },
}
</script>

<style lang="sass" scoped></style>
