/* =====================================================================
   CASA EDITORIAL GEFAO · catalogo.js
   ---------------------------------------------------------------------
   Este archivo tiene DOS partes:

   PARTE 1 · DATOS (sí se edita)
     Aquí agregas, quitas o corriges revistas y libros.
     Todo el sitio se actualiza solo: grids, filtros por año,
     etiqueta NUEVO, página de detalle, carrito y Mis compras.

   PARTE 2 · FUNCIONES (no editar)
     Lógica compartida por las 4 páginas.
   ===================================================================== */


/* =====================================================================
   PARTE 1 · DATOS
   =====================================================================

   ── CÓMO AGREGAR UNA REVISTA NUEVA ──────────────────────────────────
   1. Copia la primera línea de "revistas" (la No. 204).
   2. Pégala ARRIBA de ella y cambia los datos. Ejemplo:

      { numero: 205, bimestre: "Septiembre – Octubre", anio: 2026, precio: 25,
        portada: "img/revistas/205.jpg", pdf: "pdf/revistas/205.pdf",
        temas: ["Tema 1", "Tema 2", "Tema 3"] },

   3. Sube la portada a  img/revistas/205.jpg  (proporción 3:4)
      y el PDF a          pdf/revistas/205.pdf
   4. Listo:
      · La etiqueta NUEVO pasa sola a la edición con el número más alto.
      · Si es la primera de un año nuevo (ej. 2027), el filtro
        "2027" aparece solo y el sitio abre en ese año.

   ── CAMPOS ──────────────────────────────────────────────────────────
   numero    Número de la edición (único, sin repetir)
   bimestre  Texto del bimestre, ej. "Enero – Febrero"
   anio      Año de la edición (número, sin comillas)
   precio    Precio final en MXN con IVA incluido (número, sin $)
   portada   Ruta de la imagen. Si no existe, se muestra un recuadro gris
   pdf       Ruta del PDF que se descarga desde Mis compras
   temas     Lista "Incluye otros importantes temas como…"
   ------------------------------------------------------------------- */

const GEFAO = {

  revistas: [
    /* ── 2026 ── */
    { numero: 205, bimestre: "Septiembre-Octubre", anio: 2026, precio: 25,
      portada: "img/revistas/205.jpg", pdf: "pdf/revistas/204.pdf",
      temas: [
        "Elecciones México 2027",
        "La nueva ley de Economía Digital",
        "Tollan, “Gran Ciudad”",
        "Origen Ancestral y cósmico del nombre de Coatzacoalcos",
        "Rudolf Steiner"
      ] },

      { numero: 204, bimestre: "Julio – Agosto", anio: 2026, precio: 25,
      portada: "img/revistas/204.jpg", pdf: "pdf/revistas/204.pdf",
      temas: [
        "¿Podría México girar políticamente a la derecha?",
        "La Reforma Judicial en México",
        "Tollan, “Gran Ciudad”",
        "El giro a la derecha en América Latina",
        "Narada Mudi"
      ] },
    { numero: 203, bimestre: "Mayo – Junio", anio: 2026, precio: 25,
      portada: "img/revistas/203.jpg", pdf: "pdf/revistas/203.pdf",
      temas: ["Eso que llaman soberanía nacional", "La verdadera correlación del calendario de México", "La IA, la nueva revolución industrial", "MAHA MUDRA"] },
    { numero: 202, bimestre: "Marzo – Abril", anio: 2026, precio: 25,
      portada: "img/revistas/202.jpg", pdf: "pdf/revistas/202.pdf",
      temas: ["El Narcotráfico: su Incidencia en la Política", "Tensión y Tácticas en la Era Arancelaria de Trump", "Nahui ollín o cuatro movimiento", "El Board of Peace", "Friedrich Nietzsche"] },
    { numero: 201, bimestre: "Enero – Febrero", anio: 2026, precio: 25,
      portada: "img/revistas/201.jpg", pdf: "pdf/revistas/201.pdf",
      temas: ["La deuda pública hoy", "El campo mexicano, un problema persistente.", "La semilla", "El ombligo del mundo y la geopolítica esotérica" ] },

    /* ── 2025 ── */
    // { numero: 200, bimestre: "Noviembre – Diciembre", anio: 2025, precio: 25,
    //   portada: "img/revistas/200.jpg", pdf: "pdf/revistas/200.pdf",
    //   temas: ["Tema de ejemplo 1", "Tema de ejemplo 2", "Tema de ejemplo 3", "Tema de ejemplo 4"] },
    { numero: 199, bimestre: "Septiembre – Octubre", anio: 2025, precio: 25,
      portada: "img/revistas/199.jpg", pdf: "pdf/revistas/199.pdf",
      temas: ["Respeto a la Ley de amparo", "Netanyahu: seguirá la ofensiva", "Tamoanchan", "El mundo árabe vs Israel", "Espías Psíquicos"] },
    { numero: 198, bimestre: "Julio – Agosto", anio: 2025, precio: 25,
      portada: "img/revistas/198.jpg", pdf: "pdf/revistas/198.pdf",
      temas: ["Bastón de mando a Aguilar Ortiz", "Israel tomará Gaza Memoria, cualidad divina", "Irán subyugó a Israel", " Valmiky"] },
    { numero: 197, bimestre: "Mayo – Junio", anio: 2025, precio: 25,
      portada: "img/revistas/197.jpg", pdf: "pdf/revistas/197.pdf",
      temas: ["Nuevo presidente de la suprema corte", "El gobierno chileno contra Israel", "Montañas sagradas", "El DEEP STATE encima de Trump", "Los «ANUNNAKI»"] },
    { numero: 196, bimestre: "Marzo – Abril", anio: 2025, precio: 25,
      portada: "img/revistas/196.jpg", pdf: "pdf/revistas/196.pdf",
      temas: ["Acuerdos en aranceles", "Nuevos bombardeos de Estados Unidos", "Fragmentación", "Donald Trump vs Irán", "Abraxas" ] },
    { numero: 195, bimestre: "Enero – Febrero", anio: 2025, precio: 25,
      portada: "img/revistas/195.jpg", pdf: "pdf/revistas/195.pdf",
      temas: ["México se prepara para la llegada de migrantes", "Sigue el bombardeo Israelí en Cisjordania", "Cetro (bastón de mando)", "Irán en la mira de israel", "Milarepa"] },

    /* ── 2024 ── */
    { numero: 194, bimestre: "Noviembre – Diciembre", anio: 2024, precio: 25,
      portada: "img/revistas/194.jpg", pdf: "pdf/revistas/194.pdf",
      temas: ["Tema de ejemplo 1", "Tema de ejemplo 2", "Tema de ejemplo 3", "Tema de ejemplo 4"] },
    { numero: 193, bimestre: "Septiembre – Octubre", anio: 2024, precio: 25,
      portada: "img/revistas/193.jpg", pdf: "pdf/revistas/193.pdf",
      temas: ["Que se aclare: López Obrador ", "Ucrania avanza recupera territorio", "El poder del miedo", "EU y el Mesías Israelí", "El cuarto camino"] },
    // { numero: 192, bimestre: "Julio – Agosto", anio: 2024, precio: 25,
    //   portada: "img/revistas/192.jpg", pdf: "pdf/revistas/192.pdf",
    //   temas: ["Tema de ejemplo 1", "Tema de ejemplo 2", "Tema de ejemplo 3", "Tema de ejemplo 4"] },
    { numero: 191, bimestre: "Mayo – Junio", anio: 2024, precio: 25,
      portada: "img/revistas/191.jpg", pdf: "pdf/revistas/191.pdf",
      temas: ["Sheinbaun Pardo presidenta", "Trump culpable", "El universo del mar", "El genocidio americano del siglo XVI", "ZEN"] },
    { numero: 190, bimestre: "Marzo – Abril", anio: 2024, precio: 25,
      portada: "img/revistas/190.jpg", pdf: "pdf/revistas/190.pdf",
      temas: ["Dominio del crimen organizado", "Israel bombardea Hezbollah", "La fuerza de la palabra", "Israel intocable", "Los druidas"] },
    { numero: 189, bimestre: "Enero – Febrero", anio: 2024, precio: 25,
      portada: "img/revistas/189.jpg", pdf: "pdf/revistas/189.pdf",
      temas: ["Las Reformas de AMLO", "Estados Unidos bombardea a la guerrilla huti en Yemen", "La Vibración", "Invasión Israelí", "Rudra"] },

    /* ── 2023 ── */
    // { numero: 188, bimestre: "Noviembre – Diciembre", anio: 2023, precio: 25,
    //   portada: "img/revistas/188.jpg", pdf: "pdf/revistas/188.pdf",
    //   temas: ["Tema de ejemplo 1", "Tema de ejemplo 2", "Tema de ejemplo 3", "Tema de ejemplo 4"] },
    { numero: 187, bimestre: "Septiembre – Octubre", anio: 2023, precio: 25,
      portada: "img/revistas/187.jpg", pdf: "pdf/revistas/187.pdf",
      temas: ["Sheinbaun va por todo", "La ONU investiga ataque ruso a civiles", "Yaotlalli", "Desdolarización internacional", "Ganesha"] },
    { numero: 186, bimestre: "Julio – Agosto", anio: 2023, precio: 25,
      portada: "img/revistas/186.jpg", pdf: "pdf/revistas/186.pdf",
      temas: ["El fiscal de Morelos a prisión", "Candidato presidencial", "Resguardando la historia", "Guerra de divisas", "NAAB"] },
    { numero: 185, bimestre: "Mayo – Junio", anio: 2023, precio: 25,
      portada: "img/revistas/185.jpg", pdf: "pdf/revistas/185.pdf",
      temas: ["Triunfó MORENA en el Estado de México", "Intenso bombardeo de Rusia a Ucrania", "El mundo abstracto", "El dólar vs la divisa BRICS", "MAHAKALA"] },
    { numero: 184, bimestre: "Marzo – Abril", anio: 2023, precio: 25,
      portada: "img/revistas/184.jpg", pdf: "pdf/revistas/184.pdf",
      temas: ["Regreso de Jacobo Molina al INE", "Estrechan amistad China y Rusia", "Juegos tradicionales", "Estados Unidos a la baja", "La Jacaranda"] },
    { numero: 183, bimestre: "Enero – Febrero", anio: 2023, precio: 25,
      portada: "img/revistas/183.jpg", pdf: "pdf/revistas/183.pdf",
      temas: ["A juicio Genaro García Luna", "El mundo en peligro de una guerra nuclear", "El agua símbolo de vida", "La élite financiera en el mundo", "La Chaya" ] },

    /* ── 2022 ── */
    { numero: 182, bimestre: "Noviembre – Diciembre", anio: 2022, precio: 25,
      portada: "img/revistas/182.jpg", pdf: "pdf/revistas/182.pdf",
      temas: ["Tensión comercial México - EU", "Estampillas Conmemorativas Comunistas", "Lengua náhuatl en extinción", "Volkswagen", "La piña"] },
    { numero: 181, bimestre: "Septiembre – Octubre", anio: 2022, precio: 25,
      portada: "img/revistas/181.jpg", pdf: "pdf/revistas/181.pdf",
      temas: ["Sismo en México", "A juicio", "El valor del tiempo", "La balcanización de Ucrania", "El huitlacoche "] },
    { numero: 180, bimestre: "Julio – Agosto", anio: 2022, precio: 25,
      portada: "img/revistas/180.jpg", pdf: "pdf/revistas/180.pdf",
      temas: ["Buen acercamiento entre México – Estados Unidos", "Acuerdo de Seguridad", "Mujer-Hombre", "El arte de gobernar", "El Chilacayote"] },
    { numero: 179, bimestre: "Mayo – Junio", anio: 2022, precio: 25,
      portada: "img/revistas/179.jpg", pdf: "pdf/revistas/179.pdf",
      temas: ["Parálisis legislativa", "Estados Unidos amenazado interiormente", "El valor de la reciprocidad", "El control invisible sobre Rusia4", "El papaloquelite"] },
    { numero: 178, bimestre: "Marzo – Abril", anio: 2022, precio: 25,
      portada: "img/revistas/178.jpg", pdf: "pdf/revistas/178.pdf",
      temas: ["La democracia sigue adelante", "Lo señalan como criminal de guerra", "Medicina sagrada", "América en la antigüedad", "Hoja Santa"] },
    { numero: 177, bimestre: "Enero – Febrero", anio: 2022, precio: 25,
      portada: "img/revistas/177.jpg", pdf: "pdf/revistas/177.pdf",
      temas: ["Pausa diplomática ante España", "Inminente una guerra", "Voladores de Papantla", "Rusia-Ucrania", "Ococenyollotli"] }
  ],


  /* ── CÓMO AGREGAR UN LIBRO NUEVO ─────────────────────────────────────
     Copia un bloque, cambia "id" por el siguiente número (14, 15…)
     y llena los datos. Los libros se muestran del id más alto al más bajo.

     id        Número único del libro
     titulo    Título completo
     precio    Precio final en MXN con IVA incluido
     portada   img/libros/<id>.jpg  (proporción 2:3)
     pdf       pdf/libros/<id>.pdf
     sinopsis  Texto. Para separar párrafos deja una línea en blanco: \n\n
     ------------------------------------------------------------------ */

  libros: [
    { id: 11, titulo: "Preparación para la muerte de sí mismo", precio: 160,
      portada: "img/libros/001.jpg", pdf: "pdf/libros/13.pdf",
      sinopsis: "Los aztecas creían que la mansión de los muertos pertenecen a la Tierra y que el alma inmortal va a una vida futura al lado de los dioses llena de delicias. También asignaban tres lugares para el descanso de las ánimas, donde gozan de premios o recompensas. Con base a este principio los sabios Náhuatl señalaban que la vida en Tlatipac (sobre la tierra) es transitoria, al fin todo es cambiante, todo habrá de desaparecer. Sólo perdura la obra, lo negro y lo rojo; el saber de los hombres." },
    { id: 10, titulo: "En Busca de la Liberación", precio: 100,
      portada: "img/libros/002.jpg", pdf: "pdf/libros/12.pdf",
      sinopsis: "La presente obra, es una novela en la que Celso, el protagonista de esta historia, es un empecinado buscador de la verdad, pero para llegar a ella, deberá adentrarse en una serie de acontecimientos, los cuales lo irán llevando poco a poco hasta llegar a una encrucijada en donde necesariamente deberá enfrentar sus fuerzas internas una y otra vez, hasta lograr comprender el verdadero propósito de la vida, una forma de vida que está más allá de nuestra acostumbrada y monótona manera de vivir, el intento de lograr una verdadera liberación del yugo de la naturaleza y de aspectos dogmáticos que encierran y encadenan al hombre hasta convertirlo en una real y autentica caricatura social. Esta entretenida novela, nos devela verdaderos conceptos que están muy por encima de las trilladas y gastadas teorías que ha envenenado la voluntad humana, hasta adormecerla y hacerla pensar únicamente en lo transitorio, en lo material. Celso, es un personaje mexicano, quién nos hará comprender por medio de sus acciones, que la total inteligencia es sinónimo de libertad, y que únicamente el hombre que logra esta libertad lograra saber quién la posee." },
    { id: 9, titulo: "Después de 500 años", precio: 160,
      portada: "img/libros/003.jpg", pdf: "pdf/libros/11.pdf",
      sinopsis: "Una sociedad como la nuestra, basada en el valor oro... termina por matar nuestra pequeña chispa de voluntad transmutándonos de alma y cuerpo que somos a cuerpo y paja... Este medio social solo otorga y enseña el efímero placer que aniquila al cuerpo y termina por enterrar al alma en el oscuro infierno del sueño...Después de 500 años es una obra escrita en los años noventa, y cobra relevancia en este primer cuarto del siglo XXI, por que los tiempos del presente son muy cambiantes, donde la locura de las momias Doradas que se sienten Dioses, se manifiesta por medio de Pandemias, Calentamientos Mundiales, Fanatismos Religiosos y Tecnologías que meten al ensueño al hombre. Obra Sibilina que describe asombrosamente el final de una era social." },
    { id: 8, titulo: "Economía Farsa Mundial", precio: 150,
      portada: "img/libros/004.jpg", pdf: "pdf/libros/10.pdf",
      sinopsis: "El gran desconcierto que gira en torno • al problema económico del mundo y de nuestro país en particular ha motivado la aparición de éste escrito que, aclarará en forma sencilla y franca, lo que hemos dado en llamar la «Economía una Farsa Mundial». Ante esto y sólo en la medida en que encontremos un conocimiento superior al entregado en éste llamado «mundo moderno», podremos dar soluciones prácticas en contra del nefasto sistema económico mundial, símbolo inequívoco de sociedades injustas, degradadas y de animales." },
    { id: 7, titulo: "Sagrada Historia Mexicana", precio: 400,
      portada: "img/libros/005.jpg", pdf: "pdf/libros/9.pdf",
      sinopsis: "La presente obra comprende la cosmogonía de la filosofía y Religión Mexicana, así como la genealogía de las primeros hombres de nuestra Sagrada Historia Mexicana. Cuatro millones de historia mexicana comprendida en los 4 Soles ó Eras, desde la aparición del primer patriarca del mundo, Iztamixcoatl y generaciones dinásticas formadas por sus hijos: Xelhua, Xicalancatl, Umecatl, Tenoch, Mixtecatl y Otomitl. Así mismo conoceremos el nacimiento ó formación de las misiones Maya, Zapoteca y Tolteca, entre otras corrientes filosóficas que se expandieron por el mundo para llevar la cultura mexicana. También podemos apreciar en esta obra el nacimiento de los héroes mexicanos que le dieron grandeza al continente americano ó náhuatl hasta la caída del Magno Imperio Azteca, provocada por una conjura mundial." },
    { id: 6, titulo: "Los Atlantes-Toltecas", precio: 160,
      portada: "img/libros/006.jpg", pdf: "pdf/libros/8.pdf",
      sinopsis: "La historia es un conocimiento por el cual podemos ver las experiencias y los errores del hombre y de la sociedad; nos sirve para aprovechar aquellas experiencias y evitar esos errores dando lugar a óptimos y positivos resultados; pero cuando se utiliza como arma política contra un pueblo, esta es negativa o denigrante y da resultados igualmente negativos. Lo anterior lo subrayamos al referirnos a la historia de nuestra raza, la cual no ha sido aún rescatada con veracidad. Nuestros investigadores históricos se han concretado a repetir lo escrito por los invasores europeos, después de la caída de la Gran Tenochtitlán." },
    { id: 5, titulo: "In Tlatolli (El Mandato)", precio: 300,
      portada: "img/libros/007.jpg", pdf: "pdf/libros/7.pdf",
      sinopsis: "Recuerda que la simple memoria termina cuando el cuerpo empieza a desintegrarse después de la muerte, sin embargo, todo avance espiritual que logres quedará para siempre impreso en tu alma y continuará después de la muerte. El Nahóa, el Sabio, sabe que todas las cosas del Universo son cambiantes, todo se transforma, nada está estático, porque todo aquello que no se mueve pronto envejece y muere. Todo lo que se mueve, lo que evoluciona, pasa a otros planos" },
    { id: 4, titulo: "Educación Poder de la Voluntad", precio: 150,
      portada: "img/libros/008.jpg", pdf: "pdf/libros/6.pdf",
      sinopsis: "Solo la Educación Integral forja hombres íntegros. Su fundamento es la Disciplina Guerrera. Corresponde a nuestra Excelsa Civilización de Anáhuac, el mérito de haber preservado esta enseñanza legada por sus insignes antepasados: Los Atlantes-Toltecas. La Disciplina Guerrea labra y pule al hombre como piedra preciosa, hasta dotarlo de un rostro y un corazón." },
    { id: 3, titulo: "Cuitláhuac, El Invencible Guerrero", precio: 130,
      portada: "img/libros/009.jpg", pdf: "pdf/libros/5.pdf",
      sinopsis: "Cuitláhuac “El Invencible Guerrero” es una obra del periodista y escritor Francisco Selvas, incansable investigador de nuestra historia mexicana y fundador de la casa editorial GEFAO. En dicha obra, plasma de manera magistral el temple y la valentía de uno de los personajes mas importantes de la ultima etapa del Magno Imperio Azteca. En estos interesantes pasajes encontraremos a grandes rasgos, las características del “Invencible Guerrero”." },
    { id: 2, titulo: "El Estado", precio: 200,
      portada: "img/libros/010.jpg", pdf: "pdf/libros/4.pdf",
      sinopsis: "El libro El Estado, es un documento que expone de manera contundente, la formación de una sociedad en base al Ideal Superior practicado por nuestra ancestral cultura Atlante Tolteca, sistema social necesario para estos tiempos de incertidumbre nacional y mundial, en donde la imperante necesidad por el aspecto material, ha orillado al hombre a subestimar su propia inteligencia, buscando en diversas corrientes ideológicas lo que únicamente se puede lograr por medio de un cambio integral de conducta." },
    { id: 1, titulo: "La Gran Guerra", precio: 150,
      portada: "img/libros/011.jpg", pdf: "pdf/libros/3.pdf",
      sinopsis: "Adquiera el guion de teatro cuya historia se sitúa en el final del cuarto sol y en la invasión a Tenochtitlan" }
    // { id: 2, titulo: "Título del libro 2", precio: 180,
    //   portada: "img/libros/2.jpg", pdf: "pdf/libros/2.pdf",
    //   sinopsis: "Texto de ejemplo para la sinopsis del libro. Aquí va un resumen sobre el contenido de la obra, el periodo histórico que aborda y por qué es relevante para el lector." },
    // { id: 1, titulo: "Título del libro 1", precio: 180,
    //   portada: "img/libros/1.jpg", pdf: "pdf/libros/1.pdf",
    //   sinopsis: "Texto de ejemplo para la sinopsis del libro. Aquí va un resumen sobre el contenido de la obra, el periodo histórico que aborda y por qué es relevante para el lector." }
  ]
};


/* =====================================================================
   PARTE 2 · FUNCIONES COMPARTIDAS (no editar)
   ===================================================================== */

const IVA = 0.16;
const CLAVES = { carrito: 'gefao_carrito', compras: 'gefao_compras', sesion: 'gefao_sesion' };

/* ---------- Utilidades ---------- */
function formatoPrecio(n) {
  return '$' + Number(n).toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
function escaparHTML(t) {
  return String(t).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
const almacen = {
  leer(clave, porDefecto) {
    try { const v = localStorage.getItem(clave); return v ? JSON.parse(v) : porDefecto; }
    catch (e) { return porDefecto; }
  },
  guardar(clave, valor) {
    try { localStorage.setItem(clave, JSON.stringify(valor)); } catch (e) { /* navegador sin almacenamiento */ }
  }
};

/* ---------- Catálogo ---------- */
function revistasOrdenadas() { return [...GEFAO.revistas].sort((a, b) => b.numero - a.numero); }
function librosOrdenados()   { return [...GEFAO.libros].sort((a, b) => b.id - a.id); }
function numeroMasReciente() { return Math.max(...GEFAO.revistas.map(r => r.numero)); }
function aniosDisponibles()  { return [...new Set(GEFAO.revistas.map(r => r.anio))].sort((a, b) => b - a); }

/* Devuelve un producto con formato común para revista o libro */
function obtenerProducto(tipo, id) {
  if (tipo === 'revista') {
    const r = GEFAO.revistas.find(x => x.numero === Number(id));
    if (!r) return null;
    return {
      tipo, id: r.numero, datos: r,
      titulo: `No. ${r.numero} / ${r.bimestre} ${r.anio}`,
      subtitulo: 'Revista Digital',
      precio: r.precio, portada: r.portada, pdf: r.pdf,
      url: `detalle.html?revista=${r.numero}`,
      esNuevo: r.numero === numeroMasReciente()
    };
  }
  if (tipo === 'libro') {
    const l = GEFAO.libros.find(x => x.id === Number(id));
    if (!l) return null;
    return {
      tipo, id: l.id, datos: l,
      titulo: l.titulo,
      subtitulo: 'Libro Digital',
      precio: l.precio, portada: l.portada, pdf: l.pdf,
      url: `detalle.html?libro=${l.id}`,
      esNuevo: false
    };
  }
  return null;
}

/* HTML de una portada; si la imagen no existe queda el recuadro gris */
function portadaHTML(p, textoAlterno) {
  const etiqueta = p.tipo === 'revista' ? `No. ${p.id}` : `Libro ${String(p.id).padStart(2, '0')}`;
  return `<div class="portada ${p.tipo}">
    <span class="portada-txt">Portada<br>${etiqueta}</span>
    <img src="${p.portada}" alt="${escaparHTML(textoAlterno || 'Portada de ' + p.titulo)}" loading="lazy" onerror="this.remove()">
  </div>`;
}

/* ---------- Carrito (una compra = un acceso digital) ---------- */
function obtenerCarrito() {
  return almacen.leer(CLAVES.carrito, []).filter(i => obtenerProducto(i.tipo, i.id));
}
function enCarrito(tipo, id) {
  return obtenerCarrito().some(i => i.tipo === tipo && i.id === Number(id));
}
function agregarAlCarrito(tipo, id) {
  const c = obtenerCarrito();
  if (c.some(i => i.tipo === tipo && i.id === Number(id))) return false;
  c.push({ tipo, id: Number(id) });
  almacen.guardar(CLAVES.carrito, c);
  actualizarBadge();
  return true;
}
function quitarDelCarrito(tipo, id) {
  almacen.guardar(CLAVES.carrito, obtenerCarrito().filter(i => !(i.tipo === tipo && i.id === Number(id))));
  actualizarBadge();
}
function vaciarCarrito() { almacen.guardar(CLAVES.carrito, []); actualizarBadge(); }

/* IVA incluido en el precio: se desglosa, no se suma */
function calcularTotales(items) {
  const total = items.reduce((s, i) => s + obtenerProducto(i.tipo, i.id).precio, 0);
  const subtotal = Math.round((total / (1 + IVA)) * 100) / 100;
  const iva = Math.round((total - subtotal) * 100) / 100;
  return { subtotal, iva, total };
}

/* ---------- Compras y sesión (simuladas en el navegador) ---------- */
function obtenerCompras() {
  return almacen.leer(CLAVES.compras, []).filter(i => obtenerProducto(i.tipo, i.id));
}
function yaComprado(tipo, id) {
  return obtenerCompras().some(i => i.tipo === tipo && i.id === Number(id));
}
function registrarCompras(items) {
  const compras = obtenerCompras();
  const hoy = new Date().toISOString();
  items.forEach(i => {
    if (!compras.some(c => c.tipo === i.tipo && c.id === i.id)) compras.unshift({ tipo: i.tipo, id: i.id, fecha: hoy });
  });
  almacen.guardar(CLAVES.compras, compras);
}
function obtenerSesion() { return almacen.leer(CLAVES.sesion, null); }
function iniciarSesion(nombre, correo) { almacen.guardar(CLAVES.sesion, { nombre, correo }); }
function cerrarSesion() { try { localStorage.removeItem(CLAVES.sesion); } catch (e) {} }

/* ---------- Interfaz común ---------- */
function actualizarBadge() {
  const n = obtenerCarrito().length;
  document.querySelectorAll('[data-badge]').forEach(b => {
    b.textContent = n;
    b.hidden = n === 0;
  });
  document.querySelectorAll('[data-carrito-link]').forEach(a => {
    a.setAttribute('aria-label', n ? `Carrito de compra, ${n} ${n === 1 ? 'producto' : 'productos'}` : 'Carrito de compra');
  });
}

function iniciarNav() {
  const nav = document.getElementById('nav');
  const btn = document.getElementById('hamburguesa');
  const menu = document.getElementById('menuMovil');
  const alScroll = () => nav && nav.classList.toggle('scrolled', window.scrollY > 10);
  window.addEventListener('scroll', alScroll, { passive: true });
  alScroll();
  if (!btn || !menu) return;
  const cerrar = () => {
    btn.classList.remove('abierto'); menu.classList.remove('abierto');
    btn.setAttribute('aria-expanded', 'false'); btn.setAttribute('aria-label', 'Abrir menú');
  };
  btn.addEventListener('click', () => {
    const abierto = !menu.classList.contains('abierto');
    btn.classList.toggle('abierto', abierto); menu.classList.toggle('abierto', abierto);
    btn.setAttribute('aria-expanded', String(abierto));
    btn.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', cerrar));
  window.addEventListener('resize', () => { if (window.innerWidth > 960) cerrar(); });
}

/* Modales: botón con data-abrir="id-del-modal"; cierre con data-cerrar, Esc o clic fuera */
let ultimoFoco = null;
function abrirModal(id) {
  const m = document.getElementById(id);
  if (!m) return;
  ultimoFoco = document.activeElement;
  m.classList.add('abierto');
  m.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  const foco = m.querySelector('[data-cerrar]') || m.querySelector('button, a');
  setTimeout(() => foco && foco.focus(), 50);
}
function cerrarModal(m) {
  m.classList.remove('abierto');
  m.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (ultimoFoco) ultimoFoco.focus();
}
function iniciarModales() {
  document.addEventListener('click', e => {
    const abrir = e.target.closest('[data-abrir]');
    if (abrir) { e.preventDefault(); abrirModal(abrir.dataset.abrir); return; }
    const cerrar = e.target.closest('[data-cerrar]');
    if (cerrar) { cerrarModal(cerrar.closest('.modal')); return; }
    if (e.target.classList.contains('modal')) cerrarModal(e.target);
  });
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    const m = document.querySelector('.modal.abierto');
    if (m) cerrarModal(m);
  });
}

/* Mensaje flotante de confirmación (turquesa) */
let temporizadorToast = null;
function mostrarToast(mensaje, accion) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast'; t.className = 'toast';
    t.setAttribute('role', 'status'); t.setAttribute('aria-live', 'polite');
    document.body.appendChild(t);
  }
  t.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg><span>${mensaje}</span>`;
  if (accion) {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'toast-accion'; b.textContent = accion.texto;
    b.addEventListener('click', () => { accion.alHacer(); t.classList.remove('visible'); });
    t.appendChild(b);
  }
  requestAnimationFrame(() => t.classList.add('visible'));
  clearTimeout(temporizadorToast);
  temporizadorToast = setTimeout(() => t.classList.remove('visible'), 4500);
}

/* Animaciones de entrada al hacer scroll */
let observadorReveal = null;
function iniciarReveal(raiz) {
  const els = (raiz || document).querySelectorAll('.reveal:not(.visible)');
  if (!('IntersectionObserver' in window)) { els.forEach(el => el.classList.add('visible')); return; }
  if (!observadorReveal) {
    observadorReveal = new IntersectionObserver(entradas => {
      entradas.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add('visible'); observadorReveal.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  }
  els.forEach(el => observadorReveal.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  actualizarBadge();
  iniciarNav();
  iniciarModales();
  iniciarReveal();
  document.querySelectorAll('[data-anio-actual]').forEach(el => { el.textContent = new Date().getFullYear(); });
});
/* Mantiene el contador sincronizado si el carrito cambia en otra pestaña */
window.addEventListener('storage', e => { if (e.key === CLAVES.carrito) actualizarBadge(); });
