export const global = {
  programaFormacion: 'Construcción de requisitos del software',
  componenteFormativo: 'Análisis y especificación de requisitos',
  descripcionCurso:
    'En este componente formativo se abordan el análisis de requisitos (priorización, descomposición funcional, matriz de trazabilidad) y estándares, y/o guías existentes para la especificación formal de los mismos dependiendo del tipo de marco de trabajo usado (tradición o ágil).',
  imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
  fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
}

export const menuPrincipal = {
  menu: [
    {
      nombreRuta: 'inicio',
      icono: 'fas fa-home',
      titulo: 'Volver al inicio',
    },
    {
      nombreRuta: 'introduccion',
      icono: 'fas fa-info',
      titulo: 'Introducción',
      desarrolloContenidos: true,
    },
    {
      nombreRuta: 'tema1',
      icono: 'far fa-file-alt',
      numero: '1',
      titulo: 'Técnicas de análisis de requisitos',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '1.1',
          titulo: 'Priorización de requisitos',
          hash: 't_1_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.2',
          titulo: 'Matrices de trazabilidad',
          hash: 't_1_2',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.3',
          titulo: 'Descomposición funcional',
          hash: 't_1_3',
        },
      ],
    },
    {
      nombreRuta: 'tema2',
      icono: 'far fa-file-alt',
      numero: '2',
      titulo: 'Especificación de requisitos',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '2.1',
          titulo: 'Estándar IEEE 830',
          hash: 't_2_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '2.2',
          titulo: 'Estándar IEEE 29148:2018',
          hash: 't_2_2',
        },
        {
          icono: 'far fa-file-alt',
          numero: '2.3',
          titulo:
            'La especificación de requisitos a través de métodos y metodologías ágiles',
          hash: 't_2_3',
        },
        {
          icono: 'far fa-file-alt',
          numero: '2.4',
          titulo: 'Scrum y la especificación de requisitos',
          hash: 't_2_4',
        },
        {
          icono: 'far fa-file-alt',
          numero: '2.5',
          titulo: 'Kanban y la especificación de requisitos',
          hash: 't_2_5',
        },
      ],
    },
  ],
  subMenu: [
    {
      nombreRuta: 'actividad',
      icono: 'fas fa-tasks',
      titulo: 'Actividad didáctica',
      desarrolloContenidos: true,
    },
    {
      nombreRuta: 'glosario',
      icono: 'fas fa-sort-alpha-down',
      titulo: 'Glosario',
    },
    {
      nombreRuta: 'complementario',
      icono: 'far fa-folder-open',
      titulo: 'Material complementario',
    },
    {
      icono: 'fas fa-book',
      titulo: 'Referencias bibliográficas',
      nombreRuta: 'referencias',
    },
    {
      icono: 'fas fa-download',
      titulo: 'Descargar material',
      download: 'downloads/material.zip',
    },
    {
      icono: 'far fa-registered',
      titulo: 'Créditos',
      nombreRuta: 'creditos',
    },
  ],
}

export const creditos = {
  liderEquipo: {
    nombre: 'Maria Camila Garcia Santamaria',
    cargo: 'Líder del equipo',
  },
  contenidoInstruccional: [
    {
      nombre: 'Rafael Neftalí Lizcano Reyes',
      cargo: 'Asesor metodológico y pedagógico',
      centro: 'Centro industrial del diseño y la manufactura',
      regional: 'Regional Santander',
    },
    {
      nombre: [
        'Henry Eduardo Bastidas Paruma',
        'Jonathan Guerrero Astaiza',
        'Peter Emerson Pinchao Solis',
        'Zulema Yidney León Escobar',
      ],
      cargo: 'Experto temático',
      centro: 'Centro de teleinformática y producción industrial',
      regional: 'Regional Cauca',
    },
    {
      nombre: ['Alix Cecilia Chinchilla Rueda', 'Oscar Absalón Guevara'],
      cargo: 'Diseñador instruccional',
      centro: 'Centro de gestión industrial',
      regional: 'Regional Bogotá',
    },
    {
      nombre: ['José Gabriel Ortiz Abella', 'Julia Isabel Roberto'],
      cargo: 'Evaluador instruccional',
      centro: 'Centro para la industria y la comunicación gráfica',
      regional: 'Regional Distrito Capital',
    },
    {
      nombre: 'Ana Catalina Córdoba Sus',
      cargo: 'Revisión metodológica y pedagógica',
      centro: 'Centro para la industria de la comunicación gráfica',
      regional: 'Regional Distrito Capital',
    },
    {
      nombre: 'María Isabel Román Rueda',
      cargo: 'Revisora de estilo',
      centro: 'Centro industrial del diseño Y la manufactura',
      regional: 'Regional Santander',
    },
  ],
  desarrolloProducto: [
    {
      nombre: 'Francisco José Lizcano Reyes',
      cargo: 'Responsable del equipo',
    },
    {
      nombre: 'Leyson Fabian Castaño Perez',
      cargo: 'Soporte organizacional',
    },
    {
      nombre: [
        'Camilo Andrés Villamizar Lizcano',
        'José Jaime Luis Tang Pinzón',
        'Juan Daniel Polanco Muñoz',
        'Nelson Iván Vera Briceño',
        'Wilson Andres Arenales Cáceres',
        'Yuly Andrea Rey Quiñonez',
      ],
      cargo: 'Diseño web y Producción Audiovisual',
    },
    {
      nombre: ['Lizeth Karina Manchego Suarez', 'Luis Gabriel Urueta Alvarez'],
      cargo: 'Desarrollo Front-End',
    },
    {
      centro: 'Centro industrial del diseño y la manufactura',
      regional: 'Regional Santander',
    },
    {
      nombre: 'Jhon Jairo Urueta Alvarez',
      cargo: 'Desarrollo Front-End',
      centro: 'Centro de comercio y servicios',
      regional: 'Regional Tolima',
    },
  ],
  gestoresRepositorio: [
    {
      nombre: ['Milady Tatiana Villamil Castellanos'],
      cargo: ['Validación de recursos'],
      centro: 'Centro de comercio y servicios',
      regional: 'Regional Tolima',
    },
  ],
}

export const referencias = [
  {
    referencia:
      '830-1998 - IEEE Recommended Practice for Software Requirements Specifications. (1998). IEEE Standard | IEEE Xplore.',
    link: 'https://ieeexplore.ieee.org/document/720574',
  },
  {
    referencia:
      'Pantaleo, L., y Rinaudo. (2018). Ingeniería de software. Alfaomega.',
    link: '',
  },
  {
    referencia:
      'Penzenstadler, B. (s. f.). Requirements engineering. CSU Long Beach.',
    link: 'https://bit.ly/3rtBKXN ',
  },
  {
    referencia:
      'Porfirio, C. (2021). Técnicas de priorización: el desafío de conseguir un orden para las funcionalidades.',
    link: 'https://bit.ly/3cvumqz',
  },
  {
    referencia:
      'Rivadeneira, M., S. G. (2014). Metodologías ágiles enfocadas al modelado de requerimientos. Informes Científicos Técnicos - UNPA, 5(1), 1-29.',
    link: 'https://doi.org/10.22305/ict-unpa.v5i1.66',
  },
  {
    referencia:
      'Scrum Certification, Agile Certification | Scrum, Agile Training. (n.d.). ScrumStudy.',
    link: 'https://www.scrumstudy.com',
  },
  {
    referencia:
      'Sommerville I. (2011). Ingeniería del software. Addison-Wesley.',
    link: '',
  },
]

export const glosario = [
  {
    termino: 'Estándar',
    significado:
      'referencia, patrón o modelo que es utilizado a nivel general en un determinado ámbito.',
  },
  {
    termino: 'Marcos de trabajo ágiles',
    significado:
      'conjunto de estándares, metodologías, técnicas, frameworks o guías que rigen un proceso de desarrollo de software basadas en principios y/o valores ágiles como, por ejemplo: Scrum, Lean Software, XP, TDD, entre otros.',
  },
  {
    termino: 'Marcos de trabajo tradicionales',
    significado:
      'conjunto de estándares, metodologías, técnicas, frameworks o guías que rigen un proceso de desarrollo de software basadas en el ciclo de vida tradicional del software como, por ejemplo: RUP, CMMI, ISO 9001, Microsoft Solution Framework, entre otros. ',
  },
  {
    termino: 'Metodología',
    significado:
      'síntesis de un conjunto de técnicas, métodos y procedimientos que se deben seguir durante el desarrollo de un proyecto.',
  },
  {
    termino: 'Pruebas unitarias',
    significado:
      'forma de comprobar el correcto funcionamiento de una unidad de código.',
  },
  {
    termino: 'Pruebas de integración',
    significado:
      'prueba que se ejecuta una vez se aprueban las pruebas unitarias y lo que busca es verificar que el conjunto de fragmentos de código funciona junto de forma correcta. Es una prueba de conjunto.',
  },
  {
    termino: 'Técnica',
    significado:
      'manera en la que un conjunto de procedimientos es aplicado en una tarea específica, con base en un conocimiento para obtener un resultado específico.',
  },
]

export const complementario = [
  {
    texto: 'UMNG. (2019). Elementos de la norma IEEE 830. [Video]. YouTube.',
    tipo: 'Video',
    link: 'https://youtu.be/LjBOTZdd_iE',
  },
  {
    texto:
      'California State University Long Beach. (2021). Requirements Engineering, CSU Long Beach, Penzenstadler. ',
    tipo: 'Página web',
    link: 'https://bit.ly/3rtBKXN',
  },
  {
    texto:
      '830-1998 - IEEE Recommended Practice for Software Requirements Specifications. (1998). IEEE Standard | IEEE Xplore.',
    tipo: 'Página web',
    link: 'https://ieeexplore.ieee.org/document/720574 ',
  },
  {
    texto: 'SO/IEC/IEEE 29148:2011. (s. f.). ISO. ',
    tipo: 'Página web',
    link: 'https://www.iso.org/standard/45171.html',
  },
  {
    texto:
      'Scrum Certification, Agile Certification | Scrum, Agile Training. (n.d.).',
    tipo: 'Video',
    link: 'https://www.scrumstudy.com',
  },
]
