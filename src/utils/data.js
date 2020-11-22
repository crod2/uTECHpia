export default [
  {
    id: 1,
    title: 'Capitalismo digital',
    titleSize: 35,
    radius: 175,
    related: [[5], [6, 7, 8, 6]],
    position: {
      x: 560,
      y: 140,
    },
    description:
      'El capitalismo digital, a menudo relacionado con el capitalismo de datos o el capitalismo de vigilancia, se entiende como la transformación del modelo capitalista a través de las nuevas tecnologías, así como los procesos que lo conforman.',
  },
  {
    title: 'Tecnologías alternativas',
    radius: 120,
    titleSize: 30,
    id: 2,
    related: [
      [3, 4, 2],
      [11, 9, 12, 13, 11],
    ],
    position: {
      x: 1100,
      y: 210,
    },
    description:
      'Las tecnologías alternativas o ecotecnias, son innovaciones  tecnológicas diseñadas para preservar y restablecer el equilibrio entre el medio ambiente y la actividad humana.',
  },
  {
    title: 'Tecnociencia feminista',
    radius: 120,
    titleSize: 30,
    id: 3,
    related: [
      [3, 2, 4, 3],
      [17, 16, 3],
      [16, 14],
    ],
    position: {
      x: 900,
      y: 530,
    },
    description:
      'La tecnociencia feminista es una rama transdisciplinar de los estudios científicos que surgió tras décadas de crítica feminista sobre la forma en que el género y otros marcadores de identidad se entrelazan en los campos combinados de la ciencia y la tecnología.',
  },
  {
    title: 'Reapropiación tecnológica',
    titleSize: 30,
    radius: 120,
    id: 4,
    related: [[4, 3, 2, 4], [15], [14], [13], [11]],
    position: {
      x: 1220,
      y: 560,
    },
    description:
      'La apropiación y reutilización de una tecnología de consumo, para un uso distinto al que dicha tecnología ha sido diseñada, se realiza gracias a un proceso que implica el paso por las etapas: adquisición de la tecnología de consumo, una formación y adaptación básica de su uso, y su utilización e integración.',
  },
  {
    title: 'Precariza',
    titleSize: 18,
    radius: 60,
    id: 5,
    related: [[1], [7]],
    position: {
      x: 200,
      y: 120,
    },
    description: '',
  },
  {
    title: 'Alimenta lógicas consumistas',
    titleSize: 18,
    radius: 60,
    id: 6,
    related: [[1], [5, 7, 8, 6]],
    position: {
      x: 350,
      y: 260,
    },
    description: '',
  },
  {
    title: 'Destruye la vida',
    titleSize: 18,
    radius: 60,
    id: 7,
    related: [[5], [6, 1], [8]],
    position: {
      x: 140,
      y: 340,
    },
    description: '',
  },
  {
    title: 'Destruye el planeta',
    titleSize: 18,
    radius: 60,
    id: 8,
    related: [[1], [7, 5], [6]],
    position: {
      x: 310,
      y: 460,
    },
    description: '',
  },
  {
    title: 'Que experimenta',
    titleSize: 18,
    radius: 60,
    id: 9,
    related: [[12, 13], [11], [2]],
    position: {
      x: 1560,
      y: 100,
    },
    description: '',
  },
  {
    title: 'Con software libre',
    titleSize: 18,
    radius: 60,
    id: 11,
    related: [[2], [4], [9, 12, 13, 11]],
    position: {
      x: 1420,
      y: 250,
    },
    description: '',
  },
  {
    title: 'Recupera tecnologías antiguas',
    titleSize: 18,
    radius: 70,
    id: 12,
    related: [[9], [11, 2], [13]],
    position: {
      x: 1650,
      y: 290,
    },
    description: '',
  },
  {
    title: 'Autogestionada',
    titleSize: 18,
    radius: 60,
    id: 13,
    related: [[2], [4, 14, 15, 13], [12, 9, 11, 13]],
    position: {
      x: 1500,
      y: 430,
    },
    description: '',
  },
  {
    title: 'Que cuida las infraestructuras',
    titleSize: 18,
    radius: 60,
    id: 14,
    related: [[4], [16, 17, 3], [15, 13, 4]],
    position: {
      x: 1510,
      y: 820,
    },
    description: '',
  },
  {
    title: 'Datos explotables por las comunidades que los generan',
    titleSize: 18,
    radius: 80,
    id: 15,
    related: [
      [13, 4, 14, 15],
      [4, 3],
    ],
    position: {
      x: 1620,
      y: 600,
    },
    description: '',
  },
  {
    title: 'Accesible',
    titleSize: 18,
    radius: 60,
    id: 16,
    related: [
      [3, 17, 16],
      [14, 15],
    ],
    position: {
      x: 1100,
      y: 840,
    },
    description: '',
  },
  {
    title: 'Sin soluciones únicas',
    titleSize: 18,
    radius: 60,
    id: 17,
    related: [
      [3, 16, 17],
      [16, 4],
    ],
    position: {
      x: 860,
      y: 840,
    },
    description: '',
  },
];
