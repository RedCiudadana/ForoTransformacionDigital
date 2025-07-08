import React from 'react';
import { Mail, Phone, ExternalLink, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Información de Contacto */}
            {/* <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-orange-400" />
                  <span className="text-sm">participacion@congreso.gob.gt</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-orange-400" />
                  <span className="text-sm">+502 2422-0000</span>
                </div>
              </div>
            </div> */}

            {/* Enlaces Útiles */}
            {/* <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces Útiles</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-300 hover:text-orange-400 transition-colors flex items-center space-x-1">
                    <span>Portal del Congreso</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-300 hover:text-orange-400 transition-colors flex items-center space-x-1">
                    <span>Transparencia</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-300 hover:text-orange-400 transition-colors">
                    Política de Privacidad
                  </a>
                </li>
              </ul>
            </div> */}

            {/* Aliados */}
            {/* <div>
              <h3 className="text-lg font-semibold mb-4">Aliados</h3>
              <div className="space-y-2">
                <div className="bg-white rounded p-2 inline-block">
                  <span className="text-xs text-gray-800 font-medium">Red Ciudadana</span>
                </div>

              </div>
            </div> */}

            {/* Redes Sociales */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © 2024 Congreso de la República de Guatemala. Todos los derechos reservados.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Foro Parlamentario de Transformación Digital
            </p>
          </div>
        </div>
      </footer>
      <div>
        <div className="bg-white text-center py-2">
          <p className="text-lg my-6">
            Asociación Civil Red Ciudadana 2025
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;