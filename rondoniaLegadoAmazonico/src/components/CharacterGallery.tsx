import { ImageWithFallback } from './figma/ImageWithFallback';
import { User, MapPin, Calendar } from 'lucide-react';

export function CharacterGallery() {
  const characters = [
    {
      name: 'Cacique Indígena',
      period: 'Período Pré-Colonial',
      description: 'Líder dos povos originários que habitavam a região. Representa a sabedoria ancestral e o conhecimento profundo da floresta.',
      image: 'https://images.unsplash.com/photo-1724521260101-c13e61992638?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXRpdmUlMjBpbmRpZ2Vub3VzJTIwcGVyc29ufGVufDF8fHx8MTc2NDM0NDkyOXww&ixlib=rb-4.1.0&q=80&w=1080',
      skills: ['Caça e Pesca', 'Conhecimento da Floresta', 'Medicina Natural'],
      color: 'border-orange-500'
    },
    {
      name: 'Bandeirante Explorador',
      period: 'Século XVIII',
      description: 'Desbravador português que explorava os sertões em busca de riquezas e expansão territorial.',
      image: 'https://images.unsplash.com/photo-1578402025141-6c4eccd29e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleHBsb3JlciUyMGhpc3RvcmljYWx8ZW58MXx8fHwxNzY0MzQ0OTI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      skills: ['Navegação', 'Cartografia', 'Sobrevivência'],
      color: 'border-blue-500'
    },
    {
      name: 'Seringueiro',
      period: 'Ciclo da Borracha (1877-1912)',
      description: 'Trabalhador nordestino que migrou para a Amazônia durante o boom da borracha. Enfrentou condições difíceis nos seringais.',
      image: 'https://images.unsplash.com/photo-1724928969834-838ecb477d3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydWJiZXIlMjB3b3JrZXIlMjB2aW50YWdlfGVufDF8fHx8MTc2NDM0NDkyOXww&ixlib=rb-4.1.0&q=80&w=1080',
      skills: ['Extração de Látex', 'Resistência', 'Trabalho em Equipe'],
      color: 'border-green-500'
    },
    {
      name: 'Colonizador',
      period: 'Década de 1970',
      description: 'Migrante que chegou a Rondônia durante os projetos de colonização, buscando uma nova vida e oportunidades.',
      image: 'https://images.unsplash.com/photo-1489514354504-1653aa90e34e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjBicmF6aWx8ZW58MXx8fHwxNzY0MzQ0OTI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      skills: ['Agricultura', 'Construção', 'Adaptação'],
      color: 'border-purple-500'
    },
  ];

  const scenarios = [
    {
      name: 'Aldeia Indígena',
      description: 'Vila dos povos originários cercada pela floresta amazônica, com ocas tradicionais.',
      icon: '🏠',
      color: 'bg-orange-100 border-orange-400'
    },
    {
      name: 'Forte Príncipe da Beira',
      description: 'Fortificação militar portuguesa às margens do Rio Guaporé.',
      icon: '🏰',
      color: 'bg-blue-100 border-blue-400'
    },
    {
      name: 'Seringal',
      description: 'Área de extração de látex no meio da floresta durante o ciclo da borracha.',
      icon: '🌳',
      color: 'bg-green-100 border-green-400'
    },
    {
      name: 'Estrada BR-364',
      description: 'Rodovia que conectou Rondônia ao resto do Brasil durante a colonização.',
      icon: '🛣️',
      color: 'bg-yellow-100 border-yellow-400'
    },
    {
      name: 'Porto Velho',
      description: 'Capital do estado, às margens do Rio Madeira.',
      icon: '🏙️',
      color: 'bg-purple-100 border-purple-400'
    },
    {
      name: 'Rio Madeira',
      description: 'Principal rio da região, importante via de transporte e comércio.',
      icon: '🌊',
      color: 'bg-cyan-100 border-cyan-400'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Personagens */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-5xl mb-4 text-green-900">Personagens Históricos</h2>
          <p className="text-xl text-gray-700">Conheça os protagonistas de cada período da história</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {characters.map((character, index) => (
            <div key={index} className={`bg-white rounded-2xl overflow-hidden shadow-xl border-l-8 ${character.color} hover:scale-105 transition-transform`}>
              <div className="aspect-video overflow-hidden bg-gray-200">
                <ImageWithFallback
                  src={character.image}
                  alt={character.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <User className="text-gray-600 w-5 h-5" />
                  <h3 className="text-2xl text-gray-900">{character.name}</h3>
                </div>
                <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>{character.period}</span>
                </div>
                <p className="text-gray-700 mb-4">{character.description}</p>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Habilidades no Jogo:</p>
                  <div className="flex flex-wrap gap-2">
                    {character.skills.map((skill, idx) => (
                      <span key={idx} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cenários */}
      <div>
        <div className="text-center mb-12">
          <h2 className="text-5xl mb-4 text-green-900">Cenários do Jogo</h2>
          <p className="text-xl text-gray-700">Locais históricos que os jogadores explorarão</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {scenarios.map((scenario, index) => (
            <div key={index} className={`${scenario.color} border-2 rounded-xl p-6 hover:shadow-lg transition-all`}>
              <div className="text-5xl mb-4 text-center">{scenario.icon}</div>
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="text-gray-700 w-5 h-5" />
                <h3 className="text-xl text-gray-900">{scenario.name}</h3>
              </div>
              <p className="text-gray-700 text-sm">{scenario.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-2xl">
          <h3 className="text-2xl mb-4 text-center">Sistema de Progressão</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-4xl mb-2">🎮</div>
              <p className="text-sm">Jogue como diferentes personagens</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🗺️</div>
              <p className="text-sm">Desbloqueie novos cenários</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">⭐</div>
              <p className="text-sm">Ganhe conquistas históricas</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">📖</div>
              <p className="text-sm">Complete a enciclopédia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
