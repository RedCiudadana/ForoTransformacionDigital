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
        content: 'La presente Ley tiene por objeto proteger los datos personales de los individuos y garantizar los derechos fundamentales a la privacidad y autodeterminación informativa, relacionada a las actividades de tratamiento de datos personales realizadas por entidades responsables, ya sea públicas o privadas, dentro o fuera del territorio nacional de la República de Guatemala.'
      },
      {
        id: 'art-2',
        number: 'Artículo 2',
        title: 'Ámbito de aplicación',
        content:
          'La presente Ley se aplicará a todo tratamiento total o parcialmente automatizado de datos personales, así como al tratamiento no automatizado de datos personales, contenidos o destinados a ser incluidos en archivos, ficheros, soportes informáticos o electrónicos, bancos, empresas o cualquier otra forma de almacenamiento de información pública o privada en custodia, depósito o administración de las entidades, públicas o privadas, que procesen datos personales de ciudadanos guatemaltecos, dentro o fuera del territorio nacional. Se regirá por lo que establece la Constitución Política de la República de Guatemala y la presente ley.\n' +
          'No están sujetos a las disposiciones de esta ley, los asuntos militares o diplomáticos de seguridad nacional y los datos suministrados por particulares bajo garantía de confidencialidad y las disposiciones del Decreto 57-2008 del Congreso de la República de Guatemala.'
      },
        {
        id: 'art-3',
        number: 'Artículo 3',
        title: 'Sujetos obligados',
        content: 'Es sujeto obligado de la presente ley, toda persona física o jurídica, de naturaleza pública o privada, que, por razón de su oficio, profesión, actividad comercial o institucional, opera el tratamiento de los datos personales de guatemaltecos, dentro o fuera del territorio nacional de la República de Guatemala.'
      },
      {
        id: 'art-4',
        number: 'Artículo 4',
        title: 'Definiciones',
        content:
          'Para los efectos de esta Ley, se entenderá por:\n' +
          '- **Datos personales:** Cualquier información relacionada con una persona física identificada o identificable.\n' +
          '- **Datos sensibles:** Datos personales que revelen origen racial o étnico, estado de salud, información genética, creencias religiosas, opiniones políticas, preferencias sexuales, entre otros.\n' +
          '- **Encargado del tratamiento:** Persona física o jurídica, de naturaleza pública o privada, que trate datos personales por cuenta del responsable del tratamiento.\n' +
          '- **Portabilidad de datos:** Es la capacidad de mover, copiar o transferir datos fácilmente de una base de datos, almacenamiento o entorno informático a otro, y hasta qué punto los datos pueden trasladarse fácilmente entre distintos ordenadores y entornos operativos digitales.\n' +
          '- **Titular de los datos:** Persona física a la que se refieren los datos personales.\n' +
          '- **Tratamiento de datos:** Cualquier operación o conjunto de operaciones realizadas sobre datos personales, ya sea por procedimientos automatizados o no, como la recolección, registro, organización, almacenamiento, conservación, elaboración, modificación, consulta, utilización, comunicación, difusión o supresión.'
      },
      {
        id: 'art-5',
        number: 'Artículo 5',
        title: 'Principios',
        content:
          'Los principios que rigen la interpretación de la presente ley son:\n' +
          '- **Licitud, lealtad y transparencia:** Los datos personales deberán ser tratados de manera lícita, leal y transparente en relación con el titular de los datos.\n' +
          '- **Limitación de la finalidad:** Los datos personales se recogerán con fines determinados, explícitos y legítimos, y no serán tratados ulteriormente de manera incompatible con dichos fines.\n' +
          '- **Minimización de datos:** Los datos personales serán adecuados, pertinentes y limitados a lo necesario en relación con los fines para los que son tratados.\n' +
          '- **Exactitud:** Los datos personales serán exactos y, si fuera necesario, actualizados; se tomarán todas las medidas razonables para que se supriman o rectifiquen sin dilación los datos personales que sean inexactos con respecto a los fines para los que se tratan.\n' +
          '- **Limitación del plazo de conservación:** Los datos personales se mantendrán de forma que se permita la identificación de los interesados durante no más tiempo del necesario para los fines del tratamiento.\n' +
          '- **Integridad y confidencialidad:** Los datos personales serán tratados de manera que se garantice una seguridad adecuada, incluida la protección contra el tratamiento no autorizado o ilícito y contra su pérdida, destrucción o daño accidental, mediante la aplicación de medidas técnicas u organizativas apropiadas.\n' +
          '- **Responsabilidad:** Los responsables del tratamiento y manejo de los datos deberán adoptar medidas proactivas para garantizar el cumplimiento de la normativa de protección de datos y demostrar dicho cumplimiento ante la autoridad competente.'
      },
      {
        id: 'art-6',
        number: 'Artículo 6',
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
