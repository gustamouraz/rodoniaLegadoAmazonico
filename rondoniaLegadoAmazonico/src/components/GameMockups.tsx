import { useState } from 'react';
import { Play, Settings, Trophy, BookOpen, X, Check, Heart, Crosshair, Map as MapIcon } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import gameplayImage from 'figma:asset/e43ad7ad189b85161f24bc96b2194912bd6a719d.png';

export function GameMockups() {
  const [selectedMockup, setSelectedMockup] = useState<string | null>(null);

  const mockups = [
    {
      id: 'menu',
      title: 'Tela de Menu Principal',
      description: 'Interface inicial do jogo com opções de navegação'
    },
    {
      id: 'gameplay',
      title: 'Tela de Gameplay',
      description: 'Exemplo de jogabilidade durante uma missão histórica'
    },
    {
      id: 'quiz',
      title: 'Tela de Quiz Educativo',
      description: 'Sistema de perguntas e respostas sobre história'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-5xl mb-4 text-white">Mockups das Telas do Jogo</h2>
        <p className="text-xl text-gray-300">Rondônia: Legado Amazônico - Estilo Assassin's Creed</p>
        <p className="text-sm text-green-400 mt-2">Gameplay em terceira pessoa com exploração e ação</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {mockups.map((mockup) => (
          <button
            key={mockup.id}
            onClick={() => setSelectedMockup(mockup.id)}
            className="bg-slate-800 p-6 rounded-2xl border-2 border-slate-700 hover:border-green-500 transition-all hover:scale-105 text-left group"
          >
            <div className="aspect-video bg-slate-700 rounded-lg mb-4 flex items-center justify-center group-hover:bg-slate-600 transition-colors">
              <Play className="text-green-400 w-16 h-16" />
            </div>
            <h3 className="text-xl mb-2 text-white">{mockup.title}</h3>
            <p className="text-sm text-gray-400">{mockup.description}</p>
            <span className="inline-block mt-4 text-green-400 text-sm">Clique para expandir →</span>
          </button>
        ))}
      </div>

      {/* Expanded Mockups */}
      <div className="space-y-8">
        {/* Menu Mockup */}
        <div className={`transition-all duration-500 ${selectedMockup === 'menu' ? 'opacity-100 max-h-[2000px]' : 'opacity-0 max-h-0 overflow-hidden'}`}>
          <MenuMockup onClose={() => setSelectedMockup(null)} />
        </div>

        {/* Gameplay Mockup */}
        <div className={`transition-all duration-500 ${selectedMockup === 'gameplay' ? 'opacity-100 max-h-[2000px]' : 'opacity-0 max-h-0 overflow-hidden'}`}>
          <GameplayMockup onClose={() => setSelectedMockup(null)} />
        </div>

        {/* Quiz Mockup */}
        <div className={`transition-all duration-500 ${selectedMockup === 'quiz' ? 'opacity-100 max-h-[2000px]' : 'opacity-0 max-h-0 overflow-hidden'}`}>
          <QuizMockup onClose={() => setSelectedMockup(null)} />
        </div>
      </div>
    </div>
  );
}

function MenuMockup({ onClose }: { onClose: () => void }) {
  return (
    <div className="bg-gradient-to-br from-green-900 to-emerald-800 p-8 rounded-2xl border-4 border-green-500 relative">
      <button onClick={onClose} className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg">
        <X size={24} />
      </button>
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl mb-4 text-white drop-shadow-lg">Rondônia: Legado Amazônico</h1>
          <p className="text-xl text-green-200">Uma Jornada Pela História</p>
          <p className="text-sm text-emerald-300 mt-2">Inspirado em Assassin's Creed</p>
        </div>

        <div className="space-y-4 max-w-md mx-auto">
          <button className="w-full bg-green-600 hover:bg-green-500 text-white py-4 px-8 rounded-xl flex items-center justify-between group transition-all">
            <span className="text-xl">Novo Jogo</span>
            <Play className="group-hover:translate-x-2 transition-transform" />
          </button>

          <button className="w-full bg-amber-600 hover:bg-amber-500 text-white py-4 px-8 rounded-xl flex items-center justify-between group transition-all">
            <span className="text-xl">Continuar</span>
            <Play className="group-hover:translate-x-2 transition-transform" />
          </button>

          <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 px-8 rounded-xl flex items-center justify-between group transition-all">
            <span className="text-xl">Conquistas</span>
            <Trophy className="group-hover:scale-110 transition-transform" />
          </button>

          <button className="w-full bg-purple-600 hover:bg-purple-500 text-white py-4 px-8 rounded-xl flex items-center justify-between group transition-all">
            <span className="text-xl">Enciclopédia</span>
            <BookOpen className="group-hover:scale-110 transition-transform" />
          </button>

          <button className="w-full bg-slate-600 hover:bg-slate-500 text-white py-4 px-8 rounded-xl flex items-center justify-between group transition-all">
            <span className="text-xl">Configurações</span>
            <Settings className="group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        <div className="mt-8 text-center text-green-200 text-sm">
          <p>Versão 1.0 - TCC Engenharia da Computação</p>
        </div>
      </div>
    </div>
  );
}

function GameplayMockup({ onClose }: { onClose: () => void }) {
  return (
    <div className="bg-black p-8 rounded-2xl border-4 border-green-500 relative">
      <button onClick={onClose} className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg z-50">
        <X size={24} />
      </button>

      <div className="mb-6 text-center">
        <h3 className="text-2xl text-white mb-2">Vista em Terceira Pessoa - Estilo Assassin's Creed</h3>
        <p className="text-green-400">Exploração da Floresta Amazônica durante o Ciclo da Borracha</p>
      </div>

      {/* Gameplay Screen com imagem de terceira pessoa */}
      <div className="relative rounded-xl overflow-hidden aspect-video bg-black">
        <img
          src={gameplayImage}
          alt="Gameplay - Seringueiro coletando látex"
          className="w-full h-full object-cover"
        />

        {/* Legenda explicativa */}
        <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm p-4 rounded-lg border border-amber-600/50 max-w-md">
          <h4 className="text-amber-400 mb-2">Interface do Jogo - Ciclo da Borracha (1895)</h4>
          <p className="text-white text-sm mb-2">
            Sistema de HUD inspirado em Assassin's Creed com elementos históricos autênticos
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
            <div>• Relógio de época</div>
            <div>• Progresso de coleta</div>
            <div>• Sistema de durabilidade</div>
            <div>• Barra de stamina</div>
          </div>
        </div>
      </div>

      {/* Grid com mais exemplos visuais */}
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <div className="relative rounded-lg overflow-hidden aspect-video">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1661792218910-94b817737227?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdW5nbGUlMjBleHBsb3JhdGlvbiUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NjQzNDU1MTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Exploração"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end p-3">
            <p className="text-white text-sm">Exploração da Floresta</p>
          </div>
        </div>

        <div className="relative rounded-lg overflow-hidden aspect-video">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1694977498975-bad101498d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJrb3VyJTIwdXJiYW4lMjBjbGltYmluZ3xlbnwxfHx8fDE3NjQzNDU1MTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Parkour"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end p-3">
            <p className="text-white text-sm">Sistema de Parkour</p>
          </div>
        </div>

        <div className="relative rounded-lg overflow-hidden aspect-video">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758862493310-5e54994adf95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjBnYW1lJTIwY2hhcmFjdGVyfGVufDF8fHx8MTc2NDM0NTUxNXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Personagem"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end p-3">
            <p className="text-white text-sm">Interação com NPCs</p>
          </div>
        </div>
      </div>

      {/* Informação Educativa */}
      <div className="mt-6 bg-gradient-to-r from-amber-900 to-amber-800 p-6 rounded-xl border-2 border-amber-600">
        <h4 className="text-xl mb-3 text-amber-200 flex items-center gap-2">
          💡 Mecânicas Inspiradas em Assassin's Creed
        </h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-amber-100">
          <div>
            <p className="mb-2"><strong>• Exploração Livre:</strong> Navegue pela floresta amazônica em mundo aberto</p>
            <p className="mb-2"><strong>• Parkour Contextualizado:</strong> Escale árvores, atravesse rios, explore aldeias</p>
            <p className="mb-2"><strong>• Sistema de Recursos:</strong> Colete látex, caça, e outros recursos históricos</p>
          </div>
          <div>
            <p className="mb-2"><strong>• Furtividade:</strong> Evite perigos e complete missões discretamente</p>
            <p className="mb-2"><strong>• Visão de Águia:</strong> Sistema de detecção de objetivos e pontos de interesse</p>
            <p className="mb-2"><strong>• HUD Imersivo:</strong> Interface inspirada na época histórica retratada</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuizMockup({ onClose }: { onClose: () => void }) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const correctAnswer = 2;

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setShowResult(true);
  };

  return (
    <div className="bg-gradient-to-br from-indigo-900 to-purple-900 p-8 rounded-2xl border-4 border-purple-500 relative">
      <button onClick={onClose} className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg z-10">
        <X size={24} />
      </button>

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block bg-purple-600 text-white px-6 py-2 rounded-full mb-4">
            Questão 3 de 5
          </div>
          <div className="w-full bg-purple-800 rounded-full h-2 mb-6">
            <div className="bg-green-500 h-2 rounded-full w-3/5"></div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-6">
          <h3 className="text-2xl mb-6 text-gray-900">
            Em que ano o Território Federal do Guaporé foi criado?
          </h3>

          <div className="space-y-3">
            {[
              { text: 'A) 1912', index: 0 },
              { text: 'B) 1934', index: 1 },
              { text: 'C) 1943', index: 2 },
              { text: 'D) 1956', index: 3 },
            ].map((option) => {
              const isSelected = selectedAnswer === option.index;
              const isCorrect = option.index === correctAnswer;
              const showCorrect = showResult && isCorrect;
              const showWrong = showResult && isSelected && !isCorrect;

              return (
                <button
                  key={option.index}
                  onClick={() => !showResult && handleAnswer(option.index)}
                  disabled={showResult}
                  className={`w-full p-4 rounded-xl text-left transition-all border-2 flex items-center justify-between ${
                    showCorrect
                      ? 'bg-green-100 border-green-500'
                      : showWrong
                      ? 'bg-red-100 border-red-500'
                      : isSelected
                      ? 'bg-purple-100 border-purple-500'
                      : 'bg-gray-100 border-gray-300 hover:border-purple-400 hover:bg-purple-50'
                  } ${showResult ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <span className={`text-lg ${showCorrect || showWrong ? '' : 'text-gray-800'}`}>
                    {option.text}
                  </span>
                  {showCorrect && <Check className="text-green-600 w-6 h-6" />}
                  {showWrong && <X className="text-red-600 w-6 h-6" />}
                </button>
              );
            })}
          </div>
        </div>

        {showResult && (
          <div className={`p-6 rounded-xl ${selectedAnswer === correctAnswer ? 'bg-green-600' : 'bg-red-600'} text-white`}>
            <h4 className="text-2xl mb-3">
              {selectedAnswer === correctAnswer ? '🎉 Correto!' : '❌ Resposta Incorreta'}
            </h4>
            <p className="mb-4">
              O Território Federal do Guaporé foi criado em 1943 pelo presidente Getúlio Vargas, 
              durante o Estado Novo, separando áreas do Amazonas e Mato Grosso.
            </p>
            <button className="bg-white text-purple-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Próxima Questão →
            </button>
          </div>
        )}

        <div className="mt-6 text-center">
          <div className="inline-flex gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            <div className="w-3 h-3 rounded-full bg-gray-500"></div>
            <div className="w-3 h-3 rounded-full bg-gray-500"></div>
          </div>
          <p className="text-white text-sm mt-2">Pontuação atual: 200 pontos</p>
        </div>
      </div>
    </div>
  );
}
