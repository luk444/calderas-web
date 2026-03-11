import { COVERAGE, COMPANY } from '../data/constants';

const colorMap = {
  primary: {
    bg: 'bg-primary-50',
    border: 'border-primary-200',
    icon: 'bg-primary-600',
    text: 'text-primary-600',
  },
  green: {
    bg: 'bg-green-50',
    border: 'border-green-200',
    icon: 'bg-green-600',
    text: 'text-green-600',
  },
  orange: {
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    icon: 'bg-orange-600',
    text: 'text-orange-600',
  },
  purple: {
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    icon: 'bg-purple-600',
    text: 'text-purple-600',
  },
};

export default function Coverage() {
  return (
    <section id="cobertura" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-primary-400 font-semibold mb-3 tracking-wide uppercase">
            Zona de Servicio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cobertura de {COMPANY.name}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Brindamos servicio técnico a domicilio en Capital Federal y Gran Buenos Aires
          </p>
        </div>

        {/* Coverage grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COVERAGE.map((zone, index) => {
            const colors = colorMap[zone.color];
            
            return (
              <div 
                key={index}
                className="bg-gray-800/50 backdrop-blur rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-colors"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 ${colors.icon} rounded-lg flex items-center justify-center`}>
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">{zone.zone}</h3>
                </div>
                
                {/* Areas */}
                <div className="flex flex-wrap gap-2">
                  {zone.areas.map((area, i) => (
                    <span 
                      key={i}
                      className="text-sm text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            ¿No encontrás tu zona? Consultanos de todas formas, podemos coordinar una visita.
          </p>
          <a 
            href="#contacto"
            className="btn-primary inline-flex"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Consultar disponibilidad
          </a>
        </div>
      </div>
    </section>
  );
}
