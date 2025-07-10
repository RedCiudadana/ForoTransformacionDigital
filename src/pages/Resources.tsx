import React from 'react';
import { Play, Download, ExternalLink, BookOpen, Video, FileText, Users } from 'lucide-react';

const Resources = () => {
  const videoResources = [
    {
      title: 'Introducción a las Leyes de Transformación Digital',
      description: 'Conoce los fundamentos y objetivos de las tres iniciativas legislativas',
      duration: '15:30',
      thumbnail: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop',
      videoId: 'dQw4w9WgXcQ'
    },
    {
      title: 'Protección de Infraestructuras Críticas Explicada',
      description: 'Comprende la importancia de proteger nuestras infraestructuras esenciales',
      duration: '12:45',
      thumbnail: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop',
      videoId: 'dQw4w9WgXcQ'
    },
    {
      title: 'Derechos Digitales y Protección de Datos',
      description: 'Aprende sobre tus derechos en el mundo digital',
      duration: '18:20',
      thumbnail: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop',
      videoId: 'dQw4w9WgXcQ'
    },
    {
      title: 'Ciberseguridad: Conceptos Básicos',
      description: 'Fundamentos de la seguridad en el ciberespacio',
      duration: '14:15',
      thumbnail: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop',
      videoId: 'dQw4w9WgXcQ'
    }
  ];

  const documents = [
    {
      title: 'Guía de Participación Ciudadana',
      description: 'Tutorial completo sobre cómo participar en el proceso',
      type: 'PDF',
      size: '2.3 MB',
      icon: FileText,
      url: '/docs/guia-participacion.pdf'
    },
    {
      title: 'Glosario de Términos Técnicos',
      description: 'Definiciones de conceptos clave en lenguaje sencillo',
      type: 'PDF',
      size: '1.8 MB',
      icon: BookOpen,
      url: '/docs/glosario-tecnico.pdf'
    },
    {
      title: 'Comparativo Internacional',
      description: 'Análisis de leyes similares en otros países',
      type: 'PDF',
      size: '4.1 MB',
      icon: FileText,
      url: '/docs/comparativo-internacional.pdf'
    },
    {
      title: 'Impacto Sectorial de las Leyes',
      description: 'Análisis del impacto en diferentes sectores económicos',
      type: 'PDF',
      size: '3.2 MB',
      icon: FileText,
      url: '/docs/impacto-sectorial.pdf'
    }
  ];

  const infographics = [
    {
      title: 'Infraestructuras Críticas en Guatemala',
      description: 'Mapa visual de nuestras infraestructuras esenciales',
      image: 'https://images.pexels.com/photos/159045/the-interior-of-the-repair-interior-of-the-workshop-159045.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      title: 'Flujo de Datos Personales',
      description: 'Cómo se manejan tus datos en el ecosistema digital',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      title: 'Amenazas Cibernéticas Comunes',
      description: 'Principales riesgos en el ciberespacio',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ];

  const expertContributions = [
    {
      name: 'Dr. Roberto Cifuentes',
      role: 'Experto en Ciberseguridad',
      institution: 'Universidad de San Carlos',
      contribution: 'Análisis técnico de la propuesta de ciberseguridad nacional',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Lic. María Fernanda López',
      role: 'Especialista en Protección de Datos',
      institution: 'Asociación de Privacidad GT',
      contribution: 'Revisión de la ley de protección de datos personales',
      avatar: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Ing. Carlos Herrera',
      role: 'Consultor en Infraestructura',
      institution: 'Cámara de Industria',
      contribution: 'Análisis de impacto en infraestructuras críticas',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <BookOpen className="h-8 w-8 text-green-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Recursos Educativos
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Accede a videos, documentos e infografías para entender mejor las propuestas legislativas
        </p>
      </div>

      {/* Video Resources */}
      <section className="mb-16">
        <div className="flex items-center mb-8">
          <Video className="h-6 w-6 text-red-600 mr-3" />
          <h2 className="text-2xl font-bold text-gray-900">Videos Educativos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videoResources.map((video, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <button className="bg-white bg-opacity-90 rounded-full p-4 hover:bg-opacity-100 transition-all">
                    <Play className="h-6 w-6 text-gray-900 ml-1" />
                  </button>
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Documents */}
      <section className="mb-16">
        <div className="flex items-center mb-8">
          <FileText className="h-6 w-6 text-blue-600 mr-3" />
          <h2 className="text-2xl font-bold text-gray-900">Documentos de Apoyo</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {documents.map((doc, index) => {
            const IconComponent = doc.icon;
            
            return (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {doc.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {doc.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="mr-2">{doc.type}</span>
                        <span>•</span>
                        <span className="ml-2">{doc.size}</span>
                      </div>
                      <a
                        href={doc.url}
                        className="inline-flex items-center text-blue-600 hover:text-white text-sm font-medium"
                      >
                        <Download className="h-4 w-4 mr-1" />
                        Descargar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Infographics */}
      <section className="mb-16">
        <div className="flex items-center mb-8">
          <FileText className="h-6 w-6 text-green-600 mr-3" />
          <h2 className="text-2xl font-bold text-gray-900">Infografías</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {infographics.map((infographic, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                src={infographic.image}
                alt={infographic.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {infographic.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {infographic.description}
                </p>
                <button className="text-blue-600 hover:text-white text-sm font-medium">
                  Ver infografía completa
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expert Contributions */}
      <section className="mb-16">
        <div className="flex items-center mb-8">
          <Users className="h-6 w-6 text-purple-600 mr-3" />
          <h2 className="text-2xl font-bold text-gray-900">Aportes de Expertos</h2>
        </div>

        <div className="space-y-6">
          {expertContributions.map((expert, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-start">
                <img
                  src={expert.avatar}
                  alt={expert.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {expert.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-1">
                    {expert.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-3">
                    {expert.institution}
                  </p>
                  <p className="text-gray-700">
                    {expert.contribution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">
          ¿Necesitas más información?
        </h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Si no encuentras la información que buscas, o tienes preguntas específicas sobre las propuestas legislativas, no dudes en contactarnos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/faq"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Ver Preguntas Frecuentes
          </a>
          <a
            href="mailto:participacion@congreso.gob.gt"
            className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium inline-flex items-center"
          >
            Contactar equipo técnico
            <ExternalLink className="h-4 w-4 ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Resources;