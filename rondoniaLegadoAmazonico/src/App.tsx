import { useState } from 'react';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { GameMockups } from './components/GameMockups';
import { CharacterGallery } from './components/CharacterGallery';
import { EducationalObjectives } from './components/EducationalObjectives';
import { Navigation } from './components/Navigation';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-emerald-900">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <div id="hero" className="min-h-screen">
        <Hero />
      </div>
      
      <div id="timeline" className="min-h-screen bg-amber-50 py-20">
        <Timeline />
      </div>
      
      <div id="mockups" className="min-h-screen bg-slate-900 py-20">
        <GameMockups />
      </div>
      
      <div id="characters" className="min-h-screen bg-green-50 py-20">
        <CharacterGallery />
      </div>
      
      <div id="objectives" className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900 py-20">
        <EducationalObjectives />
      </div>
      
      <footer className="bg-black/40 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>Projeto de Conclusão de Curso - Engenharia da Computação</p>
          <p className="text-sm mt-2 text-green-200">Jogo Educativo sobre a História de Rondônia</p>
        </div>
      </footer>
    </div>
  );
}
