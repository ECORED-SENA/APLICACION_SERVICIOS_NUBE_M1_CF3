<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    #t_2.titulo-principal
      .titulo-principal__numero
        .h3 2
      .h3 Especificación de requisitos

    p.mb-4 En esta sección se describen algunos estándares y/o técnicas que pueden ser usadas por las organizaciones para describir formalmente cada uno de los requisitos del sistema.
    
    #t_2_1.titulo-segundo.mt-5.pt-4
      .h4 2.1 Estándar IEEE 830
    
    p.mb-4 Este estándar presenta un conjunto de prácticas recomendadas para la redacción de un documento de especificación de requerimientos mejor conocido como SRS. Este documento está dividido en secciones y cada una de ellas aborda aspectos particulares. A continuación, se describirá de forma general algunos de los elementos que conforman este documento (IEEE 830-1998).
  
    .tarjeta.tarjeta--morada.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema2/img01.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h5.mb-0 Infografía - Estándar IEEE 830
              p Este documento está dividido en secciones y cada una de ellas aborda aspectos particulares. A continuación, se describirá de forma general algunos de los elementos que conforman este documento (IEEE 830-1998).
            .col-sm-auto
              a.boton.boton--b(:href="obtenerLink('/downloads/Infografia_EstandarIEEE830.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    
    p.mb-4 La siguiente tabla muestra la estructura base de un documento SRS, indicando cuáles son los apartados principales.
    
    .row.justify-content-center.mb-5
      .col-7.col-md-5.TemaColorZ.p-4.ListUlt
        ol.mb-3
          li.fw-bold Introducción
            ol
              li.fw-normal Propósito
              li.fw-normal Ámbito del sistema
              li.fw-normal Definiciones, Acrónimos y Abreviaturas
              li.fw-normal Referencias
          br
          li.fw-bold Descripción general
            ol
              li.fw-normal Perspectiva del producto
              li.fw-normal Funciones del producto
              li.fw-normal Características de los usuarios
              li.fw-normal Restricciones
              li.fw-normal Suposiciones y dependencias
          br
          li.fw-bold Requerimientos específicos
            ol
              li.fw-normal Interfaz
              li.fw-normal Requisitos funcionales
              li.fw-normal Requerimientos no funcionales
              li.fw-normal Otros requisitos
          br
          li.fw-bold Apéndices
    
        figure
          figcaption Tabla 6 - Estructura base de un documento SRS.
    
    p.mb-4 Ahora se deben revisar algunos ejemplos que se presentan sobre el diligenciamiento del formato SRS:

    .conTabla.mb-4.W90auto
      table.tabla-d.text-center.mb-3
        caption Tabla 7 - Ejemplos de SRS diligenciados
        tr
          th Proyecto
          th Link del documento
        tr
          td Sistema Integral Acad&eacute;mico
          td
            a(href='https://bit.ly/2Pzw80U') https://bit.ly/2Pzw80U 
        tr
          td Sistema de Informaci&oacute;n de Seminarios Web
          td
            a(href='https://bit.ly/3cwwa2Q') https://bit.ly/3cwwa2Q 
        tr
          td Sistema de Estacionamiento Tarifado
          td
            a(href='https://bit.ly/3syWvmd') https://bit.ly/3syWvmd
    
    #t_2_2.titulo-segundo.mt-5.pt-4
      .h4 2.2 Estándar IEEE 29148:2018

    p.mb-4 Este estándar reemplaza los estándares IEEE 830, IEE 1233, IEEE 1362, y contiene disposiciones para los procesos y productos relacionados con la ingeniería de requisitos para sistemas, productos y servicios de software a lo largo del ciclo de vida (Penzenstadler, 2021).

    .bloque-texto-a.p-4.p-md-5.mb-5.W90auto
      .row.m-0.align-items-center.justify-content-between
        .col-lg-3.mb-4.mb-lg-0
          figure.mb-4
            img.w-25(src="@/assets/curso/tema2/img02.svg", alt="proceso de priorizació")
          .h4.mb-0 Estándar IEEE 29148:2018
        .col-lg-9
          .bloque-texto-a__texto.p-4
            p Además, define la construcción de un buen requisito, proporciona atributos y características de los requisitos, y analiza la aplicación iterativa y recursiva del proceso de requisitos a lo largo del ciclo de vida. También proporciona orientación adicional en la aplicación de procesos de ingeniería y gestión de requerimientos relacionados con la ingeniería de requisitos al tiempo que  define los elementos de información aplicables a la ingeniería de requisitos y su contenido
    
    p.mb-4 El estándar IEEE 29148:2018 está estructurado de la siguiente forma:

    .TemaColorX.p-4.rounded.W90auto.mb-4
      ul.lista-ul--color
        li
          i.fas.fa-database
          | Introducción, resumen y tabla de contenido.
        li
          i.fas.fa-database
          | Propósito, alcance del estándar, generalidades.
        li
          i.fas.fa-database
          | Propósito, alcance del estándar, generalidades.Explicación de los otros estándares que lo conforman.
        li
          i.fas.fa-database
          | Propósito, alcance del estándar, generalidades.Referencias a normas que lo conforman.
        li
          i.fas.fa-database
          | Propósito, alcance del estándar, generalidades.Clarificación de la terminología, lo que es muy valioso para cuando se quiere establecer nuevos. procesos de ingeniería de requerimientos en una empresa.
        li
          i.fas.fa-database
          | Propósito, alcance del estándar, generalidades.Clarificación de los conceptos y procesos.
        li
          i.fas.fa-database
          | Propósito, alcance del estándar, generalidades.Explicación y contenido de los ítems de información que vienen a través de la especificación de requerimientos o que debemos considerar incluir en la especificación de requerimientos.
        li
          i.fas.fa-database
          | Propósito, alcance del estándar, generalidades.Anexos adicionales para mayor detalle.
    
    p.mb-4 Esta norma propone un listado de requerimientos mínimos los cuales son la base de la especificación de requerimientos; en ese sentido se proponen los siguientes tipos de requerimientos del sistema:

    .TemaColorX.p-4.rounded.W90auto.mb-4
      ul.lista-ul
        li 
          i.lista-ul__vineta
          | Requerimientos funcionales: representan necesidades de los interesados del software.
        li 
          i.lista-ul__vineta
          | Requerimientos de usabilidad: requerimientos que son utilizados directamente por los involucrados en la soluci&oacute;n (requerimientos de uso).
        li 
          i.lista-ul__vineta
          | Requerimientos de desempe&ntilde;o: disponibilidad de servicios y procesos transaccionales.
        li 
          i.lista-ul__vineta
          | Interfaces del sistema: interacci&oacute;n entre personas con el software.
        li 
          i.lista-ul__vineta
          | Operaciones del sistema.
        li 
          i.lista-ul__vineta
          | Modos y estados del sistema.
        li 
          i.lista-ul__vineta
          | Caracter&iacute;sticas f&iacute;sicas (hardware).
        li 
          i.lista-ul__vineta
          | Condiciones del ambiente (operativas y operacionales).
        li 
          i.lista-ul__vineta
          | Seguridad del sistema.
        li 
          i.lista-ul__vineta
          | Manejo de la informaci&oacute;n.
        li 
          i.lista-ul__vineta
          | Pol&iacute;ticas y regulaci&oacute;n: normas y est&aacute;ndares que fundamenta el software.
        li 
          i.lista-ul__vineta
          | Ciclo de vida del sistema: establece las etapas y duraci&oacute;n del desarrollo y uso en producci&oacute;n.
    
    #t_2_3.titulo-segundo.mt-5.pt-4
      .h4 2.3 La especificación de requisitos a través de marcos de trabajo ágiles

    p.mb-4 Los marcos de trabajo ágiles promueven la comunicación oral sobre la documentación exhaustiva en la mayoría de los procesos del ciclo de vida, particularmente en los procesos de identificación de necesidades y diseño. Sin embargo, uno de los artefactos presentes para el modelado de requerimientos son las historias de usuario.

    p.mb-4 Las historias de usuario son una explicación general e informal de una función del software escrita desde la perspectiva del usuario final o cliente. Permiten describir de una manera muy breve un requerimiento, estimar prioridades, alcance y tiempo de realización (Rivadeneira, 2014). En la siguiente tabla, se puede observar la estructura base de un documento de historia de usuario.

    .conTabla.mb-3
      table.tabla-d.fw-bold.mb-3
        caption.fw-normal Tabla 8 - Estructura base de un documento de historia de usuario  |  Nota: Tomado de Rivadeneira (2014).
        tr
          th(colspan='2').text-center Historia de usuario
        tr
          td N&uacute;mero: #
          td Nombre de la historia de usuario:
        tr
          td(colspan='2') Usuario: 
        tr
          td Prioridad: 
          td Puntos estimados:
        tr
          td(colspan='2') Descripci&oacute;n:
        tr
          td(colspan='2') Observaciones:
        tr
          td(colspan='2') Criterios de aceptaci&oacute;n:
    
    p.mb-4 Las historias de usuario tienen varios beneficios respecto a otros instrumentos de redacción de requerimientos, entre los cuales se pueden listar:

    .TemaColorX.p-4.rounded.W90auto.mb-4
      ul.lista-ul
        li 
          i.lista-ul__vineta
          | Las historias de usuario se centran en solucionar problemas a usuarios reales.
        li 
          i.lista-ul__vineta
          | Las historias de usuario permiten la colaboración, ya que como su descripción es corta se necesita que el equipo colabore para decidir cómo dar solución a la historia para cumplir con la necesidad expresada por el usuario.
        li 
          i.lista-ul__vineta
          | Las historias impulsan la creatividad, ya que fomentan que el equipo piense de forma crítica y creativa sobre cómo solucionar de la mejor manera el objetivo.
        li 
          i.lista-ul__vineta
          | Las historias de usuario motivan, pensar en la mejor solución para una problemática particular representan retos y pequeñas victorias para el equipo.
    
    #t_2_4.titulo-segundo.mt-5.pt-4
      .h4 2.4. Scrum y la especificación de requisitos
    
    figure.mb-4
      img(src='@/assets/curso/tema2/img03.png', alt='Ejemplo de descomposición funcional de un sistema de gestión comercialización de productos')
    
    .row.mb-5.justify-content-center
      .col-8.col-md-4.mb-4.mb-md-0.TemaColor01.rounded.d-flex.align-items-center
        figure
          img.w-25.mx-auto.m-4(src="@/assets/curso/tema2/img04.svg", alt="proceso de priorizació")
      .col-12.col-md-8
        p El marco de trabajo Scrum está soportado en un proceso de construcción iterativo e incremental evolutivo, en el que se identifican tres roles principales: el equipo de trabajo (team) conformado por los desarrolladores, diseñadores, personal de calidad y de infraestructura requerido para la construcción del producto de software; el scrum master que realizan funciones parecidas a las de un director de proyecto, pero más enfocados en garantizar que el equipo de trabajo tenga todas las herramientas y recursos necesarios para el desarrollo de su trabajo; y, finalmente, el dueño del producto (product owner) que se convierte en un representante del cliente y quien es el único encargado de la gestión de requisitos del proyecto (ScrumStudy, 2021).
    
    p.mb-4 Scrum establece el concepto de sprint para referirse a una iteración que contempla tiempos fijos entre 2 y 4 semanas dependiendo del equipo de trabajo, durante este tiempo se incluye la planeación del sprint, donde se definen los requerimientos a desarrollar en ese periodo de tiempo, una fase de construcción del producto y, finalmente, un proceso de despliegue para poder hacer la respectiva demostración de lo construido al final de iteración en reuniones de revisión; en este marco de trabajo se redefine el concepto de requerimiento hecho y normalmente va mucho más allá de construir el código, por lo general, se incluyen procesos de validación con pruebas unitarias y pruebas de integración.

    p.mb-4 El artefacto mediante el cual se condensan todos los requerimientos del sistema se denomina pila de producto (product backlog), la cual es una lista ordenada por prioridad de todos los requerimientos del sistema generalmente descritos en la forma de historias de usuario.

    .row.mb-5.justify-content-center
      .col-8.col-md-4.mb-4.mb-md-0.TemaColor01.rounded.d-flex.align-items-center
        figure
          img.w-75.mx-auto.m-4(src="@/assets/curso/tema2/img05.svg", alt="proceso de priorizació")
      .col-12.col-md-8
        p Todas las historias de usuario se priorizan utilizando números enteros consecutivos de 1 hasta N, donde 1 representa la máxima prioridad. Esta priorización la realiza únicamente el dueño del producto y, para eso, utiliza la información que tiene sobre el negocio y recomendaciones de expertos buscando el mayor retorno de inversión a sus clientes. La priorización de las historias de usuario en la pila de producto puede variar en el transcurso del tiempo, pero solo la podrá realizar el dueño del producto.
    
    .cajon--rojo.p-4.mb-5.w-75
      p Scrum, siendo un marco de trabajo ágil, no requiere para su funcionamiento que todas las historias de usuario de la pila de producto estén detalladas, pero sí, por lo menos, las de mayor prioridad para poder iniciar el trabajo con el equipo en sus respectivos sprints (ScrumStudy, 2021).
    
    p.mb-4 Al inicio de cada sprint se realiza el proceso de planeación que involucra principalmente tres tareas:

    .row.mb-5.W90auto
      .col-12
        .tarjeta-numerada.p-5
          .tarjeta-numerada__numero
            .h4 1
          p Estimar el valor de esfuerzo requerido para un conjunto de historias de usuario de la pila de producto, trabajo que es realizado únicamente por el equipo de desarrollo.

      .col-12
        .tarjeta-numerada.p-5
          .tarjeta-numerada__numero
            .h4 2
          p Selección de las historias d e usuario a desarrollar durante al sprint tomando como referencia la prioridad y el valor del esfuerzo asociado a cada historia. Esto genera un artefacto llamado pila del sprint (sprint backlog) que lista los requerimientos descritos como historias de usuario a ser realizadas y evaluadas en el sprint.
      
      .col-12
        .tarjeta-numerada.p-5
          .tarjeta-numerada__numero
            .h4 3
          p Descomposición de cada historia de usuario en tareas y, de ser necesario, asignar responsables a cada tarea.

    p.mb-4 A continuación, se expone una figura en la que se representan los artefactos generados dentro del marco de trabajo Scrum y que permiten la gestión de los requisitos y el evento desde el cual se construye inicialmente.

    figure.mb-4
      img(src='@/assets/curso/tema2/img06.svg', alt='Pila de producto vs. pila del Sprint')
      figcaption Figura 3 - Pila de producto vs. pila del Sprint.
    
    #t_2_5.titulo-segundo.mt-5.pt-4
      .h4 2.5. Kanban y la especificación de requisitos

    p.mb-4 Kanban es una metodología para gestionar el trabajo que surge del sistema de producción Toyota Production System (TPS) a finales de la década de 1940, el cual representaba un sistema de producción basado en la demanda de los clientes y no en la producción masiva, lo anterior sentó los fundamentos para los sistemas de producción ajustada que consisten en minimizar los desperdicios sin afectar la producción y en crear más valor a los clientes sin generar más gastos.

    .row.mb-5.justify-content-center
      .col-8.col-md-4.mb-4.mb-md-0.TemaColor01.rounded.d-flex.align-items-center
        figure
          img.w-25.mx-auto.m-4(src="@/assets/curso/tema2/img07.svg", alt="proceso de priorizació")
      .col-12.col-md-8
        p A principios del siglo XXI, la industria del software adoptó el Kanban para cambiar la forma en la que se producía y entregaban productos y servicios; además, tiene en cuenta los principios de las metodologías ágiles en especial de Scrum, pero busca darle más protagonismo al proceso de experimentación y mejora continua (Rivadeneira, 2014).

    p.mb-4 Kanban en la industria del software se basa en cuatro principios fundamentales:

    .TemaColorX.p-4.rounded.mb-4
      ol.lista-ol--cuadro
        li 
          .lista-ol--cuadro__vineta
            span 1
          | Calidad garantizada, todo lo que se produce debe salir bien sin márgenes de errores, prima la calidad sobre la rapidez.
        li 
          .lista-ol--cuadro__vineta
            span 2
          | Reducción del desperdicio. Hacer solamente lo justo y necesario, pero hacerlo bien.
        li 
          .lista-ol--cuadro__vineta
            span 3
          | Mejora continua.
        li 
          .lista-ol--cuadro__vineta
            span 4
          | Flexibilidad: se pueden priorizar tareas entrantes según las necesidades del momento.
    
    p.mb-4 Además de los principios, Kanban propone seis (6) prácticas: 

    .TemaColorX.p-4.rounded.mb-4
      ol.lista-ol--cuadro
        li 
          .lista-ol--cuadro__vineta
            span 1
          | Visualizar el flujo de trabajo.
        li 
          .lista-ol--cuadro__vineta
            span 2
          | Eliminar interrupciones.
        li 
          .lista-ol--cuadro__vineta
            span 3
          | Gestionar el flujo.
        li 
          .lista-ol--cuadro__vineta
            span 4
          | Hacer políticas explícitas que fomenten la visibilidad.
        li 
          .lista-ol--cuadro__vineta
            span 4
          | Circuitos de realimentación.
        li 
          .lista-ol--cuadro__vineta
            span 4
          | Mejorar colaborando.

    .w-75
      p.mb-4 Tal vez la herramienta más conocida que permite implementar los principios de Kanban es el tablero Kanban, el cual permite mapear y visualizar el flujo de trabajo.Este se divide en columnas a través de las cuales se pueden visualizar cada una de las fases del proceso; las filas del tablero representan los diferentes tipos de actividades específicas que se desarrollan en el marco del proyecto.

      p.mb-4 Normalmente el tablero tiene tres secciones que representan el estado de cada una de las tareas: por hacer, en proceso, hecho.

      p.mb-4 Cada equipo de trabajo puede realizar un mapeo más detallado de su proceso y agregar tanta sección como considere pertinente, como se muestra en la siguiente figura.

    figure.mb-4
      img(src='@/assets/curso/tema2/img08.svg', alt='Tablero Kanban')
      figcaption Figura 4 - Tablero Kanban.

    p Dependiendo del marco de trabajo, varía la forma en la que se describen cada una de las tareas del tablero Kanban, por ejemplo, dentro de un marco de trabajo como Scrum cada una de las tareas se podría describir en el formato de historias de usuario.


    

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
}
</script>

<style lang="sass" scoped></style>
