<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #t_1.titulo-principal
      .titulo-principal__numero
        .h3 1
      .h3 Título principal, 30pt

    .row.mb-5.justify-content-center
      .col-12.col-md-8.mb-4.mb-md-0
        .cajon--rojo.p-4.mb-4
          p El proceso de análisis de requisitos permite, principalmente, el estudio de las necesidades de los usuarios para definir requisitos del sistema por medio de la producción del documento de especificación de requisitos donde se describe lo que el sistema debe hacer, pero no el cómo. Así es como este proceso, además de involucrar un proceso de análisis, también requiere de la síntesis de la información existente.
        p A continuación, se describen algunas técnicas que pueden ser utilizadas para entender y ordenar los requisitos identificados para su posterior redacción en un artefacto formal dependiendo del marco de desarrollo de software utilizado.
      .col-8.col-md-4
        figure
          img(src="@/assets/curso/tema1/img01.png", alt="proceso de análisis de requisitos")
    
    #t_1_1.titulo-segundo.pt-5
      .h4 1.1 Priorización de requisitos

    p.mb-4 Esta es una actividad clave para el éxito en la construcción de producto de software y su objetivo es maximizar el valor entregado por el proyecto a sus clientes; es decir, identificar cuáles requisitos se deben priorizar tomando en cuenta factores como la complejidad, las dependencias y el retorno de inversión a los clientes, entre otros indicadores.

    p.mb-4 La priorización de requisitos, por lo general, es responsabilidad de los gerentes del proyecto o dueños de producto dependiendo del tipo de enfoque utilizado; sin embargo, se requiere de la participación activa de los analistas de requisitos, ya que si bien es el cliente o su representante quien determina cuáles requisitos son más importantes para su negocio, el analista debe asesorar, facilitar e informarle al cliente para no darle prioridad superior a requisitos que tienen otras dependencias no resueltas; por ejemplo, no se podría priorizar un requerimiento asociado a un carrito de compras sin antes tener resuelto los requerimientos asociados al registro y consulta de productos.

    .row.mb-5.justify-content-center
      .col-8.col-md-4.mb-4.mb-md-0
        figure
          img(src="@/assets/curso/tema1/img02.png", alt="proceso de priorizació")
      .col-12.col-md-8
        p El proceso de priorización es continuo, es decir, la prioridad de un requisito puede variar a lo largo del proyecto, así como los requisitos también pueden variar a lo largo del mismo. La priorización no es un proceso sencillo, por lo que, además de conocer las diferentes técnicas, es importante la toma de decisiones y estas, en el marco de un proyecto, siempre van a generar inconformidades, pero si no se decide respecto a la priorización de requisitos es como si no se fundamentaran las bases sobre las que el equipo de desarrollo va a construir el sistema.
    
    .h5.pt-5 1.1.1 Técnica de clasificación de lista

    p.mb-4 Esta técnica de clasificación no requiere ningún tipo de entrenamiento o preparación, ya que es una forma de priorización natural que se usa en la vida cotidiana. Este tipo de priorización simple es una de las más utilizadas y consiste en darle un valor numérico a cada requerimiento iniciando por el número 1 y continuando de forma sucesiva con 2, 3 y hasta el número total de requisitos definidos (Porfirio, 2021).

    .d-flex.mb-4
      .EleUNO.d-flex.align-items-center.py-4
        img.z-index-1(src="@/assets/curso/tema1/img03.svg", alt="item")
      .EleDOS.p-4.d-flex.align-items-center
        p Esta técnica tiene la ventaja de que solo puede existir un número 1, lo cual evita muchos problemas por parte de los interesados o responsables del negocio que quieren que todos los requerimientos tengan prioridad 1; adicionalmente, aporta claridad y evita confusiones. Cada elemento se prioriza con relación al resto de elementos, lo que simplifica el proceso.
    
    .d-flex.mb-4
      .EleUNO.d-flex.align-items-center.py-4
        img.z-index-1(src="@/assets/curso/tema1/img04.svg", alt="item")
      .EleDOS.p-4.d-flex.align-items-center
        p Para usar adecuadamente esta técnica se requiere de un profundo conocimiento de todos los requerimientos definidos y si bien el proceso parece simple, se requiere de un gran esfuerzo por parte del equipo para situar a cada requerimiento en la posición correcta.

    .h5.pt-5 1.1.2 Técnica de puntos de historia y valor del negocio

    p.mb-4 Esta consiste en realizar el proceso de priorización de acuerdo con factores como el esfuerzo y la opinión de los gerentes de proyecto o dueños de producto, los clientes, el equipo de desarrollo o incluso una combinación de los anteriores. El valor del negocio corresponde a un valor numérico que cuanto más alto sea, más valor representa para el cliente (Porfirio, 2021).

    .d-flex.mb-4
      .EleUNO.d-flex.align-items-center.py-4
        img.z-index-1(src="@/assets/curso/tema1/img05.svg", alt="item")
      .EleDOS.p-4.d-flex.align-items-center
        p Usar solo el valor del negocio como elemento de priorización puede generar problemas, ya que el valor asociado por el cliente a un requerimiento puede ser muy superfluo y, además, no considera detalles clave como el esfuerzo que se requiere para su desarrollo, por esta razón también se usa el valor de puntos de historia, que no es más que otro valor numérico asignado por el equipo de desarrolladores a cada requerimiento donde expresa una estimación de esfuerzo, cuanto más grande sea el número implica más esfuerzo requerido con miras a realizar el requerimiento.
    
    .d-flex.mb-5
      .EleUNO.d-flex.align-items-center.py-4
        img.z-index-1(src="@/assets/curso/tema1/img06.svg", alt="item")
      .EleDOS.p-4.d-flex.align-items-center
        p Para lograr la priorización de los requerimientos, se debe realizar el cálculo del cociente obtenido a partir de los puntos de valor del negocio dividido entre los puntos de historia, quedando entonces una priorización donde estarán en los primeros lugares los requerimientos más sencillos de resolver por los desarrolladores y que tengan mayor interés por parte del cliente. A continuación se da un ejemplo.

    .conTabla.mb-3
      table.tabla-d.text-center.mb-3
        caption Tabla 1 - Ejemplo de aplicación técnica de puntos de historia y valor del negocio.
        tr
          th Requerimientos
          th Valor del negocio
          th Puntos de historia
          th Cociente
        tr
          td.fw-bold R01
          td 6
          td 3
          td 2
        tr
          td.fw-bold R02
          td 7
          td 1
          td 7
        tr
          td.fw-bold R03
          td 9
          td 5
          td 1,8
        tr
          td.fw-bold R04
          td 3
          td 3
          td 1
        tr
          td.fw-bold R05
          td 4
          td 2
          td 2
        tr
          td.fw-bold R06
          td 5
          td 4
          td 1,25
        tr
          td.fw-bold R07
          td 2
          td 8
          td 0,25
    
    .h5.pt-5 1.1.3 Técnica urgente

    p.mb-4 Aquí se utiliza una tabla de dos dimensiones, donde la horizontal estará determinada por el valor de la urgencia en el requerimiento, el cual corresponde a un valor numérico entre 1 y 5, donde un valor de 5 implica la mayor urgencia y 1 que no hay tanto apuro en el desarrollo de requerimiento; y la dimensión vertical estará determinada por el valor del negocio, solo que esta vez, a diferencia de la técnica anterior, el valor del negocio también se rige por una escala de 1 a 5, siendo 5 el de mayor valor de negocio posible para un requerimiento (Porfirio, 2021).

    p.mb-4 Para determinar la prioridad final de un requerimiento, se utiliza una escala de colores que surge a partir de la multiplicación de los valores de las escalas de urgencia y de valor de negocio según la siguiente tabla:

    .conTabla.mb-3
      table.mb-3
        caption Tabla 2 - Tabla de referencia para la técnica urgente | Nota: Tomado de Porfirio (2021).
        thead
          tr
            td(rowspan='7').text-center.fw-bold Valor de negocio
            td.TemaColor01 5
            td.TemaColor02 5
            td.TemaColor03 10
            td.TemaColor04 15
            td.TemaColor04 20
            td.TemaColor05 25
          tr
            td.TemaColor01 4
            td.TemaColor02 4
            td.TemaColor03 8
            td.TemaColor03 12
            td.TemaColor04 16
            td.TemaColor04 20
          tr
            td.TemaColor01 3
            td.TemaColor02 3
            td.TemaColor03 6
            td.TemaColor03 9
            td.TemaColor03 12
            td.TemaColor04 15
          tr
            td.TemaColor01 2
            td.TemaColor02 2
            td.TemaColor02 4
            td.TemaColor03 6
            td.TemaColor03 8
            td.TemaColor03 10
          tr
            td.TemaColor01 1
            td.TemaColor02 1
            td.TemaColor02 2
            td.TemaColor02 3
            td.TemaColor02 4
            td.TemaColor02 5
          tr
            td.TemaColor01
            td.TemaColor01 1
            td.TemaColor01 2
            td.TemaColor01 3
            td.TemaColor01 4
            td.TemaColor01 5
          tr
            td(colspan='6').text-center.fw-bold Urgencia

    p.mb-4 Luego se consideran los requerimientos de mayor prioridad que están en el sector de color rojo, luego los de color naranja, luego los de color amarillo y, por último, los requerimientos del sector de color verde. Para entender mejor este estilo de priorización observar el siguiente ejemplo:

    .conTabla.mb-3      
      table.tabla-d.text-center.mb-3
        caption Tabla 3 - Ejemplo de aplicación técnica urgente.
        thead
          tr
            th Requerimientos
            th Valor del negocio
            th Urgencia
            th Sector
        tbody
          tr
            td.fw-bold R01
            td 1
            td 4
            td.TemaColor02 Verde
          tr
            td.fw-bold R02
            td 2
            td 4
            td.TemaColor03 Amarillo
          tr
            td.fw-bold R03
            td 5
            td 5
            td.TemaColor05 Rojo
          tr
            td.fw-bold R04
            td 4
            td 3
            td.TemaColor03 Amarillo
          tr
            td.fw-bold R05
            td 5
            td 4
            td.TemaColor04 Naranja
          tr
            td.fw-bold R06
            td 3
            td 1
            td.TemaColor02 Verde
          tr
            td.fw-bold R07
            td 1
            td 3
            td.TemaColor02 Verde

    .h5.pt-5 1.1.4 Técnica MoSCoW

    p.mb-4 Esta técnica se basa en la asignación de etiquetas a cada requerimiento, y las disponibles se relacionan a continuación:

    .row.mb-5
      .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
        .tarjeta.tarjeta--boton.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src="@/assets/curso/tema1/img07.svg", alt="item")
          p.text-center M: indica una funcionalidad que debe estar (Must).
  
      .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
        .tarjeta.tarjeta--boton.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src="@/assets/curso/tema1/img08.svg", alt="item")
          p.text-center S: indica una funcionalidad que debería estar (Should).
  
      .col-sm-6.col-lg-3.mb-4.mb-sm-0.d-flex
        .tarjeta.tarjeta--boton.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src="@/assets/curso/tema1/img09.svg", alt="item")
          p.text-center C: indica una funcionalidad que podría estar (Could).
  
      .col-sm-6.col-lg-3.d-flex
        .tarjeta.tarjeta--boton.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src="@/assets/curso/tema1/img10.svg", alt="item")
          p.text-center W: indica una funcionalidad que no estará por ahora, de pronto más adelante (Wont).
    
    p.mb-4 Los requerimientos son priorizados utilizando el siguiente orden: primero los que tienen etiqueta M, luego los requerimientos con etiqueta S, después aquellos con C y, finalmente, los etiquetados como W.

    .row.mb-5.justify-content-center.align-items-center
      .col-12.col-md-8.mb-4.mb-md-0
        p.mb-4 Esta técnica requiere de un proceso de consenso sobre el significado de cada una de las etiquetas asignables a cada requerimiento. Los requisitos de tipo M son aquellos obligatorios y que, de no ser abordados, implicaría directamente el fracaso; es importante entonces acordar qué se puede entregar y que sea útil, adicionalmente deben formar parte de un conjunto coherente, ya que si, sencillamente se seleccionan todos los requerimientos de tipo M, automáticamente todos se transforman en requerimientos de tipo M y se pierde la dinámica de la técnica.
        p Normalmente el proceso de desarrollo de software es iterativo e incremental por lo que dependiendo del momento en que se encuentre un requerimiento, que ahora puede ser W, en la siguiente iteración puede asumir un valor de M. 
      .col-8.col-md-4
        figure
          img(src="@/assets/curso/tema1/img11.png", alt="proceso de análisis de requisitos")
    
    .h5.pt-5 1.1.5 Juicio de expertos

    figure.mb-5.mt-4
      img(src="@/assets/curso/tema1/img12.png", alt="Introducción")

    .row.mb-5.justify-content-center
      .col-8.col-md-4.mb-4.mb-md-0.TemaColor01.rounded.d-flex.align-items-center
        figure
          img.w-25.mx-auto.m-4(src="@/assets/curso/tema1/img13.svg", alt="proceso de priorizació")
      .col-12.col-md-8
        p.mb-4 Es una técnica basada principalmente en función de la complejidad y la exactitud en los resultados, básicamente consiste en realizar el proceso de priorización utilizando como base la opinión del gerente de proyecto o dueño de producto, o de algún stakeholder con conocimientos en la industria asociada al producto a desarrollar (Porfirio, 2021).

        p Este tipo de técnica funciona muy bien para proyectos pequeños con un dueño de negocio que tiene mucho conocimiento del problema y de la solución que necesita para resolverlo; sin embargo, se debe utilizar esta técnica con cuidado ya que se basa en una visión sesgada del negocio.
    
    .h5.pt-5 1.1.6 Matriz de priorización

    p.mb-4 Esta técnica consiste en construir una tabla donde cada requerimiento es valorado en una escala de 0 a 10 o de 0 a 100 para cada dimensión alineada con los objetivos del producto. Normalmente cada dimensión tiene un peso porcentual, de modo que cada requerimiento tendrá un valor final a partir de la sumatoria de la multiplicación de cada puntuación por el peso de cada dimensión (Porfirio, 2021).

    p.mb-4 Por ejemplo, se debe considerar la siguiente tabla:

    .conTabla.mb-3
      table.tabla-d.tableEx2.text-center.mb-3
        caption Tabla 4 - Ejemplo de aplicación técnica de matriz de priorización
        thead
          tr
            th(rowspan='3') Requerimiento
            th(colspan='3').TemaColorB Criterios
            th.TemaColorA Resultado
            th(rowspan='3') Ranking
          tr
            th(rowspan='2') Conversi&oacute;n 30%
            th(rowspan='2') Satisfacci&oacute;n de usuario 40%
            th(rowspan='2') Retenci&oacute;n 30%
            th(rowspan='2') 100%
          tr
        tbody
          tr
            td.fw-bold R01
            td 4
            td 3
            td 8
            td 4,8
            td 2
          tr
            td.fw-bold R02
            td 6
            td 4
            td 3
            td 4,3
            td 3
          tr
            td.fw-bold R03
            td 8
            td 7
            td 6
            td 7
            td 1
          tr
            td.fw-bold R04
            td 4
            td 2
            td 4
            td 3,2
            td 4

    p.mb-4 Suponiendo las dimensiones de conversión con un peso porcentual del 30%, la satisfacción del cliente con un peso porcentual del 40% y la retención de clientes con peso porcentual del 30%, cada uno de los requerimientos (R01-R04) son evaluados en una escala de 0 a 10, a los cuales se les aplica el cálculo de acuerdo con el valor porcentual de cada dimensión evaluada y el resultado se obtendría de la sumatoria de los valores parciales de cada dimensión, con lo cual los mayores valores totales obtenidos serán priorizados sobre los de menor valor.

    p.mb-4 Esta técnica sigue siendo muy subjetiva al igual que la técnica de juicio de expertos, aunque quedan claros cuáles son los criterios de evaluación utilizados para determinar la prioridad de los requisitos.

    #t_1_2.titulo-segundo.mt-5.pt-4
      .h4 1.2 Matriz de trazabilidad

    .cajon--rojo.p-4.mb-5
      p La matriz de trazabilidad es una herramienta que permite alinear los requisitos del proyecto con los logros de los objetivos, es una tabla que relaciona cada uno de los requerimientos con  el entregable solicitado. Es decir, permite identificar qué resultado se alcanza con cada requisito y, a la vez, permite visualizar qué requisitos son necesario cumplir para determinado entregable (Pantaleo, 2018).
    
    .row.mb-5.justify-content-center
      .col-8.col-md-4.mb-4.mb-md-0.TemaColor01.rounded.d-flex.align-items-center
        figure
          img.w-25.mx-auto.m-4(src="@/assets/curso/tema1/img14.svg", alt="proceso de priorizació")
      .col-12.col-md-8
        p.mb-4 Este es un instrumento clave para el responsable del proyecto, en especial en el proceso de seguimiento y control de cambios, ya que permite analizar qué requerimientos, eventualmente, convendría modificar, eliminar o añadir; así, se puede ajustar la planificación de tareas pendientes del proyecto. También permite identificar inconsistencias entre los requerimientos y los beneficios que se esperan alcanzar, tener una visualización rápida de los requisitos que han sido abordados y cuáles están pendientes por realizar y, por lo tanto, qué entregables están próximos a producirse y cuáles todavía requieren de mayor tiempo.

        p La estructura de la matriz de trazabilidad se puede construir en una hoja de cálculo, en ella se relacionan todos los requisitos y las metas a alcanzar junto con una serie de valores complementarios que aportan información y coherencia a los vínculos generados.
    
    p.mb-4 Cada organización es responsable de adaptar la matriz de correlación a sus necesidades particulares; en la siguiente figura se propone el contenido base de una matriz de correlación dividida por secciones.

    TabsC.mb-2
      .py-3.py-md-4(titulo="Identificación")
        .row.justify-content-center
          .col-8.col-md-3.mb-4.mb-md-0.TemaColor01.rounded.d-flex.align-items-center
            figure
              img.w-50.mx-auto.m-4(src="@/assets/curso/tema1/img15.svg", alt="proceso de priorizació")
          .col-12.col-md-9
            .h4 Identificación
            p
              strong Identificador:
              |  c&oacute;digo &uacute;nico para cada requisito.
            p
              strong C&oacute;digo jer&aacute;rquico:
              |  c&oacute;digo que permite categorizar cada grupo de requisitos.
            p
              strong Descripci&oacute;n:
              |  texto explicativo del requerimiento.
            p
              strong Tipo:
              |  categor&iacute;a del requisito (requerimiento de negocio, requerimiento de los interesados, funcionales y no funcionales, requerimientos del proyecto, requerimiento de calidad)
          
      .py-3.py-md-4(titulo="Estado")
        .row.justify-content-center
          .col-8.col-md-3.mb-4.mb-md-0.TemaColor01.rounded.d-flex.align-items-center
            figure
              img.w-50.mx-auto.m-4(src="@/assets/curso/tema1/img16.svg", alt="proceso de priorizació")
          .col-12.col-md-9
            .h4 Estado
            p
              strong Versi&oacute;n:
              |  versi&oacute;n del requerimiento (importante para el control de cambios).
            p
              strong Estado:
              |  activo, cancelado, diferido, agregado, aprobado, asignado o completado.
            p
              strong Fecha de estado:
              |  momento en el que se realiz&oacute; la &uacute;ltima modificaci&oacute;n del estado.
            p
              strong Responsable:
              |  persona encargada del requisito.
            p
              strong Prioridad:
              |  escalas de prioridad usada en el proyecto (alta, media, baja; 1, 2, 3, 4, 5).
            p
              strong Otras caracter&iacute;sticas:
              |  cualquier otro campo de valor para la organizaci&oacute;n.
 
      .py-3.py-md-4(titulo="Objetivo")
        .row.justify-content-center
          .col-8.col-md-3.mb-4.mb-md-0.TemaColor01.rounded.d-flex.align-items-center
            figure
              img.w-50.mx-auto.m-4(src="@/assets/curso/tema1/img17.svg", alt="proceso de priorizació")
          .col-12.col-md-9
            .h4 Objetivo
            p
              strong Objetivo:
              |  objetivo que pretende alcanzar el requerimiento.
            p
              strong Necesidad de negocio:
              |  necesidad de negocio que se pretende cubrir con el objetivo del proyecto y por ende con el requisito.
            p
              strong Entregable:
              |  producto.

    figure.mb-5
      figcaption Figura 1 - Contenido base matriz correlación.
    
    p.mb-4 A continuación, se muestra el ejemplo de la estructura en Excel de una matriz de trazabilidad.

    .conTabla.mb-4
      table.tabla-d.tableEx.text-center.mb-3
        caption Tabla 5 - Ejemplo de la estructura de una matriz de trazabilidad.

        thead
          tr
            th(colspan='4') IDENTIFICACI&Oacute;N
            th(colspan='4').TemaColorA ESTADO
            th(colspan='3') CARACTER&Iacute;STICAS
            th(colspan='3').TemaColorA OBJETIVO
        tbody
          tr
            td Id
            td C&oacute;digo jer&aacute;rquico
            td Descripci&oacute;n
            td Tipo
            td Versi&oacute;n
            td Estado
            td Fecha de estado
            td Responsable
            td Prioridad
            td Complejidad
            td Grado de cumplimiento
            td Objetivo
            td Necesidad del negocio
            td Entregable
          tr
            td  
            td  
            td  
            td  
            td  
            td  
            td  
            td  
            td  
            td  
            td  
            td  
            td  
            td  
          tr
            td  
            td  
            td  
            td  
            td  
            td  
            td  
            td  
            td  
            td  
            td  
            td  
            td  
            td  
          tr
            td  
            td  
            td  
            td  
            td  
            td  
            td  
            td  
            td  
            td  
            td  
            td  
            td  
            td  
          tr
            td  
            td  
            td  
            td  
            td  
            td  
            td  
            td  
            td  
            td  
            td  
            td  
            td  
            td  
    
    .tarjeta.tarjeta--morada.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/template/icono-xls.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h5.mb-0 Ejemplo de la estructura de una matriz de trazabilidad
              p.text-small Documento XLS
            .col-sm-auto
              a.boton.boton--b(:href="obtenerLink('/downloads/Ejemplo_estructura_matriz_trazabilidad.xlsx')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    p.w-75.mb-4 Al construir una matriz de trazabilidad se deben usar los campos que se consideren útiles para el proyecto, pues no todos los proyectos son iguales y la estructura definida para uno puede no resultar conveniente para otro proyecto. Cuando se usa, esta matriz debe permanecer actualizada a lo largo del ciclo de vida de construcción del proyecto.

    #t_1_3.titulo-segundo.mt-5.pt-4
      .h4 1.3 Descomposición funcional

    p.mb-4 Esta estrategia consiste en definir los requerimientos como una relación de entradas y salidas de un sistema. Normalmente, estos requerimientos se definen de manera muy general y poco detallada y luego empieza a descomponerse en funcionalidades y subfuncionalidades un poco más detallados con el ánimo de analizarlas individualmente hasta lograr un nivel de detalle adecuado para el proyecto, a esta estructura se le conoce como top-down; el resultado es una estructura jerárquica (Pantaleo, 2018).

    p.mb-4 La descomposición funcional se realiza, por lo general, para identificar y entender los componentes o partes que constituyen un todo; en este proceso es vital identificar las interacciones entre componentes. A continuación, se expone un ejemplo gráfico sobre esta descomposición funcional.

    figure
      img(src='@/assets/curso/tema1/img18.svg', alt='Ejemplo de descomposición funcional de un sistema de gestión comercialización de productos')
      figcaption Figura 2 - Ejemplo de descomposición funcional de un sistema de gestión comercialización de productos (fragmento).

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema1',
  components: {
    BannerInterno,
  },
}
</script>

<style lang="sass" scoped></style>
