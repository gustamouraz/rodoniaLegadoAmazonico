import { Calendar, MapPin, Users, Landmark, Flag } from 'lucide-react';

export function Timeline() {
  const events = [
    {
      year: 'Pré-Colonial',
      title: 'Povos Indígenas Originários',
      description: 'O território era habitado por diversos povos indígenas como os Tupari, Mondé, Suruí, Gavião, Arara, Karitiana e outros grupos.',
      icon: Users,
      color: 'bg-orange-500',
      level: 1
    },
    {
      year: '1700s',
      title: 'Expedições Portuguesas',
      description: 'Início das expedições portuguesas pela região amazônica, em busca de drogas do sertão e expansão territorial.',
      icon: MapPin,
      color: 'bg-blue-500',
      level: 2
    },
    {
      year: '1734',
      title: 'Forte Príncipe da Beira',
      description: 'Construção do Forte Príncipe da Beira às margens do Rio Guaporé para defender o território português.',
      icon: Landmark,
      color: 'bg-purple-500',
      level: 3
    },
    {
      year: '1877-1912',
      title: 'Ciclo da Borracha',
      description: 'Grande fluxo migratório devido ao ciclo da borracha. Nordestinos chegam à região em busca de riquezas.',
      icon: Calendar,
      color: 'bg-green-600',
      level: 4
    },
    {
      year: '1943',
      title: 'Território Federal do Guaporé',
      description: 'Criação do Território Federal do Guaporé pelo presidente Getúlio Vargas, separado do estado do Amazonas e Mato Grosso.',
      icon: Flag,
      color: 'bg-yellow-600',
      level: 5
    },
    {
      year: '1956',
      title: 'Renomeação para Rondônia',
      description: 'O território é renomeado para Rondônia em homenagem ao Marechal Cândido Rondon, explorador da região.',
      icon: MapPin,
      color: 'bg-red-500',
      level: 6
    },
    {
      year: '1960s-70s',
      title: 'Projetos de Colonização',
      description: 'Grandes projetos de colonização atraem migrantes de todo o Brasil. Construção da BR-364 conecta a região ao resto do país.',
      icon: Users,
      color: 'bg-indigo-500',
      level: 7
    },
    {
      year: '1981',
      title: 'Criação do Estado',
      description: 'Rondônia é elevado à categoria de estado da federação, com Porto Velho como capital.',
      icon: Flag,
      color: 'bg-emerald-600',
      level: 8
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-5xl mb-4 text-green-900">Linha do Tempo Histórica</h2>
        <p className="text-xl text-gray-700">Principais eventos que moldaram a história de Rondônia</p>
        <p className="text-sm text-amber-700 mt-4 bg-amber-100 inline-block px-6 py-2 rounded-full">
          Cada período histórico representa um nível do jogo
        </p>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-300 via-green-400 to-emerald-600 hidden md:block"></div>

        {/* Events */}
        <div className="space-y-12">
          {events.map((event, index) => {
            const Icon = event.icon;
            const isLeft = index % 2 === 0;

            return (
              <div key={index} className="relative">
                {/* Desktop Layout */}
                <div className="hidden md:flex items-center justify-center">
                  <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'order-2 text-left pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all border-l-4" style={{ borderColor: event.color.replace('bg-', '') }}>
                      <div className="flex items-center gap-3 mb-3" style={{ justifyContent: isLeft ? 'flex-end' : 'flex-start' }}>
                        <span className={`${event.color} text-white px-4 py-1 rounded-full text-sm`}>
                          Nível {event.level}
                        </span>
                        <span className="text-sm text-gray-500">{event.year}</span>
                      </div>
                      <h3 className="text-2xl mb-3 text-gray-900">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className={`${event.color} w-16 h-16 rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10`}>
                    <Icon className="text-white" size={28} />
                  </div>

                  <div className={`w-5/12 ${isLeft ? 'order-2' : ''}`}></div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden">
                  <div className="flex gap-4">
                    <div className={`${event.color} w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0`}>
                      <Icon className="text-white" size={20} />
                    </div>
                    <div className="flex-1 bg-white p-4 rounded-xl shadow-lg border-l-4" style={{ borderColor: event.color.replace('bg-', '') }}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`${event.color} text-white px-3 py-1 rounded-full text-xs`}>
                          Nível {event.level}
                        </span>
                        <span className="text-xs text-gray-500">{event.year}</span>
                      </div>
                      <h3 className="text-lg mb-2 text-gray-900">{event.title}</h3>
                      <p className="text-sm text-gray-600">{event.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-16 bg-green-100 p-8 rounded-2xl border-2 border-green-300">
        <h3 className="text-2xl mb-4 text-green-900 text-center">Como funciona no jogo?</h3>
        <p className="text-center text-gray-700 mb-4">
          Os jogadores progridem pela história de Rondônia completando missões e desafios em cada período histórico. 
          Cada nível apresenta mecânicas de jogo únicas relacionadas ao contexto da época.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="text-3xl mb-2">🎯</div>
            <p className="text-sm text-gray-700">Missões históricas contextualizadas</p>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="text-3xl mb-2">📚</div>
            <p className="text-sm text-gray-700">Aprenda enquanto joga</p>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="text-3xl mb-2">🏆</div>
            <p className="text-sm text-gray-700">Conquistas e recompensas</p>
          </div>
        </div>
      </div>
    </div>
  );
}
