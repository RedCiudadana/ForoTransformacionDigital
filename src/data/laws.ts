export interface Law {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: 'shield' | 'fingerprint' | 'network';
  color: 'blue' | 'green' | 'purple';
  pdfUrl: string;
  articles: Article[];
}

export interface Article {
  id: string;
  number: string;
  title: string;
  content: string;
}

export const laws: Law[] = [
  {
    id: 'proteccion-datos',
    title: 'Ley de Protección de Datos Personales',
    shortDescription: 'Regula el tratamiento de datos personales y garantiza los derechos fundamentales de privacidad.',
    fullDescription: 'Esta iniciativa establece los principios, derechos, obligaciones y procedimientos que regulan la protección de datos personales, garantizando el derecho fundamental a la privacidad y autodeterminación informativa de las personas.',
    icon: 'fingerprint',
    color: 'green',
    pdfUrl: '/docs/proteccion-datos.pdf',
    articles: [
      {
        id: 'art-1',
        number: 'Artículo 1',
        title: 'Objeto de la ley',
        content: 'La presente ley tiene por objeto establecer el marco normativo para la identificación, designación, protección y resiliencia de las infraestructuras críticas, con el fin de garantizar la seguridad nacional, la continuidad de los servicios esenciales y el bienestar de la población.'
      },
      {
        id: 'art-2',
        number: 'Artículo 2',
        title: 'Definiciones',
        content: 'Para los efectos de la presente ley se entiende por: a) Infraestructura crítica: los activos, sistemas, instalaciones, redes o servicios esenciales cuya interrupción o destrucción tendría un impacto debilitador en la seguridad, economía nacional, salud pública o seguridad, o cualquier combinación de esas materias.'
      },
      {
        id: 'art-3',
        number: 'Artículo 3',
        title: 'Sectores estratégicos',
        content: 'Se consideran sectores estratégicos para efectos de esta ley: energía, telecomunicaciones, transporte, agua y saneamiento, salud, alimentación, servicios financieros, industria química, instalaciones gubernamentales y servicios de emergencia.'
      },
        {
        id: 'art-4',
        number: 'Artículo 1',
        title: 'Objeto de la ley',
        content: 'La presente ley tiene por objeto establecer el marco normativo para la identificación, designación, protección y resiliencia de las infraestructuras críticas, con el fin de garantizar la seguridad nacional, la continuidad de los servicios esenciales y el bienestar de la población.'
      },
      {
        id: 'art-5',
        number: 'Artículo 2',
        title: 'Definiciones',
        content: 'Para los efectos de la presente ley se entiende por: a) Infraestructura crítica: los activos, sistemas, instalaciones, redes o servicios esenciales cuya interrupción o destrucción tendría un impacto debilitador en la seguridad, economía nacional, salud pública o seguridad, o cualquier combinación de esas materias.'
      },
      {
        id: 'art-6',
        number: 'Artículo 3',
        title: 'Sectores estratégicos',
        content: 'Se consideran sectores estratégicos para efectos de esta ley: energía, telecomunicaciones, transporte, agua y saneamiento, salud, alimentación, servicios financieros, industria química, instalaciones gubernamentales y servicios de emergencia.'
      },
      {
        id: 'art-7',
        number: 'Artículo 1',
        title: 'Objeto de la ley',
        content: 'La presente ley tiene por objeto establecer el marco normativo para la identificación, designación, protección y resiliencia de las infraestructuras críticas, con el fin de garantizar la seguridad nacional, la continuidad de los servicios esenciales y el bienestar de la población.'
      },
      {
        id: 'art-8',
        number: 'Artículo 2',
        title: 'Definiciones',
        content: 'Para los efectos de la presente ley se entiende por: a) Infraestructura crítica: los activos, sistemas, instalaciones, redes o servicios esenciales cuya interrupción o destrucción tendría un impacto debilitador en la seguridad, economía nacional, salud pública o seguridad, o cualquier combinación de esas materias.'
      },
      {
        id: 'art-9',
        number: 'Artículo 3',
        title: 'Sectores estratégicos',
        content: 'Se consideran sectores estratégicos para efectos de esta ley: energía, telecomunicaciones, transporte, agua y saneamiento, salud, alimentación, servicios financieros, industria química, instalaciones gubernamentales y servicios de emergencia.'
      },
        {
        id: 'art-10',
        number: 'Artículo 1',
        title: 'Objeto de la ley',
        content: 'La presente ley tiene por objeto establecer el marco normativo para la identificación, designación, protección y resiliencia de las infraestructuras críticas, con el fin de garantizar la seguridad nacional, la continuidad de los servicios esenciales y el bienestar de la población.'
      },
      {
        id: 'art-11',
        number: 'Artículo 2',
        title: 'Definiciones',
        content: 'Para los efectos de la presente ley se entiende por: a) Infraestructura crítica: los activos, sistemas, instalaciones, redes o servicios esenciales cuya interrupción o destrucción tendría un impacto debilitador en la seguridad, economía nacional, salud pública o seguridad, o cualquier combinación de esas materias.'
      },
      {
        id: 'art-12',
        number: 'Artículo 3',
        title: 'Sectores estratégicos',
        content: 'Se consideran sectores estratégicos para efectos de esta ley: energía, telecomunicaciones, transporte, agua y saneamiento, salud, alimentación, servicios financieros, industria química, instalaciones gubernamentales y servicios de emergencia.'
      },
      {
        id: 'art-13',
        number: 'Artículo 1',
        title: 'Objeto de la ley',
        content: 'La presente ley tiene por objeto establecer el marco normativo para la identificación, designación, protección y resiliencia de las infraestructuras críticas, con el fin de garantizar la seguridad nacional, la continuidad de los servicios esenciales y el bienestar de la población.'
      },
      {
        id: 'art-14',
        number: 'Artículo 2',
        title: 'Definiciones',
        content: 'Para los efectos de la presente ley se entiende por: a) Infraestructura crítica: los activos, sistemas, instalaciones, redes o servicios esenciales cuya interrupción o destrucción tendría un impacto debilitador en la seguridad, economía nacional, salud pública o seguridad, o cualquier combinación de esas materias.'
      },
      {
        id: 'art-15',
        number: 'Artículo 3',
        title: 'Sectores estratégicos',
        content: 'Se consideran sectores estratégicos para efectos de esta ley: energía, telecomunicaciones, transporte, agua y saneamiento, salud, alimentación, servicios financieros, industria química, instalaciones gubernamentales y servicios de emergencia.'
      },
        {
        id: 'art-16',
        number: 'Artículo 1',
        title: 'Objeto de la ley',
        content: 'La presente ley tiene por objeto establecer el marco normativo para la identificación, designación, protección y resiliencia de las infraestructuras críticas, con el fin de garantizar la seguridad nacional, la continuidad de los servicios esenciales y el bienestar de la población.'
      },
      {
        id: 'art-17',
        number: 'Artículo 2',
        title: 'Definiciones',
        content: 'Para los efectos de la presente ley se entiende por: a) Infraestructura crítica: los activos, sistemas, instalaciones, redes o servicios esenciales cuya interrupción o destrucción tendría un impacto debilitador en la seguridad, economía nacional, salud pública o seguridad, o cualquier combinación de esas materias.'
      },
      {
        id: 'art-18',
        number: 'Artículo 3',
        title: 'Sectores estratégicos',
        content: 'Se consideran sectores estratégicos para efectos de esta ley: energía, telecomunicaciones, transporte, agua y saneamiento, salud, alimentación, servicios financieros, industria química, instalaciones gubernamentales y servicios de emergencia.'
      },
      {
        id: 'art-19',
        number: 'Artículo 1',
        title: 'Objeto de la ley',
        content: 'La presente ley tiene por objeto establecer el marco normativo para la identificación, designación, protección y resiliencia de las infraestructuras críticas, con el fin de garantizar la seguridad nacional, la continuidad de los servicios esenciales y el bienestar de la población.'
      },
      {
        id: 'art-20',
        number: 'Artículo 2',
        title: 'Definiciones',
        content: 'Para los efectos de la presente ley se entiende por: a) Infraestructura crítica: los activos, sistemas, instalaciones, redes o servicios esenciales cuya interrupción o destrucción tendría un impacto debilitador en la seguridad, economía nacional, salud pública o seguridad, o cualquier combinación de esas materias.'
      },
      {
        id: 'art-21',
        number: 'Artículo 3',
        title: 'Sectores estratégicos',
        content: 'Se consideran sectores estratégicos para efectos de esta ley: energía, telecomunicaciones, transporte, agua y saneamiento, salud, alimentación, servicios financieros, industria química, instalaciones gubernamentales y servicios de emergencia.'
      },
        {
        id: 'art-22',
        number: 'Artículo 1',
        title: 'Objeto de la ley',
        content: 'La presente ley tiene por objeto establecer el marco normativo para la identificación, designación, protección y resiliencia de las infraestructuras críticas, con el fin de garantizar la seguridad nacional, la continuidad de los servicios esenciales y el bienestar de la población.'
      },
      {
        id: 'art-23',
        number: 'Artículo 2',
        title: 'Definiciones',
        content: 'Para los efectos de la presente ley se entiende por: a) Infraestructura crítica: los activos, sistemas, instalaciones, redes o servicios esenciales cuya interrupción o destrucción tendría un impacto debilitador en la seguridad, economía nacional, salud pública o seguridad, o cualquier combinación de esas materias.'
      },
      {
        id: 'art-24',
        number: 'Artículo 3',
        title: 'Sectores estratégicos',
        content: 'Se consideran sectores estratégicos para efectos de esta ley: energía, telecomunicaciones, transporte, agua y saneamiento, salud, alimentación, servicios financieros, industria química, instalaciones gubernamentales y servicios de emergencia.'
      },
      {
        id: 'art-25',
        number: 'Artículo 1',
        title: 'Objeto de la ley',
        content: 'La presente ley tiene por objeto establecer el marco normativo para la identificación, designación, protección y resiliencia de las infraestructuras críticas, con el fin de garantizar la seguridad nacional, la continuidad de los servicios esenciales y el bienestar de la población.'
      },
      {
        id: 'art-26',
        number: 'Artículo 2',
        title: 'Definiciones',
        content: 'Para los efectos de la presente ley se entiende por: a) Infraestructura crítica: los activos, sistemas, instalaciones, redes o servicios esenciales cuya interrupción o destrucción tendría un impacto debilitador en la seguridad, economía nacional, salud pública o seguridad, o cualquier combinación de esas materias.'
      },
      {
        id: 'art-27',
        number: 'Artículo 3',
        title: 'Sectores estratégicos',
        content: 'Se consideran sectores estratégicos para efectos de esta ley: energía, telecomunicaciones, transporte, agua y saneamiento, salud, alimentación, servicios financieros, industria química, instalaciones gubernamentales y servicios de emergencia.'
      },
        {
        id: 'art-28',
        number: 'Artículo 1',
        title: 'Objeto de la ley',
        content: 'La presente ley tiene por objeto establecer el marco normativo para la identificación, designación, protección y resiliencia de las infraestructuras críticas, con el fin de garantizar la seguridad nacional, la continuidad de los servicios esenciales y el bienestar de la población.'
      },
      {
        id: 'art-29',
        number: 'Artículo 2',
        title: 'Definiciones',
        content: 'Para los efectos de la presente ley se entiende por: a) Infraestructura crítica: los activos, sistemas, instalaciones, redes o servicios esenciales cuya interrupción o destrucción tendría un impacto debilitador en la seguridad, economía nacional, salud pública o seguridad, o cualquier combinación de esas materias.'
      },
      {
        id: 'art-30',
        number: 'Artículo 3',
        title: 'Sectores estratégicos',
        content: 'Se consideran sectores estratégicos para efectos de esta ley: energía, telecomunicaciones, transporte, agua y saneamiento, salud, alimentación, servicios financieros, industria química, instalaciones gubernamentales y servicios de emergencia.'
      },
      {
        id: 'art-31',
        number: 'Artículo 1',
        title: 'Objeto de la ley',
        content: 'La presente ley tiene por objeto establecer el marco normativo para la identificación, designación, protección y resiliencia de las infraestructuras críticas, con el fin de garantizar la seguridad nacional, la continuidad de los servicios esenciales y el bienestar de la población.'
      },
      {
        id: 'art-32',
        number: 'Artículo 2',
        title: 'Definiciones',
        content: 'Para los efectos de la presente ley se entiende por: a) Infraestructura crítica: los activos, sistemas, instalaciones, redes o servicios esenciales cuya interrupción o destrucción tendría un impacto debilitador en la seguridad, economía nacional, salud pública o seguridad, o cualquier combinación de esas materias.'
      },
      {
        id: 'art-33',
        number: 'Artículo 3',
        title: 'Sectores estratégicos',
        content: 'Se consideran sectores estratégicos para efectos de esta ley: energía, telecomunicaciones, transporte, agua y saneamiento, salud, alimentación, servicios financieros, industria química, instalaciones gubernamentales y servicios de emergencia.'
      },
        {
        id: 'art-34',
        number: 'Artículo 1',
        title: 'Objeto de la ley',
        content: 'La presente ley tiene por objeto establecer el marco normativo para la identificación, designación, protección y resiliencia de las infraestructuras críticas, con el fin de garantizar la seguridad nacional, la continuidad de los servicios esenciales y el bienestar de la población.'
      },
      {
        id: 'art-35',
        number: 'Artículo 2',
        title: 'Definiciones',
        content: 'Para los efectos de la presente ley se entiende por: a) Infraestructura crítica: los activos, sistemas, instalaciones, redes o servicios esenciales cuya interrupción o destrucción tendría un impacto debilitador en la seguridad, economía nacional, salud pública o seguridad, o cualquier combinación de esas materias.'
      },
      {
        id: 'art-36',
        number: 'Artículo 3',
        title: 'Sectores estratégicos',
        content: 'Se consideran sectores estratégicos para efectos de esta ley: energía, telecomunicaciones, transporte, agua y saneamiento, salud, alimentación, servicios financieros, industria química, instalaciones gubernamentales y servicios de emergencia.'
      },
      {
        id: 'art-37',
        number: 'Artículo 1',
        title: 'Objeto de la ley',
        content: 'La presente ley tiene por objeto establecer el marco normativo para la identificación, designación, protección y resiliencia de las infraestructuras críticas, con el fin de garantizar la seguridad nacional, la continuidad de los servicios esenciales y el bienestar de la población.'
      },
      {
        id: 'art-38',
        number: 'Artículo 2',
        title: 'Definiciones',
        content: 'Para los efectos de la presente ley se entiende por: a) Infraestructura crítica: los activos, sistemas, instalaciones, redes o servicios esenciales cuya interrupción o destrucción tendría un impacto debilitador en la seguridad, economía nacional, salud pública o seguridad, o cualquier combinación de esas materias.'
      }
    ]
  },
  {
    id: 'proteccion-datos',
    title: 'Ley de Protección de Datos Personales',
    shortDescription: 'Regula el tratamiento de datos personales y garantiza los derechos fundamentales de privacidad.',
    fullDescription: 'Esta iniciativa establece los principios, derechos, obligaciones y procedimientos que regulan la protección de datos personales, garantizando el derecho fundamental a la privacidad y autodeterminación informativa de las personas.',
    icon: 'fingerprint',
    color: 'green',
    pdfUrl: '/docs/proteccion-datos.pdf',
    articles: [
      {
        id: 'art-1',
        number: 'Artículo 1',
        title: 'Objeto y finalidad',
        content: 'La presente ley tiene por objeto establecer los principios, derechos, obligaciones y procedimientos que regulan la protección de las personas respecto del tratamiento de sus datos personales, garantizando el ejercicio del derecho fundamental a la protección de datos personales.'
      },
      {
        id: 'art-2',
        number: 'Artículo 2',
        title: 'Ámbito de aplicación',
        content: 'Esta ley se aplica al tratamiento de datos personales efectuado en territorio guatemalteco por personas naturales o jurídicas, públicas o privadas, y al tratamiento efectuado fuera del territorio nacional cuando: a) El responsable o encargado del tratamiento esté establecido en Guatemala, b) Se utilicen medios ubicados en territorio guatemalteco.'
      },
      {
        id: 'art-3',
        number: 'Artículo 3',
        title: 'Principios del tratamiento',
        content: 'El tratamiento de datos personales se regirá por los siguientes principios: legalidad, lealtad y transparencia; limitación de la finalidad; minimización de datos; exactitud; limitación del plazo de conservación; integridad y confidencialidad; y responsabilidad proactiva.'
      },
      {
        id: 'art-4',
        number: 'Artículo 4',
        title: 'Consentimiento',
        content: 'El consentimiento del titular de los datos deberá ser libre, específico, informado e inequívoco. Cuando el tratamiento se base en el consentimiento, el responsable deberá poder demostrar que el titular consintió el tratamiento de sus datos personales.'
      }
    ]
  },
  {
    id: 'ciberseguridad',
    title: 'Ley de Ciberseguridad Nacional',
    shortDescription: 'Establece el marco institucional y normativo para la seguridad cibernética del país.',
    fullDescription: 'Esta iniciativa crea el marco institucional y normativo necesario para fortalecer las capacidades nacionales de ciberseguridad, proteger la infraestructura crítica digital y responder eficazmente a las amenazas cibernéticas.',
    icon: 'network',
    color: 'purple',
    pdfUrl: '/docs/ciberseguridad.pdf',
    articles: [
      {
        id: 'art-1',
        number: 'Artículo 1',
        title: 'Objeto',
        content: 'La presente ley tiene por objeto establecer el marco institucional y normativo para fortalecer las capacidades nacionales de ciberseguridad, proteger la infraestructura crítica de información y comunicaciones, y garantizar la seguridad del ciberespacio nacional.'
      },
      {
        id: 'art-2',
        number: 'Artículo 2',
        title: 'Definiciones',
        content: 'Para los efectos de esta ley se entiende por: a) Ciberseguridad: conjunto de herramientas, políticas, conceptos de seguridad, medidas de protección, directrices, métodos de gestión de riesgos, acciones, formación, mejores prácticas, seguros y tecnologías que pueden utilizarse para proteger el ciberespacio.'
      },
      {
        id: 'art-3',
        number: 'Artículo 3',
        title: 'Sistema Nacional de Ciberseguridad',
        content: 'Se crea el Sistema Nacional de Ciberseguridad como el conjunto de órganos, organismos, procedimientos, herramientas y recursos destinados a la protección del ciberespacio nacional, coordinado por el Consejo Nacional de Ciberseguridad.'
      },
      {
        id: 'art-4',
        number: 'Artículo 4',
        title: 'Estrategia Nacional de Ciberseguridad',
        content: 'El Consejo Nacional de Ciberseguridad elaborará y actualizará periódicamente la Estrategia Nacional de Ciberseguridad, la cual establecerá los objetivos, principios, líneas de acción y medidas necesarias para garantizar la ciberseguridad nacional.'
      }
    ]
  }
];

export const getLawById = (id: string): Law | undefined => {
  return laws.find(law => law.id === id);
};
