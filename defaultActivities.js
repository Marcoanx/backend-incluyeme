// Archivo: defaultActivities.js

const actividadesBase = [
  
  // ------------------------------------
  // 1. CÁLCULO
  // ------------------------------------
  {
    titulo: 'Suma Básica',
    area: 'Cálculo',
    descripcion: 'Resuelve la siguiente suma.',
    indicacion: '2 + 3',
    correct: '5',
    img: ['3', '4', '5', '6'],
    tipo: 'opciones'
  },
  {
    titulo: 'Resta Básica',
    area: 'Cálculo',
    descripcion: 'Encuentra el resultado de la resta.',
    indicacion: '5 - 2',
    correct: '3',
    img: ['2', '3', '4', '5'],
    tipo: 'opciones'
  },

  // ------------------------------------
  // 2. DISCRIMINACIÓN DE FORMAS
  // ------------------------------------
  {
    titulo: 'Encuentra el Círculo',
    area: 'Discriminación de Formas',
    descripcion: 'Identifica la figura circular.',
    indicacion: '¿Cuál de estas figuras es un círculo?',
    correct: 'https://img.icons8.com/color/96/filled-circle.png',
    img: [
      'https://img.icons8.com/color/96/triangle.png',
      'https://img.icons8.com/color/96/filled-circle.png',
      'https://img.icons8.com/color/96/rounded-square.png'
    ],
    tipo: 'opciones'
  },
  {
    titulo: 'Identifica el Cuadrado',
    area: 'Discriminación de Formas',
    descripcion: 'Selecciona la figura con 4 lados iguales.',
    indicacion: 'Toca el Cuadrado',
    correct: 'https://img.icons8.com/color/96/rounded-square.png',
    img: [
      'https://img.icons8.com/color/96/rounded-square.png',
      'https://img.icons8.com/color/96/triangle.png',
      'https://img.icons8.com/color/96/pentagon.png'
    ],
    tipo: 'opciones'
  },

  // ------------------------------------
  // 3. SENSOPERCEPCIÓN
  // ------------------------------------
  {
    titulo: 'Identifica el Color Rojo',
    area: 'Sensopercepción',
    descripcion: 'Reconoce el color primario.',
    indicacion: 'Selecciona la mancha de color ROJO.',
    correct: 'https://img.icons8.com/color/96/red-circle.png',
    img: [
      'https://img.icons8.com/color/96/blue-circle.png',
      'https://img.icons8.com/color/96/green-circle.png',
      'https://img.icons8.com/color/96/red-circle.png'
    ],
    tipo: 'opciones'
  },
  {
    titulo: 'Frío o Caliente',
    area: 'Sensopercepción',
    descripcion: 'Asocia el objeto con la temperatura.',
    indicacion: '¿Qué elemento es muy CALIENTE?',
    correct: 'https://img.icons8.com/color/96/sun.png',
    img: [
      'https://img.icons8.com/color/96/winter.png', // Hielo/nieve
      'https://img.icons8.com/color/96/ice-cream-cone.png', // Helado
      'https://img.icons8.com/color/96/sun.png' // Sol
    ],
    tipo: 'opciones'
  },

  // ------------------------------------
  // 4. NOCIONES TEMPOESPACIALES
  // ------------------------------------
  {
    titulo: 'Arriba y Abajo',
    area: 'Nociones Tempoespaciales',
    descripcion: 'Identifica la dirección correcta.',
    indicacion: 'Toca la flecha que apunta hacia ARRIBA.',
    correct: 'https://img.icons8.com/color/96/up--v1.png',
    img: [
      'https://img.icons8.com/color/96/down--v1.png',
      'https://img.icons8.com/color/96/up--v1.png'
    ],
    tipo: 'opciones'
  },
  {
    titulo: 'Día y Noche',
    area: 'Nociones Tempoespaciales',
    descripcion: 'Asocia la actividad con el momento del día.',
    indicacion: '¿Qué vemos en el cielo de NOCHE?',
    correct: 'https://img.icons8.com/color/96/moon.png',
    img: [
      'https://img.icons8.com/color/96/sun.png',
      'https://img.icons8.com/color/96/moon.png'
    ],
    tipo: 'opciones'
  },

  // ------------------------------------
  // 5. MEMORIA AUDITIVA
  // ------------------------------------
  {
    titulo: 'Sonido de Animales',
    area: 'Memoria Auditiva',
    descripcion: 'Recuerda qué animal hace este sonido.',
    indicacion: '¿Qué animal hace "Muuu"?',
    correct: 'https://img.icons8.com/color/96/cow.png',
    img: [
      'https://img.icons8.com/color/96/dog.png',
      'https://img.icons8.com/color/96/cow.png',
      'https://img.icons8.com/color/96/bird.png'
    ],
    tipo: 'opciones'
  },
  {
    titulo: 'Instrumentos',
    area: 'Memoria Auditiva',
    descripcion: 'Identifica el instrumento.',
    indicacion: '¿Qué instrumento se toca con baquetas?',
    correct: 'https://img.icons8.com/color/96/drum-set.png',
    img: [
      'https://img.icons8.com/color/96/guitar.png',
      'https://img.icons8.com/color/96/drum-set.png'
    ],
    tipo: 'opciones'
  },

  // ------------------------------------
  // 6. LECTURA
  // ------------------------------------
  {
    titulo: 'Inicial de Avión',
    area: 'Lectura',
    descripcion: 'Encuentra la letra inicial.',
    indicacion: '¿Con qué vocal empieza la palabra "Avión"?',
    correct: 'A',
    img: ['A', 'E', 'I', 'O'],
    tipo: 'opciones'
  },
  {
    titulo: 'Completa la Palabra',
    area: 'Lectura',
    descripcion: 'Elige la letra que falta.',
    indicacion: 'P E R R _',
    correct: 'O',
    img: ['A', 'E', 'I', 'O'],
    tipo: 'opciones'
  },

  // ------------------------------------
  // 7. MEMORIA VISUAL
  // ------------------------------------
  {
    titulo: 'Encuentra al Gato',
    area: 'Memoria Visual',
    descripcion: 'Identifica al animal solicitado.',
    indicacion: 'Toca la imagen del GATO.',
    correct: 'https://img.icons8.com/color/96/cat.png',
    img: [
      'https://img.icons8.com/color/96/pig.png',
      'https://img.icons8.com/color/96/cat.png',
      'https://img.icons8.com/color/96/horse.png'
    ],
    tipo: 'opciones'
  },
  {
    titulo: 'Compañero Frutal',
    area: 'Memoria Visual',
    descripcion: 'Encuentra la fruta correcta.',
    indicacion: '¿Cuál de estas es una MANZANA?',
    correct: 'https://img.icons8.com/color/96/apple.png',
    img: [
      'https://img.icons8.com/color/96/banana.png',
      'https://img.icons8.com/color/96/apple.png',
      'https://img.icons8.com/color/96/orange.png'
    ],
    tipo: 'opciones'
  },

  // ------------------------------------
  // 8. LATERALIDAD
  // ------------------------------------
  {
    titulo: 'Mano Derecha',
    area: 'Lateralidad',
    descripcion: 'Reconoce la lateralidad derecha.',
    indicacion: 'Toca la mano DERECHA.',
    correct: 'https://img.icons8.com/color/96/right-hand.png',
    img: [
      'https://img.icons8.com/color/96/left-hand.png',
      'https://img.icons8.com/color/96/right-hand.png'
    ],
    tipo: 'opciones'
  },
  {
    titulo: 'Hacia la Izquierda',
    area: 'Lateralidad',
    descripcion: 'Identifica la dirección izquierda.',
    indicacion: '¿Qué flecha apunta a la IZQUIERDA?',
    correct: 'https://img.icons8.com/color/96/left--v1.png',
    img: [
      'https://img.icons8.com/color/96/right--v1.png',
      'https://img.icons8.com/color/96/left--v1.png'
    ],
    tipo: 'opciones'
  },

  // ------------------------------------
  // 9. PRENUMÉRICOS
  // ------------------------------------
  {
    titulo: 'Muchos y Pocos',
    area: 'Prenuméricos',
    descripcion: 'Identifica cantidades visualmente.',
    indicacion: '¿Dónde hay MUCHOS puntos?',
    correct: 'https://img.icons8.com/color/96/dice-six.png',
    img: [
      'https://img.icons8.com/color/96/dice-one.png',
      'https://img.icons8.com/color/96/dice-six.png'
    ],
    tipo: 'opciones'
  },
  {
    titulo: 'Grande y Pequeño',
    area: 'Prenuméricos',
    descripcion: 'Identifica proporciones.',
    indicacion: '¿Cuál número es de valor más GRANDE?',
    correct: '9',
    img: ['1', '4', '9', '2'],
    tipo: 'opciones'
  },

  // ------------------------------------
  // 10. ESQUEMA CORPORAL
  // ------------------------------------
  {
    titulo: 'Sentido de la Vista',
    area: 'Esquema Corporal',
    descripcion: 'Identifica partes del cuerpo.',
    indicacion: '¿Con qué parte del cuerpo podemos VER?',
    correct: 'https://img.icons8.com/color/96/eye.png',
    img: [
      'https://img.icons8.com/color/96/ear-symbol.png', // Oreja
      'https://img.icons8.com/color/96/eye.png',        // Ojo
      'https://img.icons8.com/color/96/lips.png'        // Boca
    ],
    tipo: 'opciones'
  },
  {
    titulo: 'Las Manos',
    area: 'Esquema Corporal',
    descripcion: 'Identifica extremidades.',
    indicacion: '¿Qué parte del cuerpo usamos para aplaudir?',
    correct: 'https://img.icons8.com/color/96/hand.png',
    img: [
      'https://img.icons8.com/color/96/footprint.png',  // Pie
      'https://img.icons8.com/color/96/hand.png'        // Mano
    ],
    tipo: 'opciones'
  },

  // ------------------------------------
  // 11. ESCRITURA
  // ------------------------------------
  {
    titulo: 'Minúsculas',
    area: 'Escritura',
    descripcion: 'Relaciona mayúscula con minúscula.',
    indicacion: '¿Cuál es la letra minúscula de la "A"?',
    correct: 'a',
    img: ['e', 'a', 'o', 'u'],
    tipo: 'opciones'
  },
  {
    titulo: 'Secuencia del Abecedario',
    area: 'Escritura',
    descripcion: 'Identifica la letra que sigue.',
    indicacion: 'A, B, C, ... ¿Qué letra sigue?',
    correct: 'D',
    img: ['E', 'D', 'F', 'G'],
    tipo: 'opciones'
  }
];

module.exports = actividadesBase;