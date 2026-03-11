import { COMPANY } from '../data/constants';

import aristonLogo from '../assets/aristonlogo.webp';
import baxiLogo from '../assets/baxilogo.webp';
import caldaiaLogo from '../assets/caldaialogo.webp';
import eutermaLogo from '../assets/eutermalogo.webp';
import ferroliLogo from '../assets/ferroli.png';
import oceanLogo from '../assets/Ocean.jpg';
import peisaLogo from '../assets/peisalogo.webp';
import rocaLogo from '../assets/Roca-Logo.jpg';

const BRAND_LOGOS = [
  { name: 'Ariston', logo: aristonLogo },
  { name: 'Baxi', logo: baxiLogo },
  { name: 'Caldaia', logo: caldaiaLogo },
  { name: 'Euterma', logo: eutermaLogo },
  { name: 'Ferroli', logo: ferroliLogo },
  { name: 'Ocean', logo: oceanLogo },
  { name: 'Peisa', logo: peisaLogo },
  { name: 'Roca', logo: rocaLogo },
];

export default function Brands() {
  const duplicatedBrands = [...BRAND_LOGOS, ...BRAND_LOGOS];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-primary-600 font-semibold mb-3 tracking-wide uppercase">
            Compatibilidad
          </p>
          <h2 className="section-title mb-4">
            Equipos con los que trabajamos
          </h2>
          <p className="section-subtitle mx-auto">
            Brindamos servicio técnico para calderas y sistemas de calefacción de diversas marcas del mercado.
          </p>
        </div>

        {/* Animated brand carousel */}
        <div className="relative mb-12">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling container */}
          <div className="flex animate-scroll items-center">
            {duplicatedBrands.map((brand, index) => (
              <div 
                key={index}
                className="flex-shrink-0 mx-4"
              >
                <div className="bg-gray-50 hover:bg-primary-50 rounded-xl px-6 py-4 min-w-[160px] h-24 flex items-center justify-center transition-all duration-300 group cursor-default border border-transparent hover:border-primary-200">
                  <img 
                    src={brand.logo} 
                    alt={`Logo ${brand.name}`}
                    className="max-h-14 max-w-[120px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-amber-900 mb-1">Aviso importante</h4>
                <p className="text-amber-800 text-sm leading-relaxed">
                  Trabajamos con equipos de distintas marcas del mercado para tareas de diagnóstico, mantenimiento y reparación técnica. 
                  <strong> {COMPANY.name} es un servicio técnico independiente</strong> y no representa ni está afiliado a ninguno de los fabricantes mencionados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
