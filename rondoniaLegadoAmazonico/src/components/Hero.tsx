import { Gamepad2, BookOpen, Map, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1724521446460-36a80dc05803?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWF6b24lMjByYWluZm9yZXN0JTIwcml2ZXJ8ZW58MXx8fHwxNzY0MzQ0Njk1fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Floresta Amazônica"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/70 via-green-800/60 to-emerald-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
        <div className="inline-block bg-green-600/30 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-green-400/30">
          <p className="text-green-200">Projeto de Conclusão de Curso - Engenharia da Computação</p>
        </div>
        
        <h1 className="text-6xl md:text-7xl mb-6 text-white drop-shadow-lg">
          Rondônia: Legado Amazônico
        </h1>
        
        <p className="text-2xl md:text-3xl mb-8 text-green-100">
          Jogo Educativo inspirado em Assassin's Creed
        </p>
        
        <p className="text-xl mb-12 text-white/90 max-w-3xl mx-auto">
          Uma experiência em terceira pessoa que leva os jogadores através dos principais eventos históricos 
          que moldaram o estado de Rondônia, desde os povos indígenas originários até a criação 
          do estado moderno. Com mecânicas de exploração, parkour e furtividade inspiradas em Assassin's Creed.
        </p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all">
            <Gamepad2 className="w-12 h-12 mx-auto mb-4 text-green-300" />
            <h3 className="text-white mb-2">Jogabilidade Interativa</h3>
            <p className="text-green-100 text-sm">Mecânicas de jogo envolventes e educativas</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all">
            <BookOpen className="w-12 h-12 mx-auto mb-4 text-green-300" />
            <h3 className="text-white mb-2">Conteúdo Histórico</h3>
            <p className="text-green-100 text-sm">Informações precisas e contextualizadas</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all">
            <Map className="w-12 h-12 mx-auto mb-4 text-green-300" />
            <h3 className="text-white mb-2">Exploração Regional</h3>
            <p className="text-green-100 text-sm">Viaje pelos territórios históricos</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all">
            <Users className="w-12 h-12 mx-auto mb-4 text-green-300" />
            <h3 className="text-white mb-2">Personagens Históricos</h3>
            <p className="text-green-100 text-sm">Conheça figuras importantes da região</p>
          </div>
        </div>
      </div>
    </div>
  );
}
