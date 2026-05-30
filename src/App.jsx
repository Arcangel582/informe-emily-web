import React, { useMemo, useState } from "react";
import {
  Search,
  MapPin,
  Sparkles,
  School,
  Users,
  BookOpen,
  FileText,
  Images,
  BarChart3,
  ClipboardCheck,
  Heart,
  ExternalLink,
  Waves,
  Sun,
  Anchor,
  FlaskConical,
  Microscope,
  NotebookText,
  Ship,
  Camera,
  FolderOpen,
  GraduationCap,
} from "lucide-react";

const site = {
  titulo: "Exploradores del mar",
  subtitulo: "Fomento del pensamiento científico mediante la estrategia de experimentación",
  modalidad: "Informe de prácticas profesionales como opción para obtener el título de Licenciada en Educación Primaria",
  autora: "Emily Janeth Coronado Rodríguez",
  asesora: "Yaressy Ruby Ramos González",
  institucion: "Escuela Normal Miguel F. Martínez · Centenaria y Benemérita",
  lugarFecha: "Monterrey, N.L., México · Julio 2026",
  ciclo: "2025 – 2026",
  frase: "La educación es un acto de amor, por tanto, un acto de valor. No puede temer el debate, el análisis de la realidad; no puede huir de la discusión creativa, bajo pena de ser una farsa.",
  autoraFoto: "./assets/autora/emily-coronado.jpg",
  informePdf: "/assets/documentos/informe-completo.pdf",
  planeacionPdf: "./assets/documentos/planeacion-evaluacion.pdf",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Escuela%20Primaria%20Alberto%20Fern%C3%A1ndez%20Ruiloba%20Calle%20Nueva%20Andaluc%C3%ADa%20Ciudad%20Solidaridad%20Monterrey%20Nuevo%20Le%C3%B3n",
};

const sections = [
  { id: "portada", label: "Portada", icon: Sparkles },
  { id: "contexto", label: "Contexto escolar", icon: School },
  { id: "diagnostico", label: "Diagnóstico", icon: Users },
  { id: "problema", label: "Problema", icon: BookOpen },
  { id: "intervencion", label: "Intervención", icon: FlaskConical },
  { id: "evidencias", label: "Evidencias", icon: Images },
  { id: "resultados", label: "Resultados", icon: BarChart3 },
  { id: "evaluacion", label: "Evaluación", icon: ClipboardCheck },
  { id: "conclusiones", label: "Conclusiones", icon: Heart },
  { id: "anexos", label: "Anexos", icon: FolderOpen },
  { id: "bibliografia", label: "Bibliografía", icon: BookOpen },
];

const contexto = [
  { label: "Escuela", value: "Primaria Alberto Fernández Ruiloba" },
  { label: "CCT", value: "19EPR1080C" },
  { label: "Tipo y turno", value: "Escuela pública estatal · Turno matutino" },
  { label: "Ubicación", value: "Calle Nueva Andalucía s/n, entre Calle La Rábida y Calle Antón de Alaminos, Ciudad Solidaridad, Monterrey, N.L." },
  { label: "Horario", value: "Entrada 7:45 a. m.; salida escalonada de 12:20 a 12:30 p. m." },
  { label: "Matrícula", value: "447 estudiantes: 230 hombres y 217 mujeres" },
  { label: "Grupo de intervención", value: "1.º C · 28 estudiantes: 15 niños y 13 niñas · Edad promedio de 6 años" },
  { label: "Infraestructura", value: "4 edificios, 20 aulas, plaza cívica, 3 canchas, áreas verdes, biblioteca, internet, equipos de cómputo y proyectores" },
];

const diagnosticos = [
  {
    title: "Alfabetización inicial",
    icon: NotebookText,
    value: "19 presilábico · 9 silábico",
    detail:
      "El IDAI mostró que más de la mitad del grupo se encontraba en nivel presilábico. También se observaron inseguridad al escribir, reconocimiento parcial de letras y dificultad para representar gráficamente algunos sonidos.",
  },
  {
    title: "Cálculo mental",
    icon: BarChart3,
    value: "10 reactivos · hasta 9 aciertos",
    detail:
      "Los estudiantes mostraron avances en conteo uno a uno, pero necesitaron apoyos visuales y material concreto. La pregunta más sencilla fue 5 + 5, con 18 respuestas correctas; la más difícil fue 29 + 2, con 2 respuestas correctas.",
  },
  {
    title: "Socioemocional",
    icon: Heart,
    value: "21 esperado · 4 apoyo · 3 fortalecimiento",
    detail:
      "La mayoría del grupo presentó un nivel esperado. Las áreas más bajas fueron reglas y acuerdos, así como resolución de conflictos; las más sólidas fueron manejo de emociones y familia.",
  },
  {
    title: "Ausencia de ciencia experimental",
    icon: Microscope,
    value: "0 registros de indagación científica",
    detail:
      "Los diarios de campo mostraron prioridad en escritura, alfabetización y cálculo, mientras que las actividades de indagación o ciencia experimental no aparecieron registradas.",
  },
];

const frecuenciaActividades = [
  { label: "Escritura y alfabetización", value: 22 },
  { label: "Conteo y cálculo", value: 14 },
  { label: "Manualidades y motricidad fina", value: 9 },
  { label: "Juego y movimiento", value: 5 },
  { label: "Indagación científica", value: 0 },
];

const propositos = [
  {
    title: "Propósito general",
    text:
      "Desarrollar habilidades del pensamiento científico en los estudiantes de primer grado mediante una secuencia didáctica basada en la experimentación, favoreciendo un primer acercamiento a la ciencia que les permita transitar de la observación espontánea a la formulación de hipótesis iniciales sobre fenómenos naturales.",
  },
  {
    title: "Curiosidad e hipótesis",
    text:
      "Estimular la curiosidad y el pensamiento científico a través de la experimentación, permitiendo contrastar observaciones con hipótesis iniciales.",
  },
  {
    title: "Saberes y Pensamiento Científico",
    text:
      "Implementar contenidos del campo formativo mediante actividades transversales vinculadas con situaciones del entorno cotidiano.",
  },
  {
    title: "Intervención docente",
    text:
      "Optimizar la práctica mediante ambientes de aprendizaje experimentales, participación activa y aprendizaje significativo.",
  },
];

const fases = [
  {
    fase: "Fase 1",
    title: "Asombro y pregunta inicial",
    sesiones: "Sesiones 1–2",
    text:
      "Se introduce la problemática ¿por qué los barcos no se hunden? mediante un cuento, una búsqueda de materiales y predicciones sobre flotación.",
  },
  {
    fase: "Fase 2",
    title: "Indagación y experimentación",
    sesiones: "Sesiones 3–8",
    text:
      "El grupo experimenta con sal, aceite, densidades, burbujas, plastilina y gases para observar, comparar y explicar fenómenos.",
  },
  {
    fase: "Fase 3",
    title: "Organización de descubrimientos",
    sesiones: "Sesión 9",
    text:
      "Los estudiantes integran lo aprendido en un collage y construyen ideas sobre flotación, densidad, aire, forma y materiales.",
  },
  {
    fase: "Fase 4",
    title: "Diseño de prototipo",
    sesiones: "Sesión 10",
    text:
      "Se diseña una primera versión del barco, se prueba en agua y se ajusta a partir de los errores observados.",
  },
  {
    fase: "Fase 5",
    title: "Metacognición y cierre",
    sesiones: "Sesión 11",
    text:
      "Los alumnos prueban el barco final, explican fallas o logros y reflexionan sobre lo aprendido mediante diálogo grupal.",
  },
];

const sesiones = [
  {
    n: "01",
    title: "Los detectives de materiales",
    foco: "Características físicas de los objetos",
    text:
      "A partir de un cuento sobre un pirata y un marinero, surge la pregunta de indagación. Los alumnos buscan objetos como palitos, fichas, taparroscas, pelotas y tornillos para clasificarlos en el diario científico.",
    image: "./assets/evidencias/sesion-01-detectives-materiales-01.jpg",
  },
  {
    n: "02",
    title: "¿Naufragio o flote?",
    foco: "Predicción y flotación",
    text:
      "Los estudiantes predicen si ciertos objetos flotan o se hunden y después contrastan sus ideas con la prueba en agua. Registran qué hicieron, qué pasó y qué descubrieron.",
    image: "",
  },
  {
    n: "03",
    title: "El huevo con superpoderes",
    foco: "Sal y densidad del agua",
    text:
      "Se compara el comportamiento de un huevo en agua simple, agua con sal y una tercera variable con azúcar para evitar generalizaciones y comprender el papel de la sal en la flotación.",
    image: "",
  },
  {
    n: "04",
    title: "El secreto del aceite",
    foco: "Líquidos que no se mezclan",
    text:
      "Se observa la reacción de gotas de leche con colorante en aceite para comprender que la composición de los líquidos influye en su comportamiento.",
    image: "",
  },
  {
    n: "05",
    title: "La torre de colores",
    foco: "Densidad y capas",
    text:
      "Con miel, jabón, agua y aceite, los alumnos observan cómo algunos líquidos se acomodan por capas sin mezclarse, descubriendo que no todos pesan igual.",
    image: "",
  },
  {
    n: "06",
    title: "La pecera embrujada",
    foco: "Burbujas, aire y gases",
    text:
      "La observación de burbujas y una reacción efervescente permite relacionar aire, gas y movimiento de los objetos.",
    image: "",
  },
  {
    n: "07",
    title: "El misterio de la plastilina",
    foco: "La forma influye en la flotación",
    text:
      "Con plastilina del mismo material y peso, los alumnos comparan una esfera que se hunde con una forma de barco que puede flotar.",
    image: "",
  },
  {
    n: "08",
    title: "¡Fiesta de palomitas bailarinas!",
    foco: "Gases y movimiento",
    text:
      "Semillas de maíz, bicarbonato y vinagre muestran cómo las burbujas hacen que algunos objetos suban y bajen dentro del líquido.",
    image: "",
  },
  {
    n: "09",
    title: "El consejo de científicos del mar",
    foco: "Collage y explicación",
    text:
      "Los alumnos integran imágenes y frases sobre sal, aire, forma y materiales para explicar por qué los barcos pueden flotar.",
    image: "",
  },
  {
    n: "10",
    title: "Del prototipo al barco",
    foco: "Diseño, prueba y ajuste",
    text:
      "Cada estudiante diseña un barco de aluminio, lo prueba en agua y realiza modificaciones según sus fallas de estabilidad o forma.",
    image: "",
  },
  {
    n: "11",
    title: "La reta",
    foco: "Barco final y reflexión",
    text:
      "Se prueba el prototipo final. Los alumnos explican si flotó, cuánto tiempo resistió y por qué algunos diseños se hundieron.",
    image: "",
  },
];

const evaluaciones = [
  {
    title: "Lista de cotejo · sesiones 1–4",
    text:
      "Valoró características de objetos, peso, flotación, líquidos que no se mezclan, scrapbooking y registro en diario científico.",
    data: [
      { label: "5 criterios", value: 15 },
      { label: "4 criterios", value: 8 },
      { label: "2 criterios", value: 3 },
      { label: "0 criterios", value: 2 },
    ],
  },
  {
    title: "Lista de cotejo · sesiones 5–8",
    text:
      "Valoró densidad, aire o gas, forma de los objetos, burbujas, scrapbooking y registro de observaciones. La mayoría alcanzó los conocimientos, aunque algunos productos quedaron incompletos.",
    data: [
      { label: "Densidad", value: 24 },
      { label: "Aire/gas", value: 24 },
      { label: "Forma", value: 25 },
      { label: "Burbujas", value: 24 },
      { label: "Scrapbooking", value: 21 },
      { label: "Diario", value: 22 },
    ],
  },
  {
    title: "Rúbrica final · sesión 11",
    text:
      "Evaluó explicación del fenómeno, diseño del prototipo y reflexión del aprendizaje. Predominaron puntajes altos, con moda de 9 puntos.",
    data: [
      { label: "7 puntos", value: 1 },
      { label: "8 puntos", value: 11 },
      { label: "9 puntos", value: 15 },
    ],
  },
];

const resultadosClave = [
  "El grupo pasó de una observación espontánea a la formulación de hipótesis iniciales sobre flotación, densidad, forma, materiales y aire.",
  "El diario científico permitió registrar predicciones, observaciones y descubrimientos con un lenguaje adaptado a primer grado.",
  "La rutina de trabajo ayudó a sostener la organización: dinámica inicial, diario científico, experimento, registro final y scrapbooking.",
  "El aprendizaje no siempre se reflejó por completo en productos escritos; también apareció en conversaciones, explicaciones orales y ajustes de prototipos.",
  "Las actividades promovieron colaboración, intercambio de ideas, pensamiento crítico, inclusión y experiencias estéticas.",
];

const anexos = [
  "Tabulación de diagnósticos",
  "Carpeta de autoevaluación",
  "Carpeta de planeación y evaluación",
  "Formato de diario científico",
  "Fotografías de la sesión 1: Los detectives de materiales",
  "Fotografías de la sesión 2: ¿Naufragio o Flote?",
  "Fotografías de la sesión 3: El Huevo con Superpoderes",
  "Fotografías de la sesión 4: El Secreto del Aceite",
  "Fotografías de la sesión 5: La Torre de Colores",
  "Fotografías de la sesión 6: La Pecera Embrujada",
  "Fotografías de la sesión 7: El Misterio de la Plastilina",
  "Fotografías de la sesión 8: ¡Fiesta de Palomitas Bailarinas!",
  "Fotografías de la sesión 9: El Consejo de Científicos del Mar",
  "Fotografías de la sesión 10: Del Prototipo al Barco",
  "Fotografías de la sesión 11: La reta",
];

const bibliografia = [
  "Bisquerra, R. (2009). Educación emocional y bienestar. Praxis.",
  "Burbano, A. C. (2018). Teoría y práctica de la sistematización de experiencias. Universidad del Valle.",
  "Chamorro, M. C. (2005). Didáctica de las matemáticas para primaria. Pearson Educación.",
  "Hernández, R., Fernández, C., & Baptista, P. (2014). Metodología de la investigación. McGraw-Hill.",
  "Hodson, D. (1994). Hacia un enfoque más crítico del trabajo de laboratorio. Enseñanza de las Ciencias, 12(3), 299-313.",
  "Ortega-Díaz, C., & Hernández-Pérez, A. (2015). Hacia el aprendizaje profundo en la reflexión de la práctica docente. Ra Ximhai, 11(4), 213-220.",
  "Piaget, J. (1972). La psicología de la inteligencia. Psique.",
  "SEP. (2022). Sugerencias metodológicas para el desarrollo de los proyectos educativos.",
  "SEP. (2024). Programa de estudio para educación primaria.",
  "Silva-Núñez, L. D., & Cáceres-Mesa, M. L. (2024). El experimento como estrategia para el acercamiento al saber científico.",
  "Vergnaud, G. (1991). El niño, las matemáticas y la realidad. Trillas.",
  "Vygotsky, L. S. (1978). Mind in society. Harvard University Press.",
];

function goTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function InformePracticasPreview() {
  const [query, setQuery] = useState("");

  const filteredSections = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return sections.filter(
      (s) => s.label.toLowerCase().includes(q) || s.id.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <main className="relative min-h-screen overflow-hidden text-slate-900 selection:bg-[#ff6fae] selection:text-white">
      <style>{`
        .section-wrap{max-width:80rem;margin-left:auto;margin-right:auto;padding:5rem 1rem;scroll-margin-top:5.5rem;position:relative;}
        .card-title{font-size:1.25rem;line-height:1.75rem;font-weight:900;color:#14172f;}
        .mid-sun-bg{background:radial-gradient(circle at 16% 10%, rgba(154,125,255,.42), transparent 26%),radial-gradient(circle at 44% 12%, rgba(255,128,190,.38), transparent 30%),radial-gradient(circle at 82% 18%, rgba(255,178,133,.34), transparent 24%),linear-gradient(180deg,#b8a2f4 0%,#e8a2d1 26%,#ffc3a6 48%,#f7efb0 57%,#bdeef0 68%,#8ee4ec 100%);}
        .aurora-panel{background:radial-gradient(circle at 18% 18%, rgba(169,139,255,.55), transparent 30%),radial-gradient(circle at 47% 20%, rgba(255,128,188,.50), transparent 31%),radial-gradient(circle at 82% 20%, rgba(255,223,123,.52), transparent 26%),radial-gradient(circle at 64% 76%, rgba(114,224,232,.55), transparent 36%),linear-gradient(150deg, rgba(255,204,223,.80), rgba(255,244,188,.76) 50%, rgba(195,245,247,.80));}
        .preview-gradient{background:radial-gradient(circle at 15% 20%, rgba(180,153,255,.52), transparent 29%),radial-gradient(circle at 42% 24%, rgba(255,132,192,.50), transparent 32%),radial-gradient(circle at 78% 22%, rgba(255,209,121,.55), transparent 30%),radial-gradient(circle at 68% 76%, rgba(126,229,235,.60), transparent 34%),linear-gradient(135deg, #e9c0ef, #ffd1c8 38%, #fff0a8 62%, #bdf4f3 100%);}
        .sea-layer{background:radial-gradient(ellipse at 50% -8%, rgba(255,245,183,.54), transparent 44%),linear-gradient(180deg, rgba(165,237,240,.80), rgba(113,218,229,.78));}
        .soft-waves{background-image:linear-gradient(135deg, rgba(255,255,255,.24) 25%, transparent 25%),linear-gradient(225deg, rgba(255,255,255,.18) 25%, transparent 25%);background-size:32px 18px;background-position:0 0,16px 0;}
      `}</style>

      <div className="fixed inset-0 -z-20 mid-sun-bg" />
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-x-0 top-[43vh] h-[20vh] bg-[linear-gradient(180deg,rgba(255,238,170,.48),rgba(255,196,161,.24)_30%,rgba(162,235,239,.36)_74%,transparent)] blur-sm" />
        <div className="absolute inset-x-0 bottom-0 h-[46vh] sea-layer opacity-85" />
        <div className="absolute inset-x-0 bottom-0 h-[39vh] soft-waves opacity-20" />
        <div className="absolute left-[-12rem] top-[5rem] h-[32rem] w-[32rem] rounded-full bg-[#9076ee]/24 blur-3xl" />
        <div className="absolute right-[-9rem] top-[8rem] h-[28rem] w-[28rem] rounded-full bg-[#ff85b7]/24 blur-3xl" />
        <div className="absolute left-[34%] top-[19rem] h-[25rem] w-[25rem] rounded-full bg-[#fff2a8]/28 blur-3xl" />
        <div className="absolute right-[8%] bottom-[6rem] h-[32rem] w-[32rem] rounded-full bg-[#7adfe8]/30 blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/35 bg-[#fff2df]/74 shadow-md shadow-pink-200/15 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">
          <button onClick={() => goTo("portada")} className="flex items-center gap-2 rounded-full bg-white/62 px-3 py-2 shadow-sm ring-1 ring-white/70 transition hover:bg-white/82">
            <Sparkles className="h-4 w-4 text-[#e85f9e]" />
            <span className="text-sm font-semibold tracking-wide">Exploradores del mar</span>
          </button>

          <nav className="hidden flex-1 justify-center gap-2 xl:flex">
            {sections.slice(1, 9).map((s) => (
              <button key={s.id} onClick={() => goTo(s.id)} className="rounded-full px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-white/55 hover:text-[#d84f91]">
                {s.label}
              </button>
            ))}
          </nav>

          <div className="relative ml-auto w-56">
            <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-[#e85f9e]" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar apartado..."
              className="w-full rounded-full border border-white/70 bg-white/70 py-2 pl-9 pr-3 text-sm shadow-sm outline-none ring-[#ff9bc4]/30 transition placeholder:text-slate-400 focus:ring-4"
            />
            {filteredSections.length > 0 && (
              <div className="absolute right-0 mt-2 w-72 overflow-hidden rounded-2xl border border-white/75 bg-[#fff5e8]/96 shadow-xl backdrop-blur">
                {filteredSections.map((s) => (
                  <button key={s.id} onClick={() => { goTo(s.id); setQuery(""); }} className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm hover:bg-[#ffe3ef]">
                    <s.icon className="h-4 w-4 text-[#e85f9e]" />
                    Ir a {s.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      <section id="portada" className="mx-auto grid min-h-[88vh] max-w-7xl items-center gap-10 px-4 py-16 lg:grid-cols-[1.05fr_.95fr]">
        <div className="rounded-[3rem] bg-white/24 p-6 shadow-2xl shadow-violet-300/12 ring-1 ring-white/35 backdrop-blur-md md:p-8">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#fff4dc]/72 px-4 py-2 text-sm font-black text-[#77435b] shadow-sm ring-1 ring-white/70">
            <Anchor className="h-4 w-4 text-[#e85f9e]" /> Informe de prácticas profesionales · Pensamiento científico
          </p>
          <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight text-[#241b33] drop-shadow-sm md:text-7xl">
            {site.titulo}
          </h1>
          <p className="mt-4 text-2xl font-black leading-tight text-[#77435b] md:text-3xl">{site.subtitulo}</p>
          <p className="mt-6 max-w-2xl rounded-[2rem] bg-[#fff5df]/68 p-5 text-lg leading-8 text-slate-800 shadow-lg shadow-pink-200/10 ring-1 ring-white/65 backdrop-blur">
            Este sitio presenta la intervención “¿Por qué los barcos no se hunden?”, una propuesta basada en experimentación, indagación y enfoque STEAM para acercar a estudiantes de primer grado al pensamiento científico mediante observación, hipótesis, registro y prueba de prototipos.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <MiniInfoCard accent="text-[#d94f8b]" label="Presenta" value={site.autora} />
            <MiniInfoCard accent="text-[#118c9b]" label="Institución" value="Escuela Normal Miguel F. Martínez" />
            <MiniInfoCard accent="text-[#b66f18]" label="Fecha" value="Julio 2026" />
          </div>

          <div className="mt-8 grid gap-3 rounded-[2rem] bg-[#ffe8c6]/62 p-4 shadow-lg shadow-amber-200/10 ring-1 ring-white/65 backdrop-blur sm:grid-cols-[auto_1fr]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/55">
              <Waves className="h-6 w-6 text-[#10a8b7]" />
            </div>
            <p className="text-sm leading-6 text-slate-800">
              {site.modalidad}. Asesora: {site.asesora}. {site.lugarFecha}.
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -inset-5 rounded-[3.1rem] bg-gradient-to-br from-[#a58cf2]/45 via-[#ff9ac0]/42 to-[#fff0a8]/42 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2.6rem] bg-white/28 p-4 shadow-2xl shadow-cyan-200/20 ring-1 ring-white/60 backdrop-blur-xl">
            <div className="aurora-panel relative aspect-[4/5] overflow-hidden rounded-[2.1rem] p-6 shadow-inner">
              <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,transparent,rgba(142,228,236,.50))]" />
              <div className="absolute left-[-3rem] top-[-3rem] h-36 w-36 rounded-full bg-white/22 blur-2xl" />
              <div className="absolute right-[-3rem] top-10 h-44 w-44 rounded-full bg-[#fff4bd]/32 blur-2xl" />
              <div className="absolute bottom-8 left-0 right-0 h-20 soft-waves opacity-16" />

              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between text-[#2f2439]">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[.35em]">Autora</p>
                    <p className="mt-2 max-w-xs text-sm font-semibold text-slate-700">{site.autora}</p>
                  </div>
                  <Sun className="h-9 w-9 text-[#c78b28]" />
                </div>

                <VisualSlot src={site.autoraFoto} label="foto de perfil" className="mx-auto h-72 w-56 rounded-[2rem]" />

                <div className="rounded-3xl bg-[#fff5df]/76 p-4 shadow-lg shadow-yellow-100/10 ring-1 ring-white/65 backdrop-blur">
                  <p className="text-sm font-black text-slate-900">Paulo Freire</p>
                  <p className="mt-1 text-sm font-medium text-slate-700">“{site.frase}”</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contexto" className="section-wrap">
        <SectionTitle icon={School} title="Contexto escolar" subtitle="Escuela primaria, ubicación, infraestructura, matrícula y grupo donde se desarrolló el servicio social." />
        <div className="grid gap-6 lg:grid-cols-[1fr_.9fr]">
          <GlassCard>
            <h3 className="card-title">Escuela Primaria Alberto Fernández Ruiloba</h3>
            <p className="mt-4 leading-8 text-slate-700">
              La práctica profesional se realizó en una escuela pública estatal ubicada en Ciudad Solidaridad, Monterrey, Nuevo León. El plantel atiende 16 grupos y cuenta con una infraestructura amplia para actividades académicas, deportivas y de organización escolar.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {contexto.map((item) => <InfoRow key={item.label} label={item.label} value={item.value} />)}
            </div>
          </GlassCard>

          <GlassCard>
            <h3 className="card-title flex items-center gap-2"><MapPin className="h-5 w-5 text-[#e85f9e]" /> Ubicación y comunidad</h3>
            <div className="preview-gradient mt-4 flex aspect-video items-center justify-center rounded-3xl border border-white/65 p-6 text-center text-sm font-bold text-slate-800 shadow-inner">
              Espacio para imagen de fachada, mapa o captura de ubicación.
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              La escuela se encuentra en una zona urbana de fácil acceso, cercana a avenidas principales y establecimientos comerciales. El contexto familiar está vinculado principalmente con actividades laborales de servicios e industria.
            </p>
            <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#241b33] px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
              Abrir ubicación <ExternalLink className="h-4 w-4" />
            </a>
          </GlassCard>
        </div>
      </section>

      <section id="diagnostico" className="section-wrap">
        <SectionTitle icon={Users} title="Diagnóstico del grupo" subtitle="Resultados iniciales que permitieron focalizar la necesidad de fortalecer el pensamiento científico." />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {diagnosticos.map((d) => (
            <GlassCard key={d.title}>
              <d.icon className="h-7 w-7 text-[#e85f9e]" />
              <p className="mt-4 text-xs font-black uppercase tracking-widest text-[#8b6b55]">{d.value}</p>
              <h3 className="mt-2 text-xl font-black">{d.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">{d.detail}</p>
            </GlassCard>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
          <GlassCard>
            <h3 className="card-title">Actividades observadas antes de la intervención</h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              Los registros del diario normalista mostraron una tendencia hacia actividades de alfabetización y cálculo. La indagación científica apareció con frecuencia cero, lo que justificó la necesidad de una intervención centrada en experimentación.
            </p>
          </GlassCard>
          <GlassCard>
            <SimpleBars data={frecuenciaActividades} max={22} />
          </GlassCard>
        </div>
      </section>

      <section id="problema" className="section-wrap">
        <SectionTitle icon={BookOpen} title="Problema y justificación" subtitle="Focalización de la situación detectada y sentido pedagógico del plan de acción." />
        <div className="grid gap-6 lg:grid-cols-2">
          <GlassCard>
            <h3 className="card-title">Problemática focalizada</h3>
            <p className="mt-4 leading-8 text-slate-700">
              En el grupo de 1.º C se identificó una presencia limitada de actividades relacionadas con ciencias naturales y experimentación. La mayoría de las actividades observadas se centraban en español, alfabetización y matemáticas, lo que reducía las oportunidades para observar, comparar, preguntar, formular hipótesis y explicar fenómenos cotidianos.
            </p>
          </GlassCard>
          <GlassCard>
            <h3 className="card-title">Justificación</h3>
            <p className="mt-4 leading-8 text-slate-700">
              Fortalecer el pensamiento científico desde primer grado permite que los estudiantes aprendan a cuestionar su entorno, comprobar ideas y construir explicaciones propias. La experimentación se eligió como estrategia porque convierte la ciencia en una experiencia tangible, lúdica y cercana al contexto infantil.
            </p>
          </GlassCard>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {propositos.map((p) => (
            <GlassCard key={p.title}>
              <p className="text-xs font-black uppercase tracking-widest text-[#d94f8b]">Propósito</p>
              <h3 className="mt-2 text-xl font-black">{p.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">{p.text}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section id="intervencion" className="section-wrap">
        <SectionTitle icon={FlaskConical} title="Intervención: ¿Por qué los barcos no se hunden?" subtitle="Secuencia basada en indagación, experimentación, diario científico y enfoque STEAM." />
        <div className="grid gap-5 lg:grid-cols-5">
          {fases.map((fase) => (
            <GlassCard key={fase.fase}>
              <p className="text-xs font-black uppercase tracking-widest text-[#d94f8b]">{fase.fase}</p>
              <h3 className="mt-2 text-lg font-black">{fase.title}</h3>
              <p className="mt-1 text-sm font-bold text-[#118c9b]">{fase.sesiones}</p>
              <p className="mt-3 text-sm leading-6 text-slate-700">{fase.text}</p>
            </GlassCard>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {sesiones.map((s) => (
            <SessionCard key={s.n} session={s} />
          ))}
        </div>
      </section>

      <section id="evidencias" className="section-wrap">
        <SectionTitle icon={Images} title="Evidencias visuales" subtitle="Galería preparada para integrar fotografías de sesiones, videos, productos del diario científico y prototipos." />
        <div className="grid gap-5 md:grid-cols-3">
          <EvidenceCard icon={Camera} title="Fotografías de sesiones" text="Colocar imágenes por sesión: materiales, experimentos, trabajo en equipo, diarios científicos, scrapbooking y prototipos." />
          <EvidenceCard icon={Ship} title="Prototipos de barcos" text="Galería para mostrar el borrador, ajustes y barco final de los estudiantes durante las sesiones 10 y 11." />
          <EvidenceCard icon={NotebookText} title="Diario científico" text="Espacio para evidencias del registro: predicción, materiales, qué pasó y qué descubrieron." />
        </div>
      </section>

      <section id="resultados" className="section-wrap">
        <SectionTitle icon={BarChart3} title="Resultados y análisis" subtitle="Lectura general de los avances observados en el desarrollo del pensamiento científico." />
        <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
          <GlassCard>
            <h3 className="card-title">Resultados clave</h3>
            <div className="mt-5 space-y-3">
              {resultadosClave.map((r, i) => (
                <div key={r} className="flex gap-3 rounded-3xl bg-white/42 p-4 ring-1 ring-white/68">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fff4dc]/80 text-sm font-black text-[#d94f8b]">{i + 1}</span>
                  <p className="text-sm leading-6 text-slate-700">{r}</p>
                </div>
              ))}
            </div>
          </GlassCard>
          <div className="space-y-6">
            {evaluaciones.map((ev) => (
              <GlassCard key={ev.title}>
                <h3 className="card-title">{ev.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{ev.text}</p>
                <div className="mt-5">
                  <SimpleBars data={ev.data} max={Math.max(...ev.data.map((d) => d.value))} />
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section id="evaluacion" className="section-wrap">
        <SectionTitle icon={ClipboardCheck} title="Evaluación e instrumentos" subtitle="Herramientas utilizadas para valorar proceso, producto, observación y reflexión." />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <Instrument title="Diario científico" text="Registro de fecha, experimento, materiales, predicción, observación y descubrimiento." />
          <Instrument title="Scrapbooking" text="Representación visual de lo aprendido, útil para estudiantes en proceso inicial de lectoescritura." />
          <Instrument title="Listas de cotejo" text="Seguimiento de criterios durante las sesiones 1–4 y 5–8." />
          <Instrument title="Rúbrica final" text="Explicación del fenómeno, diseño del prototipo y reflexión sobre el aprendizaje." />
        </div>
      </section>

      <section id="conclusiones" className="section-wrap">
        <SectionTitle icon={Heart} title="Conclusiones y reflexión docente" subtitle="Logros alcanzados, retos y recomendaciones para futuras intervenciones." />
        <div className="grid gap-6 lg:grid-cols-3">
          <GlassCard>
            <h3 className="card-title">Logros</h3>
            <p className="mt-4 leading-8 text-slate-700">
              La intervención permitió que los estudiantes se acercaran de manera significativa a procesos científicos, especialmente observación, formulación de hipótesis, experimentación y explicación de fenómenos como flotación, densidad, aire, forma y materiales.
            </p>
          </GlassCard>
          <GlassCard>
            <h3 className="card-title">Retos</h3>
            <p className="mt-4 leading-8 text-slate-700">
              Se identificaron dificultades en el manejo del tiempo, el registro escrito, la elaboración completa de evidencias y la conexión entre algunos experimentos y situaciones de la vida cotidiana. También fue necesario ajustar actividades según el comportamiento y ritmo del grupo.
            </p>
          </GlassCard>
          <GlassCard>
            <h3 className="card-title">Recomendaciones</h3>
            <p className="mt-4 leading-8 text-slate-700">
              Continuar integrando experiencias científicas desde los primeros grados, combinar rutina con actividades prácticas, valorar evidencias orales y observacionales, y diseñar experimentos visuales, claros e intuitivos para facilitar la comprensión inicial.
            </p>
          </GlassCard>
        </div>
      </section>

      <section id="anexos" className="section-wrap">
        <SectionTitle icon={FolderOpen} title="Anexos" subtitle="Materiales y evidencias que pueden integrarse como documentos descargables o galerías visuales." />
        <GlassCard>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {anexos.map((a, i) => (
              <div key={a} className="rounded-2xl bg-white/42 p-4 ring-1 ring-white/68">
                <p className="text-xs font-black uppercase tracking-widest text-[#d94f8b]">Anexo {i + 1}</p>
                <p className="mt-1 text-sm font-bold text-slate-800">{a}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </section>

      <section id="bibliografia" className="section-wrap pb-24">
        <SectionTitle icon={BookOpen} title="Bibliografía" subtitle="Selección de fuentes base citadas en el informe." />
        <GlassCard>
          <div className="grid gap-3 md:grid-cols-2">
            {bibliografia.map((b) => (
              <p key={b} className="rounded-2xl bg-white/38 p-4 text-sm leading-6 text-slate-700 ring-1 ring-white/60">{b}</p>
            ))}
          </div>
        </GlassCard>
      </section>
    </main>
  );
}

function SectionTitle({ icon: Icon, title, subtitle }) {
  return (
    <div className="mb-8 rounded-[2.5rem] bg-white/24 p-5 shadow-xl shadow-violet-300/10 ring-1 ring-white/35 backdrop-blur-md md:flex md:items-end md:justify-between md:gap-6">
      <div>
        <p className="inline-flex items-center gap-2 rounded-full bg-[#fff4dc]/72 px-4 py-2 text-sm font-black text-[#77435b] shadow-sm ring-1 ring-white/70">
          <Icon className="h-4 w-4 text-[#e85f9e]" /> {title}
        </p>
        <h2 className="mt-4 text-3xl font-black tracking-tight text-[#241b33] md:text-5xl">{title}</h2>
      </div>
      <p className="mt-4 max-w-xl text-base font-medium leading-7 text-slate-700 md:mt-0">{subtitle}</p>
    </div>
  );
}

function GlassCard({ children }) {
  return (
    <div className="rounded-[2rem] bg-[#ffe8c6]/66 p-6 shadow-2xl shadow-violet-300/10 ring-1 ring-white/68 backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-[#fff0d4]/72 hover:shadow-pink-300/16">
      {children}
    </div>
  );
}

function MiniInfoCard({ label, value, accent }) {
  return (
    <div className="rounded-3xl bg-[#ffe8c6]/68 p-4 shadow-lg shadow-amber-200/10 ring-1 ring-white/70 backdrop-blur">
      <p className={`text-xs font-black uppercase tracking-widest ${accent}`}>{label}</p>
      <p className="mt-1 font-bold text-slate-800">{value}</p>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="rounded-2xl bg-white/42 p-3 shadow-sm ring-1 ring-white/68">
      <p className="text-xs font-black uppercase tracking-widest text-[#8b6b55]">{label}</p>
      <p className="mt-1 font-bold text-slate-800">{value}</p>
    </div>
  );
}

function VisualSlot({ src, label, className = "" }) {
  return (
    <div className={`${className} overflow-hidden border border-white/65 bg-white/25 text-center shadow-xl shadow-pink-300/15 backdrop-blur-md`}>
      {src ? (
        <img src={src} alt={label} className="h-full w-full object-cover" />
      ) : (
        <div className="flex h-full w-full items-center justify-center p-5 text-sm font-black text-slate-800">
          {label}
        </div>
      )}
    </div>
  );
}

function SimpleBars({ data, max }) {
  return (
    <div className="space-y-3">
      {data.map((item) => (
        <div key={item.label}>
          <div className="mb-1 flex items-center justify-between gap-3 text-xs font-black uppercase tracking-widest text-slate-700">
            <span>{item.label}</span>
            <span>{item.value}</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-white/45 ring-1 ring-white/60">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#7adfe8] via-[#ff9bc4] to-[#fff0a6]"
              style={{ width: `${max === 0 ? 0 : (item.value / max) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function SessionCard({ session }) {
  return (
    <GlassCard>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-widest text-[#d94f8b]">Sesión {session.n}</p>
          <h3 className="mt-2 text-xl font-black">{session.title}</h3>
        </div>
        <Ship className="h-7 w-7 shrink-0 text-[#10a8b7]" />
      </div>
      <p className="mt-2 text-sm font-bold text-[#118c9b]">{session.foco}</p>
      <p className="mt-3 text-sm leading-6 text-slate-700">{session.text}</p>
      <div className="mt-4">
        <VisualSlot src={session.image} label="Espacio para evidencia" className="aspect-video rounded-3xl" />
      </div>
    </GlassCard>
  );
}

function EvidenceCard({ icon: Icon, title, text }) {
  return (
    <GlassCard>
      <div className="preview-gradient flex aspect-video items-center justify-center rounded-3xl shadow-inner ring-1 ring-white/70">
        <Icon className="h-12 w-12 text-[#241b33]/70" />
      </div>
      <h3 className="mt-4 text-xl font-black">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-700">{text}</p>
    </GlassCard>
  );
}

function Instrument({ title, text }) {
  return (
    <GlassCard>
      <ClipboardCheck className="h-7 w-7 text-[#e85f9e]" />
      <h3 className="mt-4 text-xl font-black">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-700">{text}</p>
    </GlassCard>
  );
}
