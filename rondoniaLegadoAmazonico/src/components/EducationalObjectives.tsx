import { Brain, Target, BookOpen, Users, Lightbulb, Award } from 'lucide-react';

export function EducationalObjectives() {
  const objectives = [
    {
      icon: Brain,
      title: 'Aprendizado Contextualizado',
      description: 'Compreender os eventos históricos de Rondônia dentro de seus contextos sociais, econômicos e culturais.',
      color: 'bg-blue-500'
    },
    {
      icon: Target,
      title: 'Pensamento Crítico',
      description: 'Desenvolver análise crítica sobre os impactos das diferentes fases históricas na formação da identidade regional.',
      color: 'bg-purple-500'
    },
    {
      icon: Users,
      title: 'Valorização Cultural',
      description: 'Reconhecer e respeitar a diversidade cultural dos povos que contribuíram para a história de Rondônia.',
      color: 'bg-green-500'
    },
    {
      icon: Lightbulb,
      title: 'Conexão Presente-Passado',
      description: 'Estabelecer relações entre os acontecimentos históricos e a realidade atual do estado.',
      color: 'bg-yellow-500'
    },
  ];

  const pedagogicalResources = [
    {
      category: 'Narrativa Imersiva',
      items: [
        'História contada através de missões e desafios',
        'Diálogos com personagens históricos',
        'Recriação de ambientes da época',
        'Trilha sonora contextualizada'
      ]
    },
    {
      category: 'Gamificação',
      items: [
        'Sistema de pontos e recompensas',
        'Níveis progressivos de dificuldade',
        'Conquistas e badges educativos',
        'Ranking de conhecimento histórico'
      ]
    },
    {
      category: 'Conteúdo Educativo',
      items: [
        'Enciclopédia interativa desbloqueável',
        'Quiz após cada período histórico',
        'Documentos e mapas históricos',
        'Linha do tempo interativa'
      ]
    },
  ];

  const targetAudience = [
    {
      group: 'Estudantes',
      age: '10-18 anos',
      description: 'Ensino fundamental e médio, como material complementar às aulas de história regional.',
      icon: '📚'
    },
    {
      group: 'Educadores',
      age: 'Professores',
      description: 'Ferramenta pedagógica para tornar o ensino de história mais engajador e interativo.',
      icon: '👨‍🏫'
    },
    {
      group: 'Público Geral',
      age: 'Todas as idades',
      description: 'Qualquer pessoa interessada em conhecer a história de Rondônia de forma lúdica.',
      icon: '🎮'
    },
  ];

  const technologies = [
    { name: 'Unity / Godot', purpose: 'Engine de desenvolvimento do jogo' },
    { name: 'C# / GDScript', purpose: 'Linguagens de programação' },
    { name: 'Blender', purpose: 'Modelagem 3D de personagens e cenários' },
    { name: 'PostgreSQL', purpose: 'Banco de dados para progresso dos jogadores' },
    { name: 'Git', purpose: 'Controle de versão' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Objetivos Pedagógicos */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl mb-4 text-white">Objetivos Pedagógicos</h2>
          <p className="text-xl text-blue-200">Competências e habilidades desenvolvidas através do jogo</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {objectives.map((objective, index) => {
            const Icon = objective.icon;
            return (
              <div key={index} className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all">
                <div className="flex items-start gap-4">
                  <div className={`${objective.color} p-3 rounded-lg`}>
                    <Icon className="text-white w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl mb-2 text-white">{objective.title}</h3>
                    <p className="text-blue-100">{objective.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recursos Pedagógicos */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 text-white">Recursos Pedagógicos</h2>
          <p className="text-xl text-blue-200">Estratégias educacionais integradas ao jogo</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pedagogicalResources.map((resource, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-xl">
              <h3 className="text-2xl mb-4 text-indigo-900">{resource.category}</h3>
              <ul className="space-y-3">
                {resource.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Público-Alvo */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 text-white">Público-Alvo</h2>
          <p className="text-xl text-blue-200">Quem pode se beneficiar deste jogo educativo</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {targetAudience.map((audience, index) => (
            <div key={index} className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md p-6 rounded-xl border border-white/30">
              <div className="text-5xl mb-4 text-center">{audience.icon}</div>
              <h3 className="text-2xl mb-2 text-white text-center">{audience.group}</h3>
              <p className="text-blue-200 text-center mb-4">{audience.age}</p>
              <p className="text-white/90 text-sm text-center">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tecnologias */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 text-white">Tecnologias Propostas</h2>
          <p className="text-xl text-blue-200">Stack tecnológico para desenvolvimento</p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
          <div className="grid md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="flex items-center gap-4 bg-white/5 p-4 rounded-lg">
                <div className="bg-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">{'</>'}</span>
                </div>
                <div>
                  <h4 className="text-white mb-1">{tech.name}</h4>
                  <p className="text-sm text-blue-200">{tech.purpose}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resultados Esperados */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8">
        <div className="text-center mb-8">
          <Award className="w-16 h-16 text-white mx-auto mb-4" />
          <h2 className="text-4xl mb-4 text-white">Resultados Esperados</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
            <h3 className="text-xl mb-3 text-white">Para os Estudantes</h3>
            <ul className="space-y-2 text-white/90">
              <li>• Maior interesse pela história regional</li>
              <li>• Melhor compreensão dos eventos históricos</li>
              <li>• Desenvolvimento de senso crítico</li>
              <li>• Valorização da identidade cultural</li>
            </ul>
          </div>

          <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
            <h3 className="text-xl mb-3 text-white">Para a Educação</h3>
            <ul className="space-y-2 text-white/90">
              <li>• Ferramenta pedagógica inovadora</li>
              <li>• Engajamento dos alunos</li>
              <li>• Material complementar interativo</li>
              <li>• Preservação da memória histórica</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Conclusão do Projeto */}
      <div className="mt-16 text-center">
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
          <BookOpen className="w-16 h-16 text-white mx-auto mb-4" />
          <h3 className="text-3xl mb-4 text-white">Contribuição Acadêmica</h3>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-6">
            Este projeto de TCC visa demonstrar como a tecnologia pode ser aplicada de forma criativa 
            à educação, unindo desenvolvimento de games, história regional e pedagogia.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-green-500 text-white px-4 py-2 rounded-full">Inovação</span>
            <span className="bg-blue-500 text-white px-4 py-2 rounded-full">Educação</span>
            <span className="bg-purple-500 text-white px-4 py-2 rounded-full">Tecnologia</span>
            <span className="bg-yellow-500 text-white px-4 py-2 rounded-full">Cultura</span>
          </div>
        </div>
      </div>
    </div>
  );
}
