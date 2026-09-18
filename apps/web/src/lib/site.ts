export const BRAND = "Creciendo Juntos";
export const LOGO_ALT = "Creciendo Juntos A&N";
export const SLOGAN = "Pequeños pasos hoy, grandes cambios mañana";

const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");

if (!WHATSAPP_NUMBER) {
  throw new Error(
    "Falta configurar la variable NEXT_PUBLIC_WHATSAPP_NUMBER.",
  );
}

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola, quisiera información sobre Creciendo Juntos",
);

export const PRIMARY_WHATSAPP = {
  href: `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`,
};

export const ADDRESS = {
  line: "Av. Circunvalación 595 — 2do piso",
  note: "A una cuadra de la UTP",
  maps: "https://www.google.com/maps/search/?api=1&query=Av.+Circunvalaci%C3%B3n+595",
};

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/ubicacion", label: "Ubicación y Contacto" },
] as const;

export const SERVICE_GROUPS = [
  {
    title: "Primera infancia y desarrollo",
    description:
      "Observamos cada etapa y acompañamos las habilidades que sostienen el desarrollo temprano.",
    image: {
      src: "/servicios/desarrollo-temprano.png",
      alt: "Profesional acompañando una actividad de estimulación temprana",
    },
    services: [
      {
        title: "Evaluación del desarrollo",
        note: "De 0 a 5 años",
      },
      {
        title: "Estimulación e intervención temprana",
        note: "De 6 a 36 meses",
      },
    ],
  },
  {
    title: "Bienestar emocional y conducta",
    description:
      "Atención psicológica para comprender lo que ocurre y trabajar recursos de acuerdo con cada etapa.",
    image: {
      src: "/servicios/bienestar-emocional.png",
      alt: "Psicóloga conversando con una niña en un espacio sereno",
    },
    services: [
      {
        title: "Terapia de atención, concentración y conductual en niños",
      },
      {
        title: "Manejo de ansiedad, estrés y depresión",
      },
      {
        title:
          "Intervención en problemas conductuales y emocionales en adolescentes",
      },
    ],
  },
  {
    title: "Familia y desarrollo personal",
    description:
      "Espacios para fortalecer la orientación familiar y promover conductas saludables.",
    image: {
      src: "/servicios/orientacion-familiar.png",
      alt: "Psicóloga orientando a una familia durante una conversación",
    },
    services: [
      {
        title: "Orientación y consejería familiar",
      },
      {
        title: "Escuela para padres",
      },
      {
        title: "Talleres de desarrollo personal y conductas saludables",
      },
    ],
  },
] as const;

export const HERO_SLIDES = [
  {
    src: "/hero/sala.jpeg",
    alt: "Sala de estimulación de Creciendo Juntos",
    title: SLOGAN,
    description: "Centro de psicología y estimulación temprana.",
  },
  {
    src: "/hero/estimulacion.png",
    alt: "Sesión de estimulación temprana en Creciendo Juntos",
    title: "Acompañamos cada descubrimiento desde sus primeros años",
    description:
      "Estimulación e intervención temprana para acompañar su desarrollo.",
  },
  {
    src: "/hero/familia.png",
    alt: "Acompañamiento a familias en Creciendo Juntos",
    title: "Crecer también es sentirse comprendido",
    description:
      "Acompañamiento psicológico para niños, adolescentes y familias.",
  },
] as const;
