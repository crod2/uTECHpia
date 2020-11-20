export default [
  {
    id: 1,
    title: 'capitalismo digital',
    radius: 175,
    related: [[5], [6, 7, 8, 6]],
    position: {
      x: 560,
      y: 160,
    },
    description:
      'El capitalismo digital, a menudo relacionado con el capitalismo de datos o el capitalismo de vigilancia, se entiende como la transformación del modelo capitalista a través de las nuevas tecnologías, así como los procesos que lo conforman.',
  },
  {
    title: 'tecnologías alternativas',
    radius: 120,
    id: 2,
    related: [
      [3, 4, 2],
      [11, 9, 12, 13, 11],
    ],
    position: {
      x: 1100,
      y: 230,
    },
    description:
      'Las tecnologías alternativas o ecotecnias, son innovaciones  tecnológicas diseñadas para preservar y restablecer el equilibrio entre el medio ambiente y la actividad humana.',
  },
  {
    title: 'tecnociencia feminista',
    radius: 120,
    id: 3,
    related: [
      [3, 2, 4, 3],
      [17, 16, 3],
      [16, 14],
    ],
    position: {
      x: 900,
      y: 550,
    },
    description:
      'La tecnociencia feminista es una rama transdisciplinar de los estudios científicos que surgió tras décadas de crítica feminista sobre la forma en que el género y otros marcadores de identidad se entrelazan en los campos combinados de la ciencia y la tecnología.',
  },
  {
    title: 'apropiación tecnológica',
    radius: 120,
    id: 4,
    related: [[4, 3, 2, 4], [15], [14], [13], [11]],
    position: {
      x: 1220,
      y: 580,
    },
    description:
      'La apropiación y reutilización de una tecnología de consumo, para un uso distinto al que dicha tecnología ha sido diseñada, se realiza gracias a un proceso que implica el paso por las etapas: adquisición de la tecnología de consumo, una formación y adaptación básica de su uso, y su utilización e integración.',
  },
  {
    title: 'precariza',
    radius: 50,
    id: 5,
    related: [[1], [7]],
    position: {
      x: 290,
      y: 120,
    },
    description: '',
  },
  {
    title: 'alimenta lógicas consumistas',
    radius: 50,
    id: 6,
    related: [[1], [5, 7, 8, 6]],
    position: {
      x: 380,
      y: 280,
    },
    description: '',
  },
  {
    title: 'destruye la vida',
    radius: 50,
    id: 7,
    related: [[5], [6, 1], [8]],
    position: {
      x: 180,
      y: 360,
    },
    description: '',
  },
  {
    title: 'destruye el planeta',
    radius: 50,
    id: 8,
    related: [[1], [7, 5], [6]],
    position: {
      x: 340,
      y: 480,
    },
    description: '',
  },
  {
    title: 'que experimenta',
    radius: 50,
    id: 9,
    related: [[12, 13], [11], [2]],
    position: {
      x: 1560,
      y: 120,
    },
    description: '',
  },
  {
    title: 'con software libre',
    radius: 50,
    id: 11,
    related: [[2], [4], [9, 12, 13, 11]],
    position: {
      x: 1420,
      y: 270,
    },
    description: '',
  },
  {
    title: 'recupera tecnologías antiguas',
    radius: 50,
    id: 12,
    related: [[9], [11, 2], [13]],
    position: {
      x: 1650,
      y: 340,
    },
    description: '',
  },
  {
    title: 'autogestionada',
    radius: 50,
    id: 13,
    related: [[2], [4, 14, 15, 13], [12, 9, 11, 13]],
    position: {
      x: 1500,
      y: 450,
    },
    description: '',
  },
  {
    title: 'que cuida las infraestructuras',
    radius: 50,
    id: 14,
    related: [[4], [16, 17, 3], [15, 13, 4]],
    position: {
      x: 1530,
      y: 860,
    },
    description: '',
  },
  {
    title: 'con datos sólo explotables dentro de las comunidades que los generan',
    radius: 50,
    id: 15,
    related: [
      [13, 4, 14, 15],
      [4, 3],
    ],
    position: {
      x: 1620,
      y: 620,
    },
    description: '',
  },
  {
    title: 'accesible',
    radius: 50,
    id: 16,
    related: [
      [3, 17, 16],
      [14, 15],
    ],
    position: {
      x: 1100,
      y: 880,
    },
    description: '',
  },
  {
    title: 'sin soluciones únicas',
    radius: 50,
    id: 17,
    related: [
      [3, 16, 17],
      [16, 4],
    ],
    position: {
      x: 860,
      y: 880,
    },
    description: '',
  },
];
