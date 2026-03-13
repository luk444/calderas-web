export const COMPANY = {
  name: 'CalderasClima',
  tagline: 'Servicio Técnico Independiente',
  description: 'Empresa independiente de servicios técnicos de calefacción y climatización',
  phone: '+54 9 11 3841-9549',
  phoneDisplay: '+54 9 11 3841-9549',
  email: 'contacto@CalderasClima.com',
  whatsapp: '5491138419549',
  address: 'Gral. Martín Güemes 508, Hurlingham, Buenos Aires',
  hours: {
    weekdays: 'Lunes a Viernes: 8:00 - 18:00',
    saturday: 'Sábados: 9:00 - 14:00'
  }
};

export const SERVICES = [
  {
    id: 1,
    title: 'Reparación de calderas',
    description: 'Diagnóstico y reparación de todo tipo de fallas en calderas residenciales y comerciales.',
    icon: 'wrench',
  },
  {
    id: 2,
    title: 'Mantenimiento preventivo',
    description: 'Service completo para prolongar la vida útil de su equipo y garantizar un funcionamiento seguro.',
    icon: 'shield',
  },
  {
    id: 3,
    title: 'Instalación de equipos',
    description: 'Instalación profesional de calderas y sistemas de calefacción con verificación técnica incluida.',
    icon: 'home',
  },
  {
    id: 4,
    title: 'Diagnóstico técnico',
    description: 'Identificación precisa de problemas con equipamiento profesional y presupuesto transparente.',
    icon: 'search',
  },
  {
    id: 5,
    title: 'Calefacción central',
    description: 'Servicio integral para sistemas de calefacción central, radiadores y circuitos hidráulicos.',
    icon: 'fire',
  },
  {
    id: 6,
    title: 'Atención de urgencias',
    description: 'Respuesta rápida para emergencias de calefacción. Disponibilidad extendida.',
    icon: 'clock',
  },
];

export const FEATURES = [
  {
    value: '+15',
    label: 'Años de experiencia',
    description: 'Trayectoria en el rubro'
  },
  {
    value: '+5000',
    label: 'Clientes atendidos',
    description: 'Hogares y comercios'
  },
  {
    value: '24hs',
    label: 'Respuesta rápida',
    description: 'Atención prioritaria'
  },
  {
    value: '100%',
    label: 'Garantía escrita',
    description: 'En todos los trabajos'
  },
];

export const BRANDS = [
  'Baxi', 'Peisa', 'Ariston', 'Roca', 'Ferroli', 
  'Beretta', 'Caldaia', 'Domec', 'Longvie', 'Orbis'
];

export const COVERAGE = [
  {
    zone: 'Capital Federal',
    areas: ['Palermo', 'Recoleta', 'Belgrano', 'Caballito', 'Núñez', 'Villa Urquiza'],
    color: 'primary'
  },
  {
    zone: 'Zona Norte',
    areas: ['Vicente López', 'San Isidro', 'Tigre', 'Pilar', 'Nordelta', 'Olivos'],
    color: 'green'
  },
  {
    zone: 'Zona Oeste',
    areas: ['Morón', 'Ituzaingó', 'Hurlingham', 'Ramos Mejía', 'Haedo', 'San Martín'],
    color: 'orange'
  },
  {
    zone: 'Zona Sur',
    areas: ['Avellaneda', 'Quilmes', 'Lanús', 'Lomas de Zamora', 'Adrogué', 'Banfield'],
    color: 'purple'
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'María González',
    location: 'Palermo, CABA',
    rating: 5,
    comment: 'Excelente servicio. Vinieron rápido y solucionaron el problema de mi caldera en una sola visita. Muy profesionales.',
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    location: 'San Isidro',
    rating: 5,
    comment: 'Contraté el mantenimiento anual y quedé muy conforme. Precios justos y trabajo de calidad.',
  },
  {
    id: 3,
    name: 'Laura Martínez',
    location: 'Belgrano, CABA',
    rating: 5,
    comment: 'Muy recomendables. Me explicaron todo con claridad y el presupuesto fue exacto. Sin sorpresas.',
  },
  {
    id: 4,
    name: 'Roberto Fernández',
    location: 'Vicente López',
    rating: 5,
    comment: 'Instalaron mi caldera nueva y quedó perfecto. El técnico muy amable y conocedor. Totalmente recomendables.',
  },
  {
    id: 5,
    name: 'Ana Sánchez',
    location: 'Recoleta, CABA',
    rating: 5,
    comment: 'Atención de urgencia un domingo. Llegaron en menos de una hora y resolvieron todo. Increíble servicio.',
  },
  {
    id: 6,
    name: 'Diego Morales',
    location: 'Núñez, CABA',
    rating: 5,
    comment: 'Hace 3 años que hacen el mantenimiento de mi caldera. Siempre puntuales y profesionales. Los recomiendo.',
  },
];

export const NAV_LINKS = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Empresa', href: '#empresa' },
  { name: 'Cobertura', href: '#cobertura' },
  { name: 'Contacto', href: '#contacto' },
];

export const PROBLEMS = [
  { title: 'La caldera no enciende', description: 'Problemas de encendido y piloto' },
  { title: 'Pierde presión', description: 'Caída de presión del sistema' },
  { title: 'No calienta radiadores', description: 'Radiadores fríos o tibios' },
  { title: 'No sale agua caliente', description: 'Falta de agua caliente sanitaria' },
  { title: 'Hace ruido extraño', description: 'Ruidos o golpeteo' },
  { title: 'Se apaga sola', description: 'Apagados intermitentes' },
];
