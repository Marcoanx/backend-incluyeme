// ==========================================
// CONSTANTES DE IMÁGENES (Iconos amigables)
// ==========================================
const iCirculo = 'https://img.icons8.com/color/120/circle.png';
const iCuadrado = 'https://img.icons8.com/color/120/square.png';
const iTriangulo = 'https://img.icons8.com/color/120/triangle.png';

const iManzana = 'https://img.icons8.com/color/120/apple.png';
const iPera = 'https://img.icons8.com/color/120/pear.png';
const iPlatano = 'https://img.icons8.com/color/120/banana.png';

const iPerro = 'https://img.icons8.com/color/120/dog.png';
const iGato = 'https://img.icons8.com/color/120/cat.png';
const iVaca = 'https://img.icons8.com/color/120/cow.png';
const iCerdo = 'https://img.icons8.com/color/120/pig.png';
const iPato = 'https://img.icons8.com/color/120/duck.png';

const iCoche = 'https://img.icons8.com/color/120/car.png';
const iTren = 'https://img.icons8.com/color/120/train.png';
const iAvion = 'https://img.icons8.com/color/120/airplane-take-off.png';

// Función para estructurar las preguntas
const crearEval = (titulo, area, preguntasData) => {
    return {
        titulo: titulo,
        area: area,
        tipo: 'cerrada',
        preguntas: preguntasData.map(p => ({
            indicacion: p[0],
            correct: p[1],
            img: [p[2], p[3], p[4]], // Opciones mezcladas
            sound: ''
        }))
    };
};

const evaluacionesPredeterminadas = [
    // 1. CÁLCULO (Texto y números grandes)
    crearEval('Examen: Sumas Básicas', 'Cálculo', [
        ['¿Cuánto es 1 + 1?', '2', '1', '2', '3'],
        ['¿Cuánto es 2 + 2?', '4', '4', '2', '5'],
        ['¿Cuánto es 3 + 1?', '4', '3', '5', '4'],
        ['¿Cuánto es 5 + 0?', '5', '0', '5', '1'],
        ['¿Cuánto es 2 + 3?', '5', '5', '4', '6'],
        ['¿Cuánto es 4 + 2?', '6', '7', '6', '5'],
        ['¿Cuánto es 3 + 3?', '6', '6', '9', '3']
    ]),
    crearEval('Examen: Restas Básicas', 'Cálculo', [
        ['¿Cuánto es 2 - 1?', '1', '1', '2', '0'],
        ['¿Cuánto es 3 - 1?', '2', '3', '1', '2'],
        ['¿Cuánto es 4 - 2?', '2', '4', '2', '3'],
        ['¿Cuánto es 5 - 3?', '2', '2', '1', '3'],
        ['¿Cuánto es 5 - 5?', '0', '1', '5', '0'],
        ['¿Cuánto es 4 - 1?', '3', '2', '3', '5'],
        ['¿Cuánto es 6 - 3?', '3', '3', '2', '4']
    ]),

    // 2. DISCRIMINACIÓN DE FORMAS (Usa Imágenes reales)
    crearEval('Evaluación: Figuras Geométricas', 'Discriminación de Formas', [
        ['Selecciona el TRIÁNGULO (3 lados)', iTriangulo, iCirculo, iCuadrado, iTriangulo],
        ['Selecciona el CÍRCULO (Redondo)', iCirculo, iCirculo, iTriangulo, iCuadrado],
        ['Selecciona el CUADRADO (Caja)', iCuadrado, iTriangulo, iCuadrado, iCirculo],
        ['¿Qué figura NO tiene esquinas?', iCirculo, iTriangulo, iCuadrado, iCirculo],
        ['¿A qué figura se parece una rebanada de pizza?', iTriangulo, iCuadrado, iTriangulo, iCirculo],
        ['¿A qué figura se parece una pelota?', iCirculo, iCirculo, iCuadrado, iTriangulo],
        ['Selecciona de nuevo el Cuadrado', iCuadrado, iCuadrado, iCirculo, iTriangulo]
    ]),
    crearEval('Evaluación: Tamaños', 'Discriminación de Formas', [
        ['¿Cuál es más grande?', 'Un elefante', 'Un perro', 'Un elefante', 'Un ratón'],
        ['¿Cuál es más pequeño?', 'Una hormiga', 'Un gato', 'Un caballo', 'Una hormiga'],
        ['Selecciona lo más largo', 'Un tren', 'Un coche', 'Una bicicleta', 'Un tren'],
        ['Selecciona lo más corto', 'Un lápiz nuevo', 'Un lápiz usado', 'Un lápiz nuevo', 'Una regla'],
        ['¿Qué animal es más alto?', 'Una jirafa', 'Un león', 'Un oso', 'Una jirafa'],
        ['¿Qué fruta es más pequeña?', 'Una uva', 'Una manzana', 'Una sandía', 'Una uva'],
        ['¿Qué objeto es más grande?', 'Una casa', 'Una silla', 'Una casa', 'Una mesa']
    ]),

    // 3. SENSOPERCEPCIÓN
    crearEval('Prueba: Temperatura y Textura', 'Sensopercepción', [
        ['¿Cómo se siente el hielo?', 'Frío', 'Caliente', 'Frío', 'Tibio'],
        ['¿Cómo está el fuego?', 'Caliente', 'Frío', 'Helado', 'Caliente'],
        ['¿Cómo es una almohada?', 'Suave', 'Dura', 'Áspera', 'Suave'],
        ['¿Cómo es una piedra?', 'Dura', 'Suave', 'Blanda', 'Dura'],
        ['¿Cómo se siente el algodón?', 'Suave', 'Suave', 'Rasposo', 'Duro'],
        ['¿Cómo se siente la lija?', 'Rasposa', 'Lisa', 'Rasposa', 'Suave'],
        ['¿Cómo está el sol?', 'Caliente', 'Frío', 'Caliente', 'Húmedo']
    ]),
    crearEval('Prueba: Sabores y Olores', 'Sensopercepción', [
        ['¿A qué sabe el limón?', 'Ácido', 'Dulce', 'Salado', 'Ácido'],
        ['¿A qué sabe el azúcar?', 'Dulce', 'Amargo', 'Dulce', 'Picante'],
        ['¿Cómo huele la basura?', 'Mal', 'Bien', 'Rico', 'Mal'],
        ['¿A qué sabe la sal?', 'Salado', 'Salado', 'Dulce', 'Ácido'],
        ['¿Cómo huele una flor?', 'Bien', 'Bien', 'Mal', 'A humo'],
        ['¿A qué sabe el pastel?', 'Dulce', 'Salado', 'Dulce', 'Amargo'],
        ['¿Qué pica al comerlo?', 'El chile', 'El plátano', 'La manzana', 'El chile']
    ]),

    // 4. NOCIONES TEMPOESPACIALES
    crearEval('Examen: Día y Noche', 'Nociones Tempoespaciales', [
        ['¿Qué sale de día?', 'El Sol', 'La Luna', 'El Sol', 'Las Estrellas'],
        ['¿Qué sale de noche?', 'La Luna', 'El Sol', 'El Arcoíris', 'La Luna'],
        ['¿Cuándo dormimos?', 'De Noche', 'De Día', 'De Noche', 'En la tarde'],
        ['¿Cuándo desayunamos?', 'En la mañana', 'En la noche', 'En la madrugada', 'En la mañana'],
        ['¿Qué haces antes de dormir?', 'Cenar', 'Desayunar', 'Ir a la escuela', 'Cenar'],
        ['¿A qué hora vas a la escuela?', 'De Día', 'De Noche', 'De Día', 'En la madrugada'],
        ['¿Cuándo se ven las estrellas?', 'De Noche', 'De Noche', 'De Día', 'Al mediodía']
    ]),
    crearEval('Examen: Arriba y Abajo', 'Nociones Tempoespaciales', [
        ['¿Dónde vuelan los aviones?', 'Arriba', 'Abajo', 'En el suelo', 'Arriba'],
        ['¿Dónde están los zapatos?', 'Abajo', 'Arriba', 'Abajo', 'En la cabeza'],
        ['¿Dónde está el techo?', 'Arriba', 'Abajo', 'En el piso', 'Arriba'],
        ['¿Dónde crece el pasto?', 'Abajo', 'Arriba', 'En el cielo', 'Abajo'],
        ['¿Dónde se pone el sombrero?', 'Arriba', 'Abajo', 'Arriba', 'En los pies'],
        ['¿Dónde están las nubes?', 'Arriba', 'Abajo', 'Arriba', 'En la tierra'],
        ['¿Dónde gatea un bebé?', 'Abajo', 'En el techo', 'En la pared', 'Abajo']
    ]),

    // 5. MEMORIA AUDITIVA (Con Imágenes de Animales)
    crearEval('Prueba: Identifica al Animal', 'Memoria Auditiva', [
        ['Selecciona al que hace: ¡Miau!', iGato, iPerro, iGato, iVaca],
        ['Selecciona al que hace: ¡Guau!', iPerro, iCerdo, iPerro, iPato],
        ['Selecciona al que hace: ¡Muuu!', iVaca, iVaca, iGato, iPerro],
        ['Selecciona al que hace: ¡Oink!', iCerdo, iCerdo, iPato, iGato],
        ['Selecciona al que hace: ¡Cuac!', iPato, iPerro, iVaca, iPato],
        ['¿Quién ladra al ver a un extraño?', iPerro, iGato, iPerro, iCerdo],
        ['¿Quién ronronea cuando está feliz?', iGato, iGato, iVaca, iPato]
    ]),
    crearEval('Prueba: Sonidos de la Ciudad', 'Memoria Auditiva', [
        ['¿Qué hace "Pip Pip"?', iCoche, iCoche, iAvion, iTren],
        ['¿Qué hace "Choo Choo"?', iTren, iAvion, iTren, iCoche],
        ['¿Qué suena en el cielo como "Fuuush"?', iAvion, iTren, iCoche, iAvion],
        ['¿Qué suena en una emergencia?', 'La Sirena', 'La Campana', 'La Sirena', 'El Timbre'],
        ['¿Qué suena en la puerta?', 'El Timbre', 'El Teléfono', 'La Alarma', 'El Timbre'],
        ['¿Qué hace "Tic Tac"?', 'El Reloj', 'El Coche', 'El Reloj', 'La Televisión'],
        ['¿Qué suena para despertar?', 'La Alarma', 'La Alarma', 'El Timbre', 'El Coche']
    ]),

    // 6. LECTURA
    crearEval('Evaluación: Identificar Vocales', 'Lectura', [
        ['¿Cuál es la primera vocal?', 'A', 'E', 'A', 'I'],
        ['¿Qué vocal sigue de la A?', 'E', 'O', 'I', 'E'],
        ['¿Cuál es la vocal redondita?', 'O', 'U', 'O', 'A'],
        ['¿Qué vocal tiene un puntito?', 'I', 'I', 'E', 'U'],
        ['¿Cuál es la última vocal?', 'U', 'A', 'O', 'U'],
        ['¿Con qué vocal empieza "Oso"?', 'O', 'E', 'O', 'U'],
        ['¿Con qué vocal empieza "Avión"?', 'A', 'E', 'A', 'I']
    ]),
    crearEval('Evaluación: Sílabas Iniciales', 'Lectura', [
        ['¿Con qué sílaba empieza "Mamá"?', 'Ma', 'Me', 'Ma', 'Mi'],
        ['¿Con qué sílaba empieza "Perro"?', 'Pe', 'Pa', 'Po', 'Pe'],
        ['¿Con qué sílaba empieza "Sopa"?', 'So', 'Sa', 'So', 'Su'],
        ['¿Con qué sílaba empieza "Gato"?', 'Ga', 'Ge', 'Go', 'Ga'],
        ['¿Con qué sílaba empieza "Luna"?', 'Lu', 'La', 'Le', 'Lu'],
        ['¿Con qué sílaba empieza "Dedo"?', 'De', 'Da', 'De', 'Di'],
        ['¿Con qué sílaba empieza "Bota"?', 'Bo', 'Ba', 'Bo', 'Bu']
    ]),

    // 7. MEMORIA VISUAL (Con Imágenes)
    crearEval('Examen: Encuentra al Intruso', 'Memoria Visual', [
        ['¿Quién NO es una fruta?', iPerro, iManzana, iPlatano, iPerro],
        ['¿Quién NO es un animal?', iPera, iGato, iVaca, iPera],
        ['¿Cuál NO es un medio de transporte?', iPlatano, iTren, iCoche, iPlatano],
        ['Selecciona la FRUTA escondida', iManzana, iPerro, iGato, iManzana],
        ['Selecciona al ANIMAL escondido', iCerdo, iCoche, iCerdo, iAvion],
        ['Selecciona al que vuela', iAvion, iTren, iCoche, iAvion],
        ['Selecciona al que nos da leche', iVaca, iGato, iVaca, iPerro]
    ]),
    crearEval('Examen: Pares y Secuencias', 'Memoria Visual', [
        ['Si ves Rojo, Azul, Rojo. ¿Qué sigue?', 'Azul', 'Rojo', 'Azul', 'Verde'],
        ['Si ves 1, 2, 1, 2. ¿Qué sigue?', '1', '1', '2', '3'],
        ['Día, Noche, Día. ¿Qué sigue?', 'Noche', 'Día', 'Tarde', 'Noche'],
        ['Blanco, Negro, Blanco. ¿Qué sigue?', 'Negro', 'Blanco', 'Gris', 'Negro'],
        ['Si ves Círculo, Cuadrado, Círculo. ¿Qué sigue?', 'Cuadrado', 'Círculo', 'Cuadrado', 'Triángulo'],
        ['Grande, Pequeño, Grande. ¿Qué sigue?', 'Pequeño', 'Grande', 'Pequeño', 'Mediano'],
        ['Lunes, Martes, Lunes. ¿Qué sigue?', 'Martes', 'Lunes', 'Miércoles', 'Martes']
    ]),

    // 8. LATERALIDAD
    crearEval('Prueba: Izquierda y Derecha', 'Lateralidad', [
        ['¿Con qué mano escribes (usualmente)?', 'Derecha (o Izq)', 'Derecha', 'Izquierda', 'Ambas'],
        ['El corazón está más hacia la...', 'Izquierda', 'Derecha', 'Izquierda', 'Centro'],
        ['Para saludar de mano, usamos la...', 'Derecha', 'Izquierda', 'Derecha', 'Ninguna'],
        ['Si giras al lado contrario de la izquierda, es...', 'Derecha', 'Derecha', 'Arriba', 'Abajo'],
        ['El pedal del acelerador en un coche está a la...', 'Derecha', 'Izquierda', 'Derecha', 'Atrás'],
        ['Al leer, empezamos de...', 'Izquierda a Derecha', 'Izquierda a Derecha', 'Derecha a Izquierda', 'Abajo a Arriba'],
        ['Para cruzar la calle, miramos a ambos...', 'Lados', 'Arriba', 'Abajo', 'Lados']
    ]),
    crearEval('Prueba: Simetría del Cuerpo', 'Lateralidad', [
        ['¿Cuántos brazos tenemos?', '2', '1', '2', '3'],
        ['¿Cuántas piernas tenemos?', '2', '2', '1', '4'],
        ['¿Cuántas narices tenemos?', '1', '2', '1', '0'],
        ['¿Cuántos ojos tenemos?', '2', '1', '2', '3'],
        ['¿Cuántas orejas tenemos?', '2', '2', '1', '3'],
        ['¿Cuántas bocas tenemos?', '1', '2', '1', '3'],
        ['¿Cuántos dedos en una mano?', '5', '4', '5', '10']
    ]),

    // 9. PRENUMÉRICOS
    crearEval('Examen: Cantidades', 'Prenuméricos', [
        ['¿Dónde hay más agua?', 'En el mar', 'En un vaso', 'En una botella', 'En el mar'],
        ['¿Dónde hay menos galletas?', '1 galleta', '10 galletas', '5 galletas', '1 galleta'],
        ['¿Qué pesa más?', 'Una roca', 'Una pluma', 'Una hoja', 'Una roca'],
        ['¿Qué pesa menos?', 'Un globo', 'Una mesa', 'Una silla', 'Un globo'],
        ['¿Dónde cabe más gente?', 'Un autobús', 'Un coche', 'Una bicicleta', 'Un autobús'],
        ['Si no hay nada, ¿cuánto es?', 'Cero', 'Mucho', 'Cero', 'Poco'],
        ['Un montón gigante es...', 'Mucho', 'Nada', 'Poco', 'Mucho']
    ]),
    crearEval('Examen: Clasificación Básica', 'Prenuméricos', [
        ['El tomate y la fresa son de color...', 'Rojo', 'Azul', 'Rojo', 'Verde'],
        ['El cielo y el mar son de color...', 'Azul', 'Rojo', 'Azul', 'Amarillo'],
        ['El Sol y el plátano son de color...', 'Amarillo', 'Azul', 'Amarillo', 'Verde'],
        ['El pasto y los árboles son de color...', 'Verde', 'Verde', 'Rojo', 'Morado'],
        ['La nieve y las nubes son de color...', 'Blanco', 'Negro', 'Gris', 'Blanco'],
        ['El carbón y la noche oscura son de color...', 'Negro', 'Blanco', 'Rojo', 'Negro'],
        ['El cerdo y el chicle son de color...', 'Rosa', 'Rosa', 'Marrón', 'Naranja']
    ]),

    // 10. ESQUEMA CORPORAL
    crearEval('Evaluación: Partes de la Cara', 'Esquema Corporal', [
        ['¿Con qué vemos?', 'Ojos', 'Orejas', 'Boca', 'Ojos'],
        ['¿Con qué olemos?', 'Nariz', 'Ojos', 'Nariz', 'Manos'],
        ['¿Con qué comemos y hablamos?', 'Boca', 'Orejas', 'Manos', 'Boca'],
        ['¿Con qué escuchamos?', 'Orejas', 'Ojos', 'Orejas', 'Nariz'],
        ['¿Qué tenemos en la cabeza (que crece)?', 'Cabello', 'Dientes', 'Cabello', 'Uñas'],
        ['¿Qué hay dentro de la boca para masticar?', 'Dientes', 'Dientes', 'Lengua', 'Labios'],
        ['¿Con qué saboreamos la comida?', 'Lengua', 'Dientes', 'Lengua', 'Nariz']
    ]),
    crearEval('Evaluación: Tronco y Extremidades', 'Esquema Corporal', [
        ['¿Con qué caminamos?', 'Piernas', 'Brazos', 'Piernas', 'Cabeza'],
        ['¿Con qué abrazamos?', 'Brazos', 'Brazos', 'Piernas', 'Espalda'],
        ['¿Qué flexiona la pierna?', 'Rodilla', 'Codo', 'Rodilla', 'Cuello'],
        ['¿Qué flexiona el brazo?', 'Codo', 'Codo', 'Rodilla', 'Tobillo'],
        ['¿Dónde está el ombligo?', 'En la panza/abdomen', 'En la espalda', 'En la panza/abdomen', 'En la cabeza'],
        ['¿Qué une la cabeza con el cuerpo?', 'El cuello', 'El pecho', 'El cuello', 'La cadera'],
        ['¿Con qué agarramos las cosas?', 'Manos', 'Manos', 'Pies', 'Codos']
    ]),

    // 11. ESCRITURA
    crearEval('Examen: Identificar Trazos', 'Escritura', [
        ['¿Qué letra es redonda?', 'O', 'T', 'L', 'O'],
        ['¿Qué letra es una línea recta vertical?', 'I', 'I', 'O', 'C'],
        ['¿Qué letra parece una cruz?', 'T', 'O', 'T', 'S'],
        ['¿Qué letra parece una serpiente?', 'S', 'S', 'L', 'I'],
        ['¿Qué letra tiene dos montañas?', 'M', 'N', 'M', 'I'],
        ['¿Qué letra parece un columpio?', 'U', 'A', 'U', 'T'],
        ['¿Qué letra es un palito y una bolita?', 'P', 'P', 'X', 'M']
    ]),
    crearEval('Examen: Completar Palabras', 'Escritura', [
        ['Completa: C _ S A', 'A', 'O', 'A', 'E'],
        ['Completa: P _ R R O', 'E', 'A', 'I', 'E'],
        ['Completa: G _ T O', 'A', 'A', 'O', 'U'],
        ['Completa: S O _', 'L', 'M', 'P', 'L'],
        ['Completa: M A M _', 'Á', 'O', 'I', 'Á'],
        ['Completa: L U N _', 'A', 'O', 'A', 'E'],
        ['Completa: A G U _', 'A', 'O', 'A', 'I']
    ])
];

module.exports = evaluacionesPredeterminadas;